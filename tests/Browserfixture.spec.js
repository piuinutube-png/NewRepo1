
import{test}from "@playwright/test"
test("Browserfixture",async({browser})=>{
     var context= await browser.newContext()
    var page= await context.newPage()
   await page.goto("https://www.amazon.in/")
})