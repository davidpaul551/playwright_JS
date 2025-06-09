import { test, expect } from "@playwright/test";

test("Calendars test ", async ({ page }) => {
  const month = "6";
  const date = "14";
  const year = "1841";
  const expectList = [month, date, year];

  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  await page.locator(".react-date-picker__inputGroup").click();
  // await page.locator(".react-calendar__navigation__label").click()
  // await page.locator(".react-calendar__navigation__label").click()
  await page.locator(".react-calendar__navigation__label").dblclick();

  const years = await page
    .locator(".react-calendar__navigation__label")
    .textContent();
  console.log(years);
  const minYear = Number(years.split(" ")[0]);

  console.log(minYear);
  const maxYear = Number(years.split(" ")[2]);
  console.log(maxYear);

  while (!(await page.locator(`text='${year}'`).isVisible())) {
    if (Number(year) < minYear) {
      await page.locator(".react-calendar__navigation__prev-button").click();
      await page.waitForTimeout(200);
    } else {
      await page.locator(".react-calendar__navigation__next-button").click();
      await page.waitForTimeout(200);
    }

    // small wait to let UI update
  }

  await page.locator(`text='${year}'`).click();
  await page
    .locator(".react-calendar__year-view__months__month")
    .nth(Number(month) - 1)
    .click();

  await page.locator("//abbr[text()='" + date + "']").click();

  const inputs = await page.locator(".react-date-picker__inputGroup input");
  const count = await inputs.count();
  for (let i = 1; i < count; i++) {
    const value = await inputs.nth(i).getAttribute("value");
    console.log(value);
    expect(value).toEqual(expectList[i - 1]);
  }
});
