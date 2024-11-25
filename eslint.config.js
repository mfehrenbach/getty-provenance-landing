import vueParser from 'vue-eslint-parser'
import vuePlugin from 'eslint-plugin-vue'

export default [
	{
		ignores: [
			'node_modules',
			'public',
		],
	},
	{
		rules: {
			'comma-dangle': ['error', 'always-multiline'],
			'indent': ['error', 'tab'],
			'no-console': 'warn',
			'prefer-const': 'error',
			'quotes': ['error', 'single'],
			'semi': ['error', 'never'],
		},
	},
	{
		files: ['**/*.webc'],
		languageOptions: { parser: vueParser },
		plugins: { vue: vuePlugin },
	},
]
