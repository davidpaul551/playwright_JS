# Test info

- Name: Auto Suggested Dropdown CaseStudy
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Dropdown\caseStudy2D.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.google.com/", waiting until "load"

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Dropdown\caseStudy2D.spec.js:5:16
```

# Page snapshot

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps":
    - img
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img
- search:
  - img
  - combobox "Search"
  - button "Search by voice":
    - img
  - button "Search by image":
    - img
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "🏏 Today's Googly:"
- link "India made 183 in how many overs in the 1983 World Cup?"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCBc
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCBg
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCBk
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCBo
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCBs
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCBw
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCB0
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCB4
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_MGwfEoyKJxcKWykNoAbR5vZj-fU%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiHpOmP97GNAxUInq8BHaXOGKQQ2ZgBCB8
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test';
   2 |
   3 | test('Auto Suggested Dropdown CaseStudy' , async ({page}) => {
   4 |
>  5 |     await page.goto('https://www.google.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   6 |     await page.locator("//textarea[@id='APjFqb']").fill("easycalculation");
   7 |     await page.waitForSelector("//ul[@role='listbox']/li//div[@class='wM6W7d']")
   8 |     const options = await page.$$("//ul[@role='listbox']/li//div[@class='wM6W7d']")
   9 |     for(const option of options){
  10 |         const text = await option.textContent();
  11 |         console.log(text)
  12 |     }
  13 |
  14 |     await page.locator("//textarea[@id='APjFqb']").press('Enter');
  15 |
  16 |
  17 |     await page.waitForTimeout(50000);
  18 |
  19 |
  20 |     await page.locator("//h3[normalize-space()='EasyCalculation']").click();
  21 |
  22 |     await page.locator("//input[@id='googleSearchId']").fill("playwright");
  23 |     await page.locator("//input[@id='googleSearchId']").press('Enter');
  24 |    
  25 |     // await page.waitForSelector("(//span[normalize-space()='Visit Website'])[1]");
  26 |     await page.locator("(//span[normalize-space()='Visit Website'])[1]").click();
  27 |
  28 |     expect(page.getByAltText('AT*SQA')).toBeVisible();
  29 |     await page.waitForTimeout(2000);
  30 |
  31 |
  32 |
  33 |     await page.close();
  34 |
  35 | });
```