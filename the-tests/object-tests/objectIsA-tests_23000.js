/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */

let passed_objectIsA = 0;
let failed_objectIsA = 0;

_objectIsA_23001();
_objectIsA_23002();
_objectIsA_23003();

total_fails += failed_objectIsA;
console.log('_objectIsA failed tests', failed_objectIsA);

total_checks += passed_objectIsA;
console.log('_objectIsA passed tests', passed_objectIsA);

function _objectIsA_23001() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '23001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  if (type_czech.objectIsA([], 'Array')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA([], 'Array')`);
  }

  if (!type_czech.objectIsA([], 'array')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA([], 'array')`);
  }

  if (type_czech.objectIsA(123n, 'BigInt')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(123n, 'BigInt')`);
  }

  if (!type_czech.objectIsA(123n, 'bigint')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(123n, 'bigint')`);
  }

  if (type_czech.objectIsA(true, 'Boolean')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(true, 'Boolean')`);
  }

  if (!type_czech.objectIsA(true, 'boolean')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(true, 'boolean')`);
  }

  if (type_czech.objectIsA(new Date(), 'Date')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(new Date(), 'Date')`);
  }

  if (!type_czech.objectIsA(new Date(), 'date')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(new Date(), 'date')`);
  }

  if (type_czech.objectIsA((x) => x, 'Function')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA((x) => x, 'Function')`);
  }

  if (!type_czech.objectIsA((x) => x, 'function')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA((x) => x, 'function')`);
  }

  if (type_czech.objectIsA(1, 'Number')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(1, 'Number')`);
  }

  if (!type_czech.objectIsA(1, 'number')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(1, 'number')`);
  }

  if (type_czech.objectIsA({}, 'Object')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA({}, 'Object')`);
  }

  if (!type_czech.objectIsA(1, 'object')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(1, 'object')`);
  }

  if (type_czech.objectIsA(/z/, 'RegExp')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(/z/, 'RegExp')`);
  }

  if (!type_czech.objectIsA(/z/, 'regexp')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(/z/, 'regexp')`);
  }

  if (type_czech.objectIsA('', 'String')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA('', 'String')`);
  }

  if (!type_czech.objectIsA('', 'string')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA('', 'string')`);
  }

  if (type_czech.objectIsA(Symbol('z'), 'Symbol')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(Symbol('z'), 'Symbol')`);
  }

  if (!type_czech.objectIsA(Symbol('z'), 'symbol')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(Symbol('z'), 'symbol')`);
  }
}

function _objectIsA_23002() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '23002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  class First { constructor() { } }
  class Last extends First { constructor() { super(); } }
  class Full extends Last { constructor() { super(); } }

  a_first = new First();
  a_last = new Last();
  a_full = new Full();

  if (type_czech.objectIsA(a_first, 'First')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(a_first, 'First')`);
  }

  if (type_czech.objectIsA(a_last, 'Last')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(a_last, 'Last')`);
  }

  if (type_czech.objectIsA(a_full, 'Full')) {
    passed_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(a_full, 'Full')`);
  }
}

function _objectIsA_23003() {
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '23003';
    error_id = errorLabel(TYPE_CZECH_current_test_number);
    a_div = document.createElement('div');

    if (type_czech.objectIsA(a_div, 'HTMLDivElement')) {
      passed_objectIsA += 1;
    } else {
      failed_objectIsA += 1;
      console.log(`${error_id} type_czech.objectIsA(a_div, 'HTMLDivElement')`);
    }

    if (!type_czech.objectIsA(a_div, 'htmlDivElement')) {
      passed_objectIsA += 1;
    } else {
      failed_objectIsA += 1;
      console.log(`${error_id} type_czech.objectIsA(a_div, 'HTMLDivElement')`);
    }

    if (type_czech.objectIsA(window, 'Window')) {
      passed_objectIsA += 1;
    } else {
      failed_objectIsA += 1;
      console.log(`${error_id} type_czech.objectIsA(window, 'Window')`);
    }
  }
}
