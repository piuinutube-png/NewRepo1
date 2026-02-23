///////////////////write data in excel from here//////////////////////
import { test, expect } from "@playwright/test"
import path from "path"
import excel from "exceljs"
import { text } from "stream/consumers"
test("write data in excel", async ({ page }) => {
    var book = new excel.Workbook()
    book.xlsx.readFile("C:/Users/piuin/OneDrive/Desktop/VsExcelData/WriteExceldata1.xlsx")
    var sheet = book.getWorksheet("Sheet2")
    if (!sheet) {
        var sheet = book.addWorksheet("Sheet2")
    }
    sheet.getRow(1).getCell(1).value = "write1"
    var sheet1 = book.getWorksheet("Sheet1")
    if (!sheet1) {
        var sheet1 = book.addWorksheet("Sheet1")
    }
    sheet1.getRow(2).getCell(2).value = "write2"
    book.xlsx.writeFile("C:/Users/piuin/OneDrive/Desktop/VsExcelData/WriteExceldata1.xlsx")
})
//////////////////////write data in excel from app///////////////////////////
test.only("write data in excel from app", async ({ page }) => {
    var book = new excel.Workbook()
    await book.xlsx.readFile("C:/Users/piuin/OneDrive/Desktop/VsExcelData/WriteExceldata1.xlsx")
    var sheet = book.getWorksheet("Sheet3")
    if (!sheet) {
        var sheet = book.addWorksheet("Sheet3")
    }
    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("shoes")
    await page.locator("//div[@role='row']").first().waitFor()
    var alldata = await page.locator("//div[@role='row']").allInnerTexts()
    console.log(alldata)
        for (var i = 0; i < alldata.length; i++){
            sheet.getRow(1).getCell(i+1).value = alldata[i]}
        await book.xlsx.writeFile("C:/Users/piuin/OneDrive/Desktop/VsExcelData/WriteExceldata1.xlsx")
            
})
