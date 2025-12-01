
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import i from 'eslint-plugin-import';
import parser from '@typescript-eslint/parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['dist', 'test-results'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      parser,
    },
    plugins: {
      import: i,
    },
    rules: {
      'no-empty-pattern': 2,
      'import/no-useless-path-segments': 2,
      'import/export': 2,
      'import/no-extraneous-dependencies': 2,
      'import/no-unused-modules': 2,
      'import/no-amd': 2,
      'import/no-commonjs': 2,
      'import/first': 2,
      'import/no-duplicates': 2,
      'import/order': 2,
      'import/newline-after-import': 2,
    },
  },
);
