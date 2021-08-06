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
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array =  [ 13, 14, 15 ];    
  const object_type =  [ "Number" ];      
  const exact_shape = 'TYPE-VERIFY';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeArrayTypes(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = ""; 
  if (actual!==expected) _throw(`${error_id} _shapeArrayTypes() misfired with : ${actual}`);
  failed_shapeArrayTypes +=type_czech.failureTally();
  passed_shapeArrayTypes ++;
}

function _shapeArrayTypes_15002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array =  [ 13, 14, 15 ];    
  const object_type =  [ "String" ];      
  const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeArrayTypes(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@45 - INDEX '2' is asserted to be a 'String', but is fallaciously a 'Number' : 15`; 
  if (actual!==expected) _throw(`${error_id} _shapeArrayTypes() misfired with : ${actual}`);
  failed_shapeArrayTypes +=type_czech.failureTally();
  passed_shapeArrayTypes ++;
}