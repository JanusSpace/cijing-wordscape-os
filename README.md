# 雅努斯词境 OS · 技术英语词汇网络

雅努斯词境 OS 是一个个人场景英语词汇学习运行时。当前发布场景应用是：

```text
雅努斯词境 OS · 技术英语词汇网络
```

历史开发代号：`TechLex OS`。

本项目不是制卡后台，也不是普通词典。它的核心目标是：导入已经加工好的真实词卡包，设置学习规则，然后自动生成今日任务、运行 FSRS 复习、记录 ReviewEvent、更新 UserMemoryState，并用关系图谱帮助用户判断一个词为什么记不住。

## 当前发布形态

```text
发布方式：PWA 静态网页应用
存储方式：本机浏览器 IndexedDB
核心算法：ts-fsrs 5.4.0
当前版本：v0.1.0-alpha
```

用户可以通过在线应用页打开，也可以从 Gitee 国内镜像进入说明页，或下载 Release 包后本地静态托管运行。

## 快速使用

国内用户可先打开 Gitee 入口页：

```text
https://gitee.com/janusai_admin/cijing-wordscape-os
```

在线应用页：

```text
https://janus-ai.github.io/cijing-wordscape-os/
```

国内在线应用页（启用 Gitee Pages 后）：

```text
https://janusai_admin.gitee.io/cijing-wordscape-os/
```

使用步骤：

1. 打开在线应用页面。
2. 进入 `设置 -> 词卡与备份`。
3. 如果只是第一次确认能不能用，点击 `导入小样例`；它是功能测试包。
4. 如果想看完整效果，例如多个场景卡片和图谱关系，点击 `导入演示包`；它是产品演示包。
5. 如果已有自己的词卡包，点击 `选择文件`，选择 `.json` 词卡包，然后点击导入按钮。
6. 导入后进入 `单词本`，按二级场景开始学习或浏览词卡。
7. 点击单词列表中的词卡表示“不认识”，该词会进入今日待复习队列。
8. 进入 `今日` 完成正式复习。
9. 定期在 `设置 -> 词卡与备份` 导出备份。

说明：`gitee.com` 是国内代码仓库与说明页地址，不是静态网页应用托管域名。国内在线应用需要启用 Gitee Pages，并使用 `gitee.io` 地址。GitHub Pages 与 Gitee Pages 属于不同站点来源，本地学习数据不会自动互通；跨站点使用前应先在 `设置 -> 词卡与备份` 导出备份。

更详细说明见 [docs/QUICK_START.md](docs/QUICK_START.md)。

## 五个核心页面

```text
今日：只处理已到期的待复习词卡。
单词本：按领域包和二级场景组织词卡，支持学习与浏览。
统计：展示今日执行、记忆健康、阶段分布和薄弱场景。
图谱：展示词卡、场景、来源、词族和易混词关系。
设置：管理学习规则、词卡导入、备份恢复、数据健康和应用说明。
```

## 数据与隐私

默认情况下，学习数据保存在用户自己的浏览器 IndexedDB 中，不上传到本项目服务器。

需要注意：

```text
GitHub Pages 或其他托管平台可能记录基础访问日志。
点击读音时，应用可能请求公开词典发音接口或调用浏览器 Web Speech。
导出的备份文件由用户自行保管。
清除浏览器站点数据会删除本地学习记录，清除前应先导出备份。
```

完整说明见 [PRIVACY.md](PRIVACY.md)。

## 本地开发

```bash
corepack pnpm install
corepack pnpm run dev
```

打开：

```text
http://127.0.0.1:5173
```

## 发布构建

```bash
corepack pnpm run typecheck
corepack pnpm run test:fsrs-golden
corepack pnpm run build
corepack pnpm run package
```

本地预览生产构建：

```bash
corepack pnpm run serve:dist
```

打开：

```text
http://127.0.0.1:4173
```

## GitHub 发布

推荐发布形态：

```text
GitHub repository: source and documentation
GitHub Pages: installable PWA
GitHub Release: dist package, sample card package, schema, quick start
Gitee Pages: domestic online app mirror, built from gh-pages branch
```

发布检查：

```bash
corepack pnpm run typecheck
corepack pnpm run test:fsrs-golden
corepack pnpm run smoke:phase11
corepack pnpm run build
```

`smoke:phase11` 依赖本机 Chrome 或 Edge。GitHub CI 默认执行类型检查、FSRS golden test 和 production build；端到端 smoke 可作为发布前本地验收。

## 关键文档

```text
PROJECT_STATE.md
docs/NAMING_CONVENTION_FREEZE_v1.0.md
docs/PROJECT_BASELINE_FREEZE_INDEX_v1.0.md
docs/REAL_WORD_CARD_PRODUCTION_STANDARD.md
docs/MEMORY_ALGORITHM_FREEZE_v1.0.md
docs/UI_FREEZE_INDEX_v1.0.md
docs/DATA_FLOW_FREEZE_v1.0.md
docs/THIRD_PARTY_ALGORITHM_GOVERNANCE.md
schemas/standard-word-card-package.schema.json
docs/START_HERE.md
docs/ADAPTATION_MATRIX.md
docs/USER_LOCAL_ADAPTATION_GUIDE.md
docs/CARD_FACTORY_SHAPE_GUIDE.md
docs/GITHUB_AND_DOMESTIC_MIRROR_GUIDE.md
```

## GitHub 与镜像入口

给 GitHub 用户和未来国内镜像用户，推荐从以下路径阅读：

1. [Start Here](docs/START_HERE.md)
2. [Adaptation Matrix](docs/ADAPTATION_MATRIX.md)
3. [User Local Adaptation Guide](docs/USER_LOCAL_ADAPTATION_GUIDE.md)
4. [Card Factory Shape Guide](docs/CARD_FACTORY_SHAPE_GUIDE.md)
5. [GitHub and Domestic Mirror Guide](docs/GITHUB_AND_DOMESTIC_MIRROR_GUIDE.md)

## 许可证与第三方声明

代码按 Anki-like 机制开放：软件源码使用 [AGPL-3.0-or-later](LICENSE)，接受商业使用，但修改分发或提供网络服务时需要按 AGPL 开源回馈。

品牌、官方词卡包、官方内容资产和文档不随代码自动商业授权，详见 [BRAND_POLICY.md](BRAND_POLICY.md)、[CONTENT_LICENSE.md](CONTENT_LICENSE.md)、[DOCS_LICENSE.md](DOCS_LICENSE.md) 与 [COMMERCIAL_USE.md](COMMERCIAL_USE.md)。

社区词卡包归创作者或原权利人所有；侵权投诉和下架边界见 [TAKEDOWN_POLICY.md](TAKEDOWN_POLICY.md)。

第三方依赖和 FSRS/ts-fsrs 声明见 [NOTICE](NOTICE)。
