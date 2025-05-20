# Test info

- Name: Checking URL11
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\URLTesting.spec.js:124:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.bing.com/"
Received string: "https://www.bing.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    7 × locator resolved to <html lang="en" dir="ltr">…</html>
      - unexpected value "https://www.bing.com/"

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\URLTesting.spec.js:128:24
```

# Page snapshot

```yaml
- main:
  - heading "Microsoft Logo Image" [level=1]:
    - img "Microsoft Logo Image"
  - navigation:
    - menubar:
      - menuitem "Copilot":
        - link "Copilot":
          - /url: /chat?FORM=MY02LY
      - menuitem "Images":
        - link "Images":
          - /url: /images?FORM=Z9LH
      - menuitem "Videos":
        - link "Videos":
          - /url: /videos?FORM=Z9LH1
      - menuitem "Shopping":
        - link "Shopping":
          - /url: /shop?FORM=Z9LHS4
      - menuitem "Maps":
        - link "Maps":
          - /url: /maps?FORM=Z9LH2
      - menuitem "News":
        - link "News":
          - /url: /news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3
      - menuitem ". . . More":
        - text: . . .
        - tooltip "More"
  - complementary "Account Rewards and Preferences":
    - link "Sign in":
      - /url: javascript:void(0)
    - button "Microsoft Rewards":
      - text: Rewards
      - img
      - img
      - img
    - button "Mobile":
      - text: Mobile
      - img
    - button "Settings and quick links"
  - search:
    - textbox "0 characters out of 2000"
    - button "Search using voice":
      - img
    - button "Search using an image"
    - group "Languages:":
      - text: "Languages:"
      - link "Hindi":
        - /url: /?setlang=hi&cc=in&cc=IN
        - text: हिंदी
      - link "Bangla":
        - /url: /?setlang=bn&cc=in&cc=IN
        - text: বাংলা
      - link "Urdu":
        - /url: /?setlang=ur&cc=in&cc=IN
        - text: اردو
      - link "Punjabi (Gurmukhi)":
        - /url: /?setlang=pa-guru&cc=in&cc=IN
        - text: ਪੰਜਾਬੀ
      - link "Marathi":
        - /url: /?setlang=mr&cc=in&cc=IN
        - text: मराठी
      - link "Telugu":
        - /url: /?setlang=te&cc=in&cc=IN
        - text: తెలుగు
      - link "Tamil":
        - /url: /?setlang=ta&cc=in&cc=IN
        - text: தமிழ்
      - link "Kannada":
        - /url: /?setlang=kn&cc=in&cc=IN
        - text: ಕನ್ನಡ
      - link "Gujarati":
        - /url: /?setlang=gu&cc=in&cc=IN
        - text: ગુજરાતી
      - link "Malayalam":
        - /url: /?setlang=ml&cc=in&cc=IN
        - text: മലയാളം
      - link "Odia":
        - /url: /?setlang=or&cc=in&cc=IN
        - text: ଓଡ଼ିଆ
  - link "Open Copilot":
    - /url: /chat?FORM=MY02LY
- dialog:
  - group "Today, we celebrate bees. Which statement about these insects is true?":
    - text: Bing homepage quiz Today, we celebrate bees. Which statement about these insects is true?
    - list:
      - listitem:
        - 'link "Answer: A, Only female bees can sting"':
          - /url: /search?q=Honey+Bee&filters=IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20250520_HoneyBeeLavender%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%220%22+UserChoices%3A%220%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%221%22&FORM=HPQUIZ
          - text: A Only female bees can sting
      - listitem:
        - 'link "Answer: B, All bees produce honey"':
          - /url: /search?q=Honey+Bee&filters=IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20250520_HoneyBeeLavender%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%221%22+UserChoices%3A%221%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%220%22&FORM=HPQUIZ
          - text: B All bees produce honey
      - listitem:
        - 'link "Answer: C, Bees have four legs"':
          - /url: /search?q=Honey+Bee&filters=IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20250520_HoneyBeeLavender%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%222%22+UserChoices%3A%222%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%220%22&FORM=HPQUIZ
          - text: C Bees have four legs
