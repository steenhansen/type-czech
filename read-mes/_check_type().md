/*
## check_type() 


### A. Check check_type() with all parameter types. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, 'Number')
    }
                A_yourFunc = type_czech.link(A_yourFunc, A_PRE_check_yourFunc) 
                function A_yourFunc(){ }
    A_yourFunc(9)   // pass 1 F number
    A_yourFunc(NaN) // pass 2 M empty number
    A_yourFunc([1])                    // fail 1 A array
    A_yourFunc(234n)                   // fail 2 B bigint
    A_yourFunc(false)                  // fail 3 C boolean
    A_yourFunc(new Date('2005-06-07')) // fail 4 D date
    A_yourFunc(a=>a+8)                 // fail 5 E function
    A_yourFunc({b:10})                 // fail 6 G object
    A_yourFunc(/d/)                    // fail 7 H regex
    A_yourFunc('an-str')               // fail 8 I string
    A_yourFunc(Symbol('sym'))          // fail 9 J symbol
    A_yourFunc([])                     // fail 10 K empty array
    A_yourFunc(new Date(''))           // fail 11 L empty date
    A_yourFunc({})                     // fail 12 N empty object
    A_yourFunc(/(?:)/)                 // fail 13 O empty regex
    A_yourFunc('')                     // fail 14 P empty string
    A_yourFunc(null)                   // fail 15 Q empty null
    A_yourFunc(undefined)              // fail 16 R empty undefined
    A_yourFunc()                       // fail 17 S empty nothing
    A_yourFunc([11,12,13])             // fail 18 T multi array
    A_yourFunc(14,15,16)               // fail 19 U multi args
    A_yourFunc([[17,18,19]])           // fail 20 V multi in single
    A_yourFunc([20], [21])             // fail 21 W two singles
    A_yourFunc([22,23,24], [25,26,27]) // fail 22 X two multis
    A_yourFunc({d:{}})                 // fail 23 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])    // fail 24 Z empty in object
    A_yourFunc(['',''] )               // fail 25 0 empty - [str str]
    A_yourFunc([[],[]] )               // fail 26 1 empty - [arr arr]
    A_yourFunc([{},{}] )               // fail 27 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})          // fail 28 3 empty - {arr arr}
    A_yourFunc({i:''},{j:''})          // fail 29 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})          // fail 30 5 empty - {obj obj}
                expected_tests = 32
                expected_fails = 30
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### B. A Number and a Boolean followed by a Date. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function B_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, ['Number', 'Boolean', 'Date'])
    }
            B_yourFunc = type_czech.link(B_yourFunc, B_PRE_check_yourFunc) 
            function B_yourFunc(){ }
    B_yourFunc(1, false, new Date('1999-12-30') ) // pass 1
    B_yourFunc(1, false, new Date('1999-99-99') ) // pass 2
    B_yourFunc(1, false, new Date('1999-12-30'), 'too many' )  // fail 1
    B_yourFunc(1)                                              // fail 2
    B_yourFunc('one', false, new Date('1999-12-30') )          // fail 3
    B_yourFunc()                                               // fail 4
                expected_tests = 6
                expected_fails = 4
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `B. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `B. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### C. A single Number. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function C_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, 'Number')
    }
            C_yourFunc = type_czech.link(C_yourFunc, C_PRE_check_yourFunc) 
            function C_yourFunc(){ }
    C_yourFunc(1)   // pass 1
    C_yourFunc(NaN) // pass 2
    C_yourFunc('one')  // fail 1
    C_yourFunc(true)   // fail 2
    C_yourFunc()       // fail 3
    C_yourFunc(1,2,3)  // fail 4
                expected_tests = 6
                expected_fails = 4
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `C. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `C. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### D. Exactly two Numbers as arguments. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function D_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, ['Number', 'Number'])
    }
              D_yourFunc = type_czech.link(D_yourFunc, D_PRE_check_yourFunc) 
              function D_yourFunc(){ }
    D_yourFunc(1,2)         // pass 1
    D_yourFunc(NaN, NaN)    // pass 2
    D_yourFunc(1,2,3)   // fail 1
    D_yourFunc(1)       // fail 2
    D_yourFunc(1,'two') // fail 3
    D_yourFunc()        // fail 4
              expected_tests = 6
              expected_fails = 4
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `D. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `D. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests


/*
##E. One array of Numbers, with any number of elements; from 0 ... x elements.  
*/                                                       

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function E_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, ['Number'])
    }
            E_yourFunc = type_czech.link(E_yourFunc, E_PRE_check_yourFunc) 
            function E_yourFunc(){ }
    E_yourFunc([])                  // pass 1
    E_yourFunc([1])                 // pass 2
    E_yourFunc([1,2,3,4,5,6,7,8,9]) // pass 3
    E_yourFunc([1,2,3])             // pass 4
    E_yourFunc({})        // fail 1
    E_yourFunc([[1,2,3]]) // fail 2
    E_yourFunc([1], [2])  // fail 3
    E_yourFunc()          // fail 4
    E_yourFunc('an-str')  // fail 5
    E_yourFunc(1)         // fail 6
    E_yourFunc(12,23,44)  // fail 7
                          expected_tests = 11
                          expected_fails = 7
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `E. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `E. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
###F. Two arrays of Numbers with exactly two elements each. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function F_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, [ ['Number', 'Number'], ['Number', 'Number'] ])
    }
              F_yourFunc = type_czech.link(F_yourFunc, F_PRE_check_yourFunc) 
              function F_yourFunc(){ }
    F_yourFunc([1,2], [3,4])           // pass 1
    F_yourFunc([NaN,NaN], [NaN,NaN])   // pass 2
    F_yourFunc([1], [3,4,4])        // fail 1
    F_yourFunc([1,2], [3,4], [5,6]) // fail 2
    F_yourFunc()                    // fail 3
                          expected_tests = 5
                          expected_fails = 3
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `F. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `F. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests


