/* eslint-disable */



tested_cycle_loops = 0;
failed_cycle_loops = 0;

_cycle_loops_08001();


TEST_total_fails += failed_cycle_loops;
TEST_total_checks += tested_cycle_loops;
if (TEST_show_random) {
  console.log('_aTypeOf failed tests 08000', failed_cycle_loops)
  console.log('_aTypeOf passed tests 08000', tested_cycle_loops)
}

function _cycle_loops_08001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  TYPE_CZECH_current_test_number = '08001';

  try {
    type_czech._cycle_loops.decycle([1])                    // pass 1 A array
    type_czech._cycle_loops.decycle(234n)                   // pass 2 B bigint
    type_czech._cycle_loops.decycle(false)                  // pass 3 C boolean
    type_czech._cycle_loops.decycle(new Date('2005-06-07')) // pass 4 D date
    type_czech._cycle_loops.decycle(a=>a+8)                 // pass 5 E function
    type_czech._cycle_loops.decycle(9)                      // pass 6 F number
    type_czech._cycle_loops.decycle({b:10})                 // pass 7 G object
    type_czech._cycle_loops.decycle(/d/)                    // pass 8 H regex
    type_czech._cycle_loops.decycle('an-str')               // pass 9 I string
    type_czech._cycle_loops.decycle(Symbol('sym'))          // pass 10 J symbol
    type_czech._cycle_loops.decycle([])                     // pass 11 K empty array
    type_czech._cycle_loops.decycle(new Date(''))           // pass 12 L empty date
    type_czech._cycle_loops.decycle(NaN)                    // pass 13 M empty number
    type_czech._cycle_loops.decycle({})                     // pass 14 N empty object
    type_czech._cycle_loops.decycle(/(?:)/)                 // pass 15 O empty regex
    type_czech._cycle_loops.decycle('')                     // pass 16 P empty string
    type_czech._cycle_loops.decycle(null)                   // pass 17 Q empty null
    type_czech._cycle_loops.decycle(undefined)              // pass 18 R empty undefined
    type_czech._cycle_loops.decycle()                       // pass 19 S empty nothing
    type_czech._cycle_loops.decycle([11,'12',13])           // pass 20 T multi array
    type_czech._cycle_loops.decycle(14)                     // pass 21 U multi args
    type_czech._cycle_loops.decycle([[17,"18",19]])         // pass 22 V multi in single
    type_czech._cycle_loops.decycle([20])                   // pass 23 W two singles
    type_czech._cycle_loops.decycle([22,23,24])             // pass 24 X two multis
    type_czech._cycle_loops.decycle({d:{}})                 // pass 25 Y empty in object
    type_czech._cycle_loops.decycle([{e:[28,{f:[29]}]}])    // pass 26 Z empty in object
    type_czech._cycle_loops.decycle(['',''])                // pass 27 0 empty - [str str]
    type_czech._cycle_loops.decycle([[],[]])                // pass 28 1 empty - [arr arr]
    type_czech._cycle_loops.decycle([{},{}])                // pass 29 2 empty - [obj obj]
    type_czech._cycle_loops.decycle({g:[]})                 // pass 30 3 empty - {arr arr}
    type_czech._cycle_loops.decycle({i:''})                 // pass 31 4 empty - {str str}
    type_czech._cycle_loops.decycle({k:{}})                 // pass 32 5 empty - {obj obj}
    tested_cycle_loops ++;
  } catch (e) {
    console.log(e)
    console.log('_cycle_loops_08001 failed with decycle()')
    failed_cycle_loops ++;
  }

}
