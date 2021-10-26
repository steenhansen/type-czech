/* eslint-disable */



tested_shapePropertyType = 0;
failed_shapePropertyType = 0;

_shapePropertyType_20001();
_shapePropertyType_20002();
_shapePropertyType_20003();
_shapePropertyType_20004();

TEST_total_fails += failed_shapePropertyType;
TEST_total_checks += tested_shapePropertyType;

if (TEST_show_random) {
  console.log('_shapePropertyType failed tests 20000', failed_shapePropertyType);
  console.log('_shapePropertyType passed tests 20000', tested_shapePropertyType);
}

//////////////////////////////////////////


function _shapePropertyType_20001(){
  var TYPE_CZECH_current_test_number = '20001';       
  var property_type = { jxy:"number"};   
  var property_key ="jxy";   
  var check_variable = 987;        
  var expect_error =  ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(property_type, property_key);
        var actual_error = type_czech_test._shapePropertyType(property_type, property_key, check_variable);
        if (typeof beforeCheck !== 'undefined') afterCheck(property_type, property_key, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapePropertyType !=='undefined') failed_shapePropertyType ++;
        }
        if (typeof tested_shapePropertyType !=='undefined') tested_shapePropertyType ++;
}



function _shapePropertyType_20002(){
  var TYPE_CZECH_current_test_number = '20002';       
  var property_type = { jxy:"number"};   
  var property_key ="jxy";   
  var check_variable = undefined;        
  var expect_error =   `TE@211 - Key 'jxy' was given to be a 'number' but was instead 'undefined'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(property_type, property_key);
        var actual_error = type_czech_test._shapePropertyType(property_type, property_key, check_variable);
        if (typeof beforeCheck !== 'undefined') afterCheck(property_type, property_key, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapePropertyType !=='undefined') failed_shapePropertyType ++;
        }
        if (typeof tested_shapePropertyType !=='undefined') tested_shapePropertyType ++;
}




function _shapePropertyType_20003(){
  var TYPE_CZECH_current_test_number = '20003';       
  var property_type = { jxy:"number"};   
  var property_key ="jxy";   
  var check_variable = null;        
  var expect_error =   `TE@212 - Key 'jxy' was determined to be a 'number' but was instead 'null'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(property_type, property_key);
        var actual_error = type_czech_test._shapePropertyType(property_type, property_key, check_variable);
        if (typeof beforeCheck !== 'undefined') afterCheck(property_type, property_key, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapePropertyType !=='undefined') failed_shapePropertyType ++;
        }
        if (typeof tested_shapePropertyType !=='undefined') tested_shapePropertyType ++;
}



function _shapePropertyType_20004(){
  var TYPE_CZECH_current_test_number = '20004';       
  var property_type = { jxy:"string"};   
  var property_key ="jxy";   
  var check_variable = 567;        
  var expect_error =   `TE@213 - Property 'jxy' is indicated to be a 'string', but is inaccurately a 'number' : 567`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(property_type, property_key);
        var actual_error = type_czech_test._shapePropertyType(property_type, property_key, check_variable);
        if (typeof beforeCheck !== 'undefined') afterCheck(property_type, property_key, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapePropertyType !=='undefined') failed_shapePropertyType ++;
        }
        if (typeof tested_shapePropertyType !=='undefined') tested_shapePropertyType ++;
}