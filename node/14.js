// Node.js v14+

"use strict";

const { join } = require("path");

module.exports = {
	extends: join(__dirname, "./16.js"),
	parserOptions: { ecmaVersion: 2020, rules: { "logical-assignment-operators": "off" } }
};
