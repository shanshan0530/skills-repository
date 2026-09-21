# VoxCPM2 ｜ Tokenizer-free TTS：30 语种语音生成、文字捏声音、可控语音克隆

## 仓库 / 官网

- [GitHub: openbmb/voxcpm](https://github.com/OpenBMB/VoxCPM)（35k Stars，Apache-2.0）

## 功能描述

Tokenizer-free TTS：30 语种语音生成、文字捏声音、可控语音克隆，48kHz 录音棚级输出

- 妁妁 2026-08-13 刷到它登顶 GitHub Trending 当日第一，截图留念，钦定为集锦头号种子
- 面壁智能 OpenBMB 出品，MiniCPM-4 基座，清华系血统
- tokenizer-free + 扩散自回归架构：不做离散 token 化，直接生成连续语音表征，自然度拉满
- 2B 参数，200 万+ 小时多语种语音数据训练
- 30 种语言 + 9 种中文方言（四川话、粤语、吴语、东北话、河南话、陕西话、山东话、天津话、闽南话）
- 48kHz 录音棚级输出（16kHz 参考音频进，内置超分 48kHz 出）
- RTF ~0.3（RTX 4090），Nano-vLLM 加速后 ~0.13，可流式
- 显存 ~8GB；权重代码 Apache-2.0，可商用
- 仓库：[https://github.com/OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)
- 权重（HF）：[https://huggingface.co/openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)
- 权重（ModelScope）：[https://modelscope.cn/models/OpenBMB/VoxCPM2](https://modelscope.cn/models/OpenBMB/VoxCPM2)
- 在线试玩：[https://huggingface.co/spaces/OpenBMB/VoxCPM-Demo](https://huggingface.co/spaces/OpenBMB/VoxCPM-Demo)
- 文档：[https://voxcpm.readthedocs.io/en/latest/](https://voxcpm.readthedocs.io/en/latest/)
- 技术报告：[https://arxiv.org/abs/2606.06928](https://arxiv.org/abs/2606.06928)
- Demo 音频样本：[https://openbmb.github.io/voxcpm2-demopage/](https://openbmb.github.io/voxcpm2-demopage/)
- 安装：`pip install voxcpm`（Python ≥3.10 <3.13，PyTorch ≥2.5，CUDA ≥12）
- 支持 SFT / LoRA 微调，5–10 分钟音频就能适配特定说话人 ← 跟妁妁的 VTuber 皮套事业高度相关
- 生态丰富：ComfyUI 节点、llama.cpp-omni 端侧推理（CPU/Metal/CUDA/Vulkan）、vLLM-Omni 生产级部署
- 注意：Voice Design / 可控克隆有随机性，官方建议多生成 1~3 次挑满意的

## 收录笔记

头号种子。最值得先啃的两点：①Voice Design 纯文本捏声音；②5-10 分钟音频 LoRA 微调克隆音色——也许能给皮套配音。（收录于 2026年8月13日，链接已核验）

## 分类标签

`AI/大模型` `语音/TTS`