/*
G. One array of arrays of two Numbers.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function G_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, [ ['Number', 'Number'] ])
    }
            G_yourFunc = type_czech.link(G_yourFunc, G_PRE_check_yourFunc) 
            function G_yourFunc(){ }
    G_yourFunc([ [1,2] ])                      // pass 1
    G_yourFunc([ [1,2], [3,4] ])               // pass 2
    G_yourFunc([ [1,2], [3,4], [5,6], [7,8] ]) // pass 3
    G_yourFunc([ [1,2,3] ])                          // fail 1
    G_yourFunc([ [1] ])                              // fail 2
    G_yourFunc([ [1,2], [3,4], [5,6], [7,'X'] ])     // fail 3
    G_yourFunc()                                     // fail 4
                          expected_tests = 7
                          expected_fails = 4
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `G. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `G. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### H. One Array with any type of contents.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function H_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, 'Array')
    }
                H_yourFunc = type_czech.link(H_yourFunc, H_PRE_check_yourFunc) 
                function H_yourFunc(){ }
    H_yourFunc([])                          // pass 1
    H_yourFunc([1,2,3])                     // pass 2
    H_yourFunc([1, true, 'three'])          // pass 3
    H_yourFunc([[[[1]]], {a:{b:{c:true}}}]) // pass 4
    H_yourFunc()  // fail 1
    H_yourFunc(1) // fail 2
                          expected_tests = 6
                          expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `H. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `H. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### I. One Object with any type of contents.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function I_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, 'Object')
    }
            I_yourFunc = type_czech.link(I_yourFunc, I_PRE_check_yourFunc) 
            function I_yourFunc(){ }
    I_yourFunc({})     // pass 1
    I_yourFunc({a:{}}) // pass 2
    I_yourFunc()   // fail 1
    I_yourFunc([]) // fail 2      
                          expected_tests = 4
                          expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `I. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `I. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

      
/*
### J. One Objects with x and y keys that are Numbers. 
*/
    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function J_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, {x:'Number', y:'Number'})
    }
                    J_yourFunc = type_czech.link(J_yourFunc, J_PRE_check_yourFunc) 
                    function J_yourFunc(){ }
    J_yourFunc({x:0, y:1})  // pass 1
    J_yourFunc({x:0, y:false})  // fali 1
    J_yourFunc({x:0, xxx:1})    // fali 2
    J_yourFunc()                // fali 3
                          expected_tests = 4
                          expected_fails = 3
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `J. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `J. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests



/*
### K. One Array with any number of Objects with x and y keys that are Numbers.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function K_PRE_check_yourFunc() {
      return type_czech.check_type(arguments, [{x:'Number', y:'Number'}])
    }
              K_yourFunc = type_czech.link(K_yourFunc, K_PRE_check_yourFunc) 
              function K_yourFunc(){ }
    K_yourFunc([{x:0, y:1}])                         // pass 1
    K_yourFunc([{x:0, y:1}, {x:0, y:1}, {x:0, y:1}]) // pass 2
    K_yourFunc()                        // fail 1
                          expected_tests = 3
                          expected_fails = 1
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `K. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `K. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### L. Check only one parameter type of many. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function L_PRE_check_yourFunc(param_1, param_2, param_3) {
      return type_czech.check_type(param_2, 'Number')
    }
              L_yourFunc = type_czech.link(L_yourFunc, L_PRE_check_yourFunc) 
              function L_yourFunc(){ }
    L_yourFunc(1,2,3)           // pass 1
    L_yourFunc(false, 2, false) // pass 2
    L_yourFunc(false, 2)        // pass 3
    L_yourFunc()          // fail 1
    L_yourFunc(1,false,3) // fail 2
                          expected_tests = 5
                          expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `L. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `L. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### M. Check two parameter types of many, not using arguments object. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function M_PRE_check_yourFunc(param_1, param_2, param_3) {
      return type_czech.check_type([param_1, param_3], ['Number'])
    }
            M_yourFunc = type_czech.link(M_yourFunc, M_PRE_check_yourFunc) 
            function M_yourFunc(){ }
    M_yourFunc(1,2,3)                    // pass 1
    M_yourFunc(1, true, 3)               // pass 2
    M_yourFunc(1, true, 3, false, true)  // pass 3
    M_yourFunc()              // fail 4
    M_yourFunc(false,false,3) // fail 5
                          expected_tests = 5
                          expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `M. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `M. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests




/*
### N. Check two parameter types of many, using arguments object.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function N_PRE_check_yourFunc(param_1, param_2, param_3) {
      return type_czech.check_type(arguments, ['Number'])
    }
            N_yourFunc = type_czech.link(N_yourFunc, N_PRE_check_yourFunc) 
            function N_yourFunc(){ }
    N_yourFunc(1,2,3)                    // fail 1
    N_yourFunc(1, true, 3)               // fail 2
    N_yourFunc(1, true, 3, false, true)  // fail 3
    N_yourFunc()                         // fail 4
    N_yourFunc(false,false,3)            // fail 5
                          expected_tests = 5
                          expected_fails = 5
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `M. _check_type().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `M. _check_type().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if  (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests


&copy; 2021 Steen Hansen