/* eslint-disable */

pass_count = 0;
fail_count = 0;


arr_arr_complex_58101();
arr_arr_complex_58102();
arr_arr_complex_58103();
arr_arr_complex_58104();
arr_arr_complex_58105();
arr_arr_complex_58106();
arr_arr_complex_58107();
arr_arr_complex_58108();
arr_arr_complex_58109();
arr_arr_complex_58110();

arr_arr_complex_58111();


//////////////////////////////////////////////////////////

function PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3){
  var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  start_parameters = [num_array_1, mixed_array_2, str_arr_num_arr_3]
  start_signatures = [ ['numbers'], 'array', 'arrays']
  start_issue = type_czech.checkParam_type(start_parameters, start_signatures)
  if (start_issue) return `START_ISSUE : ${start_issue}`

  signature_1 = ['number', 'number', 'number', 'number', 'number']
  num_array_1_issue = type_czech.checkParam_type(num_array_1, signature_1)
  if (num_array_1_issue) return `NUM_ARRAY_1_ISSUE : ${num_array_1_issue}`

  signature_2 = ['string', 'boolean', 'number']
  mixed_array_2_issue = type_czech.checkParam_type(mixed_array_2, signature_2)
  if (mixed_array_2_issue) return `MIXED_ARRAY_2_ISSUE  : ${mixed_array_2_issue}`

  signature_3 = [['strings'], ['numbers']]
  str_arr_num_arr_3_issue = type_czech.checkParam_type(str_arr_num_arr_3, signature_3)
  if (str_arr_num_arr_3_issue) return `STR_ARR_NUM_ARR_3_ISSUE : ${str_arr_num_arr_3_issue}`

  return ''; // no error
}


function arr_arr_complex_58101(){
  var TYPE_CZECH_current_test_number = '58101';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ ['abc', 'def'], [123,456] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = '';
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}


function arr_arr_complex_58102(){
  var TYPE_CZECH_current_test_number = '58102';
  var num_array_1 = [11,22,'not-a-number',44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ ['abc', 'def'], [123,456] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = `START_ISSUE : TE@214 -  ELEMENT '2' is assumed to be a 'number', but is mistakenly a 'string' with a value of not-a-number`;
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

function arr_arr_complex_58103(){
  var TYPE_CZECH_current_test_number = '58103';
  var num_array_1 = [11, 22];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ ['abc', 'def'], [123,456] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = `NUM_ARRAY_1_ISSUE : TE@237 -  ELEMENT '2' is assumed to be a 'number', but is mistakenly a 'undefined'`;
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

function arr_arr_complex_58104(){
  var TYPE_CZECH_current_test_number = '58104';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 'not-92']; 
  var str_arr_num_arr_3 = [ ['abc', 'def'], [123,456] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = `MIXED_ARRAY_2_ISSUE  : TE@214 -  ELEMENT '2' is assumed to be a 'number', but is mistakenly a 'string' with a value of not-92`;
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}



function arr_arr_complex_58105(){
  var TYPE_CZECH_current_test_number = '58105';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = 123456789n
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = `START_ISSUE : TE@237 -  ELEMENT '0' is assumed to be a 'array', but is mistakenly a 'undefined'`;
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

function arr_arr_complex_58106(){
  var TYPE_CZECH_current_test_number = '58106';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ 'not-an-array', [123,456] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = `START_ISSUE : TE@214 -  ELEMENT '0' is assumed to be a 'array', but is mistakenly a 'string' with a value of not-an-array`;
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}


function arr_arr_complex_58107(){
  var TYPE_CZECH_current_test_number = '58107';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ ['abc', 'def'], [123,456,'last-elem'] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = `STR_ARR_NUM_ARR_3_ISSUE : TE@214 -  ELEMENT '2' is assumed to be a 'number', but is mistakenly a 'string' with a value of last-elem`;
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

function arr_arr_complex_58108(){
  var TYPE_CZECH_current_test_number = '58108';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ ['abc', 'def', 'g', 'h', 'i', 'j', 'klm', 'nop'], [1066] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = '';
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

function arr_arr_complex_58109(){
  var TYPE_CZECH_current_test_number = '58109';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ ['yyz'], [-1077, 0, 1066,1492,1867,1776,1914, 1945, 1984,2021] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = '';
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

function arr_arr_complex_58110(){
  var TYPE_CZECH_current_test_number = '58110';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ ['shale'], [] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = `STR_ARR_NUM_ARR_3_ISSUE : TE@238 - Empty array has no types`;
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

//////////////////////////////////////////////////////////

function PRE_check_complexArray_short(num_array_1, mixed_array_2, str_arr_num_arr_3){
  var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  start_parameters = [num_array_1, mixed_array_2, str_arr_num_arr_3]
  start_signatures = [
     ['number', 'number', 'number', 'number', 'number'],
     ['string', 'boolean', 'number'], 
     [['strings'], ['numbers']]     
  ]
  start_issue = type_czech.checkParam_type(start_parameters, start_signatures)
  if (start_issue) return `START_ISSUE : ${start_issue}`
  return ''; // no error
}

function arr_arr_complex_58111(){
  var TYPE_CZECH_current_test_number = '58111';
  var num_array_1 = [11,22,33,44,55];
  var mixed_array_2 = ['yvr', false, 92]; 
  var str_arr_num_arr_3 = [ ['abc', 'def'], [123,456] ]
  var mutate_check = [ num_array_1, mixed_array_2, str_arr_num_arr_3]
  var expect_error = '';
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(mutate_check, '');

        var actual_error= PRE_check_complexArray_short(num_array_1, mixed_array_2, str_arr_num_arr_3);

        if (typeof beforeCheck !== 'undefined') afterCheck(mutate_check, '', before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}

if (fail_count>0) {
  the_problem = `check-tests/arr_arr_complex_58100.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;