/* eslint-disable */

passed_shapeVariable = 0;
failed_shapeVariable = 0;

 _shapeVariable_22001();
 _shapeVariable_22002();
 _shapeVariable_22003();
 _shapeVariable_22004();
 _shapeVariable_22005();
_shapeVariable_22006();
 _shapeVariable_22007();
 _shapeVariable_22008();

total_fails += failed_shapeVariable;
console.log('_shapeVariable failed tests', failed_shapeVariable);

total_checks += passed_shapeVariable;
console.log('_shapeVariable passed tests', passed_shapeVariable);














function _shapeVariable_22001(){
  TYPE_CZECH_current_test_number = '22001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  check_object = 7;
  valid_shape =  'Number';
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected = ""; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeVariable !== 'undefined') {
    failed_shapeVariable +=type_czech.failureTally();
    passed_shapeVariable ++;
  }
}

















function _shapeVariable_22002(){
  TYPE_CZECH_current_test_number = '22002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  check_object = 8;
  valid_shape =  'String';
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected = `The variable '8', which is a 'Number', is not a 'String'`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeVariable !== 'undefined') {
    failed_shapeVariable +=type_czech.failureTally();
    passed_shapeVariable ++;
  }
}

















function _shapeVariable_22003(){
  TYPE_CZECH_current_test_number = '22003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  check_object = [17];
  valid_shape =  ['Number'];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS', type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected = ``; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeVariable !== 'undefined') {
    failed_shapeVariable +=type_czech.failureTally();
    passed_shapeVariable ++;
  }
}
















function _shapeVariable_22004(){
  TYPE_CZECH_current_test_number = '22004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  check_object = [17];
  valid_shape =  ['Number'];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY', type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected = ``; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeVariable !== 'undefined') {
    failed_shapeVariable +=type_czech.failureTally();
    passed_shapeVariable ++;
  }
}

















function _shapeVariable_22005(){
  TYPE_CZECH_current_test_number = '22005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  check_object = [17, 'extra'];
  valid_shape =  ['Number'];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS', type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected = `TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'String' : extra`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeVariable !== 'undefined') {
    failed_shapeVariable +=type_czech.failureTally();
    passed_shapeVariable ++;
  }
}


















function _shapeVariable_22006(){
  TYPE_CZECH_current_test_number = '22006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  check_object = [17, 'extra'];
  valid_shape =  ['Number'];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY', type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected = `TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'String' : extra`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeVariable !== 'undefined') {
    failed_shapeVariable +=type_czech.failureTally();
    passed_shapeVariable ++;
  }
}













function _shapeVariable_22007(){
  TYPE_CZECH_current_test_number = '22007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  check_object = {age:17,       old:false, extra:'superfluous'};
  valid_shape =  {age:'Number', old:'Boolean'};
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS');
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected = ``; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeVariable !== 'undefined') {
    failed_shapeVariable +=type_czech.failureTally();
    passed_shapeVariable ++;
  }
}











function _shapeVariable_22008(){
  TYPE_CZECH_current_test_number = '22008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  check_object = {age:18,       old:true, an_extra_key:'superfluous'};
  valid_shape =  {age:'Number', old:'boolean'};
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected = `TC@33 - The type 'boolean' is not a valid type, but it looks just like 'Boolean'TC@39 - Extra key in checked object - (an_extra_key:'superfluous')`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeVariable !== 'undefined') {
    failed_shapeVariable +=type_czech.failureTally();
    passed_shapeVariable ++;
  }
}