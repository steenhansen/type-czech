/* eslint-disable */

tested_check_type = 0;

failed_check_type = 0;

check_type_05000();
check_type_05001();
check_type_05002();
check_type_05003();
check_type_05004();
check_type_05005();
check_type_05006();
check_type_05007();
check_type_05008();
check_type_05009();

check_type_05010();
check_type_05011();
check_type_05012();
check_type_05013();
check_type_05014();
check_type_05015();
 check_type_05016();
 check_type_05017();
 check_type_05018();

TEST_total_fails += failed_check_type;
TEST_total_checks += tested_check_type;

if (TEST_show_random) {
console.log('check_type failed tests 05000', failed_check_type);
console.log('check_type passed tests 05000', tested_check_type);
}

//////////////////////////////////////////////////////////

function check_type_05000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES')
  function A_PRE_check_yourFunc() {
    type_issue = type_czech.check_type(arguments, 'number')
   // console.log('type_issue', type_issue)
    return type_issue
  }
              A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
              function A_yourFunc(){ }
  A_yourFunc(9)   // pass 1 F number
  A_yourFunc(NaN) // pass 2 M empty number
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
              expected_tests = 32
              expected_fails = 30
  fail_tests = type_czech.countFails()
  total_tests = type_czech.countTally()

  if (expected_tests !== total_tests) 
      throw `A. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
  else if (expected_fails !== fail_tests) 
      throw `A. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
  else if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
  else
    TEST_total_checks += expected_tests




    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function B_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, ['number', 'boolean', 'date'])
    }
            B_yourFunc = type_czech.linkUp(B_yourFunc, B_PRE_check_yourFunc) 
            function B_yourFunc(){ }
    B_yourFunc(1, false, new Date('1999-12-30') ) // pass 1
    B_yourFunc(1, false, new Date('1999-99-99') ) // pass 2
    B_yourFunc(1, false, new Date('1999-12-30'), 'too many' )  // fail 1
    B_yourFunc(1)                                              // fail 2
    B_yourFunc('one', false, new Date('1999-12-30') )          // fail 3
    B_yourFunc()                                               // fail 4
                expected_tests = 6
                expected_fails = 4
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `B. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `B. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests

/*
### C. A single Number. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function C_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, 'number')
    }
            C_yourFunc = type_czech.linkUp(C_yourFunc, C_PRE_check_yourFunc) 
            function C_yourFunc(){ }
    C_yourFunc(1)   // pass 1
    C_yourFunc(NaN) // pass 2
    C_yourFunc('one')  // fail 1
    C_yourFunc(true)   // fail 2
    C_yourFunc()       // fail 3
    C_yourFunc(1,2,3)  // fail 4
                expected_tests = 6
                expected_fails = 4
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `C. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `C. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests

/*
### D. Exactly two Numbers as arguments. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function D_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, ['number', 'number'])
    }
              D_yourFunc = type_czech.linkUp(D_yourFunc, D_PRE_check_yourFunc) 
              function D_yourFunc(){ }
    D_yourFunc(1,2)         // pass 1
    D_yourFunc(NaN, NaN)    // pass 2
    D_yourFunc(1,2,3)   // fail 1
    D_yourFunc(1)       // fail 2
    D_yourFunc(1,'two') // fail 3
    D_yourFunc()        // fail 4
              expected_tests = 6
              expected_fails = 4
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `D. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `D. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests


/*
##E. One array of Numbers, with any number of elements; from 0 ... x elements.  
*/                                                       

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function E_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, ['number'])
    }
            E_yourFunc = type_czech.linkUp(E_yourFunc, E_PRE_check_yourFunc) 
            function E_yourFunc(){ }
    E_yourFunc([])                  // pass 1
    E_yourFunc([1])                 // pass 2
    E_yourFunc([1,2,3,4,5,6,7,8,9]) // pass 3
    E_yourFunc([1,2,3])             // pass 4
    E_yourFunc({})        // fail 1
    E_yourFunc([[1,2,3]]) // fail 2
    E_yourFunc([1], [2])  // fail 3
    E_yourFunc()          // fail 4
    E_yourFunc('an-str')  // fail 5
    E_yourFunc(1)         // fail 6
    E_yourFunc(12,23,44)  // fail 7
                          expected_tests = 11
                          expected_fails = 7
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `E. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `E. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests

