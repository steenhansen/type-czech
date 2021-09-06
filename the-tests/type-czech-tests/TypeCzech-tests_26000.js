/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */


    //   ('LOG-ERRORS')..................
    //   ('LOG-ERRORS', 'CONSOLE-COUNT').......
    //   (['LOG-ERRORS', 'CONSOLE-COUNT'])
    // type_czech = TypeCzech(...TYPE_CZECH_COMMANDS);



let tested_typeCzechConstructor = 0;
let failed_typeCzechConstructor = 0;


_typeCzechConstructor_26001();

total_fails += failed_typeCzechConstructor;
console.log('_typeCzechConstructor failed tests', failed_typeCzechConstructor);

total_checks += tested_typeCzechConstructor;
console.log('_typeCzechConstructor passed tests', tested_typeCzechConstructor);

function _typeCzechConstructor_26001() {
  TYPE_CZECH_current_test_number = '26001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech_one_param = TypeCzech('LOG-ERRORS');
  if (type_czech_one_param.is_active) {
    tested_typeCzechConstructor += 1;
  } else {
    failed_typeCzechConstructor += 1;
    console.log(`${error_id} TypeCzech('LOG-ERRORS')`);
  }

  type_czech_two_param = TypeCzech('LOG-ERRORS', 'CONSOLE-COUNT');
  if (type_czech_two_param.is_active) {
    tested_typeCzechConstructor += 1;
  } else {
    failed_typeCzechConstructor += 1;
    console.log(`${error_id} TypeCzech('LOG-ERRORS', 'CONSOLE-COUNT')`);
  }

  type_czech_array_param = TypeCzech(['LOG-ERRORS', 'CONSOLE-COUNT']);
  if (type_czech_array_param.is_active) {
    tested_typeCzechConstructor += 1;
  } else {
    failed_typeCzechConstructor += 1;
    console.log(`${error_id} TypeCzech(['LOG-ERRORS', 'CONSOLE-COUNT'])`);
  }

}
