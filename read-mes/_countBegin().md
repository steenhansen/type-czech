
/*
## countBegin()

### A. Test countBegin() starts and counts.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_check_yourFunc() { }
    A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
    function A_yourFunc() { }

    type_czech.countBegin();

    if (type_czech.countTally() !== 0) throw 'A._countBegin()_1'

    A_yourFunc();

    if (type_czech.countTally() !== 1) throw 'A._countBegin()_2'

    if (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass')
    else
      TEST_total_checks += 1

/* &copy; 2021 Steen Hansen */