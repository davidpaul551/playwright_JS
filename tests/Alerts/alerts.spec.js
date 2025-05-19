import {test , expect} from '@playwright/test';

test.describe('Javascript Alerts', ()=>{
    test.beforeEach(async ({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    })

    test('JS alert - Validate and click OK' , async({page})=>{
        page.on('dialog' , async(dialog) =>{
            await dialog.accept();
        })
        await page.locator('text=CLick for JS Alert').click();
        await expect(page.locator('#result')).toHaveText('You successfully clicked on alert')
    })

    test("JS Alert - Validate Confirm Test and Click OK ", async ({ page }) => {
    page.on("dialog", async (dialog) => {
        await dialog.accept();
    });
     await page.locator("text=Click for JS Confirm").click();
      await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  });
 
  test("JS Alert - Validate Confirm Test and Click Cancel ", async ({
    page,
  }) => {
    page.on("dialog", async (dialog) => {
        await dialog.dismiss();
    });
      await page.locator("text=Click for JS Confirm").click();
      await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
      const text = await page.locator("#result").textContent()
        console.log(text )
  });


  test("JS Prompt",async({page})=>{
    page.on('dialog',async(dialog)=>{
        expect(dialog.message().toEqual("I am a JS prompt"))
        await dialog.accept('Welcome to Playwright Learning.....!')
    })
    await page.locator("text=Click for JS Confirm").click();
    await expect(page.locator('#result')).toHaveText("You entered:Welcome to Playwrite Learning....!")
  });
  
});