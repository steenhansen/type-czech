// called by "npm run minify2Browser"

/*
  https://github.com/google/closure-compiler/wiki/Flags-and-Options
  ECMASCRIPT_2020 
  ECMASCRIPT_2021 crashes in NodeJs v14.14.0
                  saves only 6 bytes more than 2020
*/

const fs = require("fs");

const DEV_type_czech_import = "./type-czech-import-dev.js";
const JSX_EXPORT_DELETE = "export default the_exports;"; //  export default the_exports; // for JSX and ESM
const CJS_EXPORT_DELETE = "module.exports.the_exports;"; // module.exports.the_exports; // for CJS require
const JS_NO_DEBUG = "./closure-minify/TypeCzech.no-export-no-debug.js";

// .no-export-no-debug. ==> .no-export-no-debug.

const TYPE_CZECH_MIN = "./closure-minify/TypeCzech.min.js";
const PHP_TYPE_CZECH = "./examples-php/TypeCzech.js";

const JS_PLAIN_TYPE_CZECH = "./web-resources/TypeCzech.js";

const CONSOLE_LOG = /consolelog\("[^;]*;/g; //         consolelog("^^^ _doubleToSingleQuotes EXIT", single_quotes);

function dateTime(file_name){
  const today_date = new Date().toISOString().slice(0, 19);
  const no_t_date = today_date.replace(/T/g, "_");
  const no_semi_date = no_t_date.replace(/:/g, "-");
  const whole_name = file_name + "." + no_semi_date;
  return whole_name;
}

function renameErr(err) {
  if (err !== null) {
    err_str = err.toString();
    if (!err_str.startsWith("Error: ENOENT: no such file or directory, rename")) console.log(err_str);
  }
};

try {
  const js_code = fs.readFileSync(DEV_type_czech_import, "utf8");
  const js_no_jsx_export = js_code.replace(JSX_EXPORT_DELETE, "");
  const js_plain = js_no_jsx_export.replace(CJS_EXPORT_DELETE, "");

  old_php_timestamped = dateTime(PHP_TYPE_CZECH);
  fs.rename(PHP_TYPE_CZECH, old_php_timestamped, renameErr);
  fs.writeFileSync(PHP_TYPE_CZECH, js_plain); // examples-php/TypeCzech.js without any export statements

  old_browser_timestamped = dateTime(JS_PLAIN_TYPE_CZECH);
  fs.rename(JS_PLAIN_TYPE_CZECH, old_browser_timestamped, renameErr);

  fs.writeFileSync(JS_PLAIN_TYPE_CZECH, js_plain); // web-resources/TypeCzech.js without any export statements

  const js_no_consolelog = js_plain.replace(CONSOLE_LOG, "");

  old_no_consolelog = dateTime(JS_NO_DEBUG);
  fs.rename(JS_NO_DEBUG, old_no_consolelog, renameErr);
  fs.writeFileSync(JS_NO_DEBUG, js_no_consolelog);



    old_type_min = dateTime(TYPE_CZECH_MIN);
  fs.rename(TYPE_CZECH_MIN, old_type_min, renameErr);
} catch (err) {
  console.error(err);
}
