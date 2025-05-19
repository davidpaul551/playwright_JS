import {test , expect} from '@playwright/test';

test('Multi Select dropdown Test' , async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/#');

    await page.selectOption("//select[@id='colors']" , ['red' , 'blue' , 'green' , 'yellow'])
    const options = await page.$$("//select[@id='colors']/option");
    console.log(options.length);

    let flag = false;
    for(const option of options){
        const text = await option.textContent()
        console.log(text)
        if(text.includes('Yellow')){
            flag= true
            break
        }
    }

    expect(flag).toBeTruthy()
    await page.waitForTimeout(3000);
    await page.close();

});