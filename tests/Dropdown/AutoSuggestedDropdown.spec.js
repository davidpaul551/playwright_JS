import {test , expect} from '@playwright/test';

test('Auto Suggested Dropdown' , async ({page}) => {

    await page.goto('https://www.google.com/');
    await page.locator("//textarea[@id='APjFqb']").fill("playwright");
    await page.waitForSelector("//ul[@role='listbox']/li//div[@class='wM6W7d']")
    const options = await page.$$("//ul[@role='listbox']/li//div[@class='wM6W7d']")
    for(const option of options){
        const text = await option.textContent();
        console.log(text)
        // if(text.includes('playwright tutorial')){
        //     await option.click()
        //     break
        // }
    }

    await page.waitForTimeout(3000);
    await page.close();

});