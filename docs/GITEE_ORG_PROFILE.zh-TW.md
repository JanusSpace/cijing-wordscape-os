# 雅努斯詞境 OS

雅努斯詞境 OS 是一個本地優先的個人詞彙學習運行系統。它把詞卡、記憶演算法、關係圖譜、統計回饋和本地備份組織成一個可複用的詞彙網路底座，支援技術英語、考試英語、職場英語、專業英語等不同場景應用。

![雅努斯詞境 OS 核心價值](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/01-core-value.svg)

## 我們在做什麼

我們不是只做一個詞典，也不是只做一個背單詞頁面。目標是讓每個人都能擁有自己的場景詞彙網路：

- 透過標準詞卡包導入個人需要學習的詞彙；
- 透過 FSRS 記憶演算法安排複習節奏；
- 透過「點擊詞卡 = 不認識」規則把真實瀏覽行為轉化為學習訊號；
- 透過關係圖譜看清詞彙的場景、來源、詞族、易混詞和標籤；
- 透過統計頁面觀察學習執行、記憶健康、階段分布和薄弱場景；
- 透過本地備份保護個人學習資料。

![從詞境 OS 到個人詞彙網路](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/02-os-card-network.svg)

## 三個維度

**哲學上**  
詞彙不是孤立的單詞，而是人與場景、任務、來源、關係和記憶狀態之間形成的網路。使用者不只要「背下來」，還要知道這個詞為什麼記不住、應該從哪個場景重新想起。

**協議上**  
我們公開詞卡欄位標準、導入格式、FSRS 審計規則、版權邊界和社群貢獻約定。官方詞卡包和官方內容保留商業授權權利；社群詞卡包歸創作者或原權利人所有，貢獻者應聲明來源、授權和可複用範圍。

**產品上**  
目前基礎應用由五個頁面組成：今日、單詞本、統計、圖譜、設定。它們共同構成「導入詞卡 -> 學習/瀏覽 -> 今日複習 -> 統計回饋 -> 圖譜診斷 -> 備份遷移」的閉環。

![五個基礎頁面](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/03-five-pages.svg)

## 快速體驗

線上應用：

- Cloudflare Pages: https://cijingos.pages.dev
- GitHub Pages: https://janusspace.github.io/cijing-wordscape-os/

使用步驟：

1. 打開線上應用頁面。
2. 進入 `設定 -> 詞卡與備份`。
3. 第一次確認能不能用，點擊 `導入小樣例`；它是功能測試包。
4. 想看完整效果，例如多個場景卡片和圖譜關係，點擊 `導入演示包`；它是產品演示包。
5. 如果已有自己的詞卡包，點擊 `選擇文件`，選擇 `.json` 詞卡包，然後點擊導入按鈕。
6. 導入後進入 `單詞本`，按二級場景開始學習或瀏覽詞卡。
7. 點擊單詞列表中的詞卡表示「不認識」，該詞會進入今日待複習隊列。
8. 進入 `今日` 完成正式複習。
9. 定期在 `設定 -> 詞卡與備份` 導出備份。

## 詞卡 Skill 與共建

我們提供可遷移的詞卡生產方法，用來幫助 AI 副駕駛或智能體根據個人學習目標分析場景、拆分一級/二級分類，並生成符合雅努斯詞境 OS 標準的詞卡包。

- 詞卡 Skill 說明：`docs/JANUS_WORDSCAPE_CARD_FACTORY_PORTABLE.md`
- 詞卡欄位標準：`docs/REAL_WORD_CARD_PRODUCTION_STANDARD.md`
- 詞卡包 Schema：`schemas/standard-word-card-package.schema.json`
- 功能測試包：`data/imports/janus-wordscape-core-acceptance-60.json`
- 產品演示包：`public/scene-classification-demo-450.json`

![社群詞卡共建生態](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/04-community-ecosystem.svg)

## 參與方式

我們歡迎三類貢獻：

- 程式碼貢獻：改進導入、備份、複習、圖譜、統計、相容性和安全性；
- 詞卡貢獻：按標準欄位製作可審計、可複用、有來源的場景詞卡包；
- 使用回饋：提交真實學習中的問題、場景需求、設備相容問題和互動建議。

我們鼓勵共建共享，但不鼓勵無來源、無授權、低品質的批量搬運。

## 倉庫入口

- Gitee: https://gitee.com/cijingos/cijing-wordscape-os
- GitHub: https://github.com/JanusSpace/cijing-wordscape-os

從這裡開始：

- `README.md`
- `docs/START_HERE.md`
- `docs/QUICK_START.md`
- `docs/PROJECT_BASELINE_FREEZE_INDEX_v1.0.md`

