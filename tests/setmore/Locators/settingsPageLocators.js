const settingsPageLocators = {

    //Add staff Members popup locators
    AddStaffButton : 'add-staff',
    fullNameField : 'fullName-0', 
    EmailIDField : 'email-0',
    permissionLevelDropdown : 'xpath=(.//input[@placeholder="Permission level"])',
    noAccessPermission : 'xpath=(.//li[@data-permission="No access"])',
    standardAccessPermission:'xpath=(.//li[@data-permission="Standard"])',
    enhancedAccessPermission:'xpath=(.//li[@data-permission="Enhanced"])',
    adminAccessPermission:'xpath=(.//li[@data-permission="Admin"])',
    addButton:'xpath=(.//button[@id="add-staff"])',
    cancelButton : 'xpath=(.//span[@id="cancel"])',
    //Add staff Members popup warning messages
    enterFullNameWarning : 'xpath=.//div[@class="awd-input-desc"]',
    EmailAlreadyExistswarning :'xpath=.//div[@class="awd-input-desc clip-exceed-text"]',
    //My team list
    staffList : 'xpath=.//div[@class="awd-custom-scrollbar"]',
    staffSelect :'xpath=(.//div[@class="fx-v people-listitem "])[5]',
    staffSearch: 'search-staff',
    staffSearchResult: 'xpath=(.//p[@class="awd-text--sm clip-exceed-text fx-grow"])[1]',
    staffSearchNoResult :'no-contact-display',

    //staff profile
    staffProfileThreeDotButton :'xpath=.//button[@id="ellipsisButton"]',
    staffProfileDelete:'phDetailDeleteContact',
    staffProfileDeleteConformation:'xpath=.//button[@class="awd-btn awd-btn-critical awd-btn--sm ml-2"]'
}       
exports.AddStaffButton=settingsPageLocators.AddStaffButton;
exports.fullNameField=settingsPageLocators.fullNameField;
exports.EmailIDField=settingsPageLocators.EmailIDField;
exports.permissionLevelDropdown=settingsPageLocators.permissionLevelDropdown;
exports.noAccessPermission=settingsPageLocators.noAccessPermission;
exports.standardAccessPermission=settingsPageLocators.standardAccessPermission;
exports.enhancedAccessPermission=settingsPageLocators.enhancedAccessPermission;
exports.adminAccessPermission=settingsPageLocators.adminAccessPermission;
exports.addButton=settingsPageLocators.addButton;
exports.cancelButton=settingsPageLocators.cancelButton;

exports.enterFullNameWarning=settingsPageLocators.enterFullNameWarning;
exports.EmailAlreadyExistswarning=settingsPageLocators.EmailAlreadyExistswarning;

exports.staffList=settingsPageLocators.staffList;
exports.staffSelect=settingsPageLocators.staffSelect;
exports.staffSearch=settingsPageLocators.staffSearch;
exports.staffSearchResult=settingsPageLocators.staffSearchResult;
exports.staffSearchNoResult=settingsPageLocators.staffSearchNoResult;

exports.staffProfileThreeDotButton=settingsPageLocators.staffProfileThreeDotButton;
exports.staffProfileDelete=settingsPageLocators.staffProfileDelete;
exports.staffProfileDeleteConformation=settingsPageLocators.staffProfileDeleteConformation;
