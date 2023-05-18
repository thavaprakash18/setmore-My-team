const {test, expect} = require('@playwright/test');
const{setmoreSettingsPage}=require("../Pages/settingsPage")
const{setmoreLoginPage}=require('../Pages/loginPage')

test.beforeEach(async ({page}) =>{ 
    const loginPage =new setmoreLoginPage(page)
    await loginPage.login();
});

test('add staff with Enchanced permission', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"john","hapi0001@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectEnchancedPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
}) 
test('add staff with No Access permission', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"kevin","hapi0002@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectNoAccessPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
})
test('add staff with Standard permission', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"roger","hapi7797@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectStandardPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
    
})
test('add staff with Admin permission', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"terro","hapi04@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
}) 
test('add staff popup close', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"amer","hapi05@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.closeAddStaffPopup();
}) 
test('add staff without name', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"","hapi005@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.enterFullNameWarningMsgShown()
}) 
test('add staff with invalid email ID', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"terro","hapi04@@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.AddButtonDisabled();

}) 
test('add No Access permission staff without email ID', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"terro","")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.selectNoAccessPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
}) 
test('add Standard permission staff without email ID', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"terro","")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.selectStandardPermissionLevelInAddStaffPopup();
    await settingsPage.AddButtonDisabled();
    
}) 
test('add Enhanced permission staff without email ID', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"terro","")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.selectEnchancedPermissionLevelInAddStaffPopup();
    await settingsPage.AddButtonDisabled();
    
})
test('add Admin permission staff without email ID', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"terro","")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.AddButtonDisabled();
    
})  
test('add staff when staff name already in the my team list', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"thavaprakash","hapi011@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
})
test('add staff when staff name contains only special characters', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"!@#$%^^^","hapi013@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
   
}) 
test('add staff when staff name contains only numbers', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"1234567","hapi014@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
})   
test('add staff when staff name starts with empty spaces', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"   spaceX","hapi0150@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
})   
test('add staff with already existing Email ID', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"kevin","ape1999@mailinator.com")
    await settingsPage.gotoSettingsMyteam();
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.EmailAlreadyExistWarningMsgShown();
    
})   
test('delete the existing staff and add a new staff', async({page})=>{
    const settingsPage = new setmoreSettingsPage(page,"kevin","ape19900@mailinator.com")
    
    await settingsPage.gotoSettingsMyteam();
    await settingsPage. deleteStaff();git 
    await settingsPage.clickAddStaffButton();
    await settingsPage.enterFullNameInAddStaffPopup();
    await settingsPage.enterEmailIdInAddStaffPopup();
    await settingsPage.selectAdminPermissionLevelInAddStaffPopup();
    await settingsPage.clickAddButton();
    await settingsPage.checkStaffAddedInMyTeam();
    
})   