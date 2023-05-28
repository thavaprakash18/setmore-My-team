const loginPageLocators = {
    EmailIDInputBox : 'xpath=(.//input[@class="email-field"])',
    passwordInputBox : 'xpath=(.//input[@id="password"])',
    loginButton : 'xpath=(.//a[@id="login-now"])'
}       
exports.EmailIDInputBox=loginPageLocators.EmailIDInputBox;
exports.passwordInputBox=loginPageLocators.passwordInputBox;
exports.loginButton=loginPageLocators.loginButton;
