/*
## check_typeVariadic()
A. Check variadic with array type - ['number'].
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
       return type_czech.check_typeVariadic(arguments, ['number'])
     }
                    A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                    function A_yourFunc(){ }

/* &copy; 2021 Steen Hansen */


