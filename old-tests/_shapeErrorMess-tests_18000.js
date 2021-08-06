/* eslint-disable */

passed_shapeErrorMess = 0;

failed_shapeErrorMess = 0;

_shapeErrorMess_18001(18001);
_shapeErrorMess_18002(18002);


total_fails += failed_shapeErrorMess;
console.log('_shapeErrorMess failed tests', failed_shapeErrorMess)

total_checks += passed_shapeErrorMess;
console.log('_shapeErrorMess passed tests', passed_shapeErrorMess)

function _shapeErrorMess_18001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array = [ [11], [13], [17], [19] ];    
  const object_type =   ["Number"]      
  const exact_shape = 'TYPE-VERIFY';
    const before_str = beforeCheck(check_array, object_type);
    const actual = type_czech._shapeErrorMess(check_array, object_type, exact_shape);
    afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@03 - Index '0' is supposed to be a '11', but is missing : ['Number']`; 
  if (actual!==expected) _throw(`${error_id} _shapeErrorMess() misfired with : ${actual}`);
  failed_shapeErrorMess +=type_czech.failureTally();
  passed_shapeErrorMess ++;
}

function _shapeErrorMess_18002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array = [ [11], [13], [17], [19] ];    
  const object_type =   ["Number"]      
  const exact_shape = 'TYPE-EXTRAS';
    const before_str = beforeCheck(check_array, object_type);
    const actual = type_czech._shapeErrorMess(check_array, object_type, exact_shape);
    afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@03 - Index '0' is supposed to be a '11', but is missing : ['Number']`; 
  if (actual!==expected) _throw(`${error_id} _shapeErrorMess() misfired with : ${actual}`);
  failed_shapeErrorMess +=type_czech.failureTally();
  passed_shapeErrorMess ++;
}
