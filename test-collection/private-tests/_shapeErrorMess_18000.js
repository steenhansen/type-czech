/* eslint-disable */


tested_shapeErrorMess = 0;
failed_shapeErrorMess = 0;

_shapeErrorMess_18001();
_shapeErrorMess_18002();

TEST_total_fails += failed_shapeErrorMess;
TEST_total_checks += tested_shapeErrorMess;

if (TEST_show_random) {
  console.log('_shapeErrorMess failed tests 18000', failed_shapeErrorMess)
  console.log('_shapeErrorMess passed tests 18000', tested_shapeErrorMess)
}

///////////////////////////////////////////


function _shapeErrorMess_18001(){
  var TYPE_CZECH_current_test_number = '18001';       
  var check_array = [ [11], [13], [17], [19] ]; 
  var object_type =   ["number"];   
  var exact_shape = 'TYPE-VERIFY';     
  var expect_error =   `TE@221 - Element '0' is supposed to be a '11', but is missing : ["number"]`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_array, object_type);
        var actual_error = type_czech_test._shapeErrorMess(check_array, object_type, exact_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_array, object_type, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeErrorMess !=='undefined') failed_shapeErrorMess ++;
        }
        if (typeof tested_shapeErrorMess !=='undefined') tested_shapeErrorMess ++;
}

function _shapeErrorMess_18002(){
  var TYPE_CZECH_current_test_number = '20004';       
  var check_array = [ [11], [13], [17], [19] ]; 
  var object_type =   ["number"];   
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   `TE@221 - Element '0' is supposed to be a '11', but is missing : ["number"]`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_array, object_type);
        var actual_error = type_czech_test._shapeErrorMess(check_array, object_type, exact_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_array, object_type, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeErrorMess !=='undefined') failed_shapeErrorMess ++;
        }
        if (typeof tested_shapeErrorMess !=='undefined') tested_shapeErrorMess ++;
}