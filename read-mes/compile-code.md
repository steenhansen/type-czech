

# To make a new Type-Czech version
 - Alter type-czech-import-dev.js
 - npm run minify2Browser
 - New minified browser version in /web-resources/TypeCzech.min.js
 - New    debug browser version in /web-resources/TypeCzech.js


# Steps in - npm run minify2Browser
 - Starts with 214KB type-czech-import-dev.js
 - Creates a 196KB broswer version without any 'exports' and no debugging in /closure-minify/TypeCzech.no-export-no-debug.js
 - Makes a 34KB minified browser version in /closure-minify/TypeCzech.min.js

 - Produces 2 browser versions without any 'exports' in /web-resources/
   - 34KB /web-resources/TypeCzech.min.js  
      https://cdn.jsdelivr.net/gh/steenhansen/type-czech@latest/web-resources/TypeCzech.min.js
   - 214KB /web-resources/TypeCzech.js  
      https://cdn.jsdelivr.net/gh/steenhansen/type-czech@latest/web-resources/TypeCzech.js

Note that ECMASCRIPT_2020 is used instead of ECMASCRIPT_2021 which crashes TypeCzech in NodeJs v14.14.0.

Use of ECMASCRIPT_2020 over ECMASCRIPT_2021 results in an extra 6 bytes in the minified code.





