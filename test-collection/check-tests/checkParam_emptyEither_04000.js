/* eslint-disable */

tested_checkParam_emptyEither = 0;

failed_checkParam_emptyEither = 0;

checkParam_emptyEither_04000();
checkParam_emptyEither_04001();


TEST_total_fails += failed_checkParam_emptyEither;
TEST_total_checks += tested_checkParam_emptyEither;
if (TEST_show_random) {
  console.log('checkParam_emptyEither failed tests 04000', failed_checkParam_emptyEither)
  console.log('checkParam_emptyEither passed tests 04000', tested_checkParam_emptyEither)
}

/////////////////////
function checkParam_emptyEither_04000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES');   ///'LOG-ERRORS'
  function A_PRE_check_yourFunc(a_var) {
    var actual_error = type_czech.checkParam_emptyEither(a_var, ['EMPTY-ERROR', 'EMPTY-OK']);
    return actual_error;
  }
                  A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                  function A_yourFunc(){ }
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
  A_yourFunc([])                       // pass 11 K empty array
  A_yourFunc(new Date(''))             // pass 12 L empty date
  A_yourFunc(NaN)                      // pass 13 M empty number
  A_yourFunc({})                       // pass 14 N empty object
  A_yourFunc(/(?:)/)                   // pass 15 O empty regex
  A_yourFunc('')                       // pass 16 P empty string
  A_yourFunc(null)                     // pass 17 Q empty null
  A_yourFunc(undefined)                // pass 18 R empty undefined     
  A_yourFunc([11,12,13])               // pass 19 T multi array  11
  A_yourFunc([[17,18,19]])             // pass 20 V multi in single
  A_yourFunc({d:{}})                   // pass 21 Y empty in object
  A_yourFunc([{e:[28,{f:[29]}]}])      // pass 22 Z empty in object
  A_yourFunc(['',''] )                 // pass 23 0 empty - [str str]
  A_yourFunc([[],[]] )                 // pass 24 1 empty - [arr arr]
  A_yourFunc([{},{}] )                 // pass 25 2 empty - [obj obj]

  TEST_total_checks += expectedAndFailedTests(25, 0, 'A-Fail', '_checkParam_emptyEither().md');



A_yourFunc()                         // fail 1 S empty nothing    FAIL
A_yourFunc(14,15,16)                 // fail 2 U multi args   FAIL
A_yourFunc([20], [21])               // fail 3 W two singles   FAIL
A_yourFunc([22,23,24], [25,26,27])   // fail 4 X two multis   FAIL
A_yourFunc({g:[]},{h:[]})            // fail 5 3 empty - {arr arr}   FAIL
A_yourFunc({i:''},{j:''})            // fail 6 4 empty - {str str}   FAIL
A_yourFunc({k:{}},{l:{}})            // fail 7 5 empty - {obj obj}  FAIL
TEST_total_checks += expectedAndFailedTests(7, 7, 'A-Fail', '_checkParam_emptyEither().md');




}


function checkParam_emptyEither_04001(){
  var TYPE_CZECH_current_test_number = '04001';       
  var check_param =   {x:12,       y:{z:"str2"} } ;
  var type_a = {a:"EMPTY-ERROR",  b:{c:"EMPTY-OK"}};
  var type_b = {x:"EMPTY-OK", y:{z:"EMPTY-ERROR"}};
  var check_shape =  [type_a, type_b];         
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_emptyEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_checkParam_emptyEither !=='undefined') failed_checkParam_emptyEither ++;
        }
        if (typeof tested_checkParam_emptyEither !=='undefined') tested_checkParam_emptyEither ++;
}


TEST_total_checks += 1;



