//const {test, expect} = require('@playwright/test');
const{username,loginURL,password,inboxURL}=require("../InputData/hellosellsCollabData")
const{EmailIDInputBox,passwordInputBox,loginButton}=require("../Locators/loginPageLocators")

exports.hellosellsLoginPage = class hellosellsLoginPage {

  
  constructor(page) {
    this.page = page;
 
  }
  async login() {
    await this.page.goto(loginURL);
    await this.page.getByTestId(EmailIDInputBox).fill(username);
    await this.page.getByTestId(passwordInputBox).fill(password);
    await this.page.getByTestId(loginButton).click();
    await this.page.waitForURL(inboxURL)
   
  }

  
  
}