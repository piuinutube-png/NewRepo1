import { test, expect } from "@playwright/test"
import Login from "./Login.page.js"
import Home from "./Home.page.js"
import TroubleTickets from "./TroubleTickets.page.js"
import Createtroubleticket from "./Createtroubleticket.page.js"
import TestData from "../TestData/Crm_ts1_data.json"
test("CreateTroubleTicketAndSs", async ({ page }) => {
    test.setTimeout(60000)  //default 30secs exceeded so
    var l = new Login(page)
    var h = new Home(page)
    var tt = new TroubleTickets(page)
    var ctt = new Createtroubleticket(page)
    var url = TestData.url
    var un = TestData.un
    var pwd = TestData.pwd
    var title1 = TestData.title1
    await page.goto(url)
    await l.un.fill(un)
    await l.pwd.fill(pwd)
    await l.loginbtn.click()
    await h.troubleticketlink.click()
    await tt.createtroubleicon.click()
    await ctt.titletf.fill(title1)
    await ctt.radiouser.click()
    await ctt.priority.selectOption({ value: "High" })
    await ctt.save.click() //pass
    await page.waitForTimeout(3000)  //wait for ss
    var time = Date.now()
    await page.screenshot({ path: `crm_ss/crm_ts1_${time}.png` }) //folder and file it will create
})