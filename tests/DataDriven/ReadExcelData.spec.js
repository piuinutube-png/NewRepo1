//////////////////Read single excel data///////////////////
import { test, expect } from "@playwright/test"
import path from "path";
import excel from "exceljs"
test("read excel data1", async ({ page }) => {
  var book = new excel.Workbook()
  await book.xlsx.readFile("C:/Users/piuin/OneDrive/Desktop/VsExcelData/ReadExceldata1.xlsx")
  var sheet = await book.getWorksheet("Sheet1")
  var data1 = await sheet.getRow(1).getCell(1).toString()//url index starts from 1 not 0
  //var data1 = await sheet.getRow(1).getCell(1)   //object
  //var data1 = await sheet.getRow(1).getCell(1).value //url
  //var data1 = await sheet.getRow(0).getCell(0).value //fails as index o not there in pw js
  console.log(data1);
})
///////////////////Read multiple data from excel/////////////////////////////
test("read multiple data from excel", async ({ page }) => {
  var book = new excel.Workbook()
  await book.xlsx.readFile("C:/Users/piuin/OneDrive/Desktop/VsExcelData/ReadExceldata1.xlsx")
  var sheet = book.getWorksheet("Sheet1")
  for (var i = 1; i <= sheet.actualRowCount; i++) {  //first rows all rows value first
    for (var j = 1; j <= sheet.actualColumnCount; j++) {
      var data = sheet.getRow(i).getCell(j).toString()
      console.log(data);  //all rows and all columns 
    }
  }
})
//////////////////sending multiple data from excel//////////////////////
test("send multiple data from excel", async ({ page }) => {
  var book = new excel.Workbook()
  await book.xlsx.readFile("C:/Users/piuin/OneDrive/Desktop/VsExcelData/ReadExceldata1.xlsx")
  var sheet = book.getWorksheet("Sheet1")
  for (var i = 2; i <= sheet.actualRowCount; i++) {  //1 is heading so staring with 2
    var url = sheet.getRow(i).getCell(1).toString()
    var un = sheet.getRow(i).getCell(2).toString()
    var pwd = sheet.getRow(i).getCell(3).toString()
    var alldata = []
    alldata.push({ url: url, un: un, pwd: pwd })
    //console.log(alldata);  //url,un,pwd of all rows
    for (var d of alldata) {
      await page.goto(d.url)
      await page.locator("#username").fill(d.un)
      await page.waitForTimeout(2000)
      await page.locator("#password").fill(d.pwd)
      await page.waitForTimeout(2000)
      await page.locator("#submit").click()
      await page.waitForTimeout(2000)
      await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/") //pass
    }
  }
})
