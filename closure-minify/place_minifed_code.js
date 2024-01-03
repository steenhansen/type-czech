// called by "npm run minify2Browser"

const fs = require("fs");

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


const TYPE_CZECH_MIN = "./closure-minify/TypeCzech.min.js";
const WEB_RESOURCES_MIN = "./web-resources/TypeCzech.min.js";
const PHP_EXAMPLE_MIN = "./examples-php/TypeCzech.min.js";
const JS_PLAIN_TYPE_CZECH = "./web-resources/TypeCzech.js";
try {
  old_resource_min = dateTime(WEB_RESOURCES_MIN);
  fs.rename(WEB_RESOURCES_MIN, old_resource_min, renameErr);
  fs.copyFileSync(TYPE_CZECH_MIN, WEB_RESOURCES_MIN);

  old_php_min = dateTime(PHP_EXAMPLE_MIN);
  fs.rename(PHP_EXAMPLE_MIN, old_php_min, renameErr);
  fs.copyFileSync(TYPE_CZECH_MIN, PHP_EXAMPLE_MIN);

  console.log("***********************************************************************************")
  console.log("*** Compiled Type-Czech minified browser code", WEB_RESOURCES_MIN,      ' ***')
  console.log("*** Compiled Type-Czech    plain browser code", JS_PLAIN_TYPE_CZECH, '     ***')
  console.log("***********************************************************************************")
  console.log("")

} catch (err) {
  console.error(err);
}
