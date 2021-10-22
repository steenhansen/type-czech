/* eslint-disable */



tested_shapeScalar = 0;
failed_shapeScalar = 0;

_shapeScalar_21001();
_shapeScalar_21002();
_shapeScalar_21003();
_shapeScalar_21004();
_shapeScalar_21005();
_shapeScalar_21006();
_shapeScalar_21007();
_shapeScalar_21008();

TEST_total_fails += failed_shapeScalar;
TEST_total_checks += tested_shapeScalar;

if (TEST_show_random) {
  console.log('_shapeScalar failed tests 21000', failed_shapeScalar);
  console.log('_shapeScalar passed tests 21000', tested_shapeScalar);
}

////////////////////////////////////////////////////





function _shapeScalar_21001(){
  var TYPE_CZECH_current_test_number = '21001';       
  var check_param =   true;    
  var check_shape = "Boolean" ;      
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeScalar(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeScalar !=='undefined') failed_shapeScalar ++;
        }
        if (typeof tested_shapeScalar !=='undefined') tested_shapeScalar ++;
}



function _shapeScalar_21002(){
  var TYPE_CZECH_current_test_number = '21002';       
  var check_param =    "my-string";    
  var check_shape = "Boolean" ;      
  var expect_error = `TE@226 - The value 'my-string', which is a 'String', is not a 'Boolean'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeScalar(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeScalar !=='undefined') failed_shapeScalar ++;
        }
        if (typeof tested_shapeScalar !=='undefined') tested_shapeScalar ++;
}



function _shapeScalar_21003(){
  var TYPE_CZECH_current_test_number = '21003';       
  var check_param =   123;    
  var check_shape = "Number" ;      
  var expect_error = ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeScalar(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeScalar !=='undefined') failed_shapeScalar ++;
        }
        if (typeof tested_shapeScalar !=='undefined') tested_shapeScalar ++;
}

function _shapeScalar_21004(){
  var TYPE_CZECH_current_test_number = '21004';       
  var check_param = new Date;    
  var check_shape = "Date" ;      
  var expect_error = ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeScalar(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeScalar !=='undefined') failed_shapeScalar ++;
        }
        if (typeof tested_shapeScalar !=='undefined') tested_shapeScalar ++;
}

function _shapeScalar_21005(){
  var TYPE_CZECH_current_test_number = '21005';       
  var check_param =   "a-string";  
  var check_shape = "String" ;      
  var expect_error = ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeScalar(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeScalar !=='undefined') failed_shapeScalar ++;
        }
        if (typeof tested_shapeScalar !=='undefined') tested_shapeScalar ++;
}



function _shapeScalar_21006(){
  var TYPE_CZECH_current_test_number = '21006';       
  var check_param =   "a-string";  
  var check_shape = "does-not_exist" ;      
  var expect_error =  `TE@230 - The type 'does-not_exist' is invalid`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeScalar(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeScalar !=='undefined') failed_shapeScalar ++;
        }
        if (typeof tested_shapeScalar !=='undefined') tested_shapeScalar ++;
}



function _shapeScalar_21007(){
  var TYPE_CZECH_current_test_number = '21007';       
  var check_param =   []; 
  var check_shape =   "Array" ;            
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeScalar(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeScalar !=='undefined') failed_shapeScalar ++;
        }
        if (typeof tested_shapeScalar !=='undefined') tested_shapeScalar ++;
}



function _shapeScalar_21008(){
  var TYPE_CZECH_current_test_number = '21008';       
  var check_param =  {};
  var check_shape =   "Object" ;            
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeScalar(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeScalar !=='undefined') failed_shapeScalar ++;
        }
        if (typeof tested_shapeScalar !=='undefined') tested_shapeScalar ++;
}
