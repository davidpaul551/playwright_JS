import { test, expect } from '@playwright/test';

test('Iterate with for...of using ElementHandles', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.waitForSelector("//div[@id='tbodyid']//div/h4/a");

  const productElements = await page.$$("xpath=//div[@id='tbodyid']//div/h4/a");

  for (const prod of productElements) {
    const textprod = await prod.textContent();
    console.log(textprod);

    if (textprod && textprod.includes('Sony vaio i5')) {
      await prod.click();
      break;
    }
  }

  await expect(page.getByRole('heading', { name: 'Sony vaio i5' })).toBeVisible();
});
