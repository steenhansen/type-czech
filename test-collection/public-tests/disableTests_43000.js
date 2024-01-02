
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

type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function A_PRE_check_yourFunc() { }
A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
function A_yourFunc() { }

type_czech.enableTests();

if (type_czech.countTally() !== 0) {
  fail_count +=1;
  throw 'A._disableTests()_1'
}
pass_count += 1;
    printTestName("disableTests_43000_1")  



A_yourFunc();

if (type_czech.countTally() !== 1) {
  fail_count +=1;
  throw 'A._disableTests()_2'
}
pass_count +=1;
    printTestName("disableTests_43000_2")  


type_czech.disableTests();

A_yourFunc();

if (type_czech.countTally() !== 1){
  fail_count +=1;
 throw 'A._disableTests()_3'
}
pass_count +=1;
    printTestName("disableTests_43000_3")  

  
if (fail_count>0) {
  the_problem = `public-tests/disableTests_43000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;
