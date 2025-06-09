import { test, expect } from "@playwright/test";

test("Window Handling", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const docLink = page.locator("[href*='documents-request']");
  const userName = page.locator("#username");

  // To do the operations parallel and wait for them to complete without using the await
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // Listen for any new page , promise states pending , rejected  , fulfilled
    docLink.click(), // new page is opened
  ]);

  const text = await newPage.locator("//p[@class='im-para red']").textContent();
  console.log(text);
  const arrText = text.split("@");
  const domain = arrText[1].split(" ")[0];
  console.log(domain);

  await page.locator("#username").fill(domain);

  // await userName.fill(domain)
});
