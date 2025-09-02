import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/'],
  },
  {
    files: ['**/*.{ts,tsx}', '**/*.d.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...vitest.environments.env.globals,
        ...globals.node,
        ...globals.browser,
        ...globals.SVGSVGElement,
        ...globals.ResizeObserver,
        ...globals.EventListener,
        ...globals.EventTarget,
        EventListener: 'readonly',
        MutationCallback: 'readonly',
        React: 'readonly',
        VoidFunction: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
      storybook,
      vitest,
      react,
    },
    rules: {
      'no-undef': 'off',
      ...js.configs.recommended.rules,
      ...tseslint.configs['recommended'].rules,
      ...reactHooks.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
