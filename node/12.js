// Node.js v14+

"use strict";

const { join } = require("path");

module.exports = { extends: join(__dirname, "./14.js"), parserOptions: { ecmaVersion: 2019 } };
