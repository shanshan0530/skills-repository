# GitHub Idea Finder ｜ GitHub 开源项目发现与评估

## 来源
- **cxxCoolStar**（GitHub 用户）
- 仓库：[cxxCoolStar/github-idea-finder](https://github.com/cxxCoolStar/github-idea-finder)
- 分支：`master`
- 开源协议：未明确标注（仓库公开）

## 功能描述
从一个产品想法出发，发现并评估 GitHub 上的开源替代项目。面向“我想做一个类似某产品的开源版本”或“有没有现成开源项目可以复用”的场景。它不会只执行一次关键词搜索，而是由 Agent 规划多轮查询、检查 README、补充搜索词，再对候选项目进行证据化比较。

### 核心特性
- 将自然语言产品想法整理成 Search Brief
- 按产品类别、产品形态和可观察能力生成多组搜索路线
- 使用 GitHub API 搜索并去重仓库
- 读取仓库元数据和 README
- 从 README 中发现相关项目和新的社区术语
- 根据 README 证据判断 GUI、独立运行、工具调用、多步骤任务等能力
- 区分完整产品、客户端/管理层、Agent runtime、组件、基础设施和资源列表
- 输出 `adopt`、`pilot` 或 `watch` 建议，以及缺口和维护信号

### 适合场景
- 想找某类产品的开源替代方案
- 评估现有开源项目是否可复用
- 竞品分析与技术选型
- 发现同类项目并比较功能差异

## 使用方式

### 环境要求
- Python 3.10 或更高版本
- 可访问 `api.github.com`
- 推荐配置 GitHub Personal Access Token

### 推荐用法

1. **创建搜索会话**
```powershell
python scripts/github_discovery.py session \
  --state-file work/github-idea-session.json \
  --idea "完整产品，类似 Codex App 的有 GUI、可独立运行的通用 AI Agent，支持工具调用和多步骤任务" \
  --max-rounds 4 \
  --max-searches 30 \
  --max-inspections 50
```

2. **执行第一轮搜索**
```powershell
python scripts/github_discovery.py search \
  --state-file work/github-idea-session.json \
  --query "open source AI agent" \
  --query "desktop AI agent" \
  --query "self-hosted autonomous agent" \
  --query "AI agent tool execution" \
  --query "AI agent task planning" \
  --topic ai-agent \
  --topic ai-assistant \
  --fetch-limit 30
```

3. **检查候选项目**
```powershell
python scripts/github_discovery.py inspect \
  --state-file work/github-idea-session.json \
  --repo owner/repo \
  --repo another-owner/another-repo
```

## 设计原则
1. **搜索由 Agent 规划，检索由脚本执行**
2. **先高召回，再证据判断**
3. **能力别名动态生成**
4. **产品形态是证据，不是自动过滤器**
5. **匹配度和健康度分开**
6. **明确不确定性**

## 结果判定
最终报告至少应说明：产品形态、GUI、独立运行、工具调用、多步骤任务、License、维护信号、缺口。每项能力标记为 `supported`、`not-supported` 或 `uncertain`，并附上 README 或 release 中的直接证据。

建议决策：
- `adopt`：产品形态匹配，必需能力有直接证据
- `pilot`：方向匹配但有关键能力不确定
- `watch`：有相关性但证据不足或产品形态不匹配

## 分类标签
`AI工具` `GitHub` `开源发现` `竞品分析` `技术选型` `搜索优化`
