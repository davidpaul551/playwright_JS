import {test , expect} from '@playwright/test';

test('Radio Buttons ' , async ({page}) =>{
    await page.goto('https://demo.nopcommerce.com/register');


    await page.locator('#gender-male').check();
    await page.waitForTimeout(5000);

    await expect(page.locator('#gender-male')).toBeChecked();

});