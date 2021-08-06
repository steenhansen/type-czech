/* eslint-disable */

function _throw(test_exception) { throw test_exception; }

function beforeCheck(prog_data, shape_data){
  const prog_str = JSON.stringify(prog_data);
  const shape_str = JSON.stringify(shape_data);
  const before_str = prog_str + shape_str;
  return before_str;
}

function afterCheck(prog_data, shape_data, before_str, location_str){
  const prog_str = JSON.stringify(prog_data);
  const shape_str = JSON.stringify(shape_data);
  const after_str = prog_str + shape_str;
  if (after_str!==before_str){
     _throw(`_ParametersCheck Value Change ! ${location_str} \n ${old_json_str} \n ${new_json_str}`);
  }
}



function typesAsStr(types_array){
  if (typeof types_array === 'undefined'){
    return 'undefined'
  }else if (typeof types_array === 'String') {
    return types_array;
  }else {
    let types_d_quoted = JSON.stringify(types_array);
    let types_string = types_d_quoted.replace(/"/g, "'");
    return types_string;
  }
}

function strOrArrayError(str_array_error) {
  if (typeof str_array_error === 'String'){
    no_double_spaces = str_array_error.replace(/\s\s+/g, ' ');
    return no_double_spaces;
  }else{
    const where_error = str_array_error[0];
    const what_indent = type_czech.CZECH_ERROR_INDENT + str_array_error[1];
    let types_array = str_array_error[2];
    if (typeof types_array !=='String'){
      types_string = typesAsStr(types_array);
    }else{
      types_string = types_array;
    }
    const types_indent = type_czech.CZECH_ERROR_INDENT + types_string;
    error_3_part = `${where_error}${what_indent}${types_indent}`;
    return error_3_part;
  }
}

function actualAndExpected(error_id, actual_error, expected_error){
  actual_out = strOrArrayError(actual_error);
  expected_out = strOrArrayError(expected_error);
  if (typeof actual_error === 'object' && typeof expected_error === 'object'){
    actual_types_str_2 = typesAsStr(actual_error[2])
    const first_diff = (actual_error[0] !== expected_error[0]);
    const second_diff = (actual_error[1] !== expected_error[1]);
    const third_diff = (actual_types_str_2 !== expected_error[2]);
    //console.log('diffs', first_diff, second_diff, third_diff)

  //  console.log('first_diff',  actual_error[0],    expected_error[0])
  //  console.log('second_diff', actual_error[1],    expected_error[1])
  //  console.log('third_diff',  actual_types_str_2, expected_error[2])
    if (first_diff || second_diff || third_diff) {
      return [actual_out, expected_out];
    }
  } else if (typeof actual_error !== typeof expected_error){
    const mis_match_err = `${error_id} Mismatched Error Return Types: ${typeof actual_error} !== ${typeof expected_error}`
    +  `\n actual = ${actual_out}`
    + `\n expected = ${expected_out}`
    throw mis_match_err;           ////******
  }else if (actual_out !== expected_out ){
    if (typeof expected_error !== 'String') 
      throw `${error_id} Expected error should be a string, not ${expected_error} !`;
    return [actual_out, expected_out];
  }
  return '';
}
function errorMessage(error_number, expect_and_actual, check_object){
  variable_str = typesAsStr(check_object);
  let [actual_out, expected_out] = expect_and_actual;
  return `test_ShapeCheck_test ${error_number}:\n\nvariable= ${variable_str}\n\n  actual= ${actual_out}\n\nexpected= ${expected_out}`;
}

function errorLabel(error_number){
  const error_id = `ERROR@${error_number}`;
  return error_id;
}


