/* eslint-disable */



tested_check_typeExtra = 0;
failed_check_typeExtra = 0;


check_typeExtra_06000()

check_typeExtra_06001();
check_typeExtra_06002();
check_typeExtra_06003();
check_typeExtra_06004();
check_typeExtra_06005();
check_typeExtra_06006();
check_typeExtra_06007();
check_typeExtra_06008();
check_typeExtra_06009();

check_typeExtra_06010();
check_typeExtra_06011();
check_typeExtra_06012();
check_typeExtra_06013();
check_typeExtra_06014();
check_typeExtra_06015();
check_typeExtra_06016();
check_typeExtra_06017();
check_typeExtra_06018();
check_typeExtra_06019();

check_typeExtra_06020();
check_typeExtra_06021();
check_typeExtra_06022();
check_typeExtra_06023();
check_typeExtra_06024();
check_typeExtra_06025();
check_typeExtra_06026();
check_typeExtra_06027();
check_typeExtra_06028();
check_typeExtra_06029();

check_typeExtra_06030_undef_ok();
check_typeExtra_06031_undef_ok();
check_typeExtra_06032();
check_typeExtra_06033();

TEST_total_fails += failed_check_typeExtra;
TEST_total_checks += tested_check_typeExtra;

if (TEST_show_random) {
console.log('check_typeExtra failed tests 06000', failed_check_typeExtra)
console.log('check_typeExtra passed tests 06000', tested_check_typeExtra)
}


///////////////////////////////////////////////////////////
function check_typeExtra_06000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES')
  function A_PRE_check_yourFunc() {
    return type_czech.check_typeExtra(arguments, ['number', 'number']);
  }
                  A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                  function A_yourFunc(){ }
  A_yourFunc(NaN, NaN)  // pass 3 M empty number
  A_yourFunc(9, 9)      // pass 6 F number
  A_yourFunc(14,15,16)  // pass 12 U multi args
  A_yourFunc([1], [1])                                        // fail 1 A array
  A_yourFunc(234n,234n)                                       // fail 2 B bigint
  A_yourFunc(false, false)                                    // fail 3 C boolean
  A_yourFunc(new Date('2005-06-07'), new Date('2005-06-07'))  // fail 4 D date
  A_yourFunc(a=>a+8, a=>a+8)                                  // fail 5 E function
  A_yourFunc({b:10}, {b:10})                                  // fail 6 G object
  A_yourFunc(/d/, /d/)                                        // fail 7 H regex
  A_yourFunc('an-str', 'an-str')                              // fail 8 I string
  A_yourFunc(Symbol('sym'), Symbol('sym'))                    // fail 9 J symbol
  A_yourFunc([], [])                                          // fail 10 K empty array
  A_yourFunc(new Date(''), new Date(''))                      // fail 11 L empty date
  A_yourFunc({}, {})                                          // fail 12 N empty object
  A_yourFunc(/(?:)/, /(?:)/)                                  // fail 13 O empty regex
  A_yourFunc('', '')                                          // fail 14 P empty string
  A_yourFunc(null, null)                                      // fail 15 Q empty null
  A_yourFunc(undefined, undefined)                            // fail 16 R empty undefined
  A_yourFunc()                                                // fail 17 S empty nothing
  A_yourFunc([11,12,13], [11,12,13])                          // fail 18 T multi array
  A_yourFunc([[17,18,19]], [[17,18,19]])                      // fail 19 V multi in single
  A_yourFunc([20], [21])                                      // fail 20 W two singles
  A_yourFunc([22,23,24], [25,26,27])                          // fail 21 X two multis
  A_yourFunc({d:{}}, {d:{}})                                  // fail 22 Y empty in object
  A_yourFunc([{e:[28,{f:[29]}]}], [{e:[28,{f:[29]}]}])        // fail 23 Z empty in object
  A_yourFunc(['',''], ['',''])                                // fail 24 0 empty - [str str]
  A_yourFunc([[],[]], [[],[]])                                // fail 25 1 empty - [arr arr]
  A_yourFunc([{},{}], [{},{}])                                // fail 26 2 empty - [obj obj]
  A_yourFunc({g:[]}, {h:[]})                                  // fail 27 3 empty - {arr arr}
  A_yourFunc({i:''}, {j:''})                                  // fail 28 4 empty - {str str}
  A_yourFunc({k:{}}, {l:{}})                                  // fail 29 5 empty - {obj obj}

  expected_tests = 32
                            expected_fails = 29
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_typeExtra().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_typeExtra().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests;

      type_czech = TypeCzech('NO-ERROR-MESSAGES')
      function B_PRE_check_yourFunc() {
        return type_czech.check_typeExtra(arguments, 'number');
      }
                      B_yourFunc = type_czech.linkUp(B_yourFunc, B_PRE_check_yourFunc) 
                      function B_yourFunc(){ }
      B_yourFunc(17)
      B_yourFunc(17, 'extra')
      B_yourFunc(17, 'extra', false)
                              expected_tests = 3
                              expected_fails = 3
      fail_tests = type_czech.countFails()
      total_tests = type_czech.countTally()
      if (expected_tests !== total_tests) 
          throw `B. _check_typeExtra().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
      else if (expected_fails !== fail_tests) 
          throw `B. _check_typeExtra().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
      else if  (typeof TEST_total_checks === 'undefined')
        console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
      else
        TEST_total_checks += expected_tests
  
  
  
  
  
  /*
  C. Test single object with extra parameters
  */
  
      type_czech = TypeCzech('NO-ERROR-MESSAGES')
      function C_PRE_check_yourFunc() {
        return type_czech.check_typeExtra(arguments, {a:'number'});
      }
                      C_yourFunc = type_czech.linkUp(C_yourFunc, C_PRE_check_yourFunc) 
                      function C_yourFunc(){ } 
      C_yourFunc({a:17})
      C_yourFunc({a:17, b:13})
      C_yourFunc({jj:17, b:13}) //fail
                              expected_tests = 3
                              expected_fails = 1
      fail_tests = type_czech.countFails()
      total_tests = type_czech.countTally()
      if (expected_tests !== total_tests) 
          throw `C. _check_typeExtra().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
      else if (expected_fails !== fail_tests) 
          throw `C. _check_typeExtra().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
      else if  (typeof TEST_total_checks === 'undefined')
        console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
      else
        TEST_total_checks += expected_tests
  
  
  
  
  /*
  D. Test array with extra parameters
  */
  
      type_czech = TypeCzech('NO-ERROR-MESSAGES')
      function D_PRE_check_yourFunc() {
        return type_czech.check_typeExtra(arguments, ['number', 'string']);
      }
                      D_yourFunc = type_czech.linkUp(D_yourFunc, D_PRE_check_yourFunc) 
                      function D_yourFunc(){ } 
      D_yourFunc(17, 'abc')
      D_yourFunc(17, 'abc', true)
      D_yourFunc('abc', 17) //fail
                              expected_tests = 3
                              expected_fails = 1
      fail_tests = type_czech.countFails()
      total_tests = type_czech.countTally()
      if (expected_tests !== total_tests) 
          throw `D. _check_typeExtra().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
      else if (expected_fails !== fail_tests) 
          throw `D. _check_typeExtra().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
      else if  (typeof TEST_total_checks === 'undefined')
        console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
      else
        TEST_total_checks += expected_tests
  

}

