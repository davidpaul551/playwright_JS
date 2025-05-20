# Test info

- Name: Dropdown  Test 
- Location: C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Dropdown\dropdown.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/#", waiting until "load"

    at C:\Users\david.doggala\OneDrive - ascendion\Desktop\PlayWrightExample\tests\Dropdown\dropdown.spec.js:4:16
```

# Test source

```ts
   1 | import {test , expect} from '@playwright/test';
   2 |
   3 | test('Dropdown  Test ' , async ({page}) =>{
>  4 |     await page.goto("https://testautomationpractice.blogspot.com/#");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |
   6 |     await page.selectOption("#country" , 'India');
   7 |     await page.waitForTimeout(3000)
   8 |     await page.selectOption("#country" , {label:'India'});
   9 |     await page.waitForTimeout(3000)
  10 |     await page.selectOption("#country" , {value:'uk'});
  11 |     await page.waitForTimeout(3000)
  12 |     await page.selectOption("#country" , {index:6});
  13 |     await page.waitForTimeout(3000)
  14 |
  15 |     const options = await page.$$("//select[@id='country']/option")
  16 |     expect(options.length).toBe(10);
  17 |
  18 |     const options1 = await page.locator("//select[@id='country']/option")
  19 |     expect(options1).toHaveCount(10);
  20 |
  21 |     let flag = false;
  22 |
  23 |     for(const option of options){
  24 |         const textOptions = await option.textContent();
  25 |         console.log(textOptions);
  26 |         if(textOptions.includes('India')){
  27 |             flag = true;
  28 |             break;
  29 |         }
  30 |     }
  31 |     expect(flag).toBeTruthy();
  32 |
  33 |     await page.waitForTimeout(3000)
  34 |
  35 |     await page.close();
  36 |
  37 |
  38 | });
```