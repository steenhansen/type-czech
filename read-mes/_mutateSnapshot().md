
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
                expected_fails = 32
    if (expected_tests !== total_tests) 
        throw `A. _mutateSnapshot().md ${expected_tests} expected_tests !== ${total_tests} total_tests`
    else if (expected_fails !== fail_tests) 
        throw `A. _mutateSnapshot().md ${expected_fails} expected_fails !== ${fail_tests} fail_tests`
    else if (typeof total_checks === 'undefined')
      console.log('no-issues: pass', expected_tests-expected_fails, ' fail', expected_fails)
    else
      total_checks += expected_tests

/*
### B. mutateSnapshot() check internal Type-Czech stack structure 
*/

    stack_str = ''
    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function B_PRE_check_recurseArr(growing_array){
      type_czech.mutateSnapshot('B_PRE_check_recurseArr', 'growing_array', growing_array)
      stack_str = type_czech._mutateStacks()
    }
    function B_POST_check_recurseArr(growing_array){
      return type_czech.check_mutated('B_PRE_check_recurseArr', 'growing_array')
    }
    B_recurseArr = type_czech.link(B_recurseArr, B_PRE_check_recurseArr, B_POST_check_recurseArr)
    function B_recurseArr(growing_array, stop_recurse){
      next_index = growing_array.length + 1
      if (next_index === stop_recurse){
        // do nothing
      } else{
        if (next_index === 4){
          growing_array[2] = 'THREE'                 // mutate previous entry
        }
        new_array = [...growing_array, next_index]
        B_recurseArr(new_array, stop_recurse)
      }
    }

     B_expected_first_stack = `{"B_PRE_check_recurseArr-growing_array":[{"collection_ref":[1],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1]","var_name":"growing_array"},{"collection_ref":[1,2],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2]","var_name":"growing_array"},{"collection_ref":[1,2,3],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2,3]","var_name":"growing_array"}]}`
    B_recurseArr([1], 4)
    if (stack_str === B_expected_first_stack){
      if (typeof total_checks === 'undefined')
        console.log('no-issues: pass')
      else
        total_checks += 1
    } else {
      throw `B. _mutateSnapshot().md first had un-expected stack list values`
    }



    B_expected_second_stack = `{"B_PRE_check_recurseArr-growing_array":[{"collection_ref":[1],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1]","var_name":"growing_array"},{"collection_ref":[1,2],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2]","var_name":"growing_array"},{"collection_ref":[1,2,"THREE"],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2,3]","var_name":"growing_array"},{"collection_ref":[1,2,"THREE",4],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2,\\\"THREE\\\",4]","var_name":"growing_array"},{"collection_ref":[1,2,"THREE",4,5],"func_name":"B_PRE_check_recurseArr","pre_collect_str":"[1,2,\\\"THREE\\\",4,5]","var_name":"growing_array"}]}`
    B_recurseArr([1], 6)
    if (B_expected_second_stack === stack_str){
      if (typeof total_checks === 'undefined')
        console.log('no-issues: pass')
      else
        total_checks += 1
    } else {
      console.log(stack_str)
      throw `B. _mutateSnapshot().md second had un-expected stack list values`
    }










/*
### C. mutateSnapshot() fail from non-string function name
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function C_PRE_check_yourFunc(c_collection) {
      type_czech.mutateSnapshot({a:12}, 'var-name', c_collection)
    }
    C_yourFunc = type_czech.link(C_yourFunc, C_PRE_check_yourFunc) 
    function C_yourFunc(c_collection) { }
    
    try {
      C_yourFunc([1,2,3])
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
      throw `C. _mutateSnapshot().md did not fail - VE@601`
    }

/*
### D. mutateSnapshot() fail from non-string variable name
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function D_PRE_check_yourFunc(d_collection) {
      type_czech.mutateSnapshot('func-name', {b:13}, d_collection)
    }
    D_yourFunc = type_czech.link(D_yourFunc, D_PRE_check_yourFunc) 
    function D_yourFunc(d_collection) { }
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
      throw `D. _mutateSnapshot().md did not fail - VE@602`
    }

/*
### E. mutateSnapshot() fail from scalar variable
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function E_PRE_check_yourFunc(e_scalar) {
      type_czech.mutateSnapshot('func-name', 'var-name', 'not a collection')
    }
    E_yourFunc = type_czech.link(E_yourFunc, E_PRE_check_yourFunc) 
    function E_yourFunc(e_scalar) { }
    try {
      E_yourFunc('a-scalar')
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
      throw `E. _mutateSnapshot().md did not fail - TC@56`
    }


/*
### F. mutateSnapshot() fail from not enough parameters
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function F_PRE_check_yourFunc(f_variable) {
      type_czech.mutateSnapshot('func-name', 'var-name')
    }
    F_yourFunc = type_czech.link(F_yourFunc, F_PRE_check_yourFunc) 
    function F_yourFunc(f_variable) { }
    try {
      F_yourFunc('a-scalar')
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
      throw `F. _mutateSnapshot().md did not fail - TC@55`
    }



/*
### G. mutateSnapshot() is ok with cyclic array
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function G_PRE_check_yourFunc(cyclic_array) {
      return type_czech.mutateSnapshot('func-name', 'var-name', cyclic_array)
    }
    G_yourFunc = type_czech.link(G_yourFunc, G_PRE_check_yourFunc) 
    function G_yourFunc(cyclic_array) { }
    try {
      cyclic_array = []
      cyclic_array[0] = cyclic_array
      G_yourFunc(cyclic_array)
      is_correct = true
    } catch (e) {
      console.log('e', e)
      is_correct = false
    }
    if (is_correct){
      if (typeof total_checks === 'undefined')
        console.log('no-issues: pass')
      else
        total_checks += 1
    } else {
      throw `G. _mutateSnapshot().md could not handle cyclic array`
    }


/*
### H. mutateSnapshot() is ok with cyclic object
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function H_PRE_check_yourFunc(cyclic_object) {
      return type_czech.mutateSnapshot('func-name', 'var-name', cyclic_object)
    }
    H_yourFunc = type_czech.link(H_yourFunc, H_PRE_check_yourFunc) 
    function H_yourFunc(cyclic_array) { }
    try {
      cyclic_object = {}
      cyclic_object.a = cyclic_object
      H_yourFunc(cyclic_object)
      is_correct = true
    } catch (e) {
      console.log('e', e)
      is_correct = false
    }
    if (is_correct){
      if (typeof total_checks === 'undefined')
        console.log('no-issues: pass')
      else
        total_checks += 1
    } else {
      throw `H. _mutateSnapshot().md could not handle cyclic object`
    }



&copy; 2021 Steen Hansen
