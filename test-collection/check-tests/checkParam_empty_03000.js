/* eslint-disable */

tested_checkParam_empty = 0;
failed_checkParam_empty = 0;

checkParam_empty_03000();

checkParam_empty_03001();
checkParam_empty_03002();
checkParam_empty_03003();
checkParam_empty_03004();
checkParam_empty_03005();
checkParam_empty_03006();
checkParam_empty_03007();
checkParam_empty_03008();
checkParam_empty_03009();

checkParam_empty_03010();
checkParam_empty_03011();
checkParam_empty_03012();
checkParam_empty_03013();
checkParam_empty_03014();
checkParam_empty_03015();
checkParam_empty_03016();
checkParam_empty_03017();
checkParam_empty_03018();
checkParam_empty_03019();

checkParam_empty_03020();
checkParam_empty_03021();
checkParam_empty_03022();
checkParam_empty_03023();
checkParam_empty_03024();
checkParam_empty_03025();
checkParam_empty_03026();
checkParam_empty_03027();
checkParam_empty_03028();
checkParam_empty_03029();

checkParam_empty_03030();
checkParam_empty_03031();
checkParam_empty_03032();
checkParam_empty_03033();
checkParam_empty_03034();
checkParam_empty_03035();
checkParam_empty_03036();
checkParam_empty_03037();
checkParam_empty_03038();
checkParam_empty_03039();

checkParam_empty_03040();
checkParam_empty_03041();
checkParam_empty_03042();
checkParam_empty_03043();
checkParam_empty_03044();
checkParam_empty_03045();
checkParam_empty_03046();
checkParam_empty_03047();
checkParam_empty_03048();
checkParam_empty_03049();

checkParam_empty_03050();
checkParam_empty_03051();

TEST_total_fails += failed_checkParam_empty;
TEST_total_checks += tested_checkParam_empty;       

if (TEST_show_random) {
  console.log('empty failed tests 03000', failed_checkParam_empty)
  console.log('empty passed tests 03000', tested_checkParam_empty)
}

