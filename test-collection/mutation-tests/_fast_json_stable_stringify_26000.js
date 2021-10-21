/* eslint-disable */

//const fail_all_tests = true;

tested_fast_json_stable_stringify = 0;
failed_fast_json_stable_stringify = 0;

_fast_json_stable_stringify_26001();
_fast_json_stable_stringify_26002();


total_fails += failed_fast_json_stable_stringify;
total_checks += tested_fast_json_stable_stringify;
if (show_random) {
  console.log('_aTypeOf failed tests 26000', failed_fast_json_stable_stringify)
  console.log('_aTypeOf passed tests 26000', tested_fast_json_stable_stringify)
}

function _fast_json_stable_stringify_26001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '26001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  function test_fast_json_stable(an_arg, expected_json) {
    actual_json = type_czech._fast_json_stable_stringify(an_arg)
    if (actual_json !== expected_json) {
      console.log('_fast_json_stable_stringify error : ', an_arg, expected_json)
      failed_fast_json_stable_stringify += 1
    }
    tested_fast_json_stable_stringify += 1
  }
    
    test_fast_json_stable([1], '[1]')                                           // pass 1 A array
    test_fast_json_stable(234n, '"234n"')                                       // pass 2 B bigint
    test_fast_json_stable(false, 'false')                                       // pass 3 C boolean
    test_fast_json_stable(new Date('2005-06-07'), '"2005-06-07T00:00:00.000Z"') // pass 4 D date
    test_fast_json_stable(a=>a+8, 'a=>a+8 ***')                                 // pass 5 E function
    test_fast_json_stable(9, '9')                                               // pass 6 F number
    test_fast_json_stable({b:10}, `{"b":10}`)                                   // pass 7 G object
    test_fast_json_stable(/d/, '/d/ +++')                                       // pass 8 H regex
    test_fast_json_stable('an-str', '"an-str"')                                 // pass 9 I string
    test_fast_json_stable(Symbol('sym'), `Symbol(sym)`)                         // pass 10 J symbol
    test_fast_json_stable([], '[]')                                           // pass 11 K empty array
    test_fast_json_stable(new Date(''), 'null')                               // pass 12 L empty date
    test_fast_json_stable(NaN, 'NaN')                                         // pass 13 M empty number
    test_fast_json_stable({}, '{}')                                           // pass 14 N empty object
    test_fast_json_stable(/(?:)/, '/(?:)/ +++')                               // pass 15 O empty regex
    test_fast_json_stable('', '""')                                           // pass 16 P empty string
    test_fast_json_stable(null, 'null')                                       // pass 17 Q empty null
    test_fast_json_stable(undefined, 'undefined')                             // pass 18 R empty undefined
    test_fast_json_stable([11,'12',13], '[11,"12",13]')                       // pass 19 T multi array
    test_fast_json_stable(14,'14')                                            // pass 20 U multi args
    test_fast_json_stable([[17,"18",19]], '[[17,"18",19]]')                   // pass 21 V multi in single
    test_fast_json_stable([20], '[20]')                                       // pass 22 W two singles
    test_fast_json_stable([22,23,24], '[22,23,24]')                           // pass 23 X two multis
    test_fast_json_stable({d:{}}, '{"d":{}}')                                 // pass 24 Y empty in object
    test_fast_json_stable([{e:[28,{f:[29]}]}], '[{"e":[28,{"f":[29]}]}]')     // pass 25 Z empty in object
    test_fast_json_stable(['',''], '["",""]')                                 // pass 26 0 empty - [str str]
    test_fast_json_stable([[],[]], '[[],[]]')                                 // pass 27 1 empty - [arr arr]
    test_fast_json_stable([{},{}], '[{},{}]')                                 // pass 28 2 empty - [obj obj]
    test_fast_json_stable({g:[]}, '{"g":[]}')                                 // pass 29 3 empty - {arr arr}
    test_fast_json_stable({i:''}, '{"i":""}')                                 // pass 30 4 empty - {str str}
    test_fast_json_stable({k:{}}, '{"k":{}}')                                 // pass 31 5 empty - {obj obj}
}


function _fast_json_stable_stringify_26002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '26002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_var = '';                   // TEST TEST
    b_var = 'no-match'
  } else {
    a_var = { 
      key_array: [1],
      key_bigint: 123n, 
      key_boolean: true,
      key_date: new Date('1999-05-05'),
      key_function: x=>x,
      key_nan: NaN, 
      key_number: 789,
      key_object: {a:'b'},
      key_regex: /d/,
      key_symbol: Symbol('sym'),
      key_undefined: undefined, 
    }; 
    b_var = { 
      key_undefined: undefined, 
      key_symbol: Symbol('sym'),
      key_regex: /d/,
      key_object: {a:'b'},
      key_number: 789,
      key_nan: NaN, 
      key_function: x=>x,
      key_date: new Date('1999-05-05'),
      key_boolean: true,
      key_bigint: 123n, 
      key_array: [1],
    }; 
  }
  a_json = type_czech._fast_json_stable_stringify(a_var);
  b_json = type_czech._fast_json_stable_stringify(b_var);
  if (a_json !== b_json) {
    console.log(error_id);
    console.log('  a_json=', a_json);
    console.log('expeb_jsoncted=', b_json);
    }
    no_console_mess = '';
  
                                              if (a_json !== b_json) {
                                                failed_fast_json_stable_stringify ++;
                                              }
                                              tested_fast_json_stable_stringify ++;
}










