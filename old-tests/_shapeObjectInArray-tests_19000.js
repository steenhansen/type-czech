/* eslint-disable */

passed_shapeObjectInArray = 0;

failed_shapeObjectInArray = 0;

_shapeObjectInArray_19001(19001);
_shapeObjectInArray_19002(19002);
_shapeObjectInArray_19003(19003);
_shapeObjectInArray_19004(19004);
_shapeObjectInArray_19005(19005);
_shapeObjectInArray_19006(19006);
_shapeObjectInArray_19007(19007);
_shapeObjectInArray_19008(19008);


total_fails += failed_shapeObjectInArray;
console.log('_shapeObjectInArray failed tests', failed_shapeObjectInArray)

total_checks += passed_shapeObjectInArray;
console.log('_shapeObjectInArray passed tests', passed_shapeObjectInArray)

function _shapeObjectInArray_19001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array =  [ {r:11}, {r:22}, {r:33} ] ;
  const object_type =  {r:"Number"};
  const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = ""; 
  if (actual!==expected) _throw(`${error_id} _shapeObjectInArray() misfired with : ${actual}`);
  failed_shapeObjectInArray +=type_czech.failureTally();
  passed_shapeObjectInArray ++;
}

function _shapeObjectInArray_19002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array =  [ {r:11} ] ;    
  const object_type =  {r:"String"} 
  const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@01 - Index '0' - TC@43 - Property 'r' is indicated to be a 'String', but is inaccurately a 'Number' : 11`; 
  if (actual!==expected) _throw(`${error_id} _shapeObjectInArray() misfired with : ${actual}`);
  failed_shapeObjectInArray +=type_czech.failureTally();
  passed_shapeObjectInArray ++;
}


function _shapeObjectInArray_19003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array =  [ {r:11}, {r:22}, {r:33} ] ;    
		const object_type =  {r:"Number"}      
		const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = ``; 
  if (actual!==expected) _throw(`${error_id} _shapeObjectInArray() misfired with : ${actual}`);
  failed_shapeObjectInArray +=type_czech.failureTally();
  passed_shapeObjectInArray ++;
}

function _shapeObjectInArray_19004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array =  [ {r:11} ] ;    
  const object_type =  {r:"String"} 
		const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@01 - Index '0' - TC@43 - Property 'r' is indicated to be a 'String', but is inaccurately a 'Number' : 11`; 
  if (actual!==expected) _throw(`${error_id} _shapeObjectInArray() misfired with : ${actual}`);
  failed_shapeObjectInArray +=type_czech.failureTally();
  passed_shapeObjectInArray ++;
}

function _shapeObjectInArray_19005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array =  [{r:11}, {X:22}, {r:33}] ;    
  const object_type = [{r:"n"}];      
  const exact_shape = 'TYPE-VERIFY';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@02 - Index '2' is presumed to be a '[object Object]', but is incorrectly a 'Object' : [{'r':11},{'X':22},{'r':33}]`; 
  if (actual!==expected) _throw(`${error_id} _shapeObjectInArray() misfired with : ${actual}`);
  failed_shapeObjectInArray +=type_czech.failureTally();
  passed_shapeObjectInArray ++;
}

function _shapeObjectInArray_19006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array = [{r:11}, {r:22}, {r:33}];    
  const object_type = {Y:"N"};      
  const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@01 - Index '2' - TC@46 -  The key 'Y', which has a type of 'N', is missing in the checked object`; 
  if (actual!==expected) _throw(`${error_id} _shapeObjectInArray() misfired with : ${actual}`);
  failed_shapeObjectInArray +=type_czech.failureTally();
  passed_shapeObjectInArray ++;
}


function _shapeObjectInArray_19007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array = [{r:11}, {r:22}, {r:33}];    
  const object_type = "N";      
  const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@02 - Index '2' is presumed to be a 'N', but is incorrectly a 'Object' : [{'r':11},{'r':22},{'r':33}]`; 
  if (actual!==expected) _throw(`${error_id} _shapeObjectInArray() misfired with : ${actual}`);
  failed_shapeObjectInArray +=type_czech.failureTally();
  passed_shapeObjectInArray ++;
}



function _shapeObjectInArray_19008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const check_array = {c:{r:11}, d:{r:22}, e:{r:33}};    
  const object_type = "N";      
  const exact_shape = 'TYPE-EXTRAS';
  const before_str = beforeCheck(check_array, object_type);
  const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
  afterCheck(check_array, object_type, before_str, error_id);
  const expected = `TC@98 - Variable 'check_array' must be an array but is instead a 'Object', : {'c':{'r':11},'d':{'r':22},'e':{'r':33}}`; 
  if (actual!==expected) _throw(`${error_id} _shapeObjectInArray() misfired with : ${actual}`);
  failed_shapeObjectInArray +=type_czech.failureTally();
  passed_shapeObjectInArray ++;
}
