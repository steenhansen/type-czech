/* eslint-disable */

tested_check_typeEither = 0;
failed_check_typeEither = 0;


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


function check_typeEither_07001(){
  var TYPE_CZECH_current_test_number = '07001';       
  var check_param =  {};
  var check_shape =   {a:1};           
  var expect_error =  `ME@402 - TypeCzech.check_typeEither() called with a second parameter as a non-array shape of {"a":1}`;  
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeEither(check_param, check_shape);
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
  var check_shape =  ["String"];            
  var expect_error =   `UE@701 - TypeCzech.check_typeEither()  needs at least 2 choices for a union, not 1 of ["String"]`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeEither(check_param, check_shape);
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
  var type_a       = {a:"Number",  b:{c:"Number"}};
  var type_b       = {a:"Number",  b:{c:"String"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeEither(check_param, check_shape);
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
  var type_a       = {a:"Number",  b:{c:"Number"}};
  var type_b       = {a:"Number",  b:{c:"String"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeEither(check_param, check_shape);
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
  var type_a       = {a:"Number",  b:{c:"Number"}};
  var type_b       = {a:"Number",  b:{c:"String"}};
  var check_shape = [type_a, type_b];            
  var expect_error =  [`check_typeEither(arguments, expected_types)`,
  `TE@213 - Property 'c' is indicated to be a 'Number', but is inaccurately a 'Boolean' : false, TE@213 - Property 'c' is indicated to be a 'String', but is inaccurately a 'Boolean' : false`,
  `[{a:"Number",b:{c:"Number"}},{a:"Number",b:{c:"String"}}]`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeEither(check_param, check_shape);
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
  var type_a       = {v_1:"String",  v_2:"Boolean"};
  var type_b       = {v_1:"String",  v_2:"Number"};
  var check_shape = [type_a, type_b];            
  var expect_error =  [`check_typeEither(arguments, expected_types)`,
  `TE@209 - Extra key in checked object - (v_extra:'more than this'), TE@213 - Property 'v_2' is indicated to be a 'Number', but is inaccurately a 'Boolean' : false`,
  `[{v_1:"String",v_2:"Boolean"},{v_1:"String",v_2:"Number"}]`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeEither(check_param, check_shape);
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
  var type_a       = {inner_1:[{g:"Number"}]};
  var type_b       = {inner_1:[{g:"String"}]};
  var type_c       = {inner_1:[{g:"Date"}]}; 
  var check_shape = [type_a, type_b, type_c];            
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeEither(check_param, check_shape);
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