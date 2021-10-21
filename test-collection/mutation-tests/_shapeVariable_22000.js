/* eslint-disable */

//const fail_all_tests = true;

tested_shapeVariable = 0;
failed_shapeVariable = 0;

 _shapeVariable_22001();
 _shapeVariable_22002();
 _shapeVariable_22003();
 _shapeVariable_22004();
 _shapeVariable_22005();
_shapeVariable_22006();
 _shapeVariable_22007();
 _shapeVariable_22008();

 total_fails += failed_shapeVariable;
 total_checks += tested_shapeVariable;

 if (show_random) {
  console.log('_shapeVariable failed tests 22000', failed_shapeVariable);
  console.log('_shapeVariable passed tests 22000', tested_shapeVariable);
}













function _shapeVariable_22001(){
  TYPE_CZECH_current_test_number = '22001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = 'test-test';                    // TEST TEST
  } else {
    check_object = 7;           // REAL TEST
  }
  check_type_shape =  'Number';
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech._shapeVariable(check_object, check_type_shape, 'TYPE-VERIFY');
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected = ""; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeVariable ++;
                                              }
                                              tested_shapeVariable ++;
}

















function _shapeVariable_22002(){
  TYPE_CZECH_current_test_number = '22002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = 'test-test';                    // TEST TEST
  } else {
    check_object = 8;           // REAL TEST
  }
  check_type_shape =  'String';
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech._shapeVariable(check_object, check_type_shape, 'TYPE-VERIFY');
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected = `TE@226 - The value '8', which is a 'Number', is not a 'String'`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeVariable ++;
                                              }
                                              tested_shapeVariable ++;
}

















function _shapeVariable_22003(){
  TYPE_CZECH_current_test_number = '22003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = 'test-test';                    // TEST TEST
  } else {
    check_object = [17];           // REAL TEST
  }
  check_type_shape =  ['Number'];
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech._shapeVariable(check_object, check_type_shape, 'TYPE-EXTRAS', type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected = ``; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeVariable ++;
                                              }
                                              tested_shapeVariable ++;
}
















function _shapeVariable_22004(){
  TYPE_CZECH_current_test_number = '22004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = 'test-test';                    // TEST TEST
  } else {
    check_object = [17];           // REAL TEST
  }
  check_type_shape =  ['Number'];
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech._shapeVariable(check_object, check_type_shape, 'TYPE-VERIFY', type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected = ``; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeVariable ++;
                                              }
                                              tested_shapeVariable ++;
}

















function _shapeVariable_22005(){
  TYPE_CZECH_current_test_number = '22005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [17];                    // TEST TEST
  } else {
    check_object =  [17, 'extra'];           // REAL TEST
  }
  check_type_shape =  ['Number'];
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech._shapeVariable(check_object, check_type_shape, 'TYPE-EXTRAS', type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected = `TE@215 - ELEMENT '1' is asserted to be a 'Number', but is fallaciously a 'String' : extra`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeVariable ++;
                                              }
                                              tested_shapeVariable ++;
}


















function _shapeVariable_22006(){
  TYPE_CZECH_current_test_number = '22006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [17];                    // TEST TEST
  } else {
    check_object =  [17, 'extra'];           // REAL TEST
  }
  check_type_shape =  ['Number'];
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech._shapeVariable(check_object, check_type_shape, 'TYPE-VERIFY', type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected = `TE@215 - ELEMENT '1' is asserted to be a 'Number', but is fallaciously a 'String' : extra`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeVariable ++;
                                              }
                                              tested_shapeVariable ++;
}













function _shapeVariable_22007(){
  TYPE_CZECH_current_test_number = '22007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = {age:'test-test',       old:false, extra:'superfluous'};                   // TEST TEST
  } else {
    check_object = {age:17,       old:false, extra:'superfluous'};           // REAL TEST
  }
  check_type_shape =  {age:'Number', old:'Boolean'};
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech._shapeVariable(check_object, check_type_shape, 'TYPE-EXTRAS');
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected = ``; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeVariable ++;
                                              }
                                              tested_shapeVariable ++;
}











function _shapeVariable_22008(){
  TYPE_CZECH_current_test_number = '22008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = {age:'test-test',       old:true, extra:'superfluous'};                   // TEST TEST
  } else {
    check_object = {age:18,       old:true, an_extra_key:'superfluous'};           // REAL TEST
  } 
  check_type_shape =  {age:'Number', old:'boolean'};
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech._shapeVariable(check_object, check_type_shape, 'TYPE-VERIFY');
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected = `TE@205 - The type 'boolean' is not a check_type type, but it looks just like 'Boolean'`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeVariable ++;
                                              }
                                              tested_shapeVariable ++;
}