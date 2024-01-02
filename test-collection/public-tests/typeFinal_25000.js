/* eslint-disable */

pass_count = 0;
fail_count = 0;

_typeFinal_25000()
_typeFinal_25001();
_typeFinal_25002();
_typeFinal_25003();




function printTestName(an_str) {
  if (typeof window !== "undefined") {
    if (typeof window.browserList === 'function') {
      if (window.browserList()) {
        console.log(pass_count, an_str);
      }
    }
  } else {
    if (typeof global.nodejsList === 'function') {
      if (global.nodejsList()) {
        console.log(pass_count, an_str);
      }
    }
   } 
}



function _typeFinal_25000(){
  type_czech_test=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = 25000;

  function test_typeFinal(an_arg, expected_typeFinal) {
    TYPE_CZECH_current_test_number += 1;
    actual_typeFinal = type_czech_test.typeFinal(an_arg)
    if (actual_typeFinal !== expected_typeFinal) {
      console.log('typeIsA error : ', TYPE_CZECH_current_test_number, actual_typeFinal, an_arg, expected_typeFinal);
      fail_count += 1
    }
    pass_count += 1
  }
  test_typeFinal([1], 'array')                   // pass 1 A array
  test_typeFinal(234n, 'bigint')                 // pass 2 B bigint
  test_typeFinal(false, 'boolean')               // pass 3 C boolean
  test_typeFinal(new Date('2005-06-07'), 'date') // pass 4 D date
  test_typeFinal(a=>a+8, 'function')             // pass 5 E function
  test_typeFinal(9, 'number')                    // pass 6 F number
  test_typeFinal({b:10}, `object`)               // pass 7 G object
  test_typeFinal(/d/, 'regexp')                  // pass 8 H regex
  test_typeFinal('an-str', 'string')             // pass 9 I string
  test_typeFinal(Symbol('sym'), `symbol`)        // pass 10 J symbol
  test_typeFinal([], 'array')                     // pass 11 K empty array
  test_typeFinal(new Date(''), 'date')            // pass 12 L empty date
  test_typeFinal(NaN, 'number')                   // pass 13 M empty number
  test_typeFinal({}, 'object')                    // pass 14 N empty object
  test_typeFinal(/(?:)/, 'regexp')                // pass 15 O empty regex
  test_typeFinal('', "string")                    // pass 16 P empty string
  test_typeFinal(null, 'null')                    // pass 17 Q empty null
  test_typeFinal(undefined, 'undefined')          // pass 18 R empty undefined
  test_typeFinal([11,'12',13], 'array')           // pass 19 T multi array
  test_typeFinal(14,'number')                     // pass 20 U multi args
  test_typeFinal([[17,"18",19]], 'array')         // pass 21 V multi in single
  test_typeFinal([20], 'array')                   // pass 22 W two singles
  test_typeFinal([22,23,24], 'array')             // pass 23 X two multis
  test_typeFinal({d:{}}, 'object')                // pass 24 Y empty in object
  test_typeFinal([{e:[28,{f:[29]}]}], 'array')    // pass 25 Z empty in object
  test_typeFinal(['',''], 'array')                // pass 26 0 empty - [str str]
  test_typeFinal([[],[]], 'array')                // pass 27 1 empty - [arr arr]
  test_typeFinal([{},{}], 'array')                // pass 28 2 empty - [obj obj]
  test_typeFinal({g:[]}, 'object')                // pass 29 3 empty - {arr arr}
  test_typeFinal({i:''}, 'object')                // pass 30 4 empty - {str str}
  test_typeFinal({ k: {} }, 'object');                // pass 31 5 empty - {obj obj}
  printTestName("_typeFinal_25000")  
}

function _typeFinal_25001() {
  type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = '25001';
  actual_type = type_czech_test.typeFinal(new Date('1999-12-31'));
  if (actual_type !== 'date') {
    fail_count += 1;
    console.log(`${TYPE_CZECH_current_test_number} type_czech.typeFinal(new Date('1999-12-31')`);
  }
  pass_count += 1;
    printTestName("_typeFinal_25000")  
}

function _typeFinal_25002() {
  if (typeof document !== 'undefined') {
    type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
    TYPE_CZECH_current_test_number = '25002';

    actual_type = type_czech_test.typeFinal(document.createElement('div'));
    if (actual_type !== 'HTMLDivElement') {
      fail_count += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.typeFinal(document.createElement('div'))`);
    }
  }
  pass_count += 1;
    printTestName("_typeFinal_25000")  
}


function _typeFinal_25003() {
  if (typeof document !== 'undefined') {
    type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
    TYPE_CZECH_current_test_number = '25003';
    
    class First { constructor() { } }
    class Last extends First { constructor() { super() } }

    actual_type = type_czech_test.typeFinal(new Last());
    if (actual_type !== "Last") {
      fail_count += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.typeFinal(document.createElement('div'))`);
    }
  }
  pass_count += 1;
    printTestName("_typeFinal_25000")  
}




if (fail_count>0) {
  the_problem = `public-tests/typeFinal_25000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;

