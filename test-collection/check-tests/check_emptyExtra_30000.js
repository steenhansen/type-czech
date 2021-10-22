/* eslint-disable */


tested_check_emptyExtra = 0;
failed_check_emptyExtra = 0;

check_emptyExtra_30001();
check_emptyExtra_30002();
check_emptyExtra_30003();
check_emptyExtra_30004();


TEST_total_fails += failed_check_emptyExtra;
TEST_total_checks += tested_check_emptyExtra;

if (TEST_show_random) {
  console.log('check_emptyExtra failed tests 30000', failed_check_emptyExtra)
  console.log('check_emptyExtra passed tests 30000', tested_check_emptyExtra)
}

///////////////////////////////

function check_emptyExtra_30001(){
  var TYPE_CZECH_current_test_number = '30001';       
  var check_param = [12, 'a-string', false]; 
  var check_shape =   ['EMPTY-ERROR', 'EMPTY-ERROR'];          
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_emptyExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_emptyExtra !=='undefined') failed_check_emptyExtra ++;
        }
        if (typeof tested_check_emptyExtra !=='undefined') tested_check_emptyExtra ++;
}

function check_emptyExtra_30002(){
  var TYPE_CZECH_current_test_number = '30002';       
  var check_param =  [  1234, 'not-empty', ['not-empty'], {a:''}  ]; 
  var check_shape =   ['EMPTY-ERROR', 'EMPTY-ERROR'];          
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_emptyExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_emptyExtra !=='undefined') failed_check_emptyExtra ++;
        }
        if (typeof tested_check_emptyExtra !=='undefined') tested_check_emptyExtra ++;
}


function check_emptyExtra_30003(){
  var TYPE_CZECH_current_test_number = '30003';       
  var check_param =   [12, '', 'extra-1', 'extra-2'];
  var check_shape =   ['EMPTY-ERROR', 'EMPTY-ERROR'];          
  var expect_error = ["check_emptyExtra(arguments, expected_emptys)",
  "EE@311 - ELEMENT '1' is erroneously empty :",
  '["EMPTY-ERROR","EMPTY-ERROR"]'                          ];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_emptyExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_emptyExtra !=='undefined') failed_check_emptyExtra ++;
        }
        if (typeof tested_check_emptyExtra !=='undefined') tested_check_emptyExtra ++;
}



function check_emptyExtra_30004(){
  var TYPE_CZECH_current_test_number = '30004';       
  var check_param =   [  1234, '', ['not-empty'], {}  ];
  var check_shape =   ['EMPTY-ERROR', 'EMPTY-ERROR'];          
  var expect_error = ["check_emptyExtra(arguments, expected_emptys)",
  "EE@311 - ELEMENT '1' is erroneously empty :",
  '["EMPTY-ERROR","EMPTY-ERROR"]'                       ];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_emptyExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_emptyExtra !=='undefined') failed_check_emptyExtra ++;
        }
        if (typeof tested_check_emptyExtra !=='undefined') tested_check_emptyExtra ++;
}