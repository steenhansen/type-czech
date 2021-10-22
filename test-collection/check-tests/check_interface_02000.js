/* eslint-disable */

tested_check_interface = 0;
failed_check_interface = 0;


check_interface_02001();   // fine
check_interface_02002();   // missing function in interface
check_interface_02003();   // wrong type in interface


TEST_total_fails += failed_check_interface;
TEST_total_checks += tested_check_interface;

if (TEST_show_random) {
  console.log('_check_interface failed tests 02000', failed_check_interface)
  console.log('_check_interface passed tests 02000', tested_check_interface)
}

/////////////////////////////////////////////////////////////


function check_interface_02001(){
  var TYPE_CZECH_current_test_number = '02001';       
  var check_param = {show: (x) => x};
  var check_shape =   {show:'Function'};          
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_interface(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_interface !=='undefined') failed_check_interface ++;
        }
        if (typeof tested_check_interface !=='undefined') tested_check_interface ++;
}



function check_interface_02002(){
  var TYPE_CZECH_current_test_number = '02002';       
  var check_param = {show: (x) => x};
  var check_shape =   {noShow:'Function'};          
  var expect_error =  ["check_interface(arguments, expected_types)",
  "IE@501 - Interface missing key 'noShow' in checked object",
  '{noShow:"Function"}'];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_interface(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_interface !=='undefined') failed_check_interface ++;
        }
        if (typeof tested_check_interface !=='undefined') tested_check_interface ++;
}


function check_interface_02003(){
  var TYPE_CZECH_current_test_number = '02003';       
  var check_param =  {show: 17};
  var check_shape =   {show:'Function'};           
  var expect_error =  ["check_interface(arguments, expected_types)",
  "IE@502 - actual type of 'show' is 'Number', with a value of '17', not the expected 'Function' type",
  '{show:"Function"}'];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_interface(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_interface !=='undefined') failed_check_interface ++;
        }
        if (typeof tested_check_interface !=='undefined') tested_check_interface ++;
}
