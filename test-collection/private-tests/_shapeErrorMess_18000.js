/* eslint-disable */


pass_count = 0;
fail_count = 0;


//_shapeErrorMess_18001();
//_shapeErrorMess_18002();              // need to read


///////////////////////////////////////////


function _shapeErrorMess_18001(){
  var TYPE_CZECH_current_test_number = '18001';       
  var check_array = [ [11],             [13],             [17],             [19] ]; 
  var object_type = [ ["number-array"], ["number-array"], ["number-array"], ["number-array"]];   
  var exact_shape = 'TYPE-VERIFY';     
  var expect_error =   `TE@221 - Element '1' is supposed to be a '13', but is missing : ["number"]`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_array, object_type);
        var actual_error = type_czech_test._shapeErrorMess(check_array, object_type, exact_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_array, object_type, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

function _shapeErrorMess_18002(){
  var TYPE_CZECH_current_test_number = '180002';       
  var check_array = [ [11], [13], [17], [19] ]; 
  var object_type =   ["number"];   
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   `TE@221 - Element '1' is supposed to be a '13', but is missing : ["number"]`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_array, object_type);
        var actual_error = type_czech_test._shapeErrorMess(check_array, object_type, exact_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_array, object_type, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}



if (fail_count>0) {
  the_problem = `private-tests/_shapeErrorMess_18000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;
