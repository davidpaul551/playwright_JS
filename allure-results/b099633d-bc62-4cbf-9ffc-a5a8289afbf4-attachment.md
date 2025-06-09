# Test info

- Name: Product Ordering E2E
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\E2EOrder.spec.js:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('[routerlink*=\'/dashboard/myorders\']') resolved to 2 elements:
    1) <button tabindex="0" _ngcontent-ydk-c33="" class="btn btn-custom" routerlink="/dashboard/myorders">…</button> aka getByRole('button', { name: '   ORDERS' })
    2) <label tabindex="0" _ngcontent-ydk-c39="" routerlink="/dashboard/myorders"> Orders History Page </label> aka getByText('Orders History Page')

Call log:
  - waiting for locator('[routerlink*=\'/dashboard/myorders\']')

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\E2EOrder.spec.js:66:63
```

# Test source

```ts
   1 | import {test , expect}  from '@playwright/test';
   2 |
   3 |
   4 | test('Product Ordering E2E' , async ({browser}) =>{
   5 |
   6 |     const context = await browser.newContext();
   7 |     const page = await context.newPage();
   8 |
   9 |     const email = 'pauldavid551@gmail.com'
  10 |     const products = page.locator(".card-body")
  11 |     const productName = 'ZARA COAT 3'
  12 |
  13 |     await page.goto('https://rahulshettyacademy.com/client')
  14 |     await page.getByPlaceholder('email@example.com').fill(email)
  15 |     await page.getByPlaceholder('enter your passsword').fill("David@123")
  16 |     await page.getByRole('button' , {name: 'Login'}).click()
  17 |     // const t = await page.locator(".card-body b").first().textContent()
  18 |     // console.log(t)
  19 |
  20 |     // const t1 = await page.locator(".card-body b").nth(3).textContent()
  21 |     // console.log(t1)
  22 |
  23 |     // Load state (Dynamic Loading waiting)
  24 |     // await page.waitForLoadState('networkidle')
  25 |     await page.locator(".card-body b").first().waitFor()
  26 |     const titles = await page.locator(".card-body b").allTextContents()
  27 |     console.log(titles)
  28 |     const count = await products.count()
  29 |     for(let i=0 ; i<count ; ++i){
  30 |         if(await products.nth(i).locator('b').textContent() === productName){
  31 |             await products.nth(i).locator("text=Add To Cart").click()
  32 |             break
  33 |         }
  34 |     }
  35 |
  36 |     await page.waitForTimeout(6000)
  37 |
  38 |     await page.locator("[routerlink*='/dashboard/cart']").click()
  39 |     await page.locator("div li").first().waitFor()
  40 |     const bool= await page.locator("//h3[normalize-space()='ZARA COAT 3']").isVisible()
  41 |     expect(bool).toBeTruthy()
  42 |     console.log(bool)
  43 |
  44 |     await page.locator("text=Checkout").click()
  45 |
  46 |     // suggesting dropdown
  47 |     await page.getByPlaceholder("Select Country").pressSequentially("ind")
  48 |     const dropdown = page.locator(".ta-results")
  49 |     await dropdown.waitFor()
  50 |     const optionsCount = await dropdown.locator("[type='button']").count()
  51 |     for(let i=0 ; i<optionsCount ; i++){
  52 |         const text = await dropdown.locator("[type='button']").nth(i).textContent()
  53 |         if(text === " India"){
  54 |             await dropdown.locator("[type='button']").nth(i).click()
  55 |             break
  56 |         }
  57 |     }
  58 |     expect(page.locator(".user__name [type='text']").first()).toHaveText(email)
  59 |     await page.locator(".action__submit").click()
  60 |
  61 |     await expect(page.locator(".hero-primary")).toHaveText(/Thankyou/i)
  62 |
  63 |     const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
  64 |     console.log(orderID)
  65 |
> 66 |     await page.locator("[routerlink*='/dashboard/myorders']").click()
     |                                                               ^ Error: locator.click: Error: strict mode violation: locator('[routerlink*=\'/dashboard/myorders\']') resolved to 2 elements:
  67 |     await page.locator("tbody").waitFor()
  68 |
  69 |     const rows = await page.locator("tbody tr")
  70 |
  71 |     for(let i=0 ; i< await rows.count() ; i++){
  72 |         const rowOrderID= await rows.nth(i).locator("th").textContent()
  73 |         if(orderID.includes(rowOrderID)){
  74 |             await rows.nth(i).locator("button").first().click()
  75 |             break
  76 |         }
  77 |     }
  78 |
  79 |     const orderIDDetailsPage = await page.locator(".col-text").textContent()
  80 |     expect(orderID.includes(orderIDDetailsPage)).toBeTruthy();
  81 |
  82 |
  83 |
  84 |
  85 |
  86 |
  87 |
  88 | })
```