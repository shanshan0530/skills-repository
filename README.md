# Skills Repository ｜ Skill Library

这是一个用于收集、整理和快速访问 AI Skill、设计资源、提示词与开源工具的个人仓库。

现在仓库同时提供一个可视化 **Skill Library**：支持搜索、分类筛选、收藏、最近访问，并会自动读取各 Markdown 条目中的简介、标签和原项目链接。

## Web UI

仓库根目录已包含静态页面：

- `index.html` — 页面结构
- `styles.css` — UI 样式
- `app.js` — Skill 数据、搜索、筛选、收藏与 Markdown 自动解析

启用 GitHub Pages 后即可直接作为网站访问。默认可使用：

`https://sue1231511.github.io/skills-repository/`

> 如果尚未启用 GitHub Pages：Repository → Settings → Pages → Deploy from a branch → `main` / `/ (root)`。

## 分类

| 目录 | 内容 |
|---|---|
| `frontend-design/` | 前端设计、UI、动效与组件资源 |
| `photo-design/` | 照片处理、海报、拼贴与视觉风格 Skill |
| `video-production/` | AI 视频、图生视频、分镜与制作流程 |
| `creative-visual/` | 实验性视觉与创意界面 |
| `design-tools/` | 设计质量与审查工具 |
| `ai-prompts/` | 提示词与 AI 交互模板 |
| `token-optimization/` | Token 压缩与上下文优化 |
| `methodology/` | 工作流、方法论与 Prompt 模板 |
| `ai-tools/` | AI 工具与平台 |
| `chrome-extensions/` | Chrome 扩展 |
| `tools/` | 其他通用工具 |

## 条目规范

每个资源仍以一个 Markdown 文件保存。推荐结构：

```md
# Skill 名称 ｜ 中文说明

## 仓库 / 官网
- GitHub 或官网链接

## 功能描述
一句话说明它解决什么问题。

### 核心特性
- 特性 1
- 特性 2

### 适合场景
- 场景 1

## 安装 / 使用
...

## 分类标签
`标签1` `标签2` `标签3`
```

Web UI 会自动解析：一级标题、功能描述、分类标签，以及第一个有效的 GitHub / 外部项目链接。因此新增条目时不需要再手工写一张网页卡片。

## 使用方式

1. 按分类找到合适的 Skill。
2. 搜索名称、用途或标签。
3. 点击“访问 Skill”直接进入原项目。
4. 原项目链接无法解析时，会自动退回仓库里的 Markdown 说明页。
5. 收藏和最近访问记录保存在浏览器本地。

## 贡献

发现新的 Skill 可以直接按现有分类新增 Markdown。信息暂未核实的条目请明确标注“待确认”，避免把推测写成事实。
