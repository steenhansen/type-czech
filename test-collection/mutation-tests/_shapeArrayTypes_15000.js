/* eslint-disable */

//const fail_all_tests = true;

tested_shapeArrayTypes = 0;
failed_shapeArrayTypes = 0;

_shapeArrayTypes_15001();
_shapeArrayTypes_15002();

total_fails += failed_shapeArrayTypes;
total_checks += tested_shapeArrayTypes;

if (show_random) {
  console.log('_shapeArrayTypes failed tests 15000', failed_shapeArrayTypes);
  console.log('_shapeArrayTypes passed tests 15000', tested_shapeArrayTypes);
}

function _shapeArrayTypes_15001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
 // , 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '15001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_array = [  'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    check_array =  [ 13, 14, 15 ];            // REAL TEST
  }
  object_type =  [ "Number" ];      
  exact_shape = 'TYPE-VERIFY';
  before_str = beforeCheck(check_array, object_type);
  actual = type_czech._shapeArrayTypes(check_array, object_type, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_array, object_type, before_str, error_id);
  expected = ""; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeArrayTypes ++;
                                              }
                                              tested_shapeArrayTypes ++;
}

function _shapeArrayTypes_15002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '15002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_array = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    check_array =  [ 13, 14, 15 ];            // REAL TEST
  }
  
  object_type =  [ "String" ];      
  exact_shape = 'TYPE-EXTRAS';
  before_str = beforeCheck(check_array, object_type);
  actual = type_czech._shapeArrayTypes(check_array, object_type, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_array, object_type, before_str, error_id);
  expected = `TE@215 - ELEMENT '0' is asserted to be a 'String', but is fallaciously a 'Number' : 13`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeArrayTypes ++;
                                              }
                                              tested_shapeArrayTypes ++;


}