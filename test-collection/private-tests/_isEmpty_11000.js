/* eslint-disable */


tested_isEmpty = 0;
failed_isEmpty = 0;

_isEmpty_10000();

TEST_total_fails += failed_isEmpty;
TEST_total_checks += tested_isEmpty;

if (TEST_show_random) {
  console.log('_missingKey failed tests 11000', failed_isEmpty)
  console.log('_missingKey passed tests 11000', tested_isEmpty)
}

/////////////////////////////////////////////////////////////////


function _isEmpty_10000(){
  type_czech_test=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = 10000;

  function test_isEmpty(an_arg, expected_isEmpty) {
    TYPE_CZECH_current_test_number += 1;
    actual_isEmpty = type_czech_test._isEmpty(an_arg);
    if (actual_isEmpty !== expected_isEmpty) {
      console.log('_isEmpty error : ', TYPE_CZECH_current_test_number, actual_isEmpty, an_arg, expected_isEmpty);
      failed_isEmpty += 1;
    }
    tested_isEmpty += 1;
  }
    
  test_isEmpty([1], false)                    // pass 1 A array
  test_isEmpty(234n, false)                   // pass 2 B bigint
  test_isEmpty(false, false)                  // pass 3 C boolean
  test_isEmpty(new Date('2005-06-07'), false) // pass 4 D date
  test_isEmpty(a=>a+8, false)                 // pass 5 E function
  test_isEmpty(9, false)                      // pass 6 F number
  test_isEmpty({b:10}, false)                 // pass 7 G object
  test_isEmpty(/d/, false)                    // pass 8 H regex
  test_isEmpty('an-str', false)               // pass 9 I string
  test_isEmpty(Symbol('sym'), false)          // pass 10 J symbol
  test_isEmpty([], true)                      // pass 11 K empty array
  test_isEmpty(new Date(''), true)            // pass 12 L empty date
  test_isEmpty(NaN, true)                     // pass 13 M empty number
  test_isEmpty({}, true)                      // pass 14 N empty object
  test_isEmpty(/(?:)/, true)                  // pass 15 O empty regex
  test_isEmpty('', true)                      // pass 16 P empty string
  test_isEmpty(null, true)                    // pass 17 Q empty null
  test_isEmpty(undefined, true)               // pass 18 R empty undefined
  test_isEmpty([11,'12',13], false)           // pass 19 T multi array
  test_isEmpty(14, false)                     // pass 20 U multi args
  test_isEmpty([[17,"18",19]], false)         // pass 21 V multi in single
  test_isEmpty([20], false)                   // pass 22 W two singles
  test_isEmpty([22,23,24], false)             // pass 23 X two multis
  test_isEmpty({d:{}}, false)                 // pass 24 Y empty in object
  test_isEmpty([{e:[28,{f:[29]}]}], false)    // pass 25 Z empty in object
  test_isEmpty(['',''], false)                // pass 26 0 empty - [str str]
  test_isEmpty([[],[]], false)                // pass 27 1 empty - [arr arr]
  test_isEmpty([{},{}], false)                // pass 28 2 empty - [obj obj]
  test_isEmpty({g:[]}, false)                 // pass 29 3 empty - {arr arr}
  test_isEmpty({i:''}, false)                 // pass 30 4 empty - {str str}
  test_isEmpty({k:{}}, false)                 // pass 31 5 empty - {obj obj}

}
