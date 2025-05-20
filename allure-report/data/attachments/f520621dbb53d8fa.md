# Test info

- Name: Ebay Registration
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\caseStudyBuilt-inLocators-Ebay.spec.js:4:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Personal' })

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\caseStudyBuilt-inLocators-Ebay.spec.js:15:56
```

# Page snapshot

```yaml
- img
- banner:
  - button "Scroll to top"
  - link "Skip to main content":
    - /url: "#mainContent"
  - link "eBay Home":
    - /url: https://www.ebay.com
    - img "eBay Home"
- img
- heading "Please verify yourself to continue" [level=1]
- text: To keep eBay a safe place to buy and sell, we will occasionally ask you to verify yourself. This helps us to block unauthorized users from entering our site. Please verify yourself
- iframe
- text: If you are having difficulties with rendering of images on the above verification page, eBay suggests using the latest version of your browser, or an alternate browser listed on the
- link "customer service page":
  - /url: /help/policies/technical-issues/technical-issues?id=4220&st=3&pos=1&query=Technical%20issues&intent=supported%20browsers&lucenceai=lucenceai
- text: .
- contentinfo:
  - list:
    - listitem:
      - link "About eBay":
        - /url: https://www.ebayinc.com
    - listitem:
      - link "Announcements":
        - /url: https://community.ebay.com/t5/Announcements/bg-p/Announcements
    - listitem:
      - link "Community":
        - /url: https://community.ebay.com
    - listitem:
      - link "Security Center":
        - /url: https://pages.ebay.com/securitycenter/index.html
    - listitem:
      - link "Seller Center":
        - /url: https://www.ebay.com/sellercenter
    - listitem:
      - link "Policies":
        - /url: https://www.ebay.com/help/policies/default/ebays-rules-policies?id=4205
    - listitem:
      - link "Affiliates":
        - /url: https://partnernetwork.ebay.com/
    - listitem:
      - link "Help & Contact":
        - /url: https://www.ebay.com/help/home
    - listitem:
      - link "Site Map":
        - /url: https://pages.ebay.com/sitemap.html
  - text: Copyright © 1995-2025 eBay Inc. All Rights Reserved.
  - link "Accessibility":
    - /url: https://www.ebayinc.com/accessibility/
  - text: ","
  - link "User Agreement":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259
  - text: ","
  - link "Privacy":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260
  - text: ","
  - link "Consumer Health Data":
    - /url: https://www.ebayinc.com/company/privacy-center/privacy-notice/consumer-health-data-privacy-policy/
  - text: ","
  - link "Payments Terms of Use":
    - /url: https://pages.ebay.com/payment/2.0/terms.html
  - text: ","
  - link "Cookies":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/ebay-cookie-notice?id=4267
  - text: ","
  - link "CA Privacy Notice":
    - /url: https://www.ebayinc.com/company/privacy-center/privacy-notice/state-privacy-disclosures/#california
  - text: ","
  - link "Your Privacy Choices":
    - /url: https://www.ebay.com/adchoice/ccpa
  - text: and
  - link "AdChoice":
    - /url: https://www.ebay.com/adchoice
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test';
   2 |
   3 |
   4 | test('Ebay Registration' , async ({page}) =>{
   5 |
   6 |
   7 |     await page.goto('https://www.ebay.com/');
   8 |     await page.waitForLoadState('load');
   9 |
  10 |     await expect(page.locator('id=gh-logo')).toBeVisible();
  11 |
  12 |
  13 |     await page.getByText('register').click();
  14 |
> 15 |     await page.getByRole('button' , {name:'Personal'}).click();
     |                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  16 |
  17 |     await page.getByLabel('First name').fill("David");
  18 |     await page.getByLabel('Last name').fill("D");
  19 |     await page.getByLabel('Email').fill("davidpaul12@gmail.com");
  20 |     await page.getByLabel('Password').fill("David@123");
  21 |
  22 |
  23 |     await page.getByRole('button' , {name:'Create personal account'}).click();
  24 |     await expect(page.locator('id=gh-logo')).toBeVisible();
  25 |
  26 |
  27 |     await page.close();
  28 |
  29 | });
  30 |
  31 |
  32 | test("Ebay Login" , async ({page})=>{
  33 |
  34 |     await page.goto('https://demo.opencart.com/');
  35 |     await page.waitForLoadState('load');
  36 |
  37 |     await expect(page.getByAltText('Your Store')).toBeVisible();
  38 |
  39 |     await page.getByText('My Account').click();
  40 |     await page.getByText('Login').click();
  41 |
  42 |
  43 |     await page.getByPlaceholder('E-Mail Address').fill("davidpaul12@gmail.com");
  44 |     await page.getByPlaceholder('Password').fill('David@123');
  45 |
  46 |     await page.getByRole('button' , ({name:'Login'})).click();
  47 |
  48 |     await page.close();
  49 |
  50 |
  51 | });
```