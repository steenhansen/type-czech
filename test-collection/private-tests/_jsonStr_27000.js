/* eslint-disable */



tested_jsonStr = 0;
failed_jsonStr = 0;

_jsonStr_27000();


TEST_total_fails += failed_jsonStr;
TEST_total_checks += tested_jsonStr;
if (TEST_show_random) {
  console.log('_aTypeOf failed tests 27000', failed_jsonStr)
  console.log('_aTypeOf passed tests 27000', tested_jsonStr)
}

function _jsonStr_27000(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = 27000;

  function test_jsonStr(an_arg, expected_json) {
    TYPE_CZECH_current_test_number += 1;
    actual_json = type_czech._jsonStr(an_arg)
    if (actual_json !== expected_json) {
      console.log('_isEmpty error : ', TYPE_CZECH_current_test_number, actual_json, an_arg, expected_json);
      failed_jsonStr += 1
    }
    tested_jsonStr += 1
  }
    
  test_jsonStr([1], '[1]')                                         // pass 1 A array
  test_jsonStr(234n, '234n')                                       // pass 2 B bigint
  test_jsonStr(false, 'false')                                     // pass 3 C boolean
  test_jsonStr(new Date('2005-06-07'), '2005-06-07T00:00:00.000Z') // pass 4 D date
  test_jsonStr(a=>a+8, 'a=>a+8 ***')                               // pass 5 E function
  test_jsonStr(9, '9')                                             // pass 6 F number
  test_jsonStr({b:10}, `{"b":10}`)                                 // pass 7 G object
  test_jsonStr(/d/, '/d/ +++')                                     // pass 8 H regex
  test_jsonStr('an-str', 'an-str')                                 // pass 9 I string
  test_jsonStr(Symbol('sym'), `Symbol('sym')`)                     // pass 10 J symbol
  test_jsonStr([], '[]')                                           // pass 11 K empty array
  test_jsonStr(new Date(''), 'null')                               // pass 12 L empty date
  test_jsonStr(NaN, 'NaN')                                         // pass 13 M empty number
  test_jsonStr({}, '{}')                                           // pass 14 N empty object
  test_jsonStr(/(?:)/, '/(?:)/ +++')                               // pass 15 O empty regex
  test_jsonStr('', "''")                                           // pass 16 P empty string
  test_jsonStr(null, 'null')                                       // pass 17 Q empty null
  test_jsonStr(undefined, 'undefined')                             // pass 18 R empty undefined
  test_jsonStr([11,'12',13], '[11,"12",13]')                       // pass 19 T multi array
  test_jsonStr(14,'14')                                            // pass 20 U multi args
  test_jsonStr([[17,"18",19]], '[[17,"18",19]]')                   // pass 21 V multi in single
  test_jsonStr([20], '[20]')                                       // pass 22 W two singles
  test_jsonStr([22,23,24], '[22,23,24]')                           // pass 23 X two multis
  test_jsonStr({d:{}}, '{"d":{}}')                                 // pass 24 Y empty in object
  test_jsonStr([{e:[28,{f:[29]}]}], '[{"e":[28,{"f":[29]}]}]')     // pass 25 Z empty in object
  test_jsonStr(['',''], '["",""]')                                 // pass 26 0 empty - [str str]
  test_jsonStr([[],[]], '[[],[]]')                                 // pass 27 1 empty - [arr arr]
  test_jsonStr([{},{}], '[{},{}]')                                 // pass 28 2 empty - [obj obj]
  test_jsonStr({g:[]}, '{"g":[]}')                                 // pass 29 3 empty - {arr arr}
  test_jsonStr({i:''}, '{"i":""}')                                 // pass 30 4 empty - {str str}
  test_jsonStr({k:{}}, '{"k":{}}')                                 // pass 31 5 empty - {obj obj}

}
