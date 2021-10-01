/* eslint-disable */

tested_refDiff = 0;
failed_refDiff = 0;

_refDiff_19001();
_refDiff_19002();
_refDiff_19003();
_refDiff_19004();

total_fails += failed_refDiff;
total_checks += tested_refDiff;

if (show_random) {
  console.log('_refDiff failed tests 19000', failed_refDiff)
  console.log('_refDiff passed tests 19000', tested_refDiff)
}

function _refDiff_19001(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_refDiff ++;
  }
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '19001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  let actual;
  try {
    actual = type_czech._refDiff("{'B':'B'}", "{'B':'B','3':3}")
  } catch (e) {
    actual = e;
  }
  actual_one_line = oneLineString(actual);
  expected = ` START-SAME ~ {'B':'B' PRE-DIFF ~ } POST-DIFF ~ ,'3':3}`; 


  if (actual_one_line !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual_one_line !== expected) {
                                                failed_refDiff ++;
                                              }
                                              tested_refDiff ++;




}



function _refDiff_19002(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_refDiff ++;
  }
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '19002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  let actual;
  try {
    actual =  type_czech._refDiff('123456789012345678901234567890123456789012345678901234567890',
                                  '1234567890123456789012345678901234567_89012345678901234567890');
  } catch (e) {
    actual = e;
  }
  actual_one_line = oneLineString(actual);
  expected = ` START-SAME ~ 1234567890123456789012345678901234567 PRE-DIFF ~ 89012345678901234567890 POST-DIFF ~ _89012345678901234567890`; 
  

  if (actual_one_line !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual_one_line !== expected) {
                                                failed_refDiff ++;
                                              }
                                              tested_refDiff ++;


}



function _refDiff_19003(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_refDiff ++;
  }
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '19003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  let actual;
  try {
    actual =  type_czech._refDiff('123456789012345678901234567890',
                                  '123456789012345678901234567890');
  } catch (e) {
    actual = e;
  }
  actual_one_line = oneLineString(actual);
  expected = ``; 

  if (actual_one_line !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual_one_line !== expected) {
                                                failed_refDiff ++;
                                              }
                                              tested_refDiff ++;



}




function _refDiff_19004(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_refDiff ++;
  }
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '19004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  let actual;
  try {
    actual =  type_czech._refDiff('', '1');
  } catch (e) {
    actual = e;
  }
  actual_one_line = oneLineString(actual);
  expected = ' START-SAME ~ `` PRE-DIFF ~ `` POST-DIFF ~ 1'; 

  if (actual_one_line !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual_one_line !== expected) {
                                                failed_refDiff ++;
                                              }
                                              tested_refDiff ++;



}

