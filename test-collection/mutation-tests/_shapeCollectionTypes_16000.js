/* eslint-disable */

//const fail_all_tests = true;

tested_shapeCollectionTypes = 0;
failed_shapeCollectionTypes = 0;

_shapeCollectionTypes_16001();
_shapeCollectionTypes_16002();
_shapeCollectionTypes_16003();

total_fails += failed_shapeCollectionTypes;
total_checks += tested_shapeCollectionTypes;

if (show_random) {
  console.log('_shapeCollectionTypes failed tests 16000', failed_shapeCollectionTypes);
  console.log('_shapeCollectionTypes passed tests 16000', tested_shapeCollectionTypes);
}

function _shapeCollectionTypes_16001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '16001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    check_object =  { r: 11 };              // REAL TEST
  }

  object_shape =  { r: "Number" }      
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_object, object_shape);
  actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  expected = ""; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeCollectionTypes ++;
                                              }
                                              tested_shapeCollectionTypes ++;
}

function _shapeCollectionTypes_16002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '16002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    check_object =  { r: 11, u:"illegal" };              // REAL TEST
  }

    
  object_shape =  { r: "Number" }      
  exact_shape = 'TYPE-VERIFY';
  before_str = beforeCheck(check_object, object_shape);
  actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  expected = `TC@39 - Extra key in checked object - (u:'illegal')`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeCollectionTypes ++;
                                              }
                                              tested_shapeCollectionTypes ++;
}

function _shapeCollectionTypes_16003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '16003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    check_object = { r: 11, qwe:null};              // REAL TEST
  }
  object_shape =  { r: "Number", qwe:"Object" } 
  exact_shape = 'TYPE-VERIFY';
  before_str = beforeCheck(check_object, object_shape);
  actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  expected = `TC@42 - Key 'qwe' was determined to be a 'Object' but was instead 'null'`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_shapeCollectionTypes ++;
                                              }
                                              tested_shapeCollectionTypes ++;
}