/* eslint-disable */

pass_count = 0;
fail_count = 0;




checkParam_typeEither_07000();

checkParam_typeEither_07001();
checkParam_typeEither_07002();
 checkParam_typeEither_07003();
 checkParam_typeEither_07004();
 checkParam_typeEither_07005();
 checkParam_typeEither_07006();
 checkParam_typeEither_07007();

function printTestName(an_str) {
  if (typeof window !== "undefined") {
    if (typeof window.browserList === 'function') {
      if (window.browserList()) {
        console.log(pass_count, an_str);
      }
    }
  } else {
    if (typeof global.nodejsList === 'function') {
      if (global.nodejsList()) {
        console.log(pass_count, an_str);
      }
    }
   } 
}
///////////////////////////////////////////

function checkParam_typeEither_07000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function A_PRE_check_yourFunc(a_var) {
      type_issue = type_czech.checkParam_typeEither(a_var, [ "string", "number" ]);
      //console.log('checkParam_typeEither_07000', a_var, type_issue)
      //if (!type_issue) console.log(a_var, type_issue)
      return type_issue;
    }
                    A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                    function A_yourFunc(){ }
     A_yourFunc(9)        // pass 1 F number
    A_yourFunc(NaN)      // pass 2 M empty number
    A_yourFunc('an-str') // pass 3 I string
    A_yourFunc('')       // pass 4 P empty string
    pass_count += expectedAndFailedTests(4, 0, 'A-Pass', 'checkParam_typeEither().md');



   A_yourFunc([11,12,13])               // fail 1 T multi array
    A_yourFunc(14,15,16)                 // fail 2 U multi args 
 A_yourFunc([1])                      // fail 3 A array 



    A_yourFunc(234n)                     // fail 4 B bigint
    A_yourFunc(false)                    // fail 5 C boolean
    
    A_yourFunc(new Date('2005-06-07'))   // fail 6 D date
    A_yourFunc(a=>a+8)                   // fail 7 E function
    A_yourFunc({b:10})                   // fail 8 G object
    A_yourFunc(/d/)                      // fail 9 H regex
    A_yourFunc(Symbol('sym'))            // fail 10 J symbol

    A_yourFunc([])                       // fail 11 K empty array
    A_yourFunc(new Date(''))             // fail 12 L empty date
    A_yourFunc({})                       // fail 13 N empty object
    A_yourFunc(/(?:)/)                   // fail 14 O empty regex
    A_yourFunc(null)                     // fail 15 Q empty null
    A_yourFunc(undefined)                // fail 16 R empty undefined
   A_yourFunc()                         // fail 17 S empty nothing
    A_yourFunc([[17,18,19]])             // fail 18 V multi in single
    A_yourFunc([20], [21])               // fail 19 W two singles
    A_yourFunc([22,23,24], [25,26,27])   // fail 20 X two multis




    A_yourFunc({d:{}})                   // fail 21 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])      // fail 22 Z empty in object
    A_yourFunc(['',''] )                 // fail 23 0 empty - [str str]
    A_yourFunc([[],[]] )                 // fail 24 1 empty - [arr arr]
    A_yourFunc([{},{}] )                 // fail 25 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})            // fail 26 3 empty - {arr arr}
    A_yourFunc({i:''},{j:''})            // fail 27 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})            // fail 28 5 empty - {obj obj}
    pass_count += expectedAndFailedTests(28, 28, 'A-Fail', 'checkParam_typeEither().md');
printTestName("checkParam_typeEither_07000")   


}


function checkParam_typeEither_07001(){
  var TYPE_CZECH_current_test_number = '07001';       
  var check_param =  {};
  var check_shape =   {a:1};           
  var expect_error =  `ME@402 - checkParam_typeEither() called with a 2nd parameter as a non - array shape of {"a":1}`;  
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
  printTestName("checkParam_typeEither_07001")   

}


function checkParam_typeEither_07002(){
  var TYPE_CZECH_current_test_number = '07002';       
  var check_param =  177;
  var check_shape =  ["string"];            
  var expect_error =   `UE@701 - checkParam_typeEither()  needs at least 2 choices for an Either, not 1 of ["string"]`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
  printTestName("checkParam_typeEither_07002")   

}


function checkParam_typeEither_07003(){
  var TYPE_CZECH_current_test_number = '07003';       
  var check_param =  {a:1,         b:{c:2} } ;
  var type_a       = {a:"number",  b:{c:"number"}};
  var type_b       = {a:"number",  b:{c:"string"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
  printTestName("checkParam_typeEither_07003")   

}

function checkParam_typeEither_07004(){
  var TYPE_CZECH_current_test_number = '07004';       
  var check_param =  {a:1,         b:{c:'d'} } ;
  var type_a       = {a:"number",  b:{c:"number"}};
  var type_b       = {a:"number",  b:{c:"string"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
  printTestName("checkParam_typeEither_07004")   

}

function checkParam_typeEither_07005(){
  var TYPE_CZECH_current_test_number = '07005';       
  var check_param =  {a:1,         b:{c:false} } ;
  var type_a       = {a:"number",  b:{c:"number"}};
  var type_b       = {a:"number",  b:{c:"string"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  `TE@213 - Property 'c' is indicated to be a 'number', but is inaccurately a 'boolean' : false, TE@213 - Property 'c' is indicated to be a 'string', but is inaccurately a 'boolean' : false`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
  printTestName("checkParam_typeEither_07005")   

}

function checkParam_typeEither_07006(){
  var TYPE_CZECH_current_test_number = '07006';       
  var check_param =  {v_1:"hi",      v_2:false,     v_extra:"more than this"};
  var type_a       = {v_1:"string",  v_2:"boolean"};
  var type_b       = {v_1:"string",  v_2:"number"};
  var check_shape = [type_a, type_b];            
  var expect_error = `TE@209 - Extra key in checked object - (v_extra:'more than this'), TE@213 - Property 'v_2' is indicated to be a 'number', but is inaccurately a 'boolean' : false`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
printTestName("checkParam_typeEither_07006")   
}


function checkParam_typeEither_07007(){
  var TYPE_CZECH_current_test_number = '07007';       
  var check_param =  {inner_1:[{g:new Date}]};
  var type_a       = {inner_1:[{g:"number"}]};
  var type_b       = {inner_1:[{g:"string"}]};
  var type_c       = {inner_1:[{g:"date"}]}; 
  var check_shape = [type_a, type_b, type_c];            
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
  if (typeof pass_count !== 'undefined') pass_count++;
printTestName("checkParam_typeEither_07007")   
  
}





if (fail_count>0) {
  the_problem = `check-tests/checkParam_typeEither_07000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;