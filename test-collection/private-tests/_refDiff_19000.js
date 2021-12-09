/* eslint-disable */

tested_refDiff = 0;
failed_refDiff = 0;

_refDiff_19001();
_refDiff_19002();
_refDiff_19003();
_refDiff_19004();

TEST_total_fails += failed_refDiff;
TEST_total_checks += tested_refDiff;

if (TEST_show_random) {
  console.log('_refDiff failed tests 19000', failed_refDiff)
  console.log('_refDiff passed tests 19000', tested_refDiff)
}

/////////////////////////////////////////////


function _refDiff_19001(){
  var TYPE_CZECH_current_test_number = '19001';       
  var diff_was = "{'B':'B'}";
  var diff_is  = "{'B':'B','3':3}"; 
  var expect_error = `START-SAME ~ {'B':'B' PRE-DIFF ~ } POST-DIFF ~ ,'3':3}`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var check_shape =  'none-sentinel';    
        var actual_error;
        try {
          if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(diff_was, check_shape);
          actual_error =  type_czech_test._refDiff(diff_was, diff_is);
        } catch (e) { }
        if (typeof beforeCheck !== 'undefined') afterCheck(diff_was, check_shape, before_str, TYPE_CZECH_current_test_number);
        actual_error = (actual_error.replace(/\s+/g, ' ')).trim(); 
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_refDiff !=='undefined') failed_refDiff ++;
        }
        if (typeof tested_refDiff !=='undefined') tested_refDiff ++;
}





function _refDiff_19002(){
  var TYPE_CZECH_current_test_number = '19002';       
  var diff_was = '123456789012345678901234567890123456789012345678901234567890';
  var diff_is  = '1234567890123456789012345678901234567_89012345678901234567890'; 
  var expect_error = `START-SAME ~ 1234567890123456789012345678901234567 PRE-DIFF ~ 89012345678901234567890 POST-DIFF ~ _89012345678901234567890`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var check_shape =  'none-sentinel';    
        var actual_error;
        try {
          if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(diff_was, check_shape);
          actual_error =  type_czech_test._refDiff(diff_was, diff_is);
        } catch (e) { }
        if (typeof beforeCheck !== 'undefined') afterCheck(diff_was, check_shape, before_str, TYPE_CZECH_current_test_number);
        actual_error = (actual_error.replace(/\s+/g, ' ')).trim(); 
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_refDiff !=='undefined') failed_refDiff ++;
        }
        if (typeof tested_refDiff !=='undefined') tested_refDiff ++;
}


function _refDiff_19003(){
  var TYPE_CZECH_current_test_number = '19003';       
  var diff_was = '123456789012345678901234567890';
  var diff_is  = '123456789012345678901234567890'; 
  var expect_error = ""; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var check_shape =  'none-sentinel';    
        var actual_error;
        try {
          if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(diff_was, check_shape);
          actual_error =  type_czech_test._refDiff(diff_was, diff_is);
        } catch (e) { }
        if (typeof beforeCheck !== 'undefined') afterCheck(diff_was, check_shape, before_str, TYPE_CZECH_current_test_number);
        actual_error = (actual_error.replace(/\s+/g, ' ')).trim(); 
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_refDiff !=='undefined') failed_refDiff ++;
        }
        if (typeof tested_refDiff !=='undefined') tested_refDiff ++;
}



function _refDiff_19004(){
  var TYPE_CZECH_current_test_number = '19004';       
  var diff_was = ``;
  var diff_is = '1'; 
  var expect_error = `START-SAME ~ '' PRE-DIFF ~ '' POST-DIFF ~ 1`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var check_shape =  'none-sentinel';    
        var actual_error;
        try {
          if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(diff_was, check_shape);
          actual_error =  type_czech_test._refDiff(diff_was, diff_is);
        } catch (e) { }
        if (typeof beforeCheck !== 'undefined') afterCheck(diff_was, check_shape, before_str, TYPE_CZECH_current_test_number);
        actual_error = (actual_error.replace(/\s+/g, ' ')).trim(); 
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_refDiff !=='undefined') failed_refDiff ++;
        }
        if (typeof tested_refDiff !=='undefined') tested_refDiff ++;
}