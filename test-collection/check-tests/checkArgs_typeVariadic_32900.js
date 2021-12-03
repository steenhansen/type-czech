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

function test_pre_checkArgs_typeVariadic(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  tested_checkArgs_typeVariadic_32900 += 1;

  function PRE_test_32900() {
    type_issue = type_czech.checkArgs_typeVariadic(arguments, signature_of_parameters);
    return type_issue
  }

  function pre_checkArgs_typeVariadic_32900() {}
  pre_checkArgs_typeVariadic_32900 = type_czech.linkUp(pre_checkArgs_typeVariadic_32900, PRE_test_32900);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_checkArgs_typeVariadic_32900(...parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_checkArgs_typeVariadic_32900 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      issue = pre_checkArgs_typeVariadic_32900(...parameters_array);
      console.log('should be error except', issue)
      // failing path, should have been an exception
      failed_checkArgs_typeVariadic_32900 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_checkArgs_typeVariadic_32900 += 1;

        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(parameters_array, signature_of_parameters, before_var_value, error_id);
}

tested_checkArgs_typeVariadic_32900 = 0;
failed_checkArgs_typeVariadic_32900 = 0;

//////////////////////////////////////////
type_czech = TypeCzech('NO-ERROR-MESSAGES');
function A_PRE_check_yourFunc() {
   return type_czech.checkArgs_typeVariadic(arguments, ['number']);
}

A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc);
function A_yourFunc(){ }

A_yourFunc(9)        // pass 1 F number
A_yourFunc(NaN)      // pass 2 M empty number
A_yourFunc(14,15,16) // pass 4 U multi args
TEST_total_checks += expectedAndFailedTests(3, 0, 'A-Pass', '_checkArgs_typeVariadic().md');


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
TEST_total_checks += expectedAndFailedTests(29, 29, 'A-Fail', '_checkArgs_typeVariadic().md');

// /////////////////////////////////////////////////////////////////////////////////////////////

parameters  = ['a', 'b', 'c'];
signature = ['string'];
error_mess = '';
test_pre_checkArgs_typeVariadic(parameters, signature, 32901, error_mess);

parameters  = ['a', 2, 'c'];
signature = ['string'];
error_mess = `PRE_test_32900() PRE-FUNC: TE@215 - ELEMENT '1' is asserted to be a 'string', but is fallaciously a 'number' : 2
CHECKER checkArgs_typeVariadic()
ACTUAL TYPE 'string','number','string'
 VALUES "a",2,"c"
EXPECTED TYPE ["string"]
 ORIGIN pre_checkArgs_typeVariadic_32900()`;
test_pre_checkArgs_typeVariadic(parameters, signature, 32902, error_mess);

parameters  = ['a', 'b', 'c'];
signature = 'string';
error_mess = `PRE_test_32900() PRE-FUNC: VE@601 - Use checkArgs_typeVariadic(["a","b","c"], ['string']') instead of checkArgs_typeVariadic(["a","b","c"], 'string')
CHECKER checkArgs_typeVariadic()
ACTUAL TYPE 'string','string','string'
 VALUES "a","b","c"
EXPECTED TYPE string
 ORIGIN pre_checkArgs_typeVariadic_32900()`;
test_pre_checkArgs_typeVariadic(parameters, signature, 32903, error_mess);

parameters  = [2];
signature = ['number'];
error_mess = '';
test_pre_checkArgs_typeVariadic(parameters, signature, 32904, error_mess);

parameters  = [];
signature = ['number'];
error_mess =  `PRE_test_32900() PRE-FUNC: There are no parameters.
CHECKER checkArgs_typeVariadic()
ACTUAL TYPE 
 VALUES 
EXPECTED TYPE ["number"]
 ORIGIN pre_checkArgs_typeVariadic_32900()`;
test_pre_checkArgs_typeVariadic(parameters, signature, 32905, error_mess);


TEST_total_checks += 5;

