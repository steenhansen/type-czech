/* eslint-disable */

//const fail_all_tests = true;

tested_toStr = 0;
failed_toStr = 0;

_toStr_27001();


total_fails += failed_toStr;
total_checks += tested_toStr;
if (show_random) {
  console.log('_aTypeOf failed tests 27000', failed_toStr)
  console.log('_aTypeOf passed tests 27000', tested_toStr)
}

function _toStr_27001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '27001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  function test_toStr(an_arg, expected_str) {
    actual_str = type_czech._toStr(an_arg)
    if (actual_str !== expected_str) {
      console.log('test_toStr', actual_str, expected_str)
      failed_toStr += 1
    }
    tested_toStr += 1
  }
    
  test_toStr([1], '[1]')                                         // pass 1 A array
  test_toStr(234n, '234n')                                       // pass 2 B bigint
  test_toStr(false, 'false')                                     // pass 3 C boolean
  test_toStr(new Date('2005-06-07'), '2005-06-07T00:00:00.000Z') // pass 4 D date
  test_toStr(a=>a+8, 'a=>a+8 ...')                               // pass 5 E function
  test_toStr(9, '9')                                             // pass 6 F number
  test_toStr({b:10}, `{b:10}`)                                 // pass 7 G object
  test_toStr(/d/, '/d/ ...')                                     // pass 8 H regex
  test_toStr('an-str', 'an-str')                                 // pass 9 I string
  test_toStr(Symbol('sym'), `Symbol('sym')`)                     // pass 10 J symbol
  test_toStr([], '[]')                                           // pass 11 K empty array
  test_toStr(new Date(''), 'null')                               // pass 12 L empty date
  test_toStr(NaN, 'NaN')                                         // pass 13 M empty number
  test_toStr({}, '{}')                                           // pass 14 N empty object
  test_toStr(/(?:)/, '/(?:)/ ...')                               // pass 15 O empty regex
  test_toStr('', "''")                                           // pass 16 P empty string
  test_toStr(null, 'null')                                       // pass 17 Q empty null
  test_toStr(undefined, 'undefined')                             // pass 18 R empty undefined
  test_toStr([11,'12',13], '[11,"12",13]')                       // pass 19 T multi array
  test_toStr(14,'14')                                            // pass 20 U multi args
  test_toStr([[17,"18",19]], '[[17,"18",19]]')                   // pass 21 V multi in single
  test_toStr([20], '[20]')                                       // pass 22 W two singles
  test_toStr([22,23,24], '[22,23,24]')                           // pass 23 X two multis
  test_toStr({d:{}}, '{d:{}}')                                 // pass 24 Y empty in object
  test_toStr([{e:[28,{f:[29]}]}], '[{e:[28,{f:[29]}]}]')     // pass 25 Z empty in object
  test_toStr(['','x'], '["","x"]')                                 // pass 26 0 empty - [str str]
  test_toStr([[],[]], '[[],[]]')                                 // pass 27 1 empty - [arr arr]
  test_toStr([{},{}], '[{},{}]')                                 // pass 28 2 empty - [obj obj]
  test_toStr({g:[]}, '{g:[]}')                                 // pass 29 3 empty - {arr arr}
  test_toStr({i:''}, '{i:""}')                                 // pass 30 4 empty - {str str}
  test_toStr({k:{}}, '{k:{}}')                                 // pass 31 5 empty - {obj obj}

}
