

const fs = require("fs");
console.log("Development build, TypeCzech bundled");

const DEV_type_czech_import = "./node_modules/type-czech/type-czech-import-dev.js";
const type_czech_import = "./node_modules/type-czech/type-czech-import.js";
fs.copyFileSync(DEV_type_czech_import, type_czech_import);

