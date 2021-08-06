/* eslint-disable */

passed_shapeCollectionTypes = 0;

failed_shapeCollectionTypes = 0;

_shapeCollectionTypes_16001(16001);
_shapeCollectionTypes_16002(16002);
_shapeCollectionTypes_16003(16003);

total_fails += failed_shapeCollectionTypes;
console.log('_shapeCollectionTypes failed tests', failed_shapeCollectionTypes);

total_checks += passed_shapeCollectionTypes;
console.log('_shapeCollectionTypes passed tests', passed_shapeCollectionTypes);

function _shapeCollectionTypes_16001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object =  { r: 11 };    
  const object_shape =  { r: "Number" }      
  const exact_shape = 'TYPE-EXTRAS' ;
  const before_str = beforeCheck(check_object, object_shape);
  const actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  const expected = ""; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeCollectionTypes +=type_czech.failureTally();
  passed_shapeCollectionTypes ++;
}

function _shapeCollectionTypes_16002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object =  { r: 11, u:"illegal" };    
  const object_shape =  { r: "Number" }      
  const exact_shape = 'TYPE-VERIFY';
  const before_str = beforeCheck(check_object, object_shape);
  const actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  const expected = `TC@39 - Extra key in checked object - (u:'illegal')`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeCollectionTypes +=type_czech.failureTally();
  passed_shapeCollectionTypes ++;
}

function _shapeCollectionTypes_16003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_object =  { r: 11, qwe:null};    
  const object_shape =  { r: "Number", qwe:"Object" } 
  const exact_shape = 'TYPE-VERIFY';
  const before_str = beforeCheck(check_object, object_shape);
  const actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  const expected = `TC@42 - Key 'qwe' was determined to be a 'Object' but was instead 'null'`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeCollectionTypes +=type_czech.failureTally();
  passed_shapeCollectionTypes ++;
}