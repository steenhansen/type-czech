/* eslint-disable */

passed_objectPrototypes = 0;
failed_objectPrototypes = 0;


_objectPrototypes_24001(24001);
_objectPrototypes_24002(24002);
_objectPrototypes_24003(24003);


total_fails += failed_objectPrototypes;
console.log('_objectPrototypes failed tests', failed_objectPrototypes)

total_checks += passed_objectPrototypes;
console.log('_objectPrototypes passed tests', passed_objectPrototypes)


function _objectPrototypes_24001(error_number) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  const error_id = errorLabel(error_number);
  actual_prototypes = type_czech.objectPrototypes(new Date('1999-12-31'));
  expected_prototypes = ["Date"]
  actual_str = actual_prototypes.toString();
  expected_str = expected_prototypes.toString();
  if (actual_str !== expected_str) {
    failed_objectPrototypes += 1;
    console.log(`${error_id} type_czech.objectPrototypes(new Date('1999-12-31')`);
  } else {
    passed_objectPrototypes += 1;
  }
}

function _objectPrototypes_24002(error_number) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  const error_id = errorLabel(error_number);

  actual_prototypes = type_czech.objectPrototypes(document.createElement('div'));
  expected_prototypes =[ "HTMLDivElement", "HTMLElement", "Element", "Node", "EventTarget", "Object" ];
  actual_str = actual_prototypes.toString();
  expected_str = expected_prototypes.toString();
  if (actual_str !== expected_str) {
    failed_objectPrototypes += 1;
    console.log(`${error_id} type_czech.objectPrototypes(document.createElement('div'))`);
  } else {
    passed_objectPrototypes += 1;
  }
}


function _objectPrototypes_24003(error_number) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  const error_id = errorLabel(error_number);
  
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
    passed_objectPrototypes += 1;
  }
}