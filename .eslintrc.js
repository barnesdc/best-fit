module.exports = {
	env: {
		es6: true,
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ['plugin:prettier/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				printWidth: 80,
				tabWidth: 4,
				singleQuote: true,
				trailingComma: 'es5',
				jsxBracketSameLine: false,
				semi: false,
			},
		],
		'no-console': 'error',
		'import/first': 'error',
	},
}
