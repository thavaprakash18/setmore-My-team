const{settingsURL,collabName}=require("./hellosellsCollabData")


exports.hellosellsSettingsPage = class hellosellsSettingsPage {

  
  constructor(page) {
    this.page = page;
 
  }
  async gotoSettings() {
   
      await this.page.goto(settingsURL);
  }
  async clickMyTeam() {
   
      await this.page.getByTestId('my-team-nav').click();
   }
   async clickTeam() {
   
      await this.page.getByTestId('teams-directory').click();
   }
   async clickAddTeam() {
   
      await this.page.getByTestId('addteam-button').click();
   }
   async enterTeamName() {
   
      await this.page.getByPlaceholder('Team name').fill(collabName);
   }
   async addFirst20StaffsInTeam() {
   
      await this.page.getByTestId('add-member').click();
      await this.page.getByTestId('search-input').click();
      for (const li of await this.page.locator('xpath=.//li[@class="ignore-click has-avatar"]').all()){
      await li.click();
     }
     
   }
   async clickSaveButton() {
   
      await this.page.getByRole('button', { name: 'Save' }).click();
   }

  
  
}