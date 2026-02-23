import { test, expect } from "@playwright/test"
///////////////////waitfortext/////////////////////////////////////
test("waitfortext", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("input[id='twotabsearchtextbox']").fill("shoes")
    await page.locator("div[role='rowgroup']", { hasText: "for men casual" }).waitFor()
    var autosugg1 = await page.locator("div[role='rowgroup']").allTextContents()
    console.log(autosugg1);
})
//////////////////////////waitfortimeout/////////////////////////////////
test("waitfortimeout", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("input[id='twotabsearchtextbox']").fill("shoes")
    await page.locator("div[role='rowgroup']").waitFor({ timeout: 3000, state: "visible" })
    var autosugg = await page.locator("div[role='rowgroup']").allTextContents()
    console.log(autosugg);  //[with answers]
})
//////////////////////////waitforselector/////////////////////////////////
test("waitforselector", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("input[id='twotabsearchtextbox']").fill("shoes")
    await page.waitForSelector("div[role='rowgroup']", { state: "visible", timeout: 5000 })
    var autosugg2 = await page.locator("div[role='rowgroup']").allTextContents()
    console.log(autosugg2);  //[with answers]
})
//////////////////////////waitforelementstate/////////////////////////////////
test("waitforelementstate", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("input[id='twotabsearchtextbox']").fill("shoes")
    await page.locator("div[role='rowgroup']").waitFor({ state: "visible" })
    var autosugg2 = await page.locator("div[role='rowgroup']").allTextContents()
    console.log(autosugg2);  //[with answers]
})
