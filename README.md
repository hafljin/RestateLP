# Restate - Real Estate Landing Page

広告・SNS流入からのリード最大化を目的とした不動産LPテンプレートです。TDD（テスト駆動開発）で構築し、即ポートフォリオ・実案件に流用可能。

## 特徴
- **技術**: React + Vite + TailwindCSS + shadcn UI
- **テスト**: Vitest + @testing-library/react
- **CI**: GitHub Actions（テスト・lint・build）
- **デプロイ**: Vercel 推奨
- **アクセシビリティ**: WCAG 基本対応
- **データ差替え**: `src/data/properties.json` で物件情報を管理

## 主要機能
- ヒーローセクション（見出し＋CTA）
- 物件リスト（カード/カルーセル）
- 物件詳細モーダル
- 特徴・実績セクション
- お客様の声（Testimonials）
- 問い合わせフォーム（Formspree/EmailJS対応、バリデーション・モック送信）
- 会社情報・フッター
- SEOメタ設定、Analytics埋込箇所
- reCAPTCHA（任意）

## セットアップ
```sh
npm install
npm run dev
```

## テスト
```sh
npm run test      # watchモード
npm run test:ci   # CI用（カバレッジ/終了コード）
```

## ビルド
```sh
npm run build
```

## デプロイ
- Vercel推奨: `vercel --prod`
- またはGitHubへpush

## 環境変数
`.env.example` を参照し、必要に応じて `.env` を作成してください。

## 物件データ差替え
`src/data/properties.json` を編集することで、物件情報を簡単に差し替え可能です。

## TDD/開発方針
- すべてのコンポーネントは **テストファースト**（Vitest + RTL）
- テスト→実装の順でコミット履歴を分けています
- カバレッジ80%以上推奨

## 主要コマンド
- `npm install` … 依存パッケージ導入
- `npm run dev` … 開発サーバ起動
- `npm run test` … テスト（watch）
- `npm run test:ci` … テスト（CI/カバレッジ）
- `npm run build` … 本番ビルド

## CI/CD
- `.github/workflows/ci.yml` で lint, test, build を自動実行

## ディレクトリ構成（抜粋）
```
restate/
├── src/
│   ├── pages/index.tsx
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyCarousel.tsx
│   │   ├── FeatureList.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── __tests__/
│   ├── data/properties.json
│   ├── styles/globals.css
│   └── utils/api.ts
├── .env.example
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── README.md
└── .github/workflows/ci.yml
```

---

### TDDコミット例
- `test: add HeroSection tests`
- `feat: implement HeroSection component`

---

### ライセンス
MIT
