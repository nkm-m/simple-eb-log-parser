# 使い方

## 1. Elastic Beanstalk のバンドルログをダウンロードします  

ダウンロード方法については以下の AWS 公式ドキュメントをご覧ください。[1]

[1] Elastic Beanstalk 環境の Amazon EC2 インスタンスからのログの表示 - AWS Elastic Beanstalk  
https://docs.aws.amazon.com/ja_jp/elasticbeanstalk/latest/dg/using-features.logging.html

## 2. バンドルログの zip ファイルを解凍します。

## 3. アプリをクローンします

```bash
git clone https://github.com/nkm-m/simple-eb-log-parser.git .
```

## 4. バンドルログの log ディレクトリにアプリのファイルをコピーします
![2022-11-20_10h40_32](https://user-images.githubusercontent.com/55443396/202878714-5f7ebef5-c9c6-4243-8109-27afd9ab3968.png)

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
![2022-11-20_10h42_05](https://user-images.githubusercontent.com/55443396/202878738-25f498bf-0d16-435b-af8c-0b93c0bd181d.png)

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
