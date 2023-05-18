
const { test, expect } = require('@playwright/test');


test('my team add staff', async ({ page }) => {
  await page.goto('https://my.staging.hellosells.app');
  await page.pause();
  await page.getByTestId('my-team-nav').click();
  await page.getByTestId('teams-directory').click();
  await page.getByTestId('addteam-button').click();
  await page.getByPlaceholder('Team name').fill('spaceX launch 1');
  await page.getByTestId('add-member').click();
  //await page.getByTestId('addteam-button').click();
 // await page.waitForSelector('TestId=search-input')
 /*await page.getByTestId('search-input').fill("sami")
  /await page.pause();
 //  await page.waitForSelector('text=sami')
  // await page.getByTestId('cn-main-nav-presence').getByText('Sami appan').click();
 //  await page.pause(); 
// await page.locator('xpath=.//li[@class="ignore-click has-avatar"]').click();

  

  await page.getByTestId('search-input').clear().fill("apple")
  await page.locator('text=apple').click();
//  await page.locator('xpath=.//li[@class="ignore-click has-avatar"]').click();
  await page.locator('xpath=.//button[@class="g-btn-primary "]').click(); */
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('sami');
  await page.locator("li:nth-child(5) > .g-cta-text").isVisible();
  await page.locator('#main').getByText('Sami Appan').click();
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('apple');
  await page.getByText('Add', { exact: true }).click();
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('hp');
  await page.getByText('Add', { exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});