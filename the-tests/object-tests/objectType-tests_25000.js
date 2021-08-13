


/* eslint-disable */

passed_objectInterface = 0;
failed_objectInterface = 0;


_objectInterface_25001(25001);
_objectInterface_25002(25002);
_objectInterface_25003(25003);


total_fails += failed_objectInterface;
console.log('_objectInterface failed tests', failed_objectInterface)

total_checks += passed_objectInterface;
console.log('_objectInterface passed tests', passed_objectInterface)


function _objectInterface_25001(error_number) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  const error_id = errorLabel(error_number);
  actual_type = type_czech.objectType(new Date('1999-12-31'));
  if (actual_type !== 'Date') {
    failed_objectInterface += 1;
    console.log(`${error_id} type_czech.objectInterface(new Date('1999-12-31')`);
  } else {
    passed_objectInterface += 1;
  }
}

function _objectInterface_25002(error_number) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  const error_id = errorLabel(error_number);

  actual_type = type_czech.objectType(document.createElement('div'));
  if (actual_type !== 'HTMLDivElement') {
    failed_objectInterface += 1;
    console.log(`${error_id} type_czech.objectInterface(document.createElement('div'))`);
  } else {
    passed_objectInterface += 1;
  }
}


function _objectInterface_25003(error_number) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  const error_id = errorLabel(error_number);
  
  class First { constructor() { } }
  class Last extends First { constructor() { super() } }

  actual_type = type_czech.objectType(new Last());
  if (actual_type !== "Last") {
    failed_objectInterface += 1;
    console.log(`${error_id} type_czech.objectInterface(document.createElement('div'))`);
  } else {
    passed_objectInterface += 1;
  }
}