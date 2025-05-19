import {test , expect} from '@playwright/test';

test('Assertions test' , async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();
    await expect(page.getByRole('button' , {name: 'SEARCH'})).toBeEnabled();
    await expect(page.locator('#Newsletter')).toBeChecked();
    await expect(page.locator('#register-button')).toHaveAttribute('name' , 'register-button');
    await expect(page.getByText('Your Password')).toHaveText('Your Password');
    await expect(page.getByText('Your Password')).toContainText('Password');


    const company = await page.locator('id=Company');
    await company.fill('David');
    await expect(company).toHaveValue('David');

    const elements_count = await page.locator('a');
    console.log(elements_count);
    await expect(elements_count).toHaveCount(62);

    const elements_count1 = await page.$$('a');
    expect(elements_count1.length).toBe(62);

    await page.waitForTimeout(3000);
    await page.close();

});