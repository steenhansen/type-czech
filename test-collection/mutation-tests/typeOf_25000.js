/* eslint-disable */

tested_check_interface = 0;
failed_check_interface = 0;

_check_interface_25001();
_check_interface_25002();
_check_interface_25003();

total_fails += failed_check_interface;
total_checks += tested_check_interface;

if (show_random) {
  console.log('_check_interface failed tests 25000', failed_check_interface)
  console.log('_check_interface passed tests 25000', tested_check_interface)
}

function _check_interface_25001() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_check_interface ++;
  }
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '25001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  actual_type = type_czech.typeOf(new Date('1999-12-31'));
  if (actual_type !== 'Date') {
    failed_check_interface += 1;
    console.log(`${error_id} type_czech.check_interface(new Date('1999-12-31')`);
  }
  tested_check_interface += 1;
}

function _check_interface_25002() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_check_interface ++;
  }
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '25002';
    error_id = errorLabel(TYPE_CZECH_current_test_number);

    actual_type = type_czech.typeOf(document.createElement('div'));
    if (actual_type !== 'HTMLDivElement') {
      failed_check_interface += 1;
      console.log(`${error_id} type_czech.check_interface(document.createElement('div'))`);
    }
  }
  tested_check_interface += 1;
}


function _check_interface_25003() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_check_interface ++;
  }
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '25003';
    error_id = errorLabel(TYPE_CZECH_current_test_number);
    
    class First { constructor() { } }
    class Last extends First { constructor() { super() } }

    actual_type = type_czech.typeOf(new Last());
    if (actual_type !== "Last") {
      failed_check_interface += 1;
      console.log(`${error_id} type_czech.check_interface(document.createElement('div'))`);
    }
  }
  tested_check_interface += 1;
}