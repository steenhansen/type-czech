/* eslint-disable */


tested_a_type_of = 0;
failed_a_type_of = 0;

_aTypeOf_09000();

TEST_total_fails += failed_a_type_of;
TEST_total_checks += tested_a_type_of;
if (TEST_show_random) {
  console.log('_aTypeOf failed tests 09000', failed_a_type_of)
  console.log('_aTypeOf passed tests 09000', tested_a_type_of)
}

///////////////

function _aTypeOf_09000(){
  type_czech_test=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  TYPE_CZECH_current_test_number = 9000;

  function test_aTypeOf(an_arg, expected_aTypeOf) {
    TYPE_CZECH_current_test_number += 1;
    actual_aTypeOf = type_czech_test._aTypeOf(an_arg);
    if (actual_aTypeOf !== expected_aTypeOf) {
      console.log('_aTypeOf error : ', TYPE_CZECH_current_test_number, actual_aTypeOf, an_arg, expected_aTypeOf);
      failed_a_type_of += 1;
    }
    tested_a_type_of += 1;
  }
    
  test_aTypeOf([1], 'Array')                   // pass 1 A array
  test_aTypeOf(234n, 'BigInt')                 // pass 2 B bigint
  test_aTypeOf(false, 'Boolean')               // pass 3 C boolean
  test_aTypeOf(new Date('2005-06-07'), 'Date') // pass 4 D date
  test_aTypeOf(a=>a+8, 'Function')             // pass 5 E function
  test_aTypeOf(9, 'Number')                    // pass 6 F number
  test_aTypeOf({b:10}, `Object`)               // pass 7 G object
  test_aTypeOf(/d/, 'RegExp')                  // pass 8 H regex
  test_aTypeOf('an-str', 'String')             // pass 9 I string
  test_aTypeOf(Symbol('sym'), `Symbol`)        // pass 10 J symbol
  test_aTypeOf([], 'Array')                     // pass 11 K empty array
  test_aTypeOf(new Date(''), 'Date')            // pass 12 L empty date
  test_aTypeOf(NaN, 'Number')                   // pass 13 M empty number
  test_aTypeOf({}, 'Object')                    // pass 14 N empty object
  test_aTypeOf(/(?:)/, 'RegExp')                // pass 15 O empty regex
  test_aTypeOf('', "String")                    // pass 16 P empty string
  test_aTypeOf(null, 'null')                    // pass 17 Q empty null
  test_aTypeOf(undefined, 'undefined')          // pass 18 R empty undefined
  test_aTypeOf([11,'12',13], 'Array')           // pass 19 T multi array
  test_aTypeOf(14,'Number')                     // pass 20 U multi args
  test_aTypeOf([[17,"18",19]], 'Array')         // pass 21 V multi in single
  test_aTypeOf([20], 'Array')                   // pass 22 W two singles
  test_aTypeOf([22,23,24], 'Array')             // pass 23 X two multis
  test_aTypeOf({d:{}}, 'Object')                // pass 24 Y empty in object
  test_aTypeOf([{e:[28,{f:[29]}]}], 'Array')    // pass 25 Z empty in object
  test_aTypeOf(['',''], 'Array')                // pass 26 0 empty - [str str]
  test_aTypeOf([[],[]], 'Array')                // pass 27 1 empty - [arr arr]
  test_aTypeOf([{},{}], 'Array')                // pass 28 2 empty - [obj obj]
  test_aTypeOf({g:[]}, 'Object')                // pass 29 3 empty - {arr arr}
  test_aTypeOf({i:''}, 'Object')                // pass 30 4 empty - {str str}
  test_aTypeOf({k:{}}, 'Object')                // pass 31 5 empty - {obj obj}

}
