/* eslint-disable */



tested_shapeCollectionTypes = 0;
failed_shapeCollectionTypes = 0;

_shapeCollectionTypes_16001();
_shapeCollectionTypes_16002();
_shapeCollectionTypes_16003();

TEST_total_fails += failed_shapeCollectionTypes;
TEST_total_checks += tested_shapeCollectionTypes;

if (TEST_show_random) {
  console.log('_shapeCollectionTypes failed tests 16000', failed_shapeCollectionTypes);
  console.log('_shapeCollectionTypes passed tests 16000', tested_shapeCollectionTypes);
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
          if (typeof failed_shapeCollectionTypes !=='undefined') failed_shapeCollectionTypes ++;
        }
        if (typeof tested_shapeCollectionTypes !=='undefined') tested_shapeCollectionTypes ++;
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
          if (typeof failed_shapeCollectionTypes !=='undefined') failed_shapeCollectionTypes ++;
        }
        if (typeof tested_shapeCollectionTypes !=='undefined') tested_shapeCollectionTypes ++;
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
          if (typeof failed_shapeCollectionTypes !=='undefined') failed_shapeCollectionTypes ++;
        }
        if (typeof tested_shapeCollectionTypes !=='undefined') tested_shapeCollectionTypes ++;
}