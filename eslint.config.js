import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import arrayFunc from 'eslint-plugin-array-func';
import importX from 'eslint-plugin-import-x';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
	{
		ignores: ['dist'],
	},
	{
		files: ['src/**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: {jsx: true},
				sourceType: 'module',
			},
		},
		settings: {react: {version: '18.3'}},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'array-func': arrayFunc,
			'import-x': importX,
			arrayFunc,
			'@stylistic': stylistic,
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			...importX.configs.recommended.rules,
			'no-var': 'error',
			'no-unused-vars': 'warn',
			'prefer-const': 'warn',
			'no-multi-spaces': 'warn',
			'react/no-invalid-html-attribute': 'error',
			'react/void-dom-elements-no-children': 'error',
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
			'react/prop-types': 'off',
			'import-x/first': 'warn',
			'import-x/no-anonymous-default-export': 'error',
			'import-x/no-duplicates': 'error',
			'array-func/prefer-array-from': 'warn',
			'array-func/prefer-flat-map': 'warn',
			'array-func/from-map': 'warn',
			'@stylistic/object-curly-spacing': ['warn', 'always'],
			'@stylistic/keyword-spacing': [
				'warn',
				{
					before: true,
					after: true,
					overrides: {
						if: {after: false},
						for: {after: false},
						while: {after: false},
						switch: {after: false},
					},
				},
			],
			'@stylistic/max-len': [
				'warn',
				{
					code: 120,
					tabWidth: 4,
				},
			],
			'@stylistic/max-statements-per-line': ['warn', {max: 1}],
			'@stylistic/no-extra-semi': 'warn',
			'@stylistic/no-mixed-operators': 'error',
			'@stylistic/no-mixed-spaces-and-tabs': 'warn',
			'@stylistic/no-multiple-empty-lines': ['warn', {max: 1}],
			'@stylistic/no-whitespace-before-property': 'warn',
			'@stylistic/one-var-declaration-per-line': ['warn', 'initializations'],
			'@stylistic/quote-props': ['warn', 'consistent'],
			'@stylistic/semi': ['warn', 'always'],
			'@stylistic/space-before-blocks': ['warn', 'always'],
			'@stylistic/spaced-comment': ['warn', 'always'],
			'@stylistic/switch-colon-spacing': ['warn', {after: true, before: false}],
			'@stylistic/arrow-parens': ['warn', 'always'],
			'@stylistic/arrow-spacing': ['warn', {before: true, after: true}],
			'@stylistic/brace-style': ['error', '1tbs', {allowSingleLine: false}],
			'@stylistic/comma-spacing': ['warn', {before: false, after: true}],
			'@stylistic/indent': ['warn', 'tab', {SwitchCase: 1, tabLength: 4}],
			'@stylistic/jsx-pascal-case': ['error'],
			'@stylistic/jsx-quotes': ['warn', 'prefer-double'],
			'@stylistic/jsx-self-closing-comp': ['warn'],
			'@stylistic/jsx-closing-bracket-location': ['warn', 'after-props'],
			'@stylistic/jsx-closing-tag-location': ['warn', 'tag-aligned'],
			'@stylistic/jsx-tag-spacing': [
				'warn',
				{
					closingSlash: 'never',
					beforeSelfClosing: 'always',
					afterOpening: 'never',
					beforeClosing: 'never',
				},
			],
			'@stylistic/jsx-wrap-multilines': [
				'warn',
				{
					declaration: 'parens-new-line',
					assignment: 'parens-new-line',
					return: 'parens-new-line',
					arrow: 'parens-new-line',
					condition: 'parens-new-line',
					logical: 'parens-new-line',
					prop: 'parens-new-line',
					propertyValue: 'parens-new-line',
				},
			],
			'react/jsx-curly-spacing': ['warn', {when: 'always', children: true}],
			'react/jsx-pascal-case': [
				'warn',
				{
					allowAllCaps: false,
					allowNamespace: true,
					allowLeadingUnderscore: false,
				},
			],
		},
	},
];
