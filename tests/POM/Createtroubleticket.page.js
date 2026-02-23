class Creatett {
    constructor(page) {
        this.titletf = page.locator("//textarea[@name='ticket_title']")
        this.radiouser = page.locator("//input[@type='radio' and @value='U']")
        this.radiogroup = page.locator("//input[@type='radio' and @value='T']")
        this.priority = page.locator("//select[@name='ticketpriorities']")
        this.save = page.locator("(//input[@title='Save [Alt+S]'])[2]")
    }
}
export default Creatett