# Test info

- Name: Calendars test 
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\Calendar.spec.js:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('2050') resolved to 2 elements:
    1) <span class="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from">2041 – 2050</span> aka getByRole('button', { name: '– 2050' })
    2) <button type="button" class="react-calendar__tile react-calendar__decade-view__years__year">2050</button> aka getByRole('button', { name: '2050', exact: true })

Call log:
  - waiting for getByText('2050')

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\Calendar.spec.js:37:32
```

# Page snapshot

```yaml
- banner:
  - text: GREENKART
  - link "Career Focussed QA Meetup with Rahul Shetty @Pune - Limited Seats! Book Now!":
    - /url: https://qasummit.org/
- text: "Page size:"
- combobox "Page size:":
  - option "5" [selected]
  - option "10"
  - option "20"
- text: "Search:"
- searchbox "Search:"
- list "Pagination":
  - listitem:
    - button "First" [disabled]
  - listitem:
    - button "Previous" [disabled]
  - listitem:
    - button "1 (current)"
  - listitem:
    - button "2"
  - listitem:
    - button "3"
  - listitem:
    - button "4"
  - listitem:
    - button "Next"
  - listitem:
    - button "Last"
- 'table "Sorted by name: descending order"':
  - alert: "Sorted by name: descending order"
  - rowgroup:
    - 'row "Veg/fruit name: activate to sort column ascending Price: activate to sort column ascending Discount price: activate to sort column ascending"':
      - 'columnheader "Veg/fruit name: activate to sort column ascending"': Veg/fruit name
      - 'columnheader "Price: activate to sort column ascending"': Price
      - 'columnheader "Discount price: activate to sort column ascending"': Discount price
  - rowgroup:
    - row "Wheat 67 28":
      - cell "Wheat"
      - cell "67"
      - cell "28"
    - row "Tomato 37 26":
      - cell "Tomato"
      - cell "37"
      - cell "26"
    - row "Strawberry 23 15":
      - cell "Strawberry"
      - cell "23"
      - cell "15"
    - row "Rice 37 46":
      - cell "Rice"
      - cell "37"
      - cell "46"
    - row "Potato 34 22":
      - cell "Potato"
      - cell "34"
      - cell "22"
- text: Delivery Date 0
- spinbutton: "6"
- text: / 0
- spinbutton: "4"
- text: /
- spinbutton: "2025"
- button:
  - img
- button:
  - img
- button "«"
- button "‹"
- button "2041 – 2050"
- button "›"
- button "»"
- button "2041"
- button "2042"
- button "2043"
- button "2044"
- button "2045"
- button "2046"
- button "2047"
- button "2048"
- button "2049"
- button "2050"
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test'
   2 |
   3 | test('Calendars test ' , async ({page}) =>{
   4 |     const month = "6"
   5 |     const date = "14"
   6 |     const year = "2050"
   7 |     const expectList = [month,date,year]
   8 |
   9 |     await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
  10 |     await page.locator(".react-date-picker__inputGroup").click()
  11 |     // await page.locator(".react-calendar__navigation__label").click()
  12 |     // await page.locator(".react-calendar__navigation__label").click()
  13 |     await page.locator(".react-calendar__navigation__label").dblclick()
  14 |
  15 |     const years = await page.locator(".react-calendar__navigation__label").textContent()
  16 |     console.log(years)
  17 |     const minYear = Number(years.split(" ")[0]);
  18 |
  19 |     console.log(minYear)
  20 |     const maxYear = Number(years.split(" ")[2]);
  21 |     console.log(maxYear)
  22 |
  23 |
  24 |
  25 |     while (!(await page.locator(`text='${year}'`).isVisible()) ) {
  26 |         if(Number(year) < minYear){
  27 |             await page.locator(".react-calendar__navigation__prev-button").click()
  28 |             await page.waitForTimeout(200)
  29 |         }else{
  30 |             await page.locator(".react-calendar__navigation__next-button").click()
  31 |             await page.waitForTimeout(200)
  32 |         }
  33 |
  34 |           // small wait to let UI update
  35 |     }
  36 |
> 37 |     await page.getByText(year).click()
     |                                ^ Error: locator.click: Error: strict mode violation: getByText('2050') resolved to 2 elements:
  38 |     await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click()
  39 |
  40 |     await page.locator("//abbr[text()='"+date+"']").click()
  41 |
  42 |     const inputs = await page.locator(".react-date-picker__inputGroup input")
  43 |     const count = await inputs.count()
  44 |     for(let i = 1 ; i<count ; i++ ){
  45 |         const value = await inputs.nth(i).getAttribute('value')
  46 |         console.log(value)
  47 |         expect(value).toEqual(expectList[i-1])
  48 |     }
  49 | })
```