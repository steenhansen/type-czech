/* eslint-disable */

tested_check_typeEither = 0;
failed_check_typeEither = 0;


check_typeEither_07001();
check_typeEither_07002();
 check_typeEither_07003();
 check_typeEither_07004();
 check_typeEither_07005();
 check_typeEither_07006();
 check_typeEither_07007();

total_fails += failed_check_typeEither;
total_checks += tested_check_typeEither;


if (show_random) {
  console.log('check_typeEither failed tests 07000', failed_check_typeEither)
  console.log('check_typeEither passed tests 07000', tested_check_typeEither)
}
function check_typeEither_07001(){
  TYPE_CZECH_current_test_number = '07001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {};    
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
      check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
  } else {
    check_type_shape =  {a:1};           // REAL TEST
  }
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech.check_typeEither(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = `TC@15 - TypeCzech.check_typeEither() called with a second parameter as a non-array shape of {'a':1}`;  
  actual_str = arrayErrorToString(actual);
  expected_str = arrayErrorToString(expected_array);
   if (actual_str !== expected_str) {
     console.log(error_id);
     console.log('  actual=', actual_str);
     console.log('expected=', expected_str);
     }
     no_console_mess = '';
   
                                               if (actual_str !== expected_str) {
                                                 failed_check_typeEither ++;
                                               }
                                               tested_check_typeEither ++;




}

function check_typeEither_07002(){
  TYPE_CZECH_current_test_number = '07002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = 177;
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  ["String"];         // REAL TEST
}

  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech.check_typeEither(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = `TC@50 - TypeCzech.check_typeEither()  needs at least 2 choices for a union, not 1 of ['String']`;

  actual_str = arrayErrorToString(actual);
  expected_str = arrayErrorToString(expected_array);
   if (actual_str !== expected_str) {
     console.log(error_id);
     console.log('  actual=', actual_str);
     console.log('expected=', expected_str);
     }
     no_console_mess = '';
   
                                               if (actual_str !== expected_str) {
                                                 failed_check_typeEither ++;
                                               }
                                               tested_check_typeEither ++;
}

function check_typeEither_07003(){
  TYPE_CZECH_current_test_number = '07003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:1,         b:{c:2} } ;
  type_a       = {a:"Number",  b:{c:"Number"}};
  type_b       = {a:"Number",  b:{c:"String"}};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  [type_a, type_b];         // REAL TEST
}
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech.check_typeEither(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =``;

  actual_str = arrayErrorToString(actual);
 expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
    }
    no_console_mess = '';
  
                                              if (actual_str !== expected_str) {
                                                failed_check_typeEither ++;
                                              }
                                              tested_check_typeEither ++;
}

function check_typeEither_07004(){
  TYPE_CZECH_current_test_number = '07004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:1,         b:{c:'d'} } ;
  type_a       = {a:"Number",  b:{c:"Number"}};
  type_b       = {a:"Number",  b:{c:"String"}};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  [type_a, type_b];         // REAL TEST
}
  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech.check_typeEither(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =``;

  actual_str = arrayErrorToString(actual);
  expected_str = arrayErrorToString(expected_array);
   if (actual_str !== expected_str) {
     console.log(error_id);
     console.log('  actual=', actual_str);
     console.log('expected=', expected_str);
     }
     no_console_mess = '';
   
                                               if (actual_str !== expected_str) {
                                                 failed_check_typeEither ++;
                                               }
                                               tested_check_typeEither ++;
}

function check_typeEither_07005(){
  TYPE_CZECH_current_test_number = '07005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:1,         b:{c:false} } ;
  type_a       = {a:"Number",  b:{c:"Number"}};
  type_b       = {a:"Number",  b:{c:"String"}};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  [type_a, type_b];         // REAL TEST
}


  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech.check_typeEither(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_typeEither(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'String', but is inaccurately a 'Boolean' : false`,
  `[{'a':'Number','b':{'c':'Number'}},{'a':'Number','b':{'c':'String'}}]`];
  actual_str = arrayErrorToString(actual);
  expected_str = arrayErrorToString(expected_array);
   if (actual_str !== expected_str) {
     console.log(error_id);
     
     console.log('  actual=', actual_str);
     console.log('expected=', expected_str);
     }
     no_console_mess = '';
   
                                               if (actual_str !== expected_str) {
                                                 failed_check_typeEither ++;
                                               }
                                               tested_check_typeEither ++;
}


function check_typeEither_07006(){
  TYPE_CZECH_current_test_number = '07006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {v_1:"hi",      v_2:false,     v_extra:"more than this"};
  type_a       = {v_1:"String",  v_2:"Boolean"};
  type_b       = {v_1:"String",  v_2:"Number"};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  [type_a, type_b];         // REAL TEST
}


  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech.check_typeEither(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_typeEither(arguments, expected_types)`,
  `TC@43 - Property 'v_2' is indicated to be a 'Number', but is inaccurately a 'Boolean' : falseTC@39 - Extra key in checked object - (v_extra:'more than this')`,
  `[{'v_1':'String','v_2':'Boolean'},{'v_1':'String','v_2':'Number'}]`];

  actual_str = arrayErrorToString(actual);
 expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
    }
    no_console_mess = '';
  
                                              if (actual_str !== expected_str) {
                                                failed_check_typeEither ++;
                                              }
                                              tested_check_typeEither ++;
}


function check_typeEither_07007(){
  TYPE_CZECH_current_test_number = '07007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {inner_1:[{g:new Date}]};
  type_a       = {inner_1:[{g:"Number"}]};
  type_b       = {inner_1:[{g:"String"}]};
  type_c       = {inner_1:[{g:"Date"}]}; 
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  [type_a, type_b, type_c];         // REAL TEST
}

  before_str = beforeCheck(check_object, check_type_shape);
  actual = type_czech.check_typeEither(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;

  
 actual_str = arrayErrorToString(actual);
 expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
    }
    no_console_mess = '';
  
                                              if (actual_str !== expected_str) {
                                                failed_check_typeEither ++;
                                              }
                                              tested_check_typeEither ++;

                                              

}