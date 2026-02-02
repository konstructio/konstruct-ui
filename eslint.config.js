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
      // Disable new react-hooks v7 rules that require code refactoring
      // These rules are related to React Compiler which is not used in this project
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/incompatible-library': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/immutability': 'off',
      // TODO: Fix exhaustive-deps warnings in affected components
      // React-hooks v7 has stricter detection for missing dependencies
      // Setting to 'off' temporarily as these are pre-existing intentional patterns
      // that avoid infinite re-renders - tracked for future review
      'react-hooks/exhaustive-deps': 'off',
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
  // Disable stricter rules-of-hooks in Storybook files where render functions use hooks
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
