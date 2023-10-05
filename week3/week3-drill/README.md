# Laravel インストール方法
1. `docker compose build --no-cache` (ビルドする)
2. `docker compose up -d` (コンテナをたてる)
3. `docker compose exec app sh` (appコンテナに入る)
4. `composer create-project --prefer-dist laravel/laravel . "10.*"` (src配下にLaravel10をインストール)
5. ブラウザで `http://localhost` にアクセスし、Laravelのロゴ入りのトップページが表示されることを確認


# データベースの作成
1. appコンテナに入っていることを確認
    - (入っていなければ、`docker compose exec app sh`)
2. `src > .env` の内容を以下のように書き換える
    ```
    DB_CONNECTION=mysql
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=website
    DB_USERNAME=posse
    DB_PASSWORD=password
    ```

3. `php artisan migrate` をして、以下のように出力されていれば成功
    ```shell
    2014_10_12_000000_create_users_table ........................................ 274ms DONE
    2014_10_12_100000_create_password_reset_tokens_table ........................ 196ms DONE
    2019_08_19_000000_create_failed_jobs_table .................................. 116ms DONE
    2019_12_14_000001_create_personal_access_tokens_table ....................... 196ms DONE
    ```


# ドリル課題
Laravelの環境が構築できたことを確認できたら以下のドリル課題を進めてください。
<br>
<br>
1. Todoデータのやり取りをするREST APIの定義書を`openapi.yml`ファイルに記述してください。<br>具体的なCRUD操作は以下となります。
    - Todoを作成
    - Todoを全件取得
    - Todoを一件取得
    - 一つのTodoを更新
    - 一つのTodo削除

    Todoモデルのスキーマは以下となります。

    ```
    {
        id: integer,
        text: string,
        created_at: string(type:date-time),
        updated_at: string(type:date-time)
    }
    ```

<br>
<br>
2. 作成した定義書に従ってLaravelでAPIを実装してください。<br>PostmanなどのAPIツールを使用し、適切に動作することを確認してください。
<br>
<br>

- [ ] 定義書を適切に作成し、Swagger UIで表示されることを確認できましたか？
- [ ] 定義書通りにAPIを実装できましたか？
- [ ] APIツールを利用して正常に動作することを確認できましたか？

どうしても実装できない場合は`week3-drill`フォルダ内の`sample`フォルダを参照してください。
