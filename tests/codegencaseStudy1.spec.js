import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('data driven testing in playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(await page.locator("//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//yt-icon[@id='logo-icon']")).toBeVisible();
  await page.getByRole('button', { name: 'Guide' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).press('ControlOrMeta+a');
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright data driven testing javascript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(await page.locator("//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//yt-icon[@id='logo-icon']")).toBeVisible();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).press('ControlOrMeta+a');
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright test data management');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(await page.locator("//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//yt-icon[@id='logo-icon']")).toBeVisible();
  await page.getByRole('button', { name: 'Guide' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright performance github');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('button', { name: 'Guide' }).click();
  await expect(await page.locator("//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//yt-icon[@id='logo-icon']")).toBeVisible();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).press('ControlOrMeta+a');
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright best practices');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(await page.locator("//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//yt-icon[@id='logo-icon']")).toBeVisible();

});