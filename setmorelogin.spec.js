import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://go.staging.setmore.com');
  await page.getByRole('textbox', { name: 'Email' }).fill('ape1999@mailinator.com');

   

  await page.getByPlaceholder('Password').fill('test123123');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  
  await page.waitForURL('https://go.staging.setmore.com/calendar');
  await page.goto('https://go.staging.setmore.com/settings/my-team/all');
 
  //await page.getByRole('link', { name: 'Settings' }).click();
 // await page.getByTestId('my-team-nav').click();
  await page.getByTestId('add-staff').click();
  
  await page.getByTestId('fullName-0').fill('helloworld');
  await page.pause();
  await page.getByTestId('email-0').fill('thavaprakashtestmail@mailinator.com');
  await page.getByPlaceholder('Permission level').click();
  await page.getByRole('listitem').filter({ hasText: /^StandardAble to view and manage their own calendar$/ }).click();
 
  await page.getByRole('button', { name: 'Add', exact: true }).click();



  await page.getByTestId('invite-modal-close').click();
  await page.getByTestId('add-staff').click();
  await page.locator('#aw-billing i').getByRole('img').click();
  await page.getByRole('button', { name: 'D Dhoni' }).click();
  await page.locator('#ellipsisButton').click();
  await page.getByText('Delete profile').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByTestId('add-staff').click();
  await page.locator('#aw-billing i').getByRole('img').click();
  await page.getByTestId('billing-nav').click();
  await page.goto('https://go.staging.setmore.com/settings/usage/billing');

  // ---------------------
});
