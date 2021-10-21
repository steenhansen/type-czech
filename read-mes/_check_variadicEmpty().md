/*
## check_variadicEmpty()
A. Check variadic with array type - ['EMPTY-ERROR'].
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
      return type_czech.check_variadicEmpty(arguments, ['EMPTY-ERROR'])
    }
                    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_check_yourFunc) 
                    function A_yourFunc(){ }
    A_yourFunc([1])                      // pass 1 A array
    A_yourFunc(234n)                     // pass 2 B bigint
    A_yourFunc(false)                    // pass 3 C boolean
    A_yourFunc(new Date('2005-06-07'))   // pass 4 D date
    A_yourFunc(a=>a+8)                   // pass 5 E function
    A_yourFunc(9)                        // pass 6 F number
    A_yourFunc({b:10})                   // pass 7 G object
    A_yourFunc(/d/)                      // pass 8 H regex
    A_yourFunc('an-str')                 // pass 9 I string
    A_yourFunc(Symbol('sym'))            // pass 10 J symbol
    A_yourFunc([11,12,13])               // pass 11 T multi array
    A_yourFunc(14,15,16)                 // pass 12 U multi args
    A_yourFunc([[17,18,19]])             // pass 13 V multi in single
    A_yourFunc([20], [21])               // pass 14 W two singles
    A_yourFunc([22,23,24], [25,26,27])   // pass 15 X two multis
    A_yourFunc({d:{}})                   // pass 16 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])      // pass 17 Z empty in object
    A_yourFunc(['',''] )                 // pass 18 0 empty - [str str]
    A_yourFunc([[],[]] )                 // pass 19 1 empty - [arr arr]
    A_yourFunc([{},{}] )                 // pass 20 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})            // pass 21 3 empty - {arr arr}
    A_yourFunc({i:''},{j:''})            // pass 22 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})            // pass 23 5 empty - {obj obj} 
    A_yourFunc([])            // fail 1 K empty array
    A_yourFunc(new Date(''))  // fail 2 L empty date
    A_yourFunc(NaN)           // fail 3 M empty number
    A_yourFunc({})            // fail 4 N empty object
    A_yourFunc(/(?:)/)        // fail 5 O empty regex
    A_yourFunc('')            // fail 6 P empty string
    A_yourFunc(null)          // fail 7 Q empty null
    A_yourFunc(undefined)     // fail 8 R empty undefined
    A_yourFunc()              // fail 9 S empty nothing
                            expected_tests = 32
                            expected_fails = 9
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_variadicType().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_variadicType().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests


&copy; 2021 Steen Hansen
      