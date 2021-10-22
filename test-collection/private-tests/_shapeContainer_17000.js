/* eslint-disable */



tested_shapeContainer = 0;
failed_shapeContainer = 0;

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

TEST_total_fails += failed_shapeContainer;
TEST_total_checks += tested_shapeContainer;

if (TEST_show_random) {
  console.log('_shapeContainer failed tests 17000', failed_shapeContainer);
  console.log('_shapeContainer passed tests 17000', tested_shapeContainer);
}

//////////////////////////////////////


function _shapeContainer_17001(){
  var TYPE_CZECH_current_test_number = '17001';       
  var check_container ={ r: 11 };                                                           
  var container_shape = { r: "Number" };  
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}



function _shapeContainer_17002(){
  var TYPE_CZECH_current_test_number = '17002';       
  var check_container =[ 13, 14, 15 ];                                                            
  var container_shape =[ "Number" ]; 
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}



function _shapeContainer_17003(){
  var TYPE_CZECH_current_test_number = '17003';       
  var check_container =[ 13, 14, 15 ];                                                            
  var container_shape ={ r: "Number" };  
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =  `TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[13,14,15]`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}

function _shapeContainer_17004(){
  var TYPE_CZECH_current_test_number = '17004';       
  var check_container = [  [[1, 2], [3, 4]], [[5, false], [7, false]] ];                                                             
  var container_shape =[  [["N", "N"]],     [['N', "B"]] ];  
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   ""; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}



function _shapeContainer_17005(){
  var TYPE_CZECH_current_test_number = '17005';       
  var check_container = [  [[1, 2], [3, 4]], [[5, false], ['a', false]] ];                                                                
  var container_shape = [  [["N", "N"]],     [['N', "B"]] ];   
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "TE@214 -  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'String'"; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}






function _shapeContainer_17006(){
  var TYPE_CZECH_current_test_number = '17006';       
  var check_container = [  {a:[[1, 2], [3, 4]]}, {b:[[5, false], [7, false]]} ];                                                                
  var container_shape = [  {a:[["N", "N"]]},     {b:[['N', "B"]]} ];      
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "";
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}





function _shapeContainer_17007(){
  var TYPE_CZECH_current_test_number = '17007';       
  var check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[[5, false], [7, false]]} ];                                                                  
  var container_shape =   [  {a:[["N", "N"], ["N", "N"]]},     {b:[['N', "B"], ['N', "B"]]} ];       
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "";
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}



function _shapeContainer_17008(){
  var TYPE_CZECH_current_test_number = '17008';       
  var check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[[5, 1], [7, false]]} ];                                                      
  var container_shape =   [  {a:[["N", "N"], ["N", "N"]]},     {b:[['N', "B"], ['N', "B"]]} ];      
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "TE@214 -  ELEMENT '1' is assumed to be a 'Boolean', but is mistakenly a 'Number'";
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}





function _shapeContainer_17009(){
  var TYPE_CZECH_current_test_number = '17009';       
  var check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[['a', false], [7, false]]} ];                                              
  var container_shape =   [  {a:[["N", "N"], ["N", "N"]]},     {b:[['N', "B"], ['N', "B"]]} ];     
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   "TE@214 -  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'String'"; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}





////////////////////////////////////////////////////////////////////////////////////


function _shapeContainer_17101(){
  var TYPE_CZECH_current_test_number = '17101';       
  var check_container =[  {A:{B:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];                                
  var container_shape =   [  {A:{B:[["N", "N"], ["N", "N"]]}},     {C:{D:[['N', "B"], ['N', "B"]]}} ];     
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =  ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}







function _shapeContainer_17102(){
  var TYPE_CZECH_current_test_number = '17102';       
  var check_container =[  {E:{B:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];                  
  var container_shape =  [  {A:{B:[["N", "N"], ["N", "N"]]}},     {C:{D:[['N', "B"], ['N', "B"]]}} ];       
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   `TE@216 -  The key 'A', which has a type of '{B:[["N","N"],["N","N"]]}', is missing in the checked object`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}





function _shapeContainer_17103(){
  var TYPE_CZECH_current_test_number = '17103';       
  var check_container = [  {A:{E:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];     
  var container_shape = [  {A:{B:[["N", "N"], ["N", "N"]]}},     {C:{D:[['N', "B"], ['N', "B"]]}} ];     
  var exact_shape = 'TYPE-EXTRAS';     
  var expect_error =   `TE@216 -  The key 'B', which has a type of '[["N","N"],["N","N"]]', is missing in the checked object`; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_container, container_shape);
        var actual_error = type_czech_test._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_container, container_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_shapeContainer !=='undefined') failed_shapeContainer ++;
        }
        if (typeof tested_shapeContainer !=='undefined') tested_shapeContainer ++;
}