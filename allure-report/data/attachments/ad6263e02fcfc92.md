# Test info

- Name: Checking URL6
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\URLTesting.spec.js:64:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.echoecho.com/htmlforms10.html"
Received string: "https://echoecho.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    4 × locator resolved to <html>…</html>
      - unexpected value "https://echoecho.com/htmlforms10.html"
    - waiting for navigation to finish...
    - navigated to "https://echoecho.com/ubb/"
    2 × locator resolved to <html>…</html>
      - unexpected value "https://echoecho.com/ubb/"
    - waiting for" http://www.echoecho.com/" navigation to finish...
    - navigated to "https://echoecho.com/"
    - locator resolved to <html>…</html>
    - unexpected value "https://echoecho.com/"

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\URLTesting.spec.js:68:24
```

# Page snapshot

```yaml
- insertion
- table:
  - rowgroup:
    - row "Link To Us | Bookmark EchoEcho.Com Site Map":
      - cell "Link To Us | Bookmark EchoEcho.Com Site Map":
        - table:
          - rowgroup:
            - row "Link To Us | Bookmark EchoEcho.Com Site Map":
              - cell "Link To Us | Bookmark EchoEcho.Com":
                - link "Link To Us":
                  - /url: linktous.htm
                - text: "| Bookmark EchoEcho.Com"
              - cell "Site Map":
                - link "Site Map":
                  - /url: https://echoecho.com/sitemap.htm
- table:
  - rowgroup:
    - row "EchoEcho.Com Homepage Web Hosting - As Reliable As It Gets!":
      - cell "EchoEcho.Com Homepage":
        - link "EchoEcho.Com Homepage":
          - /url: https://echoecho.com
          - img "EchoEcho.Com Homepage"
      - cell "Web Hosting - As Reliable As It Gets!":
        - img
        - link "Web Hosting - As Reliable As It Gets!":
          - /url: https://echoechoplus.com/
          - img "Web Hosting - As Reliable As It Gets!"
        - img
