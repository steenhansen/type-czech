/* eslint-disable */


pass_count = 0;
fail_count = 0;



checkParam_type_05000();
checkParam_type_05001();
checkParam_type_05002();
checkParam_type_05003();
checkParam_type_05004();
checkParam_type_05005();
checkParam_type_05006();
checkParam_type_05007();
checkParam_type_05008();
checkParam_type_05009();

checkParam_type_05010();
checkParam_type_05011();
checkParam_type_05012();
checkParam_type_05013();
checkParam_type_05014();
checkParam_type_05015();
 checkParam_type_05016();
 checkParam_type_05017();
 checkParam_type_05018();

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
//////////////////////////////////////////////////////////

function checkParam_type_05000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
  function A_PRE_check_yourFunc(a_var) {
    type_issue = type_czech.checkParam_type(a_var, 'number')
   //console.log(a_var, 'type_issue', type_issue)
    return type_issue
  }
              A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
              function A_yourFunc(){ }
  A_yourFunc(9)   // pass 1 F number
  A_yourFunc(NaN) // pass 2 M empty number
  pass_count += expectedAndFailedTests(2, 0, 'A-Pass', 'checkParam_type().md');


  A_yourFunc([1])                    // fail 1 A array
  A_yourFunc(234n)                   // fail 2 B bigint
  A_yourFunc(false)                  // fail 3 C boolean
  A_yourFunc(new Date('2005-06-07')) // fail 4 D date
  A_yourFunc(a=>a+8)                 // fail 5 E function
  A_yourFunc({b:10})                 // fail 6 G object
  A_yourFunc(/d/)                    // fail 7 H regex
  A_yourFunc('an-str')               // fail 8 I string
  A_yourFunc(Symbol('sym'))          // fail 9 J symbol
  A_yourFunc([])                     // fail 10 K empty array
  A_yourFunc(new Date(''))           // fail 11 L empty date
  A_yourFunc({})                     // fail 12 N empty object
  A_yourFunc(/(?:)/)                 // fail 13 O empty regex
  A_yourFunc('')                     // fail 14 P empty string
  A_yourFunc(null)                   // fail 15 Q empty null
  A_yourFunc(undefined)              // fail 16 R empty undefined
  A_yourFunc()                       // fail 17 S empty nothing
  A_yourFunc([11,12,13])             // fail 18 T multi array
  A_yourFunc(14,15,16)               // fail 19 U multi args
  A_yourFunc([[17,18,19]])           // fail 20 V multi in single
  A_yourFunc([20], [21])             // fail 21 W two singles
  A_yourFunc([22,23,24], [25,26,27]) // fail 22 X two multis
  A_yourFunc({d:{}})                 // fail 23 Y empty in object
  A_yourFunc([{e:[28,{f:[29]}]}])    // fail 24 Z empty in object
  A_yourFunc(['',''] )               // fail 25 0 empty - [str str]
  A_yourFunc([[],[]] )               // fail 26 1 empty - [arr arr]
  A_yourFunc([{},{}] )               // fail 27 2 empty - [obj obj]
  A_yourFunc({g:[]},{h:[]})          // fail 28 3 empty - {arr arr}
  A_yourFunc({i:''},{j:''})          // fail 29 4 empty - {str str}
  A_yourFunc({k:{}},{l:{}})          // fail 30 5 empty - {obj obj}
  pass_count += expectedAndFailedTests(30, 30, 'A-Fail', 'checkParam_type().md');



    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function B_PRE_check_yourFunc(a_num, a_bool, a_date) {
      return type_czech.checkParam_type([a_num, a_bool, a_date], ['number', 'boolean', 'date'])
    }
            B_yourFunc = type_czech.linkUp(B_yourFunc, B_PRE_check_yourFunc) 
            function B_yourFunc(a_num, a_bool, a_date){ }
    B_yourFunc(1, false, new Date('1999-12-30') ) // pass 1
    B_yourFunc(1, false, new Date('1999-99-99') ) // pass 2
    pass_count += expectedAndFailedTests(2, 0, 'B-Pass', 'checkParam_type().md');

    B_yourFunc(1, false, new Date('1999-12-30'), 'too many' )  // fail 1
    B_yourFunc(1)                                              // fail 2
    B_yourFunc('one', false, new Date('1999-12-30') )          // fail 3
    B_yourFunc()                                               // fail 4
    pass_count += expectedAndFailedTests(4, 4, 'B-Fail', 'checkParam_type().md');


