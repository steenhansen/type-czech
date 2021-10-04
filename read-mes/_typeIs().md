
/*
## typeIs()
A. Check that a single parameter of any type is not empty.
*/

    fail_tests = 0
    total_tests = 0

    type_czech = TypeCzech('LOG-ERRORS')
    
    function A_yourFunc(an_arg, the_answer){
       the_type = type_czech.typeIs(an_arg)
      if (the_type !== the_answer) {
        fail_tests += 1
      }
      total_tests += 1
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
    A_yourFunc()                        // fail 1 S empty nothing
    A_yourFunc(14,15,16)                // fail 2 U multi args
    A_yourFunc([20], [21])              // fail 3 W two singles
    A_yourFunc([22,23,24], [25,26,27])  // fail 4 X two multis
    A_yourFunc({g:[]},{h:[]})           // fail 5 3 empty - {arr arr}
    A_yourFunc({i:''},{j:''})           // fail 6 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})           // fail 7 5 empty - {obj obj}
                expected_tests = 32
                expected_fails = 7
    if (expected_tests !== total_tests) 
        throw `A. _typeIs().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _typeIs().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests









