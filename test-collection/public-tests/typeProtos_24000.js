/* eslint-disable */

pass_count = 0;
fail_count = 0;

_typeProtos_24000();
_typeProtos_24101();
_typeProtos_24102();
_typeProtos_24103();

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

function _typeProtos_24101() {
  type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = '24101';
  actual_prototypes = type_czech_test.typeProtos(new Date('1999-12-31'));
  expected_prototypes = ["Date"]
  actual_str = actual_prototypes.toString();
  expected_str = expected_prototypes.toString();
  if (actual_str !== expected_str) {
    fail_count += 1;
    console.log(`${TYPE_CZECH_current_test_number} type_czech.typeProtos(new Date('1999-12-31')`);
  }
  pass_count += 1;
   printTestName("_typeProtos_24101")  
}

function _typeProtos_24102() {
  if (typeof document !== 'undefined') {
    type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
    TYPE_CZECH_current_test_number = '24102';
    actual_prototypes = type_czech_test.typeProtos(document.createElement('div'));
    expected_prototypes =[ "HTMLDivElement", "HTMLElement", "Element", "Node", "EventTarget", "Object" ];
    actual_str = actual_prototypes.toString();
    expected_str = expected_prototypes.toString();
    if (actual_str !== expected_str) {
      fail_count += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.typeProtos(document.createElement('div'))`);
    }
  }
  pass_count += 1;
      printTestName("_typeProtos_24102")  
}


function _typeProtos_24103() {
  if (typeof document !== 'undefined') {
    type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
    TYPE_CZECH_current_test_number = '24103';
     
    class First { constructor() { } }
    class Last extends First { constructor() { super() } }

    actual_prototypes = type_czech_test.typeProtos(new Last());
    expected_prototypes =[ "Last", "First", "Object" ];
    actual_str = actual_prototypes.toString();
    expected_str = expected_prototypes.toString();
    if (actual_str !== expected_str) {
      fail_count += 1;
      console.log(`${TYPE_CZECH_current_test_number} type_czech.typeProtos(document.createElement('div'))`);
    } 
  }
  pass_count += 1;
      printTestName("_typeProtos_24103")  
}




function _typeProtos_24000() {
  type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = 24000;

  function A_yourFunc(an_arg, the_answer){
    TYPE_CZECH_current_test_number += 1;
    the_prototypes = type_czech.typeProtos(an_arg)
    first_prototype = the_prototypes[0]
    if (first_prototype !== the_answer) {
      console.log('typeIsA error : ', TYPE_CZECH_current_test_number, first_prototype, an_arg, the_answer);
      fail_count += 1
    }
    pass_count += 1
  }

  A_yourFunc([1], 'Array')                      // pass 1 A array
  A_yourFunc(234n, 'BigInt')                    // pass 2 B bigint
  A_yourFunc(false, 'Boolean')                  // pass 3 C boolean
  A_yourFunc(new Date('2005-06-07'), 'Date')    // pass 4 D date
  A_yourFunc(a=>a+8, 'Function')                // pass 5 E function
  A_yourFunc(9, 'Number')                       // pass 6 F number
  A_yourFunc({b:10}, 'Object')                  // pass 7 G object
  A_yourFunc(/d/, 'RegExp')                     // pass 8 H regex
  A_yourFunc('an-str', 'String')                // pass 9 I string
  A_yourFunc(Symbol('sym'), 'Symbol')           // pass 10 J symbol
  A_yourFunc([], 'Array')                       // pass 11 K empty array
  A_yourFunc(new Date(''), 'Date')              // pass 12 L empty date
  A_yourFunc(NaN, 'Number')                     // pass 13 M empty number
  A_yourFunc({}, 'Object')                      // pass 14 N empty object
  A_yourFunc(/(?:)/, 'RegExp')                  // pass 15 O empty regex
  A_yourFunc('', 'String')                      // pass 16 P empty string
  A_yourFunc(null, 'null')                      // pass 17 Q empty null
  A_yourFunc(undefined, 'undefined')            // pass 18 R empty undefined
  A_yourFunc([11,12,13], 'Array')               // pass 19 T multi array
  A_yourFunc([[17,18,19]], 'Array')             // pass 20 V multi in single
  A_yourFunc({d:{}}, 'Object')                  // pass 21 Y empty in object
  A_yourFunc([{e:[28,{f:[29]}]}], 'Array')      // pass 22 Z empty in object
  A_yourFunc(['',''], 'Array')                  // pass 23 0 empty - [str str]
  A_yourFunc([[],[]], 'Array')                  // pass 24 1 empty - [arr arr]
  A_yourFunc([{},{}], 'Array')                  // pass 25 2 empty - [obj obj]
    printTestName("_typeProtos_24000")  
}


if (fail_count>0) {
  the_problem = `public-tests/typeProtos_24000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;