/*
### C. A single Number. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function C_PRE_check_yourFunc(a_var) {
      return type_czech.checkParam_type(a_var, 'number')
    }
            C_yourFunc = type_czech.linkUp(C_yourFunc, C_PRE_check_yourFunc) 
            function C_yourFunc(){ }
    C_yourFunc(1)   // pass 1
    C_yourFunc(NaN) // pass 2
    pass_count += expectedAndFailedTests(2, 0, 'C-Pass', 'checkParam_type().md');
    C_yourFunc('one')  // fail 1
    C_yourFunc(true)   // fail 2
    C_yourFunc()       // fail 3
    C_yourFunc(1,2,3)  // fail 4
    pass_count += expectedAndFailedTests(4, 4, 'C-Fail', 'checkParam_type().md');


/*
### D. Exactly two Numbers as arguments. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function D_PRE_check_yourFunc(a_var, b_var) {
      return type_czech.checkParam_type([a_var, b_var], ['number', 'number'])
    }
              D_yourFunc = type_czech.linkUp(D_yourFunc, D_PRE_check_yourFunc) 
              function D_yourFunc(){ }
    D_yourFunc(1,2)         // pass 1
    D_yourFunc(NaN, NaN)    // pass 2
    pass_count += expectedAndFailedTests(2, 0, 'D-Pass', 'checkParam_type().md');
    D_yourFunc(1,2,3)   // fail 1
    D_yourFunc(1)       // fail 2
    D_yourFunc(1,'two') // fail 3
    D_yourFunc()        // fail 4
    pass_count += expectedAndFailedTests(4, 4, 'D-Fail', 'checkParam_type().md');

/*
##E. One array of Numbers, with any number of elements; from 0 ... x elements.  
*/                                                       

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function E_PRE_check_yourFunc(a_num) {
      return type_czech.checkParam_type(a_num, ['numbers'])
    }
            E_yourFunc = type_czech.linkUp(E_yourFunc, E_PRE_check_yourFunc) 
            function E_yourFunc(){ }
    E_yourFunc([1])                 // pass 1
    E_yourFunc([1,2,3,4,5,6,7,8,9]) // pass 2
    E_yourFunc([1,2,3])             // pass 3
    pass_count += expectedAndFailedTests(3, 0, 'E-Pass', 'checkParam_type().md');

    E_yourFunc({})        // fail 1
    E_yourFunc([[1,2,3]]) // fail 2
    E_yourFunc([1], [2])  // fail 3
    E_yourFunc()          // fail 4
    E_yourFunc('an-str')  // fail 5
    E_yourFunc(1)         // fail 6
    E_yourFunc(12,23,44)  // fail 7
    E_yourFunc([])        // fail 8
    pass_count += expectedAndFailedTests(8, 8, 'E-Fail', 'checkParam_type().md');

