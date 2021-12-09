/* eslint-disable */

let tested_typeCzechConstructor = 0;
let failed_typeCzechConstructor = 0;


_typeCzechConstructor_90001();

TEST_total_fails += failed_typeCzechConstructor;
TEST_total_checks += tested_typeCzechConstructor;
if (TEST_show_random) {
  console.log('_typeCzechConstructor failed tests 90000', failed_typeCzechConstructor);
  console.log('_typeCzechConstructor passed tests 90000', tested_typeCzechConstructor);
}

function _typeCzechConstructor_90001() {
  TYPE_CZECH_current_test_number = '90001';

  type_czech_one_param = TypeCzech('LOG-ERRORS', 'HIDE-INIT-MESSAGE');
  if (!type_czech_one_param.isActive()) {
    failed_typeCzechConstructor += 1;
    console.log(`${TYPE_CZECH_current_test_number} TypeCzech('LOG-ERRORS', 'HIDE-INIT-MESSAGE')`);
  }
  tested_typeCzechConstructor += 1;

  type_czech_two_param = TypeCzech('LOG-ERRORS', 'CONSOLE-COUNT', 'HIDE-INIT-MESSAGE');
  if (!type_czech_two_param.isActive()) {
    failed_typeCzechConstructor += 1;
    console.log(`${TYPE_CZECH_current_test_number} TypeCzech('LOG-ERRORS', 'CONSOLE-COUNT', 'HIDE-INIT-MESSAGE')`);
  }
  tested_typeCzechConstructor += 1;

  type_czech_array_param = TypeCzech(['LOG-ERRORS', 'CONSOLE-COUNT', 'HIDE-INIT-MESSAGE']);
  if (!type_czech_array_param.isActive()) {
    failed_typeCzechConstructor += 1;
    console.log(`${TYPE_CZECH_current_test_number} TypeCzech(['LOG-ERRORS', 'CONSOLE-COUNT', 'HIDE-INIT-MESSAGE'])`);
  }
  tested_typeCzechConstructor += 1;

}
