function _throw(test_exception) { throw test_exception; }

function beforeCheck(prog_data, shape_data) {
  const prog_str = JSON.stringify(prog_data);
  const shape_str = JSON.stringify(shape_data);
  const before_str = prog_str + shape_str;
  return before_str;
}

function afterCheck(prog_data, shape_data, before_str, location_str) {
  const prog_str = JSON.stringify(prog_data);
  const shape_str = JSON.stringify(shape_data);
  const after_str = prog_str + shape_str;
  if (after_str !== before_str) {
    _throw(`_ParametersCheck Value Change ! ${location_str} \n ${before_str} \n ${after_str}`);
  }
}

function typesAsStr(types_array) {
  if (typeof types_array === 'undefined') {
    return 'undefined';
  }
  if (typeof types_array === 'string') {
    return types_array;
  }
  const types_d_quoted = JSON.stringify(types_array);
  const types_string = types_d_quoted.replace(/"/g, "'");
  return types_string;
}

function strOrArrayError(str_array_error) {
  if (typeof str_array_error === 'string') {
    const no_double_spaces = str_array_error.replace(/\s\s+/g, ' ');
    return no_double_spaces;
  }
  const where_error = str_array_error[0];
  // eslint-disable-next-line no-undef
  const what_indent = type_czech.CZECH_ERROR_INDENT + str_array_error[1];
  const types_array = str_array_error[2];
  let types_string;
  if (typeof types_array !== 'string') {
    types_string = typesAsStr(types_array);
  } else {
    types_string = types_array;
  }
  // eslint-disable-next-line no-undef
  const types_indent = type_czech.CZECH_ERROR_INDENT + types_string;
  const error_3_part = `${where_error}${what_indent}${types_indent}`;
  return error_3_part;
}

function actualAndExpected(error_id, actual_error, expected_error) {
  const actual_out = strOrArrayError(actual_error);
  const expected_out = strOrArrayError(expected_error);
  if (typeof actual_error === 'object' && typeof expected_error === 'object') {
    const actual_types_str_2 = typesAsStr(actual_error[2]);
    const first_diff = (actual_error[0] !== expected_error[0]);
    const second_diff = (actual_error[1] !== expected_error[1]);
    const third_diff = (actual_types_str_2 !== expected_error[2]);
    if (first_diff || second_diff || third_diff) {
      return [actual_out, expected_out];
    }
  } else if (typeof actual_error !== typeof expected_error) {
    const mis_match_err = `${error_id} Mismatched Error Return Types: ${typeof actual_error} !== ${typeof expected_error}`
    + `\n actual = ${actual_out}`
    + `\n expected = ${expected_out}`;
    throw mis_match_err;
  } else if (actual_out !== expected_out) {
    if (typeof expected_error !== 'string') {
      throw new Error(`${error_id} Expected error should be a string, not ${expected_error} !`);
    }
    return [actual_out, expected_out];
  }
  return '';
}

function errorMessage(error_number, expect_and_actual, check_object) {
  const variable_str = typesAsStr(check_object);
  const [actual_out, expected_out] = expect_and_actual;
  return `test_ShapeCheck_test ${error_number}:\n\nvariable= ${variable_str}\n\n  actual= ${actual_out}\n\nexpected= ${expected_out}`;
}

function errorLabel(error_number) {
  const error_id = `ERROR@${error_number}`;
  return error_id;
}

function oneLineString(multiline_str) {
  const no_newlines = multiline_str.replace(/\r?\n|\r/g, ' ');
  const single_spaces = no_newlines.replace(/\s\s+/g, ' ');
  return single_spaces;
}

try {
  // eslint-disable-next-line object-curly-newline
  const test_funcs = { errorLabel, beforeCheck, afterCheck,
     actualAndExpected, errorMessage, _throw, oneLineString };
  module.exports = test_funcs;
} catch (e) {
  //
}
