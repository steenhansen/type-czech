
/*
## countFails()

### A. Test countFails() works.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_yourFunc() { return 'found-an-error'; }
    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_yourFunc) 
    function A_yourFunc() { }

    type_czech.countBegin();

    if (type_czech.countFails() !== 0) throw 'A._countFails()_1';

    A_yourFunc();

    if (type_czech.countFails() !== 1) throw 'A._countFails()_2';

    if (typeof total_checks === 'undefined')
      console.log('no-issues: pass');
    else
      total_checks += 1;

