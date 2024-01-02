/* eslint-disable */


pass_count = 0;
fail_count = 0;


_shapeErrorMess_18001();
_shapeErrorMess_18002();

function printTestName(an_str) {
  if (typeof window !== "undefined") {
    if (typeof window.browserList === 'function') {
      if (window.browserList()) {
        console.log(pass_count, an_str);
      }
    }
  } else {
    if (typeof global.nodejsList === 'function') {
      if (global.nodejsList()) {
        console.log(pass_count, an_str);
      }
    }
   } 
}

///////////////////////////////////////////

/*
  The idea here is that the values_array, ["super", "man"], holds the actual arguments.
  The types_array, [, , "boolean"] holds the missing wanted type(s) at the end of the array.
    0 "super" --> ""
    1 "man"   --> ""
    2 ?????   --> "boolean"
  
  So here we expected a boolean as the third element, but the boolean was missing in ["super", "man"]
  Thus we have no element 2
*/

function _shapeErrorMess_18001(){
  var TYPE_CZECH_current_test_number = '18001';       
  var types_array = [, , "boolean"];
  var values_array = ["super", "man"];
  var expect_error =   `TE@221 - Element '2' is supposed to be a 'boolean', but is missing : ["super","man"]`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(values_array, types_array);
        var actual_error = type_czech_test._shapeErrorMess(types_array, values_array);
        if (typeof beforeCheck !== 'undefined') afterCheck(values_array, types_array, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
    printTestName("_shapeErrorMess_18001")  
}


function _shapeErrorMess_18002(){
  var TYPE_CZECH_current_test_number = '18002';       
  var types_array = [ ,"date"];
  var values_array = ["first_is_string_second_is_date"];
  var expect_error =   `TE@221 - Element '1' is supposed to be a 'date', but is missing : ["first_is_string_second_is_date"]`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(values_array, types_array);
        var actual_error = type_czech_test._shapeErrorMess(types_array, values_array);
        if (typeof beforeCheck !== 'undefined') afterCheck(values_array, types_array, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
    printTestName("_shapeErrorMess_18002")  
}


if (fail_count>0) {
  the_problem = `private-tests/_shapeErrorMess_18000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;
