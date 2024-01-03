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

_typeCzechConstructor_90001();

TEST_total_fails += fail_count;
TEST_total_checks += pass_count;
if (TEST_show_random) {
  console.log('_typeCzechConstructor failed tests 90000', fail_count);
  console.log('_typeCzechConstructor passed tests 90000', pass_count);
}

function _typeCzechConstructor_90001() {
  TYPE_CZECH_current_test_number = '90001';

  type_czech_one_param = TypeCzech('LOG-ERRORS', 'HIDE-INIT-MESSAGE');
  if (!type_czech_one_param.isActive()) {
    fail_count += 1;
    console.log(`${TYPE_CZECH_current_test_number} TypeCzech('LOG-ERRORS', 'HIDE-INIT-MESSAGE')`);
  }
  pass_count += 1;

  type_czech_two_param = TypeCzech('LOG-ERRORS', 'CONSOLE-COUNT', 'HIDE-INIT-MESSAGE');
  if (!type_czech_two_param.isActive()) {
    fail_count += 1;
    console.log(`${TYPE_CZECH_current_test_number} TypeCzech('LOG-ERRORS', 'CONSOLE-COUNT', 'HIDE-INIT-MESSAGE')`);
  }
  pass_count += 1;

  type_czech_array_param = TypeCzech(['LOG-ERRORS', 'CONSOLE-COUNT', 'HIDE-INIT-MESSAGE']);
  if (!type_czech_array_param.isActive()) {
    fail_count += 1;
    console.log(`${TYPE_CZECH_current_test_number} TypeCzech(['LOG-ERRORS', 'CONSOLE-COUNT', 'HIDE-INIT-MESSAGE'])`);
  }
  pass_count += 1;
printTestName("typeCzech_9000") 
}


if (fail_count>0) {
  the_problem = `public-tests/typeCzech_9000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;

