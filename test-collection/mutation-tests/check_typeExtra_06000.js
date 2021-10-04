/* eslint-disable */



tested_check_typeExtra = 0;
failed_check_typeExtra = 0;




check_typeExtra_06001();
check_typeExtra_06002();
check_typeExtra_06003();
check_typeExtra_06004();
check_typeExtra_06005();
check_typeExtra_06006();
check_typeExtra_06007();
check_typeExtra_06008();
check_typeExtra_06009();

check_typeExtra_06010();



//check_typeExtra_06027();
check_typeExtra_06028();
//check_typeExtra_06029();

//check_typeExtra_06030();
//check_typeExtra_06031();
//check_typeExtra_06032();
//check_typeExtra_06033();
//check_typeExtra_06034();
//check_typeExtra_06035();
//check_typeExtra_06036();





// check_typeExtra_06049();
// check_typeExtra_06050();
// check_typeExtra_06051();
// check_typeExtra_06052();



check_typeExtra_06057();
check_typeExtra_06058();
check_typeExtra_06059();

check_typeExtra_06060();

check_typeExtra_06066();




// check_typeExtra_06501_undef_ok();
// check_typeExtra_06502_undef_ok();




total_fails += failed_check_typeExtra;
total_checks += tested_check_typeExtra;

if (show_random) {
console.log('check_typeExtra failed tests 06000', failed_check_typeExtra)
console.log('check_typeExtra passed tests 06000', tested_check_typeExtra)
}



function check_typeExtra_06001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, "abc"];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  ["Number", "String"];        // REAL TEST
}

  TYPE_CZECH_current_test_number = '06001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;
}

function check_typeExtra_06002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = ['abc', 456];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  ["String", "date"];       // REAL TEST
}
  TYPE_CZECH_current_test_number = '06002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_typeExtra(arguments, expected_types)`,
  `TC@33 - The type 'date' is not a check_type type, but it looks just like 'Date'`,
  `["String","date"]`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}

function check_typeExtra_06003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [456, 'a-string'];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape = ["Number", "String"];      // REAL TEST
}

 
  TYPE_CZECH_current_test_number = '06003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}

function check_typeExtra_06004(){

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [456, false, 'extra-string'];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  
  check_type_shape = ["Number", "Boolean"];    // REAL TEST
}

  TYPE_CZECH_current_test_number = '06004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}



function check_typeExtra_06005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = ['abc', [456, 789]];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  
  check_type_shape = ["String", ["Number"]];   // REAL TEST
}

  
  TYPE_CZECH_current_test_number = '06005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;


}

function check_typeExtra_06006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, 'abc', [456, 789]];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  
  check_type_shape = ["Number", "String", ["Number"]];  // REAL TEST
}

  TYPE_CZECH_current_test_number = '06006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;


}

function check_typeExtra_06007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, 'abc', [456, "def"]];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  
  check_type_shape = ["Number", "String", ["Number"]];  // REAL TEST
}

  TYPE_CZECH_current_test_number = '06007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =  [`check_typeExtra(arguments, expected_types)`,
  `TC@45 - ELEMENT '1' is asserted to be a 'Number', but is fallaciously a 'String' : def`,
  `["Number","String",["Number"]]`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;


}

function check_typeExtra_06008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, 'abc', {a:456, b:789}];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  
 
  check_type_shape = ["Number", "String", {a:"Number", b:"Number"}];  // REAL TEST
}

  TYPE_CZECH_current_test_number = '06008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =  ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}

function check_typeExtra_06009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, 'abc', {a:456, b:'def'}];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape = ["Number", "String", {a:"Number", b:"Number"}];  // REAL TEST
}
  TYPE_CZECH_current_test_number = '06009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_typeExtra(arguments, expected_types)`,
  `TC@43 - Property 'b' is indicated to be a 'Number', but is inaccurately a 'String' : def`,
  `["Number","String",{a:"Number",b:"Number"}]`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}

function check_typeExtra_06010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [ "super", "man" ];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape = [ "String", "String", "date" ] ;  // REAL TEST
}


  TYPE_CZECH_current_test_number = '06010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array =[`check_typeExtra(arguments, expected_types)`,
  `TC@03 - Element '2' is supposed to be a 'date', but is missing : ["super","man"]`,
  `["String","String","date"]`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}







// function check_typeExtra_06027(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = [{r:11}, {r:22}, {r:33}];
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  [{r:"Number"}, "String"]  ;               // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06027';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = ``;
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

function check_typeExtra_06028(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[11, 13, 17, 19], "abc", 'extra-string'];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =   [["Number"], "String"]  ;               // REAL TEST
}

  TYPE_CZECH_current_test_number = '06028';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}

