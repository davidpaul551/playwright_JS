# Test info

- Name: Ebay Login
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\caseStudyBuilt-inLocators-Ebay.spec.js:32:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByAltText('Your Store')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByAltText('Your Store')

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\caseStudyBuilt-inLocators-Ebay.spec.js:37:51
```

# Page snapshot

```yaml
- main:
  - heading "demo.opencart.com" [level=1]
  - paragraph: Verifying you are human. This may take a few seconds.
  - text: demo.opencart.com needs to review the security of your connection before proceeding.
- contentinfo:
  - text: "Ray ID:"
  - code: 942b75c8bff27f46
  - text: Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=l
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
  15 |     await page.getByRole('button' , {name:'Personal'}).click();
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
> 37 |     await expect(page.getByAltText('Your Store')).toBeVisible();
     |                                                   ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
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