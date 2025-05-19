import {test , expect} from '@playwright/test';
import { assert } from 'console';


test('Login for Expand Testing' , async ({page})=>{

    await page.goto('https://practice.expandtesting.com/login');
    await page.waitForLoadState('load');
    const title = await page.title();
    console.log("Page Title is " , title);
    await expect(page).toHaveTitle(title);

    const url = await page.url();
    console.log("page Url is " , url);
    await expect(page).toHaveURL(url);


    await page.locator('id=username' , "practice");
    await page.locator("//input[@id='password']" , "SuperSecretPassword");
    const login = await page.locator("button[type='submit']");
    await login.click();




});



test('Login for Practice Automation Testing' , async ({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login');
    await page.waitForLoadState('load');

    const title = await page.title();
    console.log("Page Title is " , title);
    await expect(page).toHaveTitle(title);

    const url = await page.url();
    console.log("page Url is " , url);
    await expect(page).toHaveURL(url);


    await page.locator('id=username' , "student");
    await page.locator("//input[@id='password']" , "Password123");
    const login = await page.locator("//button[@id='submit']");
    await login.click();




});