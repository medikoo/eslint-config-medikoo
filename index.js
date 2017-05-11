"use strict";

module.exports = {
	extends: "eslint:all",
	env: {
		commonjs: true,
		es6: true
	},
	rules: {
		"capitalized-comments": ["error", "always", { ignoreConsecutiveComments: true }],
		"comma-style": ["error", "last", { exceptions: { VariableDeclaration: true } }],
		"curly": ["error", "multi-line"],
		"dot-location": ["error", "property"],
		"func-names": ["error", "never"],
		"global-require": "off",
		"id-length": ["error", { exceptions: ["a", "d", "e", "i", "t", "T"] }],
		"indent": ["error", "tab", { SwitchCase: 1 }],
		"init-declarations": "off",
		"line-comment-position": "off",
		"max-len": ["error", 100],
		"max-params": "off",
		"max-statements": ["error", 20, { ignoreTopLevelFunctions: true }],
		"multiline-ternary": "off",
		"newline-before-return": "off",
		"no-continue": "off",
		"no-empty": ["error", { allowEmptyCatch: true }],
		"no-extra-parens": ["error", "all", { nestedBinaryExpressions: false }],
		"no-inline-comments": "off",
		"no-invalid-this": "off",
		"no-magic-numbers": ["error", { ignore: [-1, 0, 1, 2] }],
		"no-mixed-requires": "off",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multi-assign": "off",
		"no-multi-spaces": ["error", { exceptions: { VariableDeclarator: true } }],
		"no-param-reassign": "off",
		"no-plusplus": "off",
		"no-process-env": "off",
		"no-process-exit": "off",
		"no-return-assign": "off",
		"no-shadow": ["error", { builtinGlobals: true }],
		"no-sync": "off",
		"no-tabs": "off",
		"no-ternary": "off",
		"no-undef": ["error", { typeof: false }],
		"no-undefined": "off",
		"no-underscore-dangle": "off",
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
		"sort-keys": "off",
		"sort-vars": "off",
		"template-curly-spacing": ["error", "always"],
		"vars-on-top": "off"
	}
};
