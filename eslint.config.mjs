import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    ...playwright.configs['recommended-test'],
    rules: {
      ...playwright.configs['recommended-test'].rules,
      '@typescript-eslint/naming-convention': [
        'error',
        { 'selector': 'variable', 'format': ['camelCase'] },
        { 'selector': 'function', 'format': ['camelCase'] }
      ],
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  }
);