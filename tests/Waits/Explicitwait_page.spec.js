//////////////////waitfornavigation//////////////////////////////////////////
import { test, expect } from "@playwright/test"
test("waitfornavigation", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await Promise.all([
        page.waitForNavigation(),
        page.locator("//a[@id='nav-cart']").click()  //pass
    ])
})
////////////////////////////////waitforloadstate///////////////////////////////
test("waitforloadstate", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("//a[@id='nav-cart']").click()
    await page.waitForLoadState("networkidle", { timeout: 34000 })
})
///////////////////////////waiforevent/////////////////////////////////////////
test.only("waitforevent", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.locator("#writeArea").fill("hi download")
    var [pathofdownload] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])
    console.log(await pathofdownload.path());   //C:\Users\piuin\AppData\Local\Temp\playwright-artifacts-UIsy9L\a8ccae65-db84-4bf9-89ea-fe1d10a7a6c6
})