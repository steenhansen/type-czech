/* eslint-disable */

tested_check_emptyEither = 0;

failed_check_emptyEither = 0;

check_emptyEither_04000();
check_emptyEither_04001();


TEST_total_fails += failed_check_emptyEither;
TEST_total_checks += tested_check_emptyEither;
if (TEST_show_random) {
  console.log('check_emptyEither failed tests 04000', failed_check_emptyEither)
  console.log('check_emptyEither passed tests 04000', tested_check_emptyEither)
}

/////////////////////
function check_emptyEither_04000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES')
  function A_PRE_check_yourFunc() {
    return type_czech.check_emptyEither(arguments, ['EMPTY-ERROR', 'EMPTY-OK']);
  }
                  A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                  function A_yourFunc(){ }
  A_yourFunc([1])                      // A array
  A_yourFunc(234n)                     // B bigint
  A_yourFunc(false)                    // C boolean
  A_yourFunc(new Date('2005-06-07'))   // D date
  A_yourFunc(a=>a+8)                   // E function
  A_yourFunc(9)                        // F number
  A_yourFunc({b:10})                   // G object
  A_yourFunc(/d/)                      // H regex
  A_yourFunc('an-str')                 // I string
  A_yourFunc(Symbol('sym'))            // J symbol
  A_yourFunc([])                       // K empty array
  A_yourFunc(new Date(''))             // L empty date
  A_yourFunc(NaN)                      // M empty number
  A_yourFunc({})                       // N empty object
  A_yourFunc(/(?:)/)                   // O empty regex
  A_yourFunc('')                       // P empty string
  A_yourFunc(null)                     // Q empty null
  A_yourFunc(undefined)                // R empty undefined
  A_yourFunc()                         // S empty nothing
  A_yourFunc([11,12,13])               // T multi array
  A_yourFunc(14,15,16)                 // U multi args
  A_yourFunc([[17,18,19]])             // V multi in single
  A_yourFunc([20], [21])               // W two singles
  A_yourFunc([22,23,24], [25,26,27])   // X two multis
  A_yourFunc({d:{}})                   // Y empty in object
  A_yourFunc([{e:[28,{f:[29]}]}])      // Z empty in object
  A_yourFunc(['',''] )                 // 0 empty - [str str]
  A_yourFunc([[],[]] )                 // 1 empty - [arr arr]
  A_yourFunc([{},{}] )                 // 2 empty - [obj obj]
  A_yourFunc({g:[]},{h:[]})            // 3 empty - {arr arr}
  A_yourFunc({i:''},{j:''})            // 4 empty - {str str}
  A_yourFunc({k:{}},{l:{}})            // 5 empty - {obj obj}
                          expected_tests = 32
                          expected_fails = 0
  fail_tests = type_czech.countFails()
  total_tests = type_czech.countTally()
  if (expected_tests !== total_tests) 
      throw `A. _check_emptyEither().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
  else if (expected_fails !== fail_tests) 
      throw `A. _check_emptyEither().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
  else if  (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
  else
    TEST_total_checks += expected_tests



}


function check_emptyEither_04001(){
  var TYPE_CZECH_current_test_number = '04001';       
  var check_param =   {x:12,       y:{z:"str2"} } ;
  var type_a = {a:"EMPTY-ERROR",  b:{c:"EMPTY-OK"}};
  var type_b = {x:"EMPTY-OK", y:{z:"EMPTY-ERROR"}};
  var check_shape =  [type_a, type_b];         
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_emptyEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_emptyEither !=='undefined') failed_check_emptyEither ++;
        }
        if (typeof tested_check_emptyEither !=='undefined') tested_check_emptyEither ++;
}






