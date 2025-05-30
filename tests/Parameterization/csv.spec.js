import {test,expect} from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync';

const td = parse(
  fs.readFileSync(path.join(__dirname, '..', 'test_data', 'LoginTestData.csv')),
  {
    columns: true,
    skip_empty_lines: true,
  }
);
 for(const da of td)
    {
        test(`DDT CSV Loginpage Test ${da.id}`,async({page})=>{
                await page.goto("https://www.demoblaze.com/index.html");
                await page.getByRole("link", { name: "Log in" }).click();
                await page.fill("#loginusername", da.username);
                await page.fill("#loginpassword", da.password);
                await page.getByRole("button", { name: "Log in" }).click();
                await page.waitForTimeout(3000);
           
                //add items to cart
                await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
                //add to cart button
                await page.click("//a[normalize-space()='Add to cart']");
                //cart link
                await page.locator("//a[@id='cartur']").click();
                page.on("dialog", async (dialog) => {
                  await dialog.accept();
                });
           
                //place a order button
                await page.click("//button[normalize-space()='Place Order']");
                //details
                await page.fill("//input[@id='name']", "Hello");
                await page.fill("//input[@id='country']", "India");
                await page.fill("//input[@id='city']", "Chennai");
                await page.fill("//input[@id='card']", "1234567890bs");
                await page.fill("//input[@id='month']", "May");
                await page.fill("//input[@id='year']", "2025");
                await page.getByRole("button", { name: "Purchase" }).click();
                await page.waitForTimeout(5000);
                await expect(
                  page.locator("//h2[text()='Thank you for your purchase!']")
                ).toBeVisible();
                await page.locator("//button[text()='OK']").click();
                //logout
                await page.waitForTimeout(5000);
           
                await page.getByRole("link", { name: "Log out" }).click();
                await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
                // await page.waitForTimeout(3000);
                await page.close();
              });
    }
 