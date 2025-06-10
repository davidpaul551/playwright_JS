import { test, expect } from "@playwright/test";

import { LoginPage } from "./PageObjects/LoginPage";
import { DashBoardPage } from "./PageObjects/DashBoardPage";
import { Checkout } from "./PageObjects/Checkout";

import dataset from './utils/PlaceOrderTestData.json' assert { type: "json" };

for(const data of dataset){
test(`Product Ordering E2E using POM ${data.productName} `, async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.validLogin(data.username, data.password);

  const dashBoardPage = new DashBoardPage(page);
  await dashBoardPage.searchProductAddCart(data.productName);
  await dashBoardPage.navigateToCart();

  await page.waitForTimeout(6000);

  const checkout = new Checkout(page);
  expect(await checkout.isProductVisible(data.productName)).toBeTruthy();
  if (await checkout.isProductVisible(data.productName)) {
    await checkout.ProceedToCheckout();
  } else {
    console.log("Product is not Visible");
  }

  await checkout.selectCountry();

  if (await checkout.verifyEmail(data.username)) {
    await checkout.clickSubmit();
  } else {
    console.log("Email is not Correct");
  }

  const thankYouText = await checkout.getThankYouText();
  expect(thankYouText).toContain("Thankyou");

const orderIds = await checkout.getOrderId();
let validatedId = null;
for (const id of orderIds) {
  try {
    validatedId = await checkout.validateRowOrderId(id);
    if (validatedId === id) {
      break;
    }
  } catch (e) {
    continue;
  }
}

expect(validatedId).not.toBeNull();
expect(validatedId).toBeDefined();
expect(orderIds).toContain(validatedId);

});
}