const{settingsURL,collabName}=require("../InputData/hellosellsCollabData")
const{myTeamOption,teamListOption,addTeamButton,teamNameInputField,addMemberOption,
addMemberSearchField,addMemberButton,TeamSaveButton}=require("../Locators/settingsPageLocators")

exports.hellosellsSettingsPage = class hellosellsSettingsPage {

  
  constructor(page) {
    this.page = page;
 
  }
  async gotoSettings() {
   
      await this.page.goto(settingsURL);
  }
  async clickMyTeam() {
   
      await this.page.getByTestId(myTeamOption).click();
   }
   async clickTeam() {
   
      await this.page.getByTestId(teamListOption).click();
   }

   async clickAddTeam() {
   
      await this.page.getByTestId(addTeamButton).click();
   }
   async enterTeamName() {
      await this.page.getByPlaceholder(teamNameInputField).fill(collabName);
   }
   async addFirst20StaffsInTeam() {
   
      await this.page.getByTestId(addMemberOption).click();
      await this.page.getByTestId(addMemberSearchField).click();
      for (const li of await this.page.locator(addMemberButton).all()){
      await li.click();
     }
     
   }
   async clickSaveButton() {
      
      await this.page.locator(TeamSaveButton).click();
      
   }

  
  
}