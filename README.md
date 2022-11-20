# 使い方

## 1. Elastic Beanstalk のバンドルログをダウンロードします  

ダウンロード方法については以下の AWS 公式ドキュメントをご覧ください。[1]

[1] Elastic Beanstalk 環境の Amazon EC2 インスタンスからのログの表示 - AWS Elastic Beanstalk  
https://docs.aws.amazon.com/ja_jp/elasticbeanstalk/latest/dg/using-features.logging.html

## 2. バンドルログの zip ファイルを解凍します。

## 3. バンドルログの log ディレクトリをターミナルなどで開きます

## 4. log ディレクトリにアプリをクローンします

```bash
git clone https://github.com/nkm-m/simple-eb-log-parser.git .
```

## 5 npm install

`npm install` で必要なモジュールをインストールします。

```bash
npm install
```

## 6. npm start

`npm start` でアプリを実行します。

```bash
npm start
```

## 7. エラーログのみが表示されます

ターミナルに以下の文字列を含むエラーログのみが表示されます。

- `ERROR`
- `Error`
- `error`

## カスタマイズ

エラー以外を抽出したい場合には、以下の部分で抽出する文字列を指定してください。

``` javascript:app.js
if (
  logs[i].includes("ERROR") ||
  logs[i].includes("error") ||
  logs[i].includes("Error")
) {
  console.log(red(logs[i]));
}
```

カスタムログファイルを追加したい場合には、以下の部分でファイル名を追加してください。

``` javascript:app.js
const files = [
  "cfn-hup.log",
  "cfn-init-cmd.log",
  "cfn-init.log",
  "cfn-wire.log",
  "cloud-init-output.log",
  "cloud-init.log",
  "eb-cfn-init-call.log",
  "eb-cfn-init.log",
  "eb-engine.log",
  "eb-hooks.log",
  "web.stdout.log",
  "healthd/daemon.log",
  "nginx/access.log",
  "nginx/error.log",
  "messages",
  "cron",
  // "" add your custom logfile name
];
```