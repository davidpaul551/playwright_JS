# Test info

- Name: Product Ordering E2E
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\APIs\APILogin.spec.js:25:5

# Error details

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.card-body b').first() to be visible

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Practice\APIs\APILogin.spec.js:55:48
```

# Page snapshot

```yaml
- banner:
  - text: Ecom
  - link " dummywebsite@rahulshettyacademy.com":
    - /url: emailto:dummywebsite@rahulshettyacademy.com
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
- heading "We Make Your Shopping Simple" [level=3]
- heading "Practice Website for Rahul Shetty Academy Students" [level=1]:
  - text: Practice Website for
  - emphasis: Rahul Shetty Academy
  - text: Students
- link "Register":
  - /url: /client/auth/register
- paragraph: Register to sign in with your personal account
- heading "Log in" [level=1]
- text: Email
- textbox "email@example.com"
- text: Password
- textbox "enter your passsword"
- button "Login"
- link "Forgot password?":
  - /url: /client/auth/password-new
- paragraph: Don't have an account? Register here
- heading "Why People Choose Us?" [level=1]
- text: 
- heading "3546540" [level=1]
- paragraph: Successfull Orders
- text: 
- heading "37653" [level=1]
- paragraph: Customers
- text: 
- heading "3243" [level=1]
- paragraph: Sellers
- text: 
- heading "4500+" [level=1]
- paragraph: Daily Orders
- text: 
- heading "500+" [level=1]
- paragraph: Daily New Customer Joining
```

# Test source

```ts
   1 | import {test , expect , request}  from '@playwright/test';
   2 |
   3 | const LoginPayload = {userEmail:"pauldavid551@gmail.com",userPassword:"David@123"}
   4 |
   5 | let token;
   6 |
   7 | test.beforeAll( async () =>{
   8 |     const apiContext = await request.newContext();
   9 |     const LoginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login" ,
   10 |         {
   11 |             data:LoginPayload
   12 |         }
   13 |     )
   14 |     expect(LoginResponse.ok()).toBeTruthy()
   15 |     const LoginResponseJson = await LoginResponse.json()
   16 |     token = LoginResponseJson.token
   17 |     console.log(token)
   18 |
   19 | })
   20 |
   21 | // test('ApI' , async ({request}) =>{
   22 | //     request.post()
   23 | // })
   24 |
   25 | test('Product Ordering E2E' , async ({page}) =>{
   26 |
   27 |     // const context = await browser.newContext();
   28 |     // const page = await context.newPage();
   29 |
   30 |     // const email = 'pauldavid551@gmail.com'
   31 |
   32 |     page.addInitScript(value =>{
   33 |         window.localStorage.setItem('token' , value)
   34 |     } , token)
   35 |
   36 |
   37 |     const productName = 'ZARA COAT 3'
   38 |
   39 |     await page.goto('https://rahulshettyacademy.com/client')
   40 |     await page.waitForLoadState('networkidle');
   41 |
   42 |     // await page.getByPlaceholder('email@example.com').fill(email)
   43 |     // await page.getByPlaceholder('enter your passsword').fill("David@123")
   44 |     // await page.getByRole('button' , {name: 'Login'}).click()
   45 |     // const t = await page.locator(".card-body b").first().textContent()
   46 |     // console.log(t)
   47 |
   48 |     // const t1 = await page.locator(".card-body b").nth(3).textContent()
   49 |     // console.log(t1)
   50 |
   51 |     // Load state (Dynamic Loading waiting)
   52 |     // await page.waitForLoadState('networkidle')
   53 |     const products = page.locator(".card-body")
   54 |
>  55 |     await page.locator(".card-body b").first().waitFor()
      |                                                ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
   56 |     const titles = await page.locator(".card-body b").allTextContents()
   57 |     console.log(titles)
   58 |     const count = await products.count()
   59 |     for(let i=0 ; i<count ; ++i){
   60 |         if(await products.nth(i).locator('b').textContent() === productName){
   61 |             await products.nth(i).locator("text=Add To Cart").click()
   62 |             break
   63 |         }
   64 |     }
   65 |
   66 |     await page.waitForTimeout(6000)
   67 |
   68 |     await page.locator("[routerlink*='/dashboard/cart']").click()
   69 |     await page.locator("div li").first().waitFor()
   70 |     const bool= await page.locator("//h3[normalize-space()='ZARA COAT 3']").isVisible()
   71 |     expect(bool).toBeTruthy()
   72 |     console.log(bool)
   73 |
   74 |     await page.locator("text=Checkout").click()
   75 |
   76 |     // suggesting dropdown
   77 |     await page.getByPlaceholder("Select Country").pressSequentially("ind")
   78 |     const dropdown = page.locator(".ta-results")
   79 |     await dropdown.waitFor()
   80 |     const optionsCount = await dropdown.locator("[type='button']").count()
   81 |     for(let i=0 ; i<optionsCount ; i++){
   82 |         const text = await dropdown.locator("[type='button']").nth(i).textContent()
   83 |         if(text === " India"){
   84 |             await dropdown.locator("[type='button']").nth(i).click()
   85 |             break
   86 |         }
   87 |     }
   88 |     expect(page.locator(".user__name [type='text']").first()).toHaveText(email)
   89 |     await page.locator(".action__submit").click()
   90 |
   91 |     await expect(page.locator(".hero-primary")).toHaveText(/Thankyou/i)
   92 |
   93 |     const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
   94 |     console.log(orderID)
   95 |
   96 |     await page.locator("//button[@routerlink='/dashboard/myorders']").click()
   97 |     await page.locator("tbody").waitFor()
   98 |
   99 |     const rows = await page.locator("tbody tr")
  100 |
  101 |     for(let i=0 ; i< await rows.count() ; i++){
  102 |         const rowOrderID= await rows.nth(i).locator("th").textContent()
  103 |         if(orderID.includes(rowOrderID)){
  104 |             await rows.nth(i).locator("button").first().click()
  105 |             break
  106 |         }
  107 |     }
  108 |
  109 |     const orderIDDetailsPage = await page.locator(".col-text").textContent()
  110 |     expect(orderID.includes(orderIDDetailsPage)).toBeTruthy();
  111 |
  112 |
  113 |
  114 |
  115 |
  116 |
  117 |
  118 | })
```