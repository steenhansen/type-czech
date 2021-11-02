/* eslint-disable */

tested_check_interface = 0;
failed_check_interface = 0;

check_interface_02000();
check_interface_02001();   // fine
check_interface_02002();   // missing function in interface
check_interface_02003();   // wrong type in interface


TEST_total_fails += failed_check_interface;
TEST_total_checks += tested_check_interface;

if (TEST_show_random) {
  console.log('_check_interface failed tests 02000', failed_check_interface)
  console.log('_check_interface passed tests 02000', tested_check_interface)
}

/////////////////////////////////////////////////////////////
function check_interface_02000(){

  type_czech = TypeCzech('NO-ERROR-MESSAGES')
  function A_PRE_check_yourFunc() {
    return type_czech.check_interface(arguments, {show:'function'})
  }
              A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
              function A_yourFunc(){ }
  A_yourFunc([1])                    // fail 1 A array
  A_yourFunc(234n)                   // fail 2 B bigint
  A_yourFunc(false)                  // fail 3 C boolean
  A_yourFunc(new Date('2005-06-07')) // fail 4 D date
  A_yourFunc(a=>a+8)                 // fail 5 E function
  A_yourFunc(9)                      // fail 6 F number
  A_yourFunc({b:10})                 // fail 7 G object
  A_yourFunc(/d/)                    // fail 8 H regex
  A_yourFunc('an-str')               // fail 9 I string
  A_yourFunc(Symbol('sym'))          // fail 10 J symbol
  A_yourFunc([])                     // fail 11 K empty array
  A_yourFunc(new Date(''))           // fail 12 L empty date
  A_yourFunc(NaN)                    // fail 13 M empty number
  A_yourFunc({})                     // fail 14 N empty object
  A_yourFunc(/(?:)/)                 // fail 15 O empty regex
  A_yourFunc('')                     // fail 16 P empty string
  A_yourFunc(null)                   // fail 17 Q empty null
  A_yourFunc(undefined)              // fail 18 R empty undefined
  A_yourFunc()                       // fail 19 S empty nothing
  A_yourFunc([11,12,13])             // fail 20 T multi array
  A_yourFunc(14,15,16)               // fail 21 U multi args
  A_yourFunc([[17,18,19]])           // fail 22 V multi in single
  A_yourFunc([20], [21])             // fail 23 W two singles
  A_yourFunc([22,23,24], [25,26,27]) // fail 24 X two multis
  A_yourFunc({d:{}})                 // fail 25 Y empty in object
  A_yourFunc([{e:[28,{f:[29]}]}])    // fail 26 Z empty in object
  A_yourFunc(['',''] )               // fail 27 0 empty - [str str]
  A_yourFunc([[],[]] )               // fail 28 1 empty - [arr arr]
  A_yourFunc([{},{}] )               // fail 29 2 empty - [obj obj]
  A_yourFunc({g:[]},{h:[]})          // fail 30 3 empty - {arr arr}
  A_yourFunc({i:''},{j:''})          // fail 31 4 empty - {str str}
  A_yourFunc({k:{}},{l:{}})          // fail 32 5 empty - {obj obj}
              expected_tests = 32
              expected_fails = 32
  fail_tests = type_czech.countFails()
  total_tests = type_czech.countTally()
  if (expected_tests !== total_tests) 
      throw `A. _check_interface().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
  else if (expected_fails !== fail_tests) 
      throw `A. _check_interface().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
  else if (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
  else
    TEST_total_checks += expected_tests



    
/*
### B. check_interface() 
*/

  type_czech = TypeCzech('NO-ERROR-MESSAGES')
  function B_PRE_check_yourFunc() {
    return type_czech.check_interface(arguments, {show:'function'})
  }
              B_yourFunc = type_czech.linkUp(B_yourFunc, B_PRE_check_yourFunc) 
              function B_yourFunc(){ }
  B_yourFunc({show: x=>x})                 // pass 1
  B_yourFunc({a_prop:17, show: x=>x})      // pass 2 
  B_yourFunc({show: 44})        // fail 1
  B_yourFunc({not_show: x=>x})  // fail 2
                          expected_tests = 4
                          expected_fails = 2
  fail_tests = type_czech.countFails()
  total_tests = type_czech.countTally()
  if (expected_tests !== total_tests) 
      throw `B. _check_interface().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
  else if (expected_fails !== fail_tests) 
      throw `B. _check_interface().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
  else if  (typeof TEST_total_checks === 'undefined')
    console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
  else
    TEST_total_checks += expected_tests
}

function check_interface_02001(){
  var TYPE_CZECH_current_test_number = '02001';       
  var check_param = {show: (x) => x};
  var check_shape =   {show:'function'};          
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_interface(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_interface !=='undefined') failed_check_interface ++;
        }
        if (typeof tested_check_interface !=='undefined') tested_check_interface ++;
}



function check_interface_02002(){
  var TYPE_CZECH_current_test_number = '02002';       
  var check_param = {show: (x) => x};
  var check_shape =   {noShow:'function'};          
  var expect_error =  ["check_interface(arguments, expected_types)",
  "IE@501 - Interface missing key 'noShow' in checked object",
  '{noShow:"function"}'];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_interface(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_interface !=='undefined') failed_check_interface ++;
        }
        if (typeof tested_check_interface !=='undefined') tested_check_interface ++;
}


function check_interface_02003(){
  var TYPE_CZECH_current_test_number = '02003';       
  var check_param =  {show: 17};
  var check_shape =   {show:'function'};           
  var expect_error =  ["check_interface(arguments, expected_types)",
  "IE@502 - actual type of 'show' is 'number', with a value of '17', not the expected 'function' type",
  '{show:"function"}'];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_interface(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_interface !=='undefined') failed_check_interface ++;
        }
        if (typeof tested_check_interface !=='undefined') tested_check_interface ++;
}
