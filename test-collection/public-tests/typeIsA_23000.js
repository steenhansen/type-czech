/* eslint-disable */


let pass_count = 0;
let fail_count = 0;


_typeIsA_23000();



_typeIsA_23202();
_typeIsA_23303();










function _typeIsA_23000(){
  type_czech_test=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = 23000;

  function test_typeIsA(an_arg, expected_typeIsA) {
    TYPE_CZECH_current_test_number += 1;
    actual_typeIsA = type_czech_test.typeIsA(an_arg, expected_typeIsA)
    if (!actual_typeIsA) {
      console.log('typeIsA error : ', TYPE_CZECH_current_test_number, actual_typeIsA, an_arg, expected_typeIsA);
      fail_count += 1
    }
    pass_count += 1
  }
    
  test_typeIsA([1], 'array')                   // pass 1 A array
  test_typeIsA(234n, 'bigint')                 // pass 2 B bigint
  test_typeIsA(false, 'boolean')               // pass 3 C boolean
  test_typeIsA(new Date('2005-06-07'), 'date') // pass 4 D date
  test_typeIsA(a=>a+8, 'function')             // pass 5 E function
  test_typeIsA(9, 'number')                    // pass 6 F number
  test_typeIsA({b:10}, `object`)               // pass 7 G object
  test_typeIsA(/d/, 'regexp')                  // pass 8 H regex
  test_typeIsA('an-str', 'string')             // pass 9 I string
  test_typeIsA(Symbol('sym'), `symbol`)        // pass 10 J symbol
  test_typeIsA([], 'array')                     // pass 11 K empty array
  test_typeIsA(new Date(''), 'date')            // pass 12 L empty date
  test_typeIsA(NaN, 'number')                   // pass 13 M empty number
  test_typeIsA({}, 'object')                    // pass 14 N empty object
  test_typeIsA(/(?:)/, 'regexp')                // pass 15 O empty regex
  test_typeIsA('', "string")                    // pass 16 P empty string
  test_typeIsA(null, 'null')                    // pass 17 Q empty null
  test_typeIsA(undefined, 'undefined')          // pass 18 R empty undefined
  test_typeIsA([11,'12',13], 'array')           // pass 19 T multi array
  test_typeIsA(14,'number')                     // pass 20 U multi args
  test_typeIsA([[17,"18",19]], 'array')         // pass 21 V multi in single
  test_typeIsA([20], 'array')                   // pass 22 W two singles
  test_typeIsA([22,23,24], 'array')             // pass 23 X two multis
  test_typeIsA({d:{}}, 'object')                // pass 24 Y empty in object
  test_typeIsA([{e:[28,{f:[29]}]}], 'array')    // pass 25 Z empty in object
  test_typeIsA(['',''], 'array')                // pass 26 0 empty - [str str]
  test_typeIsA([[],[]], 'array')                // pass 27 1 empty - [arr arr]
  test_typeIsA([{},{}], 'array')                // pass 28 2 empty - [obj obj]
  test_typeIsA({g:[]}, 'object')                // pass 29 3 empty - {arr arr}
  test_typeIsA({i:''}, 'object')                // pass 30 4 empty - {str str}
  test_typeIsA({k:{}}, 'object')                // pass 31 5 empty - {obj obj}
}




















function _typeIsA_23202() {
  type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = '23002';

  class First { constructor() { } }
  class Last extends First { constructor() { super(); } }
  class Full extends Last { constructor() { super(); } }

  a_first = new First();
  a_last = new Last();
  a_full = new Full();

  if (!type_czech_test.typeIsA(a_first, 'First')) {
    fail_count += 1;
    console.log(`${TYPE_CZECH_current_test_number} type_czech.typeIsA(a_first, 'First')`);
  }
  pass_count += 1;

  if (!type_czech_test.typeIsA(a_last, 'Last')) {
    fail_count += 1;
    console.log(`${TYPE_CZECH_current_test_number} type_czech.typeIsA(a_last, 'Last')`);
  }
  pass_count += 1;

  if (!type_czech_test.typeIsA(a_full, 'Full')) {
    fail_count += 1;
    console.log(`${TYPE_CZECH_current_test_number} type_czech.typeIsA(a_full, 'Full')`);
  }
  pass_count += 1;
}

function _typeIsA_23303() {
  if (typeof document !== 'undefined') {
    type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
    TYPE_CZECH_current_test_number = '23003';
    a_div = document.createElement('div');

    if (!type_czech_test.typeIsA(a_div, 'HTMLDivElement')) {
      fail_count += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.typeIsA(a_div, 'HTMLDivElement')`);
    }
    pass_count += 1;

    if (type_czech_test.typeIsA(a_div, 'htmlDivElement')) {
      fail_count += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.typeIsA(a_div, 'htmlDivElement')`);
    }
    pass_count += 1;

    if (!type_czech_test.typeIsA(window, 'Window')) {
      fail_count += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.typeIsA(window, 'Window')`);
    }
    pass_count += 1;
  } else {
    pass_count += 1;
    pass_count += 1;
    pass_count += 1;
  }
}



if (fail_count>0) {
  the_problem = `public-tests/typeIsA_23000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;



