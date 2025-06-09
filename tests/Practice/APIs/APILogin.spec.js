import { test, expect, request } from "@playwright/test";
const { APIUtils } = require("./utils/APIUtils");

const LoginPayload = {
  userEmail: "pauldavid551@gmail.com",
  userPassword: "David@123",
};
const OrderPayload = {
  orders: [{ country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd" }],
};
let token;
let orderID;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiutils = new APIUtils(apiContext, LoginPayload);
  token = await apiutils.getToken();
  orderID = await apiutils.createOrder(OrderPayload);
});

test("Product Ordering E2E", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForLoadState("networkidle");

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
  await page.pause();
  expect(orderID.includes(orderIDDetailsPage)).toBeTruthy();
});
