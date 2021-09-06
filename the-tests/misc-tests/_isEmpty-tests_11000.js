/* eslint-disable */

tested_isEmpty = 0;
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

total_checks += tested_isEmpty;
console.log('_missingKey passed tests', tested_isEmpty)

function _isEmpty_11001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = new Date('12/12/2014');   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = new Date(1);   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = false;   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = 1;   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = 'x';   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = new Date('foo-bar 014');   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = new Date('23/25/2014');   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}


function _isEmpty_11008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = '';   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11009(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = {};   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11010(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = [];   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11011(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11011';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = null;   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11012(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11012';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = undefined;   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11013(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11013';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = NaN;   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = true; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

function _isEmpty_11014(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '11014';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_var = 0;   
  before_str = beforeCheck(a_var, '');
  actual = type_czech._isEmpty(a_var);
  afterCheck(a_var, '', before_str, error_id);
  expected = false; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isEmpty() misfired with : ${actual}`);
  }
  if (typeof failed_isEmpty !== 'undefined') {
    failed_isEmpty +=type_czech.failureTally();
    tested_isEmpty ++;
  }
}

