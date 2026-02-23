
import { test } from "@playwright/test"
////////////////////////fill/input vaalue/type/click//////////////////////////////////////
test("WeControls", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#name").fill("piu")
    await page.locator("#email").type("piu@gmail.com")
    var name = await page.locator("#name").inputValue()
    console.log(name);
    await page.locator("#password").fill("piu123@")
    await page.locator("//button[text()='Register']").click()
    await page.pause(6000)   //will pause and then close the browser if time mentioned or not mentioned and await will open debug mode in both situations
})
/////////////////innertext//////////////////////////////////////////////////
test("WeControls1", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    var a = await page.locator("//section[@class='poppins text-[14px]'and text()='Radio Button' ]").innerText()
    console.log(a);   //Radio Button
})
/////////////////textcontent with single element//////////////////////////////////////////////////
test("WeControls2", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    var b = await page.locator("//section[@class='poppins text-[14px]'and text()='Radio Button' ]").textContent()
    console.log(b);  //Radio Button
})
/////////////////textcontent with multiple element//////////////////////////////////////////////////
test("WeControls3", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    var c = await page.locator("//section[@class='poppins text-[14px]']").textContent()
    console.log(c);  //failure as it cant fetch multiple texts
})
////////////////////alltextcontent///////////////////////////////////////////////////
test("WeControls4", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    var d = await page.locator("//section[@class='poppins text-[14px]']").allTextContents()
    console.log(d);  // []
})
////////////////////getattribute///////////////////////////////////////////////////
test("WeControls5", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    var e = await page.locator("//input[@id='male']").getAttribute('value')
    console.log(e);  // male
})
////////////////////all(no autowaits)///////////////////////////////////////////////////
test("WeControls6", async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    await page.locator("//div[@class='css-175oi2r r-13awgt0 r-eqz5dr']").first().waitFor()
    var f = await page.locator("//div[@class='css-175oi2r r-13awgt0 r-eqz5dr']").all()
    console.log(f);
    //  [locator('//div[@class=\'css-175oi2r r-13awgt0 r-eqz5dr\']').first(),
    //   locator('//div[@class=\'css-175oi2r r-13awgt0 r-eqz5dr\']').nth(1),
    //   locator('//div[@class=\'css-175oi2r r-13awgt0 r-eqz5dr\']').nth(2)]
})
////////////////////first///////////////////////////////////////////////////
test("WeControls7", async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    var g = await page.locator("//div[@class='css-175oi2r r-13awgt0 r-eqz5dr']").first()
    console.log(g); //locator('//div[@class=\'css-175oi2r r-13awgt0 r-eqz5dr\']').first()
})
/////////////////////////////////n(0)///////////////////////////////////////////////////
test("WeControls8", async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    var h = await page.locator("//div[@class='css-175oi2r r-13awgt0 r-eqz5dr']").nth(0)
    console.log(h); //locator('//div[@class=\'css-175oi2r r-13awgt0 r-eqz5dr\']').first()
})
/////////////////////////////////isvisible for first element//////////////////////////////////////////////
test("WeControls9", async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    await page.locator("//a[@title='Cart']").first().waitFor()
    var i = await page.locator("//a[@title='Cart']").first().isVisible()
    console.log(i);  //true
})
/////////////////////////////////isenabled(no auto waits so use if required)//////////////////////////////////////////////
test("WeControls10", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    var j = await page.locator("#male").isEnabled()
    console.log(j);  //true
})
/////////////////////////////////iseditable for textfields(no auto waits so failed)//////////////////////////////////////////////
test("WeControls11", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    var k = await page.locator("#name").isEditable()
    console.log(k);  //fail without autowaits
})
/////////////////////////////////iseditable for textfields(auto waits required)//////////////////////////////////////////////
test("WeControls12", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#name").waitFor({ state: "visible", timeout: 30000 })
    var l = await page.locator("#name").isEditable()
    console.log(l);  //true
})
/////////////////////////////////ischecked for radio,checkbox(auto waits required)//////////////////////////////////////////////
test("WeControls13", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("#domain_a").waitFor()
    var m = await page.locator("#domain_a").isChecked()
    console.log(m);  //false as nothing is checked.
})

