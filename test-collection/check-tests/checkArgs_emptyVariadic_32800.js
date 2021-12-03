/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_checkArgs_emptyVariadic(actual_variable, variable_signature, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  tested_checkArgs_emptyVariadic_32800 += 1;

  function PRE_test_32800() {
    return type_czech.checkArgs_emptyVariadic(arguments, variable_signature);
  }

  function pre_checkArgs_emptyVariadic_32800() {}
  pre_checkArgs_emptyVariadic_32800 = type_czech.linkUp(pre_checkArgs_emptyVariadic_32800, PRE_test_32800);

  const before_var_value = beforeCheck(actual_variable, variable_signature);
  if (expected_error === '') {
    try {
      pre_checkArgs_emptyVariadic_32800(actual_variable);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_checkArgs_emptyVariadic_32800 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_checkArgs_emptyVariadic_32800(actual_variable);
      // failing path, should have been an exception
      failed_checkArgs_emptyVariadic_32800 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_checkArgs_emptyVariadic_32800 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(actual_variable, variable_signature, before_var_value, error_id);
}

tested_checkArgs_emptyVariadic_32800 = 0;
failed_checkArgs_emptyVariadic_32800 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

type_czech = TypeCzech('NO-ERROR-MESSAGES')
function A_PRE_check_yourFunc() {
  return type_czech.checkArgs_emptyVariadic(arguments, ['EMPTY-ERROR']);
}

function A_yourFunc() { }

A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc);

A_yourFunc([1])                      // pass 1 A array
A_yourFunc(234n)                     // pass 2 B bigint
A_yourFunc(false)                    // pass 3 C boolean
A_yourFunc(new Date('2005-06-07'))   // pass 4 D date
A_yourFunc(a=>a+8)                   // pass 5 E function
A_yourFunc(9)                        // pass 6 F number
A_yourFunc({b:10})                   // pass 7 G object
A_yourFunc(/d/)                      // pass 8 H regex
A_yourFunc('an-str')                 // pass 9 I string
A_yourFunc(Symbol('sym'))            // pass 10 J symbol
A_yourFunc([11,12,13])               // pass 11 T multi array
A_yourFunc(14,15,16)                 // pass 12 U multi args
A_yourFunc([[17,18,19]])             // pass 13 V multi in single
A_yourFunc([20], [21])               // pass 14 W two singles
A_yourFunc([22,23,24], [25,26,27])   // pass 15 X two multis
A_yourFunc({d:{}})                   // pass 16 Y empty in object
A_yourFunc([{e:[28,{f:[29]}]}])      // pass 17 Z empty in object
A_yourFunc(['',''] )                 // pass 18 0 empty - [str str]
A_yourFunc([[],[]] )                 // pass 19 1 empty - [arr arr]
A_yourFunc([{},{}] )                 // pass 20 2 empty - [obj obj]
A_yourFunc({g:[]},{h:[]})            // pass 21 3 empty - {arr arr}
A_yourFunc({i:''},{j:''})            // pass 22 4 empty - {str str}
A_yourFunc({k:{}},{l:{}})            // pass 23 5 empty - {obj obj}
TEST_total_checks += expectedAndFailedTests(23, 0, 'A-Pass', 'checkArgs_emptyVariadic().md');

A_yourFunc([])            // fail 1 K empty array
A_yourFunc(new Date(''))  // fail 2 L empty date
A_yourFunc(NaN)           // fail 3 M empty number
A_yourFunc({})            // fail 4 N empty object
A_yourFunc(/(?:)/)        // fail 5 O empty regex
A_yourFunc('')            // fail 6 P empty string
A_yourFunc(null)          // fail 7 Q empty null
A_yourFunc(undefined)     // fail 8 R empty undefined
A_yourFunc()              // fail 9 S empty nothing
TEST_total_checks += expectedAndFailedTests(9, 9, 'A-Fail', 'checkArgs_emptyVariadic().md');



// /////////////////////////////////////////////////////////////////////////////////////////////


parameters  = ['a', 'b', 'c'];
signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_checkArgs_emptyVariadic(parameters, signature, 32801, error_mess);

parameters  = ['a', 2, 'c'];
signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_checkArgs_emptyVariadic(parameters, signature, 32802, error_mess);

parameters  = ['a', 'b', 'c'];
signature = 'EMPTY-ERROR';
error_mess = `PRE_test_32800() PRE-FUNC: VE@605 - Use checkArgs_emptyVariadic(["a","b","c"], ['EMPTY-ERROR']') instead of checkArgs_emptyVariadic(["a","b","c"], 'EMPTY-ERROR')
CHECKER checkArgs_emptyVariadic()
ACTUAL TYPE 'array'
 VALUES ["a","b","c"]
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkArgs_emptyVariadic_32800()`;
test_pre_checkArgs_emptyVariadic(parameters, signature, 32803, error_mess);

parameters  = [2];
signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_checkArgs_emptyVariadic(parameters, signature, 32804, error_mess);

parameters  = [];
signature = ['EMPTY-ERROR'];
error_mess = `PRE_test_32800() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkArgs_emptyVariadic()
ACTUAL TYPE 'array'
 VALUES []
EMPTY ASSERTION ["EMPTY-ERROR"]
 ORIGIN pre_checkArgs_emptyVariadic_32800()`;
test_pre_checkArgs_emptyVariadic(parameters, signature, 32805, error_mess);

TEST_total_checks += 5;


