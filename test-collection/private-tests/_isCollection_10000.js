/* eslint-disable */



tested_is_collection = 0;
failed_is_collection = 0;

_isCollection_10000();

TEST_total_fails += failed_is_collection;
TEST_total_checks += tested_is_collection;

if (TEST_show_random) {
  console.log('_isCollection failed tests 10000', failed_is_collection)
  console.log('_isCollection passed tests 10000', tested_is_collection)
}


//////////////////////////////////////////





function _isCollection_10000(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = 10000;

  function test_isCollection(an_arg, expected_json) {
    TYPE_CZECH_current_test_number += 1;
    actual_json = type_czech._isCollection(an_arg)
    if (actual_json !== expected_json) {
      console.log('_isCollection error : ', TYPE_CZECH_current_test_number, actual_json, an_arg, expected_json);
      failed_is_collection += 1
    }
    tested_is_collection += 1
  }
    
  test_isCollection([1], true)                    // pass 1 A array
  test_isCollection(234n, false)                   // pass 2 B bigint
  test_isCollection(false, false)                  // pass 3 C boolean
  test_isCollection(new Date('2005-06-07'), false) // pass 4 D date
  test_isCollection(a=>a+8, false)                 // pass 5 E function
  test_isCollection(9, false)                      // pass 6 F number
  test_isCollection({b:10}, true)                 // pass 7 G object
  test_isCollection(/d/, false)                    // pass 8 H regex
  test_isCollection('an-str', false)               // pass 9 I string
  test_isCollection(Symbol('sym'), false)          // pass 10 J symbol
  test_isCollection([], true)                      // pass 11 K empty array
  test_isCollection(new Date(''), false)            // pass 12 L empty date
  test_isCollection(NaN, false)                     // pass 13 M empty number
  test_isCollection({}, true)                      // pass 14 N empty object
  test_isCollection(/(?:)/, false)                  // pass 15 O empty regex
  test_isCollection('', false)                      // pass 16 P empty string
  test_isCollection(null, false)                    // pass 17 Q empty null
  test_isCollection(undefined, false)               // pass 18 R empty undefined
  test_isCollection([11,'12',13], true)           // pass 19 T multi array
  test_isCollection(14, false)                     // pass 20 U multi args
  test_isCollection([[17,"18",19]], true)         // pass 21 V multi in single
  test_isCollection([20], true)                   // pass 22 W two singles
  test_isCollection([22,23,24], true)             // pass 23 X two multis
  test_isCollection({d:{}}, true)                 // pass 24 Y empty in object
  test_isCollection([{e:[28,{f:[29]}]}], true)    // pass 25 Z empty in object
  test_isCollection(['',''], true)                // pass 26 0 empty - [str str]
  test_isCollection([[],[]], true)                // pass 27 1 empty - [arr arr]
  test_isCollection([{},{}], true)                // pass 28 2 empty - [obj obj]
  test_isCollection({g:[]}, true)                 // pass 29 3 empty - {arr arr}
  test_isCollection({i:''}, true)                 // pass 30 4 empty - {str str}
  test_isCollection({k:{}}, true)                 // pass 31 5 empty - {obj obj}

}
