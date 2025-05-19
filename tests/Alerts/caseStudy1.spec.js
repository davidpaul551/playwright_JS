import {test , expect} from '@playwright/test';

test('Case Study on Alerts' , async ({page}) =>{

    page.on('dialog' , async dialog =>{
        if(dialog.message().includes('clear your cart')){
            console.log(`Clicking OK to ${dialog.message()}`)
            await dialog.accept();
        }else{
            await dialog.dismiss();
        }
    })

    page.goto('https://web-scraping.dev/product/1');
    await page.click('.add-to-cart');

    await page.locator("//div[@class='cart-icon']").click();

    await page.waitForSelector("//button[normalize-space()='Clear']");
    await page.locator("//button[normalize-space()='Clear']").click();

    
});