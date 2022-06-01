//    npm run do-minify

const fs = require("fs");

const TYPE_CZECH_MIN = "./TypeCzech.min.js";
const TYPE_CZECH_NO_DEBUG = "./TypeCzech.no-debug.js";
const WEB_RESOURCES_MIN = "./web-resources/TypeCzech.min.js";
const PHP_TYPE_CZECH_MIN = "./examples-php/TypeCzech.min.js";

try {
  fs.copyFileSync(TYPE_CZECH_MIN, WEB_RESOURCES_MIN);

  fs.copyFileSync(TYPE_CZECH_MIN, PHP_TYPE_CZECH_MIN);

  fs.unlinkSync(TYPE_CZECH_MIN);
  fs.unlinkSync(TYPE_CZECH_NO_DEBUG);
} catch (err) {
  console.error(err);
}
