const { After, Before, AfterStep, Status } = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test');
const path = require('path');

Before(async function () {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage();
});


AfterStep(async function ({result}){
    if(result.status == Status.FAILED){
        await this.page.screenshot({path:'failed-screenshot.png'});
    }
})

After(async function(){
      await this.page.context().browser().close();
})