import { expect } from '@playwright/test';
const{settingsMyteamUrl,staffFirstName,staffLastName,staffName_NotIntheList,staffEmailID,staffFirstNameInAltCaps,staffFirstNameFirstLetter,staffLastNameFirstLetter,
   staffPhonenumber,staffRole,staffPermissionLevel}=require("../Data/myTeamData")

const{AddStaffButton,fullNameField,EmailIDField,permissionLevelDropdown,noAccessPermission,standardAccessPermission,
enhancedAccessPermission,adminAccessPermission,addButton,cancelButton,staffList,enterFullNameWarning,
EmailAlreadyExistswarning,staffSelect,staffProfileThreeDotButton,staffProfileDelete,staffProfileDeleteConformation,
staffSearch,staffSearchResult,staffSearchNoResult}=require("../Locators/settingsPageLocators")

exports.setmoreSettingsPage = class setmoreSettingsPage {
constructor(page,staffName,staffMailID) {
    this.page = page;
    this.staffName=staffName;
    this.staffMailID=staffMailID;
  }
//My team --- redirecting URL
async gotoSettingsMyteam() {
   await this.page.goto(settingsMyteamUrl);
}
//My team --- add staff
async clickAddStaffButton() {
    await this.page.getByTestId(AddStaffButton).click();
}
async enterFullNameInAddStaffPopup() {
   await this.page.getByTestId(fullNameField).fill(this.staffName);
}
async enterEmailIdInAddStaffPopup() {
   await this.page.getByTestId(EmailIDField).fill(this.staffMailID);
}
async selectNoAccessPermissionLevelInAddStaffPopup() {
   await this.page.locator(permissionLevelDropdown).click();
   await this.page.locator(noAccessPermission).click();
}
async selectStandardPermissionLevelInAddStaffPopup() {
   await this.page.locator(permissionLevelDropdown).click();
   await this.page.locator(standardAccessPermission).click();
}
async selectEnchancedPermissionLevelInAddStaffPopup() {
   await this.page.locator(permissionLevelDropdown).click();
   await this.page.locator(enhancedAccessPermission).click();
}
async selectAdminPermissionLevelInAddStaffPopup() {
   await this.page.locator(permissionLevelDropdown).click();
   await this.page.locator(adminAccessPermission).click();
}
async clickAddButton() {
   await this.page.locator(addButton).click();
   await this.page.waitForTimeout(10000);
}
async checkStaffAddedInMyTeam() {
    const locator  =this.page.locator(staffList);
    await expect(locator).toContainText(new RegExp(this.staffName.trim(), 'i'));
}
async closeAddStaffPopup() {
   await this.page.locator(cancelButton).click();
}
async enterFullNameWarningMsgShown() {
    const WarningMsg ='Enter full name here';
    const locator =  this.page.locator(enterFullNameWarning);
    await expect(locator).toContainText(WarningMsg);
}
async AddButtonDisabled() {
   const disabled= await this.page.locator(addButton).isDisabled();
   if(disabled){}else{
   throw new Error("add button is enabled");
  }}
async EmailAlreadyExistWarningMsgShown() {
   const WarningMsg ='Email already exist';
   const locator =  this.page.locator(EmailAlreadyExistswarning);
   await expect(locator).toContainText(WarningMsg);
}
//My team --- delete staff
async deleteStaff() {
   await this.page.locator(staffSelect).click();
   await this.page.locator(staffProfileThreeDotButton).click();
   await this.page.getByTestId(staffProfileDelete).click();
   await this.page.locator(staffProfileDeleteConformation).click();
}
// My team --- search staff
async enterStaffFirstNameToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffFirstName)
   const locator =  this.page.locator(staffSearchResult);
   await expect(locator).toContainText(staffFirstName);
}
async enterStaffFirstNameInAltCapsToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffFirstNameInAltCaps)
   const locator =  this.page.locator(staffSearchResult);
   await expect(locator).toContainText(new RegExp(staffFirstNameInAltCaps, 'i'));
}
async enterStaffFirstNameFirstletterToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffFirstNameFirstLetter)
   const locator =  this.page.locator(staffSearchResult);
   await expect(locator).toContainText(staffFirstNameFirstLetter);
}
async enterStaffLastNameToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffLastName)
   const locator =  this.page.locator(staffSearchResult);
   await expect(locator).toContainText(staffLastName);
} 
async enterStaffLastNameFirstLetterToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffLastNameFirstLetter)
   const locator =  this.page.locator(staffSearchResult);
   await expect(locator).toContainText(staffLastNameFirstLetter);
}
async enterStaffName_NotIntheListToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffName_NotIntheList)
   const locator = await this.page.getByTestId(staffSearchNoResult)
   const msg ="No matching results, try again."
   await expect(locator).toContainText(msg)
}
async enterStaffEmailIDToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffEmailID)
   const locator = await this.page.getByTestId(staffSearchNoResult)
   const msg ="No matching results, try again."
   await expect(locator).toContainText(msg)
}
async enterStaffPhonenumberToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffPhonenumber)
   const locator = await this.page.getByTestId(staffSearchNoResult)
   const msg ="No matching results, try again."
   await expect(locator).toContainText(msg)
}  
async enterStaffRoleToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffRole)
   const locator = await this.page.getByTestId(staffSearchNoResult)
   const msg ="No matching results, try again."
   await expect(locator).toContainText(msg)
}
async enterStaffPermissionToSearch() {
   await this.page.getByTestId(staffSearch).fill(staffPermissionLevel)
   const locator = await this.page.getByTestId(staffSearchNoResult)
   const msg ="No matching results, try again."
   await expect(locator).toContainText(msg)
}
}
