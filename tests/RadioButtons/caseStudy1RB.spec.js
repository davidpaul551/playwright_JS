import {test , expect} from '@playwright/test';

test('Radio Button Count for Facebook Login' , async ({page}) =>{
    await page.goto('https://www.facebook.com/r.php?entry_point=login');
    const Radiocount =  await page.$$('input[type="radio"]');
    console.log(Radiocount.length);

    await page.locator("//label[normalize-space()='Female']").check();
    await expect(page.locator("//label[normalize-space()='Female']")).toBeChecked();
    
});

test('Radio Button Count' , async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/#');
    const Radiocount =  await page.$$('input[type="radio"]');
    console.log("Radio butto count is " ,Radiocount.length);

    const CheckBoxcount =  await page.$$('input[type="checkbox"]');
    console.log("Checkbox count is " ,CheckBoxcount.length);

    await page.locator("//input[@id='male']").check();
    await expect(page.locator("//input[@id='male']")).toBeChecked();

    await page.locator("//input[@id='male']").check();
    await expect(page.locator("//input[@id='male']")).toBeChecked();
    
});


test.only('CheckBox Test validation' , async ({page}) =>{
     await page.goto('https://testautomationpractice.blogspot.com/#');

    const CheckBoxcount =  await page.$$('input[type="checkbox"]');
    console.log("Checkbox count is " ,CheckBoxcount.length);

    await page.locator("//input[@id='sunday']").check();
    expect(await page.locator("//input[@id='sunday']")).toBeChecked();
    await page.waitForTimeout(5000);

    await page.locator("//input[@id='sunday']").uncheck();
    expect(await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy();

    const checkboxes = ["//input[@id='sunday']" , "//input[@id='monday']" , "//input[@id='tuesday']"];

    for(const check of checkboxes){
        await page.locator(check).check();
    }
    await page.waitForTimeout(5000);
    for(const check of checkboxes){
        await page.locator(check).uncheck();
    }

    await page.waitForTimeout(5000);
    await page.close();

});