/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */

let tested_objectIsA = 0;
let failed_objectIsA = 0;

_objectIsA_23001();
_objectIsA_23002();
_objectIsA_23003();

total_fails += failed_objectIsA;
console.log('_objectIsA failed tests', failed_objectIsA);

total_checks += tested_objectIsA;
console.log('_objectIsA passed tests', tested_objectIsA);

function _objectIsA_23001() {
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '23001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  if (type_czech.objectIsA([], 'Array')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA([], 'Array')`);
  }

  if (!type_czech.objectIsA([], 'array')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA([], 'array')`);
  }

  if (type_czech.objectIsA(123n, 'BigInt')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(123n, 'BigInt')`);
  }

  if (!type_czech.objectIsA(123n, 'bigint')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(123n, 'bigint')`);
  }

  if (type_czech.objectIsA(true, 'Boolean')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(true, 'Boolean')`);
  }

  if (!type_czech.objectIsA(true, 'boolean')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(true, 'boolean')`);
  }

  if (type_czech.objectIsA(new Date(), 'Date')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(new Date(), 'Date')`);
  }

  if (!type_czech.objectIsA(new Date(), 'date')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(new Date(), 'date')`);
  }

  if (type_czech.objectIsA((x) => x, 'Function')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA((x) => x, 'Function')`);
  }

  if (!type_czech.objectIsA((x) => x, 'function')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA((x) => x, 'function')`);
  }

  if (type_czech.objectIsA(1, 'Number')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(1, 'Number')`);
  }

  if (!type_czech.objectIsA(1, 'number')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(1, 'number')`);
  }

  if (type_czech.objectIsA({}, 'Object')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA({}, 'Object')`);
  }

  if (!type_czech.objectIsA(1, 'object')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(1, 'object')`);
  }

  if (type_czech.objectIsA(/z/, 'RegExp')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(/z/, 'RegExp')`);
  }

  if (!type_czech.objectIsA(/z/, 'regexp')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA(/z/, 'regexp')`);
  }

  if (type_czech.objectIsA('', 'String')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA('', 'String')`);
  }

  if (!type_czech.objectIsA('', 'string')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} !type_czech.objectIsA('', 'string')`);
  }

  if (type_czech.objectIsA(Symbol('z'), 'Symbol')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(Symbol('z'), 'Symbol')`);
  }

  if (!type_czech.objectIsA(Symbol('z'), 'symbol')) {
    tested_objectIsA += 1;
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
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(a_first, 'First')`);
  }

  if (type_czech.objectIsA(a_last, 'Last')) {
    tested_objectIsA += 1;
  } else {
    failed_objectIsA += 1;
    console.log(`${error_id} type_czech.objectIsA(a_last, 'Last')`);
  }

  if (type_czech.objectIsA(a_full, 'Full')) {
    tested_objectIsA += 1;
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
      tested_objectIsA += 1;
    } else {
      failed_objectIsA += 1;
      console.log(`${error_id} type_czech.objectIsA(a_div, 'HTMLDivElement')`);
    }

    if (!type_czech.objectIsA(a_div, 'htmlDivElement')) {
      tested_objectIsA += 1;
    } else {
      failed_objectIsA += 1;
      console.log(`${error_id} type_czech.objectIsA(a_div, 'HTMLDivElement')`);
    }

    if (type_czech.objectIsA(window, 'Window')) {
      tested_objectIsA += 1;
    } else {
      failed_objectIsA += 1;
      console.log(`${error_id} type_czech.objectIsA(window, 'Window')`);
    }
  } else {
    tested_objectIsA += 1;
    tested_objectIsA += 1;
    tested_objectIsA += 1;
  }
}
