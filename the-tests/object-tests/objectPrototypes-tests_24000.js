/* eslint-disable */

tested_objectPrototypes = 0;
failed_objectPrototypes = 0;


_objectPrototypes_24001();
_objectPrototypes_24002();
_objectPrototypes_24003();


total_fails += failed_objectPrototypes;
console.log('_objectPrototypes failed tests', failed_objectPrototypes)

total_checks += tested_objectPrototypes;
console.log('_objectPrototypes passed tests', tested_objectPrototypes)


function _objectPrototypes_24001() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '24001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  actual_prototypes = type_czech.objectPrototypes(new Date('1999-12-31'));
  expected_prototypes = ["Date"]
  actual_str = actual_prototypes.toString();
  expected_str = expected_prototypes.toString();
  if (actual_str !== expected_str) {
    failed_objectPrototypes += 1;
    console.log(`${error_id} type_czech.objectPrototypes(new Date('1999-12-31')`);
  } else {
    tested_objectPrototypes += 1;
  }
}

function _objectPrototypes_24002() {
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '24002';
    error_id = errorLabel(TYPE_CZECH_current_test_number);

    actual_prototypes = type_czech.objectPrototypes(document.createElement('div'));
    expected_prototypes =[ "HTMLDivElement", "HTMLElement", "Element", "Node", "EventTarget", "Object" ];
    actual_str = actual_prototypes.toString();
    expected_str = expected_prototypes.toString();
    if (actual_str !== expected_str) {
      failed_objectPrototypes += 1;
      console.log(`${error_id} type_czech.objectPrototypes(document.createElement('div'))`);
    } else {
      tested_objectPrototypes += 1;
    }
  } else {
    tested_objectPrototypes += 1;
  }
}


function _objectPrototypes_24003() {
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '24003';
    error_id = errorLabel(TYPE_CZECH_current_test_number);
    
    class First { constructor() { } }
    class Last extends First { constructor() { super() } }

    actual_prototypes = type_czech.objectPrototypes(new Last());
    expected_prototypes =[ "Last", "First", "Object" ];
    actual_str = actual_prototypes.toString();
    expected_str = expected_prototypes.toString();
    if (actual_str !== expected_str) {
      failed_objectPrototypes += 1;
      console.log(`${error_id} type_czech.objectPrototypes(document.createElement('div'))`);
    } else {
      tested_objectPrototypes += 1;
    } 
  } else {
    tested_objectPrototypes += 1;
  }
}