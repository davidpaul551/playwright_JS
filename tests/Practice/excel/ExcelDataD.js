import ExcelJS from "exceljs";

export async function readExcelData(filePath, sheetName = "Sheet1") {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(sheetName);

  const data = [];

  // Get headers from first row
  const headerRow = worksheet.getRow(1);
  const headers = headerRow.values; // array, index starts at 1

  worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
    if (rowNumber === 1) return;

    const rowData = {};
    row.values.forEach((value, index) => {
      if (index === 0) return; // row.values is 1-based; skip 0th element
      const header = headers[index];
      rowData[header] = value;
    });
    data.push(rowData);
  });

  console.log(data);
  return data;
}

// const filepath = "C:/Users/david.doggala/OneDrive - ascendion/Desktop/PlayWrightExample/tests/Practice/excel/E2Edata.xlsx";
// readExcelData(filepath, "Sheet1");
