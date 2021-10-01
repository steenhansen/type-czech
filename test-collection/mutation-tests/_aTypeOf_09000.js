/* eslint-disable */

//const fail_all_tests = true;

tested_a_type_of = 0;
failed_a_type_of = 0;

_aTypeOf_09001();
_aTypeOf_09002();
_aTypeOf_09003();
_aTypeOf_09004();

_aTypeOf_09005();

_aTypeOf_09006();
_aTypeOf_09007();

_aTypeOf_09008();
_aTypeOf_09009();
_aTypeOf_09010();

total_fails += failed_a_type_of;
total_checks += tested_a_type_of;
if (show_random) {
  console.log('_aTypeOf failed tests 09000', failed_a_type_of)
  console.log('_aTypeOf passed tests 09000', tested_a_type_of)
}

function _aTypeOf_09001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 1;                      // TEST TEST
  } else {
    a_variable = null;         // REAL TEST
  }
        
  actual = type_czech._aTypeOf(a_variable);
  expected = 'null';

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;
}

function _aTypeOf_09002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 1;                      // TEST TEST
  } else {
    a_variable = undefined;          // REAL TEST
  }
       
  actual = type_czech._aTypeOf(a_variable);
  expected = 'undefined';

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;
}

function _aTypeOf_09003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 1;                      // TEST TEST
  } else {
    a_variable =  new Date;           // REAL TEST
  }

 
  actual = type_czech._aTypeOf(a_variable);
  expected = 'Date';

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;

}

function _aTypeOf_09004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 1;                      // TEST TEST
  } else {
    a_variable =  [];           // REAL TEST
  }



  actual = type_czech._aTypeOf(a_variable);
  expected = 'Array';

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;

}

function _aTypeOf_09005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 1;                      // TEST TEST
  } else {
    a_variable =  {};           // REAL TEST
  }

  actual = type_czech._aTypeOf(a_variable);
  expected ="Object";

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;

}

function _aTypeOf_09006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 1;                      // TEST TEST
  } else {
    a_variable =   'a_string';            // REAL TEST
  }

  actual = type_czech._aTypeOf(a_variable);
  expected ="String";

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;

}

function _aTypeOf_09007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 'asd';                      // TEST TEST
  } else {
    a_variable =  567;            // REAL TEST
  }
  actual = type_czech._aTypeOf(a_variable);
  expected ="Number";

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;

}

function _aTypeOf_09008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 'asd';                      // TEST TEST
  } else {
    a_variable =  false;            // REAL TEST
  }


  actual = type_czech._aTypeOf(a_variable);
  expected ="Boolean";

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;

}

function _aTypeOf_09009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 'asd';                      // TEST TEST
  } else {
    a_variable =   Symbol('a_symbol');             // REAL TEST
  }


  actual = type_czech._aTypeOf(a_variable);
  expected ="Symbol";

  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;

}

function _aTypeOf_09010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 'asd';                      // TEST TEST
  } else {
    a_variable =  function(){};              // REAL TEST
  }



  actual = type_czech._aTypeOf(a_variable);
  expected ="Function";


  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_a_type_of ++;
                                              }
                                              tested_a_type_of ++;
}


