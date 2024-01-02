/* eslint-disable */


pass_count = 0;
fail_count = 0;


_toStr_29001();

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

function _toStr_29001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = '29001';

  function test_toStr(an_arg, expected_str) {
    actual_str = type_czech._toStr(an_arg)
    if (actual_str !== expected_str) {
      console.log('_toStr error : ', TYPE_CZECH_current_test_number, an_arg, expected_str)
      fail_count += 1
    }
    pass_count += 1
  }
    
  test_toStr([1], '[1]')                                         // pass 1 A array
  test_toStr(234n, '234n')                                       // pass 2 B bigint
  test_toStr(false, 'false')                                     // pass 3 C boolean
  test_toStr(new Date('2005-06-07'), '2005-06-07T00:00:00.000Z') // pass 4 D date
  test_toStr(a=>a+8, 'a=>a+8 ~~~function~~~')                               // pass 5 E function
  test_toStr(9, '9')                                             // pass 6 F number
  test_toStr({b:10}, `{b:10}`)                                 // pass 7 G object
  test_toStr(/d/, '/d/ ~~~regex~~~')                                     // pass 8 H regex
  test_toStr('an-str', 'an-str')                                 // pass 9 I string
  test_toStr(Symbol('sym'), `Symbol('sym')`)                     // pass 10 J symbol
  test_toStr([], '[]')                                           // pass 11 K empty array
  test_toStr(new Date(''), 'null')                               // pass 12 L empty date
  test_toStr(NaN, 'NaN')                                         // pass 13 M empty number
  test_toStr({}, '{}')                                           // pass 14 N empty object
  test_toStr(/(?:)/, '/(?:)/ ~~~regex~~~')                               // pass 15 O empty regex
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
 printTestName("_toStr_29001")  
}

if (fail_count>0) {
  the_problem = `private-tests/_toStr_29000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;


