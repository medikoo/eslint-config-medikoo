"use strict";

module.exports = {
	extends: "eslint:all",
	env: {
		commonjs: true,
		es6: true
	},
	rules: {
		"accessor-pairs": "off",
		"array-element-newline": "off",
		"arrow-parens": ["error", "as-needed"],
		"capitalized-comments": ["error", "always", { ignoreConsecutiveComments: true }],
		"class-methods-use-this": "off",
		"comma-style": ["error", "last", { exceptions: { VariableDeclaration: true } }],
		"consistent-this": "off",
		"curly": ["error", "multi-line"],
		"dot-location": ["error", "property"],
		"func-name-matching": "off",
		"func-names": ["error", "never"],
		"function-paren-newline": ["error", "consistent"],
		"global-require": "off",
		"guard-for-in": "off",
		"id-length": ["error", { exceptions: ["a", "d", "e", "i", "j", "k", "t", "T"] }],
		"indent": "off",
		"init-declarations": "off",
		"line-comment-position": "off",
		"max-len": ["error", 100],
		"max-params": "off",
		"max-statements": ["error", 20, { ignoreTopLevelFunctions: true }],
		"multiline-ternary": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-confusing-arrow": "off",
		"no-continue": "off",
		"no-empty": ["error", { allowEmptyCatch: true }],
		"no-extra-parens": [
			"error",
			"all",
			{ nestedBinaryExpressions: false, conditionalAssign: false }
		],
		"no-inline-comments": "off",
		"no-invalid-this": "off",
		"no-labels": "off",
		"no-magic-numbers": "off",
		"no-mixed-operators": [
			"error",
			{
				groups: [
					["&", "|", "^", "~", "<<", ">>", ">>>"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<="],
					["&&", "||"],
					["in", "instanceof"]
				],
				allowSamePrecedence: true
			}
		],
		"no-mixed-requires": "off",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multi-assign": "off",
		"no-multi-spaces": ["error", { exceptions: { VariableDeclarator: true } }],
		"no-param-reassign": "off",
		"no-plusplus": "off",
		"no-process-env": "off",
		"no-process-exit": "off",
		"no-return-assign": "off",
		"no-shadow": ["error", { builtinGlobals: true, allow: ["t"] }],
		"no-sync": "off",
		"no-tabs": "off",
		"no-ternary": "off",
		"no-undef": ["error", { typeof: false }],
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unused-vars": ["error", { argsIgnorePattern: "[iI]gnored" }],
		"no-warning-comments": [
			"error",
			{
				terms: ["fixme", "xxx"],
				location: "start"
			}
		],
		"object-curly-newline": "off",
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
		"one-var": "off",
		"one-var-declaration-per-line": "off",
		"padded-blocks": "off",
		"quote-props": ["error", "consistent-as-needed"],
		"space-before-function-paren": [
			"error",
			{ anonymous: "always", asyncArrow: "always", named: "never" }
		],
		"sort-keys": "off",
		"sort-vars": "off",
		"template-curly-spacing": ["error", "always"],
		"vars-on-top": "off"
	}
};
