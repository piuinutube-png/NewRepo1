
import { test } from "@playwright/test";
test("anno1", async ({ page }) => {
    console.log("test1");
})
// /////////////////////////////////////////////////
test("slowanno9", async () => {
    test.slow()
    console.log("test9"); // slow
})
// /////////////////////////////////////////////////////////////////////////
test.skip("skipanno2", async () => {
    console.log("test2");                      //skipped
})
// ///////////////////////////////////////////////////////////////////
test("skipanno3", async ({ browserName }) => {
    test.skip(browserName === "chromium")    //conditional skip
    console.log("test3");
})
//////////////////////////////////////////////////////////////////
test("onlyanno4", async () => {
    console.log("test4");                //only this will execute
})
///////////////////////////////////////////////////////////////////
test.fail("failanno5", async () => {
    console.log("test5");   // Expected to fail, but passed
})
///////////////////////////////////////////////////////////////
test.fail("failanno6", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    console.log("test6");  // Expected to fail, but passed
})
////////////////////////////////////////////////////////////
test.fail("failanno7", async ({ page }) => {
    await page.goto("hghufuyf")     // passed as written fail and inside also failed
})
// ///////////////////////////////////////////////////////////////
test.fixme("fixmeanno8", async () => {
    console.log("test8");       // skip
})
// //////////////////////////////////////////////////////
test.describe("descanno", async () => {
    test("validcred", async () => {
        console.log("validcred");
    })
    test("invalidcred", async () => {
        console.log("invalidcred");
    })
})
// ///////////////////////////////////////////////////////////////////////
test.describe("descanno1", async () => {
    test("validcred1", async () => {
        test.setTimeout(5000)
        console.log("validcred1");
    })
    test("invalidcred1", async () => {
        console.log("invalidcred1");
    })
})
///////////////////////////////////////////////////
