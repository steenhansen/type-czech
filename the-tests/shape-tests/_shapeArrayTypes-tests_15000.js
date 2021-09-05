/* eslint-disable */

passed_shapeArrayTypes = 0;
failed_shapeArrayTypes = 0;
_shapeArrayTypes_15001(15001);
_shapeArrayTypes_15002(15002);

total_fails += failed_shapeArrayTypes;
console.log('_shapeArrayTypes failed tests', failed_shapeArrayTypes);

total_checks += passed_shapeArrayTypes;
console.log('_shapeArrayTypes passed tests', passed_shapeArrayTypes);

function _shapeArrayTypes_15001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
 // , 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '15001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_array =  [ 13, 14, 15 ];    
  object_type =  [ "Number" ];      
  exact_shape = 'TYPE-VERIFY';
  before_str = beforeCheck(check_array, object_type);
  actual = type_czech._shapeArrayTypes(check_array, object_type, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_array, object_type, before_str, error_id);
  expected = ""; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeArrayTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeArrayTypes !== 'undefined') {
    failed_shapeArrayTypes +=type_czech.failureTally();
    passed_shapeArrayTypes ++;
  }
}

function _shapeArrayTypes_15002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '15002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_array =  [ 13, 14, 15 ];    
  object_type =  [ "String" ];      
  exact_shape = 'TYPE-EXTRAS';
  before_str = beforeCheck(check_array, object_type);
  actual = type_czech._shapeArrayTypes(check_array, object_type, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_array, object_type, before_str, error_id);
  expected = `TC@45 - INDEX '0' is asserted to be a 'String', but is fallaciously a 'Number' : 13`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeArrayTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeArrayTypes !== 'undefined') {
    failed_shapeArrayTypes +=type_czech.failureTally();
    passed_shapeArrayTypes ++;
  }
}