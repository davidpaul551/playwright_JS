import {test , expect} from '@playwright/test';

test("Mouse Hover Test" , async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const button = page.getByRole('button' , {name:'Point Me'})
    const mobile = page.getByRole('link' , {name:'Mobiles'})
    const lap = page.getByRole('link' , {name:'Laptops'})

    await button.hover()
    await mobile.hover()
    await lap.hover()
    await lap.click()

    await page.waitForTimeout(3000)
    await page.close()
})