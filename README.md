# Storybook VRT Sample

このプロジェクトは、Storybookを使用したVisual Regression Testing (VRT)のサンプルです。

## 🚀 セットアップ

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. VRT環境の構築

Docker Composeを使用してVRT環境を構築します。

```bash
# 初回またはDockerイメージを再ビルドする場合
make vrt-build

# 既存のイメージを使用する場合
make vrt-up
```

## 📖 使い方

### VRTテストの実行

```bash
# VRTテストを実行
make vrt-test
```

### スナップショットの更新

UIの変更を意図的に行った場合、スナップショットを更新します。

```bash
make vrt-update
```

### VRT環境の停止

```bash
make vrt-down
```

## 🎨 VRTタグの使い方

VRTテストを実行したいStoryには、`tags: ['vrt']`を追加します。

```tsx
export const Default: Story = {
  tags: ['vrt'],
  args: {
    title: 'サンプルタイトル',
    children: 'サンプルコンテンツ',
  },
};
```

## 📝 利用可能なコマンド

- `make vrt-build` - サービスをビルドして起動（初回や依存更新時に推奨）
- `make vrt-up` - サービスをビルドせずに起動（既存イメージ利用）
- `make vrt-test` - VRTテストを実行
- `make vrt-update` - スナップショットを意図的に更新（UI変更時など）
- `make vrt-down` - サービス停止

## 📂 ディレクトリ構造

```
.
├── .storybook/
│   ├── main.ts              # Storybookの設定
│   ├── preview.ts           # プレビューの設定
│   └── test-runner.js       # VRTの設定
├── components/
│   └── accordion/
│       ├── index.tsx        # Accordionコンポーネント
│       ├── index.stories.tsx # Accordionのストーリー
│       ├── index.test.tsx   # Accordionのテスト
│       └── index.css        # Accordionのスタイル
├── __image_snapshots__/     # VRTスナップショット（Gitで管理）
│   └── __diff_output__/     # VRT差分画像（Gitで管理しない）
├── Dockerfile.vrt           # VRT用のDockerfile
├── compose.vrt.yml          # VRT用のDocker Compose設定
├── Makefile                 # VRT操作用のMakefile
└── package.json             # プロジェクトの依存関係
```

## 🧪 テスト

### ユニットテスト

```bash
pnpm test
```

### Storybookの起動

```bash
pnpm storybook
```

## 🌐 Next.js開発

### 開発サーバーの起動

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000) でアプリケーションを確認できます。

## 📚 参考リポジトリ

このプロジェクトは、以下のリポジトリを参考に作成されています。

- [illionillion/mermaid-editor](https://github.com/illionillion/mermaid-editor)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

