/////////////multiple tabs creation manually//////////////////
import { test, expect } from "@playwright/test"
test("multipletabcreation", async ({ browser }) => {
    var context = await browser.newContext()
    var page1 = await context.newPage()
    await page1.goto("https://www.amazon.in/")
    var page2 = await context.newPage()
    await page2.goto("https://www.flipkart.com/")
})
////////////////one tab to another without handling///////////
test("onetabtoanother", async ({ browser }) => {
    var context = await browser.newContext()
    var page1 = await context.newPage()
    await page1.goto("https://www.redbus.in/")
    await page1.locator("//a[text()='Contact us']").click()
    await page1.locator("//span[text()='Account']").click()  //fails without handling
})
////////////////one tab to another with handling///////////
test("onetabtoanother1", async ({ browser }) => {
    var context = await browser.newContext()
    var page1 = await context.newPage()
    await page1.goto("https://www.redbus.in/")
    var [page2] = await Promise.all([
        page1.waitForEvent('popup'),
        page1.locator("//a[text()='Contact us']").click()
    ])
    await page2.locator("//span[text()='Account']").click()   //pass
})
////////////////one window to another with handling///////////
test.only("onewindowtoanother", async ({ browser }) => {
    var context = await browser.newContext()
    var page1 = await context.newPage()
    await page1.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
    var [window2] = await Promise.all([
        page1.waitForEvent('popup'),
        page1.locator("//button[text()='Shop Now']").click()
    ])
    await page1.waitForTimeout(2000)
    await window2.locator("//button[text()='Add to Cart']").click()  //pass
    await page1.waitForTimeout(2000)
})
//////////////frames length and title of frame and page/////////////////////
test("frame1", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2")
    await page.waitForSelector("iframe");
    var framelist = page.frame()
    console.log(framelist.length);  //3
    for (var frameslis of framelist) {
        console.log(await frameslis.title());  //DemoApps | Qspiders | iframes
        console.log(await page.title());  //same 3 times
    }
})
/////////////////////switch frame using framelocator()///////////////////////////////
test("frame", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2", { waitUntil: "load" })
    await page.waitForSelector("iframe")
    var frame1 = page.frameLocator("(//iframe)[1]")
    await frame1.locator("//input[@id='email']").fill("xyz@gmail.com")
    await page.waitForTimeout(2000)  //pass
})

/////////////////////switch frame using frame()///////////////////////////////
test("frame4", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2", { waitUntil: "load" })
    await page.waitForSelector("iframe")
    var framedata = page.frames()
    var frameurl = framedata[1].url()
    console.log(frameurl);
    var framelink = page.frame({ url: frameurl })
    await framelink.locator("//input[@id='email']").fill("xyxz@gmail.com")
    await page.waitForTimeout(2000)  //pass
})
/////////////////////switch frame using frame() and framelocator()///////////////////////////////
test("frame5", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2", { waitUntil: "load" })
    await page.waitForSelector("iframe")
    var framedata = page.frames()
    var frameurl = framedata[1].url()
    console.log(frameurl);
    var framelink = page.frame({ url: frameurl })
    var actframe = framelink.frameLocator("iframe")
    await actframe.locator("//input[@id='email']").fill("xyxz@gmail.com")
    await page.waitForTimeout(2000)  //fails
})
/////////////////////switch frame using contentframe()///////////////////////////////
test("frame6", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2", { waitUntil: "load" })
    await page.waitForSelector("iframe")
    var framecontent = (page.locator("(//iframe)[1]")).contentFrame()
    await framecontent.locator("//input[@id='email']").fill("xyxz@gmail.com")
    await page.waitForTimeout(2000)
})