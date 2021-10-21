
/*
## check_typeEither()

### A. Check that a single parameter of any type is not empty.
*/
    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
      return type_czech.check_typeEither(arguments, [ "String", "Number" ]);
    }
                    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_check_yourFunc) 
                    function A_yourFunc(){ }
    A_yourFunc(9)        // pass 1 F number
    A_yourFunc(NaN)      // pass 2 M empty number
    A_yourFunc('an-str') // pass 4 I string
    A_yourFunc('')       // PASSSSSSSSSSSSSSSSSSSSSSSSSSSSSfail 13 P empty string


    A_yourFunc([11,12,13])               // fail 17 T multi array
   A_yourFunc(14,15,16) // FFFAIILLLpass 3 U multi args   FAIL
   A_yourFunc([1])                      // fail 1 A array

    A_yourFunc(234n)                     // fail 2 B bigint
    A_yourFunc(false)                    // fail 3 C boolean
    A_yourFunc(new Date('2005-06-07'))   // fail 4 D date

    A_yourFunc(a=>a+8)                   // fail 5 E function
    A_yourFunc({b:10})                   // fail 6 G object
    A_yourFunc(/d/)                      // fail 7 H regex

    A_yourFunc(Symbol('sym'))            // fail 8 J symbol
    A_yourFunc([])                       // fail 9 K empty array
    A_yourFunc(new Date(''))             // fail 10 L empty date

    A_yourFunc({})                       // fail 11 N empty object
    A_yourFunc(/(?:)/)                   // fail 12 O empty regex
    
    A_yourFunc(null)                     // fail 14 Q empty null
    A_yourFunc(undefined)                // fail 15 R empty undefined
    A_yourFunc()                         // fail 16 S empty nothing
 
    A_yourFunc([[17,18,19]])             // fail 18 V multi in single
    A_yourFunc([20], [21])               // fail 19 W two singles
    A_yourFunc([22,23,24], [25,26,27])   // fail 20 X two multis

    A_yourFunc({d:{}})                   // fail 21 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])      // fail 22 Z empty in object
    A_yourFunc(['',''] )                 // fail 23 0 empty - [str str]

    A_yourFunc([[],[]] )                 // fail 24 1 empty - [arr arr]
    A_yourFunc([{},{}] )                 // fail 25 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})            // fail 26 3 empty - {arr arr}

    A_yourFunc({i:''},{j:''})            // fail 27 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})            // fail 28 5 empty - {obj obj}
                            expected_tests = 32
                            expected_fails = 28
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_typeEither().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_typeEither().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests







&copy; 2021 Steen Hansen