import { expect } from '@playwright/test';
const{settingsMyteamUrl,staffFirstName,staffLastName,staffName_NotIntheList,staffEmailID,staffFirstNameInAltCaps,staffFirstNameFirstLetter,staffLastNameFirstLetter,
   staffPhonenumber,staffRole,staffPermissionLevel}=require("../Data/myTeamData")


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
    await this.page.getByTestId('add-staff').click();
}
async enterFullNameInAddStaffPopup() {
   await this.page.getByTestId('fullName-0').fill(this.staffName);
   
}
async enterEmailIdInAddStaffPopup() {
  
 
   await this.page.getByTestId('email-0').fill(this.staffMailID);
 
}
async selectNoAccessPermissionLevelInAddStaffPopup() {
   await this.page.getByPlaceholder('Permission level').click();
   await this.page.locator('div').filter({ hasText: 'Add staff MembersFull NameEnter full name hereEmailPermission levelNo accessUnab' }).nth(2).click();
}
async selectStandardPermissionLevelInAddStaffPopup() {
   await this.page.getByPlaceholder('Permission level').click();
   await this.page.getByRole('listitem').filter({ hasText: /^StandardAble to view and manage their own calendar$/ }).click();
}
async selectEnchancedPermissionLevelInAddStaffPopup() {
   await this.page.getByPlaceholder('Permission level').click();
   await this.page.getByText('Enhanced', { exact: true }).click();
}
async selectAdminPermissionLevelInAddStaffPopup() {
   await this.page.getByPlaceholder('Permission level').click();
   await this.page.getByRole('listitem').filter({ hasText: /^AdminEnhanced permission plus the ability to manage all account settings$/ }).click();
}

async clickAddButton() {
   await this.page.getByRole('button', { name: 'Add', exact: true }).click();
   await this.page.waitForTimeout(10000);
   
}
async checkStaffAddedInMyTeam() {

   const locator =  this.page.locator('xpath=.//div[@class="awd-custom-scrollbar"]');
   await expect(locator).toContainText(new RegExp(this.staffName.trim(), 'i'));
}
async closeAddStaffPopup() {
   await this.page.getByRole('button', { name: 'Cancel' }).click();
}
async enterFullNameWarningMsgShown() {
    const WarningMsg ='Enter full name here';
   const locator =  this.page.locator('xpath=.//div[@class="awd-input-desc"]');
   await expect(locator).toContainText(WarningMsg);
}
async AddButtonDisabled() {
  const disabled= await this.page.getByRole('button', { name: 'Add', exact: true }).isDisabled();
  if(disabled){

  }else{
   throw new Error("add button is enabled");
  }
  
   
}
async EmailAlreadyExistWarningMsgShown() {
   const WarningMsg ='Email already exist';
  const locator =  this.page.locator('xpath=.//div[@class="awd-input-desc clip-exceed-text"]');
  await expect(locator).toContainText(WarningMsg);
}
//My team --- delete staff
async deleteStaff() {
   await this.page.locator('xpath=(.//div[@class="fx-v people-listitem "])[5]').click();
   await this.page.locator('xpath=.//button[@id="ellipsisButton"]').click();
   await this.page.getByTestId('phDetailDeleteContact').click();
   await this.page.locator('xpath=.//button[@class="awd-btn awd-btn-critical awd-btn--sm ml-2"]').click();
}


// My team --- search staff
 async enterStaffFirstNameToSearch() {
   
      await this.page.getByTestId('search-staff').fill(staffFirstName)
   const locator =  this.page.locator('xpath=(.//p[@class="awd-text--sm clip-exceed-text fx-grow"])[1]');
   await expect(locator).toContainText(staffFirstName);
   
   }
   async enterStaffFirstNameInAltCapsToSearch() {
  
      await this.page.getByTestId('search-staff').fill(staffFirstNameInAltCaps)
   const locator =  this.page.locator('xpath=(.//p[@class="awd-text--sm clip-exceed-text fx-grow"])[1]');
   await expect(locator).toContainText(new RegExp(staffFirstNameInAltCaps, 'i'));
   
   }
   async enterStaffFirstNameFirstletterToSearch() {
   
      await this.page.getByTestId('search-staff').fill(staffFirstNameFirstLetter)
   const locator =  this.page.locator('xpath=(.//p[@class="awd-text--sm clip-exceed-text fx-grow"])[1]');
   await expect(locator).toContainText(staffFirstNameFirstLetter);
   
   }
  
   async enterStaffLastNameToSearch() {
   
    await this.page.getByTestId('search-staff').fill(staffLastName)
    const locator = await this.page.locator('xpath=(.//p[@class="awd-text--sm clip-exceed-text fx-grow"])[1]');
    await expect(locator).toContainText(staffLastName)
    } 
   async enterStaffLastNameFirstLetterToSearch() {
   
      await this.page.getByTestId('search-staff').fill(staffLastNameFirstLetter)
   const locator =  this.page.locator('xpath=(.//p[@class="awd-text--sm clip-exceed-text fx-grow"])[1]');
   await expect(locator).toContainText(staffLastNameFirstLetter);
   
   }
   
   async enterStaffName_NotIntheListToSearch() {
   
      await this.page.getByTestId('search-staff').fill(staffName_NotIntheList)
      const locator = await this.page.getByTestId('no-contact-display')
      const msg ="No matching results, try again."
      await expect(locator).toContainText(msg)

   }
   async enterStaffEmailIDToSearch() {
   
         await this.page.getByTestId('search-staff').fill(staffEmailID)
         const locator = await this.page.getByTestId('no-contact-display')
         const msg ="No matching results, try again."
         await expect(locator).toContainText(msg)
   
   }
   async enterStaffPhonenumberToSearch() {
   
      await this.page.getByTestId('search-staff').fill(staffPhonenumber)
      const locator = await this.page.getByTestId('no-contact-display')
      const msg ="No matching results, try again."
      await expect(locator).toContainText(msg)
   }  
   async enterStaffRoleToSearch() {
   
      await this.page.getByTestId('search-staff').fill(staffRole)
      const locator = await this.page.getByTestId('no-contact-display')
      const msg ="No matching results, try again."
      await expect(locator).toContainText(msg)
   }
   async enterStaffPermissionToSearch() {
   
      await this.page.getByTestId('search-staff').fill(staffPermissionLevel)
      const locator = await this.page.getByTestId('no-contact-display')
      const msg ="No matching results, try again."
      await expect(locator).toContainText(msg)
   }
  
   

  
  
}