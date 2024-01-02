/* eslint-disable */


pass_count = 0;
fail_count = 0;



checkParam_emptyEither_04000();
checkParam_emptyEither_04001();

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

/////////////////////
function checkParam_emptyEither_04000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE');   ///'LOG-ERRORS'
  function A_PRE_check_yourFunc(a_var) {
    var actual_error = type_czech.checkParam_emptyEither(a_var, ['EMPTY-ERROR', 'EMPTY-OK']);
   // console.log('checkParam_emptyEither_04000', a_var, actual_error)
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

  pass_count += expectedAndFailedTests(25, 0, 'A-Fail', '_checkParam_emptyEither().md');



A_yourFunc()                         // fail 1 S empty nothing    FAIL
A_yourFunc(14,15,16)                 // fail 2 U multi args   FAIL
A_yourFunc([20], [21])               // fail 3 W two singles   FAIL
A_yourFunc([22,23,24], [25,26,27])   // fail 4 X two multis   FAIL
A_yourFunc({g:[]},{h:[]})            // fail 5 3 empty - {arr arr}   FAIL
A_yourFunc({i:''},{j:''})            // fail 6 4 empty - {str str}   FAIL
A_yourFunc({k:{}},{l:{}})            // fail 7 5 empty - {obj obj}  FAIL
pass_count += expectedAndFailedTests(7, 7, 'A-Fail', '_checkParam_emptyEither().md');



   printTestName("checkParam_emptyEither_04000")  
}


function checkParam_emptyEither_04001(){
  var TYPE_CZECH_current_test_number = '04001';       
  var check_param =   {x:12,       y:{z:"str2"} } ;
  var type_a = {a:"EMPTY-ERROR",  b:{c:"EMPTY-OK"}};
  var type_b = {x:"EMPTY-OK", y:{z:"EMPTY-ERROR"}};
  var check_shape =  [type_a, type_b];         
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.checkParam_emptyEither(check_param, check_shape);
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
     printTestName("checkParam_emptyEither_04001")  
}




if (fail_count>0) {
  the_problem = `check-tests/checkParam_emptyEither_04000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;


