/* eslint-disable */

passed_objectInterface = 0;
failed_objectInterface = 0;


 _objectInterface_02001();   // fine
 _objectInterface_02002();   // missing function in interface
 _objectInterface_02003();   // wrong type in interface


total_fails += failed_objectInterface;
console.log('_objectInterface failed tests', failed_objectInterface)

total_checks += passed_objectInterface;
console.log('_objectInterface passed tests', passed_objectInterface)


function _objectInterface_02001() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '02001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  interface_issue = type_czech.objectInterface({show: (x) => x}, {show:'Function'});
  if (interface_issue) {
    failed_objectInterface += 1;
    console.log(`${error_id} type_czech.objectInterface({show: (x) => x}, {show:'Function'})`);
  } else {
    passed_objectInterface += 1;
  }
}

function _objectInterface_02002() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '02002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  interface_issue = type_czech.objectInterface({show: (x) => x}, {noShow:'Function'});
  expected_issue = `Interface mismatches : actual type of 'noShow' is 'undefined', with a value of 'undefined', not the expected 'Function' type`;
  if (interface_issue !== expected_issue) {
    failed_objectInterface += 1;
    console.log(`${error_id} type_czech.objectInterface({show: (x) => x}, {noShow:'Function'})`);
  } else {
    passed_objectInterface += 1;
  }
}

function _objectInterface_02003() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '02003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  interface_issue = type_czech.objectInterface({show: 17}, {show:'Function'});
  expected_issue = `Interface mismatches : actual type of 'show' is 'Number', with a value of '17', not the expected 'Function' type`;
  if (interface_issue !== expected_issue) {
    failed_objectInterface += 1;
    console.log(`${error_id} type_czech.objectInterface({show: (x) => x}, {noShow:'Function'})`);
  } else {
    passed_objectInterface += 1;
  }
}
