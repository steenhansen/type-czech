//    npm run do-minify

/*
  https://github.com/google/closure-compiler/wiki/Flags-and-Options
  ECMASCRIPT_2020 
  ECMASCRIPT_2021 crashes in NodeJs v14.14.0
                  saves only 6 bytes more than 2020
*/

const fs = require("fs");

const DEV_type_czech_import = "./type-czech-import-dev.js";
const JSX_EXPORT_DELETE = "export default the_exports;"; //  export default the_exports; // for JSX and ESM
const CJS_EXPORT_DELETE = "module.exports.the_exports;"; // module.exports.the_exports; // for CJS
const JS_NO_DEBUG = "./TypeCzech.no-debug.js";
const PHP_TYPE_CZECH = "./examples-php/TypeCzech.js";

const JS_PLAIN_TYPE_CZECH = "./web-resources/TypeCzech.js";

const CONSOLE_LOG = /consolelog\("[^;]*;/g; //         consolelog("^^^ _doubleToSingleQuotes EXIT", single_quotes);

try {
  const js_code = fs.readFileSync(DEV_type_czech_import, "utf8");
  const js_no_jsx_export = js_code.replace(JSX_EXPORT_DELETE, "");
  const js_plain = js_no_jsx_export.replace(CJS_EXPORT_DELETE, "");
  fs.writeFileSync(PHP_TYPE_CZECH, js_plain); // examples-php/TypeCzech.js without any export statements
  fs.writeFileSync(JS_PLAIN_TYPE_CZECH, js_plain); // web-resources/TypeCzech.js without any export statements

  const js_no_consolelog = js_plain.replace(CONSOLE_LOG, "");
  fs.writeFileSync(JS_NO_DEBUG, js_no_consolelog);
} catch (err) {
  console.error(err);
}
