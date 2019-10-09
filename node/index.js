// Node.js v8+

"use strict";

const { join } = require("path");

module.exports = {
	extends: join(__dirname, "../index.js"),
	env: { node: true },
	parserOptions: { ecmaFeatures: { experimentalObjectRestSpread: true } },
	rules: { "prefer-object-spread": "error" }
};
