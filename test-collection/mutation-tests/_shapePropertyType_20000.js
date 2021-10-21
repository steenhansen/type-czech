/* eslint-disable */

//const fail_all_tests = true;

tested_shapePropertyType = 0;
failed_shapePropertyType = 0;

_shapePropertyType_20001();
_shapePropertyType_20002();
_shapePropertyType_20003();
_shapePropertyType_20004();

total_fails += failed_shapePropertyType;
total_checks += tested_shapePropertyType;

if (show_random) {
  console.log('_shapePropertyType failed tests 20000', failed_shapePropertyType);
  console.log('_shapePropertyType passed tests 20000', tested_shapePropertyType);
}

function _shapePropertyType_20001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '20001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  property_type = { jxy:"Number"};    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    property_key = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    property_key ="jxy";         // REAL TEST
  }
  check_variable = 987;
  before_str = beforeCheck(property_type, property_key);
  actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  expected = ""; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapePropertyType ++;
                                              }
                                              tested_shapePropertyType ++;
}


function _shapePropertyType_20002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '20002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  property_type = { jxy:"Number"};    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    property_key = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    property_key ="jxy";         // REAL TEST
  }
  check_variable = undefined;
  before_str = beforeCheck(property_type, property_key);
  actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  expected = `TE@211 - Key 'jxy' was given to be a 'Number' but was instead 'undefined'`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapePropertyType ++;
                                              }
                                              tested_shapePropertyType ++;
}

function _shapePropertyType_20003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '20003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  property_type = { jxy:"Number"};    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    property_key = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    property_key ="jxy";         // REAL TEST
  }
  check_variable = null;
  before_str = beforeCheck(property_type, property_key);
  actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  expected = `TE@212 - Key 'jxy' was determined to be a 'Number' but was instead 'null'`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapePropertyType ++;
                                              }
                                              tested_shapePropertyType ++;
}

function _shapePropertyType_20004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '20004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  property_type = { jxy:"String"};    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    property_key = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    property_key ="jxy";         // REAL TEST
  }
  check_variable = 567;
  before_str = beforeCheck(property_type, property_key);
  actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  expected = `TE@213 - Property 'jxy' is indicated to be a 'String', but is inaccurately a 'Number' : 567`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapePropertyType ++;
                                              }
                                              tested_shapePropertyType ++;
}