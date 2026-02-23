///////////////Notifications by default/////////////////////////
import { test, expect } from "@playwright/test"
test("defaultnotify", async ({ browser }) => {
    var context = await browser.newContext()
    // var context = await browser.newContext({ permissions: [] }) //empty means default
    var page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator("//button[text()='Notification']").click()
    var result = await page.evaluate(() => {
        return Notification.requestPermission()
    })
    console.log((result)); //denied
})
///////////////Notifications by userinteraction/////////////////////////
test.only("usernotify", async ({ browser }) => {
    var context = await browser.newContext({ permissions: ["notifications"] }) //if microphone,camera...not here and we are writing then it will be denied
    var page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator("//button[text()='Notification']").click()
    var result = await page.evaluate(() => {
        return Notification.requestPermission()
    })
    console.log((result)); //granted
    await context.clearPermissions()
    var result1 = await page.evaluate(() => {
        return Notification.requestPermission()
    })
    console.log((result1)); //denied
})
///////////////Notifications by userinteraction(globally)/////////////////////////
test("usernotifyglob", async ({ browser }) => {
    var context = await browser.newContext() //global in config
    var page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator("//button[text()='Notification']").click()
    var result = await page.evaluate(() => {
        return Notification.requestPermission()
    })
    console.log((result)); //granted
})
