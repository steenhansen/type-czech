/* eslint-disable */

tested_check_typeEither = 0;
failed_check_typeEither = 0;

check_typeEither_07000();

check_typeEither_07001();
check_typeEither_07002();
 check_typeEither_07003();
 check_typeEither_07004();
 check_typeEither_07005();
 check_typeEither_07006();
 check_typeEither_07007();

TEST_total_fails += failed_check_typeEither;
TEST_total_checks += tested_check_typeEither;


if (TEST_show_random) {
  console.log('check_typeEither failed tests 07000', failed_check_typeEither)
  console.log('check_typeEither passed tests 07000', tested_check_typeEither)
}

///////////////////////////////////////////

function check_typeEither_07000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
      return type_czech.check_typeEither(arguments, [ "string", "number" ]);
    }
                    A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                    function A_yourFunc(){ }
    A_yourFunc(9)        // pass 1 F number
    A_yourFunc(NaN)      // pass 2 M empty number
    A_yourFunc('an-str') // pass 4 I string
    A_yourFunc('')       // PASSSSSSSSSSSSSSSSSSSSSSSSSSSSSfail 13 P empty string


    A_yourFunc([11,12,13])               // fail 17 T multi array
   A_yourFunc(14,15,16) // FFFAIILLLpass 3 U multi args   FAIL
   A_yourFunc([1])                      // fail 1 A array

    A_yourFunc(234n)                     // fail 2 B bigint
    A_yourFunc(false)                    // fail 3 C boolean
    A_yourFunc(new Date('2005-06-07'))   // fail 4 D date

    A_yourFunc(a=>a+8)                   // fail 5 E function
    A_yourFunc({b:10})                   // fail 6 G object
    A_yourFunc(/d/)                      // fail 7 H regex

    A_yourFunc(Symbol('sym'))            // fail 8 J symbol
    A_yourFunc([])                       // fail 9 K empty array
    A_yourFunc(new Date(''))             // fail 10 L empty date

    A_yourFunc({})                       // fail 11 N empty object
    A_yourFunc(/(?:)/)                   // fail 12 O empty regex
    
    A_yourFunc(null)                     // fail 14 Q empty null
    A_yourFunc(undefined)                // fail 15 R empty undefined
    A_yourFunc()                         // fail 16 S empty nothing
 
    A_yourFunc([[17,18,19]])             // fail 18 V multi in single
    A_yourFunc([20], [21])               // fail 19 W two singles
    A_yourFunc([22,23,24], [25,26,27])   // fail 20 X two multis

    A_yourFunc({d:{}})                   // fail 21 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])      // fail 22 Z empty in object
    A_yourFunc(['',''] )                 // fail 23 0 empty - [str str]

    A_yourFunc([[],[]] )                 // fail 24 1 empty - [arr arr]
    A_yourFunc([{},{}] )                 // fail 25 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})            // fail 26 3 empty - {arr arr}

    A_yourFunc({i:''},{j:''})            // fail 27 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})            // fail 28 5 empty - {obj obj}
                            expected_tests = 32
                            expected_fails = 28
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_typeEither().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_typeEither().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      TEST_total_checks += expected_tests



}


function check_typeEither_07001(){
  var TYPE_CZECH_current_test_number = '07001';       
  var check_param =  {};
  var check_shape =   {a:1};           
  var expect_error =  `ME@402 - TypeCzech.check_typeEither() called with a second parameter as a non-array shape of {"a":1}`;  
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeEither !=='undefined') failed_check_typeEither ++;
        }
        if (typeof tested_check_typeEither !=='undefined') tested_check_typeEither ++;
}


function check_typeEither_07002(){
  var TYPE_CZECH_current_test_number = '07002';       
  var check_param =  177;
  var check_shape =  ["string"];            
  var expect_error =   `UE@701 - TypeCzech.check_typeEither()  needs at least 2 choices for an Either, not 1 of ["string"]`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeEither !=='undefined') failed_check_typeEither ++;
        }
        if (typeof tested_check_typeEither !=='undefined') tested_check_typeEither ++;
}


function check_typeEither_07003(){
  var TYPE_CZECH_current_test_number = '07003';       
  var check_param =  {a:1,         b:{c:2} } ;
  var type_a       = {a:"number",  b:{c:"number"}};
  var type_b       = {a:"number",  b:{c:"string"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeEither !=='undefined') failed_check_typeEither ++;
        }
        if (typeof tested_check_typeEither !=='undefined') tested_check_typeEither ++;
}

function check_typeEither_07004(){
  var TYPE_CZECH_current_test_number = '07004';       
  var check_param =  {a:1,         b:{c:'d'} } ;
  var type_a       = {a:"number",  b:{c:"number"}};
  var type_b       = {a:"number",  b:{c:"string"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeEither !=='undefined') failed_check_typeEither ++;
        }
        if (typeof tested_check_typeEither !=='undefined') tested_check_typeEither ++;
}

function check_typeEither_07005(){
  var TYPE_CZECH_current_test_number = '07005';       
  var check_param =  {a:1,         b:{c:false} } ;
  var type_a       = {a:"number",  b:{c:"number"}};
  var type_b       = {a:"number",  b:{c:"string"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  [`check_typeEither(arguments, expected_types)`,
  `TE@213 - Property 'c' is indicated to be a 'number', but is inaccurately a 'boolean' : false, TE@213 - Property 'c' is indicated to be a 'string', but is inaccurately a 'boolean' : false`,
  `[{a:"number",b:{c:"number"}},{a:"number",b:{c:"string"}}]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeEither !=='undefined') failed_check_typeEither ++;
        }
        if (typeof tested_check_typeEither !=='undefined') tested_check_typeEither ++;
}

function check_typeEither_07006(){
  var TYPE_CZECH_current_test_number = '07006';       
  var check_param =  {v_1:"hi",      v_2:false,     v_extra:"more than this"};
  var type_a       = {v_1:"string",  v_2:"boolean"};
  var type_b       = {v_1:"string",  v_2:"number"};
  var check_shape = [type_a, type_b];            
  var expect_error =  [`check_typeEither(arguments, expected_types)`,
  `TE@209 - Extra key in checked object - (v_extra:'more than this'), TE@213 - Property 'v_2' is indicated to be a 'number', but is inaccurately a 'boolean' : false`,
  `[{v_1:"string",v_2:"boolean"},{v_1:"string",v_2:"number"}]`];
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeEither !=='undefined') failed_check_typeEither ++;
        }
        if (typeof tested_check_typeEither !=='undefined') tested_check_typeEither ++;
}


function check_typeEither_07007(){
  var TYPE_CZECH_current_test_number = '07007';       
  var check_param =  {inner_1:[{g:new Date}]};
  var type_a       = {inner_1:[{g:"number"}]};
  var type_b       = {inner_1:[{g:"string"}]};
  var type_c       = {inner_1:[{g:"date"}]}; 
  var check_shape = [type_a, type_b, type_c];            
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech.check_typeEither(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_typeEither !=='undefined') failed_check_typeEither ++;
        }
        if (typeof tested_check_typeEither !=='undefined') tested_check_typeEither ++;
}