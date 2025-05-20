# Test info

- Name: Javascript Alerts >> JS alert - Validate and click OK
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Alerts\alerts.spec.js:8:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('#result')
Expected string: "You successfully clicked on alert"
Received string: "You successfully clicked an alert"
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('#result')
    8 × locator resolved to <p id="result">You successfully clicked an alert</p>
      - unexpected value "You successfully clicked an alert"

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Alerts\alerts.spec.js:13:47
```

# Page snapshot

```yaml
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "JavaScript Alerts" [level=3]
- paragraph: Here are some examples of different JavaScript alerts which can be troublesome for automation
- list:
  - listitem:
    - button "Click for JS Alert"
  - listitem:
    - button "Click for JS Confirm"
  - listitem:
    - button "Click for JS Prompt"
- heading "Result:" [level=4]
- paragraph: You successfully clicked an alert
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test';
   2 |
   3 | test.describe('Javascript Alerts', ()=>{
   4 |     test.beforeEach(async ({page}) =>{
   5 |         await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
   6 |     })
   7 |
   8 |     test('JS alert - Validate and click OK' , async({page})=>{
   9 |         page.on('dialog' , async(dialog) =>{
  10 |             await dialog.accept();
  11 |         })
  12 |         await page.locator('text=CLick for JS Alert').click();
> 13 |         await expect(page.locator('#result')).toHaveText('You successfully clicked on alert')
     |                                               ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  14 |     })
  15 |
  16 |     test("JS Alert - Validate Confirm Test and Click OK ", async ({ page }) => {
  17 |     page.on("dialog", async (dialog) => {
  18 |         await dialog.accept();
  19 |     });
  20 |      await page.locator("text=Click for JS Confirm").click();
  21 |       await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  22 |   });
  23 |  
  24 |   test("JS Alert - Validate Confirm Test and Click Cancel ", async ({
  25 |     page,
  26 |   }) => {
  27 |     page.on("dialog", async (dialog) => {
  28 |         await dialog.dismiss();
  29 |     });
  30 |       await page.locator("text=Click for JS Confirm").click();
  31 |       await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  32 |       const text = await page.locator("#result").textContent()
  33 |         console.log(text )
  34 |   });
  35 |
  36 |
  37 |   test("JS Prompt",async({page})=>{
  38 |     page.on('dialog',async(dialog)=>{
  39 |         expect(dialog.message().toEqual("I am a JS prompt"))
  40 |         await dialog.accept('Welcome to Playwright Learning.....!')
  41 |     })
  42 |     await page.locator("text=Click for JS Confirm").click();
  43 |     await expect(page.locator('#result')).toHaveText("You entered:Welcome to Playwrite Learning....!")
  44 |   });
  45 |   
  46 | });
```