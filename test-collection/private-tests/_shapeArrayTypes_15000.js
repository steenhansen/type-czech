/* eslint-disable */


pass_count = 0;
fail_count = 0;


_shapeArrayTypes_15001();
_shapeArrayTypes_15002();


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


/////////////////////////////////////////////////////


function _shapeArrayTypes_15001(){
  var TYPE_CZECH_current_test_number = '15001';       
  var check_array =  [ 13, 14, 15 ];
  var object_type =  [ "number" ];    
  var exact_shape = 'TYPE-VERIFY';     
  var expect_error =   'TE@239 - 3 !== 1, array has more elements than types, [13,14,15] !== ["number"]'; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_array, object_type);
        var actual_error = type_czech_test._shapeArrayTypes(check_array, object_type, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_array, object_type, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
       printTestName("_shapeArrayTypes_15001")   
}


function _shapeArrayTypes_15002(){
  var TYPE_CZECH_current_test_number = '15002';       
  var check_array =  [ 13, 14, 15 ];
  var object_type =  [ "string" ];    
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   `TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number' with a value of 13`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_array, object_type);
        var actual_error = type_czech_test._shapeArrayTypes(check_array, object_type, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_array, object_type, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
     printTestName("_shapeArrayTypes_15002")   
}


if (fail_count>0) {
  the_problem = `private-tests/_shapeArrayTypes_15000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;

