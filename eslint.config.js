
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react' // Import the react plugin
export default tseslint.config(
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
     
    ],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier, 
      react,
    },
    rules: {
      ...prettier.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'warn', 
      'react/jsx-indent': ['error', 2], 
      'react/jsx-indent-props': ['error', 2], 
      'no-console': 'off', 
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_', 
          argsIgnorePattern: '^_', 
          args: 'after-used',
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false,
          caughtErrors: 'none', 
        },
      ],
    },
    files: ['**/*.{ts,tsx}'],
  }
);
