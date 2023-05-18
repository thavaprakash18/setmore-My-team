const {test, expect} = require('@playwright/test');
const{username,loginURL,password,settingsURL,inboxURL,collabName}=require("../hellosellsCollabData")

test.beforeEach(async ({page}) =>{ 
  await page.goto(loginURL)
  await page.getByTestId('email-field').fill(username);
  await page.getByTestId('password-field').fill(password);
  await page.getByTestId('login-button').click();
  await page.waitForURL(inboxURL)
  await page.goto(settingsURL);
});



test('hellosells collab creation', async({page})=>{

  await page.getByTestId('my-team-nav').click();
  await page.getByTestId('teams-directory').click();
  await page.getByTestId('addteam-button').click();
  await page.getByPlaceholder('Team name').fill(collabName);
  await page.getByTestId('add-member').click();
  
  await page.getByTestId('search-input').click();

   
   for (const li of await page.locator('xpath=.//li[@class="ignore-click has-avatar"]').all()){
    await li.click();
   }
   
  


  await page.getByRole('button', { name: 'Save' }).click();
 
})