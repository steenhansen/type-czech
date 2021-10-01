/* eslint-disable */

//const fail_all_tests = true;

tested_shapeErrorMess = 0;
failed_shapeErrorMess = 0;

_shapeErrorMess_18001();
_shapeErrorMess_18002();

total_fails += failed_shapeErrorMess;
total_checks += tested_shapeErrorMess;

if (show_random) {
  console.log('_shapeErrorMess failed tests 18000', failed_shapeErrorMess)
  console.log('_shapeErrorMess passed tests 18000', tested_shapeErrorMess)
}

function _shapeErrorMess_18001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
 // , 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '18001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_array = [ [11], [13], [17], [19] ];    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    object_type =   ["String"];                  // TEST TEST
  } else {
    object_type =   ["Number"];              // REAL TEST
  }
  
  exact_shape = 'TYPE-VERIFY';
    before_str = beforeCheck(check_array, object_type);
    actual = type_czech._shapeErrorMess(check_array, object_type, exact_shape);
    afterCheck(check_array, object_type, before_str, error_id);
  expected = `TC@03 - Element '0' is supposed to be a '11', but is missing : ['Number']`; 

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeErrorMess ++;
                                              }
                                              tested_shapeErrorMess ++;




}

function _shapeErrorMess_18002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '1800';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_array = [ [11], [13], [17], [19] ];    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    object_type =   ["String"];                  // TEST TEST
  } else {
    object_type =   ["Number"];              // REAL TEST
  }   
  exact_shape = 'TYPE-EXTRAS';
    before_str = beforeCheck(check_array, object_type);
    actual = type_czech._shapeErrorMess(check_array, object_type, exact_shape);
    afterCheck(check_array, object_type, before_str, error_id);
  expected = `TC@03 - Element '0' is supposed to be a '11', but is missing : ['Number']`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeErrorMess ++;
                                              }
                                              tested_shapeErrorMess ++;

}
