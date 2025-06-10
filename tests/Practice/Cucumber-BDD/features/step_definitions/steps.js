import { When, Then, Given } from "@cucumber/cucumber";
import { LoginPage } from "../../../POM/PageObjects/LoginPage.js";
import { DashBoardPage } from "../../../POM/PageObjects/DashBoardPage.js";
import { Checkout } from "../../../POM/PageObjects/Checkout.js";

import { chromium, expect } from "@playwright/test";


Given("Login with {string} and {string}",{ timeout: 10000 },async function (username, password) {
    const loginPage = new LoginPage(this.page);
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
  }
);

When("Add {string} to cart", async function (productName) {
  const dashBoardPage = new DashBoardPage(this.page);
  await dashBoardPage.searchProductAddCart(productName);
  await dashBoardPage.navigateToCart();
});

Then("Verify {string} is displayed in the cart", async function (productName) {
  this.checkout = new Checkout(this.page);
  expect(await this.checkout.isProductVisible(productName)).toBeTruthy();
  if (await this.checkout.isProductVisible(productName)) {
    await this.checkout.ProceedToCheckout();
  } else {
    console.log("Product is not Visible");
  }
});

When("Enter valid details and place the Order", async function () {
  await this.checkout.selectCountry();

  if (await this.checkout.verifyEmail("pauldavid551@gmail.com")) {
    await this.checkout.clickSubmit();
  } else {
    console.log("Email is not Correct");
  }
});

Then("Verify order is present in order history", async function () {
  const thankYouText = await this.checkout.getThankYouText();
  expect(thankYouText).toContain("Thankyou");

  const orderIds = await this.checkout.getOrderId();
  let validatedId = null;
  for (const id of orderIds) {
    try {
      validatedId = await this.checkout.validateRowOrderId(id);
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

Given(
  "Login to Ecommerce app with {string} and {string}",
  async function (username, password) {
    const userName = this.page.locator("#username");
    const signIn = this.page.locator("#signInBtn");
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    await userName.fill(username);
    await this.page.locator("[type='password']").fill(password);
    await signIn.click();
  }
);
Then("Verify error message", async function () {
  console.log(await this.page.locator("[style*='block']").textContent());
  await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
});
