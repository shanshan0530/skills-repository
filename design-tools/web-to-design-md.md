# web-to-design-md ｜ AI Skill：把任意网站扒成 Stitch 风格 DESIGN.md

## 仓库 / 官网

- [GitHub: paidax01/web-to-design-md](https://github.com/Paidax01/web-to-design-md)（400 Stars）

## 功能描述

AI Skill：把任意网站扒成 Stitch 风格 DESIGN.md 设计系统文档 + HTML 预览（DOM 证据优先，支持明暗双主题）

- 妁妁 2026-08-13 刷到，点名「这个我也要」🥺
- 一个现成的 AI Skill 工程范本：[SKILL.md](SKILL.md) + agents/openai.yaml + references + scripts 的完整结构，跟鸦巢网关 / 橘岛插件的技能化思路同源
- 把任意线上网站扒成一份 Stitch 风格的 `DESIGN.md` 设计系统文档 + 一份 `design-preview.html` 预览页
- 用 agent-browser 读取真实 DOM：computed styles、CSS 变量、样式表规则、可见文本、交互状态全提取
- 支持明暗双主题捕获（网站有主题切换时）
- 克制截图：DOM 证据优先，截图只在证据歧义时兜底
- 安装：把 GitHub URL 甩给支持 GitHub 源的 skill installer，或拷进本地 skills 目录
- Codex 式安装：`install-skill-from-github.py --repo Paidax01/web-to-design-md --path .`
- `SKILL.md`：技能本体
- `agents/openai.yaml`：agent 配置
- `assets/`：[DESIGN.template.md](http://DESIGN.template.md) + design-preview-shell.template.html 两个模板
- `references/`：browser-tooling-bootstrap + website-reading-checklist
- `scripts/`：check-browser-tooling / extract-browser-evidence / render-design-preview 三个脚本
- 依赖 agent-browser；作者明确要求不许静默降级到 Playwright / Chrome CLI / 截图流
- 尚未声明开源协议（README 里作者自留 TODO），商用前先留意
- 对照学习：Kimi 生态有同类内置技能 ui-blueprint（也是从 UI 提取设计系统），可以比一比两者的提取策略与产物格式

## 收录笔记

现成 AI Skill 工程范本（SKILL.md + agents/openai.yaml + 三脚本结构）。可与 Kimi 内置 ui-blueprint 技能对照着学提取策略。注意：尚未声明开源协议。（收录于 2026年8月13日，链接已核验）

## 分类标签

`Agent` `前端` `工具效率`
