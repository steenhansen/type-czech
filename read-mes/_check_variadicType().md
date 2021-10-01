/*
## check_variadicType()
A. Check variadic with array type - ['Number'].
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_yourFunc() {
       return type_czech.check_variadicType(arguments, ['Number'])
     }
                    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_yourFunc) 
                    function A_yourFunc(){ }

    A_yourFunc(9)        // pass 1 F number
    A_yourFunc(NaN)      // pass 2 M empty number
    A_yourFunc(14,15,16) // pass 3 U multi args

    A_yourFunc([1])                      // fail 1 A array
    A_yourFunc(234n)                     // fail 2 B bigint
    A_yourFunc(false)                    // fail 3 C boolean
    A_yourFunc(new Date('2005-06-07'))   // fail 4 D date
    A_yourFunc(a=>a+8)                   // fail 5 E function
    A_yourFunc({b:10})                   // fail 6 G object
    A_yourFunc(/d/)                      // fail 7 H regex
    A_yourFunc('an-str')                 // fail 8 I string
    A_yourFunc(Symbol('sym'))            // fail 9 J symbol
    A_yourFunc([])                       // fail 10 K empty array
    A_yourFunc(new Date(''))             // fail 11 L empty date
    A_yourFunc({})                       // fail 12 N empty object
    A_yourFunc(/(?:)/)                   // fail 13 O empty regex
    A_yourFunc('')                       // fail 14 P empty string
    A_yourFunc(null)                     // fail 15 Q empty null
    A_yourFunc(undefined)                // fail 16 R empty undefined
    A_yourFunc()                         // fail 17 S empty nothing
    A_yourFunc([11,12,13])               // fail 18 T multi array
    A_yourFunc([[17,18,19]])             // fail 19 V multi in single
    A_yourFunc([20], [21])               // fail 20 W two singles
    A_yourFunc([22,23,24], [25,26,27])   // fail 21 X two multis
    A_yourFunc({d:{}})                   // fail 22 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])      // fail 23 Z empty in object
    A_yourFunc(['',''] )                 // fail 24 0 empty - [str str]
    A_yourFunc([[],[]] )                 // fail 25 1 empty - [arr arr]
    A_yourFunc([{},{}] )                 // fail 26 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})            // fail 27 3 empty - {arr arr}
    A_yourFunc({i:''},{j:''})            // fail 28 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})            // fail 29 5 empty - {obj obj}
                            expected_tests = 32
                            expected_fails = 29
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




