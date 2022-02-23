// @ts-check
const { test, expect } = require('@playwright/test');
//adding test Just to test

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
});



test.describe('wikipedia page test', () => {
  test('verify wikipedia open and loads successfully', async ({ page }) => {
    await expect(page.locator('#searchInput')).toBeVisible();
  //  await expect(page.locator('#searchInput')).toBeLessThanOrEqual(5);
    await page.screenshot({ path: 'landing.png', fullPage: true });
 //   expect(await page.screenshot()).toMatchSnapshot('landing.png');


  });
});
