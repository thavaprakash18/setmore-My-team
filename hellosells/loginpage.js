//const {test, expect} = require('@playwright/test');
const{username,loginURL,password,inboxURL}=require("./hellosellsCollabData")


exports.hellosellsLoginPage = class hellosellsLoginPage {

  
  constructor(page) {
    this.page = page;
 
  }
  async login() {
    await this.page.goto(loginURL);
    await this.page.getByTestId('email-field').fill(username);
    await this.page.getByTestId('password-field').fill(password);
    await this.page.getByTestId('login-button').click();
    await this.page.waitForURL(inboxURL)
   
  }

  
  
}