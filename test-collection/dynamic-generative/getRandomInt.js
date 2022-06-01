
if (typeof exports === 'undefined') {
  the_exports = window;
} else {
  the_exports = exports;
}

(function (the_exports) {
  the_exports.getRandomInt =  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}(the_exports));