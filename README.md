# 芝浦工業大学 ○○研究室 ホームページ

Next.js（App Router）/ TypeScript / Tailwind CSS で構築した研究室公式サイト用プロジェクトです。研究室サーバでは sudo やグローバルな Node.js を使わず、`.node/` 配下にローカルインストールして Makefile で管理します。

## ディレクトリ構成
- `Makefile`: ローカル Node の取得・依存インストール・開発/ビルド用ターゲット
- `.node/`: ローカル Node.js インストール先（make で生成）
- `app/`: Next.js アプリ本体（ページやコンポーネントをここに配置）

## 必要環境
- Linux 環境（研究室サーバを想定）
- `git` と `make` が利用可能であること
- Node.js のグローバルインストールは不要（Makefile が `.node/` に入れます）

## セットアップ手順（初回）
```bash
git clone <REPO_URL>
cd lab-homepage
make env
```
- `.node/` 以下に Node.js をダウンロード
- `app/` 内の依存パッケージをインストール

## 開発サーバの起動方法
```bash
make dev
```
- サーバ側で `127.0.0.1:3001` で待ち受けます。
- 各自の PC からは SSH ポートフォワーディングでアクセスします（例）:
  ```bash
  ssh -L 3001:localhost:3001 <ユーザ名>@<サーバ名>
  ```
  接続後、ローカルブラウザで `http://localhost:3001` にアクセス。

## 本番ビルド
```bash
make build
```
- 今後 GitHub Pages ＋ 大学ドメインで公開予定。

## トラブルシューティング（簡易）
- `make env` が失敗したら: `make clean-node` を実行し、再度 `make env`。
- 依存を入れ直したい: `app/node_modules` を削除してから `make env`。

## 備考
- このリポジトリは研究室内での利用を想定しています。
