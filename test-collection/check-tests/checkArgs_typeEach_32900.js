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


function test_pre_checkArgs_typeEach(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  pass_count += 1;

  function PRE_test_32900() {
    type_issue = type_czech.checkArgs_typeEach(arguments, signature_of_parameters);
    return type_issue
  }

  function pre_checkArgs_typeEach_32900() {}
  pre_checkArgs_typeEach_32900 = type_czech.linkUp(pre_checkArgs_typeEach_32900, PRE_test_32900);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_checkArgs_typeEach_32900(...parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      fail_count += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      issue = pre_checkArgs_typeEach_32900(...parameters_array);
      console.log('should be error except', issue)
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
function A_PRE_check_yourFunc() {
   return type_czech.checkArgs_typeEach(arguments, 'number');
}

A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc);
function A_yourFunc(){ }

A_yourFunc(9)        // pass 1 F number
A_yourFunc(NaN)      // pass 2 M empty number
A_yourFunc(14,15,16) // pass 4 U multi args
pass_count += expectedAndFailedTests(3, 0, 'A-Pass', '_checkArgs_typeEach_32900.js');


A_yourFunc([1])                      // fail 1 A array
A_yourFunc(234n)                     // fail 2 B bigint
A_yourFunc(false)                    // fail 3 C boolean
A_yourFunc(new Date('2005-06-07'))   // fail 4 D date
A_yourFunc(a=>a+8)                   // fail 5 E function
A_yourFunc({b:10})                   // fail 6 G object
A_yourFunc(/d/)                      // fail 7 H regex
A_yourFunc('an-str')                 // fail 8 I string
A_yourFunc(Symbol('sym'))            // fail 9 J symbol
A_yourFunc([])                       // fail 10 K empty array
A_yourFunc(new Date(''))             // fail 11 L empty date
A_yourFunc({})                       // fail 12 N empty object
A_yourFunc(/(?:)/)                   // fail 13 O empty regex
A_yourFunc('')                       // fail 14 P empty string
A_yourFunc(null)                     // fail 15 Q empty null
A_yourFunc(undefined)                // fail 16 R empty undefined
A_yourFunc()                         // fail 17 S empty nothing
A_yourFunc([11,12,13])               // fail 18 T multi array
A_yourFunc([[17,18,19]])             // fail 19 V multi in single
A_yourFunc([20], [21])               // fail 20 W two singles
A_yourFunc([22,23,24], [25,26,27])   // fail 21 X two multis
A_yourFunc({d:{}})                   // fail 22 Y empty in object
A_yourFunc([{e:[28,{f:[29]}]}])      // fail 23 Z empty in object
A_yourFunc(['',''] )                 // fail 24 0 empty - [str str]
A_yourFunc([[],[]] )                 // fail 25 1 empty - [arr arr]
A_yourFunc([{},{}] )                 // fail 26 2 empty - [obj obj]
A_yourFunc({g:[]},{h:[]})            // fail 27 3 empty - {arr arr}
A_yourFunc({i:''},{j:''})            // fail 28 4 empty - {str str}
A_yourFunc({k:{}},{l:{}})            // fail 29 5 empty - {obj obj}
pass_count += expectedAndFailedTests(29, 29, 'A-Fail', '_checkArgs_typeEach_32900.js');
printTestName("checkArgs_typeEach_32900")  

// // /////////////////////////////////////////////////////////////////////////////////////////////

parameters  = ['a', 'b', 'c'];
signature = 'string';
error_mess = '';
test_pre_checkArgs_typeEach(parameters, signature, 32901, error_mess);
printTestName("checkArgs_typeEach_32901")  

//////////////////////////////////////////////////////////////////////////

parameters  = ['a', 2, 'c'];
signature = ['string'];
error_mess = `PRE_test_32900() PRE-FUNC: VE@608 - Signature ["string"] is too complicated, try manually iterating over array and check each element with checkParams()
CHECKER checkArgs_typeEach()
ACTUAL TYPE 'string','number','string'
 VALUES "a",2,"c"
EXPECTED TYPE ["string"]
 ORIGIN pre_checkArgs_typeEach_32900()`;
test_pre_checkArgs_typeEach(parameters, signature, 32902, error_mess);
printTestName("checkArgs_typeEach_32902")  

//////////////////////////////////////////////////////////////////////////

parameters  = [ ['a'] ];
signature = 'strings';
error_mess = ``;
test_pre_checkArgs_typeEach(parameters, signature, 32903, error_mess);
printTestName("checkArgs_typeEach_32903")  



// q*bert this looks really wrong  EXPECTED TYPE ["strin"]
parameters  = [ ['a'] ];
signature = 'string';
error_mess =  `PRE_test_32900() PRE-FUNC: VE@601 - Should be checkArgs_typeEach(arguments, 'strings'), plural for ["a"]
CHECKER checkArgs_typeEach()
ACTUAL TYPE 'array'
 VALUES ["a"]
EXPECTED TYPE string
 ORIGIN pre_checkArgs_typeEach_32900()`;
test_pre_checkArgs_typeEach(parameters, signature, 32904, error_mess);
printTestName("checkArgs_typeEach_32904")  

parameters  = 'a';
signature = 'strings';
error_mess =  `PRE_test_32900() PRE-FUNC: VE@602 - Should be checkArgs_typeEach(arguments, 'string'), singular for a
CHECKER checkArgs_typeEach()
ACTUAL TYPE 'string'
 VALUES "a"
EXPECTED TYPE strings
 ORIGIN pre_checkArgs_typeEach_32900()`;
test_pre_checkArgs_typeEach(parameters, signature, 32905, error_mess);
printTestName("checkArgs_typeEach_32905")  

parameters  = 'a';
signature = 'string';
error_mess = ``;
test_pre_checkArgs_typeEach(parameters, signature, 32906, error_mess);
printTestName("checkArgs_typeEach_32906")  

parameters  = [ ['a'], ['b'], ['c']];
signature = 'strings';
error_mess = ``;
test_pre_checkArgs_typeEach(parameters, signature, 32907, error_mess);
printTestName("checkArgs_typeEach_32907")  

parameters  = [ ['a'], ['b'], ['c']];
signature = 'string';
error_mess =  `PRE_test_32900() PRE-FUNC: VE@603 - Should be checkArgs_typeEach(arguments, 'strings'), multiple for [["a"],["b"],["c"]]
CHECKER checkArgs_typeEach()
ACTUAL TYPE 'array','array','array'
 VALUES ["a"],["b"],["c"]
EXPECTED TYPE string
 ORIGIN pre_checkArgs_typeEach_32900()`;
test_pre_checkArgs_typeEach(parameters, signature, 32908, error_mess);
printTestName("checkArgs_typeEach_32908")  

parameters  = ['a', 'b', 'c'];
signature = 'strings';
error_mess =  `PRE_test_32900() PRE-FUNC: VE@604 - Should be checkArgs_typeEach(arguments, 'string'), not plural for ["a","b","c"]
CHECKER checkArgs_typeEach()
ACTUAL TYPE 'string','string','string'
 VALUES "a","b","c"
EXPECTED TYPE strings
 ORIGIN pre_checkArgs_typeEach_32900()`;
test_pre_checkArgs_typeEach(parameters, signature, 32909, error_mess);
printTestName("checkArgs_typeEach_32909")  

parameters  = ['a', 'b', 'c'];
signature = 'string';
error_mess = ``;
test_pre_checkArgs_typeEach(parameters, signature, 32910, error_mess);
printTestName("checkArgs_typeEach_32910")  

parameters  = [2];
signature = 'number';
error_mess = '';
test_pre_checkArgs_typeEach(parameters, signature, 32911, error_mess);
printTestName("checkArgs_typeEach_32911")  

parameters  = [];
signature = ['number'];
error_mess =  `PRE_test_32900() PRE-FUNC: VE@608 - Signature ["number"] is too complicated, try manually iterating over array and check each element with checkParams()
CHECKER checkArgs_typeEach()
ACTUAL TYPE 
 VALUES 
EXPECTED TYPE ["number"]
 ORIGIN pre_checkArgs_typeEach_32900()`;
test_pre_checkArgs_typeEach(parameters, signature, 32912, error_mess);
printTestName("checkArgs_typeEach_32912")  

if (fail_count>0) {
  the_problem = `check-tests/checkArgs_typeEach_32900.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;