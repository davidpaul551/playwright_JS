import {test , expect} from '@playwright/test';

test('Dropdown  Test ' , async ({page}) =>{
    await page.goto("https://www.facebook.com/r.php?entry_point=login");

    await page.selectOption("#day" , '22');
    await page.waitForTimeout(3000)
    await page.selectOption("#month" , {label:'Oct'});
    await page.waitForTimeout(3000)
    await page.selectOption("#year" , {value:'2002'});
    await page.waitForTimeout(3000)


    const days = await page.$$("//select[@id='day']/option")
    expect(days.length).toBe(31);

    const months = await page.$$("//select[@id='month']/option")
    expect(days.length).toBe(31);

     const year = await page.$$("//select[@id='year']/option")
    await console.log(year.length)


    let flag = false;

    for(const day of days){
        const textday = await day.textContent();
        console.log(textday);
    }
    for(const month of months){
        const textmonth = await month.textContent();
        console.log(textmonth);
    }
    for(const yea of year){
        const textyear = await yea.textContent();
        console.log(textyear);
    }

    await page.waitForTimeout(3000)

    await page.close();


});