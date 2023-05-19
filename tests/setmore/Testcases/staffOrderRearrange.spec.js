const {test, expect} = require('@playwright/test');
test('test', async ({ page }) => {
await page.goto('https://go.staging.setmore.com');
  await page.getByRole('textbox', { name: 'Email' }).fill('ape1999@mailinator.com');

   

  await page.getByPlaceholder('Password').fill('test123123');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  
  await page.waitForURL('https://go.staging.setmore.com/calendar');
  await page.goto('https://go.staging.setmore.com/settings/my-team/all');
  //await page.locator('xpath=(.//div[contains(@class,"fx-v people-listitem ")])[1]').dragTo(page.locator('xpath=(.//div[contains(@class,"fx-v people-listitem ")])[4]'));
  
 // await page.locator('xpath=(.//div[contains(@class,"fx-v people-listitem ")])[1]').hover();
//await page.mouse.down();
//await page.locator('xpath=(.//div[contains(@class,"fx-v people-listitem ")])[3]').hover();
//await page.mouse.up();
await page.waitForTimeout(10000);



})