
/*
## check_emptyExtra()
A. Check that a single parameter of any type is not empty.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_yourFunc() {
      return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR']);
    }
                    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_yourFunc) 
                    function A_yourFunc(){ }
    A_yourFunc([1], [1])                                       // pass 1 A array
    A_yourFunc(234n,234n)                                      // pass 2 B bigint
    A_yourFunc(false, false)                                   // pass 3 C boolean
    A_yourFunc(new Date('2005-06-07'), new Date('2005-06-07')) // pass 4 D date
    A_yourFunc(a=>a+8, a=>a+8)                                 // pass 5 E function
    A_yourFunc(9, 9)                                           // pass 6 F number
    A_yourFunc({b:10}, {b:10})                                 // pass 7 G object
    A_yourFunc(/d/, /d/)                                       // pass 8 H regex
    A_yourFunc('an-str', 'an-str')                             // pass 9 I string
    A_yourFunc(Symbol('sym'), Symbol('sym'))                   // pass 10 J symbol
    A_yourFunc([11,12,13], [11,12,13])                         // pass 11 T multi array
    A_yourFunc(14,15,16)                                       // pass 12 U multi args
    A_yourFunc([[17,18,19]], [[17,18,19]])                     // pass 13 V multi in single
    A_yourFunc([20], [21])                                     // pass 14 W two singles
    A_yourFunc([22,23,24], [25,26,27])                         // pass 15 X two multis
    A_yourFunc({d:{}}, {d:{}})                                 // pass 16 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}], [{e:[28,{f:[29]}]}])       // pass 17 Z empty in object
    A_yourFunc(['',''], ['',''])                               // pass 18 0 empty - [str str]
    A_yourFunc([[],[]], [[],[]])                               // pass 19 1 empty - [arr arr]
    A_yourFunc([{},{}], [{},{}])                               // pass 20 2 empty - [obj obj]
    A_yourFunc({g:[]}, {h:[]})                                 // pass 21 3 empty - {arr arr}
    A_yourFunc({i:''}, {j:''})                                 // pass 22 4 empty - {str str}
    A_yourFunc({k:{}}, {l:{}})                                 // pass 23 5 empty - {obj obj}
    A_yourFunc([], [])                     // fail 1 K empty array
    A_yourFunc(new Date(''), new Date('')) // fail 2 L empty date
    A_yourFunc(NaN, NaN)                   // fail 3 M empty number
    A_yourFunc({}, {})                     // fail 4 N empty object
    A_yourFunc(/(?:)/, /(?:)/)             // fail 5 O empty regex
    A_yourFunc('', '')                     // fail 6 P empty string
    A_yourFunc(null, null)                 // fail 7 Q empty null
    A_yourFunc(undefined, undefined)       // fail 8 R empty undefined
    A_yourFunc()                           // fail 9 S empty nothing
                            expected_tests = 32
                            expected_fails = 9
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_emptyExtra().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_emptyExtra().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests








/*
B. Test single type with extra parameters
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function B_PRE_yourFunc() {
      return type_czech.check_emptyExtra(arguments, 'EMPTY-ERROR');
    }
                    B_yourFunc = type_czech.link(B_yourFunc, B_PRE_yourFunc) 
                    function B_yourFunc(){ }
    B_yourFunc(17)
    B_yourFunc(17, 'extra')
    B_yourFunc(17, 'extra', false)
    B_yourFunc('') // fail
                            expected_tests = 4
                            expected_fails = 1
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_typeExtra().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_typeExtra().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests






/*
C. Test single object with extra parameters
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function C_PRE_yourFunc() {
      return type_czech.check_emptyExtra(arguments, {a:'EMPTY-ERROR'});
    }
                    C_yourFunc = type_czech.link(C_yourFunc, C_PRE_yourFunc) 
                    function C_yourFunc(){ } 
    C_yourFunc({a:17})
    C_yourFunc({a:17, b:13})
    C_yourFunc({a:17, b:''})
    C_yourFunc({a:'', b:14})  //fail
    C_yourFunc({jj:17, b:13}) //fail
                            expected_tests = 5
                            expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_typeExtra().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_typeExtra().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests


/*
D. Test array with extra parameters
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function D_PRE_yourFunc() {
      return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR']);
    }
                    D_yourFunc = type_czech.link(D_yourFunc, D_PRE_yourFunc) 
                    function D_yourFunc(){ } 
    D_yourFunc(17, 17)
    D_yourFunc(17, 'abc', true)
    D_yourFunc('', 17) //fail
                            expected_tests = 3
                            expected_fails = 1
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_typeExtra().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_typeExtra().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests
