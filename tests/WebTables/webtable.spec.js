import {test , expect} from '@playwright/test';

test('Handling Webpages' , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator("//table[@id='productTable']")
    const columns = await page.locator("//table[@id='productTable']//th")
    const columns1 = await page.$$("//table[@id='productTable']//th[normalize-space()='Name']");

    console.log("No of Columns : " , await columns.count())
    expect(await columns.count()).toBe(4);

    const rows = page.locator("//table[@id='productTable']/tbody/tr")
    console.log('no of rows : ' , await rows.count())
    expect(await rows.count()).toBe(5)

    // Slect one checkbox
    console.log("select checkbox")
    async function selectProduct(rows, page, productName) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
    });

    await matchedRow.locator('input[type="checkbox"]').check();
}


    // Select Multiple Products
    await selectProduct(rows , page , 'Tablet')
    await selectProduct(rows , page , 'Smartphone')
    await selectProduct(rows , page , 'Laptop')

    // print all products

for (const prod of columns1) {
    const text = await prod.textContent();
    console.log(text);
}
for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i)
        const tds = row.locator('td')
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent())
        }
    }





    await page.waitForTimeout(4000);
    await page.close();

});