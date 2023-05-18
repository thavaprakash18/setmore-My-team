const{username,loginURl,password,calendarUrl}=require("../Data/myTeamData")


exports.setmoreLoginPage = class setmoreLoginPage {

  
  constructor(page) {
    this.page = page;
 
  }

  async login() {
    await this.page.goto(loginURl);
    await this.page.getByRole('textbox', { name: 'Email' }).fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('link', { name: 'Login', exact: true }).click();
    await this.page.waitForURL(calendarUrl)
   
  }

  
  
}