// function check_typeExtra_06029(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = new Date;
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  'Date';               // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06029';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = ``;
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06030(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = 'a-number';
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  'Number';               // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06030';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = [`check_typeExtra(arguments, expected_types)`,
//   `The variable 'a-number', which is a 'String', is not a 'Number'`,
//   `Number`];
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06031(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = [[]];
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  ['array'];               // REAL TEST
// }


//   TYPE_CZECH_current_test_number = '06031';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = ``;
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06032(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = [[2], [3]];
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  [[]];             // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06032';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = ``;
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }


// function check_typeExtra_06033(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = [[2], [3]];
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  ['Array'];             // REAL TEST
// }
 
//   TYPE_CZECH_current_test_number = '06033';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = ``;
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06034(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = [[1,2], [3,4]];
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  ['Array'];             // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06034';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = ``;
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06035(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = [[1,2], [3,4]];
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape = [[]];             // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06035';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = ``;
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06036(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object =  [];
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape = 'Object';            // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06036';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array =[`check_typeExtra(arguments, expected_types)`,
//   `The variable '[]', which is a 'Array', is not a 'Object'`,
//   `Object`];
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }







// function check_typeExtra_06049(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );  
//   check_object = 123;
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//    check_type_shape = 'Number';         // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06049';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array = ``;
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06050(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = 456
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//    check_type_shape = 'String';         // REAL TEST
// }


//   TYPE_CZECH_current_test_number = '06050';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array =  [`check_typeExtra(arguments, expected_types)`,
//   `The variable '456', which is a 'Number', is not a 'String'`,
//   `String`];
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }


// function check_typeExtra_06051(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = null;
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//    check_type_shape = 'null';         // REAL TEST
// }


//   TYPE_CZECH_current_test_number = '06051';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array =  [`check_typeExtra(arguments, expected_types)`,
//   `TC@17 - The type 'null' is not a check_type type`,
//   `null`];
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06052(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = undefined;
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//    check_type_shape = 'undefined';         // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06052';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array =  [`check_typeExtra(arguments, expected_types)`,
//   `TC@17 - The type 'undefined' is not a check_type type`,
//   `undefined`];
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }






function check_typeExtra_06057(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [ ["Harley-Davidson", "Electra-Glide"],
                          {"cyl":2,"stroke":4}, 
                           [2000, "red"],
                          {"percent":75,"max":500} ];

    if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
      check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
  } else {
    check_type_shape =  [  ["S"],  {cyl:"N", stroke:"N"},  ["N", "S"],  {percent:"N", max:"N"} ];     // REAL TEST
  }

 TYPE_CZECH_current_test_number = '06057';
 error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}

function check_typeExtra_06058(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [ ["Harley-Davidson", "Electra-Glide"],
   {"cyl":2,"stroke":4}, 
     [2000, "red"],
    {"percent":75,"max":500}, 'bike'];
    if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
      check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
  } else {
    check_type_shape =  [  ["S"],  {cyl:"N", stroke:"N"},  ["N", "S"],  {percent:"N", max:"N"}, "S" ];     // REAL TEST
  }
 
  TYPE_CZECH_current_test_number = '06058';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}

function check_typeExtra_06059(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [ {x: 5},  {y: 1} ];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  [ {x:"N"}, {y:"N"} ];     // REAL TEST
}
 
  TYPE_CZECH_current_test_number = '06059';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}

function check_typeExtra_06060(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [{"manu":"Harley-Davidson","model":"Electra-Glide"},{"cyl":2,"stroke":4},{"year":2000,"color":"red"},{"percent":75,"max":500},"bike"];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape =  [  {manu:"S", model:"S"},  {cyl:"N", stroke:"N"},  {year:"N", color:"S"},  {percent:"N", max:"N"}, "S"];     // REAL TEST
}
 
  TYPE_CZECH_current_test_number = '06060';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
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
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}













function check_typeExtra_06066(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = ['abc', 456];
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
} else {
  check_type_shape = ["String", "Date"];   // REAL TEST
}

  TYPE_CZECH_current_test_number = '06066';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = [`check_typeExtra(arguments, expected_types)`,
  `TC@44 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Number'.`,
  `["String","Date"]`];
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_typeExtra ++;
                      }
                      tested_check_typeExtra ++;

}












////////////////////////////////////////////////////////////////////////////////////////








// function check_typeExtra_06501_undef_ok(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = null;
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  'String';   // REAL TEST
// }
 
//   TYPE_CZECH_current_test_number = '06501';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array =  [`check_typeExtra(arguments, expected_types)`,
//   `The variable 'null', which is a 'null', is not a 'String'`,
//   `String`];
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }

// function check_typeExtra_06502_undef_ok(){
//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   check_object = undefined
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     check_type_shape =  {xxxx:'yyy'};                    // TEST TEST
// } else {
//   check_type_shape =  'undefined';   // REAL TEST
// }

//   TYPE_CZECH_current_test_number = '06502';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
//   before_str = beforeCheck(check_object, check_type_shape);
//   actual_array = type_czech.check_typeExtra(check_object, check_type_shape);
//   afterCheck(check_object, check_type_shape, before_str, error_id);
//   expected_array =  [`check_typeExtra(arguments, expected_types)`,
//   `TC@17 - The type 'undefined' is not a check_type type`,
//   `undefined`];
//   actual_str = arrayErrorToString(actual_array);
//   expected_str = arrayErrorToString(expected_array);
//   if (actual_str !== expected_str) {
//     console.log(error_id);
//     console.log('  actual=', actual_str);
//     console.log('expected=', expected_str);
//   }
//   no_console_mess = '';

//                       if (actual_str !== expected_str) {
//                         failed_check_typeExtra ++;
//                       }
//                       tested_check_typeExtra ++;

// }