function check_typeExtra_06001(){
  var TYPE_CZECH_current_test_number = '06001';
  var check_param = [123, "abc"];
  var check_shape = ["number", "string"]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06002(){
  var TYPE_CZECH_current_test_number = '06002';
  var check_param = ['abc', 456];
  var check_shape = ["string", "date"]; 
  var expect_error = [`check_typeExtra()`,
  `TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'number'`,
  `["string","date"]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}



function check_typeExtra_06003(){
  var TYPE_CZECH_current_test_number = '06003';
  var check_param = [456, 'a-string'];
  var check_shape = ["number", "string"];  
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06004(){
  var TYPE_CZECH_current_test_number = '06004';
  var check_param = [456, false, 'extra-string'];
  var check_shape = ["number", "boolean"];  
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}




function check_typeExtra_06005(){
  var TYPE_CZECH_current_test_number = '06005';
  var check_param = ['abc', [456, 789]];
  var check_shape = ["string", ["number"]]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}



function check_typeExtra_06006(){
  var TYPE_CZECH_current_test_number = '06006';
  var check_param = [123, 'abc', [456, 789]];
  var check_shape = ["number", "string", ["number"]];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}



function check_typeExtra_06007(){
  var TYPE_CZECH_current_test_number = '06007';
  var check_param =[123, 'abc', [456, "def"]];
  var check_shape = ["number", "string", ["number"]];
  var expect_error = [`check_typeExtra()`,
  `TE@215 - ELEMENT '1' is asserted to be a 'number', but is fallaciously a 'string' : def`,
  `["number","string",["number"]]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06008(){
  var TYPE_CZECH_current_test_number = '06008';
  var check_param = [123, 'abc', {a:456, b:789}];
  var check_shape = ["number", "string", {a:"number", b:"number"}];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}



function check_typeExtra_06009(){
  var TYPE_CZECH_current_test_number = '06009';
  var check_param = [123, 'abc', {a:456, b:'def'}];
  var check_shape = ["number", "string", {a:"number", b:"number"}];
  var expect_error = [`check_typeExtra()`,
  `TE@213 - Property 'b' is indicated to be a 'number', but is inaccurately a 'string' : def`,
  `["number","string",{a:"number",b:"number"}]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}




function check_typeExtra_06010(){
  var TYPE_CZECH_current_test_number = '06010';
  var check_param = [ "super", "man" ];
  var check_shape = [ "string", "string", "date" ] ;
  var expect_error = [`check_typeExtra()`,
  `TE@221 - Element '2' is supposed to be a 'date', but is missing : ["super","man"]`,
  `["string","string","date"]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}




function check_typeExtra_06011(){
  var TYPE_CZECH_current_test_number = '06011';
  var check_param = [{r:11}];
  var check_shape = [{r:"number"}]; 
  var expect_error =  [`check_typeExtra()`,
  `TE@234 - check_typeExtra([{r:11}], [{r:"number"}]) try [{r:"number"}, {r:"number"}] as [{r:"number"}] is illegal.`,
  `[{r:"number"}]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}



function check_typeExtra_06012(){
  var TYPE_CZECH_current_test_number = '06012';
  var check_param = [[11, 13, 17, 19], "abc", 'extra-string'];
  var check_shape = [["number"], "string"]  ;
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}





function check_typeExtra_06013(){
  var TYPE_CZECH_current_test_number = '06013';
  var check_param = new Date('1999-12-12');
  var check_shape = 'date';
  var expect_error = [`check_typeExtra()`,
  `TE@227 - check_typeExtra(1999-12-12T00:00:00.000Z, date) needs 2 collections to work`,
  `date`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}





















function check_typeExtra_06014(){
  var TYPE_CZECH_current_test_number = '06014';
  var check_param = 'a-number';
  var check_shape = 'number';
  var expect_error = [`check_typeExtra()`,
  `TE@227 - check_typeExtra(a-number, number) needs 2 collections to work`,
  `number`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}

function check_typeExtra_06015(){
  var TYPE_CZECH_current_test_number = '06015';
  var check_param = [[]];
  var check_shape = ['array']; 
  var expect_error = ['check_typeExtra()'
  ,'TE@234 - check_typeExtra([[]], ["array"]) try [array, array] as ["array"] is illegal.'
  ,'["array"]'];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06016(){
  var TYPE_CZECH_current_test_number = '06016';
  var check_param = [[2], [3]];
  var check_shape = [[]]; 
  var expect_error = [`check_typeExtra()`,
  `TE@234 - check_typeExtra([[2],[3]], [[]]) try [[], []] as [[]] is illegal.`,
  `[[]]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}



function check_typeExtra_06017(){
  var TYPE_CZECH_current_test_number = '06017';
  var check_param = [[2], [3]];
  var check_shape = ['array']; 
  var expect_error = [`check_typeExtra()`,
  `TE@234 - check_typeExtra([[2],[3]], ["array"]) try [array, array] as ["array"] is illegal.`,
  `["array"]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}

function check_typeExtra_06018(){
  var TYPE_CZECH_current_test_number = '06018';
  var check_param = [[1,2], [3,4]];
  var check_shape = ['array']; 
  var expect_error = [`check_typeExtra()`,
  `TE@234 - check_typeExtra([[1,2],[3,4]], ["array"]) try [array, array] as ["array"] is illegal.`,
  `["array"]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06019(){
  var TYPE_CZECH_current_test_number = '06019';
  var check_param = [[1,2], [3,4]];
  var check_shape = [[]]; 
  var expect_error =  [`check_typeExtra()`,
  `TE@234 - check_typeExtra([[1,2],[3,4]], [[]]) try [[], []] as [[]] is illegal.`,
  `[[]]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06020(){
  var TYPE_CZECH_current_test_number = '06020';
  var check_param = [];
  var check_shape = 'object'; 
  var expect_error = [`check_typeExtra()`,
  `TE@227 - check_typeExtra([], object) needs 2 collections to work`,
  `object`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}

function check_typeExtra_06021(){
  var TYPE_CZECH_current_test_number = '06021';
  var check_param =123;
  var check_shape = 'number'; 
  var expect_error = [`check_typeExtra()`,
  `TE@227 - check_typeExtra(123, number) needs 2 collections to work`,
  `number`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}





function check_typeExtra_06022(){
  var TYPE_CZECH_current_test_number = '06022';
  var check_param =456;
  var check_shape = 'string'; 
  var expect_error = [`check_typeExtra()`,
  `TE@227 - check_typeExtra(456, string) needs 2 collections to work`,
  `string`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06023(){
  var TYPE_CZECH_current_test_number = '06023';
  var check_param =null;
  var check_shape = 'null'; 
  var expect_error = [`check_typeExtra()`,
  `TE@227 - check_typeExtra(null, null) needs 2 collections to work`,
  `null`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}






function check_typeExtra_06024(){
  var TYPE_CZECH_current_test_number = '06024';
  var check_param =undefined;
  var check_shape = 'undefined'; 
  var expect_error = [`check_typeExtra()`,
  `TE@227 - check_typeExtra(undefined, undefined) needs 2 collections to work`,
  `undefined`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}







function check_typeExtra_06025(){
  var TYPE_CZECH_current_test_number = '06025';
  var check_param = [ ["Harley-Davidson", "Electra-Glide"],
  {"cyl":2,"stroke":4}, 
   [2000, "red"],
  {"percent":75,"max":500} ];
  var check_shape = [  ["s"],  {cyl:"n", stroke:"n"},  ["n", "s"],  {percent:"n", max:"n"} ]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}








function check_typeExtra_06026(){
  var TYPE_CZECH_current_test_number = '06026';
  var check_param = [ ["Harley-Davidson", "Electra-Glide"],
  {"cyl":2,"stroke":4}, 
    [2000, "red"],
   {"percent":75,"max":500}, 'bike'];
  var check_shape = [  ["s"],  {cyl:"n", stroke:"n"},  ["n", "s"],  {percent:"n", max:"n"}, "s" ];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}




















function check_typeExtra_06027(){
  var TYPE_CZECH_current_test_number = '06027';
  var check_param = [ {x: 5},  {y: 1} ];
  var check_shape = [ {x:"n"}, {y:"n"} ];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}






function check_typeExtra_06028(){
  var TYPE_CZECH_current_test_number = '06028';
  var check_param = [{"manu":"Harley-Davidson","model":"Electra-Glide"},{"cyl":2,"stroke":4},{"year":2000,"color":"red"},{"percent":75,"max":500},"bike"];
  var check_shape = [  {manu:"s", model:"s"},  {cyl:"n", stroke:"n"},  {year:"n", color:"s"},  {percent:"n", max:"n"}, "s"];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}














function check_typeExtra_06029(){
  var TYPE_CZECH_current_test_number = '06029';
  var check_param = ['abc', 456];
  var check_shape = ["string", "date"];
  var expect_error =  [`check_typeExtra()`,
  `TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'number'`,
  `["string","date"]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}













function check_typeExtra_06030_undef_ok(){
  var TYPE_CZECH_current_test_number = '06030';
  var check_param = null;
  var check_shape = 'string';
  var expect_error =  [`check_typeExtra()`,
  `TE@227 - check_typeExtra(null, string) needs 2 collections to work`,
  `string`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}





function check_typeExtra_06031_undef_ok(){
  var TYPE_CZECH_current_test_number = '06031';
  var check_param = undefined;
  var check_shape = 'undefined';
  var expect_error =  [`check_typeExtra()`,
  `TE@227 - check_typeExtra(undefined, undefined) needs 2 collections to work`,
  `undefined`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06032(){
  var TYPE_CZECH_current_test_number = '06032';
  var check_param = [{r:11}];
  var check_shape = [{r:"number"}];
  var expect_error = [`check_typeExtra()`,
  `TE@234 - check_typeExtra([{r:11}], [{r:"number"}]) try [{r:"number"}, {r:"number"}] as [{r:"number"}] is illegal.`,
  `[{r:"number"}]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}


function check_typeExtra_06033(){
  var TYPE_CZECH_current_test_number = '06033';
  var check_param = [{r: 11, e:'for extra'}];
  var check_shape = [{r:"number"}];
  var expect_error = [`check_typeExtra()`,
  `TE@234 - check_typeExtra([{r:11,e:"for extra"}], [{r:"number"}]) try [{r:"number"}, {r:"number"}] as [{r:"number"}] is illegal.`,
  `[{r:"number"}]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeExtra !=='undefined') failed_check_typeExtra ++;
        }
        if (typeof tested_check_typeExtra !=='undefined') tested_check_typeExtra ++;
}