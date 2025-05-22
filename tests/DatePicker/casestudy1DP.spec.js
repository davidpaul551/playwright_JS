import {test , expect} from '@playwright/test';

test("Date Picker for SpiceJet" , async ({page}) =>{
    await page.goto("https://www.spicejet.com/")

    await page.getByText('Wed, 28 May 2025').click()

    await page.locator("(//div[@class='css-76zvg2 r-homxoj r-ubezar r-16dba41' and text()='21'])[1]").click()

    const text = await page.getByText('Wed, 21 May 2025').textContent()

    console.log(text)



    

})