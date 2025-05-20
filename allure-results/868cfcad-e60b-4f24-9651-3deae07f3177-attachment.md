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
    8 × locator resolved to <html lang="en" dir="ltr">…</html>
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
          - /url: /chat?FORM=MY02LX
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
    - link "Microsoft Rewards Notification Image Try the Microsoft Rewards extension Turn your searches into gift cards with the Microsoft Rewards extension.":
      - /url: https://browserdefaults.microsoft.com/extn/redirect/?xid=106&pc=U683&channel=vrwdshp3
      - img "Microsoft Rewards"
      - img "Notification Image"
      - text: Try the Microsoft Rewards extension Turn your searches into gift cards with the Microsoft Rewards extension.
    - link "Try it now":
      - /url: https://browserdefaults.microsoft.com/extn/redirect/?xid=106&pc=U683&channel=vrwdshp3
    - text: Later
  - search:
    - textbox "0 characters out of 2000"
    - button "Search using voice":
      - img
      - text: Search using voice
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
    - /url: /chat?FORM=MY02LX
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
            - /url: /search?q=5+Lord+Narasimha+Temples+in+South+India+Where+Miracles+Still+Happen&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_C40618F0B40423E948A2D3D9BD6612F7%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%220%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "5 Lord Narasimha Temples in South India Where Miracles Still Happen" [level=2]
            - img "© Timeslife"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/5-lord-narasimha-temples-in-south-india-where-miracles-still-happen/ar-AA1F4d0a?ocid=TobArticle
              - img
        - listitem:
          - 'link "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days © India Today"':
            - /url: /search?q=From+Jyoti+Malhotra+to+Devender+Singh%3a+11+%27Pak+spies%27+caught+in+India+over+3+days&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_110FD801D62D0E0B923C22BF078A3DBC%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/from-jyoti-malhotra-to-devender-singh-11-pak-spies-caught-in-india-over-3-days/ar-AA1F3KoS?ocid=TobArticle
              - img
        - listitem:
          - link "Bigg Boss Star Shilpa Shirodkar Tests COVID Positive — Early Signs You Need To Watch Out For © Times Now":
            - /url: /search?q=Bigg+Boss+Star+Shilpa+Shirodkar+Tests+COVID+Positive+%e2%80%94+Early+Signs+You+Need+To+Watch+Out+For&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_2F65CCDCB4084E8ACB8DF22033581B66%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%222%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "Bigg Boss Star Shilpa Shirodkar Tests COVID Positive — Early Signs You Need To Watch Out For" [level=2]
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/health/health-news/bigg-boss-star-shilpa-shirodkar-tests-covid-positive-early-signs-you-need-to-watch-out-for/ar-AA1F39jw?ocid=TobArticle
              - img
        - listitem:
          - 'link "IPL Points Table 2025: Updated standing after Lucknow Super Giants vs Sunrisers Hyderabad © Moneycontrol"':
            - /url: /search?q=IPL+Points+Table+2025%3a+Updated+standing+after+Lucknow+Super+Giants+vs+Sunrisers+Hyderabad&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F18972E001C9816EC0F6A03AA3AE08AE%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%223%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "IPL Points Table 2025: Updated standing after Lucknow Super Giants vs Sunrisers Hyderabad" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/ipl-points-table-2025-updated-standing-after-lucknow-super-giants-vs-sunrisers-hyderabad/ar-AA1F5GqL?ocid=TobArticle
              - img
        - listitem:
          - link "Mumbai Indians announce 3 replacements for IPL 2025 playoffs, rope in ex-PBKS opener, ex-CSK pacer and Sri Lankan captain © Sports Tak":
            - /url: /search?q=Mumbai+Indians+announce+3+replacements+for+IPL+2025+playoffs%2c+rope+in+ex-PBKS+opener%2c+ex-CSK+pacer+and+Sri+Lankan+captain&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F6343AB61CD25F029DB9C824F2CD2BE6%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "Mumbai Indians announce 3 replacements for IPL 2025 playoffs, rope in ex-PBKS opener, ex-CSK pacer and Sri Lankan captain" [level=2]
            - img "© Sports Tak"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/mumbai-indians-announce-3-replacements-for-ipl-2025-playoffs-rope-in-ex-pbks-opener-ex-csk-pacer-and-sri-lankan-captain/ar-AA1F6oT3?ocid=TobArticle
              - img
        - listitem:
          - 'link "When the Cast Changed: How Bollywood’s biggest franchises witnessed surprising actor exits and replacements © The Times of India"':
            - /url: /search?q=When+the+Cast+Changed%3a+How+Bollywood%e2%80%99s+biggest+franchises+witnessed+surprising+actor+exits+and+replacements&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_CD17A4A3FD27ABB8B5C491340C745D23%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%225%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "When the Cast Changed: How Bollywood’s biggest franchises witnessed surprising actor exits and replacements" [level=2]'
            - img "© The Times of India"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/when-the-cast-changed-how-bollywood-s-biggest-franchises-witnessed-surprising-actor-exits-and-replacements/ar-AA1F6eu4?ocid=TobArticle
              - img
        - listitem:
          - link "BCCI's rejection of Rohit Sharma's Dhoni-like proposal led to retirement; selectors split between Gill, Pant after talks © Hindustan Times":
            - /url: /search?q=BCCI%27s+rejection+of+Rohit+Sharma%27s+Dhoni-like+proposal+led+to+retirement%3b+selectors+split+between+Gill%2c+Pant+after+talks&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F2D82C3E0594526F409F50A0B56BFBA4%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%226%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "BCCI's rejection of Rohit Sharma's Dhoni-like proposal led to retirement; selectors split between Gill, Pant after talks" [level=2]
            - img "© Hindustan Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/bcci-s-rejection-of-rohit-sharma-s-dhoni-like-proposal-led-to-retirement-selectors-split-between-gill-pant-after-talks/ar-AA1F7em9?ocid=TobArticle
              - img
        - listitem:
          - 'link "''Pakistan army commander was hiding in mosque ...'': Army officials recall intercepted call from PoK amid Op Sindoor strikes © Moneycontrol"':
            - /url: /search?q=%27Pakistan+army+commander+was+hiding+in+mosque+...%27%3a+Army+officials+recall+intercepted+call+from+PoK+amid+Op+Sindoor+strikes&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_5666B4F02D2CA01B8762A5BF77EABFA3%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%227%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "''Pakistan army commander was hiding in mosque ...'': Army officials recall intercepted call from PoK amid Op Sindoor strikes" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/pakistan-army-commander-was-hiding-in-mosque-army-officials-recall-intercepted-call-from-pok-amid-op-sindoor-strikes/ar-AA1F76iL?ocid=TobArticle
              - img
        - listitem:
          - 'link "‘War 2’ teaser drops on Jr NTR’s birthday: Netizens say “The face-off we wanted!” as Hrithik Roshan welcomes him to ‘Hell’ © The Times of India"':
            - /url: /search?q=%e2%80%98War+2%e2%80%99+teaser+drops+on+Jr+NTR%e2%80%99s+birthday%3a+Netizens+say+%e2%80%9cThe+face-off+we+wanted!%e2%80%9d+as+Hrithik+Roshan+welcomes+him+to+%e2%80%98Hell%e2%80%99&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_463C3687A290F2A6EBDC46D554A77283%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%228%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "‘War 2’ teaser drops on Jr NTR’s birthday: Netizens say “The face-off we wanted!” as Hrithik Roshan welcomes him to ‘Hell’" [level=2]'
            - img "© The Times of India"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-teaser-drops-on-jr-ntr-s-birthday-netizens-say-the-face-off-we-wanted-as-hrithik-roshan-welcomes-him-to-hell/ar-AA1F6CXN?ocid=TobArticle
              - img
        - listitem:
          - link "NCP's Chhagan Bhujbal Takes Oath As Maharashtra Minister © NDTV 24x7":
            - /url: /search?q=NCP%27s+Chhagan+Bhujbal+Takes+Oath+As+Maharashtra+Minister&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_4129E131CF953FF938DB2902A18CE499%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%229%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "NCP's Chhagan Bhujbal Takes Oath As Maharashtra Minister" [level=2]
            - img "© NDTV 24x7"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/ncp-s-chhagan-bhujbal-takes-oath-as-maharashtra-minister/ar-AA1F6HME?ocid=TobArticle
              - img
        - listitem:
          - 'link "No jobs in US, UK, Canada for foreign students: Harvard grad warns IITians © India Today"':
            - /url: /search?q=No+jobs+in+US%2c+UK%2c+Canada+for+foreign+students%3a+Harvard+grad+warns+IITians&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_564B2A054EFC996E721DA08D8FA57C3C%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2210%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "No jobs in US, UK, Canada for foreign students: Harvard grad warns IITians" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/no-jobs-in-us-uk-canada-for-foreign-students-harvard-grad-warns-iitians/ar-AA1F75mi?ocid=TobArticle
              - img
        - listitem:
          - 'link "Akshay Kumar to sue Paresh Rawal for Rs 25 crore for walking out of ‘Hera Pheri 3’: Report © The Times of India"':
            - /url: /search?q=Akshay+Kumar+to+sue+Paresh+Rawal+for+Rs+25+crore+for+walking+out+of+%e2%80%98Hera+Pheri+3%e2%80%99%3a+Report&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_4FD2D1C1C778AE8D1E77F32E6A4DDEF1%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2211%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "Akshay Kumar to sue Paresh Rawal for Rs 25 crore for walking out of ‘Hera Pheri 3’: Report" [level=2]'
            - img "© The Times of India"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/akshay-kumar-to-sue-paresh-rawal-for-rs-25-crore-for-walking-out-of-hera-pheri-3-report/ar-AA1F6Bmi?ocid=TobArticle
              - img
        - listitem:
          - 'link "CSK vs RR Predicted Playing 11, IPL Match Today: Players list, impact subs, full squad for Chennai Super Kings vs Rajasthan Royals match © The Indian Express"':
            - /url: /search?q=CSK+vs+RR+Predicted+Playing+11%2c+IPL+Match+Today%3a+Players+list%2c+impact+subs%2c+full+squad+for+Chennai+Super+Kings+vs+Rajasthan+Royals+match&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_AD53FE805FEBA1379E7382717F44D197%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2212%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "CSK vs RR Predicted Playing 11, IPL Match Today: Players list, impact subs, full squad for Chennai Super Kings vs Rajasthan Royals match" [level=2]'
            - img "© The Indian Express"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/other/csk-vs-rr-predicted-playing-11-ipl-match-today-players-list-impact-subs-full-squad-for-chennai-super-kings-vs-rajasthan-royals-match/ar-AA1F6qqQ?ocid=TobArticle
              - img
        - listitem:
          - 'link "Sensex down over 500 points: Why is stock market falling? © India Today"':
            - /url: /search?q=Sensex+down+over+500+points%3a+Why+is+stock+market+falling%3f&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_0E01D429C01CCE845177258965892153%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2213%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "Sensex down over 500 points: Why is stock market falling?" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/markets/sensex-down-over-500-points-why-is-stock-market-falling/ar-AA1F6QLt?ocid=TobArticle
              - img
        - listitem:
          - 'link "Breaking: Supreme Court Begins Hearing on Waqf Law, Debate Over Scope of Interim Relief | ABP NEWS © ABP - Live"':
            - /url: /search?q=Breaking%3a+Supreme+Court+Begins+Hearing+on+Waqf+Law%2c+Debate+Over+Scope+of+Interim+Relief+%7c+ABP+NEWS&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_554B77170BE94C3C0B7E014C74599B1C%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2214%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "Breaking: Supreme Court Begins Hearing on Waqf Law, Debate Over Scope of Interim Relief | ABP NEWS" [level=2]'
            - img "© ABP - Live"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/breaking-supreme-court-begins-hearing-on-waqf-law-debate-over-scope-of-interim-relief-abp-news/vi-AA1F6GPh?ocid=TobArticle
              - img
        - listitem:
          - link "India Logs 164 COVID-19 Cases In A Week, Kerala, Maharashtra Lead Tally © NDTV 24x7":
            - /url: /search?q=India+Logs+164+COVID-19+Cases+In+A+Week%2c+Kerala%2c+Maharashtra+Lead+Tally&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_C87F36232B9ADBC388CC8019FFD3EB80%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2215%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "India Logs 164 COVID-19 Cases In A Week, Kerala, Maharashtra Lead Tally" [level=2]
            - img "© NDTV 24x7"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/health/health-news/india-logs-164-covid-19-cases-in-a-week-kerala-maharashtra-lead-tally/ar-AA1F3VbW?ocid=TobArticle
              - img
        - listitem:
          - link "Cognizant mandates WFH in Bengaluru after rains batter city; other IT firms yet to declare © Moneycontrol":
            - /url: /search?q=Cognizant+mandates+WFH+in+Bengaluru+after+rains+batter+city%3b+other+IT+firms+yet+to+declare&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F3190EB67DEFC00702D817914560132E%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2216%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "Cognizant mandates WFH in Bengaluru after rains batter city; other IT firms yet to declare" [level=2]
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/cognizant-mandates-wfh-in-bengaluru-after-rains-batter-city-other-it-firms-yet-to-declare/ar-AA1F6JhG?ocid=TobArticle
              - img
        - listitem:
          - link "India Logs 164 New Covid-19 Cases In A Week; Govt Reviews Situation As New Wave Hits Asia © News18":
            - /url: /search?q=India+Logs+164+New+Covid-19+Cases+In+A+Week%3b+Govt+Reviews+Situation+As+New+Wave+Hits+Asia&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_32AFE41C4906951ED150412D3CF9B020%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2217%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "India Logs 164 New Covid-19 Cases In A Week; Govt Reviews Situation As New Wave Hits Asia" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/health/health-news/india-logs-164-new-covid-19-cases-in-a-week-govt-reviews-situation-as-new-wave-hits-asia/ar-AA1F5Qv6?ocid=TobArticle
              - img
        - listitem:
          - 'link "Yusuf Pathan Out, Abhishek Banerjee In: Trinamool Switch In India Outreach © NDTV 24x7"':
            - /url: /search?q=Yusuf+Pathan+Out%2c+Abhishek+Banerjee+In%3a+Trinamool+Switch+In+India+Outreach&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_1F236A4411A62FDEDC13919066F60E9A%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2218%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - 'heading "Yusuf Pathan Out, Abhishek Banerjee In: Trinamool Switch In India Outreach" [level=2]'
            - img "© NDTV 24x7"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/yusuf-pathan-out-abhishek-banerjee-in-trinamool-switch-in-india-outreach/ar-AA1F6M00?ocid=TobArticle
              - img
        - listitem:
          - link "Major Tragedy Averted! Bid To Derail 2 Trains, Including Rajdhani, Foiled In Uttar Pradesh's Hardoi © Times Now":
            - /url: /search?q=Major+Tragedy+Averted!+Bid+To+Derail+2+Trains%2c+Including+Rajdhani%2c+Foiled+In+Uttar+Pradesh%27s+Hardoi&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_5D2017D6DF8A682C99D1CA9CA80CCF9A%22+tnVersion%3a%22605a3034-a522-4a99-8347-38d48158a101%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2219%22+tnOrder%3a%2290eae877-3dfb-4220-a2da-1ef8db33bb94%22&form=HPNN01
            - heading "Major Tragedy Averted! Bid To Derail 2 Trains, Including Rajdhani, Foiled In Uttar Pradesh's Hardoi" [level=2]
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/major-tragedy-averted-bid-to-derail-2-trains-including-rajdhani-foiled-in-uttar-pradesh-s-hardoi/ar-AA1F6yFW?ocid=TobArticle
              - img
