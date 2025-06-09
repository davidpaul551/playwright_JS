import { test, expect, request } from "@playwright/test";
const { APIUtils } = require("./APIs/utils/APIUtils.js");

const LoginPayload = {
  userEmail: "pauldavid551@gmail.com",
  userPassword: "David@123",
};
const OrderPayload = {
  orders: [{ country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd" }],
};
const fakePayLoadOrders = { data: [], message: "No Orders" };
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

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      // Intercept the response -> Get desired API response ->{get fake response } -> Send it to Browser -> Render data on frontend
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayLoadOrders);
      route.fulfill({
        response,
        body,
      });
    }
  );

  await page.locator("//button[@routerlink='/dashboard/myorders']").click();
  await page.waitForResponse(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"
  );
});
