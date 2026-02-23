///////////////////////upload file from project////////////////////////
import { test, expect } from "@playwright/test"
import fs from "fs";
import path from "path";
test("upload from project", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log(__dirname);
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname, "Uploadfile/text1.txt"))
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Upload Single File']").click({ force: true })
    await page.waitForTimeout(2000)
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/Uploadfile/text1.txt", "C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/Uploadfile/text2.txt"])
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Upload Multiple Files']").click({ force: true })
    await page.waitForTimeout(2000)  //pass
})
/////////////////////upload file from local system////////////////////////
test("upload from localsystem", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles("C:/Users/piuin/OneDrive/Desktop/VsFile/vs1.txt")
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Upload Single File']").click({ force: true })
    await page.waitForTimeout(2000)
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/piuin/OneDrive/Desktop/VsFile/vs1.txt", "C:/Users/piuin/OneDrive/Desktop/VsFile/vs2.txt"])
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Upload Multiple Files']").click({ force: true })
    await page.waitForTimeout(2000)  //pass
})
/////////////////////remove  file attached already////////////////////////
test("remove attached file", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles([])
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Upload Single File']").click({ force: true })
    await page.waitForTimeout(2000)
    await page.locator("#multipleFilesInput").setInputFiles([])
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Upload Multiple Files']").click({ force: true })
    await page.waitForTimeout(2000)  //pass
})
////////////////////////download file with promise.all in project////////////////////////
test("download file with promiseall", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.locator("#writeArea").fill("i am downloading file with prmoise.all")
    var [downloadedfile] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()])
    var downloadfolder1 = "C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/Uploadfile"
    var downloadfile1 = downloadedfile.suggestedFilename()
    await downloadedfile.saveAs(path.join(downloadfolder1, downloadfile1))
})
////////////////////////download file without promise.all in project////////////////////////
test("download file without promiseall", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.locator("#writeArea").fill("i am downloading file without promise.all")
    var downlodedfile = page.waitForEvent("download")
    page.locator("#downloadButton").click()
    var downloadedfilenew = await downlodedfile
    var downloadfolder1 = "C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/Uploadfile"
    var downloadfile1 = downloadedfilenew.suggestedFilename()
    var time1 = Date.now()
    var newfilename = `${downloadfile1}-${time1}`
    await downloadedfilenew.saveAs(path.join(downloadfolder1, newfilename))
     //check for downloaded file in project
    if (fs.existsSync(path.join(downloadfolder1, newfilename))) {
        console.log("downloaded file saved in project folder");
    }
    else {
        console.log("downloaded file  not saved in project folder");
    }
})
////////////////////////download file without promise.all in localsystem////////////////////////
test("download file without promiseall in localsystem", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.locator("#writeArea").fill("i am downloading file without promise.all")
    var downlodedfile = page.waitForEvent("download")
    page.locator("#downloadButton").click()
    var downloadedfilenew = await downlodedfile
    var downloadfolder1 = "C:/Users/piuin/OneDrive/Desktop/VsFile"
    var downloadfile1 = downloadedfilenew.suggestedFilename()
    var time1 = Date.now()
    var newfilename = `${downloadfile1}-${time1}`
    await downloadedfilenew.saveAs(path.join(downloadfolder1, newfilename))
    //check for downloaded file in local system
    if (fs.existsSync(path.join(downloadfolder1, newfilename))) {
        console.log("downloaded file saved in local system folder");
    }
    else {
        console.log("downloaded file  not saved in local system folder");
    }
})