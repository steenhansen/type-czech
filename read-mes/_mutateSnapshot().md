
/*
## mutateSnapshot()
A. Check that a single parameter of any type is not empty.
*/

    fail_tests = 0
    total_tests = 0
    type_czech = TypeCzech('LOG-ERRORS')
    function A_yourFunc(an_arg){
      try {
        ref_object = type_czech.mutateSnapshot(an_arg, an_arg, an_arg)
      } catch(e) {
        fail_tests += 1
      }
      total_tests += 1
    }
    A_yourFunc([1])                    // pass 1 A array
    A_yourFunc({b:10})                 // pass 2 G object
    A_yourFunc([])                     // pass 3 K empty array
    A_yourFunc({})                     // pass 4 N empty object
    A_yourFunc([11,12,13])             // pass 5 T multi array
    A_yourFunc([[17,18,19]])           // pass 6 V multi in single
    A_yourFunc([20], [21])             // pass 7 W two singles
    A_yourFunc([22,23,24], [25,26,27]) // pass 8 X two multis
    A_yourFunc({d:{}})                 // pass 9 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])    // pass 10 Z empty in object
    A_yourFunc(['',''] )               // pass 11 0 empty - [str str]
    A_yourFunc([[],[]] )               // pass 12 1 empty - [arr arr]
    A_yourFunc([{},{}] )               // pass 13 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})          // pass 14 3 empty - {arr arr}
    A_yourFunc({i:''},{j:''})          // pass 15 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})          // pass 16 5 empty - {obj obj}
    A_yourFunc(234n)                        // fail 1 B bigint
    A_yourFunc(false)                       // fail 2 C boolean
    A_yourFunc(new Date('2005-06-07'))      // fail 3 D date
    A_yourFunc(a=>a+8)                      // fail 4 E function
    A_yourFunc(9)                           // fail 5 F number
    A_yourFunc(/d/)                         // fail 6 H regex
    A_yourFunc('an-str')                    // fail 7 I string
    A_yourFunc(Symbol('sym'))               // fail 8 J symbol
    A_yourFunc(new Date(''))                // fail 9 L empty date
    A_yourFunc(NaN)                         // fail 10 M empty number
    A_yourFunc(/(?:)/)                      // fail 11 O empty regex
    A_yourFunc('')                          // fail 12 P empty string
    A_yourFunc(null)                        // fail 13 Q empty null
    A_yourFunc(undefined)                   // fail 14 R empty undefined
    A_yourFunc()                            // fail 15 S empty nothing
    A_yourFunc(14,15,16)                    // fail 16 U multi args
                expected_tests = 32
                expected_fails = 16
    if (expected_tests !== total_tests) 
        throw `A. _mutateSnapshot().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _mutateSnapshot().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests









