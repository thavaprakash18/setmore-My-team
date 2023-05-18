const {test, expect} = require('@playwright/test');
const{hellosellsSettingsPage}=require('./settingsPage')
const{hellosellsLoginPage}=require('./loginpage')


test.beforeEach(async ({page}) =>{ 
 const loginPage =new hellosellsLoginPage(page)
 await loginPage.login();
});



test('hellosells collab creation', async({page})=>{

const settingsPage = new hellosellsSettingsPage(page)
await settingsPage.gotoSettings();
await settingsPage.clickMyTeam();
await settingsPage.clickTeam();
await settingsPage.clickAddTeam();
await settingsPage.enterTeamName();
await settingsPage.addFirst20StaffsInTeam();
await settingsPage.clickSaveButton();


})