/*
###F. Two arrays of Numbers with exactly two elements each. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function F_PRE_check_yourFunc(a_array, b_array) {
      return type_czech.checkParam_type([a_array, b_array], [ ['number', 'number'], ['number', 'number'] ])
    }
              F_yourFunc = type_czech.linkUp(F_yourFunc, F_PRE_check_yourFunc) 
              function F_yourFunc(){ }
    F_yourFunc([1,2], [3,4])           // pass 1
    F_yourFunc([NaN,NaN], [NaN,NaN])   // pass 2
    pass_count += expectedAndFailedTests(2, 0, 'F-Pass', 'checkParam_type().md');
pass_count
   
   F_yourFunc([1,2], [3,4], [5,6])  // fail 1
    F_yourFunc()                    // fail 2
    F_yourFunc([1], [3,4,4])        // fail 3
    pass_count += expectedAndFailedTests(3, 3, 'F-Fail', 'checkParam_type().md');

/*
G. One array of arrays of two Numbers.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function G_PRE_check_yourFunc_05000(an_array) {
      return type_czech.checkParam_type(an_array, ['numbers', 'numbers'] )
    }
    G_yourFunc_05000 = type_czech.linkUp(G_yourFunc_05000, G_PRE_check_yourFunc_05000) 
            function G_yourFunc_05000(){ }

    G_yourFunc_05000([ [1,2], [3,49] ])               // pass 2

    pass_count += expectedAndFailedTests(1, 0, 'G-Pass', 'checkParam_type().md');

    G_yourFunc_05000([ [1,2,3] ])                          // fail 1
    G_yourFunc_05000([ [1] ])                              // fail 2
    G_yourFunc_05000([ [1,2], [3,4], [5,6], [7,'X'] ])     // fail 3 passed wrongly
    G_yourFunc_05000()                                     // fail 4
    G_yourFunc_05000([ [1,2] ])                      // pass 1     recursion blowout ????
    G_yourFunc_05000([ [1,2], [3,4], [5,6], [7,8] ]) // pass 3  passed wrongly
    pass_count += expectedAndFailedTests(6, 6, 'G-Fail', 'checkParam_type().md');

/*
### H. One Array with any type of contents.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function H_PRE_check_yourFunc(an_array) {
      return type_czech.checkParam_type(an_array, 'array')
    }
                H_yourFunc = type_czech.linkUp(H_yourFunc, H_PRE_check_yourFunc) 
                function H_yourFunc(){ }
    H_yourFunc([])                          // pass 1
    H_yourFunc([1,2,3])                     // pass 2
    H_yourFunc([1, true, 'three'])          // pass 3
    H_yourFunc([[[[1]]], {a:{b:{c:true}}}]) // pass 4
    pass_count += expectedAndFailedTests(4, 0, 'H-Pass', 'checkParam_type().md');

    H_yourFunc()  // fail 1
    H_yourFunc(1) // fail 2
    pass_count += expectedAndFailedTests(2, 2, 'H-Fail', 'checkParam_type().md');

/*
### I. One Object with any type of contents.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function I_PRE_check_yourFunc(an_object) {
      return type_czech.checkParam_type(an_object, 'object')
    }
            I_yourFunc = type_czech.linkUp(I_yourFunc, I_PRE_check_yourFunc) 
            function I_yourFunc(){ }
    I_yourFunc({})     // pass 1
    I_yourFunc({a:{}}) // pass 2
    pass_count += expectedAndFailedTests(2, 0, 'I-Pass', 'checkParam_type().md');

    I_yourFunc()   // fail 1
    I_yourFunc([]) // fail 2      
    pass_count += expectedAndFailedTests(2, 2, 'I-Fail', 'checkParam_type().md');

 

      
/*
### J. One Objects with x and y keys that are Numbers. 
*/
    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function J_PRE_check_yourFunc(an_object) {
      return type_czech.checkParam_type(an_object, {x:'number', y:'number'})
    }
                    J_yourFunc = type_czech.linkUp(J_yourFunc, J_PRE_check_yourFunc) 
                    function J_yourFunc(){ }
    J_yourFunc({x:0, y:1})  // pass 1
    pass_count += expectedAndFailedTests(1, 0, 'J-Pass', 'checkParam_type().md');

    J_yourFunc({x:0, y:false})  // fali 1
    J_yourFunc({x:0, xxx:1})    // fali 2
    J_yourFunc()                // fali 3
    pass_count += expectedAndFailedTests(3, 3, 'J-Pass', 'checkParam_type().md');





