/* eslint-disable */

tested_check_type = 0;

failed_check_type = 0;

check_type_05001();
check_type_05002();
check_type_05003();
check_type_05004();
check_type_05005();
check_type_05006();
check_type_05007();
check_type_05008();
check_type_05009();

check_type_05010();
check_type_05011();
check_type_05012();
check_type_05013();
check_type_05014();
check_type_05015();
check_type_05016();
check_type_05017();
check_type_05018();

total_fails += failed_check_type;
total_checks += tested_check_type;

if (show_random) {
console.log('check_type failed tests 05000', failed_check_type);
console.log('check_type passed tests 05000', tested_check_type);
}

function check_type_05001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {cylinders:4, fuel:"gasoline", sneak:"extra"} ;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape =  {cylinders:"Number", fuel:"String"};          // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_type(arguments, expected_types)`,
  `TC@39 - Extra key in checked object - (sneak:'extra')`,
  `{'cylinders':'Number','fuel':'String'}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;
}

function check_type_05002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape =  'Object';         // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[]]; 
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape =  'Array';         // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
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
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {0:[{}], length:1};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape =  'Array';         // REAL TEST
  }


  TYPE_CZECH_current_test_number = '05004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array ='';
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {0:[{}], length:1};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape =  'Object';         // REAL TEST
  }


  TYPE_CZECH_current_test_number = '05005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_type(arguments, expected_types)`,
   `The variable '[]', which is a 'Array', is not a 'Object'`,
   `Object`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {x:[{y:'z'}]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape = {x:[{y:'String'}]};       // REAL TEST
  }


  
  TYPE_CZECH_current_test_number = '05006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {x:[{y:'z'}]};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape = {x:[{y:'String'}]};       // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {cylinders:4, fuel:"gasoline", sneak:"extra"};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape = {cylinders:"Number", fuel:"String"};       // REAL TEST
  }


  TYPE_CZECH_current_test_number = '05008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_type(arguments, expected_types)`,
  `TC@39 - Extra key in checked object - (sneak:'extra')`,
  `{'cylinders':'Number','fuel':'String'}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = null;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape =  'null';      // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_type(arguments, expected_types)`,
  `TC@17 - The type 'null' is not a check_type type`,
  `null`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = null;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape =  'null';      // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_type(arguments, expected_types)`,
  `TC@17 - The type 'null' is not a check_type type`,
  `null`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05011(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_shape =  { a: [ { b:[ {c:'String'} ] } ], z: 'null'};      // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05011';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_type(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_type(arguments, expected_types)`,
  `TC@40 - The type 'null' is not check_type`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'null'}`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05012(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  //check_variable = ['a-string'];  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  check_variable = {0:['a-string'], length:1};  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_type =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_type =  'String';     // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05012';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, check_type_type);
  actual_array = type_czech.check_type(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected_array =['check_type(arguments, expected_types)',
"The variable '[]', which is a 'Array', is not a 'String'",
'String']
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05013(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = [['a-string']];   // this is the arguments[0]==['a-string'], thus we check ['a-string'] not [[a-string]]
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_type =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_type =  'String';     // REAL TEST
  }
  TYPE_CZECH_current_test_number = '05013';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, check_type_type);
  actual_array = type_czech.check_type(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected_array =[`check_type(arguments, expected_types)`,
  `The variable '[]', which is a 'Array', is not a 'String'`,
  `String`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05014(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = 'a-string';  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_type =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_type =  ['String'];     // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05014';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, check_type_type);
  actual_array = type_czech.check_type(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected_array =[`check_type(arguments, expected_types)`,
  `TC@49 - Comparing actual 'String' parameter, with a value of "a-string", in relation to the expected shape of ["String"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's. Or same object keys.`,
  `['String']`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05015(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = 'a-string';  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_type =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_type =  'String';     // REAL TEST
  }

  TYPE_CZECH_current_test_number = '05015';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, check_type_type);
  actual_array = type_czech.check_type(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected_array =``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05016(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = [1,2,3]; 
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_type =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_type =   ['Number'];    // REAL TEST
  }

TYPE_CZECH_current_test_number = '05016';
error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, check_type_type);
  actual_array = type_czech.check_type(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected_array = '';
  // expected_array =[`check_type(arguments, expected_types)`,
  // `TC@03 - Use check_variadicType([1,2,3], ['Number']) instead of check_type()`,
  // `['Number']`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;
}

function check_type_05017(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = ['a', 1]; 
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_type =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_type =  ['String', 'Number'];    // REAL TEST
  }

  
  TYPE_CZECH_current_test_number = '05017';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, check_type_type);
  actual_array = type_czech.check_type(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected_array =``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;

}

function check_type_05018(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = [[1,2,3,4], ['a', 'b', 'c', 'd']];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_type =  {wings:"String", wheels:"Symbol"};                    // TEST TEST
  } else {
    check_type_type =  [ ['Number'], ['String'] ];   // REAL TEST
  } 

  TYPE_CZECH_current_test_number = '05018';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, check_type_type);
  actual_array = type_czech.check_type(check_variable, check_type_type);
  afterCheck(check_variable, check_type_type, before_str, error_id);
  expected_array =``;


  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_type ++;
                      }
                      tested_check_type ++;


 

}

