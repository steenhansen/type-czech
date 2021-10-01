/* eslint-disable */

//const fail_all_tests = true;

tested_check_emptyExtra = 0;
failed_check_emptyExtra = 0;

check_emptyExtra_30001();
check_emptyExtra_30002();
check_emptyExtra_30003();
check_emptyExtra_30004();


total_fails += failed_check_emptyExtra;
total_checks += tested_check_emptyExtra;

if (show_random) {
  console.log('check_emptyExtra failed tests 30000', failed_check_emptyExtra)
  console.log('check_emptyExtra passed tests 30000', tested_check_emptyExtra)
}

function check_emptyExtra_30001(){
  TYPE_CZECH_current_test_number = '30001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [12, '', false];                   // TEST TEST
  } else {
    check_object = [12, 'a-string', false];           // REAL TEST
  }
  check_type_shape = ['EMPTY-ERROR', 'EMPTY-ERROR'];
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_emptyExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = '';
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
  console.log(error_id);
  console.log('  actual=', actual_str);
  console.log('expected=', expected_str);
  }
  no_console_mess = '';

                                            if (actual_str !== expected_str) {
                                              failed_check_emptyExtra ++;
                                            }
                                            tested_check_emptyExtra ++;
}

function check_emptyExtra_30002(){
  TYPE_CZECH_current_test_number = '30002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [  1234, '', ['not-empty'], {a:''}  ];                    // TEST TEST
  } else {
    check_object = [  1234, 'not-empty', ['not-empty'], {a:''}  ];           // REAL TEST
  }
  check_type_shape = ['EMPTY-ERROR', 'EMPTY-ERROR'];
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_emptyExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = '';
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
  console.log(error_id);
  console.log('  actual=', actual_str);
  console.log('expected=', expected_str);
  }
  no_console_mess = '';

                        if (actual_str !== expected_str) {
                          failed_check_emptyExtra ++;
                        }
                        tested_check_emptyExtra ++;
}

function check_emptyExtra_30003(){
  
  TYPE_CZECH_current_test_number = '30003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [12, 'asd', 'extra-1', 'extra-2'];                    // TEST TEST
  } else {
    check_object = [12, '', 'extra-1', 'extra-2'];           // REAL TEST
  }
  check_type_shape = ['EMPTY-ERROR', 'EMPTY-ERROR'];
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_emptyExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ["check_emptyExtra(arguments, expected_emptys)",
                    "TC@30 - ELEMENT '1' is erroneously empty :",
                    [ "EMPTY-ERROR", "EMPTY-ERROR" ]                          ];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_emptyExtra ++;
                      }
                      tested_check_emptyExtra ++;
}

function check_emptyExtra_30004(){
  
  TYPE_CZECH_current_test_number = '30004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object = [  1234, 'not-empty', ['test-test'], {a:1}  ];                    // TEST TEST
  } else {
    check_object = [  1234, '', ['not-empty'], {}  ];           // REAL TEST
  }
  check_type_shape = ['EMPTY-ERROR', 'EMPTY-ERROR'];
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_emptyExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ["check_emptyExtra(arguments, expected_emptys)",
                    "TC@30 - ELEMENT '1' is erroneously empty :",
                    ["EMPTY-ERROR", "EMPTY-ERROR"]                       ];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_emptyExtra ++;
                      }
                      tested_check_emptyExtra ++;
}

///////////////////
/*

if (actual !== expected) {
  console.log(error_id);
  console.log('  actual=', actual);
  console.log('expected=', expected);
  }
  no_console_mess = '';

                                            if (actual !== expected) {
                                              failed_check_emptyExtra ++;
                                            }
                                            tested_check_emptyExtra ++;

////////////////////

if (!was_exception) {
  console.log(error_id);
  console.log('  actual=', 'No Exception');
  console.log('expected=', 'Exception');
  }
  no_console_mess = '';

                                            if (!was_exception) {
                                              failed_check_emptyExtra ++;
                                            }
                                            tested_check_emptyExtra ++;




 actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_emptyExtra ++;
                      }
                      tested_check_emptyExtra ++;













                                            */