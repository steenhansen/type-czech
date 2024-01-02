/* eslint-disable */


pass_count = 0;
fail_count = 0;



_shapeCollectionTypes_16001();
_shapeCollectionTypes_16002();
_shapeCollectionTypes_16003();


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
//////////////////////////////////////

function _shapeCollectionTypes_16001(){
  var TYPE_CZECH_current_test_number = '16001';       
  var check_object = { r: 11 };  
  var  object_shape =  { r: "number" }  
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error = '';  
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_object, object_shape);
        var actual_error = type_czech_test._shapeContainer(check_object, object_shape, exact_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_object, object_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
  printTestName("_shapeCollectionTypes_16001")   
}

function _shapeCollectionTypes_16002(){
  var TYPE_CZECH_current_test_number = '16002';       
  var check_object = { r: 11, u:"illegal" }; 
  var  object_shape =  { r: "number" }  
  var exact_shape = 'TYPE-VERIFY';     
  var expect_error = `TE@209 - Extra key in checked object - (u:'illegal')`;  
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_object, object_shape);
        var actual_error = type_czech_test._shapeContainer(check_object, object_shape, exact_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_object, object_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
  printTestName("_shapeCollectionTypes_16002")   
}


function _shapeCollectionTypes_16003(){
  var TYPE_CZECH_current_test_number = '16003';       
  var check_object = { r: 11, qwe:null};  
  var  object_shape =  { r: "number", qwe:"object" } 
  var exact_shape = 'TYPE-VERIFY';     
  var expect_error =  `TE@212 - Key 'qwe' was determined to be a 'object' but is 'null'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_object, object_shape);
        var actual_error = type_czech_test._shapeContainer(check_object, object_shape, exact_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_object, object_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
  printTestName("_shapeCollectionTypes_16003")   
  
}



if (fail_count>0) {
  the_problem = `private-tests/_shapeCollectionTypes_16000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;

