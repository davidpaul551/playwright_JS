# Test info

- Name: Javascript Alerts >> JS Prompt
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Alerts\alerts.spec.js:37:7

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('text=Click for JS Confirm')
    - locator resolved to <button onclick="jsConfirm()">Click for JS Confirm</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Alerts\alerts.spec.js:45:53
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
  13 |         await expect(page.locator('#result')).toHaveText('You successfully clicked on alert')
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
  38 |     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  39 |     page.on('dialog',async(dialog)=>{
  40 |
  41 |         expect(dialog.message().toEqual("I am a JS prompt"))
  42 |        // await dialog.fill("HII")
  43 |         await dialog.accept('Welcome to Playwright Learning.....!')
  44 |     })
> 45 |     await page.locator("text=Click for JS Confirm").click();
     |                                                     ^ Error: locator.click: Test ended.
  46 |     await expect(page.locator('#result')).toHaveText("You entered:Welcome to Playwrite Learning....!")
  47 |   });
  48 |   
  49 | });
```