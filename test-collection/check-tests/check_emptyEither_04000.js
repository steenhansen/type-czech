/* eslint-disable */

tested_check_emptyEither = 0;

failed_check_emptyEither = 0;

check_emptyEither_04001();


TEST_total_fails += failed_check_emptyEither;
TEST_total_checks += tested_check_emptyEither;
if (TEST_show_random) {
  console.log('check_emptyEither failed tests 04000', failed_check_emptyEither)
  console.log('check_emptyEither passed tests 04000', tested_check_emptyEither)
}

/////////////////////



function check_emptyEither_04001(){
  var TYPE_CZECH_current_test_number = '04001';       
  var check_param =   {x:12,       y:{z:"str2"} } ;
  var type_a = {a:"EMPTY-ERROR",  b:{c:"EMPTY-OK"}};
  var type_b = {x:"EMPTY-OK", y:{z:"EMPTY-ERROR"}};
  var check_shape =  [type_a, type_b];         
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_emptyEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_emptyEither !=='undefined') failed_check_emptyEither ++;
        }
        if (typeof tested_check_emptyEither !=='undefined') tested_check_emptyEither ++;
}






