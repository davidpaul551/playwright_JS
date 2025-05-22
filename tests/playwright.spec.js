import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Sign up' }).click();
  // await page.getByRole('textbox', { name: 'Username:' }).click();
  // await page.getByRole('textbox', { name: 'Username:' }).fill('David!@#$%');
  // await page.getByRole('textbox', { name: 'Password:' }).click();
  // await page.getByRole('textbox', { name: 'Password:' }).fill('David@123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  // await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('David!@#$%');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('David@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});