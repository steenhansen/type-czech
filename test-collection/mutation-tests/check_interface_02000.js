/* eslint-disable */

tested_check_interface = 0;
failed_check_interface = 0;


 _check_interface_02001();   // fine
 _check_interface_02002();   // missing function in interface
 _check_interface_02003();   // wrong type in interface


total_fails += failed_check_interface;
total_checks += tested_check_interface;

if (show_random) {
  console.log('_check_interface failed tests 02000', failed_check_interface)
  console.log('_check_interface passed tests 02000', tested_check_interface)
}

function _check_interface_02001() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '02001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    interface_issue = type_czech.check_interface({show: (x) => x}, {no_show:'Function'});                    // TEST TEST
  } else {
    interface_issue = type_czech.check_interface({show: (x) => x}, {show:'Function'});           // REAL TEST
  }


  if (interface_issue) {
    console.log(error_id);
    console.log('  actual=', interface_issue);
    console.log('expected=', '');
  }
  no_console_mess = '';

                      if (interface_issue) {
                        failed_check_interface ++;
                      }
                      tested_check_interface ++;
}

function _check_interface_02002() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '02002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    interface_issue = type_czech.check_interface({dont_match: (x) => x}, {dont_match:'Function'});                    // TEST TEST
  } else {
    interface_issue = type_czech.check_interface({show: (x) => x}, {noShow:'Function'});           // REAL TEST
  }
  expected_array = ["check_interface(arguments, expected_types)",
    "actual type of 'noShow' is 'undefined', with a value of 'undefined', not the expected 'Function' type",
    '{noShow:"Function"}'];

    actual_str = arrayErrorToString(interface_issue);
    expected_str = arrayErrorToString(expected_array);

 // expected_issue = `Object-Object-Properties Mismatches : actual type of 'noShow' is 'undefined', with a value of 'undefined', not the expected 'Function' type`;
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', interface_issue);
    console.log('expected=', expected_array);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_interface ++;
                      }
                      tested_check_interface ++;
}

function _check_interface_02003() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '02003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);



  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    interface_issue = type_czech.check_interface({dont_match: (x) => x}, {dont_match:'Function'});                    // TEST TEST
  } else {
    interface_issue = type_czech.check_interface({show: 17}, {show:'Function'});          // REAL TEST
  }
  expected_array = ["check_interface(arguments, expected_types)",
    "actual type of 'show' is 'Number', with a value of '17', not the expected 'Function' type",
    '{show:"Function"}'];
    actual_str = arrayErrorToString(interface_issue);
    expected_str = arrayErrorToString(expected_array);

  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', interface_issue);
    console.log('expected=', expected_array);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_interface ++;
                      }
                      tested_check_interface ++;

}
