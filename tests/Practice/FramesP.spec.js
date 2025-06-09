import { test, expect } from "@playwright/test";

test("Frames Testing", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  const framePage = page.frameLocator("#courses-iframe");
  await framePage.locator("li a[href*='lifetime-access']:visible").click(); // click only the visible locator incase of two elements matching one is hidden
  const text = await framePage.locator(".text h2").textContent();
  console.log(text);
  console.log(text.split(" "));
  console.log(text.split(" ")[1]);
});
