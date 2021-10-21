/* eslint-disable indent */
/* eslint-disable object-property-newline */
/* eslint-disable no-undef */
/* eslint-disable no-console */

function testError(test_exception) {
  console.log(test_exception);
}

function beforeCheck(prog_data, shape_data) {
  const prog_str = type_czech._jsonStr(prog_data);
  const shape_str = type_czech._jsonStr(shape_data);
  const before_str = prog_str + shape_str;
  return before_str;
}

function afterCheck(prog_data, shape_data, before_str, location_str) {
  const prog_str = type_czech._jsonStr(prog_data);
  const shape_str = type_czech._jsonStr(shape_data);
  const after_str = prog_str + shape_str;
  if (after_str !== before_str) {
    testError(`_ParametersCheck Value Change ! ${location_str} \n ${before_str} \n ${after_str}`);
  }
}

function errorMessage(error_number, actual_and_expect) {
  const [actual_out, expected_out] = actual_and_expect;
  const err_message = `test_ShapeCheck_test ${error_number}:`
  + `\n\n  actual= ${actual_out}`
  + `\n\nexpected= ${expected_out}`;
  return err_message;
}

function errorLabel(error_number) {
  const error_id = `ERROR@${error_number}`;
  return error_id;
}

function oneLineString(multiline_str) {
  const multiline_safe = multiline_str.toString();
  const no_newlines = multiline_safe.replace(/\r?\n|\r/g, ' ');
  const single_spaces = no_newlines.replace(/\s\s+/g, ' ');
  const chop_blank_end = single_spaces.replace(/\s$/, '');
  return chop_blank_end;
}

function arrayErrorToString(array_or_str_error) {
  if (typeof array_or_str_error === 'string') {
    return array_or_str_error;
  }
  // eslint-disable-next-line no-undef
  const reducer = (accum, curr) => `${accum}###${type_czech._toStr(curr)}`;
  const error_str = array_or_str_error.reduce(reducer);
  return error_str;
}

function errorNotMatchException(expected_error, e) {
  const expected_trim = expected_error.trim();
  const actual_trim = (e.message).trim();
  const expected_flat = expected_trim.replace(/\s+/g, ' ');
  const actual_flat = actual_trim.replace(/\s+/g, ' ');
  const error_not_match_exception = (expected_flat !== actual_flat);
  return error_not_match_exception;
}

function consoleExpectedActual(expected_error, e, error_id) {
  console.log('FAIL, wrong error message: ', error_id);
  console.log('           EXPECTED ERROR:', expected_error);
  console.log('             ACTUAL ERROR:', e);
}

try {
  // eslint-disable-next-line object-curly-newline
  const test_funcs = { errorLabel, beforeCheck, afterCheck,
                       errorMessage, testError, oneLineString,
                       arrayErrorToString, errorNotMatchException, consoleExpectedActual,
                    };
  module.exports = test_funcs;
} catch (e) {
  //
}
