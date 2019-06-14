"use strict";

const { join } = require("path");

module.exports = {
	extends: join(__dirname, "index.js"),
	// Allow to override ES6 globals as e.g. var WeakMap = require('es6-weak-map')
	env: { es6: false },
	parserOptions: { ecmaVersion: 5 },
	rules: {
		"no-template-curly-in-string": "off",
		"no-var": "off",
		"object-shorthand": "off",
		"prefer-arrow-callback": "off",
		"prefer-destructuring": "off",
		"prefer-rest-params": "off",
		"prefer-spread": "off",
		"prefer-template": "off",
		"require-unicode-regexp": "off",
		"spaced-comment": ["error", "always", { markers: [",", "[,"] }]
	}
};
