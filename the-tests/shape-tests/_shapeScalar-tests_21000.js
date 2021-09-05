/* eslint-disable */

passed_shapeScalar = 0;

failed_shapeScalar = 0;


_shapeScalar_21001(21001);
_shapeScalar_21002(21002);
_shapeScalar_21003(21003);
_shapeScalar_21004(21004);
_shapeScalar_21005(21005);
_shapeScalar_21006(21006);
_shapeScalar_21007(21007);
_shapeScalar_21008(21008);

total_fails += failed_shapeScalar;
console.log('_shapeScalar failed tests', failed_shapeScalar);

total_checks += passed_shapeScalar;
console.log('_shapeScalar passed tests', passed_shapeScalar);

function _shapeScalar_21001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  true;    
  valid_type =  "Boolean" ; 
  before_str = beforeCheck(check_variable, valid_type);  
  actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected = ""; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeScalar !== 'undefined') {
    failed_shapeScalar +=type_czech.failureTally();
    passed_shapeScalar ++;
  }
}

function _shapeScalar_21002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  "my-string";    
  valid_type =  "Boolean" ;   
  before_str = beforeCheck(check_variable, valid_type);  
  actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected = `The variable 'my-string', which is a 'String', is not a 'Boolean'`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeScalar !== 'undefined') {
    failed_shapeScalar +=type_czech.failureTally();
    passed_shapeScalar ++;
  }
}

function _shapeScalar_21003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  123;    
  valid_type =  "Number" ;   
  before_str = beforeCheck(check_variable, valid_type);  
  actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected = ``; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeScalar !== 'undefined') {
    failed_shapeScalar +=type_czech.failureTally();
    passed_shapeScalar ++;
  }
}

function _shapeScalar_21004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  new Date;    
  valid_type =  "Date" ;    
  before_str = beforeCheck(check_variable, valid_type);  
  actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected = ``; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeScalar !== 'undefined') {
    failed_shapeScalar +=type_czech.failureTally();
    passed_shapeScalar ++;
  }
}

function _shapeScalar_21005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  "a-string";    
  valid_type =  "String" ;    
  before_str = beforeCheck(check_variable, valid_type);  
  actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected = ``; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeScalar !== 'undefined') {
    failed_shapeScalar +=type_czech.failureTally();
    passed_shapeScalar ++;
  }
}

function _shapeScalar_21006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  "a-string";    
  valid_type =  "does-not_exist" ;
  before_str = beforeCheck(check_variable, valid_type);  
  actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected = `TC@16 - The type 'does-not_exist' is not the correct class`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeScalar !== 'undefined') {
    failed_shapeScalar +=type_czech.failureTally();
    passed_shapeScalar ++;
  }
}

function _shapeScalar_21007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  [];    
  valid_type =  "Array" ;  
  before_str = beforeCheck(check_variable, valid_type);  
  actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected = ``; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeScalar !== 'undefined') {
    failed_shapeScalar +=type_czech.failureTally();
    passed_shapeScalar ++;
  }
}

function _shapeScalar_21008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '21008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_variable =  {};    
  valid_type =  "Object" ;    
  before_str = beforeCheck(check_variable, valid_type);  
  actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected = ``; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeScalar !== 'undefined') {
    failed_shapeScalar +=type_czech.failureTally();
    passed_shapeScalar ++;
  }
}

