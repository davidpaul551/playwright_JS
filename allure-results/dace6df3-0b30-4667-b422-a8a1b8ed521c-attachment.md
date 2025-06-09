# Test info

- Name: Product Ordering E2E
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\NetworkIntercept.spec.js:17:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('tbody') to be visible

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\NetworkIntercept.spec.js:43:33
```

# Test source

```ts
   1 | import { test, expect, request } from '@playwright/test';
   2 | const {APIUtils} = require('./APIs/utils/APIUtils.js')
   3 |
   4 | const LoginPayload = { userEmail: "pauldavid551@gmail.com", userPassword: "David@123" };
   5 | const OrderPayload = {orders:[{country:"India",productOrderedId:"67a8df56c0d3e6622a297ccd"}]}
   6 | const fakePayLoadOrders = {data:[] , message:"No Orders"}
   7 | let token;
   8 | let orderID;
   9 |
  10 | test.beforeAll(async () => {
  11 |     const apiContext = await request.newContext();
  12 |     const apiutils = new APIUtils(apiContext , LoginPayload)
  13 |      token = await apiutils.getToken()
  14 |      orderID = await apiutils.createOrder(OrderPayload)
  15 | });
  16 |
  17 | test('Product Ordering E2E', async ({ browser }) => {
  18 |     const context = await browser.newContext();
  19 |     const page = await context.newPage();
  20 |
  21 |     await page.addInitScript(value => {
  22 |         window.localStorage.setItem('token', value)}, token);
  23 |
  24 |     await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'domcontentloaded' });
  25 |     await page.waitForLoadState('networkidle');
  26 |
  27 |     await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/679a5db0e2b5443b1f3e4713" ,
  28 |         async route =>{
  29 |             // Intercept the response -> Get desired API response ->{get fake response } -> Send it to Browser -> Render data on frontend
  30 |             const response = await page.request.fetch(route.request())
  31 |             let body = JSON.stringify(fakePayLoadOrders)
  32 |             route.fulfill(
  33 |                 {
  34 |                     response,
  35 |                     body
  36 |                 }
  37 |             )
  38 |         }
  39 |      )
  40 |     await page.pause()
  41 |
  42 |     await page.locator("//button[@routerlink='/dashboard/myorders']").click();
> 43 |     await page.locator("tbody").waitFor();
     |                                 ^ Error: locator.waitFor: Target page, context or browser has been closed
  44 |
  45 |     const rows = await page.locator("tbody tr");
  46 |    
  47 |
  48 |
  49 | });
```