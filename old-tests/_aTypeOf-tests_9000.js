/* eslint-disable */

passed_a_type_of = 0;
failed_a_type_of = 0;

_aTypeOf_9001(9001);
_aTypeOf_9002(9002);
_aTypeOf_9003(9003);
_aTypeOf_9004(9004);

_aTypeOf_9005(9005);

_aTypeOf_9006(9006);
_aTypeOf_9007(9007);

_aTypeOf_9008(9008);
_aTypeOf_9009(9009);
_aTypeOf_9010(9010);


total_fails += failed_a_type_of;
console.log('_aTypeOf failed tests', failed_a_type_of)

total_checks += passed_a_type_of;
console.log('_aTypeOf passed tests', passed_a_type_of)


function _aTypeOf_9001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable = null;          
  const actual = type_czech._aTypeOf(a_variable);
  const expected = 'null';
  if (actual!==expected) _throw(`${error_id} _aTypeOf(null) <> 'null' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable = undefined;          
  const actual = type_czech._aTypeOf(a_variable);
  const expected = 'undefined';
  if (actual!==expected) _throw(`${error_id} _aTypeOf(undefined) <> 'undefined' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable = new Date;       
  const actual = type_czech._aTypeOf(a_variable);
  const expected = 'Date';
  if (actual!==expected) _throw(`${error_id} _aTypeOf(new Date) <> 'Date' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable = []; 
  const actual = type_czech._aTypeOf(a_variable);
  const expected = 'Array';
  if (actual!==expected) _throw(`${error_id} _aTypeOf([]) <> 'Array' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable = {}; 
  const actual = type_czech._aTypeOf(a_variable);
  const expected ="Object";
  if (actual!==expected) _throw(`${error_id} _aTypeOf({}) <> 'Object' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable = 'a_string'; 
  const actual = type_czech._aTypeOf(a_variable);
  const expected ="String";
  if (actual!==expected) _throw(`${error_id} _aTypeOf('a_string') <> 'String' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable = 567; 
  const actual = type_czech._aTypeOf(a_variable);
  const expected ="Number";
  if (actual!==expected) _throw(`${error_id} _aTypeOf(567) <> 'Number' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable = false; 
  const actual = type_czech._aTypeOf(a_variable);
  const expected ="Boolean";
  if (actual!==expected) _throw(`${error_id} _aTypeOf(false) <> 'Boolean' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9009(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable =  Symbol('a_symbol'); 
  const actual = type_czech._aTypeOf(a_variable);
  const expected ="Symbol";
  if (actual!==expected) _throw(`${error_id} _aTypeOf(Symbol('a_symbol')) <> 'Symbol' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}

function _aTypeOf_9010(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_variable =  function(){}; 
  const actual = type_czech._aTypeOf(a_variable);
  const expected ="Function";
  if (actual!==expected) _throw(`${error_id} _aTypeOf(a_variable) <> 'Function' but instead ${actual}`);
  failed_a_type_of +=type_czech.failureTally();
  passed_a_type_of ++;
}


