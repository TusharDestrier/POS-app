import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:import/errors', // Add import plugin errors
      'plugin:import/warnings', // Add import plugin warnings
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin, // Add the import plugin to the plugins
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-console': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // Built-in modules, then external libraries
            'internal', // Your internal modules
            ['sibling', 'parent'], // Sibling and parent imports
            'index', // Index files
          ],
          'newlines-between': 'always', // Enforce new lines between different groups
          alphabetize: { order: 'asc', caseInsensitive: true }, // Sort imports alphabetically within groups
        },
      ],
      'no-unused-vars': [
        'warn', // Change to 'error' if you want it to block the build
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }, // Ignore unused vars prefixed with `_`
      ],
    },
  }
)
