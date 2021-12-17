/* eslint-disable */


pass_count = 0;
fail_count = 0;


_aTypeOf_09000();


function _aTypeOf_09000(){
  type_czech_test=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = 9000;

  function test_aTypeOf(an_arg, expected_aTypeOf) {
    TYPE_CZECH_current_test_number += 1;
    actual_aTypeOf = type_czech_test._aTypeOf(an_arg);
    if (actual_aTypeOf !== expected_aTypeOf) {
      console.log('_aTypeOf error : ', TYPE_CZECH_current_test_number, actual_aTypeOf, an_arg, expected_aTypeOf);
      fail_count += 1;
    }
    pass_count += 1;
  }
    
  test_aTypeOf([1], 'array')                   // pass 1 A array
  test_aTypeOf(234n, 'bigint')                 // pass 2 B bigint
  test_aTypeOf(false, 'boolean')               // pass 3 C boolean
  test_aTypeOf(new Date('2005-06-07'), 'date') // pass 4 D date
  test_aTypeOf(a=>a+8, 'function')             // pass 5 E function
  test_aTypeOf(9, 'number')                    // pass 6 F number
  test_aTypeOf({b:10}, `object`)               // pass 7 G object
  test_aTypeOf(/d/, 'regexp')                  // pass 8 H regex
  test_aTypeOf('an-str', 'string')             // pass 9 I string
  test_aTypeOf(Symbol('sym'), `symbol`)        // pass 10 J symbol
  test_aTypeOf([], 'array')                     // pass 11 K empty array
  test_aTypeOf(new Date(''), 'date')            // pass 12 L empty date
  test_aTypeOf(NaN, 'number')                   // pass 13 M empty number
  test_aTypeOf({}, 'object')                    // pass 14 N empty object
  test_aTypeOf(/(?:)/, 'regexp')                // pass 15 O empty regex
  test_aTypeOf('', "string")                    // pass 16 P empty string
  test_aTypeOf(null, 'null')                    // pass 17 Q empty null
  test_aTypeOf(undefined, 'undefined')          // pass 18 R empty undefined
  test_aTypeOf([11,'12',13], 'array')           // pass 19 T multi array
  test_aTypeOf(14,'number')                     // pass 20 U multi args
  test_aTypeOf([[17,"18",19]], 'array')         // pass 21 V multi in single
  test_aTypeOf([20], 'array')                   // pass 22 W two singles
  test_aTypeOf([22,23,24], 'array')             // pass 23 X two multis
  test_aTypeOf({d:{}}, 'object')                // pass 24 Y empty in object
  test_aTypeOf([{e:[28,{f:[29]}]}], 'array')    // pass 25 Z empty in object
  test_aTypeOf(['',''], 'array')                // pass 26 0 empty - [str str]
  test_aTypeOf([[],[]], 'array')                // pass 27 1 empty - [arr arr]
  test_aTypeOf([{},{}], 'array')                // pass 28 2 empty - [obj obj]
  test_aTypeOf({g:[]}, 'object')                // pass 29 3 empty - {arr arr}
  test_aTypeOf({i:''}, 'object')                // pass 30 4 empty - {str str}
  test_aTypeOf({k:{}}, 'object')                // pass 31 5 empty - {obj obj}

}


if (fail_count>0) {
  the_problem = `private-tests/_aTypeOf_09000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;

