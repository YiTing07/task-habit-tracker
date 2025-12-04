## Task & Habit Tracker（開發中）

簡單的任務與習慣追蹤工具，主要用來練習 React、Context 與 localStorage。  
目前仍在開發中，尚未加入篩選、重置、統計等進階功能。

## 目前已完成
- 任務管理（Task）
  - 新增 / 編輯 / 刪除任務
  - 設定優先順序與截止日期
  - 點擊卡片切換完成狀態
- 習慣追蹤（Habit）
  - 新增 / 編輯 / 刪除習慣
  - 設定目標次數與頻率
  - 點擊卡片累積進度，顯示進度條與完成狀態
- 其他
  - 基礎版面：`Navbar`、`Sidebar`、`Layout`
  - Modal + 編輯面板（EditPanel）
  - 任務 / 習慣皆使用 Context + localStorage 持久化

## 規劃中（尚未完成）
- 任務 / 習慣篩選與排序（例如依優先度、日期）
- 重置按鈕（清除當期進度或全部資料）
- 統計與視覺化（完成率、連續天數等）
- RWD 與 UI 細節優化

## 開發方式

```bash
npm install
npm run dev
```

## 技術棧（簡要）
- React + Vite
- react-router-dom
- Tailwind CSS
- react-icons
- ESLint
