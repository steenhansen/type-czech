/* eslint-disable */


let tested_typeIsA = 0;
let failed_typeIsA = 0;

_typeIsA_23001();
_typeIsA_23002();
_typeIsA_23003();

total_fails += failed_typeIsA;
total_checks += tested_typeIsA;
if (show_random) {
  console.log('_typeIsA failed tests 23000', failed_typeIsA);
  console.log('_typeIsA passed tests 23000', tested_typeIsA);
}

function _typeIsA_23001() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_typeIsA +=20;
  }
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '23001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  if (!type_czech.typeIsA([], 'Array')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA([], 'Array')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA([], 'array')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA([], 'array')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA(123n, 'BigInt')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(123n, 'BigInt')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA(123n, 'bigint')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA(123n, 'bigint')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA(true, 'Boolean')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(true, 'Boolean')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA(true, 'boolean')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA(true, 'boolean')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA(new Date(), 'Date')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(new Date(), 'Date')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA(new Date(), 'date')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA(new Date(), 'date')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA((x) => x, 'Function')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA((x) => x, 'Function')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA((x) => x, 'function')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA((x) => x, 'function')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA(1, 'Number')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(1, 'Number')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA(1, 'number')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA(1, 'number')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA({}, 'Object')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA({}, 'Object')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA(1, 'object')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA(1, 'object')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA(/z/, 'RegExp')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(/z/, 'RegExp')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA(/z/, 'regexp')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA(/z/, 'regexp')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA('', 'String')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA('', 'String')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA('', 'string')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA('', 'string')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA(Symbol('z'), 'Symbol')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(Symbol('z'), 'Symbol')`);
  }
  tested_typeIsA += 1;

  if (type_czech.typeIsA(Symbol('z'), 'symbol')) {
    failed_typeIsA += 1;
    console.log(`${error_id} !type_czech.typeIsA(Symbol('z'), 'symbol')`);
  }
  tested_typeIsA += 1;
}

function _typeIsA_23002() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_typeIsA +=3;
  }
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = '23002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  class First { constructor() { } }
  class Last extends First { constructor() { super(); } }
  class Full extends Last { constructor() { super(); } }

  a_first = new First();
  a_last = new Last();
  a_full = new Full();

  if (!type_czech.typeIsA(a_first, 'First')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(a_first, 'First')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA(a_last, 'Last')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(a_last, 'Last')`);
  }
  tested_typeIsA += 1;

  if (!type_czech.typeIsA(a_full, 'Full')) {
    failed_typeIsA += 1;
    console.log(`${error_id} type_czech.typeIsA(a_full, 'Full')`);
  }
  tested_typeIsA += 1;
}

function _typeIsA_23003() {
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_typeIsA +=3;
  }
  if (typeof document !== 'undefined') {
    type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
    TYPE_CZECH_current_test_number = '23003';
    error_id = errorLabel(TYPE_CZECH_current_test_number);
    a_div = document.createElement('div');

    if (!type_czech.typeIsA(a_div, 'HTMLDivElement')) {
      failed_typeIsA += 1;
      console.log(`${error_id} type_czech.typeIsA(a_div, 'HTMLDivElement')`);
    }
    tested_typeIsA += 1;

    if (type_czech.typeIsA(a_div, 'htmlDivElement')) {
      failed_typeIsA += 1;
      console.log(`${error_id} type_czech.typeIsA(a_div, 'htmlDivElement')`);
    }
    tested_typeIsA += 1;

    if (!type_czech.typeIsA(window, 'Window')) {
      failed_typeIsA += 1;
      console.log(`${error_id} type_czech.typeIsA(window, 'Window')`);
    }
    tested_typeIsA += 1;
  } else {
    tested_typeIsA += 1;
    tested_typeIsA += 1;
    tested_typeIsA += 1;
  }
}
