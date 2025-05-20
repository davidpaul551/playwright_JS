# Test info

- Name: Case Study on Alerts
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Alerts\caseStudy1.spec.js:3:5

# Error details

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[normalize-space()=\'Clear\']') to be visible
    48 × locator resolved to hidden <button class="btn btn-primary btn-rounded cart-clear btn-danger">Clear</button>

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Alerts\caseStudy1.spec.js:19:16
```

# Page snapshot

```yaml
- navigation:
  - link "web-scraping.dev":
    - /url: https://web-scraping.dev/
  - list:
    - listitem:
      - button "Docs"
    - listitem:
      - link "Products":
        - /url: https://web-scraping.dev/products
    - listitem:
      - link "Reviews":
        - /url: https://web-scraping.dev/reviews
    - listitem:
      - link "Testimonials":
        - /url: https://web-scraping.dev/testimonials
  - list:
    - listitem:
      - link "login":
        - /url: https://web-scraping.dev/login
    - listitem:
      - img
      - superscript: "0"
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - text: /
      - link "Products":
        - /url: /products
    - listitem: / Box of Chocolate Candy
- heading "Box of Chocolate Candy" [level=3]
- heading [level=6]
- img
- img
- img
- img
- heading "Description" [level=4]
- paragraph: Indulge your sweet tooth with our Box of Chocolate Candy. Each box contains an assortment of rich, flavorful chocolates with a smooth, creamy filling. Choose from a variety of flavors including zesty orange and sweet cherry. Whether you're looking for the perfect gift or just want to treat yourself, our Box of Chocolate Candy is sure to satisfy.
- text: $9.99 from $12.99
- button "Add to Cart"
- button "Buy Now"
- heading "Variants" [level=3]
- link "orange, small":
  - /url: https://web-scraping.dev/product/1?variant=orange-small
- link "orange, medium":
  - /url: https://web-scraping.dev/product/1?variant=orange-medium
- link "orange, large":
  - /url: https://web-scraping.dev/product/1?variant=orange-large
- link "cherry, small":
  - /url: https://web-scraping.dev/product/1?variant=cherry-small
- link "cherry, medium":
  - /url: https://web-scraping.dev/product/1?variant=cherry-medium
- link "cherry, large":
  - /url: https://web-scraping.dev/product/1?variant=cherry-large
- heading "Features Vertical Table" [level=3]
- table:
  - rowgroup:
    - row "material Premium quality chocolate":
      - cell "material"
      - cell "Premium quality chocolate"
    - row "flavors Available in Orange and Cherry flavors":
      - cell "flavors"
      - cell "Available in Orange and Cherry flavors"
    - row "sizes Available in small, medium, and large boxes":
      - cell "sizes"
      - cell "Available in small, medium, and large boxes"
    - row "brand ChocoDelight":
      - cell "brand"
      - cell "ChocoDelight"
    - row "care instructions Store in a cool, dry place":
      - cell "care instructions"
      - cell "Store in a cool, dry place"
    - row "purpose Ideal for gifting or self-indulgence":
      - cell "purpose"
      - cell "Ideal for gifting or self-indulgence"
