const { TypeCzech } = require('../TypeCzech.js');

const {
  errorLabel, beforeCheck, afterCheck,
  testError, oneLineString, errorMessage,
  arrayErrorToString, errorNotMatchException, consoleExpectedActual,
} = require('./string-funcs.js');

const { getRandomInt } = require('./dynamic-generative/getRandomInt.js');

const { makeTree } = require('./dynamic-generative/make-tree.js');

const { changeTree } = require('./dynamic-generative/change-tree.js');

global.getRandomInt = getRandomInt;
global.makeTree = makeTree;
global.changeTree = changeTree;

global.TypeCzech = TypeCzech;
global.errorLabel = errorLabel;
global.beforeCheck = beforeCheck;
global.afterCheck = afterCheck;
global.testError = testError;
global.oneLineString = oneLineString;
global.errorMessage = errorMessage;
global.arrayErrorToString = arrayErrorToString;

global.errorNotMatchException = errorNotMatchException;
global.consoleExpectedActual = consoleExpectedActual;
