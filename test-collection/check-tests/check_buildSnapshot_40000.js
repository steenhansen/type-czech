/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

pass_count = 0;
fail_count = 0;


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

function test_pre_check_buildSnapshot(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  pass_count += 1;

  function PRE_test_40000(a_var) {
    return type_czech.check_buildSnapshot(a_var, signature_of_parameters);
  }

  function pre_check_buildSnapshot_40000() {}
  pre_check_buildSnapshot_40000 = type_czech.linkUp(pre_check_buildSnapshot_40000, PRE_test_40000);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_check_buildSnapshot_40000(...parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      fail_count += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_buildSnapshot_40000(...parameters_array);
      // failing path, should have been an exception
      fail_count += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        fail_count += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(parameters_array, signature_of_parameters, before_var_value, error_id);
}



//////////////////////////////////////////
type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE');

function A_PRE_check_yourFunc(a_collection) {
  try {
    type_czech.check_buildSnapshot('func_name', 'var_name', a_collection)
 } catch(e) {
   //console.log('check_buildSnapshot', e)
 }
 }

function A_yourFunc(an_arg) { }

A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc);

fail_tests = 0
total_tests = 0



A_yourFunc([1])                    // pass 1 A array
A_yourFunc({b:10})                 // pass 2 G object
A_yourFunc([])                     // pass 3 K empty array
A_yourFunc({})                     // pass 4 N empty object
A_yourFunc([11,12,13])             // pass 5 T multi array
A_yourFunc([[17,18,19]])           // pass 6 V multi in single
A_yourFunc([20], [21])             // pass 7 W two singles
A_yourFunc([22,23,24], [25,26,27]) // pass 8 X two multis
A_yourFunc({d:{}})                 // pass 9 Y empty in object
A_yourFunc([{e:[28,{f:[29]}]}])    // pass 10 Z empty in object
A_yourFunc(['',''] )               // pass 11 0 empty - [str str]
A_yourFunc([[],[]] )               // pass 12 1 empty - [arr arr]
A_yourFunc([{},{}] )               // pass 13 2 empty - [obj obj]
A_yourFunc({g:[]},{h:[]})          // pass 14 3 empty - {arr arr}
A_yourFunc({i:''},{j:''})          // pass 15 4 empty - {str str}
A_yourFunc({k:{}},{l:{}})          // pass 16 5 empty - {obj obj}
pass_count += expectedAndFailedTests(16, 0, 'A-Pass', 'check_buildSnapshot().md');
printTestName("check_buildSnapshot_400000") 

A_yourFunc(234n)                        // fail 1 B bigint
A_yourFunc(false)                       // fail 2 C boolean
A_yourFunc(new Date('2005-06-07'))      // fail 3 D date
A_yourFunc(a=>a+8)                      // fail 4 E function
A_yourFunc(9)                           // fail 5 F number
A_yourFunc(/d/)                         // fail 6 H regex
A_yourFunc('an-str')                    // fail 7 I string
A_yourFunc(Symbol('sym'))               // fail 8 J symbol
A_yourFunc(new Date(''))                // fail 9 L empty date
A_yourFunc(NaN)                         // fail 10 M empty number
A_yourFunc(/(?:)/)                      // fail 11 O empty regex
A_yourFunc('')                          // fail 12 P empty string
A_yourFunc(null)                        // fail 13 Q empty null
A_yourFunc(undefined)                   // fail 14 R empty undefined
A_yourFunc()                            // fail 15 S empty nothing
A_yourFunc(14,15,16)                    // fail 16 U multi args
pass_count += expectedAndFailedTests(16, 16, 'A-Fail', 'check_buildSnapshot().md');
printTestName("check_buildSnapshot_400000_a") 
// /////////////////////////////////////////////////////////////////////////////////////////////


/*
### B. check_buildSnapshot() check internal TypeCzech stack structure 
*/

stack_str = ''
type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function B_PRE_check_recurseArr(growing_array){
  build_snapshot = type_czech.check_buildSnapshot('B_PRE_check_recurseArr', 'growing_array', growing_array)
  stack_str = type_czech._mutateStacks()
  return build_snapshot;
}
function B_POST_check_recurseArr(growing_array){
  return type_czech.check_mutatedSnapshot('B_PRE_check_recurseArr', 'growing_array')
}
B_recurseArr = type_czech.linkUp(B_recurseArr, B_PRE_check_recurseArr, B_POST_check_recurseArr)
function B_recurseArr(growing_array, stop_recurse){
  next_index = growing_array.length + 1
  if (next_index === stop_recurse){
    // do nothing
  } else{
    if (next_index === 4){
      growing_array[2] = 'THREE'                 // mutate previous entry
    }
    new_array = [...growing_array, next_index]
    B_recurseArr(new_array, stop_recurse)
  }
}

 B_expected_first_stack = `{"B_PRE_check_recurseArr-growing_array":[{"collection_ref":[1],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1]","var_name":"growing_array"},{"collection_ref":[1,2],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2]","var_name":"growing_array"},{"collection_ref":[1,2,3],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2,3]","var_name":"growing_array"}]}`
B_recurseArr([1], 4)
if (stack_str === B_expected_first_stack){
  if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass')
  else
  pass_count += 1
} else {
  throw `B. _check_buildSnapshot().md first had un-expected stack list values`
}
printTestName("check_buildSnapshot_400000_b1") 


