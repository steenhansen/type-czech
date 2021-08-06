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
  const error_id = errorLabel(error_number);
  const check_variable =  true;    
  const valid_type =  "Boolean" ; 
  const before_str = beforeCheck(check_variable, valid_type);  
  const actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected = ""; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeScalar +=type_czech.failureTally();
  passed_shapeScalar ++;
}

function _shapeScalar_21002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_variable =  "my-string";    
  const valid_type =  "Boolean" ;   
  const before_str = beforeCheck(check_variable, valid_type);  
  const actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected = `The variable 'my-string', which is a 'String', is not a 'Boolean'`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeScalar +=type_czech.failureTally();
  passed_shapeScalar ++;
}

function _shapeScalar_21003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_variable =  123;    
  const valid_type =  "Number" ;   
  const before_str = beforeCheck(check_variable, valid_type);  
  const actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeScalar +=type_czech.failureTally();
  passed_shapeScalar ++;
}

function _shapeScalar_21004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_variable =  new Date;    
  const valid_type =  "Date" ;    
  const before_str = beforeCheck(check_variable, valid_type);  
  const actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeScalar +=type_czech.failureTally();
  passed_shapeScalar ++;
}

function _shapeScalar_21005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_variable =  "a-string";    
  const valid_type =  "String" ;    
  const before_str = beforeCheck(check_variable, valid_type);  
  const actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeScalar +=type_czech.failureTally();
  passed_shapeScalar ++;
}

function _shapeScalar_21006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_variable =  "a-string";    
  const valid_type =  "does-not_exist" ;
  const before_str = beforeCheck(check_variable, valid_type);  
  const actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected = `TC@16 - The type 'does-not_exist' is not the correct class`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeScalar +=type_czech.failureTally();
  passed_shapeScalar ++;
}

function _shapeScalar_21007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_variable =  [];    
  const valid_type =  "Array" ;  
  const before_str = beforeCheck(check_variable, valid_type);  
  const actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeScalar +=type_czech.failureTally();
  passed_shapeScalar ++;
}

function _shapeScalar_21008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_variable =  {};    
  const valid_type =  "Object" ;    
  const before_str = beforeCheck(check_variable, valid_type);  
  const actual = type_czech._shapeScalar(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeScalar +=type_czech.failureTally();
  passed_shapeScalar ++;
}

