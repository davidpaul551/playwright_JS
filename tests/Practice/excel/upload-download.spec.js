const ExcelJs = require("exceljs");
import { test, expect } from "@playwright/test";
const path = require('path');
const os = require('os');



async function excelText(searchText, replaceText, change, filePath) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet("Sheet1");
  const output = await readExcel(worksheet, searchText);

  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value == searchText) {
        output.row = rowNumber;
        output.column = colNumber;
        console.log(rowNumber);
        console.log(colNumber);
      }
    });
  });
  return output;
}

// excelText(
//   "Republic",
//   "300",
//   {rowChange:0, colChange:2},
//   "C:/Users/david.doggala/OneDrive - ascendion/Desktop/PlayWrightExample/tests/Practice/excel/excelTData.xlsx"
// );

test("upload-download", async ({ page }) => {
  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html"
  );

  const textSearch = 'Mango';
  const updatedValue = '1000'
  page.getByRole("button", { name: "Download" }).click();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();

  const download = await downloadPromise;

  const downloadsDir = path.join(os.homedir(), "Downloads");
  const filePath = path.join(downloadsDir, "download.xlsx");

  await download.saveAs(filePath);
  excelText(textSearch, updatedValue, { rowChange: 0, colChange: 2 }, filePath);

  await page.locator("#fileinput").click();
  await page.locator("#fileinput").setInputFiles(filePath);

  const textLocator = page.getByText(textSearch);
  const desiredRow = await page.getByRole('row').filter({has:textLocator});
  await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updatedValue);


});