///////////////////////////////////////
function checkParam_empty_03000(){

  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
  function PRE_check_yourFunc(a_variable) {
    empty_issue = type_czech.checkParam_empty(a_variable, 'EMPTY-ERROR');
    //if (empty_issue) console.log('checkParam_empty_03000', empty_issue)
    return empty_issue;
  }
              yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 
              function yourFunc(){ }

  yourFunc([1])                           // pass 1 A array
  yourFunc(234n)                          // pass 2 B bigint
  yourFunc(false)                         // pass 3 C boolean
  yourFunc(new Date('2005-06-07'))        // pass 4 D date
  yourFunc(a=>a+8)                        // pass 5 E function
  yourFunc(9)                             // pass 6 F number
  yourFunc({b:10})                        // pass 7 G object
  yourFunc(/d/)                           // pass 8 H regex
  yourFunc('an-str')                      // pass 9 I string
  yourFunc(Symbol('sym'))                 // pass 10 J symbol
  yourFunc([[17,18,19]])                  // pass 11 V multi in single
  yourFunc({d:{}})                        // pass 12 Y empty in object
  yourFunc([{e:[28,{f:[29]}]}])           // pass 13 Z empty in object
  TEST_total_checks += expectedAndFailedTests(13, 0, 'A-Pass', 'checkParam_empty().md');

  yourFunc([])                      // fail 1 K empty array
  yourFunc(new Date(''))            // fail 2 L empty date
  yourFunc(NaN)                     // fail 3 M empty number
  yourFunc({})                      // fail 4 N empty object
  yourFunc(/(?:)/)                  // fail 5 O empty regex
  yourFunc('')                      // fail 6 P empty string
  yourFunc(null)                    // fail 7 Q empty null
  yourFunc(undefined)               // fail 8 R empty undefined
  yourFunc()                        // fail 9 S empty nothing
  yourFunc([11,12,13])              // fail 10 T multi array
  yourFunc(14,15,16)                // fail 11 U multi args
  yourFunc([20], [21])              // fail 12 W two singles
  yourFunc([22,23,24], [25,26,27])  // fail 13 X two multis
  yourFunc(['',''] )                // fail 14 0 empty - [str str]
  yourFunc([[],[]] )                // fail 15 1 empty - [arr arr]
  yourFunc([{},{}] )                // fail 16 2 empty - [obj obj]
  yourFunc({g:[]},{h:[]})           // fail 17 3 empty - {arr arr}
  yourFunc({i:''},{j:''})           // fail 18 4 empty - {str str}
  yourFunc({k:{}},{l:{}})           // fail 19 5 empty - {obj obj}
  TEST_total_checks += expectedAndFailedTests(19, 19, 'A-Fail', 'checkParam_empty().md');
 


/*
### B. Test checkParam_empty() with single 'EMPTY-ERROR'
*/

  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
  function B_PRE_check_yourFunc(a_variable) {
    return type_czech.checkParam_empty(a_variable, 'EMPTY-ERROR')
  }
          B_yourFunc = type_czech.linkUp(B_yourFunc, B_PRE_check_yourFunc) 
          function B_yourFunc(){ }  
  B_yourFunc([1])                    // pass 1 not empty
  B_yourFunc(new Date('1999-01-01')) // pass 2 not empty
  B_yourFunc(1)                      // pass 3 not empty
  B_yourFunc({a:1})                  // pass 4 not empty
  B_yourFunc(/d/)                    // pass 5 not empty
  B_yourFunc('a-string')             // pass 6 not empty
  B_yourFunc([''])                   // pass 7 not empty
  B_yourFunc([[]])                   // pass 8 not empty
  B_yourFunc({a:{}})                 // pass 9 not empty
  B_yourFunc([{}])                   // pass 10 not empty
  B_yourFunc({a:[]})                 // pass 11 not empty
  B_yourFunc(0n)                     // pass 12 cannot be empty
  B_yourFunc(false)                  // pass 13 cannot be empty
  B_yourFunc(x=>x)                   // pass 14 cannot be empty
  B_yourFunc(Symbol())               // pass 15 cannot be empty
  TEST_total_checks += expectedAndFailedTests(15, 0, 'B-Pass', 'checkParam_empty().md');

  B_yourFunc(null)           // fail 1 is empty
  B_yourFunc(undefined)      // fail 2 is empty
  B_yourFunc('')             // fail 3 is empty
  B_yourFunc(NaN)            // fail 4 is empty
  B_yourFunc(new Date(''))   // fail 5 is empty
  B_yourFunc(new RegExp('')) // fail 6 is empty
  B_yourFunc(/(?:)/)         // fail 7 is empty
  B_yourFunc([])             // fail 8 is empty
  B_yourFunc({})             // fail 9 is empty
  B_yourFunc(1,2)            // fail 10 extra parameter 
  TEST_total_checks += expectedAndFailedTests(10, 10, 'B-Fail', 'checkParam_empty().md');
 


/*
### C. Test checkParam_empty() with arrays of one type ['EMPTY-ERROR']
*/

  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
  function C_PRE_check_yourFunc(a_variable) {
    return type_czech.checkParam_empty(a_variable, ['EMPTY-ERROR'])
  }
          C_yourFunc = type_czech.linkUp(C_yourFunc, C_PRE_check_yourFunc) 
          function C_yourFunc(){ }
  C_yourFunc([1])              // pass 1
  C_yourFunc(['a-str'])        // pass 2
  C_yourFunc([[[[[[0]]]]]])    // pass 3
  C_yourFunc([{a:{b:{c:{}}}}]) // pass 4
  C_yourFunc([{a:{}}])         // pass 5
  TEST_total_checks += expectedAndFailedTests(5, 0, 'C-Pass', 'checkParam_empty().md');

  C_yourFunc()            // fail 1
  C_yourFunc(1)           // fail 2
  C_yourFunc(1,2)         // fail 3 extra parameter
  C_yourFunc([])          // fail 4
  C_yourFunc({})          // fail 5
  C_yourFunc([{}])        // fail 6
  C_yourFunc([[]])        // fail 7
  C_yourFunc({a:[]})      // fail 8
  C_yourFunc(undefined)   // fail 9
  C_yourFunc(null)        // fail 10
  C_yourFunc(NaN)         // fail 11
  C_yourFunc('')          // fail 12
  C_yourFunc([undefined]) // fail 13
  C_yourFunc([null])      // fail 14
  C_yourFunc([NaN])       // fail 15
  C_yourFunc([''])        // fail 16
  TEST_total_checks += expectedAndFailedTests(16, 16, 'C-Fail', 'checkParam_empty().md');


















/*
### D. Test checkParam_empty() with single {a:'EMPTY-ERROR'}   NOT DONE
*/

  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
  function D_PRE_check_yourFunc(a_variable) {
    return type_czech.checkParam_empty(a_variable, {a:'EMPTY-ERROR'})
  }
          D_yourFunc = type_czech.linkUp(D_yourFunc, D_PRE_check_yourFunc) 
          function D_yourFunc(){ }
  D_yourFunc({a:[1]})              // pass 1
  D_yourFunc({a:['a-str']})        // pass 2
  D_yourFunc({a:[[[[[[0]]]]]]})    // pass 3
  D_yourFunc({a:[{a:{b:{c:{}}}}]}) // pass 4
  D_yourFunc({a:[{a:{}}]})         // pass 5
  D_yourFunc({a:1})                // pass 6
  D_yourFunc({a:[{}]})             // fail 7
  D_yourFunc({a:[[]]})             // fail 8
  D_yourFunc({a:{a:[]}})           // fail 9
  TEST_total_checks += expectedAndFailedTests(9, 0, 'D-Pass', 'checkParam_empty().md');

  D_yourFunc({a:1, b:2})    // fail 1 
  D_yourFunc({a:{}})        // fail 2
  D_yourFunc({a:''})        // fail 3
  D_yourFunc({a:[]})        // fail 4
  D_yourFunc({a:undefined}) // fail 5
  D_yourFunc({a:null})      // fail 6
  D_yourFunc({a:NaN})       // fail 7
  TEST_total_checks += expectedAndFailedTests(7, 7, 'D-Pass', 'checkParam_empty().md');
                          expected_tests = 16
                          expected_fails = 7




/*
### E. Test checkParam_empty() with arrays of one type ['EMPTY-OK', 'EMPTY-ERROR']
*/

  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
  function E_PRE_check_yourFunc(a_var, b_var) {
    return type_czech.checkParam_empty([a_var, b_var],  ['EMPTY-OK', 'EMPTY-ERROR'])
  }
          E_yourFunc = type_czech.linkUp(E_yourFunc, E_PRE_check_yourFunc) 
          function E_yourFunc(){ }
  E_yourFunc(2,3)           // pass 1
  E_yourFunc(2,[{}])        // pass 2
  E_yourFunc(2,[[]])        // pass 3
  E_yourFunc(2,{a:[]})      // pass 4
  E_yourFunc(2,[undefined]) // pass 5
  E_yourFunc(2,[null])      // pass 6
  E_yourFunc(2,[NaN])       // pass 7
  E_yourFunc(2,[''])        // pass 8
  TEST_total_checks += expectedAndFailedTests(8, 0, 'E-Pass', 'checkParam_empty().md');

  E_yourFunc(2,undefined)        // fail 1
  E_yourFunc(2,null)             // fail 2
  E_yourFunc(2,NaN)              // fail 3
  E_yourFunc(2,'')               // fail 4
  E_yourFunc(2,[])               // fail 5
  E_yourFunc(2,{})               // fail 6
  TEST_total_checks += expectedAndFailedTests(6, 6, 'E-Fail', 'checkParam_empty().md');
}

