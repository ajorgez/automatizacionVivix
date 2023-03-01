import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dhusdev-dhusdev2.azurewebsites.net/KMI/IntelliDrive/ApplUI/Security/Default.aspx?ReturnUrl=https%3a%2f%2fdhusdev-dhusdev2.azurewebsites.net%2fKMI%2fIntelliDrive%2fApplUI%2fSpas%2fHomePage%2fHomePage.aspx%3f.pl%3dHomePageAdIntel#/home');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('jorge_score');
  await page.getByRole('textbox', { name: 'Password' }).fill('Enero2023*');
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByRole('link', { name: 'MEDIA BUYER' }).click();
});