- heading "Packs Horizontal Table" [level=3]
- table:
  - rowgroup:
    - row "Version Package Weight Package Dimension Variants Delivery Type":
      - cell "Version"
      - cell "Package Weight"
      - cell "Package Dimension"
      - cell "Variants"
      - cell "Delivery Type"
  - rowgroup:
    - row "Pack 1 1,00 kg 100x230 cm 6 available 1 Day shipping":
      - cell "Pack 1"
      - cell "1,00 kg"
      - cell "100x230 cm"
      - cell "6 available"
      - cell "1 Day shipping"
    - row "Pack 2 2,11 kg 200x460 cm 6 available 1 Day shipping":
      - cell "Pack 2"
      - cell "2,11 kg"
      - cell "200x460 cm"
      - cell "6 available"
      - cell "1 Day shipping"
    - row "Pack 3 3,22 kg 300x690 cm 6 available 1 Day shipping":
      - cell "Pack 3"
      - cell "3,22 kg"
      - cell "300x690 cm"
      - cell "6 available"
      - cell "1 Day shipping"
    - row "Pack 4 4,33 kg 400x920 cm 6 available 1 Day shipping":
      - cell "Pack 4"
      - cell "4,33 kg"
      - cell "400x920 cm"
      - cell "6 available"
      - cell "1 Day shipping"
    - row "Pack 5 5,44 kg 500x1150 cm 6 available 1 Day shipping":
      - cell "Pack 5"
      - cell "5,44 kg"
      - cell "500x1150 cm"
      - cell "6 available"
      - cell "1 Day shipping"
- heading "Reviews" [level=3]
- text: 2022-07-22
- img
- img
- img
- img
- img
- paragraph: Absolutely delicious! The orange flavor is my favorite.
- text: 2022-08-16
- img
- img
- img
- img
- paragraph: I bought these as a gift, and they were well received. Will definitely purchase again.
- text: 2022-09-10
- img
- img
- img
- img
- img
- paragraph: Nice variety of flavors. The chocolate is rich and smooth.
- text: 2022-10-02
- img
- img
- img
- img
- img
- paragraph: The cherry flavor is amazing. Will be buying more.
- text: 2022-11-05
- img
- img
- img
- img
- paragraph: A bit pricey, but the quality of the chocolate is worth it.
- button "Load More"
- heading "Similar Products" [level=3]
- link "thumbnail of Red Energy Potion Red Energy Potion $4.99":
  - /url: https://web-scraping.dev/product/28
  - img "thumbnail of Red Energy Potion"
  - heading "Red Energy Potion" [level=3]
  - text: $4.99
- link "thumbnail of Women's High Heel Sandals Women's High Heel Sandals $59.99":
  - /url: https://web-scraping.dev/product/20
  - img "thumbnail of Women's High Heel Sandals"
  - heading "Women's High Heel Sandals" [level=3]
  - text: $59.99
- link "thumbnail of Dark Red Energy Potion Dark Red Energy Potion $4.99":
  - /url: https://web-scraping.dev/product/26
  - img "thumbnail of Dark Red Energy Potion"
  - heading "Dark Red Energy Potion" [level=3]
  - text: $4.99
- link "thumbnail of Dark Red Energy Potion Dark Red Energy Potion $4.99":
  - /url: https://web-scraping.dev/product/2
  - img "thumbnail of Dark Red Energy Potion"
  - heading "Dark Red Energy Potion" [level=3]
  - text: $4.99
- contentinfo:
  - link "SCRAPFLY ACADEMY":
    - /url: https://scrapfly.io/academy
    - button "SCRAPFLY ACADEMY":
      - img
      - text: SCRAPFLY ACADEMY
  - list:
    - text: v1.3.0 made by
    - link "ScrapFly":
      - /url: https://web-scraping.dev/
    - img
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test';
   2 |
   3 | test('Case Study on Alerts' , async ({page}) =>{
   4 |
   5 |     page.on('dialog' , async dialog =>{
   6 |         if(dialog.message().includes('clear your cart')){
   7 |             console.log(`Clicking OK to ${dialog.message()}`)
   8 |             await dialog.accept();
   9 |         }else{
  10 |             await dialog.dismiss();
  11 |         }
  12 |     })
  13 |
  14 |     page.goto('https://web-scraping.dev/product/1');
  15 |     await page.click('.add-to-cart');
  16 |
  17 |     await page.locator("//div[@class='cart-icon']").click();
  18 |
> 19 |     await page.waitForSelector("//button[normalize-space()='Clear']");
     |                ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  20 |     await page.locator("//button[normalize-space()='Clear']").click();
  21 |
  22 |     
  23 | });
```