- link "Get the new Bing Wallpaper app":
  - /url: https://go.microsoft.com/fwlink/?linkid=2127455
- 'heading "Image of the day: Honey bee on lavender flowers" [level=3]':
  - 'link "Image of the day: Honey bee on lavender flowers"':
    - /url: /search?q=World+Bee+Day&form=hpcapt&filters=HpDate:"20250519_1830"
    - text: Honey bee on lavender flowers
- text: © Anthony Brown/Alamy Stock Photo
- list:
  - listitem:
    - button "Download this image. Use of this image is restricted to wallpaper only."
- link "Small wings, big job":
  - /url: /search?q=World+Bee+Day&form=hpcapt&filters=HpDate:"20250519_1830"
  - heading "Small wings, big job" [level=2]
- button "Previous image"
- button "Next image" [disabled]
- button "Feedback":
  - img
  - text: Feedback
- region "Trending on Bing":
  - button "The taskbar was expanded. Press to collapse taskbar" [expanded]
  - button "Previous news" [disabled]
  - button "More news"
  - list:
    - listitem:
      - list:
        - listitem:
          - link "5 Lord Narasimha Temples in South India Where Miracles Still Happen © Timeslife":
            - /url: /search?q=5+Lord+Narasimha+Temples+in+South+India+Where+Miracles+Still+Happen&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_C40618F0B40423E948A2D3D9BD6612F7%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%220%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - heading "5 Lord Narasimha Temples in South India Where Miracles Still Happen" [level=2]
            - img "© Timeslife"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/5-lord-narasimha-temples-in-south-india-where-miracles-still-happen/ar-AA1F4d0a?ocid=TobArticle
              - img
        - listitem:
          - 'link "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days © India Today"':
            - /url: /search?q=From+Jyoti+Malhotra+to+Devender+Singh%3a+11+%27Pak+spies%27+caught+in+India+over+3+days&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_110FD801D62D0E0B923C22BF078A3DBC%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/from-jyoti-malhotra-to-devender-singh-11-pak-spies-caught-in-india-over-3-days/ar-AA1F3KoS?ocid=TobArticle
              - img
        - listitem:
          - link "Bigg Boss Star Shilpa Shirodkar Tests COVID Positive — Early Signs You Need To Watch Out For © Times Now":
            - /url: /search?q=Bigg+Boss+Star+Shilpa+Shirodkar+Tests+COVID+Positive+%e2%80%94+Early+Signs+You+Need+To+Watch+Out+For&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_2F65CCDCB4084E8ACB8DF22033581B66%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%222%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - heading "Bigg Boss Star Shilpa Shirodkar Tests COVID Positive — Early Signs You Need To Watch Out For" [level=2]
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/health/health-news/bigg-boss-star-shilpa-shirodkar-tests-covid-positive-early-signs-you-need-to-watch-out-for/ar-AA1F39jw?ocid=TobArticle
              - img
        - listitem:
          - 'link "No jobs in US, UK, Canada for foreign students: Harvard grad warns IITians © India Today"':
            - /url: /search?q=No+jobs+in+US%2c+UK%2c+Canada+for+foreign+students%3a+Harvard+grad+warns+IITians&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_564B2A054EFC996E721DA08D8FA57C3C%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%223%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "No jobs in US, UK, Canada for foreign students: Harvard grad warns IITians" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/no-jobs-in-us-uk-canada-for-foreign-students-harvard-grad-warns-iitians/ar-AA1F75mi?ocid=TobArticle
              - img
        - listitem:
          - 'link "Yusuf Pathan Out, Abhishek Banerjee In: Trinamool Switch In India Outreach © NDTV 24x7"':
            - /url: /search?q=Yusuf+Pathan+Out%2c+Abhishek+Banerjee+In%3a+Trinamool+Switch+In+India+Outreach&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_1F236A4411A62FDEDC13919066F60E9A%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "Yusuf Pathan Out, Abhishek Banerjee In: Trinamool Switch In India Outreach" [level=2]'
            - img "© NDTV 24x7"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/yusuf-pathan-out-abhishek-banerjee-in-trinamool-switch-in-india-outreach/ar-AA1F6M00?ocid=TobArticle
              - img
        - listitem:
          - link "India Logs 164 New Covid-19 Cases In A Week; Govt Reviews Situation As New Wave Hits Asia © News18":
            - /url: /search?q=India+Logs+164+New+Covid-19+Cases+In+A+Week%3b+Govt+Reviews+Situation+As+New+Wave+Hits+Asia&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_32AFE41C4906951ED150412D3CF9B020%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%225%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - heading "India Logs 164 New Covid-19 Cases In A Week; Govt Reviews Situation As New Wave Hits Asia" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/health/health-news/india-logs-164-new-covid-19-cases-in-a-week-govt-reviews-situation-as-new-wave-hits-asia/ar-AA1F5Qv6?ocid=TobArticle
              - img
        - listitem:
          - 'link "Gold Rate Today (May 20): Check Out Gold Prices In Delhi, Mumbai, Bengaluru, Ahmedabad, More Cities © ABP - Live"':
            - /url: /search?q=Gold+Rate+Today+(May+20)%3a+Check+Out+Gold+Prices+In+Delhi%2c+Mumbai%2c+Bengaluru%2c+Ahmedabad%2c+More+Cities&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_A25930C27D6E8E1690C59262FADA2D7E%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%226%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "Gold Rate Today (May 20): Check Out Gold Prices In Delhi, Mumbai, Bengaluru, Ahmedabad, More Cities" [level=2]'
            - img "© ABP - Live"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/autos/photos/gold-rate-today-may-20-check-out-gold-prices-in-delhi-mumbai-bengaluru-ahmedabad-more-cities/ar-AA1F6lyr?ocid=TobArticle
              - img
        - listitem:
          - 'link "''Pakistan army commander was hiding in mosque ...'': Army officials recall intercepted call from PoK amid Op Sindoor strikes © Moneycontrol"':
            - /url: /search?q=%27Pakistan+army+commander+was+hiding+in+mosque+...%27%3a+Army+officials+recall+intercepted+call+from+PoK+amid+Op+Sindoor+strikes&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_5666B4F02D2CA01B8762A5BF77EABFA3%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%227%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "''Pakistan army commander was hiding in mosque ...'': Army officials recall intercepted call from PoK amid Op Sindoor strikes" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/pakistan-army-commander-was-hiding-in-mosque-army-officials-recall-intercepted-call-from-pok-amid-op-sindoor-strikes/ar-AA1F76iL?ocid=TobArticle
              - img
        - listitem:
          - 'link "‘Courts cannot interfere unless glaring case made out’: CJI Gavai''s remark on Waqf Act © Hindustan Times"':
            - /url: /search?q=%e2%80%98Courts+cannot+interfere+unless+glaring+case+made+out%e2%80%99%3a+CJI+Gavai%27s+remark+on+Waqf+Act&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_A9EA4B40118B99070CC2149606EF8500%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%228%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "‘Courts cannot interfere unless glaring case made out’: CJI Gavai''s remark on Waqf Act" [level=2]'
            - img "© Hindustan Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/courts-cannot-interfere-unless-glaring-case-made-out-cji-gavai-s-remark-on-waqf-act/ar-AA1F7iXK?ocid=TobArticle
              - img
        - listitem:
          - link "Russia Unveils First AI-Powered Sukhoi Su-57M Fighter Jet. Here's How India Benefits © News18":
            - /url: /search?q=Russia+Unveils+First+AI-Powered+Sukhoi+Su-57M+Fighter+Jet.+Here%27s+How+India+Benefits&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_D6825DF8776C94B9B34F33ECE6024393%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%229%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - heading "Russia Unveils First AI-Powered Sukhoi Su-57M Fighter Jet. Here's How India Benefits" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/russia-unveils-first-ai-powered-sukhoi-su-57m-fighter-jet-here-s-how-india-benefits/ar-AA1F6RyK?ocid=TobArticle
              - img
        - listitem:
          - 'link "''I''ve Visited Churches, Dargahs...'': CJI Gavai Counters Kapil Sibal During Waqf Hearing © News18"':
            - /url: /search?q=%27I%27ve+Visited+Churches%2c+Dargahs...%27%3a+CJI+Gavai+Counters+Kapil+Sibal+During+Waqf+Hearing&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_2B3F5E2AD88343439BF6EBD45FA7C220%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2210%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "''I''ve Visited Churches, Dargahs...'': CJI Gavai Counters Kapil Sibal During Waqf Hearing" [level=2]'
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/i-ve-visited-churches-dargahs-cji-gavai-counters-kapil-sibal-during-waqf-hearing/ar-AA1F6z4K?ocid=TobArticle
              - img
        - listitem:
          - 'link "Akshay Kumar to sue Paresh Rawal for Rs 25 crore for walking out of ‘Hera Pheri 3’: Report © The Times of India"':
            - /url: /search?q=Akshay+Kumar+to+sue+Paresh+Rawal+for+Rs+25+crore+for+walking+out+of+%e2%80%98Hera+Pheri+3%e2%80%99%3a+Report&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_4FD2D1C1C778AE8D1E77F32E6A4DDEF1%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2211%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "Akshay Kumar to sue Paresh Rawal for Rs 25 crore for walking out of ‘Hera Pheri 3’: Report" [level=2]'
            - img "© The Times of India"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/akshay-kumar-to-sue-paresh-rawal-for-rs-25-crore-for-walking-out-of-hera-pheri-3-report/ar-AA1F6Bmi?ocid=TobArticle
              - img
        - listitem:
          - 'link "Breaking: Supreme Court Begins Hearing on Waqf Law, Debate Over Scope of Interim Relief | ABP NEWS © ABP - Live"':
            - /url: /search?q=Breaking%3a+Supreme+Court+Begins+Hearing+on+Waqf+Law%2c+Debate+Over+Scope+of+Interim+Relief+%7c+ABP+NEWS&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_554B77170BE94C3C0B7E014C74599B1C%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2212%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "Breaking: Supreme Court Begins Hearing on Waqf Law, Debate Over Scope of Interim Relief | ABP NEWS" [level=2]'
            - img "© ABP - Live"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/breaking-supreme-court-begins-hearing-on-waqf-law-debate-over-scope-of-interim-relief-abp-news/vi-AA1F6GPh?ocid=TobArticle
              - img
        - listitem:
          - link "With Awami League Banned, All Eyes On Bangladesh Army Chief’s Address Amid Rising Political Tensions © News18":
            - /url: /search?q=With+Awami+League+Banned%2c+All+Eyes+On+Bangladesh+Army+Chief%e2%80%99s+Address+Amid+Rising+Political+Tensions&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_B5749DB90962BBE2E8BF137356C4BF7D%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2213%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - heading "With Awami League Banned, All Eyes On Bangladesh Army Chief’s Address Amid Rising Political Tensions" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/with-awami-league-banned-all-eyes-on-bangladesh-army-chief-s-address-amid-rising-political-tensions/ar-AA1F650q?ocid=TobArticle
              - img
        - listitem:
          - 'link "Kerala monsoon surprise: Forget May 27, it''s arriving early – here’s what IMD''s revised forecast says © Moneycontrol"':
            - /url: /search?q=Kerala+monsoon+surprise%3a+Forget+May+27%2c+it%27s+arriving+early+%e2%80%93+here%e2%80%99s+what+IMD%27s+revised+forecast+says&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_FE06458985FB16B94617ACE37C976974%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2214%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "Kerala monsoon surprise: Forget May 27, it''s arriving early – here’s what IMD''s revised forecast says" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/topstories/kerala-monsoon-surprise-forget-may-27-it-s-arriving-early-here-s-what-imd-s-revised-forecast-says/ar-AA1F6vDG?ocid=TobArticle
              - img
        - listitem:
          - link "BCCI's rejection of Rohit Sharma's Dhoni-like proposal led to retirement; selectors split between Gill, Pant after talks © Hindustan Times":
            - /url: /search?q=BCCI%27s+rejection+of+Rohit+Sharma%27s+Dhoni-like+proposal+led+to+retirement%3b+selectors+split+between+Gill%2c+Pant+after+talks&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F2D82C3E0594526F409F50A0B56BFBA4%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2215%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - heading "BCCI's rejection of Rohit Sharma's Dhoni-like proposal led to retirement; selectors split between Gill, Pant after talks" [level=2]
            - img "© Hindustan Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/bcci-s-rejection-of-rohit-sharma-s-dhoni-like-proposal-led-to-retirement-selectors-split-between-gill-pant-after-talks/ar-AA1F7em9?ocid=TobArticle
              - img
        - listitem:
          - 'link "IPL Points Table 2025: Updated standing after Lucknow Super Giants vs Sunrisers Hyderabad © Moneycontrol"':
            - /url: /search?q=IPL+Points+Table+2025%3a+Updated+standing+after+Lucknow+Super+Giants+vs+Sunrisers+Hyderabad&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F18972E001C9816EC0F6A03AA3AE08AE%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2216%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "IPL Points Table 2025: Updated standing after Lucknow Super Giants vs Sunrisers Hyderabad" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/ipl-points-table-2025-updated-standing-after-lucknow-super-giants-vs-sunrisers-hyderabad/ar-AA1F5GqL?ocid=TobArticle
              - img
        - listitem:
          - 'link "Sensex down over 500 points: Why is stock market falling? © India Today"':
            - /url: /search?q=Sensex+down+over+500+points%3a+Why+is+stock+market+falling%3f&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_0E01D429C01CCE845177258965892153%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2217%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "Sensex down over 500 points: Why is stock market falling?" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/markets/sensex-down-over-500-points-why-is-stock-market-falling/ar-AA1F6QLt?ocid=TobArticle
              - img
        - listitem:
          - link "IMD Forecasts Heavy Rains In Several States Due To Upper Cyclonic Circulation In Arabian Sea © News18":
            - /url: /search?q=IMD+Forecasts+Heavy+Rains+In+Several+States+Due+To+Upper+Cyclonic+Circulation+In+Arabian+Sea&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_3F2B8D5D2799196EDBEE1592329F637C%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2218%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - heading "IMD Forecasts Heavy Rains In Several States Due To Upper Cyclonic Circulation In Arabian Sea" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/imd-forecasts-heavy-rains-in-several-states-due-to-upper-cyclonic-circulation-in-arabian-sea/ar-AA1F46mG?ocid=TobArticle
              - img
        - listitem:
          - 'link "War 2 Update: Hrithik Roshan, Jr NTR''s Dance Face Off To Be Shot In June? Details Inside © Times Now"':
            - /url: /search?q=War+2+Update%3a+Hrithik+Roshan%2c+Jr+NTR%27s+Dance+Face+Off+To+Be+Shot+In+June%3f+Details+Inside&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_46917CEC9447D227C48CC04E6F54D542%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2219%22+tnOrder%3a%22025a62cf-9c4f-40c4-a388-acaa2bc9cec4%22&form=HPNN01
            - 'heading "War 2 Update: Hrithik Roshan, Jr NTR''s Dance Face Off To Be Shot In June? Details Inside" [level=2]'
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-update-hrithik-roshan-jr-ntr-s-dance-face-off-to-be-shot-in-june-details-inside/ar-AA1F4qoL?ocid=TobArticle
              - img
