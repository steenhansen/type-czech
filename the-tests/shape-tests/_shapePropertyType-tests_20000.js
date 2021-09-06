/* eslint-disable */

tested_shapePropertyType = 0;

failed_shapePropertyType = 0;

_shapePropertyType_20001(20001);
_shapePropertyType_20002(20002);
_shapePropertyType_20003(20003);
_shapePropertyType_20004(20004);

total_fails += failed_shapePropertyType;
console.log('_shapePropertyType failed tests', failed_shapePropertyType);

total_checks += tested_shapePropertyType;
console.log('_shapePropertyType passed tests', tested_shapePropertyType);

function _shapePropertyType_20001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '20001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  property_type = { jxy:"Number"};    
  property_key =  "jxy";      
  check_variable = 987;
  before_str = beforeCheck(property_type, property_key);
  actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  expected = ""; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapePropertyType() misfired with : ${actual}`);
  }
  if (typeof failed_shapePropertyType !== 'undefined') {
    failed_shapePropertyType +=type_czech.failureTally();
    tested_shapePropertyType ++;
  }
}


function _shapePropertyType_20002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '20002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  property_type = { jxy:"Number"};    
  property_key =  "jxy";      
  check_variable = undefined;
  before_str = beforeCheck(property_type, property_key);
  actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  expected = `TC@41 - Key 'jxy' was given to be a 'Number' but was instead 'undefined'`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapePropertyType() misfired with : ${actual}`);
  }
  if (typeof failed_shapePropertyType !== 'undefined') {
    failed_shapePropertyType +=type_czech.failureTally();
    tested_shapePropertyType ++;
  }
}

function _shapePropertyType_20003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '20003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  property_type = { jxy:"Number"};    
  property_key =  "jxy";      
  check_variable = null;
  before_str = beforeCheck(property_type, property_key);
  actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  expected = `TC@42 - Key 'jxy' was determined to be a 'Number' but was instead 'null'`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapePropertyType() misfired with : ${actual}`);
  }
  if (typeof failed_shapePropertyType !== 'undefined') {
    failed_shapePropertyType +=type_czech.failureTally();
    tested_shapePropertyType ++;
  }
}

function _shapePropertyType_20004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '20004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  property_type = { jxy:"String"};    
  property_key =  "jxy";      
  check_variable = 567;
  before_str = beforeCheck(property_type, property_key);
  actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
  afterCheck(property_type, property_key, before_str, error_id);
  expected = `TC@43 - Property 'jxy' is indicated to be a 'String', but is inaccurately a 'Number' : 567`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapePropertyType() misfired with : ${actual}`);
  }
  if (typeof failed_shapePropertyType !== 'undefined') {
    failed_shapePropertyType +=type_czech.failureTally();
    tested_shapePropertyType ++;
  }
}