////////////////////single value json data////////////////////////////
import { test, expect } from "@playwright/test"
import fs from "fs"
import { title } from "process"
test("readsinglejsonval", async ({ page }) => {
    var jsonfile1 = fs.readFileSync("C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/TestData/JsonSingleValData.json")
    var jsondata1 = JSON.parse(jsonfile1)
    console.log(jsondata1.greet1);  //hello
})
//////////////Multiple value json data/////////////////////////////
test("readmultiplejsonval", async ({ page }) => {
    var jsonfile1 = fs.readFileSync("C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/TestData/JsonMultipleValData.json")
    var jsondata1 = JSON.parse(jsonfile1)
    jsondata1.forEach(d1 => {
        console.log(d1.greet);   //hey hello byeeeee
    });
    console.log(jsondata1.greet);  //undefined (traverse through foreach)
})
/////////////////////////Single set json data///////////////////////
test("readsinglejsonset", async ({ page }) => {
    var jsonfile1 = fs.readFileSync("C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/TestData/JsonSingleSetData.json")
    var jsondata1 = JSON.parse(jsonfile1)
    await page.goto(jsondata1.url)
    await page.locator("#username").fill(jsondata1.un)
    await page.waitForTimeout(2000)
    await page.locator("#password").fill(jsondata1.pwd)
    await page.waitForTimeout(2000)
    await page.locator("#submit").click()
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation")
})
//////////Multiple set json data using for of as for each will not have waits/////////////////////////
test("readmultiplejsonset", async ({ page }) => {
    var jsonfile1 = fs.readFileSync("C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/TestData/JsonMultipleSetData.json")
    var jsondata1 = JSON.parse(jsonfile1)
    for (var data1 of jsondata1) {
        var url = data1.url
        var un = data1.un
        var pwd = data1.pwd
        await page.goto(url)
        await page.locator("#username").fill(un)
        await page.waitForTimeout(2000)
        await page.locator("#password").fill(pwd)
        await page.waitForTimeout(2000)
        await page.locator("#submit").click()
        await page.waitForTimeout(2000)
        await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation")
    }  //purposelly failing last set 
})
/////////////// dff multiple set data using for of as for each have no waits///////////////////////
test("readdffmultiplejsonset1", async ({ page }) => {
    var jsonfile1 = fs.readFileSync("C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/TestData/JsonDffMultipleSetData.json")
    var jsondata1 = JSON.parse(jsonfile1)
    for (var data1 of jsondata1.valid) {
        var url = data1.url
        var un = data1.un
        var pwd = data1.pwd
        await page.goto(url)
        await page.locator("#username").fill(un)
        await page.waitForTimeout(2000)
        await page.locator("#password").fill(pwd)
        await page.waitForTimeout(2000)
        await page.locator("#submit").click()
        await page.waitForTimeout(2000)
        await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation")
    }  //i will pass but because of next invalid one whole script will fail
    for (var data1 of jsondata1.Invalid) {
        var url = data1.url
        var un = data1.un
        var pwd = data1.pwd
        await page.goto(url)
        await page.locator("#username").fill(un)
        await page.waitForTimeout(2000)
        await page.locator("#password").fill(pwd)
        await page.waitForTimeout(2000)
        await page.locator("#submit").click()
        await page.waitForTimeout(2000)
        await expect(page).toHaveTitle("Test Login | Practice Test Automation")
    }  //is invalid so it should fail n its failing also
})
//////////dff multilple set data  with for in and for of as for of will lead to code duplicacy//////////
test("readdffmultiplejsonset2", async ({ page }) => {
    var jsonfile1 = fs.readFileSync("C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/TestData/JsonDffMultipleSetData.json")
    var jsondata1 = JSON.parse(jsonfile1)
    for (var data1 in jsondata1) {
        console.log(data1);  //valid invalid keynames
        var arrkey = jsondata1[data1];
        for (var k of arrkey) {
            await page.goto(k.url)
            await page.locator("#username").fill(k.un)
            //await page.waitForTimeout(2000)
            await page.locator("#password").fill(k.pwd)
            //await page.waitForTimeout(2000)
            await page.locator("#submit").click()
            //await page.waitForTimeout(2000)
            var title = await page.title()
            if (title.includes("Logged In Successfully")) {
                console.log("valid");  //valid valid valid
            }
            else if (title.includes("Test Login")) {
                console.log("invalid");  //invalid invalid invalid  //pass as if else cant fail
            }
        }
    }
})
//////////////////////read  single set data with describe///////////////////
test.describe("readsinglejsonsetDescribe",  () => {
    var jsonfile1 = fs.readFileSync("C:/Users/piuin/OneDrive/Desktop/TekPyramid/PW1/tests/TestData/JsonSingleSetData.json")
    var jsondata1 = JSON.parse(jsonfile1)
    var url = jsondata1.url
    var un = jsondata1.un
    var pwd = jsondata1.pwd
    test("readsinglejsonset1", async ({ page }) => {
        await page.goto(url)
        await page.locator("#username").fill(un)
       // await page.waitForTimeout(2000)
        await page.locator("#password").fill(pwd)
        //await page.waitForTimeout(2000)
        await page.locator("#submit").click()
        //await page.waitForTimeout(2000)
        await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation")
    })
     test("readsinglejsonset2", async ({ page }) => {
        await page.goto(url)
        await page.locator("#username").fill(un)
        //await page.waitForTimeout(2000)
        await page.locator("#password").fill(pwd)
        //await page.waitForTimeout(2000)
        await page.locator("#submit").click()
        //await page.waitForTimeout(2000)
        await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation")
    })
})