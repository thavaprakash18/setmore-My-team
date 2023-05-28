const{username,loginURl,password,calendarUrl}=require("../Data/myTeamData")
const{EmailIDInputBox,passwordInputBox,loginButton}=require("../Locators/loginPageLocators")

exports.setmoreLoginPage = class setmoreLoginPage {
  constructor(page) {
    this.page = page;
  }
  async login() {
    await this.page.goto(loginURl);
    await this.page.locator(EmailIDInputBox).fill(username);
    await this.page.locator(passwordInputBox).fill(password);
    await this.page.locator(loginButton).click();
    await this.page.waitForURL(calendarUrl)
  }
}