- complementary: DISCOVER
- contentinfo:
  - text: © 2025 Microsoft
  - list:
    - listitem:
      - link "Privacy and Cookies":
        - /url: //go.microsoft.com/fwlink/?LinkId=521839
    - listitem:
      - link "Legal":
        - /url: //go.microsoft.com/fwlink/?LinkID=246338
    - listitem:
      - link "Advertise":
        - /url: //go.microsoft.com/fwlink/?linkid=868923
    - listitem:
      - link "About our ads":
        - /url: //go.microsoft.com/fwlink/?LinkID=286759
    - listitem:
      - link "Help":
        - /url: //support.microsoft.com/topic/82d20721-2d6f-4012-a13d-d1910ccf203f
    - listitem:
      - link "Feedback":
        - /url: "#"
```

# Test source

```ts
   28 | test("Checking URL3" , async ({page}) =>{
   29 |     await page.goto('https://www.rediff.com/');
   30 |     const page_url = await page.url();
   31 |     console.log("Page URL is " , page_url);
   32 |     await expect(page).toHaveURL('https://www.rediff.com/');
   33 |
   34 |     const page_title = await page.title();
   35 |     console.log('Page title is ' , page_title);
   36 |     await expect(page).toHaveTitle(page_title);
   37 |
   38 | });
   39 |
   40 | test("Checking URL4" , async ({page}) =>{
   41 |     await page.goto('http://www.leafground.com/pages/Dropdown.html');
   42 |     const page_url = await page.url();
   43 |     console.log("Page URL is " , page_url);
   44 |     await expect(page).toHaveURL('http://www.leafground.com/pages/Dropdown.html');
   45 |
   46 |     const page_title = await page.title();
   47 |     console.log('Page title is ' , page_title);
   48 |     await expect(page).toHaveTitle(page_title);
   49 |
   50 | });
   51 |
   52 | test("Checking URL5" , async ({page}) =>{
   53 |     await page.goto('http://www.tizag.com/javascriptT/javascriptalert.php');
   54 |     const page_url = await page.url();
   55 |     console.log("Page URL is " , page_url);
   56 |     await expect(page).toHaveURL('http://www.tizag.com/javascriptT/javascriptalert.php');
   57 |
   58 |     const page_title = await page.title();
   59 |     console.log('Page title is ' , page_title);
   60 |     await expect(page).toHaveTitle(page_title);
   61 |
   62 | });
   63 |
   64 | test("Checking URL6" , async ({page}) =>{
   65 |     await page.goto('http://www.echoecho.com/htmlforms10.html');
   66 |     const page_url = await page.url();
   67 |     console.log("Page URL is " , page_url);
   68 |     await expect(page).toHaveURL('http://www.echoecho.com/htmlforms10.html');
   69 |
   70 |     const page_title = await page.title();
   71 |     console.log('Page title is ' , page_title);
   72 |     await expect(page).toHaveTitle(page_title);
   73 |
   74 | });
   75 |
   76 | test("Checking URL7" , async ({page}) =>{
   77 |     await page.goto('http://www.leafground.com/home.html');
   78 |     const page_url = await page.url();
   79 |     console.log("Page URL is " , page_url);
   80 |     await expect(page).toHaveURL('http://www.leafground.com/home.html');
   81 |
   82 |     const page_title = await page.title();
   83 |     console.log('Page title is ' , page_title);
   84 |     await expect(page).toHaveTitle(page_title);
   85 |
   86 | });
   87 |
   88 | test("Checking URL8" , async ({page}) =>{
   89 |     await page.goto('http://automationpractice.com/index.php');
   90 |     const page_url = await page.url();
   91 |     console.log("Page URL is " , page_url);
   92 |     await expect(page).toHaveURL('http://automationpractice.com/index.php');
   93 |
   94 |     const page_title = await page.title();
   95 |     console.log('Page title is ' , page_title);
   96 |     await expect(page).toHaveTitle(page_title);
   97 |
   98 | });
   99 |
  100 | test("Checking URL9" , async ({page}) =>{
  101 |     await page.goto('https://login.salesforce.com/?locale=in');
  102 |     const page_url = await page.url();
  103 |     console.log("Page URL is " , page_url);
  104 |     await expect(page).toHaveURL('https://login.salesforce.com/?locale=in');
  105 |
  106 |     const page_title = await page.title();
  107 |     console.log('Page title is ' , page_title);
  108 |     await expect(page).toHaveTitle(page_title);
  109 |
  110 | });
  111 |
  112 | test("Checking URL10" , async ({page}) =>{
  113 |     await page.goto('http://www.filehosting.org');
  114 |     const page_url = await page.url();
  115 |     console.log("Page URL is " , page_url);
  116 |     await expect(page).toHaveURL('http://www.filehosting.org');
  117 |
  118 |     const page_title = await page.title();
  119 |     console.log('Page title is ' , page_title);
  120 |     await expect(page).toHaveTitle(page_title);
  121 |
  122 | });
  123 |
  124 | test("Checking URL11" , async ({page}) =>{
  125 |     await page.goto('http://www.bing.com');
  126 |     const page_url = await page.url();
  127 |     console.log("Page URL is " , page_url);
> 128 |     await expect(page).toHaveURL('http://www.bing.com');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  129 |
  130 |     const page_title = await page.title();
  131 |     console.log('Page title is ' , page_title);
  132 |     await expect(page).toHaveTitle(page_title);
  133 |
  134 | });
  135 |
  136 | test("Checking URL12" , async ({page}) =>{
  137 |     await page.goto('https://www.freecrm.com/');
  138 |     const page_url = await page.url();
  139 |     console.log("Page URL is " , page_url);
  140 |     await expect(page).toHaveURL('https://www.freecrm.com/');
  141 |
  142 |     const page_title = await page.title();
  143 |     console.log('Page title is ' , page_title);
  144 |     await expect(page).toHaveTitle(page_title);
  145 |
  146 | });
  147 |
  148 | test("Checking URL13" , async ({page}) =>{
  149 |     await page.goto('http://www.half.ebay.com');
  150 |     const page_url = await page.url();
  151 |     console.log("Page URL is " , page_url);
  152 |     await expect(page).toHaveURL('http://www.half.ebay.com');
  153 |
  154 |     const page_title = await page.title();
  155 |     console.log('Page title is ' , page_title);
  156 |     await expect(page).toHaveTitle(page_title);
  157 |
  158 | });
  159 |
  160 | test("Checking URL14" , async ({page}) =>{
  161 |     await page.goto('https://alaskatrips.poweredbygps.com/');
  162 |     const page_url = await page.url();
  163 |     console.log("Page URL is " , page_url);
  164 |     await expect(page).toHaveURL('https://alaskatrips.poweredbygps.com/');
  165 |
  166 |     const page_title = await page.title();
  167 |     console.log('Page title is ' , page_title);
  168 |     await expect(page).toHaveTitle(page_title);
  169 |
  170 | });
  171 |
  172 | test("Checking URL15" , async ({page}) =>{
  173 |     await page.goto('http://www.qaclickacademy.com/interview.php');
  174 |     const page_url = await page.url();
  175 |     console.log("Page URL is " , page_url);
  176 |     await expect(page).toHaveURL('http://www.qaclickacademy.com/interview.php');
  177 |
  178 |     const page_title = await page.title();
  179 |     console.log('Page title is ' , page_title);
  180 |     await expect(page).toHaveTitle(page_title);
  181 |
  182 | });
  183 |
  184 | test("Checking URL16" , async ({page}) =>{
  185 |     await page.goto('https://app.saucelabs.com/login');
  186 |     const page_url = await page.url();
  187 |     console.log("Page URL is " , page_url);
  188 |     await expect(page).toHaveURL('https://app.saucelabs.com/login');
  189 |
  190 |     const page_title = await page.title();
  191 |     console.log('Page title is ' , page_title);
  192 |     await expect(page).toHaveTitle(page_title);
  193 |
  194 | });
  195 |
  196 |
  197 | test("Checking URL17" , async ({page}) =>{
  198 |     await page.goto('https://opensource-demo.orangehrmlive.com/');
  199 |     const page_url = await page.url();
  200 |     console.log("Page URL is " , page_url);
  201 |     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/');
  202 |
  203 |     const page_title = await page.title();
  204 |     console.log('Page title is ' , page_title);
  205 |     await expect(page).toHaveTitle(page_title);
  206 |
  207 | });
  208 |
  209 | test("Checking URL18" , async ({page}) =>{
  210 |     await page.goto('http://only-testing-blog.blogspot.com/2014/05/form.html');
  211 |     const page_url = await page.url();
  212 |     console.log("Page URL is " , page_url);
  213 |     await expect(page).toHaveURL('http://only-testing-blog.blogspot.com/2014/05/form.html');
  214 |
  215 |     const page_title = await page.title();
  216 |     console.log('Page title is ' , page_title);
  217 |     await expect(page).toHaveTitle(page_title);
  218 |
  219 | });
```