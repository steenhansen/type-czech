/* eslint-disable */

//const fail_all_tests = true;

tested_isEmpty = 0;
failed_isEmpty = 0;

_isEmpty_11001();
_isEmpty_11002();
_isEmpty_11003();
_isEmpty_11004();
_isEmpty_11005();
_isEmpty_11006();
_isEmpty_11007();
_isEmpty_11008();
_isEmpty_11009();
_isEmpty_11010();
_isEmpty_11011();
_isEmpty_11012();
_isEmpty_11013();
_isEmpty_11014();

total_fails += failed_isEmpty;
total_checks += tested_isEmpty;

if (show_random) {
  console.log('_missingKey failed tests 11000', failed_isEmpty)
  console.log('_missingKey passed tests 11000', tested_isEmpty)
}
function _isEmpty_11001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = '';                   // TEST TEST
  } else {
    a_var = new Date('12/12/2014');          // REAL TEST
  }
  
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;

}

function _isEmpty_11002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = '';                   // TEST TEST
  } else {
    a_var = new Date(1);          // REAL TEST
  }
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = '';                   // TEST TEST
  } else {
    a_var = false;          // REAL TEST
  }
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = '';                   // TEST TEST
  } else {
    a_var = 1;          // REAL TEST
  }

  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;

}

function _isEmpty_11005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = '';                   // TEST TEST
  } else {
    a_var = 'x';          // REAL TEST
  }


  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = 'a';                   // TEST TEST
  } else {
    a_var = new Date('foo-bar 014');           // REAL TEST
  }


  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = 'a';                   // TEST TEST
  } else {
    a_var = new Date('23/25/2014');           // REAL TEST
  }


  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}


function _isEmpty_11008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = 'asd';                   // TEST TEST
  } else {
    a_var = '';           // REAL TEST
  }
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = 'asd';                   // TEST TEST
  } else {
    a_var = {};           // REAL TEST
  }


  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = 'asd';                   // TEST TEST
  } else {
    a_var = [];           // REAL TEST
  }


  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11011(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11011';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = 'asd';                   // TEST TEST
  } else {
    a_var = null;           // REAL TEST
  }


  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11012(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11012';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = 'asd';                   // TEST TEST
  } else {
    a_var = undefined;           // REAL TEST
  }
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;


}

function _isEmpty_11013(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11013';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = 'asd';                   // TEST TEST
  } else {
    a_var = NaN;           // REAL TEST
  }

  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;

}

function _isEmpty_11014(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11014';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = '';                   // TEST TEST
  } else {
    a_var = 0;           // REAL TEST
  }


  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_isEmpty ++;
                                              }
                                              tested_isEmpty ++;

}

