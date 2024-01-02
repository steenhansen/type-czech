/* eslint-disable */


pass_count = 0;
fail_count = 0;


_ParametersCheck_13000();

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


///////////////////////////////////////////////////////////////////////

function _ParametersCheck_13000(){
  var TYPE_CZECH_current_test_number = '13001';    
  
  function your_function(){};
  get_out_of_scope_err = _ => {
    function type_czech_function(){}
    try{
      var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
      var your_function = type_czech_test.linkUp(your_function, type_czech_function);
    }catch(out_of_scope_exception){ 
      return out_of_scope_exception;
    }
  }
  expect_error ="EX@105 - 1st param to linkUp(), target_proxy is not a function, but is instead undefined";
        var actual_error;
        try {
          actual_error=get_out_of_scope_err();
        } catch (e) { }
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}





if (fail_count>0) {
  the_problem = `private-tests/_ParametersCheck_13000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

  printTestName("_ParametersCheck_13000") 
TEST_total_checks += pass_count;
