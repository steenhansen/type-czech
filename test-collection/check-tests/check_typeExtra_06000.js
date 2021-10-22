/* eslint-disable */



tested_check_typeExtra = 0;
failed_check_typeExtra = 0;




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


function check_typeExtra_06001(){
  var TYPE_CZECH_current_test_number = '06001';
  var check_param = [123, "abc"];
  var check_shape = ["Number", "String"]; 
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["String", "date"]; 
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@205 - The type 'date' is not a check_type type, but it looks just like 'Date'`,
  `["String","date"]`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["Number", "String"];  
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["Number", "Boolean"];  
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["String", ["Number"]]; 
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["Number", "String", ["Number"]];
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["Number", "String", ["Number"]];
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@215 - ELEMENT '1' is asserted to be a 'Number', but is fallaciously a 'String' : def`,
  `["Number","String",["Number"]]`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["Number", "String", {a:"Number", b:"Number"}];
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["Number", "String", {a:"Number", b:"Number"}];
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@213 - Property 'b' is indicated to be a 'Number', but is inaccurately a 'String' : def`,
  `["Number","String",{a:"Number",b:"Number"}]`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [ "String", "String", "date" ] ;
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@221 - Element '2' is supposed to be a 'date', but is missing : ["super","man"]`,
  `["String","String","date"]`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [{r:"Number"}]; 
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [["Number"], "String"]  ;
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = 'Date';
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra(1999-12-12T00:00:00.000Z, Date) needs two collections to work`,
  `Date`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = 'Number';
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra(a-number, Number) needs two collections to work`,
  `Number`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var expect_error = ['check_typeExtra(arguments, expected_types)'
  ,'TE@228 - TypeCzech.check_typeExtra([], ["array"]) needs each array to have at least two types to work'
  ,'["array"]'];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ['Array']; 
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ['Array']; 
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = 'Object'; 
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra([], Object) needs two collections to work`,
  `Object`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = 'Number'; 
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra(123, Number) needs two collections to work`,
  `Number`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = 'String'; 
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra(456, String) needs two collections to work`,
  `String`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra(null, null) needs two collections to work`,
  `null`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var expect_error = [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra(undefined, undefined) needs two collections to work`,
  `undefined`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [  ["S"],  {cyl:"N", stroke:"N"},  ["N", "S"],  {percent:"N", max:"N"} ]; 
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [  ["S"],  {cyl:"N", stroke:"N"},  ["N", "S"],  {percent:"N", max:"N"}, "S" ];
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [ {x:"N"}, {y:"N"} ];
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [  {manu:"S", model:"S"},  {cyl:"N", stroke:"N"},  {year:"N", color:"S"},  {percent:"N", max:"N"}, "S"];
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = ["String", "Date"];
  var expect_error =  [`check_typeExtra(arguments, expected_types)`,
  `TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Number'`,
  `["String","Date"]`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = 'String';
  var expect_error =  [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra(null, String) needs two collections to work`,
  `String`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var expect_error =  [`check_typeExtra(arguments, expected_types)`,
  `TE@227 - TypeCzech.check_typeExtra(undefined, undefined) needs two collections to work`,
  `undefined`];
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [{r:"Number"}];
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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
  var check_shape = [{r:"Number"}];
  var expect_error = '';
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error = type_czech_test.check_typeExtra(check_param, check_shape);
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