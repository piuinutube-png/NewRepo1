
import { chromium, firefox,test } from "@playwright/test"
import { time } from "node:console"
test("bcontrols", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.setViewportSize({ width: 1000, height: 500 })
})
////////////////////////////////////////////////////////////////////////////
test("bcontrols1", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    var pagesize = await page.viewportSize()
    console.log(pagesize);  //{ width: 1280, height: 720 }
})
////////////////////////////////////////////////////////////////////////////////
test("bcontrols2", async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    var title1 = await page.title()
    console.log(title1);    //Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!
})
//////////////////////////////////////////////////////////////////////
test("bcontrols3", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    var url1 = await page.url()
    console.log(url1);     //https://www.amazon.in/
})
////////////////////////////////////////////////////////////
test("bcontrols4", async ({ page, context }) => {
    await page.goto("https://www.flipkart.com/")
    var cookies = await context.cookies()
    console.log(cookies);     //  data in object
})
//////////////////////////////////////////////////////////
test("bcontrols5", async () => {
    test.slow()
    var browser = await chromium.launch()   //chromium should be there in import
    var context = await browser.newContext()
    var page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
})
////////////////////////////////////////////////////////////
test("bcontrols6", async () => {
    var browser1 = await firefox.launch() //firefox should be there in import
    var context1 = await browser1.newContext()
    var page1 = await context1.newPage()
    await page1.goto("https://www.flipkart.com/")
})
//////////////////////////////////////////////////////////
test("bcontrols7", async ({ page }) => {
    test.slow()
    await page.goto("https://www.flipkart.com/")
    var time = new Date().getTime()
    await page.screenshot({ path: `screenshot / ss${time}.png` })
})
//////////////////////////////////////////////////////////////////
test("bcontrols8", async () => {
    var browser2 = await firefox.launch() //firefox should be there in import
    var context2 = await browser2.newContext()
    var page2 = await context2.newPage()
    browser2.close()   //close the browser and other things cant be executes so fail will come
    await page2.goto("https://www.flipkart.com/")
})