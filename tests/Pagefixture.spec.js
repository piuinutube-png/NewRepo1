
import{test} from "@playwright/test"
test("Pagefixture",async({page})=>{
  await page.goto("https://www.amazon.in/")
})