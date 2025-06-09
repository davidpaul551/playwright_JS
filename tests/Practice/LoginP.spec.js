import { test, expect } from "@playwright/test";

test("Login", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const email = "pauldavid551@gmail.com";

  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("David@123");
  await page.getByRole("button", { name: "Login" }).click();
  // const t = await page.locator(".card-body b").first().textContent()
  // console.log(t)

  // const t1 = await page.locator(".card-body b").nth(3).textContent()
  // console.log(t1)

  // Load state (Dynamic Loading waiting)
  // await page.waitForLoadState('networkidle')
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);

  await page.waitForTimeout(3000);
  await page.getByRole("button", { name: "View" }).nth(3).click();
  await page.waitForTimeout(3000);

  await expect(
    page.locator("//button[normalize-space()='Add to Cart']")
  ).toBeVisible();
});
