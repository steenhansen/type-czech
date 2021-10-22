/* eslint-disable */

tested_check_interface = 0;
failed_check_interface = 0;

_check_interface_25001();
_check_interface_25002();
_check_interface_25003();

TEST_total_fails += failed_check_interface;
TEST_total_checks += tested_check_interface;

if (TEST_show_random) {
  console.log('_check_interface failed tests 25000', failed_check_interface)
  console.log('_check_interface passed tests 25000', tested_check_interface)
}

function _check_interface_25001() {
  type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '25001';
  actual_type = type_czech_test.typeFinal(new Date('1999-12-31'));
  if (actual_type !== 'Date') {
    failed_check_interface += 1;
    console.log(`${TYPE_CZECH_current_test_number} type_czech.check_interface(new Date('1999-12-31')`);
  }
  tested_check_interface += 1;
}

function _check_interface_25002() {
  if (typeof document !== 'undefined') {
    type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '25002';

    actual_type = type_czech_test.typeFinal(document.createElement('div'));
    if (actual_type !== 'HTMLDivElement') {
      failed_check_interface += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.check_interface(document.createElement('div'))`);
    }
  }
  tested_check_interface += 1;
}


function _check_interface_25003() {
  if (typeof document !== 'undefined') {
    type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '25003';
    
    class First { constructor() { } }
    class Last extends First { constructor() { super() } }

    actual_type = type_czech_test.typeFinal(new Last());
    if (actual_type !== "Last") {
      failed_check_interface += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.check_interface(document.createElement('div'))`);
    }
  }
  tested_check_interface += 1;
}