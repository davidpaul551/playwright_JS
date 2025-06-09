import { test, expect } from "@playwright/test";

let webContext;
let email;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  email = "pauldavid551@gmail.com";

  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("David@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForLoadState("networkidle");
  await context.storageState({ path: "state.json" });

  webContext = await browser.newContext({ storageState: "state.json" });
});

test("Product Ordering E2E", async ({}) => {
  // const context = await browser.newContext();
  // const page = await context.newPage();

  const productName = "ZARA COAT 3";
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  const products = page.locator(".card-body");

  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      await products.nth(i).locator("text=Add To Cart").click();
      break;
    }
  }

  await page.waitForTimeout(6000);

  await page.locator("[routerlink*='/dashboard/cart']").click();
  await page.locator("div li").first().waitFor();
  const bool = await page
    .locator("//h3[normalize-space()='ZARA COAT 3']")
    .isVisible();
  expect(bool).toBeTruthy();
  console.log(bool);

  await page.locator("text=Checkout").click();

  // suggesting dropdown
  await page.getByPlaceholder("Select Country").pressSequentially("ind");
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("[type='button']").count();
  for (let i = 0; i < optionsCount; i++) {
    const text = await dropdown.locator("[type='button']").nth(i).textContent();
    if (text === " India") {
      await dropdown.locator("[type='button']").nth(i).click();
      break;
    }
  }
  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  await page.locator(".action__submit").click();

  await expect(page.locator(".hero-primary")).toHaveText(/Thankyou/i);

  const orderID = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log(orderID);

  await page.locator("//button[@routerlink='/dashboard/myorders']").click();
  await page.locator("tbody").waitFor();

  const rows = await page.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); i++) {
    const rowOrderID = await rows.nth(i).locator("th").textContent();
    if (orderID.includes(rowOrderID)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }

  const orderIDDetailsPage = await page.locator(".col-text").textContent();
  expect(orderID.includes(orderIDDetailsPage)).toBeTruthy();
});

test("Product Titles", async ({}) => {
  // const context = await browser.newContext();
  // const page = await context.newPage();

  const productName = "ZARA COAT 3";
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  const products = page.locator(".card-body");
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});
