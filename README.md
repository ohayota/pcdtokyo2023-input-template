# pcdtokyo2023-input-template
「PCD Tokyo 2023」Webカメラ部門用テンプレート

## コードの仕様
- 数字キー押下で作品を切り替えます。ご自身の作品を表示する場合には「3」を押してください。
- 任意のキーを押下することでフルスクリーン化します。動作確認はフルスクリーンでお試しください。
- canvasを画面の中心に配置します。canvasがない部分は黒一色の塗りつぶしです。

## 作品コードの実装を始める前の手順
- 「yourname.js」の「yourname」を、アーティスト名のアルファベット表記に置換してください。例「ohayota.js」
- 「yourname.js」および「index.html」のコード内にある「yourname」も、すべて置換してください。

## 実装時のルール
- グローバル変数や独自関数を定義する場合、変数・関数名の頭にアーティスト名を追加してください。例「ohayota_setup()」
- canvasの大きさは、通常のcreateCanvasではなく `cnv = createCanvas(横, 縦);` を使い定義してください。
- 展示当日は全出展者のコードを1つのプログラムに合体します。下記は各出展者により異なることが予想されますので、予期せぬ動作を防ぐため、必要に応じご自身のプログラム内で明確に定義してください（あくまで一例です）。
  - frameRate
  - colorMode
  - strokeWeight
  - rectMode / ellipseMode / imageMode
  - textAlign

## 本テンプレートについて質問したい場合
- 出展者チャンネルにて、お気軽にohayotaまでご質問ください。
