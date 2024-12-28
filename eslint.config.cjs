import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      'eslint:recommended',
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    env: {
      browser: true,
      es2020: true,
    },
  },
  {
    ignores: ['dist', '.eslintrc.cjs'],
  }
)
