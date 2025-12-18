import { test, expect, _electron as electron } from "@playwright/test";

test("Product Ordering E2E - Electron Desktop", async () => {

  const electronApp = await electron.launch({
    args: ["electron-impl/main.js"],
    headless: false,
  });

  const page = await electronApp.firstWindow();

  //  THIS IS main to wait to handle DOMs to load
  await page.waitForLoadState("domcontentloaded");

  // (Extra safety for real apps)
  await page.waitForSelector("input[placeholder='email@example.com']");

  const email = "pauldavid551@gmail.com";
  const products = page.locator(".card-body");
  const productName = "ZARA COAT 3";

  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("David@123");
  await page.getByRole("button", { name: "Login" }).click();

  await page.locator(".card-body b").first().waitFor();

  const count = await products.count();
  for (let i = 0; i < count; i++) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      await products.nth(i).locator("text=Add To Cart").click();
      break;
    }
  }

  await page.locator("[routerlink*='/dashboard/cart']").click();
  await page.locator("text=Checkout").click();

  await page.getByPlaceholder("Select Country").pressSequentially("ind");
  await page.locator("text= India").click();

  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(/Thankyou/i);

  await page.waitForTimeout(5000);
  await electronApp.close();
});
