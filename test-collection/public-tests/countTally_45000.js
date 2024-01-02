
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

function A_PRE_check_yourFunc() { return 'found-an-error'; }
A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
function A_yourFunc() { }

function B_PRE_check_yourFunc() { return ''; }
B_yourFunc = type_czech.linkUp(B_yourFunc, B_PRE_check_yourFunc) 
function B_yourFunc() { }



type_czech.enableTests();

if (type_czech.countTally() !== 0) {
  fail_count +=1;
  throw 'A._countTally()_1';
}
pass_count +=1;
printTestName("countTally_45000_1") 
 
A_yourFunc();
B_yourFunc();

if (type_czech.countTally() !== 2){
  fail_count +=1;
  throw 'A._countTally()_2';
}
pass_count +=1;
printTestName("countTally_45000_2") 

if (fail_count>0) {
  the_problem = `public-tests/countTally_45000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;
