# Test info

- Name: Checking URL10
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\URLTesting.spec.js:112:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.filehosting.org/"
Received string: "https://www.filesharing.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.filesharing.com/"

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\test-practices\URLTesting.spec.js:116:24
```

# Page snapshot

```yaml
- banner:
  - link "Filesharing.com":
    - /url: https://www.filesharing.com/
    - img "Filesharing.com"
  - link "Editor":
    - /url: /editor
  - link "Log in":
    - /url: https://www.filesharing.com/login
- main:
  - heading "Share large files securely and privately Filesharing - Fast and Simple to Use Create a free account now." [level=2]
  - link "Get started":
    - /url: https://www.filesharing.com/login
  - link "Log in":
    - /url: https://www.filesharing.com/login
  - text: Secure
  - paragraph: Our platform is built with security in mind. We use the latest technologies to ensure your data is safe.
  - paragraph: All our servers are located in the EU and we do not share our data with third parties.
  - text: Ease of use
  - paragraph: Just create a free account, upload some files and share them with anyone.
  - paragraph:
    - text: We allow up to 50 files per upload and a total of
    - strong: 1GB
    - text: of storage per user. Files that have not been accessed for more than 30 days will be deleted.
  - text: Share your files
  - paragraph: Share multiple files with one download link. You can even share large files up to 1GB.
  - paragraph: Please note that we do not allow any illegal, explicit or copyrighted content on this platform. If you violate our guidelines we have to suspend your account and your files will be deleted.
  - text: Magic-Login
  - paragraph: Just enter your email address and we will send you a magic link to log in.
  - paragraph: There is no need to create a password or remember one. Just click the link and you are logged in.
  - 'heading "Our guarantee: Your email address will not be shared with third parties." [level=2]'
  - paragraph: However, if you violate our terms and conditions and share files that violate applicable laws, trademarks and copyrights (e.g. pirated copies, pornography, etc.), we will fully cooperate with the authorities and rights holders. So please only upload files to our file sharing service if you are authorized to do so and are not committing any infringement.
  - heading "FAQ" [level=2]
  - heading "How do I share a file?" [level=2]
  - paragraph: Just create a free Account, upload your files and create a download Link
  - heading "How does the login process work?" [level=2]
  - paragraph:
    - text: We use a magic link login system. Go to the
    - link "Login Page":
      - /url: /login
    - text: and enter your email address. We will then send you a login link that is valid for 60 minutes. Please do not share this link, it can be used by anyone to access your account
  - heading "How many files can i upload?" [level=2]
  - paragraph: We allow up to 50 files per upload and a total of 1 GB per user
  - heading "How long are my files stored?" [level=2]
  - paragraph: If a file was not accessed for more than 30 days, it will be deleted
- contentinfo:
  - link "Imprint / Legal Notice":
    - /url: /imprint
  - separator
  - link "2025 — KV GmbH":
    - /url: https://www.kv-gmbh.de
    - text: 2025 —
    - strong: KV GmbH
```

# Test source

```ts
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
   68 |     await expect(page).toHaveURL('http://www.echoecho.com/htmlforms10.html');
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
> 116 |     await expect(page).toHaveURL('http://www.filehosting.org');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
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
  176 |     await expect(page).toHaveURL('http://www.qaclickacademy.com/interview.php');
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
```