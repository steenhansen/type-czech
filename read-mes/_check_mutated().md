/*
## check_mutated() 


### A. Check check_mutated() with all parameter types. 
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    fail_count = 0
    function A_PRE_yourFunc(the_arg) {
      try {
        return type_czech.check_mutated(the_arg, the_arg)
      } catch (e) {
        expected_start = 'No record of an entry for mutateSnapshot('
        if (e.startsWith(expected_start))
          fail_count++ ///console.log('e', e)
      }
    }
                A_yourFunc = type_czech.link(A_yourFunc, A_PRE_yourFunc) 
                function A_yourFunc(){ }

    A_yourFunc([1])                    // fail 1 A array
    A_yourFunc(234n)                   // fail 2 B bigint
    A_yourFunc(false)                  // fail 3 C boolean
    A_yourFunc(new Date('2005-06-07')) // fail 4 D date
    A_yourFunc(a=>a+8)                 // fail 5 E function
    A_yourFunc(9)                      // fail 6 F number
    A_yourFunc({b:10})                 // fail 7 G object
    A_yourFunc(/d/)                    // fail 8 H regex
    A_yourFunc('an-str')               // fail 9 I string
    A_yourFunc(Symbol('sym'))          // fail 10 J symbol
    A_yourFunc([])                     // fail 11 K empty array
    A_yourFunc(new Date(''))           // fail 12 L empty date
    A_yourFunc(NaN)                    // fail 13 M empty number
    A_yourFunc({})                     // fail 14 N empty object
    A_yourFunc(/(?:)/)                 // fail 15 O empty regex
    A_yourFunc('')                     // fail 16 P empty string
    A_yourFunc(null)                   // fail 17 Q empty null
    A_yourFunc(undefined)              // fail 18 R empty undefined
    A_yourFunc()                       // fail 19 S empty nothing
    A_yourFunc([11,12,13])             // fail 20 T multi array
    A_yourFunc(14,15,16)               // fail 21 U multi args
    A_yourFunc([[17,18,19]])           // fail 22 V multi in single
    A_yourFunc([20], [21])             // fail 23 W two singles
    A_yourFunc([22,23,24], [25,26,27]) // fail 24 X two multis
    A_yourFunc({d:{}})                 // fail 25 Y empty in object
    A_yourFunc([{e:[28,{f:[29]}]}])    // fail 26 Z empty in object
    A_yourFunc(['',''] )               // fail 27 0 empty - [str str]
    A_yourFunc([[],[]] )               // fail 28 1 empty - [arr arr]
    A_yourFunc([{},{}] )               // fail 29 2 empty - [obj obj]
    A_yourFunc({g:[]},{h:[]})          // fail 30 3 empty - {arr arr}
    A_yourFunc({i:''},{j:''})          // fail 31 4 empty - {str str}
    A_yourFunc({k:{}},{l:{}})          // fail 32 5 empty - {obj obj}
                expected_tests = 32
                expected_fails = 32
    //fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `A. _check_mutated().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_count) 
        throw `A. _check_mutated().md ${expected_fails} expected_fails !== ${fail_count} fail_count`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests



/*
### B. check_mutated() fail from extra element in array or object
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function B_PRE_yourFunc(b_collection) {
      type_czech.mutateSnapshot('B_PRE_yourFunc', 'b_collection', b_collection)
    }
    function B_POST_yourFunc() {
      return type_czech.check_mutated('B_PRE_yourFunc', 'b_collection')
    }
    B_yourFunc = type_czech.link(B_yourFunc, B_PRE_yourFunc, B_POST_yourFunc) 

    function B_yourFunc(b_collection, change_function){
      change_function(b_collection)
    }

      B_yourFunc([1,2,3], x=>{ x.push('four'); x.pop() }) // pass 1,2
      B_yourFunc([1,2,3], x=>x)                           // pass 3,4
      B_yourFunc({a:1}, x=> { x.a=2; x.a=1})              // pass 5,6
      B_yourFunc({a:1}, x=>x)                             // pass 7,8

      B_yourFunc([1,2,3], x=> x.pop())        // fail 1
      B_yourFunc([1,2,3], x=> x.push('four')) // fail 2
      B_yourFunc([1,2,3], x=> x[1]=5)         // fail 3
      B_yourFunc({a:1, b:2}, x=> delete x.b)  // fail 4
      B_yourFunc({a:1}, x=> x.b=2)            // fail 5
      B_yourFunc({a:1}, x=> x.a=2)            // fail 6
                expected_tests = 20
                expected_fails = 6
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
    if (expected_tests !== total_tests) 
        throw `B. _check_mutated().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `B. _check_mutated().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests










/*
### C. check_mutated() fail from recursive calls
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function C_PRE_recurseArr(growing_array){
      type_czech.mutateSnapshot('C_PRE_recurseArr', 'growing_array', growing_array)
    }
    
    function C_POST_recurseArr(growing_array){
      return type_czech.check_mutated('C_PRE_recurseArr', 'growing_array')
    }
    
    C_recurseArr = type_czech.link(C_recurseArr, C_PRE_recurseArr, C_POST_recurseArr)

    function C_recurseArr(growing_array, stop_recurse){
      next_index = growing_array.length + 1
      if (next_index === stop_recurse){
        // do nothing
      } else{
        if (next_index === 4){
          growing_array[2] = 'THREE'                 // mutate previous entry
        }
        new_array = [...growing_array, next_index]
        C_recurseArr(new_array, stop_recurse)
      }
    }
    C_recurseArr([1], 4)
    C_recurseArr([1], 6)
    fail_tests = type_czech.countFails()
    total_tests = type_czech.countTally()
                expected_tests = 16
                expected_fails = 1
    if (expected_tests !== total_tests) 
        throw `C. _check_mutated().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `C. _check_mutated().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests





/*
### D. check_mutated() fail from extra error-param
*/

    type_czech = TypeCzech('LOG-ERRORS')
    function D_PRE_yourFunc(b_collection) {
      type_czech.mutateSnapshot('D_PRE_yourFunc', 'b_collection', b_collection)
    }
    function D_POST_yourFunc() {
      return type_czech.check_mutated('D_PRE_yourFunc', 'b_collection', 'error-param')
    }
    D_yourFunc = type_czech.link(D_yourFunc, D_PRE_yourFunc, D_POST_yourFunc) 

    function D_yourFunc(b_collection){ }

    try {
      D_yourFunc([1,2,3]) 
      is_correct = false
    } catch (e) {
      is_correct = true
    }

    if (is_correct){
      if (typeof total_checks === 'undefined')
        console.log('no-issues: pass')
      else
        total_checks += 1
    } else {
      throw `D. _mutateSnapshot().md did not fail - TC@18`
    }