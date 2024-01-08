/* 

Production TypeCzech.js REQUIRED NOP code for Node.js CJS

When in production, this small file replaces type-czech-require.js 
stopping all type checking without any changes to the source code.

Used thus:
  const { TypeCzech_obj } = require("./node_modules/type-czech/type-czech-require.js");
  const { TypeCzech } = TypeCzech_obj;
  const type_czech = TypeCzech(["CONSOLE-COUNT", "LOG-ERRORS"]);

*/

let the_exports;
if (typeof window !== "undefined") {
  the_exports = window; // for browser environment
} else if (typeof exports !== "undefined") {
  the_exports = exports; // for Node environment
} else {
  the_exports = {}; // for JSX environment
}

(function (the_exports) {
  the_exports.TypeCzech = function () {
    the_exports.type_czech = {
      linkUp: (nop) => nop,
      isActive: (x) => false, // These 3 empty function are still possibly called
      isPruned: (y) => true,
      _from: "type-czech-require-prod",
    };
    return the_exports.type_czech;
  };
})(the_exports);

module.exports.the_exports; // for CJS
