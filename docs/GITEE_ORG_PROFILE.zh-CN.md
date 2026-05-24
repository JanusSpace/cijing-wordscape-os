# 雅努斯词境 OS

雅努斯词境 OS 是一个本地优先的个人词汇学习运行系统。它把词卡、记忆算法、关系图谱、统计反馈和本地备份组织成一个可复用的词汇网络底座，支持技术英语、考试英语、职场英语、专业英语等不同场景应用。

![雅努斯词境 OS 核心价值](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/01-core-value.svg)

## 我们在做什么

我们不是只做一个词典，也不是只做一个背单词页面。我们的目标是让每个人都能拥有自己的场景词汇网络：

- 通过标准词卡包导入个人需要学习的词汇；
- 通过 FSRS 记忆算法安排复习节奏；
- 通过“点击词卡 = 不认识”规则把真实浏览行为转化为学习信号；
- 通过关系图谱看清词汇的场景、来源、词族、易混词和标签；
- 通过统计页面观察学习执行、记忆健康、阶段分布和薄弱场景；
- 通过本地备份保护个人学习数据。

![从词境 OS 到个人词汇网络](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/02-os-card-network.svg)

## 三个维度

**哲学上**  
词汇不是孤立的单词，而是人与场景、任务、来源、关系和记忆状态之间形成的网络。我们希望用户不只是“背下来”，还要知道这个词为什么记不住、应该从哪个场景重新想起。

**协议上**  
我们公开词卡字段标准、导入格式、FSRS 审计规则、版权边界和社区贡献约定。官方词卡包和官方内容保留商业授权权利；社区词卡包归创作者或原权利人所有，贡献者应声明来源、授权和可复用范围。

**产品上**  
当前基础应用由五个页面组成：今日、单词本、统计、图谱、设置。它们共同构成“导入词卡 -> 学习/浏览 -> 今日复习 -> 统计反馈 -> 图谱诊断 -> 备份迁移”的闭环。

![五个基础页面](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/03-five-pages.svg)

## 快速体验

在线应用：

- Cloudflare Pages: https://cijingos.pages.dev
- GitHub Pages: https://janusspace.github.io/cijing-wordscape-os/

使用步骤：

1. 打开在线应用页面。
2. 进入 `设置 -> 词卡与备份`。
3. 第一次确认能不能用，点击 `导入小样例`；它是功能测试包。
4. 想看完整效果，例如多个场景卡片和图谱关系，点击 `导入演示包`；它是产品演示包。
5. 如果已有自己的词卡包，点击 `选择文件`，选择 `.json` 词卡包，然后点击导入按钮。
6. 导入后进入 `单词本`，按二级场景开始学习或浏览词卡。
7. 点击单词列表中的词卡表示“不认识”，该词会进入今日待复习队列。
8. 进入 `今日` 完成正式复习。
9. 定期在 `设置 -> 词卡与备份` 导出备份。

## 词卡 Skill 与共建

我们提供可迁移的词卡生产方法，用来帮助 AI 副驾驶或智能体根据个人学习目标分析场景、拆分一级/二级分类，并生成符合雅努斯词境 OS 标准的词卡包。

- 词卡 Skill 说明：`docs/JANUS_WORDSCAPE_CARD_FACTORY_PORTABLE.md`
- 词卡字段标准：`docs/REAL_WORD_CARD_PRODUCTION_STANDARD.md`
- 词卡包 Schema：`schemas/standard-word-card-package.schema.json`
- 功能测试包：`data/imports/janus-wordscape-core-acceptance-60.json`
- 产品演示包：`public/scene-classification-demo-450.json`

![社区词卡共建生态](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/04-community-ecosystem.svg)

## 参与方式

我们欢迎三类贡献：

- 代码贡献：改进导入、备份、复习、图谱、统计、兼容性和安全性；
- 词卡贡献：按标准字段制作可审计、可复用、有来源的场景词卡包；
- 使用反馈：提交真实学习中的问题、场景需求、设备兼容问题和交互建议。

我们鼓励共建共享，但不鼓励无来源、无授权、低质量的批量搬运。

## 仓库入口

- Gitee: https://gitee.com/cijingos/cijing-wordscape-os
- GitHub: https://github.com/JanusSpace/cijing-wordscape-os

从这里开始：

- `README.md`
- `docs/START_HERE.md`
- `docs/QUICK_START.md`
- `docs/PROJECT_BASELINE_FREEZE_INDEX_v1.0.md`

