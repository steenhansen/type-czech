
/*
## countEnd()

### A. Test countEnd() stops.
*/

    type_czech = TypeCzech('NO-ERROR-MESSAGES')
    function A_PRE_yourFunc() { }
    A_yourFunc = type_czech.link(A_yourFunc, A_PRE_yourFunc) 
    function A_yourFunc() { }

    type_czech.countBegin();

    if (type_czech.countTally() !== 0) throw 'A._countEnd()_1'

    A_yourFunc();

    if (type_czech.countTally() !== 1) throw 'A._countEnd()_2'

    type_czech.countEnd();

    A_yourFunc();

    if (type_czech.countTally() !== 1) throw 'A._countEnd()_3'

    if (typeof total_checks === 'undefined')
      console.log('no-issues: pass')
    else
      total_checks += 1
