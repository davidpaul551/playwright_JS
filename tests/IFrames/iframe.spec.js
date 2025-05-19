import {test , expect} from '@playwright/test';

test('I Frames Testing' , async ({page}) =>{
    await page.goto('https://jqueryui.com/droppable')

    const iframeElement = page.frameLocator("//iframe[@class='demo-frame']")

    const dragEle = iframeElement.locator("//div[@id='draggable']");
    const dropEle = iframeElement.locator("//div[@id='droppable']");

    await dragEle.dragTo(dropEle);
    await page.waitForTimeout(5000);
    await page.close();

});