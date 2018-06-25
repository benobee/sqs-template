/****************************************/
/*******     WEBPACK CONFIG     *********/
/****************************************/
const input = require("./config/webpack/input.js");
const rules = require("./config/webpack/rules.js");
const plugins = require("./config/webpack/plugins.js");
const output = require("./config/webpack/output.js");

/****************************************/
/*******     CONFIG OBJECT      *********/
/****************************************/

const WEBPACK_CONFIG = {
    module: {}
};

/****************************************/
/*******      ENVRIONMENTS      *********/
/****************************************/

/*
 * test whether the script will be run in
 * production using "npm run build" from
 * the terminal. If true, file names will
 * be hashed, js will be minified.
 */

//extend properties to config
Object.assign(WEBPACK_CONFIG, input);
Object.assign(WEBPACK_CONFIG, rules);
Object.assign(WEBPACK_CONFIG, plugins);
Object.assign(WEBPACK_CONFIG, output);

//export config
module.exports = WEBPACK_CONFIG;