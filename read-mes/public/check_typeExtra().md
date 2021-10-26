
/*
## check_typeExtra()
A. Test every type.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
      return type_czech.check_typeExtra(arguments, ['number', 'number']);
    }
                    A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
                    function A_yourFunc(){ }
  



/*
B. Test single type with extra parameters
*/

/* &copy; 2021 Steen Hansen */