/*
###F. Two arrays of Numbers with exactly two elements each. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function F_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, [ ['number', 'number'], ['number', 'number'] ])
    }
              F_yourFunc = type_czech.linkUp(F_yourFunc, F_PRE_check_yourFunc) 
              function F_yourFunc(){ }
    F_yourFunc([1,2], [3,4])           // pass 1
    F_yourFunc([NaN,NaN], [NaN,NaN])   // pass 2
    F_yourFunc([1], [3,4,4])        // fail 1
    F_yourFunc([1,2], [3,4], [5,6]) // fail 2
    F_yourFunc()                    // fail 3
                          expected_tests = 5
                          expected_fails = 3
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `F. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `F. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests


/*
G. One array of arrays of two Numbers.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function G_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, [ ['number', 'number'] ])
    }
            G_yourFunc = type_czech.linkUp(G_yourFunc, G_PRE_check_yourFunc) 
            function G_yourFunc(){ }
    G_yourFunc([ [1,2] ])                      // pass 1
    G_yourFunc([ [1,2], [3,4] ])               // pass 2
    G_yourFunc([ [1,2], [3,4], [5,6], [7,8] ]) // pass 3
    G_yourFunc([ [1,2,3] ])                          // fail 1
    G_yourFunc([ [1] ])                              // fail 2
    G_yourFunc([ [1,2], [3,4], [5,6], [7,'X'] ])     // fail 3
    G_yourFunc()                                     // fail 4
                          expected_tests = 7
                          expected_fails = 4
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `G. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `G. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests

/*
### H. One Array with any type of contents.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function H_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, 'array')
    }
                H_yourFunc = type_czech.linkUp(H_yourFunc, H_PRE_check_yourFunc) 
                function H_yourFunc(){ }
    H_yourFunc([])                          // pass 1
    H_yourFunc([1,2,3])                     // pass 2
    H_yourFunc([1, true, 'three'])          // pass 3
    H_yourFunc([[[[1]]], {a:{b:{c:true}}}]) // pass 4
    H_yourFunc()  // fail 1
    H_yourFunc(1) // fail 2
                          expected_tests = 6
                          expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `H. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `H. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests

/*
### I. One Object with any type of contents.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function I_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, 'object')
    }
            I_yourFunc = type_czech.linkUp(I_yourFunc, I_PRE_check_yourFunc) 
            function I_yourFunc(){ }
    I_yourFunc({})     // pass 1
    I_yourFunc({a:{}}) // pass 2
    I_yourFunc()   // fail 1
    I_yourFunc([]) // fail 2      
                          expected_tests = 4
                          expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `I. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `I. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests

      
/*
### J. One Objects with x and y keys that are Numbers. 
*/
    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function J_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, {x:'number', y:'number'})
    }
                    J_yourFunc = type_czech.linkUp(J_yourFunc, J_PRE_check_yourFunc) 
                    function J_yourFunc(){ }
    J_yourFunc({x:0, y:1})  // pass 1
    J_yourFunc({x:0, y:false})  // fali 1
    J_yourFunc({x:0, xxx:1})    // fali 2
    J_yourFunc()                // fali 3
                          expected_tests = 4
                          expected_fails = 3
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `J. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `J. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests



