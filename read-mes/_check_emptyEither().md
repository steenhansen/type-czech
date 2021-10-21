
/*
## check_emptyEither()

### A. Check that a single parameter of any type is not empty.
*/
    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
      return type_czech.check_emptyEither(arguments, ['EMPTY-ERROR', 'EMPTY-OK']);
    }
                    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_check_yourFunc) 
                    function A_yourFunc(){ }
    A_yourFunc([1])                      // A array
    A_yourFunc(234n)                     // B bigint
    A_yourFunc(false)                    // C boolean
    A_yourFunc(new Date('2005-06-07'))   // D date
    A_yourFunc(a=>a+8)                   // E function
    A_yourFunc(9)                        // F number
    A_yourFunc({b:10})                   // G object
    A_yourFunc(/d/)                      // H regex
    A_yourFunc('an-str')                 // I string
    A_yourFunc(Symbol('sym'))            // J symbol
    A_yourFunc([])                       // K empty array
    A_yourFunc(new Date(''))             // L empty date
    A_yourFunc(NaN)                      // M empty number
    A_yourFunc({})                       // N empty object
    A_yourFunc(/(?:)/)                   // O empty regex
    A_yourFunc('')                       // P empty string
    A_yourFunc(null)                     // Q empty null
    A_yourFunc(undefined)                // R empty undefined
    A_yourFunc()                         // S empty nothing
    A_yourFunc([11,12,13])               // T multi array
    A_yourFunc(14,15,16)                 // U multi args
    A_yourFunc([[17,18,19]])             // V multi in single
    A_yourFunc([20], [21])               // W two singles
    A_yourFunc([22,23,24], [25,26,27])   // X two multis
    A_yourFunc({d:{}})                   // Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])      // Z empty in object
    A_yourFunc(['',''] )                 // 0 empty - [str str]
    A_yourFunc([[],[]] )                 // 1 empty - [arr arr]
    A_yourFunc([{},{}] )                 // 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})            // 3 empty - {arr arr}
    A_yourFunc({i:''},{j:''})            // 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})            // 5 empty - {obj obj}
                            expected_tests = 32
                            expected_fails = 0
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_emptyEither().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_emptyEither().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests






&copy; 2021 Steen Hansen



