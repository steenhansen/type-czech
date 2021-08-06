/* eslint-disable */

passed_shapeContainer = 0;

failed_shapeContainer = 0;

_shapeContainer_17001(17001);
_shapeContainer_17002(17002);
_shapeContainer_17003(17003);

total_fails += failed_shapeContainer;
console.log('_shapeContainer failed tests', failed_shapeContainer);

total_checks += passed_shapeContainer;
console.log('_shapeContainer passed tests', passed_shapeContainer);

function _shapeContainer_17001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_container =  { r: 11 };    
  const container_shape =  { r: "Number" };    
  const exact_shape = 'TYPE-EXTRAS' ;
  const before_str = beforeCheck(check_container, container_shape);
  const actual = type_czech._shapeContainer(check_container, container_shape, exact_shape);
  afterCheck(check_container, container_shape, before_str, error_id);
  const expected = ""; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeContainer +=type_czech.failureTally();
  passed_shapeContainer ++;
}


function _shapeContainer_17002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_container =  [ 13, 14, 15 ];    
  const container_shape =  [ "Number" ]; 
  const exact_shape = 'TYPE-EXTRAS' ;
  const before_str = beforeCheck(check_container, container_shape);
  const actual = type_czech._shapeContainer(check_container, container_shape, exact_shape);
  afterCheck(check_container, container_shape, before_str, error_id);
  const expected = ""; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeContainer +=type_czech.failureTally();
  passed_shapeContainer ++;
}

function _shapeContainer_17003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_container =  [ 13, 14, 15 ];    
  const container_shape =   { r: "Number" };  
  const exact_shape = 'TYPE-EXTRAS' ;
  const before_str = beforeCheck(check_container, container_shape);
  const actual = type_czech._shapeContainer(check_container, container_shape, exact_shape);
  afterCheck(check_container, container_shape, before_str, error_id);
  const expected = `TC@36 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[13,14,15]`; 
  if (actual!==expected) _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  failed_shapeContainer +=type_czech.failureTally();
  passed_shapeContainer ++;
}