/*
### K. One Array with any number of Objects with x and y keys that are Numbers.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function K_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, [{x:'number', y:'number'}])
    }
              K_yourFunc = type_czech.linkUp(K_yourFunc, K_PRE_check_yourFunc) 
              function K_yourFunc(){ }
    K_yourFunc([{x:0, y:1}])                         // pass 1
    K_yourFunc([{x:0, y:1}, {x:0, y:1}, {x:0, y:1}]) // pass 2
    K_yourFunc()                        // fail 1
                          expected_tests = 3
                          expected_fails = 1
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `K. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `K. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests

/*
### L. Check only one parameter type of many. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function L_PRE_check_yourFunc(param_1, param_2, param_3) {
      return type_czech.check_type(param_2, 'number')
    }
              L_yourFunc = type_czech.linkUp(L_yourFunc, L_PRE_check_yourFunc) 
              function L_yourFunc(){ }
    L_yourFunc(1,2,3)           // pass 1
    L_yourFunc(false, 2, false) // pass 2
    L_yourFunc(false, 2)        // pass 3
    L_yourFunc()          // fail 1
    L_yourFunc(1,false,3) // fail 2
                          expected_tests = 5
                          expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `L. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `L. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests

/*
### M. Check two parameter types of many, not using arguments object. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function M_PRE_check_yourFunc(param_1, param_2, param_3) {
      return type_czech.check_type([param_1, param_3], ['number'])
    }
            M_yourFunc = type_czech.linkUp(M_yourFunc, M_PRE_check_yourFunc) 
            function M_yourFunc(){ }
    M_yourFunc(1,2,3)                    // pass 1
    M_yourFunc(1, true, 3)               // pass 2
    M_yourFunc(1, true, 3, false, true)  // pass 3
    M_yourFunc()              // fail 4
    M_yourFunc(false,false,3) // fail 5
                          expected_tests = 5
                          expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `M. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `M. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests




/*
### N. Check two parameter types of many, using arguments object.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function N_PRE_check_yourFunc(param_1, param_2, param_3) {
      return type_czech.check_type(arguments, ['number'])
    }
            N_yourFunc = type_czech.linkUp(N_yourFunc, N_PRE_check_yourFunc) 
            function N_yourFunc(){ }
    N_yourFunc(1,2,3)                    // fail 1
    N_yourFunc(1, true, 3)               // fail 2
    N_yourFunc(1, true, 3, false, true)  // fail 3
    N_yourFunc()                         // fail 4
    N_yourFunc(false,false,3)            // fail 5
                          expected_tests = 5
                          expected_fails = 5
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `M. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `M. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests













}




function check_type_05001(){
  var TYPE_CZECH_current_test_number = '05001';       
  var check_param =  {cylinders:4, fuel:"gasoline", sneak:"extra"} ;
  var check_shape = {cylinders:"number", fuel:"string"};           
  var expect_error = [`check_type()`,
  `TE@209 - Extra key in checked object - (sneak:'extra')`,
  `{cylinders:"number",fuel:"string"}`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}

function check_type_05002(){
  var TYPE_CZECH_current_test_number = '05002';       
  var check_param =  {};
  var check_shape = 'object';          
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}


function check_type_05003(){
  var TYPE_CZECH_current_test_number = '05003';       
  var check_param = [[]];
  var check_shape = 'array';          
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05004(){
  var TYPE_CZECH_current_test_number = '05004';       
  var check_param = {0:[{}], length:1};
  var check_shape = 'array';          
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}


function check_type_05005(){
  var TYPE_CZECH_current_test_number = '05005';       
  var check_param = {0:[{}], length:1};
  var check_shape = 'object';          
  var expect_error = [`check_type()`,
  `TE@225 - The value '[]', which is a 'array', is not a 'object'`,
  `object`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05006(){
  var TYPE_CZECH_current_test_number = '05006';       
  var check_param = {x:[{y:'z'}]};
  var check_shape = {x:[{y:'string'}]};           //   SAME AS TEST 5007 wat?
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05007(){
  var TYPE_CZECH_current_test_number = '05007';       
  var check_param = {x:[{y:'z'}]};
  var check_shape = {x:[{y:'string'}]}; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}




function check_type_05008(){
  var TYPE_CZECH_current_test_number = '05008';       
  var check_param = {cylinders:4, fuel:"gasoline", sneak:"extra"};
  var check_shape = {cylinders:"number", fuel:"string"};
  var expect_error = [`check_type()`,
  `TE@209 - Extra key in checked object - (sneak:'extra')`,
  `{cylinders:"number",fuel:"string"}`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}




function check_type_05009(){
  var TYPE_CZECH_current_test_number = '05009';          // SAME AS 5010 ??? TEST
  var check_param = null;
  var check_shape = 'null'; 
  var expect_error = [`check_type()`,
  `TE@203 - The type 'null' is not a valid check_type(), check_typeEither(), or check_typeExtra() second parameter type`,
  `null`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}


function check_type_05010(){
  var TYPE_CZECH_current_test_number = '05010';
  var check_param = null;
  var check_shape = 'null'; 
  var expect_error = [`check_type()`,
  `TE@203 - The type 'null' is not a valid check_type(), check_typeEither(), or check_typeExtra() second parameter type`,
  `null`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}

function check_type_05011(){
  var TYPE_CZECH_current_test_number = '05011';
  var check_param = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  var check_shape = { a: [ { b:[ {c:'string'} ] } ], z: 'null'};   
  var expect_error = [`check_type()`,
  `TE@210 - The type 'null' is not a real type`,
  `{a:[{b:[{c:"string"}]}],z:"null"}`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}

function check_type_05012(){
  var TYPE_CZECH_current_test_number = '05012';
  var check_param = {0:['a-string'], length:1};
  var check_shape = 'string';  
  var expect_error = ['check_type()',
  "TE@225 - The value '[]', which is a 'array', is not a 'string'",
  'string'];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05013(){
  var TYPE_CZECH_current_test_number = '05013';
  var check_param = [['a-string']];
  var check_shape = 'string';  
  var expect_error = [`check_type()`,
  `TE@225 - The value '[]', which is a 'array', is not a 'string'`,
  `string`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05014(){
  var TYPE_CZECH_current_test_number = '05014';
  var check_param = 'a-string';
  var check_shape = ['string'];  
  var expect_error = [`check_type()`,
  `TE@217 - Comparing actual 'string' parameter, with a value of a-string, in relation to the expected shape of ["string"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'string's. Or same object keys`,
  `['string']`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05015(){
  var TYPE_CZECH_current_test_number = '05015';
  var check_param = 'a-string';
  var check_shape = 'string';  
  var expect_error =  ''; 
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}


function check_type_05016(){
  var TYPE_CZECH_current_test_number = '05016';
  var check_param = [1,2,3]; 
  var check_shape = ['number'];  
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}




function check_type_05017(){
  var TYPE_CZECH_current_test_number = '05017';
  var check_param = ['a', 1]; 
  var check_shape = ['string', 'number'];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05018(){
  var TYPE_CZECH_current_test_number = '05018';
  var check_param = [[1,2,3,4], ['a', 'b', 'c', 'd']];
  var check_shape = [ ['number'], ['string'] ]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}











