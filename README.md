# 專案狀態（Work In Progress）

此專案為「Task & Habit Tracker」原型，尚在開發中，先行上傳以便版本控管。

## 目前進度
- 已完成：
  - 基本專案架構（React + Vite）與 ESLint 設定
  - 介面骨架：`Navbar`、`Sidebar`、`Layout`
  - 頁面雛形：`Task`、`Habit`
  - Modal 與 `Carousel` 初版（UI/互動待調整）
- 未完成：
  - 任務/習慣資料模型與 CRUD 功能
  - 資料持久化與狀態管理
  - RWD/樣式細節、可及性（a11y）

## 開發執行
```bash
npm install
npm run dev
```

## 使用工具
- 前端框架：React ^19.1.1、React DOM ^19.1.1
- 開發打包：Vite ^7.1.7、@vitejs/plugin-react ^5.0.3
- 路由：react-router-dom ^7.9.5
- 樣式：Tailwind CSS ^4.1.13、@tailwindcss/vite ^4.1.13
- 圖示：react-icons ^5.5.0
- 程式品質：ESLint ^9.36.0（含 react-refresh、react-hooks、@eslint/js、globals）
