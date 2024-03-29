
# Dependencies

## JavaScript
TypeCzech requires ECMAScript 2015 (ES6) for Proxy and Reflect

## Node.js
If used on Node.js, TypeCzech requires Node.js 15.14.0 for replaceAll(), released 2021-04-06, npm v7.7.6

## Cycle.js - included directly for ease of use
Douglas Crockford's Cycle.js for working with cyclic variables, newer with WeakMap, for checking mutations that refer to themselves
https://github.com/douglascrockford/JSON-js/blob/master/cycle.js

## fast-json-stable-stringify - included directly for ease of use
Evgeny Poberezkin's fast-json-stable-stringify for a deterministic JSON.stringify() 
https://github.com/epoberezkin/fast-json-stable-stringify modified to handle newer types like BigInts and Symbols

## UsableBrowsers
https://caniuse.com/proxy - Edge 12+, Firefox 18+, Chrome 49+, Safari 10+ Opera 36+

&copy; 2024 Steen Hansen