- table:
  - rowgroup:
    - row "Home > Welcome Search":
      - cell "Home > Welcome Search":
        - table:
          - rowgroup:
            - row "Home > Welcome Search":
              - cell "Home > Welcome":
                - link "Home":
                  - /url: https://echoecho.com/index.html
                - text: "> Welcome"
              - cell "Search":
                - textbox
                - button "Search"
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test';
   2 |
   3 |
   4 | test("Checking URL1" , async ({page}) =>{
   5 |     await page.goto('https://themeforest.net/');
   6 |     const page_url = await page.url();
   7 |     console.log("Page URL is " , page_url);
   8 |     await expect(page).toHaveURL('https://themeforest.net/');
   9 |
   10 |     const page_title = await page.title();
   11 |     console.log('Page title is ' , page_title);
   12 |     await expect(page).toHaveTitle(page_title);
   13 |
   14 | });
   15 |
   16 | test("Checking URL2" , async ({page}) =>{
   17 |     await page.goto('https://demo.opencart.com/');
   18 |     const page_url = await page.url();
   19 |     console.log("Page URL is " , page_url);
   20 |     await expect(page).toHaveURL('https://demo.opencart.com/');
   21 |
   22 |     const page_title = await page.title();
   23 |     console.log('Page title is ' , page_title);
   24 |     await expect(page).toHaveTitle(page_title);
   25 |
   26 | });
   27 |
   28 | test("Checking URL3" , async ({page}) =>{
   29 |     await page.goto('https://www.rediff.com/');
   30 |     const page_url = await page.url();
   31 |     console.log("Page URL is " , page_url);
   32 |     await expect(page).toHaveURL('https://www.rediff.com/');
   33 |
   34 |     const page_title = await page.title();
   35 |     console.log('Page title is ' , page_title);
   36 |     await expect(page).toHaveTitle(page_title);
   37 |
   38 | });
   39 |
   40 | test("Checking URL4" , async ({page}) =>{
   41 |     await page.goto('http://www.leafground.com/pages/Dropdown.html');
   42 |     const page_url = await page.url();
   43 |     console.log("Page URL is " , page_url);
   44 |     await expect(page).toHaveURL('http://www.leafground.com/pages/Dropdown.html');
   45 |
   46 |     const page_title = await page.title();
   47 |     console.log('Page title is ' , page_title);
   48 |     await expect(page).toHaveTitle(page_title);
   49 |
   50 | });
   51 |
   52 | test("Checking URL5" , async ({page}) =>{
   53 |     await page.goto('http://www.tizag.com/javascriptT/javascriptalert.php');
   54 |     const page_url = await page.url();
   55 |     console.log("Page URL is " , page_url);
   56 |     await expect(page).toHaveURL('http://www.tizag.com/javascriptT/javascriptalert.php');
   57 |
   58 |     const page_title = await page.title();
   59 |     console.log('Page title is ' , page_title);
   60 |     await expect(page).toHaveTitle(page_title);
   61 |
   62 | });
   63 |
   64 | test("Checking URL6" , async ({page}) =>{
   65 |     await page.goto('http://www.echoecho.com/htmlforms10.html');
   66 |     const page_url = await page.url();
   67 |     console.log("Page URL is " , page_url);
>  68 |     await expect(page).toHaveURL('http://www.echoecho.com/htmlforms10.html');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
   69 |
   70 |     const page_title = await page.title();
   71 |     console.log('Page title is ' , page_title);
   72 |     await expect(page).toHaveTitle(page_title);
   73 |
   74 | });
   75 |
   76 | test("Checking URL7" , async ({page}) =>{
   77 |     await page.goto('http://www.leafground.com/home.html');
   78 |     const page_url = await page.url();
   79 |     console.log("Page URL is " , page_url);
   80 |     await expect(page).toHaveURL('http://www.leafground.com/home.html');
   81 |
   82 |     const page_title = await page.title();
   83 |     console.log('Page title is ' , page_title);
   84 |     await expect(page).toHaveTitle(page_title);
   85 |
   86 | });
   87 |
   88 | test("Checking URL8" , async ({page}) =>{
   89 |     await page.goto('http://automationpractice.com/index.php');
   90 |     const page_url = await page.url();
   91 |     console.log("Page URL is " , page_url);
   92 |     await expect(page).toHaveURL('http://automationpractice.com/index.php');
   93 |
   94 |     const page_title = await page.title();
   95 |     console.log('Page title is ' , page_title);
   96 |     await expect(page).toHaveTitle(page_title);
   97 |
   98 | });
   99 |
  100 | test("Checking URL9" , async ({page}) =>{
  101 |     await page.goto('https://login.salesforce.com/?locale=in');
  102 |     const page_url = await page.url();
  103 |     console.log("Page URL is " , page_url);
  104 |     await expect(page).toHaveURL('https://login.salesforce.com/?locale=in');
  105 |
  106 |     const page_title = await page.title();
  107 |     console.log('Page title is ' , page_title);
  108 |     await expect(page).toHaveTitle(page_title);
  109 |
  110 | });
  111 |
  112 | test("Checking URL10" , async ({page}) =>{
  113 |     await page.goto('http://www.filehosting.org');
  114 |     const page_url = await page.url();
  115 |     console.log("Page URL is " , page_url);
  116 |     await expect(page).toHaveURL('http://www.filehosting.org');
  117 |
  118 |     const page_title = await page.title();
  119 |     console.log('Page title is ' , page_title);
  120 |     await expect(page).toHaveTitle(page_title);
  121 |
  122 | });
  123 |
  124 | test("Checking URL11" , async ({page}) =>{
  125 |     await page.goto('http://www.bing.com');
  126 |     const page_url = await page.url();
  127 |     console.log("Page URL is " , page_url);
  128 |     await expect(page).toHaveURL('http://www.bing.com');
  129 |
  130 |     const page_title = await page.title();
  131 |     console.log('Page title is ' , page_title);
  132 |     await expect(page).toHaveTitle(page_title);
  133 |
  134 | });
  135 |
  136 | test("Checking URL12" , async ({page}) =>{
  137 |     await page.goto('https://www.freecrm.com/');
  138 |     const page_url = await page.url();
  139 |     console.log("Page URL is " , page_url);
  140 |     await expect(page).toHaveURL('https://www.freecrm.com/');
  141 |
  142 |     const page_title = await page.title();
  143 |     console.log('Page title is ' , page_title);
  144 |     await expect(page).toHaveTitle(page_title);
  145 |
  146 | });
  147 |
  148 | test("Checking URL13" , async ({page}) =>{
  149 |     await page.goto('http://www.half.ebay.com');
  150 |     const page_url = await page.url();
  151 |     console.log("Page URL is " , page_url);
  152 |     await expect(page).toHaveURL('http://www.half.ebay.com');
  153 |
  154 |     const page_title = await page.title();
  155 |     console.log('Page title is ' , page_title);
  156 |     await expect(page).toHaveTitle(page_title);
  157 |
  158 | });
  159 |
  160 | test("Checking URL14" , async ({page}) =>{
  161 |     await page.goto('https://alaskatrips.poweredbygps.com/');
  162 |     const page_url = await page.url();
  163 |     console.log("Page URL is " , page_url);
  164 |     await expect(page).toHaveURL('https://alaskatrips.poweredbygps.com/');
  165 |
  166 |     const page_title = await page.title();
  167 |     console.log('Page title is ' , page_title);
  168 |     await expect(page).toHaveTitle(page_title);
```