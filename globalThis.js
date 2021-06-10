// https://mathiasbynens.be/notes/globalthis#robust-polyfill

(function() {
  if (typeof globalThis === 'object') return;
  Object.defineProperty(Object.prototype, '__magic__', {
    get: function() {
      return this;
    },
    configurable: true // This makes it possible to `delete` the getter later.
  });
  __magic__.globalThis = __magic__; // lolwat
  delete Object.prototype.__magic__;
}());

// Your code can use `globalThis` now.
// console.log(globalThis);