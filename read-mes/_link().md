
/*
## link()

### A. PRE_yourFunc() warns about parameter issues before yourFunc() executes.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')

    function A_PRE_yourFunc() {
      if (steps !== 'start') throw 'A._link()_1'
      steps = 'in-pre'
    }

    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_yourFunc) 
  
    function A_yourFunc(){
      if (steps !== 'in-pre') throw 'A._link()_2'
      steps = 'in-func'
    }

    steps = 'start'
    A_yourFunc()
    if (steps !== 'in-func') throw 'A._link()_3'

    if (typeof total_checks === 'undefined')
      console.log('no-issues: pass')
    else
      total_checks += 1

/*
### B. PRE_yourFunc() warns about parameter issues, while POST_yourFunc() informs about result problems.
*/  
    type_czech = TypeCzech('NO-ERROR-MESSAGES')
      
    function B_PRE_yourFunc() {
      if (steps !== 'start') throw 'B._link()_1'
      steps = 'in-pre'
    }
    
    function B_POST_yourFunc() { 
      if (steps !== 'in-func') throw 'B._link()_3'
      steps = 'in-post'
    }
    
    B_yourFunc = type_czech.link(B_yourFunc, B_PRE_yourFunc, B_POST_yourFunc) 
  
    function B_yourFunc(){
      if (steps !== 'in-pre') throw 'B._link()_2'
      steps = 'in-func'
    }

    steps = 'start'
    B_yourFunc()
    if (steps !== 'in-post') throw 'B._link()_4'

    if (typeof total_checks === 'undefined')
      console.log('no-issues: pass')
    else
      total_checks += 1

/*
### C. Parameters are not addressed, only function results.
*/  
    type_czech = TypeCzech('NO-ERROR-MESSAGES')

    function C_POST_yourFunc(return_value) { 
      if (steps !== 'in-func') throw 'C._link()_2'
      steps = 'in-post'
    }

    C_yourFunc = type_czech.link(C_yourFunc, undefined, C_POST_yourFunc) 
  
    function C_yourFunc(){
      if (steps !== 'start') throw 'C._link()_1'
      steps = 'in-func'
    }

    steps = 'start'
    C_yourFunc()
    if (steps !== 'in-post') throw 'C._link()_3'

    if (typeof total_checks === 'undefined')
      console.log('no-issues: pass')
    else
      total_checks += 1


/*
### D. Check that a string matches regular expression.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')

    function D_PRE_yourFunc(a_word) {
      if (!a_word.match(/^.*[Yy].*$/))
        return `ERROR, '${a_word}' has no Y`
    }
    
    D_yourFunc = type_czech.link(D_yourFunc, D_PRE_yourFunc) 
  
    function D_yourFunc(a_word){ }

    D_yourFunc('  Y   ') // pass 1
    D_yourFunc('rhyme')  // pass 2
    D_yourFunc('       ')            // fail 1
    D_yourFunc('no sometimes vowel') // fail 2
                expected_tests = 4
                expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `D. _link().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `D. _link().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests


/*
## E. Check a parameter belongs to a set.
*/  
    type_czech = TypeCzech('NO-ERROR-MESSAGES')

    function E_PRE_yourFunc(a_number) {
      if (![2,3,5,7,11,13,17,19,23].includes(a_number)) 
        return `ERROR, '${a_number}' is not a small prime`
    }

    E_yourFunc = type_czech.link(E_yourFunc, E_PRE_yourFunc) 
  
    function E_yourFunc(a_number){ }

    E_yourFunc(7) // pass 1
    E_yourFunc(2) // pass 2
    E_yourFunc('no-match') // fail 3
    E_yourFunc(4)          // fail 3
                expected_tests = 4
                expected_fails = 2
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `E. _link().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `E. _link().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### F. Check that date is in the month of February.
*/  
    type_czech = TypeCzech('NO-ERROR-MESSAGES')
  
    function F_PRE_yourFunc(a_date) {
      try {
        if (a_date.getMonth()===1) 
          return ''
      } catch (e) { }
      return `ERROR, '${a_date}' is not in February`
    }
  
    F_yourFunc = type_czech.link(F_yourFunc, F_PRE_yourFunc) 

    function F_yourFunc(a_date){ }

    F_yourFunc( new Date('2001-02-02') ) // pass 1
    F_yourFunc( new Date('1914-02-02') ) // pass 2
    F_yourFunc( new Date('2021-01-02') )    // fail 3
    F_yourFunc( new Date('1917-03-02') )    // fail 4
    F_yourFunc('not-february')              // fail 5

                expected_tests = 5
                expected_fails = 3
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `F. _link().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `F. _link().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

