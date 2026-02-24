
import { test, expect } from "@playwright/test"
/////////////////////single drop/////////////////////////////////////////////////
test("singledrop", {tag:"@smoke"}, async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator("select[id='select3']").selectOption({ value: "India" }) //india
    await page.waitForTimeout(2000)
    await page.locator("select[id='select3']").selectOption({ label: "United Kingdom" })//uk
    await page.waitForTimeout(2000)
    await page.locator("select[id='select3']").selectOption({ index: 5 })//germany
    await page.waitForTimeout(2000)
    await page.locator("select[id='select3']").selectOption("India")//india
    await page.waitForTimeout(2000)
})
///////////////////////////multi select///////////////////////////////
test("multidrop @smoke", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator("select[id='select-multiple-native']").selectOption([{ value: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", value: "Mens Cotton Jacket" }]) //both
    await page.waitForTimeout(2000)
})
///////////////////////custom select direct////////////////////////////////////
test("customdrop", async ({ page }) => {
   await page.goto("https://www.amazon.in/", { waitUntil: "load" })
    await page.locator("#twotabsearchtextbox").fill("shoes")
    await page.locator("//div[@class='two-pane-results-container']").first().waitFor()
     await page.locator("//div[@class='two-pane-results-container']").click({force:true})
    await page.waitForTimeout(5000)
    await page.locator("//span[@class='a-dropdown-container']").click({force:true})
    await page.locator("//a[@class='a-dropdown-link']").first().click({force:true})
    await page.waitForTimeout(5000)
    var drop = await page.locator("//span[@class='a-dropdown-prompt']").textContent()
    console.log(drop); //Price: Low to High
})
/////////////////////custom select with option////////////////////////////////////
test("customdrop2",async ({ page }) => {
     await page.goto("https://www.amazon.in/", { waitUntil: "load" })
    await page.locator("#twotabsearchtextbox").fill("shoes")
    await page.locator("//div[@class='two-pane-results-container']").first().waitFor()
     await page.locator("//div[@class='two-pane-results-container']").click({force:true})
    await page.waitForTimeout(5000)
    await page.locator("//span[@class='a-dropdown-container']").click({force:true})
    await page.locator("//a[text()='Price: High to Low']").click({force:true})
    await page.waitForTimeout(5000)
    var drop = await page.locator("//span[@class='a-dropdown-prompt']").textContent()
    console.log(drop); //Price: High to Low
})
/////////////////////custom select with all and textcontent////////////////////////////////////
test("customdrop3",{tag:['@smoke','@regression'],} , async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0", { waitUntil: "load" })
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='select3']").first().waitFor()
    var addresses = await page.locator("//select[@id='select3']").all()
    for (var values of addresses) {
        var text = await values.textContent()
        if (text.includes('India')) {
            //await values.selectOption({ value: "India" })
            await values.click() //pass
        }
    }
    await page.waitForTimeout(2000)
    var ans = await page.locator("//select[@id='select3']").inputValue()
    console.log(ans); //india 
})
////////////////////////Atosuggestions with all and text content with waitfor first///////////////////////////////
test("autosuggestion1", async ({ page }) => {
    await page.goto("https://www.amazon.in/", { waitUntil: "load" })
    await page.locator("#twotabsearchtextbox").fill("shoes")
    await page.locator("//div[@role='rowgroup']").first().waitFor()
    var addressloc = await page.locator("//div[@role='rowgroup']").all()
    for (var values of addressloc) {
        var textloc = await values.textContent()
        if (textloc.includes("for men sports")) {
            await values.click()  //pass
            break
        }
    }
})
////////////////////////Atosuggestions with all and text content with waitfor first///////////////////////////////
test("autosuggestion3", async ({ page }) => {
    await page.goto("https://www.amazon.in/", { waitUntil: "load" })
    await page.locator("#twotabsearchtextbox").fill("shoes")
    await page.waitForSelector("(//div[@role='rowgroup'])[1]")
    var addressloc = await page.locator("//div[@role='rowgroup']").all()
    for (var values of addressloc) {
        var textloc = await values.textContent()
        if (textloc.includes("for men sports")) {
            await values.click()  //pass
            break
        }
    }
})
////////////autosuggestions with arrowdown///////////////////////////////
test("autosuggestion2", async ({ page }) => {
    await page.goto("https://www.amazon.in/", { waitUntil: "load" })
    await page.locator("#twotabsearchtextbox").fill("shoes")
    await page.locator("//div[@role='rowgroup']").first().waitFor()
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)
})