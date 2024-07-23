import globals from 'globals';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default {
	files: ['**/*.{js,mjs,cjs,ts}'],
	parser: parser,
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	rules: {
		indent: ['error', 2],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'@typescript-eslint/no-explicit-any': 'off',
		// Adicione mais regras conforme necessário
	},
};
