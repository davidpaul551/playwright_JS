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
          - /url: /chat?FORM=hpcodx
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
    - /url: /chat?FORM=hpcodx
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
            - /url: /search?q=5+Lord+Narasimha+Temples+in+South+India+Where+Miracles+Still+Happen&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_C40618F0B40423E948A2D3D9BD6612F7%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%220%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - heading "5 Lord Narasimha Temples in South India Where Miracles Still Happen" [level=2]
            - img "© Timeslife"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/5-lord-narasimha-temples-in-south-india-where-miracles-still-happen/ar-AA1F4d0a?ocid=TobArticle
              - img
        - listitem:
          - 'link "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days © India Today"':
            - /url: /search?q=From+Jyoti+Malhotra+to+Devender+Singh%3a+11+%27Pak+spies%27+caught+in+India+over+3+days&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_110FD801D62D0E0B923C22BF078A3DBC%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/from-jyoti-malhotra-to-devender-singh-11-pak-spies-caught-in-india-over-3-days/ar-AA1F3KoS?ocid=TobArticle
              - img
        - listitem:
          - link "Bigg Boss Star Shilpa Shirodkar Tests COVID Positive — Early Signs You Need To Watch Out For © Times Now":
            - /url: /search?q=Bigg+Boss+Star+Shilpa+Shirodkar+Tests+COVID+Positive+%e2%80%94+Early+Signs+You+Need+To+Watch+Out+For&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_2F65CCDCB4084E8ACB8DF22033581B66%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%222%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - heading "Bigg Boss Star Shilpa Shirodkar Tests COVID Positive — Early Signs You Need To Watch Out For" [level=2]
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/health/health-news/bigg-boss-star-shilpa-shirodkar-tests-covid-positive-early-signs-you-need-to-watch-out-for/ar-AA1F39jw?ocid=TobArticle
              - img
        - listitem:
          - 'link "Bengal Weather: Thunderstorm, Heavy Rain To Lash Cooch Behar, Darjeeling In Next Few Days; Kolkata To See Showers From May 21 | Forecast © Jagran English"':
            - /url: /search?q=Bengal+Weather%3a+Thunderstorm%2c+Heavy+Rain+To+Lash+Cooch+Behar%2c+Darjeeling+In+Next+Few+Days%3b+Kolkata+To+See+Showers+From+May+21+%7c+Forecast&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_33F8E1487EABADF5C49F171B2F78B2C7%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%223%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "Bengal Weather: Thunderstorm, Heavy Rain To Lash Cooch Behar, Darjeeling In Next Few Days; Kolkata To See Showers From May 21 | Forecast" [level=2]'
            - img "© Jagran English"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/bengal-weather-thunderstorm-heavy-rain-to-lash-cooch-behar-darjeeling-in-next-few-days-kolkata-to-see-showers-from-may-21-forecast/ar-AA1F3vZL?ocid=TobArticle
              - img
        - listitem:
          - 'link "When the Cast Changed: How Bollywood’s biggest franchises witnessed surprising actor exits and replacements © The Times of India"':
            - /url: /search?q=When+the+Cast+Changed%3a+How+Bollywood%e2%80%99s+biggest+franchises+witnessed+surprising+actor+exits+and+replacements&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_CD17A4A3FD27ABB8B5C491340C745D23%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "When the Cast Changed: How Bollywood’s biggest franchises witnessed surprising actor exits and replacements" [level=2]'
            - img "© The Times of India"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/when-the-cast-changed-how-bollywood-s-biggest-franchises-witnessed-surprising-actor-exits-and-replacements/ar-AA1F6eu4?ocid=TobArticle
              - img
        - listitem:
          - 'link "War 2: Where To Watch Hrithik Roshan''s Spy Thriller Before Its Sequel Starring Jr NTR, Kiara Advani © Times Now"':
            - /url: /search?q=War+2%3a+Where+To+Watch+Hrithik+Roshan%27s+Spy+Thriller+Before+Its+Sequel+Starring+Jr+NTR%2c+Kiara+Advani&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_94ADF6005D58A30F6FDBFC8A0090C7F3%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%225%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "War 2: Where To Watch Hrithik Roshan''s Spy Thriller Before Its Sequel Starring Jr NTR, Kiara Advani" [level=2]'
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-where-to-watch-hrithik-roshan-s-spy-thriller-before-its-sequel-starring-jr-ntr-kiara-advani/ar-AA1F3j7w?ocid=TobArticle
              - img
        - listitem:
          - 'link "Gold Price Prediction: Gold prices off Rs 6,500 from peak. Time to buy now? © The Economic Times"':
            - /url: /search?q=Gold+Price+Prediction%3a+Gold+prices+off+Rs+6%2c500+from+peak.+Time+to+buy+now%3f&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_A1534B05B416D8579B73AD21597D6B63%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%226%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "Gold Price Prediction: Gold prices off Rs 6,500 from peak. Time to buy now?" [level=2]'
            - img "© The Economic Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/markets/gold-price-prediction-gold-prices-off-rs-6-500-from-peak-time-to-buy-now/ar-AA1F6qWq?ocid=TobArticle
              - img
        - listitem:
          - 'link "Breaking: Supreme Court Begins Hearing on Waqf Law, Debate Over Scope of Interim Relief | ABP NEWS © ABP - Live"':
            - /url: /search?q=Breaking%3a+Supreme+Court+Begins+Hearing+on+Waqf+Law%2c+Debate+Over+Scope+of+Interim+Relief+%7c+ABP+NEWS&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_554B77170BE94C3C0B7E014C74599B1C%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%227%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "Breaking: Supreme Court Begins Hearing on Waqf Law, Debate Over Scope of Interim Relief | ABP NEWS" [level=2]'
            - img "© ABP - Live"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/breaking-supreme-court-begins-hearing-on-waqf-law-debate-over-scope-of-interim-relief-abp-news/vi-AA1F6GPh?ocid=TobArticle
              - img
        - listitem:
          - 'link "Kerala monsoon surprise: Forget May 27, it''s arriving early – here’s what IMD''s revised forecast says © Moneycontrol"':
            - /url: /search?q=Kerala+monsoon+surprise%3a+Forget+May+27%2c+it%27s+arriving+early+%e2%80%93+here%e2%80%99s+what+IMD%27s+revised+forecast+says&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_FE06458985FB16B94617ACE37C976974%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%228%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "Kerala monsoon surprise: Forget May 27, it''s arriving early – here’s what IMD''s revised forecast says" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/topstories/kerala-monsoon-surprise-forget-may-27-it-s-arriving-early-here-s-what-imd-s-revised-forecast-says/ar-AA1F6vDG?ocid=TobArticle
              - img
        - listitem:
          - link "After Pune Tragedy, Lucknow Bans Flower Pots On Balconies To Prevent Fatal Accidents © News18":
            - /url: /search?q=After+Pune+Tragedy%2c+Lucknow+Bans+Flower+Pots+On+Balconies+To+Prevent+Fatal+Accidents&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F3CC3A0FCD06CD1E3318214216D96BE7%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%229%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - heading "After Pune Tragedy, Lucknow Bans Flower Pots On Balconies To Prevent Fatal Accidents" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/after-pune-tragedy-lucknow-bans-flower-pots-on-balconies-to-prevent-fatal-accidents/ar-AA1F6Jro?ocid=TobArticle
              - img
        - listitem:
          - 'link "CSK vs RR Predicted Playing 11, IPL Match Today: Players list, impact subs, full squad for Chennai Super Kings vs Rajasthan Royals match © The Indian Express"':
            - /url: /search?q=CSK+vs+RR+Predicted+Playing+11%2c+IPL+Match+Today%3a+Players+list%2c+impact+subs%2c+full+squad+for+Chennai+Super+Kings+vs+Rajasthan+Royals+match&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_AD53FE805FEBA1379E7382717F44D197%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2210%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "CSK vs RR Predicted Playing 11, IPL Match Today: Players list, impact subs, full squad for Chennai Super Kings vs Rajasthan Royals match" [level=2]'
            - img "© The Indian Express"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/other/csk-vs-rr-predicted-playing-11-ipl-match-today-players-list-impact-subs-full-squad-for-chennai-super-kings-vs-rajasthan-royals-match/ar-AA1F6qqQ?ocid=TobArticle
              - img
        - listitem:
          - 'link "Watch: Rohit Sharma Hands Over His Lamborghini Urus To Dream11 Contest Winner © News18"':
            - /url: /search?q=Watch%3a+Rohit+Sharma+Hands+Over+His+Lamborghini+Urus+To+Dream11+Contest+Winner&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_788BD7267B0B25B12F4E5A84CAB79DA9%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2211%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "Watch: Rohit Sharma Hands Over His Lamborghini Urus To Dream11 Contest Winner" [level=2]'
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/autos/news/watch-rohit-sharma-hands-over-his-lamborghini-urus-to-dream11-contest-winner/ar-AA1F6IFY?ocid=TobArticle
              - img
        - listitem:
          - 'link "Sensex down over 500 points: Why is stock market falling? © India Today"':
            - /url: /search?q=Sensex+down+over+500+points%3a+Why+is+stock+market+falling%3f&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_0E01D429C01CCE845177258965892153%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2212%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "Sensex down over 500 points: Why is stock market falling?" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/markets/sensex-down-over-500-points-why-is-stock-market-falling/ar-AA1F6QLt?ocid=TobArticle
              - img
        - listitem:
          - link "NCP's Chhagan Bhujbal Takes Oath As Maharashtra Minister © NDTV 24x7":
            - /url: /search?q=NCP%27s+Chhagan+Bhujbal+Takes+Oath+As+Maharashtra+Minister&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_4129E131CF953FF938DB2902A18CE499%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2213%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - heading "NCP's Chhagan Bhujbal Takes Oath As Maharashtra Minister" [level=2]
            - img "© NDTV 24x7"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/ncp-s-chhagan-bhujbal-takes-oath-as-maharashtra-minister/ar-AA1F6HME?ocid=TobArticle
              - img
        - listitem:
          - 'link "‘Courts cannot interfere unless glaring case made out’: CJI Gavai''s remark on Waqf Act © Hindustan Times"':
            - /url: /search?q=%e2%80%98Courts+cannot+interfere+unless+glaring+case+made+out%e2%80%99%3a+CJI+Gavai%27s+remark+on+Waqf+Act&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_A9EA4B40118B99070CC2149606EF8500%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2214%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "‘Courts cannot interfere unless glaring case made out’: CJI Gavai''s remark on Waqf Act" [level=2]'
            - img "© Hindustan Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/courts-cannot-interfere-unless-glaring-case-made-out-cji-gavai-s-remark-on-waqf-act/ar-AA1F7iXK?ocid=TobArticle
              - img
        - listitem:
          - 'link "IMD Weather Today: Bengaluru sees heaviest May rain in 2 years; South, Central India on cyclone watch © The Economic Times"':
            - /url: /search?q=IMD+Weather+Today%3a+Bengaluru+sees+heaviest+May+rain+in+2+years%3b+South%2c+Central+India+on+cyclone+watch&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_4217187A5BFD30A987ABB45A65D68058%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2215%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - 'heading "IMD Weather Today: Bengaluru sees heaviest May rain in 2 years; South, Central India on cyclone watch" [level=2]'
            - img "© The Economic Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/imd-weather-today-bengaluru-sees-heaviest-may-rain-in-2-years-south-central-india-on-cyclone-watch/ar-AA1F5MdL?ocid=TobArticle
              - img
        - listitem:
          - link "Mamata Banerjee names Abhishek Banerjee to represent AITC in all-party delegation © The Economic Times":
            - /url: /search?q=Mamata+Banerjee+names+Abhishek+Banerjee+to+represent+AITC+in+all-party+delegation&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_57E5043F1DB55E788F2B2EEAEA57DEA3%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2216%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - heading "Mamata Banerjee names Abhishek Banerjee to represent AITC in all-party delegation" [level=2]
            - img "© The Economic Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/mamata-banerjee-names-abhishek-banerjee-to-represent-aitc-in-all-party-delegation/ar-AA1F6P4A?ocid=TobArticle
              - img
        - listitem:
          - link "Cognizant mandates WFH in Bengaluru after rains batter city; other IT firms yet to declare © Moneycontrol":
            - /url: /search?q=Cognizant+mandates+WFH+in+Bengaluru+after+rains+batter+city%3b+other+IT+firms+yet+to+declare&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F3190EB67DEFC00702D817914560132E%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2217%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - heading "Cognizant mandates WFH in Bengaluru after rains batter city; other IT firms yet to declare" [level=2]
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/cognizant-mandates-wfh-in-bengaluru-after-rains-batter-city-other-it-firms-yet-to-declare/ar-AA1F6JhG?ocid=TobArticle
              - img
        - listitem:
          - link "After India, now Afghanistan plans to build dams to cut water flow to Pakistan, claims Baloch activist © The Economic Times":
            - /url: /search?q=After+India%2c+now+Afghanistan+plans+to+build+dams+to+cut+water+flow+to+Pakistan%2c+claims+Baloch+activist&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_B0519FB30E713B49785E222F5AAA8EB1%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2218%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - heading "After India, now Afghanistan plans to build dams to cut water flow to Pakistan, claims Baloch activist" [level=2]
            - img "© The Economic Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/after-india-now-afghanistan-plans-to-build-dams-to-cut-water-flow-to-pakistan-claims-baloch-activist/ar-AA1F6vtJ?ocid=TobArticle
              - img
        - listitem:
          - link "Nissan issues official statement on Indian operations © The Financial Express":
            - /url: /search?q=Nissan+issues+official+statement+on+Indian+operations&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_AD812321AEBE4E5C9A2F336BE1188385%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2219%22+tnOrder%3a%22b38ecff0-541a-4082-b595-b5903821bda9%22&form=HPNN01
            - heading "Nissan issues official statement on Indian operations" [level=2]
            - img "© The Financial Express"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/autos/news/nissan-issues-official-statement-on-indian-operations/ar-AA1F6JOq?ocid=TobArticle
              - img
