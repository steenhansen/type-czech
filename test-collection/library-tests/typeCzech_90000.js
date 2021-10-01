/* eslint-disable */

let tested_typeCzechConstructor = 0;
let failed_typeCzechConstructor = 0;


_typeCzechConstructor_90001();

total_fails += failed_typeCzechConstructor;
total_checks += tested_typeCzechConstructor;
if (show_random) {
  console.log('_typeCzechConstructor failed tests 90000', failed_typeCzechConstructor);
  console.log('_typeCzechConstructor passed tests 90000', tested_typeCzechConstructor);
}

function _typeCzechConstructor_90001() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_typeCzechConstructor ++;
    failed_typeCzechConstructor ++;
    failed_typeCzechConstructor ++;
  }



  TYPE_CZECH_current_test_number = '90001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech_one_param = TypeCzech('LOG-ERRORS');
  if (!type_czech_one_param.is_active) {
    failed_typeCzechConstructor += 1;
    console.log(`${error_id} TypeCzech('LOG-ERRORS')`);
  }
  tested_typeCzechConstructor += 1;

  type_czech_two_param = TypeCzech('LOG-ERRORS', 'CONSOLE-COUNT');
  if (!type_czech_two_param.is_active) {
    failed_typeCzechConstructor += 1;
    console.log(`${error_id} TypeCzech('LOG-ERRORS', 'CONSOLE-COUNT')`);
  }
  tested_typeCzechConstructor += 1;

  type_czech_array_param = TypeCzech(['LOG-ERRORS', 'CONSOLE-COUNT']);
  if (!type_czech_array_param.is_active) {
    failed_typeCzechConstructor += 1;
    console.log(`${error_id} TypeCzech(['LOG-ERRORS', 'CONSOLE-COUNT'])`);
  }
  tested_typeCzechConstructor += 1;

}
