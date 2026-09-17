# VoiceStudio ｜ 开源 AI 语音克隆与多语言配音工具

## 来源
- **debpalash** 开源项目（ElevenLabs 开源替代方案）
- 仓库：[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)
- GitHub 星标：32k+ Stars
- 开源协议：AGPL-3.0

## 功能描述
ElevenLabs 将其核心语音技术开源后的本地自托管替代方案，可在本地运行，实现语音克隆、多语言视频配音、听写与文字转语音。支持 646 种语言，无需上传音频，不限次数且免费。

### 核心特性
- 完全本地运行，音频数据不上传，隐私安全
- 支持 646 种语言视频配音，远超 ElevenLabs 官方 SaaS 的 32 种语言
- 提供 14 种预设声音，支持自定义声音克隆
- 支持语音听写、文字转语音、有声书创作全流程
- 不限次数、不按字收费，完全免费使用
- 提供桌面端（Electron）应用与 Docker 部署
- 支持 Local API 和 MCP 集成，可与 Agent 工作流连接

### 适合场景
- 视频本地化与多语言配音
- 有声书与音频内容批量生产
- 个人声音克隆与数字人语音合成
- 隐私敏感场景下的语音生成

## 安装 / 使用

### 桌面端（推荐）
从 [Releases](https://github.com/debpalash/VoiceStudio/releases/latest) 下载对应平台的安装包，安装后打开 **Voice cloning** 工作区，选择声音或添加干净的人声参考录音，输入文本即可生成。

### 从源码运行
```bash
git clone https://github.com/debpalash/VoiceStudio.git
cd VoiceStudio
bun install
bun run dev
```

详见 [Electron 开发文档](https://github.com/debpalash/VoiceStudio/blob/main/electron/README.md)。

## 分类标签
`语音克隆` `TTS` `语音合成` `多语言` `ElevenLabs` `开源` `本地部署` `视频配音` `AGPL-3.0`
