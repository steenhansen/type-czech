/* eslint-disable */

tested_typeProtos = 0;
failed_typeProtos = 0;


_typeProtos_24001();
_typeProtos_24002();
_typeProtos_24003();


total_fails += failed_typeProtos;
total_checks += tested_typeProtos;

if (show_random) {
  console.log('_typeProtos failed tests 24000', failed_typeProtos)
  console.log('_typeProtos passed tests 24000', tested_typeProtos)
}

function _typeProtos_24001() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_typeProtos ++;
  }
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '24001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  [actual_prototypes, the_instances] = type_czech.typeProtos(new Date('1999-12-31'));
  expected_prototypes = ["Date"]
  actual_str = actual_prototypes.toString();
  expected_str = expected_prototypes.toString();
  if (actual_str !== expected_str) {
    failed_typeProtos += 1;
    console.log(`${error_id} type_czech.typeProtos(new Date('1999-12-31')`);
  }
  tested_typeProtos += 1;
}

function _typeProtos_24002() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_typeProtos ++;
  }
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '24002';
    error_id = errorLabel(TYPE_CZECH_current_test_number);

    [actual_prototypes, the_instances] = type_czech.typeProtos(document.createElement('div'));
    expected_prototypes =[ "HTMLDivElement", "HTMLElement", "Element", "Node", "EventTarget", "Object" ];
    actual_str = actual_prototypes.toString();
    expected_str = expected_prototypes.toString();
    if (actual_str !== expected_str) {
      failed_typeProtos += 1;
      console.log(`${error_id} type_czech.typeProtos(document.createElement('div'))`);
    }
  }
  tested_typeProtos += 1;
}


function _typeProtos_24003() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_typeProtos ++;
  }
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '24003';
    error_id = errorLabel(TYPE_CZECH_current_test_number);
    
    class First { constructor() { } }
    class Last extends First { constructor() { super() } }

    [actual_prototypes, the_instances] = type_czech.typeProtos(new Last());
    expected_prototypes =[ "Last", "First", "Object" ];
    actual_str = actual_prototypes.toString();
    expected_str = expected_prototypes.toString();
    if (actual_str !== expected_str) {
      failed_typeProtos += 1;
      console.log(`${error_id} type_czech.typeProtos(document.createElement('div'))`);
    } 
  }
  tested_typeProtos += 1;
}