# Better Design ｜ Coding Agent 设计系统与 MCP Skill

## 仓库 / 官网
- GitHub: https://github.com/marvkr/better-design
- 官网: https://better-design.com/

## 功能描述
给 Coding Agent 补上一层可检索、可执行、可复查的设计上下文。它同时提供设计系统注册表、MCP 工具、UI / UX 原则、组件与无障碍审查规则，并带有可安装的 `better-design` Skill。

### 核心特性
- 开源设计 MCP server + shadcn/ui registry
- 内置 31 套设计系统方向，包括 Linear、Stripe、Vercel、Notion、Apple、Supabase、Figma 等
- 提供设计 Token、组件实现、图标选择、UI / UX 原则与 WCAG 审查规则
- MCP 可按任务检索设计系统、原则、组件与 review rules
- 支持 Claude Code、Cursor、Codex、GitHub Copilot 及其他 MCP 客户端
- 仓库内含正式 `skills/better-design` Skill
- MIT License

### 适合场景
- 让 Coding Agent 在写 UI 前先读取真实设计约束
- 避免页面每一屏都临场发挥、视觉漂移
- 给现有 shadcn/ui 项目补设计系统与组件规则
- 在提交前做视觉层级、间距、交互与无障碍检查

## 安装
```bash
npx skills add marvkr/better-design --skill better-design
npx better-design
```

也可按官网说明连接 Remote MCP。MCP 涉及外部服务与 API Key 时，先审阅仓库和权限配置再接入。

## 核验说明
- GitHub 仓库公开可访问，仓库内确实包含 `skills/better-design`。
- README 明确提供 Skill + MCP 安装方式。
- License 为 MIT。
- 核验于 2026-09-22。

## 分类标签
`设计系统` `MCP` `Skill` `shadcn/ui` `Claude Code` `Cursor` `Codex` `无障碍` `AI辅助开发`