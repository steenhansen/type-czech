/* eslint-disable */

tested_objectInterface = 0;
failed_objectInterface = 0;


_objectInterface_25001();
_objectInterface_25002();
_objectInterface_25003();


total_fails += failed_objectInterface;
console.log('_objectInterface failed tests', failed_objectInterface)

total_checks += tested_objectInterface;
console.log('_objectInterface passed tests', tested_objectInterface)


function _objectInterface_25001() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '25001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  actual_type = type_czech.objectType(new Date('1999-12-31'));
  if (actual_type !== 'Date') {
    failed_objectInterface += 1;
    console.log(`${error_id} type_czech.objectInterface(new Date('1999-12-31')`);
  } else {
    tested_objectInterface += 1;
  }
}

function _objectInterface_25002() {
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '25002';
    error_id = errorLabel(TYPE_CZECH_current_test_number);

    actual_type = type_czech.objectType(document.createElement('div'));
    if (actual_type !== 'HTMLDivElement') {
      failed_objectInterface += 1;
      console.log(`${error_id} type_czech.objectInterface(document.createElement('div'))`);
    } else {
      tested_objectInterface += 1;
    }
  } else {
    tested_objectInterface += 1;
  }
}


function _objectInterface_25003() {
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '25003';
    error_id = errorLabel(TYPE_CZECH_current_test_number);
    
    class First { constructor() { } }
    class Last extends First { constructor() { super() } }

    actual_type = type_czech.objectType(new Last());
    if (actual_type !== "Last") {
      failed_objectInterface += 1;
      console.log(`${error_id} type_czech.objectInterface(document.createElement('div'))`);
    } else {
      tested_objectInterface += 1;
    }
  } else {
    tested_objectInterface += 1;
  }
}