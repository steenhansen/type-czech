/* eslint-disable */

tested_shapeErrorMess = 0;

failed_shapeErrorMess = 0;

_shapeErrorMess_18001(18001);
_shapeErrorMess_18002(18002);


total_fails += failed_shapeErrorMess;
console.log('_shapeErrorMess failed tests', failed_shapeErrorMess)

total_checks += tested_shapeErrorMess;
console.log('_shapeErrorMess passed tests', tested_shapeErrorMess)

function _shapeErrorMess_18001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
 // , 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '18001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_array = [ [11], [13], [17], [19] ];    
  object_type =   ["Number"]      
  exact_shape = 'TYPE-VERIFY';
    before_str = beforeCheck(check_array, object_type);
    actual = type_czech._shapeErrorMess(check_array, object_type, exact_shape);
    afterCheck(check_array, object_type, before_str, error_id);
  expected = `TC@03 - Index '0' is supposed to be a '11', but is missing : ['Number']`; 
  if (actual!==expected) {
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeErrorMess() misfired with : ${actual}`);
  }
  if (typeof failed_shapeErrorMess !== 'undefined') {
    failed_shapeErrorMess +=type_czech.failureTally();
    tested_shapeErrorMess ++;
  }
}

function _shapeErrorMess_18002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '1800';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_array = [ [11], [13], [17], [19] ];    
  object_type =   ["Number"]      
  exact_shape = 'TYPE-EXTRAS';
    before_str = beforeCheck(check_array, object_type);
    actual = type_czech._shapeErrorMess(check_array, object_type, exact_shape);
    afterCheck(check_array, object_type, before_str, error_id);
  expected = `TC@03 - Index '0' is supposed to be a '11', but is missing : ['Number']`; 
  if (actual!==expected) {
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeErrorMess() misfired with : ${actual}`);
  }
  if (typeof failed_shapeErrorMess !== 'undefined') {
    failed_shapeErrorMess +=type_czech.failureTally();
    tested_shapeErrorMess ++;
  }
}
