
/*
## check_empty()

### A. Test check_empty() with all parameter types.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function PRE_check_yourFunc() {
      return type_czech.check_empty(arguments, 'EMPTY-ERROR');
    }
                yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 
                function yourFunc(){ }

    yourFunc([1])                           // pass 1 A array
    yourFunc(234n)                          // pass 2 B bigint
    yourFunc(false)                         // pass 3 C boolean
    yourFunc(new Date('2005-06-07'))        // pass 4 D date
    yourFunc(a=>a+8)                        // pass 5 E function
    yourFunc(9)                             // pass 6 F number
    yourFunc({b:10})                        // pass 7 G object
    yourFunc(/d/)                           // pass 8 H regex
    yourFunc('an-str')                      // pass 9 I string
    yourFunc(Symbol('sym'))                 // pass 10 J symbol
    yourFunc([[17,18,19]])                  // pass 11 V multi in single
    yourFunc({d:{}})                        // pass 12 Y empty in object
    yourFunc([{e:[28,{f:[29]}]}])           // pass 13 Z empty in object
    yourFunc([])                      // fail 1 K empty array
    yourFunc(new Date(''))            // fail 2 L empty date
    yourFunc(NaN)                     // fail 3 M empty number
    yourFunc({})                      // fail 4 N empty object
    yourFunc(/(?:)/)                  // fail 5 O empty regex
    yourFunc('')                      // fail 6 P empty string
    yourFunc(null)                    // fail 7 Q empty null
    yourFunc(undefined)               // fail 8 R empty undefined
    yourFunc()                        // fail 9 S empty nothing
    yourFunc([11,12,13])              // fail 10 T multi array
    yourFunc(14,15,16)                // fail 11 U multi args
    yourFunc([20], [21])              // fail 12 W two singles
    yourFunc([22,23,24], [25,26,27])  // fail 13 X two multis
    yourFunc(['',''] )                // fail 14 0 empty - [str str]
    yourFunc([[],[]] )                // fail 15 1 empty - [arr arr]
    yourFunc([{},{}] )                // fail 16 2 empty - [obj obj]
    yourFunc({g:[]},{h:[]})           // fail 17 3 empty - {arr arr}
    yourFunc({i:''},{j:''})           // fail 18 4 empty - {str str}
    yourFunc({k:{}},{l:{}})           // fail 19 5 empty - {obj obj}
                            expected_tests = 32
                            expected_fails = 19
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_empty().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_empty().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests



/*
### B. Test check_empty() with single 'EMPTY-ERROR'
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function B_PRE_check_yourFunc() {
      return type_czech.check_empty(arguments, 'EMPTY-ERROR')
    }
            B_yourFunc = type_czech.link(B_yourFunc, B_PRE_check_yourFunc) 
            function B_yourFunc(){ }  
    B_yourFunc([1])                    // pass 1 not empty
    B_yourFunc(new Date('1999-01-01')) // pass 2 not empty
    B_yourFunc(1)                      // pass 3 not empty
    B_yourFunc({a:1})                  // pass 4 not empty
    B_yourFunc(/d/)                    // pass 5 not empty
    B_yourFunc('a-string')             // pass 6 not empty
    B_yourFunc([''])                   // pass 7 not empty
    B_yourFunc([[]])                   // pass 8 not empty
    B_yourFunc({a:{}})                 // pass 9 not empty
    B_yourFunc([{}])                   // pass 10 not empty
    B_yourFunc({a:[]})                 // pass 11 not empty
    B_yourFunc(0n)                     // pass 12 cannot be empty
    B_yourFunc(false)                  // pass 13 cannot be empty
    B_yourFunc(x=>x)                   // pass 14 cannot be empty
    B_yourFunc(Symbol())               // pass 15 cannot be empty
    B_yourFunc(null)           // fail 1 is empty
    B_yourFunc(undefined)      // fail 2 is empty
    B_yourFunc('')             // fail 3 is empty
    B_yourFunc(NaN)            // fail 4 is empty
    B_yourFunc(new Date(''))   // fail 5 is empty
    B_yourFunc(new RegExp('')) // fail 6 is empty
    B_yourFunc(/(?:)/)         // fail 7 is empty
    B_yourFunc([])             // fail 8 is empty
    B_yourFunc({})             // fail 9 is empty
    B_yourFunc(1,2)            // fail 10 extra parameter 
                            expected_tests = 25
                            expected_fails = 10
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `B. _check_empty().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `B. _check_empty().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests



/*
### C. Test check_empty() with arrays of one type ['EMPTY-ERROR']
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function C_PRE_check_yourFunc() {
      return type_czech.check_empty(arguments, ['EMPTY-ERROR'])
    }
            C_yourFunc = type_czech.link(C_yourFunc, C_PRE_check_yourFunc) 
            function C_yourFunc(){ }
    C_yourFunc([1])              // pass 1
    C_yourFunc(['a-str'])        // pass 2
    C_yourFunc([[[[[[0]]]]]])    // pass 3
    C_yourFunc([{a:{b:{c:{}}}}]) // pass 4
    C_yourFunc([{a:{}}])         // pass 5
    C_yourFunc()            // fail 1
    C_yourFunc(1)           // fail 2
    C_yourFunc(1,2)         // fail 3 extra parameter
    C_yourFunc([])          // fail 4
    C_yourFunc({})          // fail 5
    C_yourFunc([{}])        // fail 6
    C_yourFunc([[]])        // fail 7
    C_yourFunc({a:[]})      // fail 8
    C_yourFunc(undefined)   // fail 9
    C_yourFunc(null)        // fail 10
    C_yourFunc(NaN)         // fail 11
    C_yourFunc('')          // fail 12
    C_yourFunc([undefined]) // fail 13
    C_yourFunc([null])      // fail 14
    C_yourFunc([NaN])       // fail 15
    C_yourFunc([''])        // fail 15
                            expected_tests = 21
                            expected_fails = 16
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `C. _check_empty().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `C. _check_empty().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

















/*
### D. Test check_empty() with single {a:'EMPTY-ERROR'}   NOT DONE
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function D_PRE_check_yourFunc() {
      return type_czech.check_empty(arguments, {a:'EMPTY-ERROR'})
    }
            D_yourFunc = type_czech.link(D_yourFunc, D_PRE_check_yourFunc) 
            function D_yourFunc(){ }
    D_yourFunc({a:[1]})              // pass 1
    D_yourFunc({a:['a-str']})        // pass 2
    D_yourFunc({a:[[[[[[0]]]]]]})    // pass 3
    D_yourFunc({a:[{a:{b:{c:{}}}}]}) // pass 4
    D_yourFunc({a:[{a:{}}]})         // pass 5
    D_yourFunc({a:1})                // pass 6
    D_yourFunc({a:[{}]})             // fail 7
    D_yourFunc({a:[[]]})             // fail 8
    D_yourFunc({a:{a:[]}})           // fail 9
    D_yourFunc({a:1, b:2})    // fail 1 
    D_yourFunc({a:{}})        // fail 2
    D_yourFunc({a:''})        // fail 3
    D_yourFunc({a:[]})        // fail 4
    D_yourFunc({a:undefined}) // fail 5
    D_yourFunc({a:null})      // fail 6
    D_yourFunc({a:NaN})       // fail 7
                            expected_tests = 16
                            expected_fails = 7
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `D. _check_empty().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `D. _check_empty().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests




/*
### E. Test check_empty() with arrays of one type ['EMPTY-OK', 'EMPTY-ERROR']
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function E_PRE_check_yourFunc() {
      return type_czech.check_empty(arguments,  ['EMPTY-OK', 'EMPTY-ERROR'])
    }
            E_yourFunc = type_czech.link(E_yourFunc, E_PRE_check_yourFunc) 
            function E_yourFunc(){ }
    E_yourFunc(2,3)           // pass 1
    E_yourFunc(2,[{}])        // pass 2
    E_yourFunc(2,[[]])        // pass 3
    E_yourFunc(2,{a:[]})      // pass 4
    E_yourFunc(2,[undefined]) // pass 5
    E_yourFunc(2,[null])      // pass 6
    E_yourFunc(2,[NaN])       // pass 7
    E_yourFunc(2,[''])        // pass 8
    E_yourFunc(2,undefined)        // fail 1
    E_yourFunc(2,null)             // fail 2
    E_yourFunc(2,NaN)              // fail 3
    E_yourFunc(2,'')               // fail 4
    E_yourFunc(2,[])               // fail 5
    E_yourFunc(2,{})               // fail 6
                            expected_tests = 14
                            expected_fails = 6
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `E. _check_empty().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `E. _check_empty().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

&copy; 2021 Steen Hansen      