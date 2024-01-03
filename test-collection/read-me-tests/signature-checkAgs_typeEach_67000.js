
/* eslint-disable */

pass_count = 0;
fail_count = 0;

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

function showFail(which_type, e='') {
  console.log('Failed test in signature-checkAgs_typeEach_67000.js : ', which_type, e);
  fail_count +=1;
}

function test_checkArgs_typeEach(...the_args){

  the_signature = the_args.pop()

  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');

  function PRE_check_checkArgs_typeEach() {
    printTestName("signature-checkAgs_typeEach_67000_" + arguments)  
    return type_czech.checkArgs_typeEach(arguments, the_signature)
  }

  function signatureTest(a_value){ }

  signatureTest = type_czech.linkUp(signatureTest, PRE_check_checkArgs_typeEach)
  pass_count ++;
  signatureTest(...the_args)
}








try { test_checkArgs_typeEach(1,2,3,4,5,    "number") // pass
} catch (e) { showFail('A1', e); }
      try {  test_checkArgs_typeEach(1,'two',3,4,5,    "number") // fail
      showFail('A2'); } catch (e) {}
      

      

try { test_checkArgs_typeEach([1],[1,2],[1,2,3],[1,2,3,4],    "numbers") // pass
} catch (e) { showFail('B1', e); }
      try {  test_checkArgs_typeEach([1],[1,2],[1,'two',3],[1,2,3,4],    "numbers") // fail
      showFail('B2'); } catch (e) {}
      


      try { test_checkArgs_typeEach({a:1},{a:2},{a:3},{a:4},    {a:'number'}) // pass
    } catch (e) { showFail('B1', e); }
          try {  test_checkArgs_typeEach({a:1},{a:'two'},{a:3},{a:4},    {a:'number'}) // fail
          showFail('B2'); } catch (e) {}
          
    
    

if (fail_count>0) {
  the_problem = `read-me-tests/signature-checkAgs_typeEach_67000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

