# MetalForge ｜ 可视化原生 Shader 编辑器

## 官网
- https://metalforge.xyz/

## 功能描述
面向 SwiftUI 与 React Native 的浏览器 Shader 可视化编辑器。无需先手写 Metal / GLSL，可以直接调参数、实时预览，再导出原生 Shader 与对应界面代码。

### 核心特性
- SwiftUI 原生 Metal Shader 导出，可生成真实的 `.metal` 文件与 SwiftUI View
- 支持 React Native Skia；部分效果还支持 Android AGSL 与 Web
- 浏览器内使用 WebGPU 进行等价效果预览
- 参数可视化调节，并可通过 URL 分享配置
- 官方当前提供 67 个 SwiftUI 效果，其中 55 个支持 React Native、58 个支持 Web（核验于 2026-09-22）
- 免费版可使用编辑器、全部工具与参数；代码/文件导出属于 Pro 权益

### 适合场景
- SwiftUI / React Native 的加载、进度、Agent 工作状态动画
- 原生 GPU 动效与视觉实验
- 不想从零手写 Metal Shading Language 的 UI 开发
- 快速试出 Shader 参数，再带回原生项目继续改

## 使用
1. 打开官网编辑器并选择效果。
2. 调整参数并实时预览。
3. 通过分享链接保存参数状态。
4. 需要落地到项目时导出 `.metal`、SwiftUI、Skia / AGSL 或 Web 版本（以具体效果支持情况为准）。

## 核验说明
- 官方站点可访问，功能与产品说明可对上。
- 这是在线设计 / 开发工具，不是开源 GitHub Skill；本仓库按设计工具资源收录。
- 官方定价与支持平台可能调整，以官网当前信息为准。

## 分类标签
`Shader` `SwiftUI` `React Native` `Metal` `Skia` `WebGPU` `动效` `设计工具`