/*
### K. One Array with any number of Objects with x and y keys that are Numbers.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function K_PRE_check_yourFunc(an_array) {
      return type_czech.checkParam_type(an_array, [{x:'number', y:'number'}])
    }
              K_yourFunc = type_czech.linkUp(K_yourFunc, K_PRE_check_yourFunc) 
              function K_yourFunc(){ }
    K_yourFunc([{x:0, y:1}])                         // pass 1
    pass_count += expectedAndFailedTests(1, 0, 'K-Pass', 'checkParam_type().md');

    K_yourFunc()                                     // fail 1
    K_yourFunc([{x:0, y:1}, {x:0, y:1}, {x:0, y:1}]) // fail 2
    pass_count += expectedAndFailedTests(2, 2, 'K-Fail', 'checkParam_type().md');


/*
### L. Check only one parameter type of many. 
*/

// Problem is that we have to use checkParam_typeExtra here

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function L_PRE_check_yourFunc(param_1, param_2, param_3) {
      extra_issue = type_czech.checkParam_typeExtra(param_1, 'number')
      return extra_issue
    }
              L_yourFunc = type_czech.linkUp(L_yourFunc, L_PRE_check_yourFunc) 
              function L_yourFunc(param_1, param_2, param_3){ }
    L_yourFunc(1,2,3)           // pass 1   
    L_yourFunc(22, false, false) // pass 2 
    L_yourFunc(33, false)        // pass 3 
    pass_count += expectedAndFailedTests(3, 0, 'L-Pass', 'checkParam_type().md');

    L_yourFunc()          // fail 1
    L_yourFunc(false,44,555) // fail 2
    pass_count += expectedAndFailedTests(2, 2, 'L-Fail', 'checkParam_type().md');



