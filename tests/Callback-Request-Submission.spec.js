// @ts-check
import { test, expect } from '@playwright/test';
import { url } from 'node:inspector';
import path from 'node:path';
import fs from 'node:fs';

test('Callback Request Submission',async ({page, browserName}, testInfo) => {
  
  //const browserName = testInfo.project.name;
  const activeBrowser = testInfo.project.name || browserName;
  const timestamp = Date.now();
  const screenshotPath = `./tests/Landing_page_before_submission-${activeBrowser}-at-timestamp_${timestamp}.jpg`;
  

  // Opening the Landing page URL
  await page.goto('https://test.netlify.app/');

  // Filling the "free text" fields in the form
  await page.getByLabel('Name').fill('Ori Gal');
  await expect(page.getByLabel('Name')).toHaveValue('Ori Gal');
  
  await page.getByLabel('email').fill('original.gal@gmail.com');
  await expect(page.getByLabel('email')).toHaveValue('original.gal@gmail.com');
  
  await page.getByLabel('phone').fill('052-6306635');
  await expect(page.getByLabel('phone')).toHaveValue('052-6306635');
  
  await page.getByLabel('company').fill('My Next Challenge');
  await expect(page.getByLabel('company')).toHaveValue('My Next Challenge');
  
  await page.getByLabel('website').fill('https://nextchallenge.com');
  await expect(page.getByLabel('website')).toHaveValue('https://nextchallenge.com');

  // Changing value of the "dropdown list" field: "Number of Employees"
  await page.getByLabel('employees').selectOption('51-500');
  await expect(page.getByLabel('employees')).toHaveValue('51-500');

  // Screenshot of Landing page just before its submission
  await page.screenshot({path: screenshotPath, fullPage: true});
  expect(fs.existsSync(screenshotPath)).toBe(true);
  const fileStats = fs.statSync(screenshotPath);
  expect(fileStats.size).toBeGreaterThan(0);

  // Submission of Landing page
  await page.getByRole('button', {name: 'Request a call back'}).click();
  await expect(page.getByRole('button', {name: 'Request a call back'})).toBeHidden();

  // Writing to the console log when "Thank You" page is displayed
  await page.waitForURL('**/thank-you**');
  console.log(`"Thank You" page is displayed successfully on ${activeBrowser} at timestamp_${timestamp}.`);
  
  // "Thank you" page is displayed until user either clicks the "Resume" button
  // on the "Playwright Inspector", or closes the browser/"Playwright Inspector".
  // There number of CLICKS should be done in order to get back to command line, is equal to 
  // the number of Playwright Inspectors and the number of browsers, that are being tested and opened in parallel.
  await page.pause(); 
});


// Infrastructure for running on a specific browser when section "projects"
// is NOT defined in file: "playwright.config.js".
// More information can be found in section 2 in file: "readme.md".


// Running on browser: Google Chrome
// test.use({
//   browserName: 'chromium',
//   channel: 'chrome',
//   headless: false
// })

// // Running on browser: Firefox
// test.use({
//   browserName: 'firefox',
//   headless: false
// })

// Running on browser: Safari
// test.use({
//   browserName: 'webkit',
//   headless: false
// })
