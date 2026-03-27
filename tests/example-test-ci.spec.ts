import { test, expect } from '@playwright/test';

// FAIL 1: Naming Convention (should be camelCase)
const API_KEY_SECRET = "12345-ABCDE-TEST-KEY"; 

test('test with bad formatting', async ({ page }) => {
  // FAIL 2: Unused variable (ESLint)
  const unusedVariable = 'I am not used';

  // FAIL 3: Snake case naming (ESLint)
  const user_name = 'John Doe';

  await page.goto('https://example.com');

  // FAIL 4: Excessive spacing and messy line breaks (Prettier)
  
  
  
    const title = await page.title()
  expect(title).toBe('Example Domain');
});

// FAIL 5: No newline at end of file (Prettier)