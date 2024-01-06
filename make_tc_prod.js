const fs = require("fs");
console.log("Production build, TypeCzech bundled");

const PROD_type_czech_import = "./node_modules/type-czech/type-czech-import-prod.js";
const type_czech_import = "./node_modules/type-czech/type-czech-import.js";
fs.copyFileSync(PROD_type_czech_import, type_czech_import);