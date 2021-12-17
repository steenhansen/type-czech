/* eslint-disable */


pass_count = 0;
fail_count = 0;



//checkParam_typeExtra_06000()

checkParam_typeExtra_06001();
checkParam_typeExtra_06002();
checkParam_typeExtra_06003();
checkParam_typeExtra_06004();
checkParam_typeExtra_06005();
checkParam_typeExtra_06006();
checkParam_typeExtra_06007();
checkParam_typeExtra_06008();
checkParam_typeExtra_06009();

checkParam_typeExtra_06010();
checkParam_typeExtra_06011();
checkParam_typeExtra_06012();
checkParam_typeExtra_06012b()


checkParam_typeExtra_06013();
checkParam_typeExtra_06014();
checkParam_typeExtra_06015();
checkParam_typeExtra_06016();
checkParam_typeExtra_06017();
checkParam_typeExtra_06018();
checkParam_typeExtra_06019();

checkParam_typeExtra_06020();
checkParam_typeExtra_06021();
checkParam_typeExtra_06022();
checkParam_typeExtra_06023();
checkParam_typeExtra_06024();
checkParam_typeExtra_06025();
checkParam_typeExtra_06026();
checkParam_typeExtra_06027();
checkParam_typeExtra_06028();
checkParam_typeExtra_06029();

checkParam_typeExtra_06030_undef_ok();
checkParam_typeExtra_06031_undef_ok();
checkParam_typeExtra_06032();
checkParam_typeExtra_06033();

checkParam_typeExtra_06034();
checkParam_typeExtra_06035();
checkParam_typeExtra_06036();



checkParam_typeExtra_06000()



///////////////////////////////////////////////////////////
function checkParam_typeExtra_06000(){
  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
  function A_PRE_check_yourFunc(a_var) {
    extra_issue = type_czech.checkParam_typeExtra(a_var, 'number');
    return extra_issue;
  }
                  A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                  function A_yourFunc(){ }
  A_yourFunc(NaN)         // pass 1 M empty number
  A_yourFunc(9)           // pass 2 F number
  A_yourFunc([1])         // pass 3 A array
  A_yourFunc([11,12,13])  // pass 4 T multi array
  A_yourFunc(14,15,16)    // pass 5 U multi args
  A_yourFunc([20])        // pass 6 W two singles
  A_yourFunc([22,23,24])  // pass 7 X two multis
  pass_count += expectedAndFailedTests(7, 0, 'A-Pass', '_checkParam_typeExtra().md');

  A_yourFunc(234n)                    // fail 1 B bigint
  A_yourFunc(false)                   // fail 2 C boolean
  A_yourFunc(new Date('2005-06-07'))  // fail 3 D date
  A_yourFunc(a=>a+8)                  // fail 4 E function
  A_yourFunc({b:10})                  // fail 5 G object
  A_yourFunc(/d/)                     // fail 6 H regex
  A_yourFunc('an-str')                // fail 7 I string
  A_yourFunc(Symbol('sym'))           // fail 8 J symbol
  A_yourFunc([])                      // fail 9 K empty array
  A_yourFunc(new Date(''))            // fail 10 L empty date
  A_yourFunc({})                      // fail 11 N empty object
  A_yourFunc(/(?:)/)                  // fail 12 O empty regex
  A_yourFunc('')                      // fail 13 P empty string
  A_yourFunc(null)                    // fail 14 Q empty null
  A_yourFunc(undefined)               // fail 15 R empty undefined
  A_yourFunc()                        // fail 16 S empty nothing
  A_yourFunc([[17,18,19]])            // fail 17 V multi in single
  A_yourFunc({d:{}})                  // fail 18 Y empty in object
  A_yourFunc([{e:[28,{f:[29]}]}])     // fail 19 Z empty in object
  A_yourFunc(['',''])                 // fail 20 0 empty - [str str]
  A_yourFunc([[],[]])                 // fail 21 1 empty - [arr arr]
  A_yourFunc([{},{}])                 // fail 22 2 empty - [obj obj]
  A_yourFunc({g:[]})                  // fail 23 3 empty - {arr arr}
  A_yourFunc({i:''})                  // fail 24 4 empty - {str str}
  A_yourFunc({k:{}})                  // fail 25 5 empty - {obj obj}
  pass_count += expectedAndFailedTests(25, 25, 'A-Pass', '_checkParam_typeExtra().md');



      type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
      function B_PRE_check_yourFunc(a_var) {
        extra_issue = type_czech.checkParam_typeExtra(a_var, 'number');
        return extra_issue;
      }
                      B_yourFunc = type_czech.linkUp(B_yourFunc, B_PRE_check_yourFunc) 
                      function B_yourFunc(){ }
      B_yourFunc(17)
      B_yourFunc(17, 'extra')
      B_yourFunc(17, 'extra', false)
      pass_count += expectedAndFailedTests(3, 0, 'B-Pass', '_checkParam_typeExtra().md');

                          

  
  
  /*
  C. Test single object with extra parameters
  */
  
      type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
      function C_PRE_check_yourFunc(a_var) {
        return type_czech.checkParam_typeExtra(a_var, {a:'number'});
      }
                      C_yourFunc = type_czech.linkUp(C_yourFunc, C_PRE_check_yourFunc) 
                      function C_yourFunc(){ } 
      C_yourFunc({a:17})
      C_yourFunc({a:17, b:13})
      pass_count += expectedAndFailedTests(2, 0, 'C-Pass', '_checkParam_typeExtra().md');
      C_yourFunc({jj:17, b:13}) //fail
      pass_count += expectedAndFailedTests(1, 1, 'C-Fail', '_checkParam_typeExtra().md');
  
  
  /*
  D. Test array with extra parameters
  */
  
      type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
      function D_PRE_check_yourFunc(a_var, b_var) {
        return type_czech.checkParam_typeExtra([a_var, b_var], ['number', 'string']);
      }
                      D_yourFunc = type_czech.linkUp(D_yourFunc, D_PRE_check_yourFunc) 
                      function D_yourFunc(){ } 
      D_yourFunc(17, 'abc')
      D_yourFunc(17, 'abc', true)
      pass_count += expectedAndFailedTests(2, 0, 'D-Pass', '_checkParam_typeExtra().md');

      D_yourFunc('abc', 17) //fail
      pass_count += expectedAndFailedTests(1, 1, 'D-Pass', '_checkParam_typeExtra().md');


}


