
import { test, expect } from '@playwright/test';
test("hardcoded1", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.waitForTimeout(2000)
    await page.getByText("Username", { exact: true }).fill("student")
    await page.waitForTimeout(2000)
    await page.getByText("Password", { exact: true }).fill("Password123")
    await page.waitForTimeout(2000)
    await page.locator("#submit", { exact: true }).click()
    await page.waitForTimeout(2000)
})

test("hardcoded2", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("input[id='twotabsearchtextbox']").fill("shoes")
    // var autosugg = await page.locator("div[role='rowgroup']").allTextContents() //[]
    await page.waitForTimeout(3000)
    var autosugg1 = await page.locator("div[role='rowgroup']").allTextContents() //[array with options]
    //console.log(autosugg);
    console.log(autosugg1);

})