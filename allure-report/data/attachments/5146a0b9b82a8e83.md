# Test info

- Name: Checking URL15
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\URLTesting.spec.js:172:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.qaclickacademy.com/interview.php"
Received string: "https://www.qaclickacademy.com/interview.php"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    8 × locator resolved to <html lang="en-us" prefix="content: http://purl.org/rss/1.0/modules/content/ dc: http://purl.org/dc/terms/ foaf: http://xmlns.com/foaf/0.1/ og: http://ogp.me/ns# rdfs: http://www.w3.org/2000/01/rdf-schema# sioc: http://rdfs.org/sioc/ns# sioct: http://rdfs.org/sioc/types# skos: http://www.w3.org/2004/02/skos/core# xsd: http://www.w3.org/2001/XMLSchema#">…</html>
      - unexpected value "https://www.qaclickacademy.com/interview.php"

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\URLTesting.spec.js:176:24
```

# Page snapshot

```yaml
- img "Page Not Found"
- heading "This Page Does Not Exist" [level=1]
- paragraph: Sorry, the page you are looking for could not be found. It's just an accident that was not intentional.
```

# Test source

```ts
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
  169 |
  170 | });
  171 |
  172 | test("Checking URL15" , async ({page}) =>{
  173 |     await page.goto('http://www.qaclickacademy.com/interview.php');
  174 |     const page_url = await page.url();
  175 |     console.log("Page URL is " , page_url);
> 176 |     await expect(page).toHaveURL('http://www.qaclickacademy.com/interview.php');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  177 |
  178 |     const page_title = await page.title();
  179 |     console.log('Page title is ' , page_title);
  180 |     await expect(page).toHaveTitle(page_title);
  181 |
  182 | });
  183 |
  184 | test("Checking URL16" , async ({page}) =>{
  185 |     await page.goto('https://app.saucelabs.com/login');
  186 |     const page_url = await page.url();
  187 |     console.log("Page URL is " , page_url);
  188 |     await expect(page).toHaveURL('https://app.saucelabs.com/login');
  189 |
  190 |     const page_title = await page.title();
  191 |     console.log('Page title is ' , page_title);
  192 |     await expect(page).toHaveTitle(page_title);
  193 |
  194 | });
  195 |
  196 |
  197 | test("Checking URL17" , async ({page}) =>{
  198 |     await page.goto('https://opensource-demo.orangehrmlive.com/');
  199 |     const page_url = await page.url();
  200 |     console.log("Page URL is " , page_url);
  201 |     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/');
  202 |
  203 |     const page_title = await page.title();
  204 |     console.log('Page title is ' , page_title);
  205 |     await expect(page).toHaveTitle(page_title);
  206 |
  207 | });
  208 |
  209 | test("Checking URL18" , async ({page}) =>{
  210 |     await page.goto('http://only-testing-blog.blogspot.com/2014/05/form.html');
  211 |     const page_url = await page.url();
  212 |     console.log("Page URL is " , page_url);
  213 |     await expect(page).toHaveURL('http://only-testing-blog.blogspot.com/2014/05/form.html');
  214 |
  215 |     const page_title = await page.title();
  216 |     console.log('Page title is ' , page_title);
  217 |     await expect(page).toHaveTitle(page_title);
  218 |
  219 | });
```