
/*
## check_typeEither()

### A. Check that a single parameter of any type is not empty.
*/
    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() {
      return type_czech.check_typeEither(arguments, [ "string", "number" ]);
    }
        




/* &copy; 2021 Steen Hansen */