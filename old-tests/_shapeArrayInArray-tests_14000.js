/* eslint-disable */

passed_shapeArrayInArray = 0;

failed_shapeArrayInArray = 0;


_shapeArrayInArray_14001(14001);

total_fails += failed_shapeArrayInArray;
console.log('_missingKey failed tests', failed_shapeArrayInArray)

total_checks += passed_shapeArrayInArray;
console.log('_missingKey passed tests', passed_shapeArrayInArray)

function _shapeArrayInArray_14001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array =  [ [11], [13], [17], [19] ];    
  const array_type =  ["Number"]      
  const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, array_type);
  const actual = type_czech._shapeArrayInArray(check_array, array_type, exact_shape);
  afterCheck(check_array, array_type, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeArrayInArray() misfired with : ${actual}`);
  failed_shapeArrayInArray +=type_czech.failureTally();
  passed_shapeArrayInArray ++;
}
