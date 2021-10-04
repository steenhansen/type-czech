/* eslint-disable */

tested_empty = 0;
failed_empty = 0;

EmptyCheck_03001();
EmptyCheck_03002();
EmptyCheck_03003();
EmptyCheck_03004();
EmptyCheck_03005();
EmptyCheck_03006();
EmptyCheck_03007();
EmptyCheck_03008();
EmptyCheck_03009();

EmptyCheck_03010();
EmptyCheck_03011();
EmptyCheck_03012();
EmptyCheck_03013();
EmptyCheck_03014();
EmptyCheck_03015();
EmptyCheck_03016();
EmptyCheck_03017();
EmptyCheck_03018();
EmptyCheck_03019();

EmptyCheck_03020();
EmptyCheck_03021();
EmptyCheck_03022();
EmptyCheck_03023();
EmptyCheck_03024();
EmptyCheck_03025();
EmptyCheck_03026();
EmptyCheck_03027();
EmptyCheck_03028();
EmptyCheck_03029();

EmptyCheck_03030();
EmptyCheck_03031();
EmptyCheck_03032();
EmptyCheck_03033();
EmptyCheck_03034();
EmptyCheck_03035();
EmptyCheck_03036();
EmptyCheck_03037();
EmptyCheck_03038();
EmptyCheck_03039();

EmptyCheck_03040();
EmptyCheck_03041();
EmptyCheck_03042();
EmptyCheck_03043();
EmptyCheck_03044();
EmptyCheck_03045();
EmptyCheck_03046();
EmptyCheck_03047();
EmptyCheck_03048();
EmptyCheck_03049();

EmptyCheck_03050();
EmptyCheck_03051();

total_fails += failed_empty;
total_checks += tested_empty;

if (show_random) {
  console.log('empty failed tests 03000', failed_empty)
  console.log('empty passed tests 03000', tested_empty)
}

function EmptyCheck_03001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  "gasoline";
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;

  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;


}

