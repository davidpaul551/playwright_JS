import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('dialog').locator('div').filter({ hasText: 'Sign in to GoogleGet the most' }).nth(1).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('selenium vs playwright');
  await page.locator('iframe[name="a-wzlnzd3exhnz"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});