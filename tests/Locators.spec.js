
import { test } from "@playwright/test"
test("locators", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student")
    await page.locator("input#password").fill("Password123")
    await page.locator("[class='btn']").click
})

test("locators1", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("//input[@name='username']").fill("student")
    await page.locator("//input[@name='password']").fill("Password123")
    await page.locator("//button[@id='submit']").click
})