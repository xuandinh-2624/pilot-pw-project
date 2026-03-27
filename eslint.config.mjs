import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';

export default tseslint.config(...tseslint.configs.recommended, {
  // This tells ESLint which files to apply Playwright rules to
  files: ['**/*.spec.ts', '**/*.test.ts'],
  plugins: {
    playwright,
  },
  rules: {
    ...playwright.configs['recommended'].rules,
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variable', format: ['camelCase'] },
      { selector: 'function', format: ['camelCase'] },
    ],
    'no-unused-vars': 'error',
    'no-console': 'warn',
  },
});
