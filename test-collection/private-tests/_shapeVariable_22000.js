/* eslint-disable */



tested_shapeVariable = 0;
failed_shapeVariable = 0;

_shapeVariable_22001();
_shapeVariable_22002();
_shapeVariable_22003();   // empty
_shapeVariable_22004();
// _shapeVariable_22005();
// _shapeVariable_22006();
_shapeVariable_22007();
_shapeVariable_22008();

 TEST_total_fails += failed_shapeVariable;
 TEST_total_checks += tested_shapeVariable;

 if (TEST_show_random) {
  console.log('_shapeVariable failed tests 22000', failed_shapeVariable);
  console.log('_shapeVariable passed tests 22000', tested_shapeVariable);
}






///////////////////////////////







function _shapeVariable_22001(){
  var TYPE_CZECH_current_test_number = '22001';     
  var check_param =  7;  
  var check_shape =   'number';   
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeVariable(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeVariable !=='undefined') failed_shapeVariable ++;
        }
        if (typeof tested_shapeVariable !=='undefined') tested_shapeVariable ++;
}





function _shapeVariable_22002(){
  var TYPE_CZECH_current_test_number = '22002';     
  var check_param =   8;  
  var check_shape =   'string';   
  var expect_error =   `TE@226 - The value '8', which is a 'number', is not a 'string'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeVariable(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeVariable !=='undefined') failed_shapeVariable ++;
        }
        if (typeof tested_shapeVariable !=='undefined') tested_shapeVariable ++;
}



function _shapeVariable_22003(){
}



function _shapeVariable_22004(){
  var TYPE_CZECH_current_test_number = '22004';     
  var check_param =  [17];    
  var check_shape =   ['number'];    
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeVariable(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeVariable !=='undefined') failed_shapeVariable ++;
        }
        if (typeof tested_shapeVariable !=='undefined') tested_shapeVariable ++;
}



function _shapeVariable_22005(){
  var TYPE_CZECH_current_test_number = '22005';      // same test as below ????  
  var check_param =  [17, 'extra'];    
  var check_shape =   ['number'];    
  var expect_error =  `TE@214 -  ELEMENT '1' is assumed to be a 'number', but is mistakenly a 'string'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeVariable(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeVariable !=='undefined') failed_shapeVariable ++;
        }
        if (typeof tested_shapeVariable !=='undefined') tested_shapeVariable ++;
}









function _shapeVariable_22006(){
  var TYPE_CZECH_current_test_number = '22006';       
  var check_param =  [17, 'extra'];    
  var check_shape =   ['number'];    
  var expect_error =  `TE@214 -  ELEMENT '1' is assumed to be a 'number', but is mistakenly a 'string'`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeVariable(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeVariable !=='undefined') failed_shapeVariable ++;
        }
        if (typeof tested_shapeVariable !=='undefined') tested_shapeVariable ++;
}








function _shapeVariable_22007(){
  var TYPE_CZECH_current_test_number = '22007';       
  var check_param =   {age:17,       old:false, extra:'superfluous'};   
  var check_shape =    {age:'number', old:'boolean'};         
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeVariable(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeVariable !=='undefined') failed_shapeVariable ++;
        }
        if (typeof tested_shapeVariable !=='undefined') tested_shapeVariable ++;
}



















function _shapeVariable_22008(){
  var TYPE_CZECH_current_test_number = '22008';       
  var check_param = {age:18,       old:true, an_extra_key:'superfluous'};     
  var check_shape =    {age:'number', old:'boolean'};         
  var expect_error = ``; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test._shapeVariable(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeVariable !=='undefined') failed_shapeVariable ++;
        }
        if (typeof tested_shapeVariable !=='undefined') tested_shapeVariable ++;
}


