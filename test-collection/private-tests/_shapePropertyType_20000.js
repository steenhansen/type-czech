/* eslint-disable */


pass_count = 0;
fail_count = 0;



_shapePropertyType_20001();
_shapePropertyType_20002();
_shapePropertyType_20003();
_shapePropertyType_20004();


//////////////////////////////////////////


function _shapePropertyType_20001(){
  var TYPE_CZECH_current_test_number = '20001';       
  var property_type = { jxy:"number"};   
  var property_key ="jxy";   
  var check_variable = 987;        
  var expect_error =  ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(property_type, property_key);
        var actual_error = type_czech_test._shapePropertyType(property_type, property_key, check_variable);
        if (typeof beforeCheck !== 'undefined') afterCheck(property_type, property_key, before_str, TYPE_CZECH_current_test_number);
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



function _shapePropertyType_20002(){
  var TYPE_CZECH_current_test_number = '20002';       
  var property_type = { jxy:"number"};   
  var property_key ="jxy";   
  var check_variable = undefined;        
  var expect_error =   `TE@211 - Key 'jxy' was given to be a 'number' but is 'undefined'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(property_type, property_key);
        var actual_error = type_czech_test._shapePropertyType(property_type, property_key, check_variable);
        if (typeof beforeCheck !== 'undefined') afterCheck(property_type, property_key, before_str, TYPE_CZECH_current_test_number);
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




function _shapePropertyType_20003(){
  var TYPE_CZECH_current_test_number = '20003';       
  var property_type = { jxy:"number"};   
  var property_key ="jxy";   
  var check_variable = null;        
  var expect_error =   `TE@212 - Key 'jxy' was determined to be a 'number' but is 'null'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(property_type, property_key);
        var actual_error = type_czech_test._shapePropertyType(property_type, property_key, check_variable);
        if (typeof beforeCheck !== 'undefined') afterCheck(property_type, property_key, before_str, TYPE_CZECH_current_test_number);
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



function _shapePropertyType_20004(){
  var TYPE_CZECH_current_test_number = '20004';       
  var property_type = { jxy:"string"};   
  var property_key ="jxy";   
  var check_variable = 567;        
  var expect_error =   `TE@213 - Property 'jxy' is indicated to be a 'string', but is inaccurately a 'number' : 567`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(property_type, property_key);
        var actual_error = type_czech_test._shapePropertyType(property_type, property_key, check_variable);
        if (typeof beforeCheck !== 'undefined') afterCheck(property_type, property_key, before_str, TYPE_CZECH_current_test_number);
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
  the_problem = `private-tests/_shapePropertyType_20000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;
