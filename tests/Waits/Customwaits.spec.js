import { test, expect } from "@playwright/test"
test("customwaits", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("hp laptops")
    await page.waitForFunction(() => {
        var elements1 = document.querySelectorAll("div[role='row']")  //only css selector
        return elements1.length > 2
    })
    var sugges = await page.locator("//div[@role='rowgroup']").allTextContents()
    console.log(sugges);
})
