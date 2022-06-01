/* eslint-disable */


pass_count = 0;
fail_count = 0;



_shapeContainer_17001();
_shapeContainer_17002();
_shapeContainer_17003();
_shapeContainer_17004();
_shapeContainer_17005();
_shapeContainer_17006();
_shapeContainer_17007();
_shapeContainer_17008();
_shapeContainer_17009();




_shapeContainer_17101();
_shapeContainer_17102();
 _shapeContainer_17103();



//////////////////////////////////////


function _shapeContainer_17001(){
  var TYPE_CZECH_current_test_number = '17001';       
  var check_container ={ r: 11 };                                                           
  var container_shape = { r: "number" };  
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}



function _shapeContainer_17002(){
  var TYPE_CZECH_current_test_number = '17002';       
  var check_container =[ 13, 14, 15 ];                                                            
  var container_shape =[ "number" ]; 
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}



function _shapeContainer_17003(){
  var TYPE_CZECH_current_test_number = '17003';       
  var check_container =[ 13, 14, 15 ];                                                            
  var container_shape ={ r: "number" };  
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =  `TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[13,14,15]`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

function _shapeContainer_17004(){
  var TYPE_CZECH_current_test_number = '17004';       
  var check_container = [  [[1, 2], [3, 4]], [[5, false], [7, false]] ];                                                             
  var container_shape =[  [["number", "number"]],     [['number', "boolean"]] ];  
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   ``; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}



function _shapeContainer_17005(){
  var TYPE_CZECH_current_test_number = '17005';       
  var check_container = [  [[1, 2],     [3, 4]],         [[5, false], ['a', false]] ];                                                                
  var container_shape = [  [["number", "number"], ["number", "number"]],     [['number', "boolean"], ['number', "boolean"]] ];   
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'string' with a value of a"; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}






function _shapeContainer_17006(){
  var TYPE_CZECH_current_test_number = '17006';       
  var check_container = [  {a:[[1, 2], [3, 4]]}, {b:[[5, false], [7, false]]} ];                                                                
  var container_shape = [  {a:[["number", "number"]]},     {b:[['number', "boolean"]]} ];      
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   ``;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}





function _shapeContainer_17007(){
  var TYPE_CZECH_current_test_number = '17007';       
  var check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[[5, false], [7, false]]} ];                                                                  
  var container_shape =   [  {a:[["number", "number"], ["number", "number"]]},     {b:[['number', "boolean"], ['number', "boolean"]]} ];       
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "";
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}



function _shapeContainer_17008(){
  var TYPE_CZECH_current_test_number = '17008';       
  var check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[[5, 1], [7, false]]} ];                                                      
  var container_shape =   [  {a:[["number", "number"], ["number", "number"]]},     {b:[['number', "boolean"], ['number', "boolean"]]} ];      
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "TE@214 -  ELEMENT '1' is assumed to be a 'boolean', but is mistakenly a 'number' with a value of 1";
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}





function _shapeContainer_17009(){
  var TYPE_CZECH_current_test_number = '17009';       
  var check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[['Xy', false], [7, false]]} ];                                              
  var container_shape = [  {a:[["number", "number"], ["number", "number"]]},     {b:[['number', "boolean"],   ['number', "boolean"]]} ];     
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'string' with a value of Xy"; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}





////////////////////////////////////////////////////////////////////////////////////


function _shapeContainer_17101(){
  var TYPE_CZECH_current_test_number = '17101';       
  var check_container =[  {A:{B:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];                                
  var container_shape =   [  {A:{B:[["number", "number"], ["number", "number"]]}},     {C:{D:[['number', "boolean"], ['number', "boolean"]]}} ];     
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =  ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}







function _shapeContainer_17102(){
  var TYPE_CZECH_current_test_number = '17102';       
  var check_container =[  {E:{B:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];                  
  var container_shape =  [  {A:{B:[["number", "number"], ["number", "number"]]}},     {C:{D:[['number', "boolean"], ['number', "boolean"]]}} ];       
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   `TE@216 -  Key 'A', which has a type of '{B:[["number","number"],["number","number"]]}', is missing in the checked object`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE' ); //           ,  'DEBUG-CONSOLE-TRACE'              );
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}





function _shapeContainer_17103(){
  var TYPE_CZECH_current_test_number = '17103';       
  var check_container = [  {A:{E:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];     
  var container_shape = [  {A:{B:[["number", "number"], ["number", "number"]]}},     {C:{D:[['number', "boolean"], ['number', "boolean"]]}} ];     
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   `TE@216 -  Key 'B', which has a type of '[["number","number"],["number","number"]]', is missing in the checked object`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

if (fail_count>0) {
  the_problem = `private-tests/_shapeContainer_17100.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;

