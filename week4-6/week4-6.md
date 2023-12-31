 # week4~6  実践
<br>
ここまでReact×TypeScriptを用いたフロントエンド開発と、Laravel×OpenAPIを用いたAPI開発を行いました。
<br>
これまでに学んだことを実践していただきたく、POSSEカリキュラムph3で制作するクイズアプリをこれまでの技術スタックを用いて再開発してみましょう。

## 今週の目的
-  React×TypeScriptでフロントエンド開発が行えるようになる
- OpenAPIを用いてAPIを定義し、Laravelで開発が行えるよになる
- 外部サービスを開発に取り込めるようになる
<br>

## 今週のカリキュラム
- 制作物の確認
- 環境構築
- バックエンド
  - API定義
  - 実装
- フロントエンド
  - 実装
<br>

**◎進め方**

- 実践開発では今までとは違い詳細なお手本は存在しません。今までの学習や経験を活かして最後まで実装してみましょう。
- 詰まったり疑問に感じたことはメンターさんに質問しましょう。
- Git&GitHubの運用も適切に行うことを心がけましょう。JOBでは基本的にgit-flowで運用しています。プルリクエストの作成方法は[イベントアプリのリポジトリ](https://github.com/posse-ap/event.posse-ap.com/pulls?q=is%3Apr+is%3Aclosed)などを参考にしてみてください。

<br>

## 制作物の確認
ph3で作成したクイズサイトを学習したReact×TypeScriptのフロント、Laravel×OpenAPIのバックで制作しなおします。流れは以下です。
1. API仕様書を作成。
1. LaravelでAPIサーバーを構築。
1. React×TypeScriptでフロントエンドを構築し、APIサーバーにリクエストを飛ばして必要なデータを取得。
1. フロントでUIを構築。
また、今回のサービスでは認証系としてOAuthを使用します。管理者でなければ行えない処理なども切り分けて実装する必要があることを注意してください。<br>
ex）問題の作成、削除など
<br>
<br>
TOPのPOSSEの紹介ページの作成は自由とします。なくても構いません。
<br>
<br>

## 環境構築
### API
1. `yosei202308-api`リポジトリを作成してください。これはLaravelでAPIを開発するためのリポジトリです。フロントとAPIでリポジトリを分ける点に注意してください。
1. Docker環境でLaravel10を起動するところまで行ってください。環境は自作でも`template-ph3`のどちらでも構いません。
1. week3で読んだ[こちら](https://zenn.dev/naoki0722/articles/090bd3309474d9)を参考にしてLaraStanを導入してください。設定するルールは細かく指定しませんが、型チェックは必ず実行されるように設定してください。

### フロント
1. `yosei202308-front`リポジトリを作成してください。ここではReact×TypeScriptのフロント開発のためのリポジトリです。
1. React×TypeScriptの環境を構築してください。week1では`create-react-app`を利用して立ち上げていましたが、`vite`などの別の方法でも構いません。TypeScriptを導入することを忘れないでください。

### Auth0
Auth0の認証機能を利用して管理画面へのアクセス制御や、APIへのリクエストに認証情報を埋め込んで不正リクエストを弾くなどの機能を実装します。
<br>
おそらくAuth0を利用したフロントとAPIの認証を接続することが今開発で1番難しいところだと思います。ChatGPTやメンターさんに質問するなどして進めてください。
1. フロントにAuth0のSDKをインストールし認証系を利用できるようにしてください。week3でのチュートリアルや[公式ドキュメント](https://auth0.com/docs/quickstart/spa/react/interactive)を利用して導入してください。
2. APIにAuth0のSDKをインストールし認証系を利用できるようにしてください。[公式ドキュメント](https://auth0.com/docs/quickstart/backend/laravel/interactive)を利用して導入してください。
3. フロントとAPIの認証系機能を連携させてください。[こちら](https://developer.auth0.com/resources/code-samples/full-stack/hello-world/basic-access-control/spa/react-typescript/laravel-php)を参考にしてみてください。
<br>
<br>

## ゴール
- [ ] ph3カリキュラムで開発したクイズサイトを再現できている。
- [ ] 認証系が正しく動作している。(不正ログインや不正リクエストを弾けるセキュアなサービスとなっている)
- [ ] フロントとバックを切り離した開発を理解できた。
- [ ] 自作APIおよび外部APIとの通信の流れや利用方法を理解できた。

<br>
<br>
<br>
<br>
開発お疲れ様でした。
<br>
最後になぜこのような技術スタックで開発したのかを考えたり調べたりしてみましょう。開発手法や技術スタックにはトレンドがあり、そこには必ずトレンドになるだけの利点があります。
<br>
考えがまとまったらDiscordに投げて全員で共有しましょう。絶対的な答えは存在しないので共有することで別の様々な視点や考え方があるはずです。それらを噛み砕きながら理解を進めてみましょう。

