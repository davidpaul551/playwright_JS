import {test , expect} from '@playwright/test';


test.describe.configure({mode:'parallel'});// To run Tests in file parallel
// If we give serial Mode which is default in Playwright  but if we specify ,
// the test execution fails if the previous test fails , this is useful in the inter dependency of tests
test('Page Screenshot' , async ({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.screenshot({path: 'screenshots/' + Date.now() + 'Homepage.png'})
});

test('Full Page Screenshot' , async ({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.screenshot({path: 'screenshots/' + Date.now() + 'Fullpage.png' , fullPage: true})
});

test('Element Screenshot' , async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").screenshot({path:'screenshots/' + Date.now() + 'Element.png'})
})

// Visual Testing
test('visual' , async({page}) =>{
    await page.goto("https://www.google.com/")
    expect(await page.screenshot()).toMatchSnapshot('google.png')
})