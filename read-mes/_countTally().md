
/*
## countTally()

### A. Test countTally() works.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')

    function A_PRE_check_yourFunc() { return 'found-an-error'; }
    A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
    function A_yourFunc() { }

    function B_PRE_check_yourFunc() { return ''; }
    B_yourFunc = type_czech.linkUp(B_yourFunc, B_PRE_check_yourFunc) 
    function B_yourFunc() { }

    
    
    type_czech.countBegin();

    if (type_czech.countTally() !== 0) throw 'A._countTally()_1';

    A_yourFunc();
    B_yourFunc();

    if (type_czech.countTally() !== 2) throw 'A._countTally()_2';

    if (typeof TEST_total_checks === 'undefined')
      console.log('no-issues: pass');
    else
      TEST_total_checks += 1;

/* &copy; 2021 Steen Hansen */