- complementary:
  - text: DISCOVER
  - main:
    - tablist:
      - tab [selected]
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
    - article "Tamil Actor Vishal To Marry Sai Dhanshika On August 29; Know All About The 'Bride'":
      - text: News18 17h
      - link "Tamil Actor Vishal To Marry Sai Dhanshika On August 29; Know All About The 'Bride'":
        - /url: https://www.msn.com/en-in/entertainment/other/tamil-actor-vishal-to-marry-sai-dhanshika-on-august-29-know-all-about-the-bride/ar-AA1F4ZfJ
      - button "299 Like":
        - img
        - text: "299"
      - button "Dislike":
        - img
      - link "View comments 4 Comment":
        - /url: https://www.msn.com/en-in/entertainment/other/tamil-actor-vishal-to-marry-sai-dhanshika-on-august-29-know-all-about-the-bride/ar-AA1F4ZfJ#comments
        - button "View comments 4 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "In numbers: The massive Covid-19 surge in Asian countries"':
      - text: India Today 1d
      - 'link "In numbers: The massive Covid-19 surge in Asian countries"':
        - /url: https://www.msn.com/en-in/health/health-news/in-numbers-the-massive-covid-19-surge-in-asian-countries/ar-AA1F2MfS
      - button "354 Like":
        - img
        - text: "354"
      - button "Dislike":
        - img
      - link "View comments 3 Comment":
        - /url: https://www.msn.com/en-in/health/health-news/in-numbers-the-massive-covid-19-surge-in-asian-countries/ar-AA1F2MfS#comments
        - button "View comments 3 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - img "Watchlist suggestions"
      - link "Watchlist suggestions":
        - /url: https://www.msn.com/en-in/money/watchlist?ocid=BingHp01
        - heading "Watchlist suggestions" [level=2]
      - button "More options"
      - link "Nifty MidCap NIFTY Midcap 100 Dropping fast ‎-1.62%‎ 56,182.65":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahktar&noti=Price&ocid=BingHp01
        - text: Nifty MidCap
        - img "NIFTY Midcap 100"
        - text: Dropping fast ‎-1.62%‎ 56,182.65
        - button "Add to watchlist":
          - img
      - link "Tata Motors Ltd TATAMOTORS ‎-1.45%‎ 718.90":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahk9xm&ocid=BingHp01
        - text: Tata Motors Ltd TATAMOTORS ‎-1.45%‎ 718.90
        - button "Add to watchlist":
          - img
      - link "Reliance Industries Ltd RELIANCE ‎-1.12%‎ 1,424.60":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahjo52&ocid=BingHp01
        - text: Reliance Industries Ltd RELIANCE ‎-1.12%‎ 1,424.60
        - button "Add to watchlist":
          - img
      - link "Yes Bank Ltd Yes Bank Ltd Dropping fast ‎-1.79%‎ 20.82":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahkpar&noti=Price&ocid=BingHp01
        - text: Yes Bank Ltd
        - img "Yes Bank Ltd"
        - text: Dropping fast ‎-1.79%‎ 20.82
        - button "Add to watchlist":
          - img
      - link "Adani Power Ltd ADANIPOWER ‎-1.08%‎ 556.20":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahgr9c&ocid=BingHp01
        - text: Adani Power Ltd ADANIPOWER ‎-1.08%‎ 556.20
        - button "Add to watchlist":
          - img
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
        - tab "tab-3"
        - tab "tab-4"
        - tab "tab-5"
        - tab "tab-6"
      - link "See watchlist suggestions":
        - /url: https://www.msn.com/en-in/money/watchlist?ocid=BingHp01
    - article:
      - link "Top stories":
        - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=1b0edfb459d84bf7a1cbd3d68e581e57&ocid=BingHp01
        - heading "Top stories" [level=2]
      - button "More options"
      - 'link "NDTV 24x7 54m \"Courts Cannot Intervene Unless...\": Chief Justice''s Big Remark On Waqf Law"':
        - /url: https://www.msn.com/en-in/news/india/courts-cannot-intervene-unless-chief-justice-s-big-remark-on-waqf-law/ar-AA1F6M06
      - link "The Times of India 3h Abhishek Banerjee to represent TMC in all-party delegation on Operation Sindoor":
        - /url: https://www.msn.com/en-in/news/india/abhishek-banerjee-to-represent-tmc-in-all-party-delegation-on-operation-sindoor/ar-AA1F6VcH
      - 'link "Hindustan Times 1h ‘We weren’t watchful'': Jyoti Malhotra''s video on Pahalgam terror attack resurfaces post arrest over spying for Pakistan"':
        - /url: https://www.msn.com/en-in/news/india/we-weren-t-watchful-jyoti-malhotra-s-video-on-pahalgam-terror-attack-resurfaces-post-arrest-over-spying-for-pakistan/ar-AA1F7sVy
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
      - link "See more":
        - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=1b0edfb459d84bf7a1cbd3d68e581e57&ocid=BingHp01
    - article "Learn from IIT Faculty":
      - text: Intellipaat
      - link "Learn from IIT Faculty":
        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=dc053c2d-6d8f-4043-9736-555d3a0cb9f7&bidId=15000&bidderId=4&cmExpId=LV8&impId=5&oAdUnit=379753&publisherId=17160724&rId=8fd537e0-9007-4541-996a-a64e591d969e&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8SPEt1ALHFWPbqTt9UIAp_DVUCUwBdahLtqY7pyyN6o29K2yExKxsSuxkAgMXW7VG2GE8_wxMBZfnOVgbEdSDVVWumMlJoFwJutJbzI7zIuuVOpLIRieU_H68EHblV0_wXcsEo51_yAyyQeSjKAJR_A1wJIkQMdl9-bcEiyF4dqcQiNUEKAYfaHekYTewUENFRfkmdw%26u%3DaHR0cHMlM2ElMmYlMmZpbnRlbGxpcGFhdC5jb20lMmZkYXRhLXNjaWVudGlzdC1jb3Vyc2UtdHJhaW5pbmclMmYlM2Ztc2Nsa2lkJTNkYmVkNWRmNjc5NzExMTA1MDJkYjViNzRiZjI0YjQxMjglMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX0F1ZGllbmNlX1RFX0lOJTI2dXRtX2NvbnRlbnQlM2RUZWNobm9sb2d5LUVkdWNhdGlvbg%26rlid%3Dbed5df67971110502db5b74bf24b4128&rtype=targetURL&tagId=binghp-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir
      - link "Ad":
        - /url: https://account.microsoft.com/privacy/ad-settings
      - link "Ad Choice":
        - /url: https://account.microsoft.com/privacy/ad-settings
      - button "See more"
    - 'article "‘War 2’ teaser drops on Jr NTR’s birthday: Netizens say “The face-off we wanted!” as Hrithik Roshan welcomes him to ‘Hell’"':
      - text: The Times of India 4h
      - 'link "‘War 2’ teaser drops on Jr NTR’s birthday: Netizens say “The face-off we wanted!” as Hrithik Roshan welcomes him to ‘Hell’"':
        - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-teaser-drops-on-jr-ntr-s-birthday-netizens-say-the-face-off-we-wanted-as-hrithik-roshan-welcomes-him-to-hell/ar-AA1F6CXN
      - button "102 Like":
        - img
        - text: "102"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-teaser-drops-on-jr-ntr-s-birthday-netizens-say-the-face-off-we-wanted-as-hrithik-roshan-welcomes-him-to-hell/ar-AA1F6CXN#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "''I''ve Visited Churches, Dargahs...'': CJI Gavai Counters Kapil Sibal During Waqf Hearing"':
      - text: News18 4h
      - 'link "''I''ve Visited Churches, Dargahs...'': CJI Gavai Counters Kapil Sibal During Waqf Hearing"':
        - /url: https://www.msn.com/en-in/news/india/i-ve-visited-churches-dargahs-cji-gavai-counters-kapil-sibal-during-waqf-hearing/ar-AA1F6z4K
      - button "77 Like":
        - img
        - text: "77"
      - button "Dislike":
        - img
      - link "View comments 10 Comment":
        - /url: https://www.msn.com/en-in/news/india/i-ve-visited-churches-dargahs-cji-gavai-counters-kapil-sibal-during-waqf-hearing/ar-AA1F6z4K#comments
        - button "View comments 10 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article "6 metabolism boosting foods to support fat loss":
      - text: The Economic Times 2d
      - link "6 metabolism boosting foods to support fat loss":
        - /url: https://www.msn.com/en-in/health/other/6-metabolism-boosting-foods-to-support-fat-loss/ss-AA1EXsVd
      - button "10 Like":
        - img
        - text: "10"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/health/other/6-metabolism-boosting-foods-to-support-fat-loss/ss-AA1EXsVd#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - link "Sholinganallur":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn
        - heading "Sholinganallur" [level=2]
      - button "My location"
      - button "More options"
      - link "Heavy rain":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn
        - img "Heavy rain"
      - link "31°C":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn
        - text: ‎31‎ ‎°C‎
      - link "Thunderstorm - SevereSevere thunderstorm warning":
        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn&alertid=13421747732009
        - img "Thunderstorm - Severe"
        - text: Severe thunderstorm warning
      - link "See full forecast":
        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn&alertid=13421747732009
        - img "arrow"
      - link "Weather forecast Today High temperature 32° Low temperature 27° Weather forecast Wed High temperature 34° Low temperature 28° Weather forecast Thu High temperature 34° Low temperature 28° Weather forecast Fri High temperature 34° Low temperature 28° Weather forecast Sat High temperature 34° Low temperature 29°":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn
        - list:
          - listitem:
            - link "Weather forecast Today High temperature 32° Low temperature 27°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn&day=1
              - text: Today
              - img "Heavy rain"
              - text: ‎32°‎ ‎27°‎
          - listitem:
            - link "Weather forecast Wed High temperature 34° Low temperature 28°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn&day=2
              - text: Wed
              - img "Partly sunny"
              - text: ‎34°‎ ‎28°‎
          - listitem:
            - link "Weather forecast Thu High temperature 34° Low temperature 28°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn&day=3
              - text: Thu
              - img "Partly sunny"
              - text: ‎34°‎ ‎28°‎
          - listitem:
            - link "Weather forecast Fri High temperature 34° Low temperature 28°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn&day=4
              - text: Fri
              - img "Partly sunny"
              - text: ‎34°‎ ‎28°‎
          - listitem:
            - link "Weather forecast Sat High temperature 34° Low temperature 29°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,TN?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVE4iLCJjIjoiSW5kaWEiLCJpIjoiSU4iLCJnIjoiZW4taW4iLCJ4Ijo4MC4yMTkzMjIyMDQ1ODk4NCwieSI6MTIuOTA4NTY3NDI4NTg4ODY3fQ%3D%3D&weadegreetype=C&ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&content=AlertNowcast_wxalncrn&day=5
              - text: Sat
              - img "Partly sunny"
              - text: ‎34°‎ ‎29°‎
      - button "See full forecast"
    - article:
      - link "Top Engaging News":
        - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d ?? ""?ocid=BingHp01&cvid=1b0edfb459d84bf7a1cbd3d68e581e57
        - heading "Top Engaging News" [level=2]
      - button "More options"
      - link "1 UK, France, Canada Threaten Action Against Israel's Continued Offensive In Gaza, Netanyahu Hits Back":
        - /url: https://www.msn.com/en-in/news/world/uk-france-canada-threaten-action-against-israel-s-continued-offensive-in-gaza-netanyahu-hits-back/ar-AA1F5Txl
        - paragraph: "1"
        - paragraph: UK, France, Canada Threaten Action Against Israel's Continued Offensive In Gaza, Netanyahu Hits Back
      - link "17":
        - /url: https://www.msn.com/en-in/news/world/uk-france-canada-threaten-action-against-israel-s-continued-offensive-in-gaza-netanyahu-hits-back/ar-AA1F5Txl#comments
        - paragraph: "17"
      - 'link "2 ‘Hand Over Hafiz Saeed And It’s Over’: Message To Pakistan From ''The Diplomat''"':
        - /url: https://www.msn.com/en-in/news/india/hand-over-hafiz-saeed-and-it-s-over-message-to-pakistan-from-the-diplomat/ar-AA1F66Qq
        - paragraph: "2"
        - paragraph: "‘Hand Over Hafiz Saeed And It’s Over’: Message To Pakistan From 'The Diplomat'"
      - link "13":
        - /url: https://www.msn.com/en-in/news/india/hand-over-hafiz-saeed-and-it-s-over-message-to-pakistan-from-the-diplomat/ar-AA1F66Qq#comments
        - paragraph: "13"
      - 'link "3 China Boosts Pakistan''s Arsenal: Beijing Fast-Tracks J-35A Fighter Jet Delivery, Signals Deepening Defence Ties"':
        - /url: https://www.msn.com/en-in/news/india/china-boosts-pakistan-s-arsenal-beijing-fast-tracks-j-35a-fighter-jet-delivery-signals-deepening-defence-ties/ar-AA1F6uDv
        - paragraph: "3"
        - paragraph: "China Boosts Pakistan's Arsenal: Beijing Fast-Tracks J-35A Fighter Jet Delivery, Signals Deepening Defence Ties"
      - link "11":
        - /url: https://www.msn.com/en-in/news/india/china-boosts-pakistan-s-arsenal-beijing-fast-tracks-j-35a-fighter-jet-delivery-signals-deepening-defence-ties/ar-AA1F6uDv#comments
        - paragraph: "11"
      - 'link "4 Pleas against Waqf Act in SC: Once a Waqf, always a Waqf, says Kapil Sibal | All you need to know"':
        - /url: https://www.msn.com/en-in/news/india/pleas-against-waqf-act-in-sc-once-a-waqf-always-a-waqf-says-kapil-sibal-all-you-need-to-know/ar-AA1F72qD
        - paragraph: "4"
        - paragraph: "Pleas against Waqf Act in SC: Once a Waqf, always a Waqf, says Kapil Sibal | All you need to know"
      - link "8":
        - /url: https://www.msn.com/en-in/news/india/pleas-against-waqf-act-in-sc-once-a-waqf-always-a-waqf-says-kapil-sibal-all-you-need-to-know/ar-AA1F72qD#comments
        - paragraph: "8"
      - link "5 'Nishan-e-Pakistan next for Rahul Gandhi?' BJP slams Congress leader over Operation Sindoor controversy":
        - /url: https://www.msn.com/en-in/news/india/nishan-e-pakistan-next-for-rahul-gandhi-bjp-slams-congress-leader-over-operation-sindoor-controversy/ar-AA1F6AyP
        - paragraph: "5"
        - paragraph: "'Nishan-e-Pakistan next for Rahul Gandhi?' BJP slams Congress leader over Operation Sindoor controversy"
      - link "14":
        - /url: https://www.msn.com/en-in/news/india/nishan-e-pakistan-next-for-rahul-gandhi-bjp-slams-congress-leader-over-operation-sindoor-controversy/ar-AA1F6AyP#comments
        - paragraph: "14"
      - link "6 Indian-origin professor who lost OCI tag testified against India on Kashmir in US":
        - /url: https://www.msn.com/en-in/news/india/indian-origin-professor-who-lost-oci-tag-testified-against-india-on-kashmir-in-us/ar-AA1F6P5O
        - paragraph: "6"
        - paragraph: Indian-origin professor who lost OCI tag testified against India on Kashmir in US
      - link "9":
        - /url: https://www.msn.com/en-in/news/india/indian-origin-professor-who-lost-oci-tag-testified-against-india-on-kashmir-in-us/ar-AA1F6P5O#comments
        - paragraph: "9"
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
    - article
    - 'article "Ray-Ban Meta smart glasses launched: 10 things to know about AI-powered glasses"':
      - text: Moneycontrol 1w
      - 'link "Ray-Ban Meta smart glasses launched: 10 things to know about AI-powered glasses"':
        - /url: https://www.msn.com/en-in/money/news/ray-ban-meta-smart-glasses-launched-10-things-to-know-about-ai-powered-glasses/ss-AA1EG59t
      - button "164 Like":
        - img
        - text: "164"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/money/news/ray-ban-meta-smart-glasses-launched-10-things-to-know-about-ai-powered-glasses/ss-AA1EG59t#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - img "Traffic Title Traffic Light"
      - link "Traffic incidents":
        - /url: https://www.bing.com/maps/traffic?setlang=en-in&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&ocid=BingHp01&cp=12.901009%7E80.227901&lvl=16&incidentid=81478722384002000&incidenttype=9&incidentloc=12.901009%7E80.227901&detectedloc=12.908567428588867%7E80.21932220458984&detectedlocacc=321.8941955566406
        - heading "Traffic incidents" [level=2]
      - button "Change scenarios"
      - button "More options"
      - link "Roadwork on SH49A / Rajiv Gandhi Salai from Kalaignar Karunanidhi Salai / Perumbakkam Main Road to Lal Bahadur Shastri Street.":
        - /url: https://www.bing.com/maps/traffic?setlang=en-in&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&ocid=BingHp01&cp=12.901009%7E80.227901&lvl=16&incidentid=81478722384002000&incidenttype=9&incidentloc=12.901009%7E80.227901&detectedloc=12.908567428588867%7E80.21932220458984&detectedlocacc=321.8941955566406
      - link "Roadwork on SH49A / Rajiv Gandhi Salai from Kalaignar Karunanidhi Salai / Perumbakkam Main Road to Lal Bahadur Shastri Street.":
        - /url: https://www.bing.com/maps/traffic?setlang=en-in&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&ocid=BingHp01&cp=12.901009%7E80.227901&lvl=16&incidentid=81478722384002000&incidenttype=9&incidentloc=12.901009%7E80.227901&detectedloc=12.908567428588867%7E80.21932220458984&detectedlocacc=321.8941955566406
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
        - tab "tab-3"
      - link "See on map":
        - /url: https://www.bing.com/maps/traffic?setlang=en-in&cvid=1b0edfb459d84bf7a1cbd3d68e581e57&ocid=BingHp01&cp=12.901009%7E80.227901&lvl=16&incidentid=81478722384002000&incidenttype=9&incidentloc=12.901009%7E80.227901&detectedloc=12.908567428588867%7E80.21932220458984&detectedlocacc=321.8941955566406
    - article "Gita’s Wake-Up Call to the Self-Obsessed Mind":
      - text: Timeslife 4d
      - link "Gita’s Wake-Up Call to the Self-Obsessed Mind":
        - /url: https://www.msn.com/en-in/autos/news/gita-s-wake-up-call-to-the-self-obsessed-mind/ar-AA1ETqxz
      - button "341 Like":
        - img
        - text: "341"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/autos/news/gita-s-wake-up-call-to-the-self-obsessed-mind/ar-AA1ETqxz#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article "See the universe like never before captured by a 609 megapixel camera":
      - text: Metro
      - link "See the universe like never before captured by a 609 megapixel camera":
        - /url: https://www.msn.com/en-in/news/techandscience/see-the-universe-like-never-before-captured-by-a-609-megapixel-camera/vi-AA1BeCUB
      - button "8k Like":
        - img
        - text: 8k
      - button "Dislike":
        - img
      - link "View comments 9 Comment":
        - /url: https://www.msn.com/en-in/news/techandscience/see-the-universe-like-never-before-captured-by-a-609-megapixel-camera/vi-AA1BeCUB#comments
        - button "View comments 9 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article
    - article "Madhuri Dixit's Husband Sriram Nene Loses 18 kg, 16% Body Fat in Epic Transformation; Here's How":
      - text: Times Now 3w
      - link "Madhuri Dixit's Husband Sriram Nene Loses 18 kg, 16% Body Fat in Epic Transformation; Here's How":
        - /url: https://www.msn.com/en-in/health/health-news/madhuri-dixit-s-husband-sriram-nene-loses-18-kg-16-body-fat-in-epic-transformation-here-s-how/ar-AA1DxdkB
      - button "408 Like":
        - img
        - text: "408"
      - button "Dislike":
        - img
      - link "View comments 4 Comment":
        - /url: https://www.msn.com/en-in/health/health-news/madhuri-dixit-s-husband-sriram-nene-loses-18-kg-16-body-fat-in-epic-transformation-here-s-how/ar-AA1DxdkB#comments
        - button "View comments 4 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "Gold Price Prediction: Gold prices off Rs 6,500 from peak. Time to buy now?"':
      - text: The Economic Times 5h
      - 'link "Gold Price Prediction: Gold prices off Rs 6,500 from peak. Time to buy now?"':
        - /url: https://www.msn.com/en-in/money/markets/gold-price-prediction-gold-prices-off-rs-6-500-from-peak-time-to-buy-now/ar-AA1F6qWq
      - button "24 Like":
        - img
        - text: "24"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/money/markets/gold-price-prediction-gold-prices-off-rs-6-500-from-peak-time-to-buy-now/ar-AA1F6qWq#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article
    - article "Jofra Archer mimics Ravindra Jadeja's bowling and nails it perfectly - WATCH":
      - text: The Times of India 4h
      - link "Jofra Archer mimics Ravindra Jadeja's bowling and nails it perfectly - WATCH":
        - /url: https://www.msn.com/en-in/sports/cricket/jofra-archer-mimics-ravindra-jadeja-s-bowling-and-nails-it-perfectly-watch/ar-AA1F6Q73
      - button "21 Like":
        - img
        - text: "21"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/sports/cricket/jofra-archer-mimics-ravindra-jadeja-s-bowling-and-nails-it-perfectly-watch/ar-AA1F6Q73#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "Forget crypto, gold and stocks: Why India''s ultra-rich are buying land"':
      - text: India Today 7h
      - 'link "Forget crypto, gold and stocks: Why India''s ultra-rich are buying land"':
        - /url: https://www.msn.com/en-in/money/markets/forget-crypto-gold-and-stocks-why-india-s-ultra-rich-are-buying-land/ar-AA1F6dnx
      - button "47 Like":
        - img
        - text: "47"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/money/markets/forget-crypto-gold-and-stocks-why-india-s-ultra-rich-are-buying-land/ar-AA1F6dnx#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - link "Recommended videos":
        - /url: https://www.msn.com/en-in/video?ocid=BingHp01
        - img
      - link "Recommended videos":
        - /url: https://www.msn.com/en-in/video?ocid=BingHp01
      - link "See more":
        - /url: https://www.msn.com/en-in/video?ocid=BingHp01
      - button "More options":
        - img
      - tabpanel:
        - 'article "Breaking: China Accelerates Construction of Mohammad Dam Amid India-Pakistan Tensions"':
          - 'img "Breaking: China Accelerates Construction of Mohammad Dam Amid India-Pakistan Tensions"'
          - text: 01:05
          - img
          - img "ABP - Live"
          - text: ABP - Live 27m
          - 'link "Breaking: China Accelerates Construction of Mohammad Dam Amid India-Pakistan Tensions"':
            - /url: https://www.msn.com/en-in/news/india/breaking-china-accelerates-construction-of-mohammad-dam-amid-india-pakistan-tensions/vi-AA1F6gJW?ocid=BingHp01
            - 'heading "Breaking: China Accelerates Construction of Mohammad Dam Amid India-Pakistan Tensions" [level=2]'
          - button "See more"
        - 'article "Trump 5% ''Remittance Tax'' Explained: Who Will Be Impacted And What It Means For Indians In US"':
          - 'img "Trump 5% ''Remittance Tax'' Explained: Who Will Be Impacted And What It Means For Indians In US"'
          - text: 05:58
          - img
          - img "Live Mint"
          - text: Live Mint now
          - 'link "Trump 5% ''Remittance Tax'' Explained: Who Will Be Impacted And What It Means For Indians In US"':
            - /url: https://www.msn.com/en-in/money/topstories/trump-5-remittance-tax-explained-who-will-be-impacted-and-what-it-means-for-indians-in-us/vi-AA1F6TII?ocid=BingHp01
            - 'heading "Trump 5% ''Remittance Tax'' Explained: Who Will Be Impacted And What It Means For Indians In US" [level=2]'
          - button "See more"
        - article "Actor Nani Reveals Massive Body Transformation For 'Paradise' | How He Got Chiranjeevi On Board":
          - img "Actor Nani Reveals Massive Body Transformation For 'Paradise' | How He Got Chiranjeevi On Board"
          - text: 21:36
          - img
          - img "The Times of India"
          - text: The Times of India 3w
          - link "Actor Nani Reveals Massive Body Transformation For 'Paradise' | How He Got Chiranjeevi On Board":
            - /url: https://www.msn.com/en-in/news/techandscience/actor-nani-reveals-massive-body-transformation-for-paradise-how-he-got-chiranjeevi-on-board/vi-AA1DChOV?ocid=BingHp01
            - heading "Actor Nani Reveals Massive Body Transformation For 'Paradise' | How He Got Chiranjeevi On Board" [level=2]
          - button "See more"
        - article "Jaguar Stuns The Auto Industry With Its Radical ‘Type 00’ Concept Car, Here’s A Look":
          - img "Jaguar Stuns The Auto Industry With Its Radical ‘Type 00’ Concept Car, Here’s A Look"
          - text: 03:55
          - img
          - img "BT TV"
          - text: BT TV
          - link "Jaguar Stuns The Auto Industry With Its Radical ‘Type 00’ Concept Car, Here’s A Look":
            - /url: https://www.msn.com/en-in/autos/news/jaguar-stuns-the-auto-industry-with-its-radical-type-00-concept-car-here-s-a-look/vi-AA1vc8tp?ocid=BingHp01
            - heading "Jaguar Stuns The Auto Industry With Its Radical ‘Type 00’ Concept Car, Here’s A Look" [level=2]
          - button "See more"
        - article:
          - img "thumbnail"
          - text: 06:26
          - img
          - img "ViralBe"
          - text: ViralBe
          - link "The 10 Ultimate \"Kids Protecting\" Dog Breeds":
            - /url: https://www.msn.com/en-in/video/webcontent/the-10-ultimate-kids-protecting-dog-breeds/vi-AA1yhVdr?vid=ZDTdq8g1M6I&provider=yt&ocid=BingHp01
            - heading "The 10 Ultimate \"Kids Protecting\" Dog Breeds" [level=2]
          - button "See more"
        - 'article "Benefits of early dinner: From boosting health to peaceful sleep"':
          - 'img "Benefits of early dinner: From boosting health to peaceful sleep"'
          - text: 26:02
          - img
          - img "India Today"
          - text: India Today
          - 'link "Benefits of early dinner: From boosting health to peaceful sleep"':
            - /url: https://www.msn.com/en-in/health/wellness/benefits-of-early-dinner-from-boosting-health-to-peaceful-sleep/vi-AA1CNjF9?ocid=BingHp01
            - 'heading "Benefits of early dinner: From boosting health to peaceful sleep" [level=2]'
          - button "See more"
        - article:
          - 'img "Top Haircuts for Broad Foreheads: Style Tips for Women"'
          - text: 04:36
          - img
          - img "The Times of India"
          - text: The Times of India
          - 'link "Top Haircuts for Broad Foreheads: Style Tips for Women"':
            - /url: https://www.msn.com/en-in/lifestyle/style/top-haircuts-for-broad-foreheads-style-tips-for-women/vi-AA1oyGIC?ocid=BingHp01
            - 'heading "Top Haircuts for Broad Foreheads: Style Tips for Women" [level=2]'
          - button "See more"
        - article "If you have bread & potato at home, try this super delicious recipe | Bread potato cheese bites":
          - img "If you have bread & potato at home, try this super delicious recipe | Bread potato cheese bites"
          - text: 03:22
          - img
          - img "Toasted"
          - text: Toasted
          - link "If you have bread & potato at home, try this super delicious recipe | Bread potato cheese bites":
            - /url: https://www.msn.com/en-in/video/webcontent/if-you-have-bread-potato-at-home-try-this-super-delicious-recipe-bread-potato-cheese-bites/vi-AA1xBnRF?vid=FYuKg1U5_as&provider=yt&ocid=BingHp01
            - heading "If you have bread & potato at home, try this super delicious recipe | Bread potato cheese bites" [level=2]
          - button "See more"
        - article:
          - img "Earth’s Most Isolated Places – and Who Actually Lives There"
          - text: 08:30
          - img
          - img "Travel Bucketlist"
          - text: Travel Bucketlist 1w
          - link "Earth’s Most Isolated Places – and Who Actually Lives There":
            - /url: https://www.msn.com/en-in/travel/news/earth-s-most-isolated-places-and-who-actually-lives-there/vi-AA1EfMfw?ocid=BingHp01
            - heading "Earth’s Most Isolated Places – and Who Actually Lives There" [level=2]
          - button "See more"
        - article "Take a look inside the £189,000,000 future of transport for Coventry City":
          - img "Take a look inside the £189,000,000 future of transport for Coventry City"
          - text: 02:29
          - img
          - img "Metro"
          - text: Metro 1w
          - link "Take a look inside the £189,000,000 future of transport for Coventry City":
            - /url: https://www.msn.com/en-in/video/news/take-a-look-inside-the-189-000-000-future-of-transport-for-coventry-city/vi-AA1EjxgJ?ocid=BingHp01
            - heading "Take a look inside the £189,000,000 future of transport for Coventry City" [level=2]
          - button "See more"
        - article "Maruti Suzuki E-Vitara walk-around | The EV that can disrupt the market":
          - img "Maruti Suzuki E-Vitara walk-around | The EV that can disrupt the market"
          - text: 04:15
          - img
          - img "The Economic Times"
          - text: The Economic Times
          - link "Maruti Suzuki E-Vitara walk-around | The EV that can disrupt the market":
            - /url: https://www.msn.com/en-in/autos/news/maruti-suzuki-e-vitara-walk-around-the-ev-that-can-disrupt-the-market/vi-AA1xwm4F?ocid=BingHp01
            - heading "Maruti Suzuki E-Vitara walk-around | The EV that can disrupt the market" [level=2]
          - button "See more"
        - article:
          - img "Sunita Williams on the future of space tourism"
          - text: 02:25
          - img
          - img "India Today"
          - text: India Today
          - link "Sunita Williams on the future of space tourism":
            - /url: https://www.msn.com/en-in/news/techandscience/sunita-williams-on-the-future-of-space-tourism/vi-AA1Bgdnu?ocid=BingHp01
            - heading "Sunita Williams on the future of space tourism" [level=2]
          - button "See more"
        - article "Man Builds Warm Survival Shelter for Winter | Start to Finish Build By @osbushcraft":
          - img "Man Builds Warm Survival Shelter for Winter | Start to Finish Build By @osbushcraft"
          - text: 10:26
          - img
          - img "TechFreeze"
          - text: TechFreeze
          - link "Man Builds Warm Survival Shelter for Winter | Start to Finish Build By @osbushcraft":
            - /url: https://www.msn.com/en-in/video/webcontent/man-builds-warm-survival-shelter-for-winter-start-to-finish-build-by-osbushcraft/vi-O4b0lw7CyarLSw?vid=SxL0ugTRGbw&provider=yt&ocid=BingHp01
            - heading "Man Builds Warm Survival Shelter for Winter | Start to Finish Build By @osbushcraft" [level=2]
          - button "See more"
        - 'article "Gornergrat Railway Zermatt: The Ultimate Scenic Train Journey in Switzerland (4K)"':
          - img "Gornergrat Bahn Zermatt - The Most Scenic Train Ride in Switzerland"
          - text: 05:00
          - img
          - img "The Flying Dutchman"
          - text: The Flying Dutchman
          - 'link "Gornergrat Railway Zermatt: The Ultimate Scenic Train Journey in Switzerland (4K)"':
            - /url: https://www.msn.com/en-in/travel/news/gornergrat-railway-zermatt-the-ultimate-scenic-train-journey-in-switzerland-4k/vi-AA1D1i5H?ocid=BingHp01
            - 'heading "Gornergrat Railway Zermatt: The Ultimate Scenic Train Journey in Switzerland (4K)" [level=2]'
          - button "See more"
        - article:
          - img "6 daily habits to naturally lower cholesterol levels"
          - text: 03:52
          - img
          - img "The Times of India"
          - text: The Times of India
          - link "6 daily habits to naturally lower cholesterol levels":
            - /url: https://www.msn.com/en-in/health/nutrition/6-daily-habits-to-naturally-lower-cholesterol-levels/vi-AA1ri6oB?ocid=BingHp01
            - heading "6 daily habits to naturally lower cholesterol levels" [level=2]
          - button "See more"
        - article:
          - img "Superman official trailer"
          - text: 02:57
          - img
          - img "Metro"
          - text: Metro 5d
          - link "Superman official trailer":
            - /url: https://www.msn.com/en-in/news/world/superman-official-trailer/vi-AA1EMm0Y?ocid=BingHp01
            - heading "Superman official trailer" [level=2]
          - button "See more"
        - article:
          - img "Best Barbacoa Tacos Ever"
          - text: 15:45
          - img
          - img "Kent Rollins"
          - text: Kent Rollins
          - link "Best Barbacoa Tacos Ever":
            - /url: https://www.msn.com/en-in/entertainment/oscars/best-barbacoa-tacos-ever/vi-AA1uHX7x?ocid=BingHp01
            - heading "Best Barbacoa Tacos Ever" [level=2]
          - button "See more"
        - article "Sundar Pichai Reveals The Big Changes AI Will Bring In The Next 2-4 Years":
          - img "Sundar Pichai Reveals The Big Changes AI Will Bring In The Next 2-4 Years"
          - text: 02:13
          - img
          - img "BT TV"
          - text: BT TV
          - link "Sundar Pichai Reveals The Big Changes AI Will Bring In The Next 2-4 Years":
            - /url: https://www.msn.com/en-in/money/news/sundar-pichai-reveals-the-big-changes-ai-will-bring-in-the-next-2-4-years/vi-AA1yS0Ei?ocid=BingHp01
            - heading "Sundar Pichai Reveals The Big Changes AI Will Bring In The Next 2-4 Years" [level=2]
          - button "See more"
        - link "See more":
          - /url: https://www.msn.com/en-in/video?ocid=BingHp01
          - img
          - text: See more
        - button "next":
          - img
    - 'article "‘Courts cannot interfere unless glaring case made out’: CJI Gavai''s remark on Waqf Act"':
      - text: Hindustan Times 1h
      - 'link "‘Courts cannot interfere unless glaring case made out’: CJI Gavai''s remark on Waqf Act"':
        - /url: https://www.msn.com/en-in/news/india/courts-cannot-interfere-unless-glaring-case-made-out-cji-gavai-s-remark-on-waqf-act/ar-AA1F7iXK
      - button "22 Like":
        - img
        - text: "22"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/news/india/courts-cannot-interfere-unless-glaring-case-made-out-cji-gavai-s-remark-on-waqf-act/ar-AA1F7iXK#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article "How Jaguars in the Amazon Are Adapting to Fish Like Bears!":
      - text: Feline Fam
      - link "How Jaguars in the Amazon Are Adapting to Fish Like Bears!":
        - /url: https://www.msn.com/en-in/lifestyle/pets-animals/how-jaguars-in-the-amazon-are-adapting-to-fish-like-bears/vi-AA1Asaeq
      - button "2k Like":
        - img
        - text: 2k
      - button "Dislike":
        - img
      - link "View comments 1 Comment":
        - /url: https://www.msn.com/en-in/lifestyle/pets-animals/how-jaguars-in-the-amazon-are-adapting-to-fish-like-bears/vi-AA1Asaeq#comments
        - button "View comments 1 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article
    - article "When You Lose Everything, You Meet Yourself - Bhagavad Gita Explains":
      - text: Timeslife
      - link "When You Lose Everything, You Meet Yourself - Bhagavad Gita Explains":
        - /url: https://www.msn.com/en-in/health/wellness/when-you-lose-everything-you-meet-yourself-bhagavad-gita-explains/ar-AA1CtpdV
      - button "915 Like":
        - img
        - text: "915"
      - button "Dislike":
        - img
      - link "View comments 1 Comment":
        - /url: https://www.msn.com/en-in/health/wellness/when-you-lose-everything-you-meet-yourself-bhagavad-gita-explains/ar-AA1CtpdV#comments
        - button "View comments 1 Comment":
          - img
      - button "Hide this story"
      - button "See more"
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