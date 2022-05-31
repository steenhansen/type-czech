'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./type-czech-require-prod');
} else {
  module.exports = require('./type-czech-require-dev');
}
