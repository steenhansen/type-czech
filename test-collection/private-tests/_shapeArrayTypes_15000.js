/* eslint-disable */



tested_shapeArrayTypes = 0;
failed_shapeArrayTypes = 0;

_shapeArrayTypes_15001();
_shapeArrayTypes_15002();

TEST_total_fails += failed_shapeArrayTypes;
TEST_total_checks += tested_shapeArrayTypes;

if (TEST_show_random) {
  console.log('_shapeArrayTypes failed tests 15000', failed_shapeArrayTypes);
  console.log('_shapeArrayTypes passed tests 15000', tested_shapeArrayTypes);
}

/////////////////////////////////////////////////////


function _shapeArrayTypes_15001(){
  var TYPE_CZECH_current_test_number = '15001';       
  var check_array =  [ 13, 14, 15 ];
  var object_type =  [ "number" ];    
  var exact_shape = 'TYPE-VERIFY';     
  var expect_error =   ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_array, object_type);
        var actual_error = type_czech_test._shapeArrayTypes(check_array, object_type, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_array, object_type, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeArrayTypes !=='undefined') failed_shapeArrayTypes ++;
        }
        if (typeof tested_shapeArrayTypes !=='undefined') tested_shapeArrayTypes ++;
}


function _shapeArrayTypes_15002(){
  var TYPE_CZECH_current_test_number = '15002';       
  var check_array =  [ 13, 14, 15 ];
  var object_type =  [ "string" ];    
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   `TE@215 - ELEMENT '0' is asserted to be a 'string', but is fallaciously a 'number' : 13`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_array, object_type);
        var actual_error = type_czech_test._shapeArrayTypes(check_array, object_type, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_array, object_type, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeArrayTypes !=='undefined') failed_shapeArrayTypes ++;
        }
        if (typeof tested_shapeArrayTypes !=='undefined') tested_shapeArrayTypes ++;
}