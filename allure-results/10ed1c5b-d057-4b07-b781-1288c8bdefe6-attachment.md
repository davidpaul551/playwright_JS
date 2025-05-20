# Test info

- Name: Assertions test
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Locators\assertions.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.nopcommerce.com/register", waiting until "load"

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Locators\assertions.spec.js:5:16
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test';
   2 |
   3 | test('Assertions test' , async ({page})=>{
   4 |
>  5 |     await page.goto('https://demo.nopcommerce.com/register');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   6 |
   7 |     await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
   8 |     await expect(page).toHaveTitle('nopCommerce demo store. Register');
   9 |     await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();
  10 |     await expect(page.getByRole('button' , {name: 'SEARCH'})).toBeEnabled();
  11 |     await expect(page.locator('#Newsletter')).toBeChecked();
  12 |     await expect(page.locator('#register-button')).toHaveAttribute('name' , 'register-button');
  13 |     await expect(page.getByText('Your Password')).toHaveText('Your Password');
  14 |     await expect(page.getByText('Your Password')).toContainText('Password');
  15 |
  16 |
  17 |     const company = await page.locator('id=Company');
  18 |     await company.fill('David');
  19 |     await expect(company).toHaveValue('David');
  20 |
  21 |     const elements_count = await page.locator('a');
  22 |     console.log(elements_count);
  23 |     await expect(elements_count).toHaveCount(62);
  24 |
  25 |     const elements_count1 = await page.$$('a');
  26 |     expect(elements_count1.length).toBe(62);
  27 |
  28 |     await page.waitForTimeout(3000);
  29 |     await page.close();
  30 |
  31 | });
```