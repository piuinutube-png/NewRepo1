
import{test}from "@playwright/test"
test("Browsernamefixture",async({browserName,browser})=>{
    console.log(browserName);
  var context = await browser.newContext()
  var page= await context.newPage()
  await page.goto("https://www.amazon.in/")
})