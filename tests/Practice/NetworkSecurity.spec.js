import { test, expect } from "@playwright/test";

test("Network Security", async ({ page }) => {
  const email = "pauldavid551@gmail.com";

  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("David@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForLoadState("networkidle");

  await page.locator(".card-body b").first().waitFor();

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    (route) =>
      route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=612661f884b053f67654665b6",
      })
  );

  await page.locator("//button[@routerlink='/dashboard/myorders']").click();

  await page.locator("button:has-text('View')").first().click();
  await page.pause();

});
