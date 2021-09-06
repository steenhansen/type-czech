/* eslint-disable */

tested_shrinkDiffs = 0;
failed_shrinkDiffs = 0;

_shrinkDiffs_28001();


total_fails += failed_shrinkDiffs;
console.log('_shrinkDiffs failed tests', failed_shrinkDiffs)

total_checks += tested_shrinkDiffs;
console.log('_shrinkDiffs passed tests', tested_shrinkDiffs)

function _shrinkDiffs_28001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '28001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);


  long_str = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
  + '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
  actual = type_czech._shrinkDiffs(long_str);



  
  expected = `1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 <<<<<<...>>>>>> 12345678901234567890123456789012345678901234567890`; 
  if (actual!==expected) {       
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shrinkDiffs() misfired with : ${actual}`);
  }
  if (typeof failed_shrinkDiffs !== 'undefined') {
    failed_shrinkDiffs +=type_czech.failureTally();
    tested_shrinkDiffs ++;
  }
}


