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
  TYPE_CZECH_current_test_number = '16001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_object =  { r: 11 };    
  object_shape =  { r: "Number" }      
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_object, object_shape);
  actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  expected = ""; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeCollectionTypes !== 'undefined') {
    failed_shapeCollectionTypes +=type_czech.failureTally();
    passed_shapeCollectionTypes ++;
  }
}

function _shapeCollectionTypes_16002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '16002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_object =  { r: 11, u:"illegal" };    
  object_shape =  { r: "Number" }      
  exact_shape = 'TYPE-VERIFY';
  before_str = beforeCheck(check_object, object_shape);
  actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  expected = `TC@39 - Extra key in checked object - (u:'illegal')`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeCollectionTypes !== 'undefined') {
    failed_shapeCollectionTypes +=type_czech.failureTally();
    passed_shapeCollectionTypes ++;
  }
}

function _shapeCollectionTypes_16003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '16003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_object =  { r: 11, qwe:null};    
  object_shape =  { r: "Number", qwe:"Object" } 
  exact_shape = 'TYPE-VERIFY';
  before_str = beforeCheck(check_object, object_shape);
  actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
  afterCheck(check_object, object_shape, before_str, error_id);
  expected = `TC@42 - Key 'qwe' was determined to be a 'Object' but was instead 'null'`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeCollectionTypes !== 'undefined') {
    failed_shapeCollectionTypes +=type_czech.failureTally();
    passed_shapeCollectionTypes ++;
  }
}