class Checkout {
  constructor(page) {
    this.page = page;
    this.firstElement = page.locator("div li");
    this.productElement = page.locator("//h3[normalize-space()='ZARA COAT 3']");
    this.checkoutButton = page.locator("text=Checkout");
    this.country = page.getByPlaceholder("Select Country");
    this.dropdownBtn = page.locator(".ta-results");
    this.emailVerify = page.locator(".user__name [type='text']");
    this.submitButton = page.locator(".action__submit");
    this.thankyoutext = page.locator(".hero-primary");
    this.orderID = page.locator(".em-spacer-1 .ng-star-inserted");
    this.myOrdersBtn = page.locator(
      "//button[@routerlink='/dashboard/myorders']"
    );
    this.oderBody = page.locator("tbody");
    this.rowsLocator = page.locator("tbody tr");
    this.orderPageID = page.locator(".col-text");
  }

  async isProductVisible(productName) {
    await this.firstElement.first().waitFor();
    const productLocator = this.page.locator(`//h3[normalize-space()='${productName}']`);
    const bool = await productLocator.isVisible();
    console.log(bool);
    return bool;
  }

  async ProceedToCheckout() {
    await this.checkoutButton.click();
  }

  async selectCountry() {
    await this.country.pressSequentially("ind");
    const dropdown = this.dropdownBtn;
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("[type='button']").count();
    for (let i = 0; i < optionsCount; i++) {
      const text = await dropdown
        .locator("[type='button']")
        .nth(i)
        .textContent();
      if (text === " India") {
        await dropdown.locator("[type='button']").nth(i).click();
        break;
      }
    }
  }

  async verifyEmail(email) {
    const text = await this.emailVerify.first().textContent();
    return text.trim() === email;
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async getThankYouText() {
    const thankYouText = await this.page.locator(".hero-primary").textContent();
    return thankYouText?.trim(); // return text without whitespace
  }

  async getOrderId() {
  const orderIdLocators = this.orderID;
  const count = await orderIdLocators.count();

  if (count === 0) {
    throw new Error("No order ID elements found!");
  }

  // Get all order IDs text content
  const allOrderIds = await orderIdLocators.allTextContents();

  // Clean the text of each order ID label (remove pipes and trim)
  const cleanedOrderIds = allOrderIds.map(text => text.trim().replace(/\|/g, '').trim());

  console.log("All Order IDs found:", cleanedOrderIds);

  // Return an array of cleaned order IDs to be checked later or the first one by default
  // You can return the full array or just first and last if you want:
  return cleanedOrderIds;
}



  async validateRowOrderId(orderID) {
    await this.myOrdersBtn.click();
    await this.oderBody.waitFor();
    const rows = await this.rowsLocator;
    for (let i = 0; i < (await rows.count()); i++) {
      const rowOrderID = await rows.nth(i).locator("th").textContent();
      if (orderID.includes(rowOrderID)) {
        await rows.nth(i).locator("button").first().click();
        break;
      }
    }
    const orderIDDetailsPage = await this.orderPageID.textContent();
    const cleanedOrderId = orderIDDetailsPage.trim().replace(/\|/g, "").trim();
    return cleanedOrderId;
  }
}
module.exports = { Checkout };
