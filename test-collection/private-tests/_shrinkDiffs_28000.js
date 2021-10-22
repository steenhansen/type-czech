/* eslint-disable */



tested_shrinkDiffs = 0;
failed_shrinkDiffs = 0;

_shrinkDiffs_28001();

TEST_total_fails += failed_shrinkDiffs;
TEST_total_checks += tested_shrinkDiffs;

if (TEST_show_random) {
  console.log('_shrinkDiffs failed tests 28000', failed_shrinkDiffs)
  console.log('_shrinkDiffs passed tests 28000', tested_shrinkDiffs)
}

/////////////////////////////////////////////////////////


function _shrinkDiffs_28001(){
  var TYPE_CZECH_current_test_number = '28001';       
  var long_form =  '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
  + '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
  var after_form =  `1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 <<<<<<~~~>>>>>> 12345678901234567890123456789012345678901234567890`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        var check_shape =  'none-sentinel';    
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(long_form, check_shape);
        var actual_error = type_czech_test._shrinkDiffs(long_form);
        if (typeof beforeCheck !== 'undefined') afterCheck(long_form, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(after_form)) after_form = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== after_form) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', after_form);
          if (typeof failed_shrinkDiffs !=='undefined') failed_shrinkDiffs ++;
        }
        if (typeof tested_shrinkDiffs !=='undefined') tested_shrinkDiffs ++;
}