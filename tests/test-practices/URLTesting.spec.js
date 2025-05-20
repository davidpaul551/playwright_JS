import {test , expect} from '@playwright/test';


test("Checking URL1" , async ({page}) =>{
    await page.goto('https://themeforest.net/');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL2" , async ({page}) =>{
    await page.goto('https://demo.opencart.com/');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL3" , async ({page}) =>{
    await page.goto('https://www.rediff.com/');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL4" , async ({page}) =>{
    await page.goto('http://www.leafground.com/pages/Dropdown.html');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL5" , async ({page}) =>{
    await page.goto('http://www.tizag.com/javascriptT/javascriptalert.php');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL6" , async ({page}) =>{
    await page.goto('http://www.echoecho.com/htmlforms10.html');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL7" , async ({page}) =>{
    await page.goto('http://www.leafground.com/home.html');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL8" , async ({page}) =>{
    await page.goto('http://automationpractice.com/index.php');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL9" , async ({page}) =>{
    await page.goto('https://login.salesforce.com/?locale=in');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL10" , async ({page}) =>{
    await page.goto('http://www.filehosting.org');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL11" , async ({page}) =>{
    await page.goto('http://www.bing.com');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL12" , async ({page}) =>{
    await page.goto('https://www.freecrm.com/');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL13" , async ({page}) =>{
    await page.goto('http://www.half.ebay.com');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL14" , async ({page}) =>{
    await page.goto('https://alaskatrips.poweredbygps.com/');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL15" , async ({page}) =>{
    await page.goto('http://www.qaclickacademy.com/interview.php');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL16" , async ({page}) =>{
    await page.goto('https://app.saucelabs.com/login');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});


test("Checking URL17" , async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});

test("Checking URL18" , async ({page}) =>{
    await page.goto('http://only-testing-blog.blogspot.com/2014/05/form.html');
    const page_url = await page.url();
    console.log("Page URL is " , page_url);
    await expect(page).toHaveURL(page_url);

    const page_title = await page.title();
    console.log('Page title is ' , page_title);
    await expect(page).toHaveTitle(page_title);

});