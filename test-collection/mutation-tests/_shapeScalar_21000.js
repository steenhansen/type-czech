/* eslint-disable */

//const fail_all_tests = true;

tested_shapeScalar = 0;
failed_shapeScalar = 0;

_shapeScalar_21001();
_shapeScalar_21002();
_shapeScalar_21003();
_shapeScalar_21004();
_shapeScalar_21005();
_shapeScalar_21006();
_shapeScalar_21007();
_shapeScalar_21008();

total_fails += failed_shapeScalar;
total_checks += tested_shapeScalar;

if (show_random) {
  console.log('_shapeScalar failed tests 21000', failed_shapeScalar);
  console.log('_shapeScalar passed tests 21000', tested_shapeScalar);
}

function _shapeScalar_21001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_variable =  12;                     // TEST TEST
  } else {
    check_variable =  true;               // REAL TEST
  } 
  check_type_type =  "Boolean" ; 
  before_str = beforeCheck(check_variable, check_type_type);  
  actual = type_czech._shapeScalar(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected = ""; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

            if (actual !== expected) {
              failed_shapeScalar ++;
            }
            tested_shapeScalar ++;
}

function _shapeScalar_21002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_variable =  false;                     // TEST TEST
  } else {
    check_variable =   "my-string";              // REAL TEST
  } 
  check_type_type =  "Boolean" ;   
  before_str = beforeCheck(check_variable, check_type_type);  
  actual = type_czech._shapeScalar(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected = `TE@226 - The value 'my-string', which is a 'String', is not a 'Boolean'`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

            if (actual !== expected) {
              failed_shapeScalar ++;
            }
            tested_shapeScalar ++;

}

function _shapeScalar_21003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_variable =  false;                     // TEST TEST
  } else {
    check_variable =   123;              // REAL TEST
  } 
  check_type_type =  "Number" ;   
  before_str = beforeCheck(check_variable, check_type_type);  
  actual = type_czech._shapeScalar(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected = ``; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

            if (actual !== expected) {
              failed_shapeScalar ++;
            }
            tested_shapeScalar ++;

}

function _shapeScalar_21004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_variable =  false;                     // TEST TEST
  } else {
    check_variable =    new Date;             // REAL TEST
  } 
  check_type_type =  "Date" ;    
  before_str = beforeCheck(check_variable, check_type_type);  
  actual = type_czech._shapeScalar(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected = ``; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

            if (actual !== expected) {
              failed_shapeScalar ++;
            }
            tested_shapeScalar ++;

}

function _shapeScalar_21005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_variable =  false;                     // TEST TEST
  } else {
    check_variable =   "a-string";             // REAL TEST
  }
  check_type_type =  "String" ;    
  before_str = beforeCheck(check_variable, check_type_type);  
  actual = type_czech._shapeScalar(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected = ``; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

            if (actual !== expected) {
              failed_shapeScalar ++;
            }
            tested_shapeScalar ++;

}

function _shapeScalar_21006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  "a-string";    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_type =  "String" ;                   // TEST TEST
  } else {
    check_type_type =  "does-not_exist" ;           // REAL TEST
  }

  before_str = beforeCheck(check_variable, check_type_type);  
  actual = type_czech._shapeScalar(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected = `TE@230 - The type 'does-not_exist' is invalid`; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

            if (actual !== expected) {
              failed_shapeScalar ++;
            }
            tested_shapeScalar ++;

}

function _shapeScalar_21007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_variable =  false;                     // TEST TEST
  } else {
    check_variable =   [];             // REAL TEST
  }
  check_type_type =  "Array" ;  
  before_str = beforeCheck(check_variable, check_type_type);  
  actual = type_czech._shapeScalar(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected = ``; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

            if (actual !== expected) {
              failed_shapeScalar ++;
            }
            tested_shapeScalar ++;

}

function _shapeScalar_21008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_variable =  false;                     // TEST TEST
  } else {
    check_variable =  {};             // REAL TEST
  }
  check_type_type =  "Object" ;    
  before_str = beforeCheck(check_variable, check_type_type);  
  actual = type_czech._shapeScalar(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected = ``; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

            if (actual !== expected) {
              failed_shapeScalar ++;
            }
            tested_shapeScalar ++;

}

