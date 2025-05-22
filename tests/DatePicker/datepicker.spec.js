import {test , expect} from '@playwright/test';

test("Date Picker" , async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const year = '2025'
    const month = 'January'
    const date = '22'

    await page.click('#datepicker')


    while(true){
        const currMonth = await page.locator('.ui-datepicker-month').textContent()
        const currYear = await page.locator('.ui-datepicker-year').textContent()
        if(currMonth == month && currYear == year){
            break
        }
        await page.locator("[title='Prev']").click()
    }
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)


})