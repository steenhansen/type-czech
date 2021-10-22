/* eslint-disable */

tested_check_type = 0;

failed_check_type = 0;

check_type_05001();
check_type_05002();
check_type_05003();
check_type_05004();
check_type_05005();
check_type_05006();
check_type_05007();
check_type_05008();
check_type_05009();

check_type_05010();
check_type_05011();
check_type_05012();
check_type_05013();
check_type_05014();
check_type_05015();
check_type_05016();
check_type_05017();
check_type_05018();

TEST_total_fails += failed_check_type;
TEST_total_checks += tested_check_type;

if (TEST_show_random) {
console.log('check_type failed tests 05000', failed_check_type);
console.log('check_type passed tests 05000', tested_check_type);
}

//////////////////////////////////////////////////////////






function check_type_05001(){
  var TYPE_CZECH_current_test_number = '05001';       
  var check_param =  {cylinders:4, fuel:"gasoline", sneak:"extra"} ;
  var check_shape = {cylinders:"Number", fuel:"String"};           
  var expect_error = [`check_type(arguments, expected_types)`,
  `TE@209 - Extra key in checked object - (sneak:'extra')`,
  `{cylinders:"Number",fuel:"String"}`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}

function check_type_05002(){
  var TYPE_CZECH_current_test_number = '05002';       
  var check_param =  {};
  var check_shape = 'Object';          
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}


function check_type_05003(){
  var TYPE_CZECH_current_test_number = '05003';       
  var check_param = [[]];
  var check_shape = 'Array';          
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05004(){
  var TYPE_CZECH_current_test_number = '05004';       
  var check_param = {0:[{}], length:1};
  var check_shape = 'Array';          
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}


function check_type_05005(){
  var TYPE_CZECH_current_test_number = '05005';       
  var check_param = {0:[{}], length:1};
  var check_shape = 'Object';          
  var expect_error = [`check_type(arguments, expected_types)`,
  `TE@225 - The value '[]', which is a 'Array', is not a 'Object'`,
  `Object`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05006(){
  var TYPE_CZECH_current_test_number = '05006';       
  var check_param = {x:[{y:'z'}]};
  var check_shape = {x:[{y:'String'}]};           //   SAME AS TEST 5007 wat?
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05007(){
  var TYPE_CZECH_current_test_number = '05007';       
  var check_param = {x:[{y:'z'}]};
  var check_shape = {x:[{y:'String'}]}; 
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}




function check_type_05008(){
  var TYPE_CZECH_current_test_number = '05008';       
  var check_param = {cylinders:4, fuel:"gasoline", sneak:"extra"};
  var check_shape = {cylinders:"Number", fuel:"String"};
  var expect_error = [`check_type(arguments, expected_types)`,
  `TE@209 - Extra key in checked object - (sneak:'extra')`,
  `{cylinders:"Number",fuel:"String"}`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}




function check_type_05009(){
  var TYPE_CZECH_current_test_number = '05009';          // SAME AS 5010 ??? TEST
  var check_param = null;
  var check_shape = 'null'; 
  var expect_error = [`check_type(arguments, expected_types)`,
  `TE@203 - The type 'null' is not a valid check_type(), check_typeEither(), or check_typeExtra() second parameter type`,
  `null`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}


function check_type_05010(){
  var TYPE_CZECH_current_test_number = '05010';
  var check_param = null;
  var check_shape = 'null'; 
  var expect_error = [`check_type(arguments, expected_types)`,
  `TE@203 - The type 'null' is not a valid check_type(), check_typeEither(), or check_typeExtra() second parameter type`,
  `null`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}

function check_type_05011(){
  var TYPE_CZECH_current_test_number = '05011';
  var check_param = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  var check_shape = { a: [ { b:[ {c:'String'} ] } ], z: 'null'};   
  var expect_error = [`check_type(arguments, expected_types)`,
  `TE@210 - The type 'null' is not a real type`,
  `{a:[{b:[{c:"String"}]}],z:"null"}`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}

function check_type_05012(){
  var TYPE_CZECH_current_test_number = '05012';
  var check_param = {0:['a-string'], length:1};
  var check_shape = 'String';  
  var expect_error = ['check_type(arguments, expected_types)',
  "TE@225 - The value '[]', which is a 'Array', is not a 'String'",
  'String'];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05013(){
  var TYPE_CZECH_current_test_number = '05013';
  var check_param = [['a-string']];
  var check_shape = 'String';  
  var expect_error = [`check_type(arguments, expected_types)`,
  `TE@225 - The value '[]', which is a 'Array', is not a 'String'`,
  `String`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05014(){
  var TYPE_CZECH_current_test_number = '05014';
  var check_param = 'a-string';
  var check_shape = ['String'];  
  var expect_error = [`check_type(arguments, expected_types)`,
  `TE@217 - Comparing actual 'String' parameter, with a value of a-string, in relation to the expected shape of ["String"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's. Or same object keys`,
  `['String']`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05015(){
  var TYPE_CZECH_current_test_number = '05015';
  var check_param = 'a-string';
  var check_shape = 'String';  
  var expect_error =  ''; 
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}


function check_type_05016(){
  var TYPE_CZECH_current_test_number = '05016';
  var check_param = [1,2,3]; 
  var check_shape = ['Number'];  
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}




function check_type_05017(){
  var TYPE_CZECH_current_test_number = '05017';
  var check_param = ['a', 1]; 
  var check_shape = ['String', 'Number'];
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}



function check_type_05018(){
  var TYPE_CZECH_current_test_number = '05018';
  var check_param = [[1,2,3,4], ['a', 'b', 'c', 'd']];
  var check_shape = [ ['Number'], ['String'] ]; 
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_type(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_check_type !=='undefined') failed_check_type ++;
        }
        if (typeof tested_check_type !=='undefined') tested_check_type ++;
}