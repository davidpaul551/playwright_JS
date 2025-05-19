// import {test , expect} from '@playwright/test';
const {test, expect} = require('@playwright/test');

test('Checking Browser Title' , async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title)
});


test('Checking the Browser URL', async({page})=>{
    await page.goto('https://www.hollandandbarrett.com/');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL('https://www.hollandandbarrett.com/');
    await page.close();

});