- complementary:
  - text: DISCOVER
  - main:
    - tablist:
      - tab
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
    - article "Expert-approved top 6 magnesium-rich foods to avoid fatty liver":
      - text: The Times of India 2w
      - link "Expert-approved top 6 magnesium-rich foods to avoid fatty liver":
        - /url: https://www.msn.com/en-in/health/other/expert-approved-top-6-magnesium-rich-foods-to-avoid-fatty-liver/ss-AA1E52hK
      - button "4k Like":
        - img
        - text: 4k
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/health/other/expert-approved-top-6-magnesium-rich-foods-to-avoid-fatty-liver/ss-AA1E52hK#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "''I''ve Visited Churches, Dargahs...'': CJI Gavai Counters Kapil Sibal During Waqf Hearing"':
      - text: News18 4h
      - 'link "''I''ve Visited Churches, Dargahs...'': CJI Gavai Counters Kapil Sibal During Waqf Hearing"':
        - /url: https://www.msn.com/en-in/news/india/i-ve-visited-churches-dargahs-cji-gavai-counters-kapil-sibal-during-waqf-hearing/ar-AA1F6z4K
      - button "75 Like":
        - img
        - text: "75"
      - button "Dislike":
        - img
      - link "View comments 9 Comment":
        - /url: https://www.msn.com/en-in/news/india/i-ve-visited-churches-dargahs-cji-gavai-counters-kapil-sibal-during-waqf-hearing/ar-AA1F6z4K#comments
        - button "View comments 9 Comment":
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
        - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=c76ece75edac4150fe88962d7de608cf&ocid=BingHp01
        - heading "Top stories" [level=2]
      - button "More options"
      - link "The Times of India 1h Centre urges SC to confine waqf hearing to three issues, Sibal-Singhvi oppose 'piecemeal hearing'":
        - /url: https://www.msn.com/en-in/news/other/centre-urges-sc-to-confine-waqf-hearing-to-three-issues-sibal-singhvi-oppose-piecemeal-hearing/ar-AA1F7vD0
      - 'link "NDTV 24x7 2h Yusuf Pathan Out, Abhishek Banerjee In: Trinamool Switch In India Outreach"':
        - /url: https://www.msn.com/en-in/news/india/yusuf-pathan-out-abhishek-banerjee-in-trinamool-switch-in-india-outreach/ar-AA1F6M00
      - 'link "Hindustan Times 1h ‘We weren’t watchful'': Jyoti Malhotra''s video on Pahalgam terror attack resurfaces post arrest over spying for Pakistan"':
        - /url: https://www.msn.com/en-in/news/india/we-weren-t-watchful-jyoti-malhotra-s-video-on-pahalgam-terror-attack-resurfaces-post-arrest-over-spying-for-pakistan/ar-AA1F7sVy
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
      - link "See more":
        - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=c76ece75edac4150fe88962d7de608cf&ocid=BingHp01
    - article "Maruti Suzuki's new 5-seater SUV Escudo coming this Diwali":
      - text: India Today 1d
      - link "Maruti Suzuki's new 5-seater SUV Escudo coming this Diwali":
        - /url: https://www.msn.com/en-in/autos/news/maruti-suzuki-s-new-5-seater-suv-escudo-coming-this-diwali/ar-AA1F2h1B
      - button "56 Like":
        - img
        - text: "56"
      - button "Dislike":
        - img
      - link "View comments 1 Comment":
        - /url: https://www.msn.com/en-in/autos/news/maruti-suzuki-s-new-5-seater-suv-escudo-coming-this-diwali/ar-AA1F2h1B#comments
        - button "View comments 1 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "‘War 2’ teaser drops on Jr NTR’s birthday: Netizens say “The face-off we wanted!” as Hrithik Roshan welcomes him to ‘Hell’"':
      - text: The Times of India 4h
      - 'link "‘War 2’ teaser drops on Jr NTR’s birthday: Netizens say “The face-off we wanted!” as Hrithik Roshan welcomes him to ‘Hell’"':
        - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-teaser-drops-on-jr-ntr-s-birthday-netizens-say-the-face-off-we-wanted-as-hrithik-roshan-welcomes-him-to-hell/ar-AA1F6CXN
      - button "88 Like":
        - img
        - text: "88"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-teaser-drops-on-jr-ntr-s-birthday-netizens-say-the-face-off-we-wanted-as-hrithik-roshan-welcomes-him-to-hell/ar-AA1F6CXN#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "COVID-19 Surge: How Many Active Cases Are There in India? 5 Things We Know About the Spike"':
      - text: Times Now 8h
      - 'link "COVID-19 Surge: How Many Active Cases Are There in India? 5 Things We Know About the Spike"':
        - /url: https://www.msn.com/en-in/health/health-news/covid-19-surge-how-many-active-cases-are-there-in-india-5-things-we-know-about-the-spike/ar-AA1F5ZID
      - button "90 Like":
        - img
        - text: "90"
      - button "Dislike":
        - img
      - link "View comments 1 Comment":
        - /url: https://www.msn.com/en-in/health/health-news/covid-19-surge-how-many-active-cases-are-there-in-india-5-things-we-know-about-the-spike/ar-AA1F5ZID#comments
        - button "View comments 1 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article "Rs 11,000 crore in Reliance shares lie unclaimed, says Gurmeet Chadha warning of IEPF bottlenecks":
      - text: The Economic Times 1d
      - link "Rs 11,000 crore in Reliance shares lie unclaimed, says Gurmeet Chadha warning of IEPF bottlenecks":
        - /url: https://www.msn.com/en-in/news/other/rs-11-000-crore-in-reliance-shares-lie-unclaimed-says-gurmeet-chadha-warning-of-iepf-bottlenecks/ar-AA1F2csS
      - button "63 Like":
        - img
        - text: "63"
      - button "Dislike":
        - img
      - link "View comments 1 Comment":
        - /url: https://www.msn.com/en-in/news/other/rs-11-000-crore-in-reliance-shares-lie-unclaimed-says-gurmeet-chadha-warning-of-iepf-bottlenecks/ar-AA1F2csS#comments
        - button "View comments 1 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - link "Sholinganallur":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,Tamil-Nadu?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjIyODIxODA3ODYxMzI4LCJ5IjoxMi45MTU0NzIwMzA2Mzk2NDh9&weadegreetype=C&ocid=BingHp01&cvid=c76ece75edac4150fe88962d7de608cf&content=Storm_wxlgtnb
        - heading "Sholinganallur" [level=2]
      - button "My location"
      - button "More options"
      - link "Heavy rain":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,Tamil-Nadu?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjIyODIxODA3ODYxMzI4LCJ5IjoxMi45MTU0NzIwMzA2Mzk2NDh9&weadegreetype=C&ocid=BingHp01&cvid=c76ece75edac4150fe88962d7de608cf&content=Storm_wxlgtnb
        - img "Heavy rain"
      - link "31°C":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Sholinganallur,Tamil-Nadu?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjIyODIxODA3ODYxMzI4LCJ5IjoxMi45MTU0NzIwMzA2Mzk2NDh9&weadegreetype=C&ocid=BingHp01&cvid=c76ece75edac4150fe88962d7de608cf&content=Storm_wxlgtnb
        - text: ‎31‎ ‎°C‎
      - link "Lightning nearby":
        - /url: https://www.msn.com/en-in/weather/maps/radar/in-Sholinganallur,Tamil-Nadu?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjIyODIxODA3ODYxMzI4LCJ5IjoxMi45MTU0NzIwMzA2Mzk2NDh9&weadegreetype=C&ocid=BingHp01&cvid=c76ece75edac4150fe88962d7de608cf
        - img
        - text: Lightning nearby
      - link "See full forecast":
        - /url: https://www.msn.com/en-in/weather/maps/radar/in-Sholinganallur,Tamil-Nadu?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjIyODIxODA3ODYxMzI4LCJ5IjoxMi45MTU0NzIwMzA2Mzk2NDh9&weadegreetype=C&ocid=BingHp01&cvid=c76ece75edac4150fe88962d7de608cf
        - img "arrow"
      - link "Larger map":
        - /url: https://www.msn.com/en-in/weather/maps/radar/in-Sholinganallur,Tamil-Nadu?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjIyODIxODA3ODYxMzI4LCJ5IjoxMi45MTU0NzIwMzA2Mzk2NDh9&weadegreetype=C&ocid=BingHp01&cvid=c76ece75edac4150fe88962d7de608cf&content=Storm_wxlgtnb&zoom=8
      - link "Heavy rain now":
        - /url: https://www.msn.com/en-in/weather/maps/radar/in-Sholinganallur,Tamil-Nadu?loc=eyJsIjoiU2hvbGluZ2FuYWxsdXIiLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjIyODIxODA3ODYxMzI4LCJ5IjoxMi45MTU0NzIwMzA2Mzk2NDh9&weadegreetype=C&ocid=BingHp01&cvid=c76ece75edac4150fe88962d7de608cf&content=Storm_wxlgtnb&zoom=8
      - button "See full forecast"
    - article:
      - link "Top Engaging News":
        - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d ?? ""?ocid=BingHp01&cvid=c76ece75edac4150fe88962d7de608cf
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
      - 'link "4 Bengaluru city roads ''caused mental trauma'': Man sends Rs 50 lakh notice to BBMP"':
        - /url: https://www.msn.com/en-in/health/health-news/bengaluru-city-roads-caused-mental-trauma-man-sends-rs-50-lakh-notice-to-bbmp/ar-AA1F691O
        - paragraph: "4"
        - paragraph: "Bengaluru city roads 'caused mental trauma': Man sends Rs 50 lakh notice to BBMP"
      - link "9":
        - /url: https://www.msn.com/en-in/health/health-news/bengaluru-city-roads-caused-mental-trauma-man-sends-rs-50-lakh-notice-to-bbmp/ar-AA1F691O#comments
        - paragraph: "9"
      - 'link "5 Pleas against Waqf Act in SC: Once a Waqf, always a Waqf, says Kapil Sibal | All you need to know"':
        - /url: https://www.msn.com/en-in/news/india/pleas-against-waqf-act-in-sc-once-a-waqf-always-a-waqf-says-kapil-sibal-all-you-need-to-know/ar-AA1F72qD
        - paragraph: "5"
        - paragraph: "Pleas against Waqf Act in SC: Once a Waqf, always a Waqf, says Kapil Sibal | All you need to know"
      - link "8":
        - /url: https://www.msn.com/en-in/news/india/pleas-against-waqf-act-in-sc-once-a-waqf-always-a-waqf-says-kapil-sibal-all-you-need-to-know/ar-AA1F72qD#comments
        - paragraph: "8"
      - link "6 'Nishan-e-Pakistan next for Rahul Gandhi?' BJP slams Congress leader over Operation Sindoor controversy":
        - /url: https://www.msn.com/en-in/news/india/nishan-e-pakistan-next-for-rahul-gandhi-bjp-slams-congress-leader-over-operation-sindoor-controversy/ar-AA1F6AyP
        - paragraph: "6"
        - paragraph: "'Nishan-e-Pakistan next for Rahul Gandhi?' BJP slams Congress leader over Operation Sindoor controversy"
      - link "14":
        - /url: https://www.msn.com/en-in/news/india/nishan-e-pakistan-next-for-rahul-gandhi-bjp-slams-congress-leader-over-operation-sindoor-controversy/ar-AA1F6AyP#comments
        - paragraph: "14"
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
    - article
    - 'article "From Flying Flea C6 to e-Access: Know about the upcoming electric 2-wheelers"':
      - text: India Today 5d
      - 'link "From Flying Flea C6 to e-Access: Know about the upcoming electric 2-wheelers"':
        - /url: https://www.msn.com/en-in/autos/news/from-flying-flea-c6-to-e-access-know-about-the-upcoming-electric-2-wheelers/ar-AA1EODgA
      - button "12 Like":
        - img
        - text: "12"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/autos/news/from-flying-flea-c6-to-e-access-know-about-the-upcoming-electric-2-wheelers/ar-AA1EODgA#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - img
      - link "Games":
        - /url: https://www.msn.com/en-in/play?ocid=msedgntp&cgfrom=cg_ntp_sd_cardtitle
        - heading "Games" [level=2]
      - button "More options"
      - grid:
        - gridcell "Krakax.com":
          - img
          - text: Krakax.com
        - gridcell "Butterfly Shimai":
          - img
          - text: Butterfly Shimai
        - 'gridcell "10x10: fill the grid"':
          - img
          - text: "10x10: fill the grid"
        - gridcell "Dominoes FRVR":
          - img
          - text: Dominoes FRVR
        - gridcell "Brick Out":
          - img
          - text: Brick Out
        - gridcell "Sudoku Blocks":
          - img
          - text: Sudoku Blocks
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
      - link "Explore more games":
        - /url: https://www.msn.com/en-in/play?ocid=msedgntp&cgfrom=cg_ntp_sd_cardseemore
    - 'article "Average salaries across Europe: Which countries have the highest pay?"':
      - text: Euronews (English) 1w
      - 'link "Average salaries across Europe: Which countries have the highest pay?"':
        - /url: https://www.msn.com/en-in/news/other/average-salaries-across-europe-which-countries-have-the-highest-pay/ar-AA1Eed93
      - button "48 Like":
        - img
        - text: "48"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/news/other/average-salaries-across-europe-which-countries-have-the-highest-pay/ar-AA1Eed93#comments
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
    - article:
      - img "Traffic Title Traffic Light"
      - link "Traffic incidents":
        - /url: https://www.bing.com/maps/traffic?setlang=en-in&cvid=c76ece75edac4150fe88962d7de608cf&ocid=BingHp01&cp=12.901009%7E80.227901&lvl=16&incidentid=81478722384002000&incidenttype=9&incidentloc=12.901009%7E80.227901&detectedloc=12.915472030639648%7E80.22821807861328&detectedlocacc=321.908935546875
        - heading "Traffic incidents" [level=2]
      - button "Change scenarios"
      - button "More options"
      - link "Roadwork on SH49A / Rajiv Gandhi Salai from Kalaignar Karunanidhi Salai / Perumbakkam Main Road to Lal Bahadur Shastri Street.":
        - /url: https://www.bing.com/maps/traffic?setlang=en-in&cvid=c76ece75edac4150fe88962d7de608cf&ocid=BingHp01&cp=12.901009%7E80.227901&lvl=16&incidentid=81478722384002000&incidenttype=9&incidentloc=12.901009%7E80.227901&detectedloc=12.915472030639648%7E80.22821807861328&detectedlocacc=321.908935546875
      - link "Roadwork on SH49A / Rajiv Gandhi Salai from Kalaignar Karunanidhi Salai / Perumbakkam Main Road to Lal Bahadur Shastri Street.":
        - /url: https://www.bing.com/maps/traffic?setlang=en-in&cvid=c76ece75edac4150fe88962d7de608cf&ocid=BingHp01&cp=12.901009%7E80.227901&lvl=16&incidentid=81478722384002000&incidenttype=9&incidentloc=12.901009%7E80.227901&detectedloc=12.915472030639648%7E80.22821807861328&detectedlocacc=321.908935546875
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
        - tab "tab-3"
      - link "See on map":
        - /url: https://www.bing.com/maps/traffic?setlang=en-in&cvid=c76ece75edac4150fe88962d7de608cf&ocid=BingHp01&cp=12.901009%7E80.227901&lvl=16&incidentid=81478722384002000&incidenttype=9&incidentloc=12.901009%7E80.227901&detectedloc=12.915472030639648%7E80.22821807861328&detectedlocacc=321.908935546875
    - 'article "How a trip to Sri Lanka sparked backlash against Asin Thottumkal and impacted her Tamil film career: ‘Involved merely in the capacity of an artiste’"':
      - text: The Indian Express 22h
      - 'link "How a trip to Sri Lanka sparked backlash against Asin Thottumkal and impacted her Tamil film career: ‘Involved merely in the capacity of an artiste’"':
        - /url: https://www.msn.com/en-in/entertainment/southcinema/how-a-trip-to-sri-lanka-sparked-backlash-against-asin-thottumkal-and-impacted-her-tamil-film-career-involved-merely-in-the-capacity-of-an-artiste/ar-AA1F40ay
      - button "25 Like":
        - img
        - text: "25"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/entertainment/southcinema/how-a-trip-to-sri-lanka-sparked-backlash-against-asin-thottumkal-and-impacted-her-tamil-film-career-involved-merely-in-the-capacity-of-an-artiste/ar-AA1F40ay#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article
    - 'article "Gold Price Prediction: Gold prices off Rs 6,500 from peak. Time to buy now?"':
      - text: The Economic Times 4h
      - 'link "Gold Price Prediction: Gold prices off Rs 6,500 from peak. Time to buy now?"':
        - /url: https://www.msn.com/en-in/money/markets/gold-price-prediction-gold-prices-off-rs-6-500-from-peak-time-to-buy-now/ar-AA1F6qWq
      - button "23 Like":
        - img
        - text: "23"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/money/markets/gold-price-prediction-gold-prices-off-rs-6-500-from-peak-time-to-buy-now/ar-AA1F6qWq#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
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
        - 'article "Anar Benefits: 5 reasons to eat a bowl of pomegranate everyday"':
          - 'img "Anar Benefits: 5 reasons to eat a bowl of pomegranate everyday"'
          - text: 02:58
          - img
          - img "The Times of India"
          - text: The Times of India
          - 'link "Anar Benefits: 5 reasons to eat a bowl of pomegranate everyday"':
            - /url: https://www.msn.com/en-in/news/india/anar-benefits-5-reasons-to-eat-a-bowl-of-pomegranate-everyday/vi-AA1sxRJ1?ocid=BingHp01
            - 'heading "Anar Benefits: 5 reasons to eat a bowl of pomegranate everyday" [level=2]'
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
        - 'article "Breaking: China Accelerates Construction of Mohammad Dam Amid India-Pakistan Tensions"':
          - 'img "Breaking: China Accelerates Construction of Mohammad Dam Amid India-Pakistan Tensions"'
          - text: 01:05
          - img
          - img "ABP - Live"
          - text: ABP - Live 5m
          - 'link "Breaking: China Accelerates Construction of Mohammad Dam Amid India-Pakistan Tensions"':
            - /url: https://www.msn.com/en-in/news/india/breaking-china-accelerates-construction-of-mohammad-dam-amid-india-pakistan-tensions/vi-AA1F6gJW?ocid=BingHp01
            - 'heading "Breaking: China Accelerates Construction of Mohammad Dam Amid India-Pakistan Tensions" [level=2]'
          - button "See more"
        - article "No steroids, no rasmalai - The fitness journey of Kartik Aaryan to Chandu Champion":
          - img "No steroids, no rasmalai - The fitness journey of Kartik Aaryan to Chandu Champion"
          - text: 01:57
          - img
          - img "India Today"
          - text: India Today
          - link "No steroids, no rasmalai - The fitness journey of Kartik Aaryan to Chandu Champion":
            - /url: https://www.msn.com/en-in/news/india/no-steroids-no-rasmalai-the-fitness-journey-of-kartik-aaryan-to-chandu-champion/vi-BB1nJV9a?ocid=BingHp01
            - heading "No steroids, no rasmalai - The fitness journey of Kartik Aaryan to Chandu Champion" [level=2]
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
        - article "Top Dry Fruits to Lower Uric Acid Levels - A Healthy Snack Option":
          - img "Top Dry Fruits to Lower Uric Acid Levels - A Healthy Snack Option"
          - text: 04:09
          - img
          - img "The Times of India"
          - text: The Times of India
          - link "Top Dry Fruits to Lower Uric Acid Levels - A Healthy Snack Option":
            - /url: https://www.msn.com/en-in/health/nutrition/top-dry-fruits-to-lower-uric-acid-levels-a-healthy-snack-option/vi-AA1tcxWT?ocid=BingHp01
            - heading "Top Dry Fruits to Lower Uric Acid Levels - A Healthy Snack Option" [level=2]
          - button "See more"
        - 'article "Brienz Rothorn Bahn: The Most Scenic Train Ride in Switzerland (4K)"':
          - img "Brienz Rothorn Bahn - The World’s Most Beautiful Train Ride In Switzerland"
          - text: 05:00
          - img
          - img "The Flying Dutchman"
          - text: The Flying Dutchman
          - 'link "Brienz Rothorn Bahn: The Most Scenic Train Ride in Switzerland (4K)"':
            - /url: https://www.msn.com/en-in/travel/news/brienz-rothorn-bahn-the-most-scenic-train-ride-in-switzerland-4k/vi-AA1D5SHI?ocid=BingHp01
            - 'heading "Brienz Rothorn Bahn: The Most Scenic Train Ride in Switzerland (4K)" [level=2]'
          - button "See more"
        - article "The Perfect Grilled Chicken | Tips for Juicy, Tender Chicken on the Grill":
          - img "The Perfect Grilled Chicken | Tips for Juicy, Tender Chicken on the Grill"
          - text: 14:09
          - img
          - img "Kent Rollins"
          - text: Kent Rollins
          - link "The Perfect Grilled Chicken | Tips for Juicy, Tender Chicken on the Grill":
            - /url: https://www.msn.com/en-in/news/other/the-perfect-grilled-chicken-tips-for-juicy-tender-chicken-on-the-grill/vi-AA1CWQS3?ocid=BingHp01
            - heading "The Perfect Grilled Chicken | Tips for Juicy, Tender Chicken on the Grill" [level=2]
          - button "See more"
        - article "How Jake Paul transformed from a skinny internet star to a boxing powerhouse":
          - img "How Jake Paul transformed from a skinny internet star to a boxing powerhouse"
          - text: 02:33
          - img
          - img "India Today"
          - text: India Today
          - link "How Jake Paul transformed from a skinny internet star to a boxing powerhouse":
            - /url: https://www.msn.com/en-in/money/topstories/how-jake-paul-transformed-from-a-skinny-internet-star-to-a-boxing-powerhouse/vi-AA1umzBJ?ocid=BingHp01
            - heading "How Jake Paul transformed from a skinny internet star to a boxing powerhouse" [level=2]
          - button "See more"
        - article:
          - 'img "Electric cars: Which regions in Europe have the highest density? Thumbnail"'
          - text: 01:30
          - img
          - img "Euronews (English)"
          - text: Euronews (English)
          - 'link "Electric cars: Which regions in Europe have the highest density?"':
            - /url: https://www.msn.com/en-in/autos/news/electric-cars-which-regions-in-europe-have-the-highest-density/vi-AA1zzMJQ?ocid=BingHp01
            - 'heading "Electric cars: Which regions in Europe have the highest density?" [level=2]'
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
        - article "Reviewing Hyundai's New Electric Creta-SUV | Take A Look | N18V":
          - img "Reviewing Hyundai's New Electric Creta-SUV | Take A Look | N18V"
          - text: 07:00
          - img
          - img "CNBCTV18"
          - text: CNBCTV18
          - link "Reviewing Hyundai's New Electric Creta-SUV | Take A Look | N18V":
            - /url: https://www.msn.com/en-in/autos/news/reviewing-hyundai-s-new-electric-creta-suv-take-a-look-n18v/vi-AA1xhIob?ocid=BingHp01
            - heading "Reviewing Hyundai's New Electric Creta-SUV | Take A Look | N18V" [level=2]
          - button "See more"
        - article "Gimmelwald, Switzerland – Discover an Authentic Swiss Mountain Village (4K)":
          - 'img "Gimmelwald: A Picturesque Mountain Village in Switzerland (4K)"'
          - text: 05:00
          - img
          - img "The Flying Dutchman"
          - text: The Flying Dutchman 2w
          - link "Gimmelwald, Switzerland – Discover an Authentic Swiss Mountain Village (4K)":
            - /url: https://www.msn.com/en-in/travel/news/gimmelwald-switzerland-discover-an-authentic-swiss-mountain-village-4k/vi-AA1DT0rf?ocid=BingHp01
            - heading "Gimmelwald, Switzerland – Discover an Authentic Swiss Mountain Village (4K)" [level=2]
          - button "See more"
        - article:
          - img "Marvel Television's Ironheart official trailer"
          - text: 02:46
          - img
          - img "Metro"
          - text: Metro 5d
          - link "Marvel Television's Ironheart official trailer":
            - /url: https://www.msn.com/en-in/news/world/marvel-television-s-ironheart-official-trailer/vi-AA1ELEDT?ocid=BingHp01
            - heading "Marvel Television's Ironheart official trailer" [level=2]
          - button "See more"
        - 'article "Sai Sudharsan understands the game well: GT coach praises opener''s consistency"':
          - 'img "Sai Sudharsan understands the game well: GT coach praises opener''s consistency"'
          - text: 04:43
          - img
          - img "India Today"
          - text: India Today 23h
          - 'link "Sai Sudharsan understands the game well: GT coach praises opener''s consistency"':
            - /url: https://www.msn.com/en-in/sports/cricket/sai-sudharsan-understands-the-game-well-gt-coach-praises-opener-s-consistency/vi-AA1F35rx?ocid=BingHp01
            - 'heading "Sai Sudharsan understands the game well: GT coach praises opener''s consistency" [level=2]'
          - button "See more"
        - article:
          - img "9 U.S. Cities Full of Charm and Character"
          - text: 08:39
          - img
          - img "Travel Bucketlist"
          - text: Travel Bucketlist
          - link "9 U.S. Cities Full of Charm and Character":
            - /url: https://www.msn.com/en-in/travel/news/9-u-s-cities-full-of-charm-and-character/vi-AA1xwAFh?ocid=BingHp01
            - heading "9 U.S. Cities Full of Charm and Character" [level=2]
          - button "See more"
        - article "How Much Screen Time Is Safe For Your Child? Here Are Some Expert Dos, Don'ts And Quick Tips":
          - img "How Much Screen Time Is Safe For Your Child? Here Are Some Expert Dos, Don'ts And Quick Tips"
          - text: 03:46
          - img
          - img "The Times of India"
          - text: The Times of India
          - link "How Much Screen Time Is Safe For Your Child? Here Are Some Expert Dos, Don'ts And Quick Tips":
            - /url: https://www.msn.com/en-in/money/technology/how-much-screen-time-is-safe-for-your-child-here-are-some-expert-dos-don-ts-and-quick-tips/vi-AA1ri3R6?ocid=BingHp01
            - heading "How Much Screen Time Is Safe For Your Child? Here Are Some Expert Dos, Don'ts And Quick Tips" [level=2]
          - button "See more"
        - link "See more":
          - /url: https://www.msn.com/en-in/video?ocid=BingHp01
          - img
          - text: See more
        - button "next":
          - img
    - 'article "Paras Defence, Cochin Shipyard: Why these defence stocks tumbled over 6% today"':
      - text: India Today 4h
      - 'link "Paras Defence, Cochin Shipyard: Why these defence stocks tumbled over 6% today"':
        - /url: https://www.msn.com/en-in/money/markets/paras-defence-cochin-shipyard-why-these-defence-stocks-tumbled-over-6-today/ar-AA1F6AzN
      - button "24 Like":
        - img
        - text: "24"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/money/markets/paras-defence-cochin-shipyard-why-these-defence-stocks-tumbled-over-6-today/ar-AA1F6AzN#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article "9 Countries That Seem Unsafe but Are Actually Safe to Visit":
      - text: Travel Bucketlist 1d
      - link "9 Countries That Seem Unsafe but Are Actually Safe to Visit":
        - /url: https://www.msn.com/en-in/travel/news/9-countries-that-seem-unsafe-but-are-actually-safe-to-visit/ss-AA1F306L
      - button "3 Like":
        - img
        - text: "3"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/travel/news/9-countries-that-seem-unsafe-but-are-actually-safe-to-visit/ss-AA1F306L#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article
    - article "Second-gen Jeep Compass revealed ahead of global debut, partners with Juventus FC":
      - text: The Financial Express 3d
      - link "Second-gen Jeep Compass revealed ahead of global debut, partners with Juventus FC":
        - /url: https://www.msn.com/en-in/autos/news/second-gen-jeep-compass-revealed-ahead-of-global-debut-partners-with-juventus-fc/ar-AA1EWLL5
      - button "10 Like":
        - img
        - text: "10"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/autos/news/second-gen-jeep-compass-revealed-ahead-of-global-debut-partners-with-juventus-fc/ar-AA1EWLL5#comments
        - button "Start the conversation":
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