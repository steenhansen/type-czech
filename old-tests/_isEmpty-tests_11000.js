/* eslint-disable */

passed_isEmpty = 0;
failed_isEmpty = 0;

_isEmpty_11001(11001);
_isEmpty_11002(11002);
_isEmpty_11003(11003);
_isEmpty_11004(11004);
_isEmpty_11005(11005);
_isEmpty_11006(11006);
_isEmpty_11007(11007);
_isEmpty_11008(11008);
_isEmpty_11009(11009);
_isEmpty_11010(11010);
_isEmpty_11011(11011);
_isEmpty_11012(11012);
_isEmpty_11013(11013);
_isEmpty_11014(11014);

total_fails += failed_isEmpty;
console.log('_missingKey failed tests', failed_isEmpty)

total_checks += passed_isEmpty;
console.log('_missingKey passed tests', passed_isEmpty)

function _isEmpty_11001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = new Date('12/12/2014');   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = false; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = new Date(1);   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = false; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = false;   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = false; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = 1;   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = false; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = 'x';   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = false; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = new Date('foo-bar 014');   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = true; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = new Date('23/25/2014');   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = true; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}


function _isEmpty_11008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = '';   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = true; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11009(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = {};   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = true; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11010(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = [];   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = true; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11011(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = null;   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = true; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11012(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = undefined;   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = true; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11013(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = NaN;   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = true; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

function _isEmpty_11014(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const a_var = 0;   
  const before_str = beforeCheck(a_var, '');
  const actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  const expected = false; 
  if (actual!==expected) _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  failed_isEmpty +=type_czech.failureTally();
  passed_isEmpty ++;
}

