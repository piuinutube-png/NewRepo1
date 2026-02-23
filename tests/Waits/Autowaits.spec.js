import { test } from "@playwright/test"
//test.use({ actionTimeout: 3000 }) //global timeout for file
test("autowaits", async ({ page }) => {
   // page.setDefaultTimeout(3000) //page timeout no awaits here
    await page.goto("https://www.amazon.in/")
    await page.locator("a[id='nav-cart']").click({ timeout: 3000 }) //element timeout
})