/*
### M. Check two parameter types of many, not using arguments object. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function M_PRE_check_yourFunc(param_1, param_2, param_3) {
//      return type_czech.checkParam_type([param_1, param_3], ['number'])
      return type_czech.checkParam_typeExtra([param_1, param_2], ['number', 'number'])
    }
            M_yourFunc = type_czech.linkUp(M_yourFunc, M_PRE_check_yourFunc) 
            function M_yourFunc(){ }
    M_yourFunc(1,2,3)                    // pass 1
    M_yourFunc(1, 2, true)               // pass 2
    M_yourFunc(1, 2, true, false, true)  // pass 3
    pass_count += expectedAndFailedTests(3, 0, 'M-Pass', 'checkParam_type().md');

    M_yourFunc()              // fail 4
    M_yourFunc(false,false,3) // fail 5
    pass_count += expectedAndFailedTests(2, 2, 'M-Fail', 'checkParam_type().md');





/*
### N. Check two parameter types of many
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
    function N_PRE_check_yourFunc_05000(param_1, param_2, param_3) {
      return type_czech.checkParam_type([param_1, param_2, param_3], ['numbers'])
    }
            N_yourFunc_05000 = type_czech.linkUp(N_yourFunc_05000, N_PRE_check_yourFunc_05000) 
            function N_yourFunc_05000(){ }
    N_yourFunc_05000(1,2,3)               // pass 1
    pass_count += expectedAndFailedTests(1, 0, 'N-Pass', 'checkParam_type().md');

    N_yourFunc_05000(1, true, 3)               // fail 2
    N_yourFunc_05000(1, true, 3, false, true)  // fail 3
    N_yourFunc_05000()                         // fail 4
    N_yourFunc_05000(false,false,3)            // fail 5
    pass_count += expectedAndFailedTests(4, 4, 'N-Fail', 'checkParam_type().md');




printTestName("checkParam_type_05000") 









}




function checkParam_type_05001(){
  var TYPE_CZECH_current_test_number = '05001';       
  var check_param =  {cylinders:4, fuel:"gasoline", sneak:"extra"} ;
  var check_shape = {cylinders:"number", fuel:"string"};           
  var expect_error =`TE@209 - Extra key in checked object - (sneak:'extra')`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05001") 
}

function checkParam_type_05002(){
  var TYPE_CZECH_current_test_number = '05002';       
  var check_param =  {};
  var check_shape = 'object';          
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05002") 
}


function checkParam_type_05003(){
  var TYPE_CZECH_current_test_number = '05003';       
  var check_param = [[]];
  var check_shape = 'array';          
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05003") 
}



function checkParam_type_05004(){
  var TYPE_CZECH_current_test_number = '05004';       
  var check_param = {0:[{}], length:1};
  var check_shape = 'array';          
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05004") 
}


function checkParam_type_05005(){
  var TYPE_CZECH_current_test_number = '05005';       
  var check_param = {0:[{}], length:1};
  var check_shape = 'object';          
  var expect_error = `TE@225 - The value [], an 'array', is not a 'object'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05005") 
}



function checkParam_type_05006(){
  var TYPE_CZECH_current_test_number = '05006';       
  var check_param = {x:[{y:'z'}]};
  var check_shape = {x:[{y:'string'}]};           //   SAME AS TEST 5007 wat?
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05006") 
}



function checkParam_type_05007(){
  var TYPE_CZECH_current_test_number = '05007';       
  var check_param = {x:[{y:'z'}]};
  var check_shape = {x:[{y:'string'}]}; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05007") 
}




function checkParam_type_05008(){
  var TYPE_CZECH_current_test_number = '05008';       
  var check_param = {cylinders:4, fuel:"gasoline", sneak:"extra"};
  var check_shape = {cylinders:"number", fuel:"string"};
  var expect_error = `TE@209 - Extra key in checked object - (sneak:'extra')`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05008") 
}




function checkParam_type_05009(){
  var TYPE_CZECH_current_test_number = '05009';          // SAME AS 5010 ??? TEST
  var check_param = null;
  var check_shape = 'null'; 
  var expect_error = `TE@203 - The type 'null' is not a valid checkParam_type(), checkParam_typeEither(), or checkParam_typeExtra() 2nd parameter type`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05009") 

}


function checkParam_type_05010(){
  var TYPE_CZECH_current_test_number = '05010';
  var check_param = null;
  var check_shape = 'null'; 
  var expect_error = `TE@203 - The type 'null' is not a valid checkParam_type(), checkParam_typeEither(), or checkParam_typeExtra() 2nd parameter type`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05010") 

}

function checkParam_type_05011(){
  var TYPE_CZECH_current_test_number = '05011';
  var check_param = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  var check_shape = { a: [ { b:[ {c:'string'} ] } ], z: 'null'};   
  var expect_error = `TE@210 - Type 'null' is not a real type`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05011") 

}

function checkParam_type_05012(){
  var TYPE_CZECH_current_test_number = '05012';
  var check_param = {0:['a-string'], length:1};
  var check_shape = 'string';  
  var expect_error = "TE@225 - The value [], an 'array', is not a 'string'";
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05012") 

}



function checkParam_type_05013(){
  var TYPE_CZECH_current_test_number = '05013';
  var check_param = [['a-string']];
  var check_shape = 'string';  
  var expect_error = `TE@225 - The value [], an 'array', is not a 'string'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05013") 

}



function checkParam_type_05014(){
  var TYPE_CZECH_current_test_number = '05014';
  var check_param = 'a-string';
  var check_shape = ['string'];  
  var expect_error =`TE@217 - Comparing 'string' parameter, with a value of a-string, to expected shape of ["string"].`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05014") 

}



function checkParam_type_05015(){
  var TYPE_CZECH_current_test_number = '05015';
  var check_param = 'a-string';
  var check_shape = 'string';  
  var expect_error =  ''; 
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05015") 

}


function checkParam_type_05016(){
  var TYPE_CZECH_current_test_number = '05016';
  var check_param = [1,2,3]; 
  var check_shape = ['numbers'];  
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05016") 

}




function checkParam_type_05017(){
  var TYPE_CZECH_current_test_number = '05017';
  var check_param = ['a', 1]; 
  var check_shape = ['string', 'number'];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
    printTestName("checkParam_type_05017") 

}



function checkParam_type_05018(){
  var TYPE_CZECH_current_test_number = '05018';
  var check_param = [[1,2,3,4], ['a', 'b', 'c', 'd']];
  var check_shape = [ ['numbers'], ['strings'] ]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_type(check_param, check_shape);
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
  printTestName("checkParam_type_05018") 
}






if (fail_count>0) {
  the_problem = `check-tests/checkParam_type_05000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;




