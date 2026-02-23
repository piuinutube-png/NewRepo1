
////////////////////getbylabel///////////////////////////////
import { test } from "@playwright/test"
test("getby1", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByLabel("Email:", { exact: false }).fill("abc@gmail.com")
})
////////////////getbyplaceholder///////////////////////////
test("getby2", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByPlaceholder("Search store", { exact: true }).fill("computers")
})
//////////////////getbytext////////////////////////////////////////
test("getby3", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByText("Electronics").first().click()
})
//////////////////////getbyalttext//////////////////////////////////
test("getby4", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByAltText("nopCommerce demo store", { exact: true }).click()
})
//////////////////////getbytitle//////////////////////////////////////
test("getby5", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/electronics")
    await page.getByTitle("Show products in category Camera & photo").first().click()
})
///////////////////////getbyrole//////////////////////////////////
test("getby6", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/electronics")
    await page.getByRole("link", { name: 'Camera & photo' }).first().click()
})
//////////////////////getbytestid/////////////////////////////////////
test("getby7", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("login-button").click()
})