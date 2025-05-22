import {test , expect} from '@playwright/test';

test("Mouse Hover Test for spiceJet" , async({page}) =>{
    await page.goto("https://www.spicejet.com/")

    const SpiceClub = page.locator("(//div[normalize-space()='SpiceClub'])[2]")
    const program = page.locator("(//div[normalize-space()='Our Program'])[3]")
    //div[normalize-space()='Our Program')]

    await SpiceClub.hover()
    await page.waitForTimeout(3000)
    await program.hover()
    await page.waitForTimeout(3000)
    await program.click()

    await page.waitForTimeout(3000)
    await page.goBack()
    await page.waitForTimeout(3000)

    const addon = page.locator("//div[contains(text(),'Add-ons')]")
    const spiceplus = page.locator("//div[@class='css-76zvg2 r-homxoj r-ubezar'][normalize-space()='SpicePlus']")
    

    await addon.hover()
    await page.waitForTimeout(3000)
    await spiceplus.hover()
    await page.waitForTimeout(3000)
    await spiceplus.click()




    await page.waitForTimeout(3000)
    await page.close()
})