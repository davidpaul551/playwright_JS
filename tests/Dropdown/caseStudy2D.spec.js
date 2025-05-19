import {test , expect} from '@playwright/test';

test('Auto Suggested Dropdown CaseStudy' , async ({page}) => {

    await page.goto('https://www.google.com/');
    await page.locator("//textarea[@id='APjFqb']").fill("easycalculation");
    await page.waitForSelector("//ul[@role='listbox']/li//div[@class='wM6W7d']")
    const options = await page.$$("//ul[@role='listbox']/li//div[@class='wM6W7d']")
    for(const option of options){
        const text = await option.textContent();
        console.log(text)
    }

    await page.locator("//textarea[@id='APjFqb']").press('Enter');


    await page.waitForTimeout(50000);


    await page.locator("//h3[normalize-space()='EasyCalculation']").click();

    await page.locator("//input[@id='googleSearchId']").fill("playwright");
    await page.locator("//input[@id='googleSearchId']").press('Enter');
   
    // await page.waitForSelector("(//span[normalize-space()='Visit Website'])[1]");
    await page.locator("(//span[normalize-space()='Visit Website'])[1]").click();

    expect(page.getByAltText('AT*SQA')).toBeVisible();
    await page.waitForTimeout(2000);



    await page.close();

});