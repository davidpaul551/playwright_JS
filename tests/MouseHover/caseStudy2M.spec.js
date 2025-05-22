import {test , expect} from '@playwright/test';

test("Mouse Hover Test for easy Calculation" , async({page}) =>{
    await page.goto("https://www.easycalculation.com/")

    const english = page.locator("//span[@class='lang']")
    const portugese = page.locator("//span[normalize-space()='Português']")

    await english.hover()
    await page.waitForTimeout(3000)
    await portugese.hover()
    await page.waitForTimeout(3000)
    await portugese.click()

    expect(await page.getByAltText('easycalculation.com')).toBeEnabled()
    

    await page.waitForTimeout(3000)
    await page.close()
})