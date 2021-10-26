/*
## check_emptyVariadic()
A. Check variadic with array type - ['EMPTY-ERROR'].
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
      return type_czech.check_emptyVariadic(arguments, ['EMPTY-ERROR'])
    }
                    A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                    function A_yourFunc(){ }
    A_yourFunc([1])                      // pass 1 A array
    


/* &copy; 2021 Steen Hansen */
      