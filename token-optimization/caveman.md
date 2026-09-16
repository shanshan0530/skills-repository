# Caveman ｜ 省 Token 技能（"马尾辫" Skill）

## 仓库
- ** JuliusBrussee/caveman**

## 功能描述
教 Claude 像 caveman 一样说话，大幅减少输出 token。

### 核心特性
- 输出 token 减少约 65%（官方宣称）/ 实测 41-70%
- 去除冗余：省略礼貌用语、过渡句、格式化脚手架
- 保留所有技术细节和代码块
- 错误消息保持原样引用
- 支持 30+ agent（Claude Code / Codex / Cursor / Windsurf / Cline / Aider 等）

### 安装
```bash
# Claude Code 插件市场
claude plugin marketplace add JuliusBrussee/caveman
claude plugin install caveman at caveman

# 或使用安装脚本
# macOS
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash
# Windows
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```

### 使用
在 Claude Code 中输入 `/caveman` 激活

### 适用场景
- 代码编写
- 数据提取
- 头脑风暴
- 规划

### 不适用场景
- 复杂话题解释
- 创意写作

## 链接
- [GitHub: JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)
- [LinkedIn 介绍](https://www.linkedin.com/posts/arjanbrussee_github-juliusbrusseecaveman-why-use-activity-7447231776315301888-6l0G)
- [YouTube 评测](https://www.youtube.com/watch?v=u7eaq_NyY08)
- [MakeUseOf 文章](https://www.makeuseof.com/taught-claude-talk-like-caveman-ended-saving-my-tokens)

## 分类标签
`token优化` `省token` `Claude Code` `Codex` `效率` `成本控制`
