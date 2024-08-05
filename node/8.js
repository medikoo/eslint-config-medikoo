// Node.js v6+

"use strict";

const { join } = require("path");

module.exports = { extends: join(__dirname, "./12.js"), parserOptions: { ecmaVersion: 2018 } };
