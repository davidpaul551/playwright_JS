import {test , expect} from '@playwright/test';

test('Dropdown  Test ' , async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/#");

    await page.selectOption("#country" , 'India');
    await page.waitForTimeout(3000)
    await page.selectOption("#country" , {label:'India'});
    await page.waitForTimeout(3000)
    await page.selectOption("#country" , {value:'uk'});
    await page.waitForTimeout(3000)
    await page.selectOption("#country" , {index:6});
    await page.waitForTimeout(3000)

    const options = await page.$$("//select[@id='country']/option")
    expect(options.length).toBe(10);

    const options1 = await page.locator("//select[@id='country']/option")
    expect(options1).toHaveCount(10);

    let flag = false;

    for(const option of options){
        const textOptions = await option.textContent();
        console.log(textOptions);
        if(textOptions.includes('India')){
            flag = true;
            break;
        }
    }
    expect(flag).toBeTruthy();

    await page.waitForTimeout(3000)

    await page.close();


});