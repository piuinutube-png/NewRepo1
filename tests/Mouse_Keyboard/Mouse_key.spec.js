/////////////////////////click//////////////////////////////
import { test, expect } from "@playwright/test"
test("click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.locator("#btn").click()
    await page.waitForTimeout(2000)  //selected yes message came in app
})
/////////////////////////click with modifier//////////////////////////////
test("clickmodifier", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.locator("#btn").click({ modifiers: ["Shift"] })
    await page.waitForTimeout(2000)  //selected yes message came in app
})
/////////////////////////click with button//////////////////////////////
test("clickbutton", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    await page.locator("#btn_a").click({ button: "right" })
    await page.waitForTimeout(2000)  //selected in app
})
/////////////////////////click with count//////////////////////////////
test("clickcount", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.locator("#btn_a").click({ clickCount: 2 })
    await page.waitForTimeout(2000)  //selected yes message came in app
})
/////////////////////////double click//////////////////////////////
test("doubleclick", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.locator("#btn_a").dblclick()
    await page.waitForTimeout(2000)  //selected yes message came in app
})
/////////////////////////force click//////////////////////////////
test("force click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    await page.locator("#submit").click({ force: true })
    await page.waitForTimeout(2000)  //selected  disabled checkbox in app
})
/////////////////////////dispatch event//////////////////////////////
test("dispatch event", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    await page.locator("#submit").dispatchEvent("click")
    await page.waitForTimeout(2000)  //selected  disabled checkbox in app
})
/////////////////////////mouse over//////////////////////////////
test("hover", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator(".w-5.h-5.mt-5.ml-3.cursor-pointer").hover() //in class, dot removes spaces
    await page.waitForTimeout(2000)  // hidden items visisble in app
})
/////////////////////////move//////////////////////////////
test("move", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.mouse.move(200, 300)
    await page.waitForTimeout(3000)  // move in page
})
/////////////////////////down and up//////////////////////////////
test("down and up", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.locator("#btn").hover()
    await page.mouse.down()
    await page.waitForTimeout(2000)
    await page.mouse.up()
    await page.waitForTimeout(2000)  //selected yes in app
})
//////////////////////wheel for scrolling page vertically//////////////////////////////
test("wheel", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0, 1000)  //vertical scroll down
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0, -1000) //vertical scroll up
    await page.waitForTimeout(2000)
})
//////////////////////wheel for scrolling page horizontally//////////////////////////////
test("wheel1", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(500, 0)  //horizontal scroll right
    await page.waitForTimeout(2000)
    await page.mouse.wheel(-500, 0) //horizontal scroll left
    await page.waitForTimeout(2000)
})
////////////////////scrollintoviewifneeded//////////////////////
test("scrollintoviewifneeded", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator("#continuebtn").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)  //pass
})
//////////////////////////dragdrop via down and up////////////////////////////
test("downup", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.getByText("Mobile Charger").hover()
    await page.mouse.down()
    await page.getByText("Mobile Accessories").hover()
    await page.mouse.up()
    await page.waitForTimeout(2000)  //mobile drag to accessories
})
//////////////////////////dragdrop via dragto////////////////////////////
test("dragto", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    var src = page.getByText("Mobile Charger")
    var targ = page.getByText("Mobile Accessories")
    await src.dragTo(targ)
    await page.waitForTimeout(2000)  //mobile drag to accessories
})
//////////////////////////dragdrop via boundingbox////////////////////////////
test("boundingbox", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.getByText("Mobile Charger").hover()
    await page.mouse.down()
    var box = await page.getByText("Mobile Accessories").boundingBox()
    await page.mouse.move(box.x, box.y)
    await page.mouse.up()
    await page.waitForTimeout(2000)  //mobile drag to accessories
})
///////////////////////inner text and type and down up//////////////////
test("innertext_type", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#name").type("piu")  //type with locator
    await page.locator("#email").click()
    await page.keyboard.type("piu@gmail.com")   //type with keyboard
    await page.locator("#password").click()
    await page.keyboard.insertText("12@fdf")   //innertext with keyboard
    await page.keyboard.down("Space")
    await page.keyboard.up("Space")
    await page.keyboard.up("R")
    await page.keyboard.down("R")
    await page.waitForTimeout(2000)  //pass
})
///////////////////Press///////////////////////////
test("press", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#name").type("piu")  //type with locator
    await page.keyboard.press("Tab")
    await page.locator("#email").click()
    await page.keyboard.type("piu@gmail.com")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    await page.locator("#password").click()
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000)  //pass
})
/////////////////////Arrow down and up//////////////////////
test("arrow", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(2000)
    await page.keyboard.press("ArrowUp")
})
//////////////////radio and checkbox with assertion////////////////////////
test("radiocheck", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@value='wallet']").click()  //click radio wallet
    await page.waitForTimeout(2000)
    await page.locator("//input[@value='office']").check()  //check radio office 
    await page.waitForTimeout(2000)
    await expect(page.locator("//input[@value='wallet']")).toBeChecked()  //true
    await expect(page.locator("//input[@value='office']")).toBeChecked()   //true
    await page.waitForTimeout(2000)
    await page.locator("//input[@value='home']").check() //checked home now
    await page.waitForTimeout(2000)
    //await expect(page.locator("//input[@value='office']")).toBeChecked()  //fail
    await expect(page.locator("//input[@value='office']")).not.toBeChecked()    
    await page.waitForTimeout(2000)
})