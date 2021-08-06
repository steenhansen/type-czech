/* eslint-disable */

passed_shapePropertyType = 0;

failed_shapePropertyType = 0;

_shapePropertyType_20001(20001);
_shapePropertyType_20002(20002);
_shapePropertyType_20003(20003);
_shapePropertyType_20004(20004);

total_fails += failed_shapePropertyType;
console.log('_shapePropertyType failed tests', failed_shapePropertyType);

total_checks += passed_shapePropertyType;
console.log('_shapePropertyType passed tests', passed_shapePropertyType);

function _shapePropertyType_20001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const property_type = { jxy:"Number"};    
  const property_key =  "jxy";      
  const check_variable = 987;
  const before_str = beforeCheck(property_type, property_key);
  const actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  const expected = ""; 
  if (actual!==expected) _throw(`${error_id} _shapePropertyType() misfired with : ${actual}`);
  failed_shapePropertyType +=type_czech.failureTally();
  passed_shapePropertyType ++;
}


function _shapePropertyType_20002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const property_type = { jxy:"Number"};    
  const property_key =  "jxy";      
  const check_variable = undefined;
  const before_str = beforeCheck(property_type, property_key);
  const actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  const expected = `TC@41 - Key 'jxy' was given to be a 'Number' but was instead 'undefined'`; 
  if (actual!==expected) _throw(`${error_id} _shapePropertyType() misfired with : ${actual}`);
  failed_shapePropertyType +=type_czech.failureTally();
  passed_shapePropertyType ++;
}

function _shapePropertyType_20003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const property_type = { jxy:"Number"};    
  const property_key =  "jxy";      
  const check_variable = null;
  const before_str = beforeCheck(property_type, property_key);
  const actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  const expected = `TC@42 - Key 'jxy' was determined to be a 'Number' but was instead 'null'`; 
  if (actual!==expected) _throw(`${error_id} _shapePropertyType() misfired with : ${actual}`);
  failed_shapePropertyType +=type_czech.failureTally();
  passed_shapePropertyType ++;
}

function _shapePropertyType_20004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const property_type = { jxy:"String"};    
  const property_key =  "jxy";      
  const check_variable = 567;
  const before_str = beforeCheck(property_type, property_key);
  const actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  const expected = `TC@43 - Property 'jxy' is indicated to be a 'String', but is inaccurately a 'Number' : 567`; 
  if (actual!==expected) _throw(`${error_id} _shapePropertyType() misfired with : ${actual}`);
  failed_shapePropertyType +=type_czech.failureTally();
  passed_shapePropertyType ++;
}