function checkParam_empty_03001(){
  var TYPE_CZECH_current_test_number = '03001';       
  var check_param =  "gasoline";
  var check_shape= "EMPTY-ERROR"; 
  var expect_error ='';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03002(){
  var TYPE_CZECH_current_test_number = '03002';       
  var check_param =   '';
  var check_shape= "EMPTY-ERROR"; 
  var expect_error = `EE@307 - EMPTY-ERROR states 'string' must not be empty for the value ''`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03003(){
  var TYPE_CZECH_current_test_number = '03003';       
  var check_param =   17;
  var check_shape= "EMPTY-ERROR"; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03004(){
  var TYPE_CZECH_current_test_number = '03004';       
  var check_param =   NaN;
  var check_shape= "EMPTY-ERROR"; 
  var expect_error = `EE@307 - EMPTY-ERROR states 'number' must not be empty for the value NaN`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03005(){
  var TYPE_CZECH_current_test_number = '03005';       
  var check_param =   18;
  var check_shape= "EMPTY-OK"; 
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03006(){
  var TYPE_CZECH_current_test_number = '03006';       
  var check_param =   18;
  var check_shape= "MT-WRONG-b"; 
  var expect_error = `EE@304 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'MT-WRONG-b'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03007(){
  var TYPE_CZECH_current_test_number = '03007';       
  var check_param =   10;
  var check_shape= "EMPTY-ERROR"; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03008(){
  var TYPE_CZECH_current_test_number = '03008';       
  var check_param =   "gasoline";
  var check_shape= "EMPTY-ERROR"; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03009(){
  var TYPE_CZECH_current_test_number = '03009';       
  var check_param =   "";
  var check_shape= "EMPTY-ERROR"; 
  var expect_error = `EE@307 - EMPTY-ERROR states 'string' must not be empty for the value ''`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03010(){
  var TYPE_CZECH_current_test_number = '03010';       
  var check_param =  17;
  var check_shape= "EMPTY-ERROR"; 
  var expect_error =  "";     
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03011(){
  var TYPE_CZECH_current_test_number = '03011';       
  var check_param = 0;
  var check_shape= "EMPTY-ERROR"; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03012(){
  var TYPE_CZECH_current_test_number = '03012';       
  var check_param = 18;
  var check_shape= ["EMPTY-OK"];   
  var expect_error =`TE@217 - Comparing 'number' parameter, with a value of 18, to expected shape of ["EMPTY-OK"].`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}





function checkParam_empty_03013(){
  var TYPE_CZECH_current_test_number = '03013';       
  var check_param = 18;
  var check_shape =  "MT-WRONG-c";     
  var expect_error =  `EE@304 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'MT-WRONG-c'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03014(){
  var TYPE_CZECH_current_test_number = '03014';       
  var check_param = {str:"a-string"};
  var check_shape = {str:"EMPTY-ERROR"};     
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03015(){
  var TYPE_CZECH_current_test_number = '03015';       
  var check_param = {str:""};
  var check_shape = {str:"EMPTY-ERROR"};     
  var expect_error = `EE@301 -  key 'str' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03016(){
  var TYPE_CZECH_current_test_number = '03016';       
  var check_param =  {numx:17};
  var check_shape =  {numx:"EMPTY-ERROR"}; 
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03017(){
  var TYPE_CZECH_current_test_number = '03017';       
  var check_param =  {numx:0};
  var check_shape =  {numx:"EMPTY-ERROR"}; 
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03018(){
  var TYPE_CZECH_current_test_number = '03018';       
  var check_param = {numx:NaN};
  var check_shape =  {numx:"EMPTY-ERROR"}; 
  var expect_error = `EE@301 -  key 'numx' is a 'number' which is reputed to be 'EMPTY-ERROR' but has a value of NaN`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03019(){
  var TYPE_CZECH_current_test_number = '03019';       
  var check_param = {num_y:18};
  var check_shape =   {num_y:"EMPTY-OK"};  
  var expect_error =   '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03020(){
  var TYPE_CZECH_current_test_number = '03020';       
  var check_param ={num_q: 18};
  var check_shape =     {num_q:"MT-WRONG-d"};
  var expect_error =  `EE@303 - Bad empty type key, 'MT-WRONG-d', must be either 'EMPTY-OK','EMPTY-ER','EMPTY-IG','OK','ER','IG'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03021(){
  var TYPE_CZECH_current_test_number = '03021';       
  var check_param = {num_JJ:18};
  var check_shape =    {num_y:"EMPTY-OK"};  
  var expect_error =   `EE@315 - Extra key in checked object - (num_JJ:18)TE@216 -  Key 'num_y', which has a type of 'EMPTY-OK', is missing in the checked object`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}




function checkParam_empty_03022(){
  var TYPE_CZECH_current_test_number = '03022';       
  var check_param =  {str:["gasoline"]};
  var check_shape =  {str:["EMPTY-ERROR"]};    
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03023(){
  var TYPE_CZECH_current_test_number = '03023';       
  var check_param =  {str:[""]};
  var check_shape =  {str:["EMPTY-ERROR"]};    
  var expect_error = `EE@311 - ELEMENT '0' is erroneously empty :`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03024(){
  var TYPE_CZECH_current_test_number = '03024';       
  var check_param =  {str:[17]};
  var check_shape =  {str:["EMPTY-ERROR"]};    
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03025(){
  var TYPE_CZECH_current_test_number = '03025';       
  var check_param ={str:[0]};
  var check_shape =  {str:["EMPTY-ERROR"]};    
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03026(){
  var TYPE_CZECH_current_test_number = '03026';       
  var check_param = {str:[NaN]};
  var check_shape =  {str:["EMPTY-ERROR"]};    
  var expect_error =  `EE@311 - ELEMENT '0' is erroneously empty :`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03027(){
  var TYPE_CZECH_current_test_number = '03027';       
  var check_param =  {str:[18]};
  var check_shape =  {str:["EMPTY-OK"]};   
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03028(){
  var TYPE_CZECH_current_test_number = '03028';       
  var check_param =  {str:[18]};
  var check_shape =  {str:["MT-WRONG-e"]};   
  var expect_error = `EE@312 - ELEMENT '0' is incorrect type, 'MT-WRONG-e', only [ER,EMPTY-ERROR,EMPTY-OK,OK,EMPTY-IGNORE,IG] allowed : [18]`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03029(){
  var TYPE_CZECH_current_test_number = '03029';       
  var check_param =  {str:"a-string"};
  var check_shape =  {str:"EMPTY-ERROR"};  
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03030(){
  var TYPE_CZECH_current_test_number = '03030';       
  var check_param =   {str:""};
  var check_shape =  {str:"EMPTY-ERROR"};  
  var expect_error = `EE@301 -  key 'str' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03031(){
  var TYPE_CZECH_current_test_number = '03031';       
  var check_param =   {numx:17};
  var check_shape =   {numx:"EMPTY-ERROR"};   
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03032(){
  var TYPE_CZECH_current_test_number = '03032';       
  var check_param =    {numx:0};
  var check_shape =   {numx:"EMPTY-ERROR"};   
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03033(){
  var TYPE_CZECH_current_test_number = '03033';       
  var check_param =    {num_y:18};
  var check_shape =    {num_y:"EMPTY-OK"};   
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03034(){
  var TYPE_CZECH_current_test_number = '03034';       
  var check_param =   {num_q: 18};
  var check_shape =   {num_q:"MT-WRONG-a"};  
  var expect_error =  `EE@303 - Bad empty type key, 'MT-WRONG-a', must be either 'EMPTY-OK','EMPTY-ER','EMPTY-IG','OK','ER','IG'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03035(){
  var TYPE_CZECH_current_test_number = '03035';       
  var check_param = {num_JJ:18};
  var check_shape =  {num_y:"EMPTY-OK"};
  var expect_error =  `EE@315 - Extra key in checked object - (num_JJ:18)TE@216 -  Key 'num_y', which has a type of 'EMPTY-OK', is missing in the checked object`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}




function checkParam_empty_03036(){
  var TYPE_CZECH_current_test_number = '03036';       
  var check_param = {0: [{num_TTTTTTT:18}], length:1};
  var check_shape =  [{num_iiiii:"EMPTY-OK"}];
  var expect_error = `EE@315 - Extra key in checked object - (num_TTTTTTT:18)TE@216 -  Key 'num_iiiii', which has a type of 'EMPTY-OK', is missing in the checked object`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03037(){
  var TYPE_CZECH_current_test_number = '03037';       
  var check_param = [{str:"a-string", num:17}, {str:"a-string", num:17}];
  var check_shape =  [{str:"EMPTY-ERROR", num:"EMPTY-OK"}, {str:"EMPTY-ERROR", num:"EMPTY-OK"}];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03038(){
  var TYPE_CZECH_current_test_number = '03038';       
  var check_param = [["a-string", 17],          ["a-string", 17]];
  var check_shape =  [["EMPTY-ERROR", "EMPTY-OK"], ["EMPTY-ERROR", "EMPTY-OK"]]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03039(){
  var TYPE_CZECH_current_test_number = '03039';       
  var check_param =  {one:{str:"a-string", num:17}, two:{str:"a-string", num:17}};
  var check_shape =  {one:{str:"EMPTY-ERROR", num:"EMPTY-OK"}, two:{str:"EMPTY-ERROR", num:"EMPTY-OK"}};   
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03040(){
  var TYPE_CZECH_current_test_number = '03040';       
  var check_param =  {three:["a-string", 17],          four:["a-string", 17]};
  var check_shape =  {three:["EMPTY-ERROR", "EMPTY-OK"], four:["EMPTY-ERROR", "EMPTY-OK"]}; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03041(){
  var TYPE_CZECH_current_test_number = '03041';       
  var check_param =  [["a-string", "b-string", "c-string"], ["a-string", "b-string", "c-string"]];
  var check_shape =  [["EMPTY-ERROR"], ["EMPTY-OK"]]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03042(){
  var TYPE_CZECH_current_test_number = '03042';       
  var check_param =  [["a-string", "b-string", "c-string"], ["x-string",  "y-string", "z-string"]];
  var check_shape =  [["EMPTY-ERROR"],                         ["EMPTY-OK", "EMPTY-ERROR", "EMPTY-ERROR"]];  
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03043(){
  var TYPE_CZECH_current_test_number = '03043';       
  var check_param =  [[1,2,3,4], ['a', 'b', 'c', 'd']]; 
  var check_shape =  [ ["EMPTY-ERROR"], ["EMPTY-ERROR"]]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03044(){
  var TYPE_CZECH_current_test_number = '03044';       
  var check_param =  ['a', 1]; 
  var check_shape =  [ "EMPTY-ERROR", "EMPTY-ERROR"];      
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03045(){
  var TYPE_CZECH_current_test_number = '03045';       
  var check_param =   {0:['a', 'b', 'c'], length:1};
  var check_shape =  [ "EMPTY-ERROR"];      
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03046(){
  var TYPE_CZECH_current_test_number = '03046';       
  var check_param =  'a-string'; 
  var check_shape = "EMPTY-ERROR";       
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}


function checkParam_empty_03047(){
  var TYPE_CZECH_current_test_number = '03047';       
  var check_param =  [];
  var check_shape = "EMPTY-ERROR";       
  var expect_error = `EE@307 - EMPTY-ERROR states 'array' must not be empty for the value []`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03048(){
  var TYPE_CZECH_current_test_number = '03048';       
  var check_param = [[]];
  var check_shape = "EMPTY-ERROR";       
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03049(){
  var TYPE_CZECH_current_test_number = '03049';       
  var check_param = {0:[{}], length:1} ;
  var check_shape = "EMPTY-ERROR";       
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}



function checkParam_empty_03050(){
  var TYPE_CZECH_current_test_number = '03050';       
  var check_param = [['a', 'b', 'c']];
  var check_shape = ["EMPTY-ERROR"];       
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

function checkParam_empty_03051(){
  var TYPE_CZECH_current_test_number = '03051';       
  var check_param =  [{a:99}];
  var check_shape = "EMPTY-ERROR";          
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_empty(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_empty !=='undefined') failed_checkParam_empty ++;
        }
        if (typeof tested_checkParam_empty !=='undefined') tested_checkParam_empty ++;
}

TEST_total_checks += 51;