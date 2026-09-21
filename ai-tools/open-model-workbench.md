# Open Model Workbench ｜ 3D 模型构图工作台 Skill

## 仓库
- ** icejyzy0430/open-model-workbench**（MIT License）

## 功能描述
面向视觉创作与 3D 网页工作流、开箱即用的 3D 模型构图工作台 Codex Skill：把 GLB/GLTF 模型交给 Agent，自动在本地生成并打开一个可拖拽摆放的 3D 构图工具，解决"让 AI 凭文字猜 3D 构图，主体位置、朝向和比例容易失控"的问题。

### 核心特性
- 支持一个或多个 `.glb` / `.gltf` 模型，自动复制本地纹理与 `.bin` 依赖，支持 Draco 压缩
- 鼠标拖动摆放，3ds Max 风格局部三轴旋转环，精确位置/旋转/缩放控制
- 深浅色舞台背景切换、网格与 16:9 安全框
- 导出干净的 1920×1080 PNG（可继续交给 Image 2 出网页设计稿）+ 可复现布局的 JSON
- 所有运行依赖随 Skill 本地提供，不依赖 CDN；服务只绑定 127.0.0.1，模型不上传远程服务器

### 适合场景
- 3D 网页设计前先手动定构图，再让 AI 按布局出稿
- 需要可复现三维变换的多轮设计流程

## 安装 / 使用
把 Skill 仓库链接发给支持 Skills 的 Codex Agent 完成安装，然后说"打开模型工作台"并提供 GLB/GLTF 文件。快捷键：`E` 切换位移/旋转模式，`F` 归中，`G` 恢复初始角度。

## 链接
- [GitHub: icejyzy0430/open-model-workbench](https://github.com/icejyzy0430/open-model-workbench)

## 分类标签
`3D` `构图` `GLB` `Codex Skill` `网页设计` `开源` `MIT`
