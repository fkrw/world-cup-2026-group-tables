import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync("outputs/world-cup-2026-groups.html", "utf8");
const script = html.match(/<script>([\s\S]*)<\/script>/)?.[1];
if (!script) throw new Error("script block not found");

function element(tag = "div") {
  return {
    tag,
    value: tag === "select" ? "all" : "",
    files: [],
    dataset: {},
    style: {},
    className: "",
    textContent: "",
    innerHTML: "",
    classList: { toggle() {} },
    addEventListener() {},
    append() {},
    remove() {},
    click() {},
    insertAdjacentHTML() {}
  };
}

const elements = {
  groups: element(),
  groupFilter: element("select"),
  thirdTable: element("tbody"),
  status: element("p"),
  importFile: element("input"),
  clearGroup: element("button"),
  clearAll: element("button"),
  exportData: element("button"),
  importData: element("button")
};

const localStorageData = {
  "wc2026-simple-tables-v1": JSON.stringify({
    "A:Mexico:South Africa": { home: "1", away: "0" }
  })
};

const context = {
  console,
  Blob: class Blob {
    constructor(parts, options) {
      this.parts = parts;
      this.options = options;
    }
  },
  CSS: { escape: value => String(value).replaceAll('"', '\\"') },
  URL: {
    createObjectURL() { return "blob:test"; },
    revokeObjectURL() {}
  },
  document: {
    body: element("body"),
    addEventListener() {},
    createElement: tag => element(tag),
    querySelector(selector) {
      const byId = selector.match(/^#([\w-]+)$/)?.[1];
      return byId ? elements[byId] : null;
    },
    querySelectorAll() {
      return [];
    }
  },
  localStorage: {
    getItem(key) {
      return localStorageData[key] ?? null;
    },
    setItem(key, value) {
      localStorageData[key] = value;
    }
  }
};

vm.createContext(context);

const test = `
const incoming = normalizedState({
  results: {
    "A:South Korea:Czechia": { home: "2", away: "2" },
    "Z:Fake:Match": { home: "9", away: "9" }
  }
});
if (!incoming || Object.keys(incoming).length !== 1) throw new Error("import normalization failed");
Object.assign(state, incoming);
save();
const saved = JSON.parse(localStorage.getItem(storageKey));
if (saved["A:Mexico:South Africa"].home !== "1") throw new Error("existing data was removed");
if (saved["A:South Korea:Czechia"].away !== "2") throw new Error("new data was not imported");
if (saved["Z:Fake:Match"]) throw new Error("invalid match key was imported");
exportData();
if (document.querySelector("#status").textContent !== "JSONを書き出しました。") throw new Error("export status missing");
`;

vm.runInContext(`${script}\n${test}`, context);
console.log("JSON export/import behavior ok");
