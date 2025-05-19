import {test , expect}  from '@playwright/test';
import { log } from 'console';


test('Login and Logout' , async ({page})=>{

    await page.goto('https://www.demoblaze.com/');
    await page.click('id=login2');
    await page.locator("//input[@id='loginusername']").fill("David12");
    await page.locator("//input[@id='loginpassword']").fill("David@123");

    const login =  page.locator("//button[normalize-space()='Log in']");
    await login.click();

    await page.click('id=logout2');
    await page.close();

});