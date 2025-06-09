# Test info

- Name: Calendars test 
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\Calendar.spec.js:3:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: "14"
Received: "6"
    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\Calendar.spec.js:28:23
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
- text: /
- spinbutton: "14"
- text: /
- spinbutton: "2002"
- button:
  - img
- button:
  - img
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test'
   2 |
   3 | test('Calendars test ' , async ({page}) =>{
   4 |     const month = "6"
   5 |     const date = "14"
   6 |     const year = "2002"
   7 |     const expectList = [month,date,year]
   8 |
   9 |     await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
  10 |     await page.locator(".react-date-picker__inputGroup").click()
  11 |     await page.locator(".react-calendar__navigation__label").click()
  12 |     await page.locator(".react-calendar__navigation__label").click()
  13 |     while (!(await page.locator(`text=${year}`).isVisible())) {
  14 |         await page.locator(".react-calendar__navigation__prev-button").click()
  15 |         await page.waitForTimeout(200)  // small wait to let UI update
  16 |     }
  17 |
  18 |     await page.getByText(year).click()
  19 |     await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click()
  20 |
  21 |     await page.locator("//abbr[text()='"+date+"']").click()
  22 |
  23 |     const inputs = await page.locator(".react-date-picker__inputGroup input")
  24 |     const count = await inputs.count()
  25 |     for(let i = 1 ; i<=count ; i++ ){
  26 |         const value = await inputs.nth(i).getAttribute('value')
  27 |         console.log(value)
> 28 |         expect(value).toEqual(expectList[i])
     |                       ^ Error: expect(received).toEqual(expected) // deep equality
  29 |     }
  30 | })
```