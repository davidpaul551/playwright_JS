import {test , expect} from '@playwright/test';


test.describe('Validating the Alerts'  , () =>{


    test.beforeEach('launch the Browser' , async ({page}) =>{
       await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    })

    test('Validate the Alert by Username' , async ({page}) =>{

        page.on('dialog' , async (dialog) =>{
            const text = await dialog.message();
            console.log(text);
            expect(text).toEqual("Please enter your password");
            await dialog.accept();
        })
        await expect(page.locator('#login1')).toBeVisible();
        await page.locator('#login1').fill("Pauldavid@gmail.com");
        await page.getByRole('button' , {name:"Log In"}).click();
    })
    test('Validate the Alert by Password' , async ({page}) =>{

        page.on('dialog' , async (dialog) =>{
            const text = await dialog.message();
            console.log(text);
            expect(text).toEqual("Please enter a valid user name");
            await dialog.accept();
        })
        await expect(page.locator('#password')).toBeVisible();
        await page.locator('#password').fill("DAVID@123");
        await page.getByRole('button' , {name:"Log In"}).click();
    })

})