# Create Photo Flipbook UI ｜ 照片转 Flipbook 相册

## 仓库
- ** HaichaoLihc/create-photo-flipbook-ui**

## 功能描述
Codex skill，将拍摄的照片转换成具有表达力的 photobooks（相册），使用自带的 **2D Book** runtime（bundled runtime）。

### 核心特性
- 输入：用户提供的照片
- 输出：响应式 flipbook / photobook 网站
- 自带 2D Book runtime（assets/html/）
- 支持多种 UI 模板（ui-collections/）：
  - **Library**：可重新排序的书架，3 本空 mock books
  - **2D Book**：带示例照片展开页的 2D 翻书
  - **3D Book 1**：React + WebGL 阅读器，深色舞台，弯曲页面
  - **3D Book 2**：Three.js + Quick FlipBook 阅读器，浅色舞台，柔和阴影
  - **Card Gallery**：可拖拽的卡片 gallery（ring / arc / stack / unfolded strip）
  - **Image Atlas**：基于年份的同心圆环空间档案，主题搜索
  - **Photo Ring**：Flat / Tilt / Ring / Gallery 布局切换
  - **Film Negative Flipbook**：胶片档案 UI，页角预览，可拖动胶片条
- 依赖 `photo-search` MCP 进行照片库搜索和语义搜索
- 包含 Python adapter（scripts/photo_library.py）用于文件夹索引

### 工作流
1. 提供照片
2. 选择风格（默认：Source Serif 4 字体，纸张/布料纹理，可复用页面样式）
3. Agent 自动生成翻书/相册

## 安装
```bash
npx skills add HaichaoLihc/create-photo-flipbook-ui
```

## 使用
```
Use $create-photo-flipbook-ui to turn these photographs into photobooks.
```

## 链接
- [GitHub: HaichaoLihc/create-photo-flipbook-ui](https://github.com/HaichaoLihc/create-photo-flipbook-ui)
- [3D Book 2 Demo](https://haichaolihc.github.io/create-photo-flipbook-ui/)

## 分类标签
`创意` `前端` `照片处理` `翻书` `相册` `UI组件` `Codex` `3D` `WebGL` `Three.js`
