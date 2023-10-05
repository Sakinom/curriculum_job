 # week3  API
<br>

## 今週の目的
-  APIを利用した開発ができるようになる
-  APIを設計できるようになる
-  外部サービスを利用して開発できるようになる
<br>

## 今週のカリキュラム
- APIキャッチアップ
  - API概要
  - Postmanの使い方
  - LaravelでAPI作成
  - Open API
- 外部サービス(Auth0)キャッチアップ
- LaraStanキャッチアップ
<br>

## APIキャッチアップ
**◎進め方**
<br>
<br>
記事と動画を利用してキャッチアップを行ってもらいます。
- 理解ができないと感じた場合でも止まらずに読み進めてください。読み進めた手を動かした先で理解できるようになります。
- APIは概念的な理解が必須です。通信のリクエストとレスポンスを意識して取り組みましょう。
<br>
<br>

### ⚪︎API概要
まず初めにAPIの概要について動画を見て把握してもらいます。
- APIとは何を指すのか？
- どうしてAPIを利用するのか？

以上の2点を意識しながら動画を視聴しましょう。
<br>
<br>
https://www.youtube.com/watch?v=HqvcmkFjVnw
<br>
<br>

[!['APIとは'](http://img.youtube.com/vi/HqvcmkFjVnw/0.jpg)](https://www.youtube.com/watch?v=HqvcmkFjVnw)

<br>
<br>

次にAPIの種類の一つであり最も利用されている *REST API* について記事を読んでください。
- RESTとはどういった設計思想なのか？
- なぜRESTが多く利用されるのか？

以上の2点を意識しながら記事を読み進めましょう。
<br>
https://tech.012grp.co.jp/entry/rest_api_basics
<br>
<br>
<br>

### ⚪︎Postmanを使用してAPIを触る
APIテストなどを行うツールの使い方を覚えながら実際にAPIを触ってみましょう。
<br>
<br>
APIを開発、またはテストをする際にAPI開発ツールを使用します。Postmanは多くの開発者に利用されているAPI開発ツールのうちの1つです。
<br>
以下の記事を読みながらPostmanの使い方と、Twitter APIを使用してAPIについて手を動かしながら学んでいきましょう。
<br>

https://ugo.tokyo/about-postman/

<br>
<br>

### LaravelでAPI作成
それでは実際にAPIを作成してみましょう。
<br>
業務でもLaravelでAPIを作成しています。英語の動画ですが十分に分かりやすく理解できる内容なので取り組んでみてください。
<br>
<br>
https://www.youtube.com/watch?v=N9RKm7LJUjo
<br>

[!['Laravel API作成'](http://img.youtube.com/vi/N9RKm7LJUjo/0.jpg)](https://www.youtube.com/watch?v=N9RKm7LJUjo)

<br>
<br>

### Open API
APIというものについて段々分かってきたと思います。次にAPIを定義し設計する手法について学んでいきましょう.
<br>
APIは特定のエンドポイント(URL)を叩くと特定の値を含んだレスポンスが返ってくるというものでした。ではAPIを開発する側はどのようにしてエンドポイントやリクエスト・レスポンスを定義していくのでしょうか？
<br>
以下の記事を読み進め、API記述フォーマットであるOpen APIについて理解し、どのようにAPIを定義していくかを学んでいきましょう。
- Open APIとは何か？
- Open APIを使用することで何を実現できるか？

以上の2点を意識しながら記事を読み進めましょう。
<br>
<br>
https://www.aeyescan.jp/media/openapi
<br>
<br>

Open APIについて理解を深めたところで、実際に手を動かしていきましょう。
<br>
以下の記事ではOpen APIのツールセットであるSwaggerを利用してAPIを定義し、モックサーバーを立ち上げてテストするところまでを学べます。
<br>
真似しながら定義していくことでOpen API定義の記述方法が理解できると思います。手を動かしながらAPI定義書を完成させてみましょう。
<br>
<br>
https://qiita.com/KNR109/items/7e094dba6bcf37ed73cf
<br>
<br>

API開発では先に定義を作成してからコーディングする場合と、コーディングと同時に定義していく場合があります。上の記事では先に定義書を作成する場合をやりました。
<br>
最後に`LaravelでAPI作成`で作成したAPIの定義書を自作してみましょう。
----------- 指示 作成予定 ----------------

<br>
<br>

- [ ] APIとはどんなものかを理解することができましたか？
- [ ] REST APIについて理解することができましたか？
- [ ] Postmanを利用してAPIを開発する流れを理解できましたか？
- [ ] LaravelでAPIを作成する流れを理解できましたか？
- [ ] Open APIでAPI定義をする流れを理解できましたか？

<br>
<br>

## 外部サービス(Auth0)キャッチアップ
実際の開発では一から全ての機能を実装することはほぼなく、外部から提供されるサービスを組み合わせて自身が本当に提供したい価値を開発することに注力できるようにします。また、外部の信頼のおけるサービスを利用した方が良いケースもたくさんあります。
<br>
外部サービスを利用する際、多くの場合は外部サービスが公開するAPI使用して自身の開発に組み込んでいきます。
<br>
今回は外部サービスを扱えるよになることを目的にAuth0という認証系のサービスをReactに組み込んで開発してみましょう。
<br>
<br>
初めに以下の記事を読んでAuth0について簡単に理解していきましょう。
<br>
<br>
https://ugo.tokyo/about-auth0/
<br>
<br>

それでは実際にReactに組み込んで簡単な開発をしてみましょう。
- 外部サービスを導入する流れは？
- 自サービスと外部サービスとの接合点はどこか？

以上の2点を意識しながら、以下の公式チュートリアルを進めてください。2つ目の記事は日本語で手助けしてくれる参考サイトです。
<br>
<br>

[公式チュートリアル](https://auth0.com/docs/quickstart/spa/react/01-login)

[参考サイト](https://zenn.dev/mikakane/articles/react_auth0_tutorial)

<br>
<br>

Auth0を使用した際にAPIキー(パブリックキー)とシークレットキーを利用したと思います。
<br>
それらは外部APIを利用する上でほとんどの場合使用されます。これらのキーの違いについて以下の記事を読んで理解しておきましょう。
<br>
<br>
https://camp.trainocate.co.jp/magazine/howto-api-key/
<br>
<br>

- [ ] 外部サービスを取り入れる流れを理解できましたか？
- [ ] Auth0について理解することができましたか？
- [ ] パブリックキーとシークレットキーの違いについて理解できましたか？

<br>
<br>


## LaraStanキャッチアップ
LaravelにもTypeScriptのような静的解析をしてくれる`LaraStan`というツールが存在します。
<br>
TypeScriptで静的解析を開発に導入する理由を理解したと思います。Laravelでも静的解析を扱えるように以下の記事を読んでLaraStanを理解しておきましょう。
<br>
<br>
https://zenn.dev/naoki0722/articles/090bd3309474d9
<br>
<br>

- [ ] LaraStanについて理解することができましたか？

<br>
<br>

## ドリル課題
week3-drillフォルダに課題があります。READMEの手順に従って問題を解いてください。
もしドリル課題を解けなかった場合は必ず解けるようになるように復習をしてください。
