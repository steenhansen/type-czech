
/*
## countTally()

### A. Test countTally() works.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')

    function A_PRE_yourFunc() { return 'found-an-error'; }
    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_yourFunc) 
    function A_yourFunc() { }

    function B_PRE_yourFunc() { return ''; }
    B_yourFunc = type_czech.link(B_yourFunc, B_PRE_yourFunc) 
    function B_yourFunc() { }

    
    
    type_czech.countBegin();

    if (type_czech.countTally() !== 0) throw 'A._countTally()_1';

    A_yourFunc();
    B_yourFunc();

    if (type_czech.countTally() !== 2) throw 'A._countTally()_2';

    if (typeof total_checks === 'undefined')
      console.log('no-issues: pass');
    else
      total_checks += 1;

