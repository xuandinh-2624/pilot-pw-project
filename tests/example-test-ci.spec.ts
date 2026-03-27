import { expect, test } from '@playwright/test';

test('has example domain title', async ({ page }) => {
  await page.goto('https://example.com');

  const title = await page.title();
  expect(title).toBe('Example Domain');
});
