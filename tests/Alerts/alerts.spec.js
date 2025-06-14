import { test, expect } from "@playwright/test";
 
//normal alert---with ok button
//conform alert---with ok and cancle button
//prompt alert----with prompt text and ok button
 
test.describe("Javascript Alert, Confirm, Prompt in Playwright", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  });
 
  test("JS Alert - Validate Alert Test and Clik OK", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      await page.locator("text=Click for JS Alert").click();
      await expect(page.locator("#result")).toHaveText(
        "You successfully clicked an alert"
      );
    });
  });
 
  test("JS Alert - Validate Confirm Test and Click OK ", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
    await page.locator("text=Click for JS Confirm").click();
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  });
 
  test("JS Alert - Validate Confirm Test and Click Cancel ", async ({
    page,
  }) => {
    page.on("dialog", async (dialog) => {
      await dialog.dismiss();
    });
    await page.locator("text=Click for JS Confirm").click();
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  });
 
  test("JS Prompt", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.message().includes("I am a JS prompt"));
      await dialog.accept();
    });
    await page.locator("button[onclick='jsPrompt()']").click();
    await expect(page.locator("#result")).toHaveText(
      "You entered: "
    );
  });
});