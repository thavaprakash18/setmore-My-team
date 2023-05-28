const {test, expect} = require('@playwright/test');
const{setmoreSettingsPage}=require("../Pages/settingsPage")
const{setmoreLoginPage}=require('../Pages/loginPage')

test.beforeEach(async ({page}) =>{ 
    const loginPage =new setmoreLoginPage(page)
    await loginPage.login();
});
test('staff search by first name', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffFirstNameToSearch();
})
test('staff search by first name in alternative caps', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffFirstNameInAltCapsToSearch();
})
test('staff search by first name first letter', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffFirstNameFirstletterToSearch();
})
test('staff search by last name', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffLastNameToSearch();
})
test('staff search by last name first letter', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffLastNameFirstLetterToSearch()
})
test('staff search who not in the list', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffName_NotIntheListToSearch();
}) 
test('staff search by EmailID', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffEmailIDToSearch();
})
test('staff search by PhoneNumber', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffPhonenumberToSearch();
}) 
test('staff search by Role', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffRoleToSearch();
})  
test('staff search by Permission level', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page)
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.enterStaffPermissionToSearch();
}) 
  
