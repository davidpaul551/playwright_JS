import {test , expect} from '@playwright/test';


test('Ebay Registration' , async ({page}) =>{


    await page.goto('https://www.ebay.com/');
    await page.waitForLoadState('load');

    await expect(page.locator('id=gh-logo')).toBeVisible();


    await page.getByText('register').click();

    await page.getByRole('button' , {name:'Personal'}).click();

    await page.getByLabel('First name').fill("David");
    await page.getByLabel('Last name').fill("D");
    await page.getByLabel('Email').fill("davidpaul12@gmail.com");
    await page.getByLabel('Password').fill("David@123");


    await page.getByRole('button' , {name:'Create personal account'}).click();
    await expect(page.locator('id=gh-logo')).toBeVisible();


    await page.close();

});


test("Ebay Login" , async ({page})=>{

    await page.goto('https://demo.opencart.com/');
    await page.waitForLoadState('load');

    await expect(page.getByAltText('Your Store')).toBeVisible();

    await page.getByText('My Account').click();
    await page.getByText('Login').click();


    await page.getByPlaceholder('E-Mail Address').fill("davidpaul12@gmail.com");
    await page.getByPlaceholder('Password').fill('David@123');

    await page.getByRole('button' , ({name:'Login'})).click();

    await page.close();


});