// type_czech.checkParam_typeExtra([123, "abc"], ["number", "string"]);

function checkParam_typeExtra_06001(){
  var TYPE_CZECH_current_test_number = '06001';
  var check_param = [123, "abc"];
  var check_shape = ["number", "string"]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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


function checkParam_typeExtra_06002(){
  var TYPE_CZECH_current_test_number = '06002';
  var check_param = ['abc', 456];
  var check_shape = ["string", "date"]; 
  var expect_error = `TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'number' with a value of 456`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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



function checkParam_typeExtra_06003(){
  var TYPE_CZECH_current_test_number = '06003';
  var check_param = [456, 'a-string'];
  var check_shape = ["number", "string"];  
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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


function checkParam_typeExtra_06004(){
  var TYPE_CZECH_current_test_number = '06004';
  var check_param = [456, false, 'extra-string'];
  var check_shape = ["number", "boolean"];  
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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




function checkParam_typeExtra_06005(){
  var TYPE_CZECH_current_test_number = '06005';
  var check_param = ['abc', [456, 789]];
  var check_shape = ["string", ["number"]]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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



function checkParam_typeExtra_06006(){
  var TYPE_CZECH_current_test_number = '06006';
  var check_param = [123, 'abc', [456, 789]];
  var check_shape = ["number", "string", ["number"]];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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



function checkParam_typeExtra_06007(){
  var TYPE_CZECH_current_test_number = '06007';
  var check_param =[123, 'abc', [456, "def"]];
  var check_shape = ["number", "string", ["numbers"]];
  var expect_error = `TE@214 -  ELEMENT '1' is assumed to be a 'number', but is mistakenly a 'string' with a value of def`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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


function checkParam_typeExtra_06008(){
  var TYPE_CZECH_current_test_number = '06008';
  var check_param = [123, 'abc', {a:456, b:789}];
  var check_shape = ["number", "string", {a:"number", b:"number"}];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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



function checkParam_typeExtra_06009(){
  var TYPE_CZECH_current_test_number = '06009';
  var check_param = [123, 'abc', {a:456, b:'def'}];
  var check_shape = ["number", "string", {a:"number", b:"number"}];
  var expect_error = `TE@213 - Property 'b' is indicated to be a 'number', but is inaccurately a 'string' : def`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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




function checkParam_typeExtra_06010(){
  var TYPE_CZECH_current_test_number = '06010';
  var check_param = [ "super", "man" ];
  var check_shape = [ "string", "string", "date" ] ;
  var expect_error =  `TE@237 -  ELEMENT '2' is assumed to be a 'date', but is mistakenly a 'undefined'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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



//type_czech.checkParam_typeExtra([{r:11}], '{r:"number"}');
//''
//type_czech.checkParam_typeExtra([{r:11}, 'extra'], '{r:"number"}');
//''
function checkParam_typeExtra_06011(){
  var TYPE_CZECH_current_test_number = '06011';
  var check_param = [{r:11}];
  var check_shape = [{r:"number"}]; 
  var expect_error =  '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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


/// !!!!!!! the extra always matches .......
// so when matching [11, 13, 17, 19] <==> ["number"]   it says ok, 11 matches number, extra is [13,17,19]
function checkParam_typeExtra_06012(){
  var TYPE_CZECH_current_test_number = '06012';
  var check_param = [[11, 13, 17, 19], "abc", 'extra-string'];
  var check_shape = [["number"], "string"]  ;
  var expect_error = ``;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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

function checkParam_typeExtra_06012b(){
  var TYPE_CZECH_current_test_number = '06012b';
  var check_param = [[11, 13, 17, 19], "abc", 'extra-string'];
  var check_shape = [["numbers"], "string"]  ;
  var expect_error = ``;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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




function checkParam_typeExtra_06013(){
  var TYPE_CZECH_current_test_number = '06013';
  var check_param = new Date('1999-12-12');
  var check_shape = 'date';
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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





















function checkParam_typeExtra_06014(){
  var TYPE_CZECH_current_test_number = '06014';
  var check_param = 'A-STRING';
  var check_shape = 'number';
  var expect_error =`EE@320 - checkParam_typeExtra('A-STRING', 'number') has the first param wrong. TE@226 - The value 'A-STRING', which is a 'string', is not a 'number'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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


//type_czech.checkParam_typeExtra([[]], 'array');
//''
//type_czech.checkParam_typeExtra([[], 'extra'], 'array');
//''
function checkParam_typeExtra_06015(){
  var TYPE_CZECH_current_test_number = '06015';
  var check_param = [[]];
  var check_shape = ['array']; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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

//type_czech.checkParam_typeExtra([[2],[3]], '[]');
//''
//type_czech.checkParam_typeExtra([[2],[3], 'extra'], '[]');
//''
function checkParam_typeExtra_06016(){
  var TYPE_CZECH_current_test_number = '06016';
  var check_param = [[2], [3]];
  var check_shape = [[]]; 
  var expect_error = ``;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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


//type_czech.checkParam_typeExtra([[2],[3]], 'array');
//''
//type_czech.checkParam_typeExtra([[2],[3], 'extra'], 'array');
//''
function checkParam_typeExtra_06017(){
  var TYPE_CZECH_current_test_number = '06017';
  var check_param = [[2], [3]];
  var check_shape = ['array']; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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

//type_czech.checkParam_typeExtra([[1,2],[3,4]], 'array');
//''
//type_czech.checkParam_typeExtra([[1,2],[3,4], 'extra'], 'array');
//''
function checkParam_typeExtra_06018(){
  var TYPE_CZECH_current_test_number = '06018';
  var check_param = [[1,2], [3,4]];
  var check_shape = ['array']; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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

//type_czech.checkParam_typeExtra([[1,2],[3,4]], '[]');
//''
//type_czech.checkParam_typeExtra([[1,2],[3,4], 'extra'], '[]');
//''
function checkParam_typeExtra_06019(){
  var TYPE_CZECH_current_test_number = '06019';
  var check_param = [[1,2], [3,4]];
  var check_shape = [[]]; 
  var expect_error = ``;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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


//type_czech.checkParam_typeExtra([], 'object');
//''
function checkParam_typeExtra_06020(){
  var TYPE_CZECH_current_test_number = '06020';
  var check_param = [];
  var check_shape = 'object'; 
  var expect_error = `EE@320 - checkParam_typeExtra([], 'object') has the first param wrong. The value [], which is an array, is not a object`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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

function checkParam_typeExtra_06021(){
  var TYPE_CZECH_current_test_number = '06021';
  var check_param =123;
  var check_shape = 'number'; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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




//type_czech.checkParam_typeExtra(456, 'string');
//''
function checkParam_typeExtra_06022(){
  var TYPE_CZECH_current_test_number = '06022';
  var check_param = 456;
  var check_shape = 'string'; 
  var expect_error = `EE@320 - checkParam_typeExtra(456, 'string') has the first param wrong. TE@226 - The value '456', which is a 'number', is not a 'string'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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


function checkParam_typeExtra_06023(){
  var TYPE_CZECH_current_test_number = '06023';
  var check_param =null;
  var check_shape = 'null'; 
  var expect_error =  `EE@320 - checkParam_typeExtra(null, 'null') has the first param wrong. TE@203 - The type 'null' is not a valid checkParam_type(), checkParam_typeEither(), or checkParam_typeExtra() 2nd parameter type`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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






function checkParam_typeExtra_06024(){
  var TYPE_CZECH_current_test_number = '06024';
  var check_param =undefined;
  var check_shape = 'undefined'; 
  var expect_error = `EE@320 - checkParam_typeExtra(undefined, 'undefined') has the first param wrong. TE@203 - The type 'undefined' is not a valid checkParam_type(), checkParam_typeEither(), or checkParam_typeExtra() 2nd parameter type`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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







function checkParam_typeExtra_06025(){
  var TYPE_CZECH_current_test_number = '06025';
  var check_param = [ ["Harley-Davidson", "Electra-Glide"],
  {"cyl":2,"stroke":4}, 
   [2000, "red"],
  {"percent":75,"max":500} ];
  var check_shape = [  ["string"],  {cyl:"number", stroke:"number"},  ["number", "string"],  {percent:"number", max:"number"} ]; 
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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








function checkParam_typeExtra_06026(){
  var TYPE_CZECH_current_test_number = '06026';
  var check_param = [ ["Harley-Davidson", "Electra-Glide"],
  {"cyl":2,"stroke":4}, 
    [2000, "red"],
   {"percent":75,"max":500}, 'bike'];
  var check_shape = [  ["string"],  {cyl:"number", stroke:"number"},  ["number", "string"],  {percent:"number", max:"number"}, "string" ];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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




















function checkParam_typeExtra_06027(){
  var TYPE_CZECH_current_test_number = '06027';
  var check_param = [ {x: 5},  {y: 1} ];
  var check_shape = [ {x:"number"}, {y:"number"} ];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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






function checkParam_typeExtra_06028(){
  var TYPE_CZECH_current_test_number = '06028';
  var check_param = [{"manu":"Harley-Davidson","model":"Electra-Glide"},{"cyl":2,"stroke":4},{"year":2000,"color":"red"},{"percent":75,"max":500},"bike"];
  var check_shape = [  {manu:"string", model:"string"},  {cyl:"number", stroke:"number"},  {year:"number", color:"string"},  {percent:"number", max:"number"}, "string"];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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














function checkParam_typeExtra_06029(){
  var TYPE_CZECH_current_test_number = '06029';
  var check_param = ['abc', 456];
  var check_shape = ["string", "date"];
  var expect_error =  `TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'number' with a value of 456`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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













function checkParam_typeExtra_06030_undef_ok(){
  var TYPE_CZECH_current_test_number = '06030';
  var check_param = null;
  var check_shape = 'string';
  var expect_error = `EE@320 - checkParam_typeExtra(null, 'string') has the first param wrong. TE@226 - The value 'null', which is a 'null', is not a 'string'`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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





function checkParam_typeExtra_06031_undef_ok(){
  var TYPE_CZECH_current_test_number = '06031';
  var check_param = undefined;
  var check_shape = 'undefined';
  var expect_error = `EE@320 - checkParam_typeExtra(undefined, 'undefined') has the first param wrong. TE@203 - The type 'undefined' is not a valid checkParam_type(), checkParam_typeEither(), or checkParam_typeExtra() 2nd parameter type`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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




//type_czech.checkParam_typeExtra([{r:11}], '{r:"number"}');
//''
//type_czech.checkParam_typeExtra([{r:11}, 'extra'], '{r:"number"}');
//''


function checkParam_typeExtra_06032(){
  var TYPE_CZECH_current_test_number = '06032';
  var check_param = [{r:11}];
  var check_shape = [{r:"number"}];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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



//type_czech.checkParam_typeExtra([{r:11}], '{r:"number"}');
//''
//type_czech.checkParam_typeExtra([{r:11,e:"for extra"}], '{r:"number"}');
//''

function checkParam_typeExtra_06033(){
  var TYPE_CZECH_current_test_number = '06033';
  var check_param = [{r: 11, e:'for extra'}];
  var check_shape = [{r:"number"}];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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




/////////////////////////////////////////



//type_czech.checkParam_typeExtra([{r:11}], '{r:"number"}');
//''

function checkParam_typeExtra_06034(){
  var TYPE_CZECH_current_test_number = '06034';
  var check_param = [{r: 11}];
  var check_shape = [{r:"number"}];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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

function checkParam_typeExtra_06035(){
  var TYPE_CZECH_current_test_number = '06035';
  var check_param = [{r: 11}];
  var check_shape = [{r:"number"}];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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

//type_czech.checkParam_typeExtra([{r:11,e:"for extra"}], '{r:"number"}');
//''

function checkParam_typeExtra_06036(){
  var TYPE_CZECH_current_test_number = '06036';
  var check_param = [{r: 11, e:'for extra'}];
  var check_shape = [{r:"number"}];
  var expect_error = '';
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        if (typeof beforeCheck !== 'undefined') before_str = beforeCheck(check_param, check_shape);
        var actual_error= type_czech.checkParam_typeExtra(check_param, check_shape);
        if (typeof beforeCheck !== 'undefined') afterCheck(check_param, check_shape, before_str, TYPE_CZECH_current_test_number);
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
  the_problem = `check-tests/checkParam_typeExtra_06000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;