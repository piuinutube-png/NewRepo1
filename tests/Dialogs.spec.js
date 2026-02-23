/////////////default dismiss dialogs///////////////////////
import { test, expect } from "@playwright/test"
import { text } from "node:stream/consumers"
test("defcandialog", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button[text()='Simple Alert']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Confirmation Alert']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Prompt Alert']").click()
    await page.waitForTimeout(2000)
    //Assertion
    await expect(page.locator("#demo")).toContainText("cancel")
})
/////////////////accept or dismiss dialog using script(page.on)//////////////////////
test("pageon", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog", async (dialog) => {
        if (dialog.type() == "alert") {
            // await dialog.accept()
            await dialog.dismiss()
        }
        else if (dialog.type() == "confirm") {
            // await dialog.accept()
            await dialog.dismiss()
        }
        else if (dialog.type() == "prompt") {
            // await dialog.accept("piu")
            await dialog.dismiss()
        }
    })
    var text1 = "piu"
    await page.locator("//button[text()='Simple Alert']").click()//for simple alert no msg so no assertion
    await page.locator("//button[text()='Confirmation Alert']").click()
    await expect(page.locator("#demo")).toContainText("Cancel")  //pass for dismiss
    //await expect(page.locator("#demo")).toContainText("OK")  //pass for accept(assertion)
    await page.locator("//button[text()='Prompt Alert']").click()
    await expect(page.locator("#demo")).toContainText("cancelled")  //pass for dismiss
    //await expect(page.locator("#demo")).toHaveText(`Hello ${text1}! How are you today?`) //pass for accept(assertion)
})
/////////////////accept or dismiss dialog using script(page.once)//////////////////////
test.only("pageonce", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.once("dialog", async (dialog) => {
        if (dialog.type() == "alert") {
            await dialog.accept()
            // await dialog.dismiss()
        }
        if (dialog.type() == "confirm") {
            await dialog.accept()
            // await dialog.dismiss()
        }
        else if (dialog.type() == "prompt") {
            await dialog.accept("piu")
            //await dialog.dismiss()
        }
    })
    var text1 = "piu"
    await page.locator("//button[text()='Simple Alert']").click()//for simple alert no msg so no assertion
    await page.locator("//button[text()='Confirmation Alert']").click()
    //await expect(page.locator("#demo")).toContainText("Cancel")  //pass for dismiss as by default pw  will cancel all alerts after first one(pageonce)
    await expect(page.locator("#demo")).toContainText("OK")  //fail for accept(assertion) as bydefaul pw will cancel all alerts after first one(pageonce)
    await page.locator("//button[text()='Prompt Alert']").click()
    //await expect(page.locator("#demo")).toContainText("cancelled")  //pass for dismiss  as bydefaul pw will cancel all alerts after first one(pageonce)
    await expect(page.locator("#demo")).toHaveText(`Hello ${text1}! How are you today?`) //fail for accept(assertion) as bydefaul pw will cancel all alerts after first one(pageonce)
})
