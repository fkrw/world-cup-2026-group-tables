# World Cup 2026 Group Tables (星取り表)

2026年 FIFAワールドカップのグループリーグおよび決勝トーナメントの進行をシミュレーション・管理できるWebアプリケーションです。

## 特徴
- **グループリーグ計算**: 全12グループの試合スコアを入力することで、勝ち点、得失点差などを自動計算し、順位表をリアルタイム更新。
- **3位通過の比較**: 複雑なフォーマットとなる「各グループ3位チームのうち、成績上位8チームの選出」を自動で比較・表示。
- **決勝トーナメントツリー**: ラウンド32（Round of 32）以降の決勝トーナメント表（ブラケット）を可視化。グループリーグの成績をもとに自動で進出チームが割り当てられ、トーナメントのスコア入力・勝者の自動進行に対応。
- **データの自動保存**: 入力したスコアはブラウザのローカルストレージ（LocalStorage）に自動保存されるため、リロードしてもデータは消えません。
- **JSONエクスポート/インポート**: 現在のスコアデータをJSON形式でファイルに書き出したり、外部から読み込んだりできます。

## 使い方
1. ブラウザで `index.html` を開きます（あるいは GitHub Pages のURLにアクセスします）。
2. グループリーグの各試合の「得点」と「失点」を入力します。
3. グループの全試合結果が埋まると、3位比較表および決勝トーナメント表に自動で反映されます。
4. 決勝トーナメントのスコアを入力すると、次のラウンドへ勝者が自動的に進出します。

## 技術スタック
- HTML5
- CSS3 (Vanilla)
- JavaScript (Vanilla, 依存ライブラリなし)

---

# World Cup 2026 Group Tables

A web application to simulate and manage the progression of the 2026 FIFA World Cup, covering both the group stage and the knockout stage.

## Features
- **Group Stage Calculator**: Input match scores for all 12 groups to automatically calculate points, goal differences, and instantly update the standings.
- **3rd Place Comparison**: Automatically determines and compares the top 8 third-placed teams across all groups based on the complex tournament format.
- **Knockout Stage Bracket**: Visualizes the Round of 32 and beyond. Advancing teams from the group stage are automatically slotted into the correct bracket, and you can input scores to progress winners to the next rounds.
- **Auto-Save**: All entered scores are automatically saved to your browser's `localStorage`. You won't lose your data when you refresh or close the page.
- **JSON Export / Import**: You can export your current tournament data as a JSON file, or import a previously saved file to restore or share your predictions.

## Usage
1. Open `index.html` in your web browser (or visit the GitHub Pages URL).
2. Enter the goals scored for each match in the group stage.
3. Once all group matches are filled out, the 3rd place comparison table and knockout bracket will automatically populate.
4. Enter the scores in the knockout stage bracket to advance the winning teams automatically.

## Tech Stack
- HTML5
- CSS3 (Vanilla)
- JavaScript (Vanilla, no external dependencies)
