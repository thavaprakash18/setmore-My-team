const settingsPageLocators = {

   myTeamOption : 'my-team-nav',

   //Team
   teamListOption : 'teams-directory',
   addTeamButton : 'addteam-button',
   teamNameInputField :'Team name',
   addMemberOption : 'add-member',
   addMemberSearchField : 'search-input',
   addMemberButton : 'xpath=.//li[@class="ignore-click has-avatar"]',
   TeamSaveButton : 'xpath=.//button[text()="Save"]'

}       


exports.myTeamOption=settingsPageLocators.myTeamOption;

exports.teamListOption=settingsPageLocators.teamListOption;
exports.addTeamButton=settingsPageLocators.addTeamButton;
exports.teamNameInputField=settingsPageLocators.teamNameInputField;
exports.addMemberOption=settingsPageLocators.addMemberOption;
exports.addMemberSearchField=settingsPageLocators.addMemberSearchField;
exports.addMemberButton=settingsPageLocators.addMemberButton;
exports.TeamSaveButton=settingsPageLocators.TeamSaveButton;
