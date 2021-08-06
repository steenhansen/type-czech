/* eslint-disable */

passed_shapeVariable = 0;
failed_shapeVariable = 0;

_shapeVariable_22001(22001);
_shapeVariable_22002(22002);
_shapeVariable_22003(22003);
_shapeVariable_22004(22004);
_shapeVariable_22005(22005);
_shapeVariable_22006(22006);
_shapeVariable_22007(22007);
_shapeVariable_22008(22008);

total_fails += failed_shapeVariable;
console.log('_shapeVariable failed tests', failed_shapeVariable);

total_checks += passed_shapeVariable;
console.log('_shapeVariable passed tests', passed_shapeVariable);

function _shapeVariable_22001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object = 7;
  const valid_shape =  'Number';
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected = ""; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeVariable +=type_czech.failureTally();
  passed_shapeVariable ++;
}

function _shapeVariable_22002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object = 8;
  const valid_shape =  'String';
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected = `The variable '8', which is a 'Number', is not a 'String'`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeVariable +=type_czech.failureTally();
  passed_shapeVariable ++;
}

function _shapeVariable_22003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object = [17];
  const valid_shape =  ['Number'];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS');
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeVariable +=type_czech.failureTally();
  passed_shapeVariable ++;
}

function _shapeVariable_22004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object = [17];
  const valid_shape =  ['Number'];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeVariable +=type_czech.failureTally();
  passed_shapeVariable ++;
}

function _shapeVariable_22005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object = [17, 'extra'];
  const valid_shape =  ['Number'];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS');
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected = `TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'String' : extra`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeVariable +=type_czech.failureTally();
  passed_shapeVariable ++;
}

function _shapeVariable_22006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object = [17, 'extra'];
  const valid_shape =  ['Number'];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected = `TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'String' : extra`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeVariable +=type_czech.failureTally();
  passed_shapeVariable ++;
}

function _shapeVariable_22007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object = {age:17,       old:false, extra:'superfluous'};
  const valid_shape =  {age:'Number', old:'Boolean'};
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS');
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeVariable +=type_czech.failureTally();
  passed_shapeVariable ++;
}

function _shapeVariable_22008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object = {age:18,       old:true, extra:'superfluous'};
  const valid_shape =  {age:'Number', old:'boolean'};
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected = `TC@40 - The type 'boolean' is not validTC@39 - Extra key in checked object - (extra:'superfluous')`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeVariable +=type_czech.failureTally();
  passed_shapeVariable ++;
}