function EmptyCheck_03002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = "";
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }
  TYPE_CZECH_current_test_number = '03002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_empty(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'String' must not be empty for the value ''`,
  `EMPTY-ERROR`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  17;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  NaN;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'Number' must not be empty for the value 'NaN'`,
  `EMPTY-ERROR`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  18;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-OK";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  18;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "MT-WRONG-b";           // REAL TEST
  }


  TYPE_CZECH_current_test_number = '03006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@11 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'MT-WRONG-b'`,
  `MT-WRONG-b`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  10;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  "gasoline";
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  "";
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'String' must not be empty for the value ''`,
  `EMPTY-ERROR`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  17;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03011(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  0;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03011';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03012(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  18;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape = ["EMPTY-OK"];           // REAL TEST // mirrors real world calling
  }

          
  TYPE_CZECH_current_test_number = '03012';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_empty(arguments, expected_emptys)`,
  `TC@49 - Comparing actual 'Number' parameter, with a value of "18", in relation to the expected shape of ["EMPTY-OK"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Number's. Or same object keys.`,
  `['EMPTY-OK']`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03013(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  18;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape = "MT-WRONG-c";           // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03013';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@11 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'MT-WRONG-c'`,
  `MT-WRONG-c`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03014(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {str:"a-string"};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:"EMPTY-ERROR"};          // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03014';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03015(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =   {str:""};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:"EMPTY-ERROR"};          // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03015';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@08 - 'str' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.`,
  `{str:"EMPTY-ERROR"}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03016(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {numx:17};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {numx:"EMPTY-ERROR"};          // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03016';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
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
                        failed_empty ++;
                      }
                      tested_empty ++;

}


function EmptyCheck_03017(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {numx:0};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {numx:"EMPTY-ERROR"};          // REAL TEST
  }


  TYPE_CZECH_current_test_number = '03017';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
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
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03018(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {numx:NaN};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {numx:"EMPTY-ERROR"};          // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03018';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@08 - 'numx' is a 'Number' which is reputed to be 'EMPTY-ERROR' but has a value of NaN.`,
  `{numx:"EMPTY-ERROR"}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03019(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {num_y:18};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {num_y:"EMPTY-OK"};         // REAL TEST
  }


  TYPE_CZECH_current_test_number = '03019';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
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
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03020(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {num_q: 18};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {num_q:"MT-WRONG-d"};         // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03020';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@10 - bad incheck_type key 'MT-WRONG-d', must be either EMPTY-OK -ER -IG`,
  `{num_q:"MT-WRONG-d"}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03021(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {num_JJ:18};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {num_y:"EMPTY-OK"};        // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03021';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@27 - Extra key in checked object - (num_JJ:'18')TC@46 -  The key 'num_y', which has a type of 'EMPTY-OK', is missing in the checked object`,
  `{num_y:"EMPTY-OK"}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03022(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {str:["gasoline"]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:["EMPTY-ERROR"]};        // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03022';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03023(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {str:[""]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:["EMPTY-ERROR"]};        // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03023';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@30 - ELEMENT '0' is erroneously empty :`,
  `{str:["EMPTY-ERROR"]}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03024(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {str:[17]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:["EMPTY-ERROR"]};        // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03024';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03025(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {str:[0]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:["EMPTY-ERROR"]};        // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03025';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03026(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {str:[NaN]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:["EMPTY-ERROR"]};        // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03026';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@30 - ELEMENT '0' is erroneously empty :`,
  `{str:["EMPTY-ERROR"]}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03027(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =   {str:[18]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:["EMPTY-OK"]};        // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03027';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03028(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =   {str:[18]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:["MT-WRONG-e"]};       // REAL TEST
  }


  TYPE_CZECH_current_test_number = '03028';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@32 - ELEMENT '0' is incorrect  type, 'MT-WRONG-e', only [EM-ER, EMPTY-ERROR, EMPTY-OK, EM-OK, EMPTY-IGNORE, EM-IG] allowed  : [18]`,
  `{str:["MT-WRONG-e"]}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03029(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {str:"a-string"};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:"EMPTY-ERROR"};      // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03029';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03030(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {str:""};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {str:"EMPTY-ERROR"};      // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03030';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@08 - 'str' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.`,
  `{str:"EMPTY-ERROR"}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03031(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {numx:17};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {numx:"EMPTY-ERROR"};      // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03031';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03032(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {numx:0};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {numx:"EMPTY-ERROR"};      // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03032';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03033(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {num_y:18};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {num_y:"EMPTY-OK"};     // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03033';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03034(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {num_q: 18};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {num_q:"MT-WRONG-a"};     // REAL TEST
  }
 
  TYPE_CZECH_current_test_number = '03034';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@10 - bad incheck_type key 'MT-WRONG-a', must be either EMPTY-OK -ER -IG`,
  `{num_q:"MT-WRONG-a"}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03035(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  {num_JJ:18};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {num_y:"EMPTY-OK"};     // REAL TEST
  }
  
  TYPE_CZECH_current_test_number = '03035';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_empty(arguments, expected_emptys)`,
  `TC@27 - Extra key in checked object - (num_JJ:'18')TC@46 -  The key 'num_y', which has a type of 'EMPTY-OK', is missing in the checked object`,
  `{num_y:"EMPTY-OK"}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03036(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {0: [{num_TTTTTTT:18}], length:1};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  [{num_iiiii:"EMPTY-OK"}];    // REAL TEST  
  }
 
  TYPE_CZECH_current_test_number = '03036';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_empty(arguments, expected_emptys)`,
  `TC@27 - Extra key in checked object - (num_TTTTTTT:'18')TC@46 -  The key 'num_iiiii', which has a type of 'EMPTY-OK', is missing in the checked object`,
  `[{num_iiiii:"EMPTY-OK"}]`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03037(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  [{str:"a-string", num:17}, {str:"a-string", num:17}];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  [{str:"EMPTY-ERROR", num:"EMPTY-OK"}, {str:"EMPTY-ERROR", num:"EMPTY-OK"}];    // REAL TEST
  }
  
  TYPE_CZECH_current_test_number = '03037';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03038(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [["a-string", 17],          ["a-string", 17]];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  "EMPTY-ERROR";                    // TEST TEST
  } else {
    check_type_shape =  [["EMPTY-ERROR", "EMPTY-OK"], ["EMPTY-ERROR", "EMPTY-OK"]];    // REAL TEST
  }
  
  TYPE_CZECH_current_test_number = '03038';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03039(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {one:{str:"a-string", num:17}, two:{str:"a-string", num:17}};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape = {one:{str:"EMPTY-ERROR", num:"EMPTY-OK"}, two:{str:"EMPTY-ERROR", num:"EMPTY-OK"}};    // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03039';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03040(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {three:["a-string", 17],          four:["a-string", 17]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  {three:["EMPTY-ERROR", "EMPTY-OK"], four:["EMPTY-ERROR", "EMPTY-OK"]};   // REAL TEST
  }

  
  TYPE_CZECH_current_test_number = '03040';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03041(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [["a-string", "b-string", "c-string"], ["a-string", "b-string", "c-string"]];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  "EMPTY-ERROR";                    // TEST TEST
  } else {
    check_type_shape =  [["EMPTY-ERROR"], ["EMPTY-OK"]];   // REAL TEST
  }
 
  TYPE_CZECH_current_test_number = '03041';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03042(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [["a-string", "b-string", "c-string"], ["x-string",  "y-string", "z-string"]];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  "EMPTY-ERROR";                    // TEST TEST
  } else {
    check_type_shape =  [["EMPTY-ERROR"],                         ["EMPTY-OK", "EMPTY-ERROR", "EMPTY-ERROR"]];   // REAL TEST
  }
  
  TYPE_CZECH_current_test_number = '03042';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03043(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[1,2,3,4], ['a', 'b', 'c', 'd']]; 
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  "EMPTY-ERROR";                    // TEST TEST
  } else {
    check_type_shape =  [ ["EMPTY-ERROR"], ["EMPTY-ERROR"]];   // REAL TEST
  }
 
  TYPE_CZECH_current_test_number = '03043';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03044(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = ['a', 1]; 
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  [ "EMPTY-ERROR", "EMPTY-ERROR"];  // REAL TEST
  }
 
  TYPE_CZECH_current_test_number = '03044';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03045(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  //check_object = [1,2,3]; 
  check_object = {0:['a', 'b', 'c'], length:1};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  [ "EMPTY-ERROR"];  // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03045';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03046(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = 'a-string'; 
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =   "EMPTY-ERROR";  // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03046';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03047(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =   "EMPTY-ERROR";  // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03047';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_empty(arguments, expected_emptys)`,
  `TC@54 - There are no parameters.`,
  `EMPTY-ERROR`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03048(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[]];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =   "EMPTY-ERROR";  // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03048';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ['check_empty(arguments, expected_emptys)',
  "TC@24 - EMPTY-ERROR states 'Array' must not be empty for the value ''",
  'EMPTY-ERROR'];
  
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03049(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {0:[{}], length:1} ;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =   "EMPTY-ERROR";  // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03049';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
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
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03050(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  [['a', 'b', 'c']];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  ["EMPTY-ERROR"]; // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03050';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}

function EmptyCheck_03051(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  [{a:99}];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  [["EMPTY-ERROR"]];                    // TEST TEST
  } else {
    check_type_shape =  "EMPTY-ERROR"; // REAL TEST
  }

  TYPE_CZECH_current_test_number = '03051';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_empty(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_empty ++;
                      }
                      tested_empty ++;

}


