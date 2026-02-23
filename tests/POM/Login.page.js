class Login {
    constructor(page) {
        this.un = page.locator("//input[@name='user_name']")
        this.pwd = page.locator("//input[@name='user_password']")
        this.loginbtn = page.locator("//input[@id='submitButton']")
    }
}
export default Login