B_expected_second_stack = `{"B_PRE_check_recurseArr-growing_array":[{"collection_ref":[1],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1]","var_name":"growing_array"},{"collection_ref":[1,2],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2]","var_name":"growing_array"},{"collection_ref":[1,2,"THREE"],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2,3]","var_name":"growing_array"},{"collection_ref":[1,2,"THREE",4],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2,\\\"THREE\\\",4]","var_name":"growing_array"},{"collection_ref":[1,2,"THREE",4,5],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2,\\\"THREE\\\",4,5]","var_name":"growing_array"}]}`
B_recurseArr([1], 6)
if (B_expected_second_stack === stack_str){
  if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass')
  else
  pass_count += 1
} else {
  console.log(stack_str)
  throw `B. _check_buildSnapshot().md second had un-expected stack list values`
}
printTestName("check_buildSnapshot_400000_b2") 









/*
### C. check_buildSnapshot() fail from non-string function name
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function C_PRE_check_yourFunc(c_collection) {
  return type_czech.check_buildSnapshot({a:12}, 'var-name', c_collection)
}
C_yourFunc = type_czech.linkUp(C_yourFunc, C_PRE_check_yourFunc) 
function C_yourFunc(c_collection) { }

try {
  C_yourFunc([1,2,3])
  is_correct = false
} catch (e) {
  is_correct = true
}


if (is_correct){
  if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass')
  else
  pass_count += 1
} else {
  throw `C. _check_buildSnapshot().md did not fail - VE@601`
}
printTestName("check_buildSnapshot_400000_c") 
/*
### D. check_buildSnapshot() fail from non-string variable name
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function D_PRE_check_yourFunc(d_collection) {
  return type_czech.check_buildSnapshot('func-name', {b:13}, d_collection)
}
D_yourFunc = type_czech.linkUp(D_yourFunc, D_PRE_check_yourFunc) 
function D_yourFunc(d_collection) { }
try {
  D_yourFunc([1,2,3])
  is_correct = false
} catch (e) {
  is_correct = true
}
if (is_correct){
  if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass')
  else
  pass_count += 1
} else {
  throw `D. _check_buildSnapshot().md did not fail - VE@602`
}
printTestName("check_buildSnapshot_400000_d") 
/*
### E. check_buildSnapshot() fail from scalar variable
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function E_PRE_check_yourFunc(e_scalar) {
  return type_czech.check_buildSnapshot('func-name', 'var-name', 'not a collection')
}
E_yourFunc = type_czech.linkUp(E_yourFunc, E_PRE_check_yourFunc) 
function E_yourFunc(e_scalar) { }
try {
  E_yourFunc('a-scalar')
  is_correct = false
} catch (e) {
  is_correct = true
}
if (is_correct){
  if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass')
  else
  pass_count += 1
} else {
  throw `E. _check_buildSnapshot().md did not fail - TC@56`
}
printTestName("check_buildSnapshot_400000_e") 

/*
### F. check_buildSnapshot() fail from not enough parameters
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function F_PRE_check_yourFunc(f_variable) {
  return type_czech.check_buildSnapshot('func-name', 'var-name')
}
F_yourFunc = type_czech.linkUp(F_yourFunc, F_PRE_check_yourFunc) 
function F_yourFunc(f_variable) { }
try {
  F_yourFunc('a-scalar')
  is_correct = false
} catch (e) {
  is_correct = true
}
if (is_correct){
  if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass')
  else
  pass_count += 1
} else {
  throw `F. _check_buildSnapshot().md did not fail - TC@55`
}
printTestName("check_buildSnapshot_400000_f") 


/*
### G. check_buildSnapshot() is ok with cyclic array
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function G_PRE_check_yourFunc(cyclic_array) {
  return type_czech.check_buildSnapshot('func-name', 'var-name', cyclic_array)
}
G_yourFunc = type_czech.linkUp(G_yourFunc, G_PRE_check_yourFunc) 
function G_yourFunc(cyclic_array) { }
try {
  cyclic_array = []
  cyclic_array[0] = cyclic_array
  G_yourFunc(cyclic_array)
  is_correct = true
} catch (e) {
  console.log('e', e)
  is_correct = false
}
if (is_correct){
  if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass')
  else
  pass_count += 1
} else {
  throw `G. _check_buildSnapshot().md could not handle cyclic array`
}
printTestName("check_buildSnapshot_400000_g") 

/*
### H. check_buildSnapshot() is ok with cyclic object
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function H_PRE_check_yourFunc(cyclic_object) {
  return type_czech.check_buildSnapshot('func-name', 'var-name', cyclic_object)
}
H_yourFunc = type_czech.linkUp(H_yourFunc, H_PRE_check_yourFunc) 
function H_yourFunc(cyclic_array) { }
try {
  cyclic_object = {}
  cyclic_object.a = cyclic_object
  H_yourFunc(cyclic_object)
  is_correct = true
} catch (e) {
  console.log('e', e)
  is_correct = false
}
if (is_correct){
  if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass')
  else
  pass_count += 1
} else {
  throw `H. _check_buildSnapshot().md could not handle cyclic object`
}

if (fail_count>0) {
  the_problem = `check-tests/check_buildSnapshot_40000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;

   printTestName("check_buildSnapshot_400000_h") 