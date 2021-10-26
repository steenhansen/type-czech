
/*
## disableChecks()

### A. Test disableChecks() stops.
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES')
function A_PRE_check_yourFunc() { }
A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
function A_yourFunc() { }

type_czech.enableChecks();

if (type_czech.countTally() !== 0) throw 'A._disableChecks()_1'

A_yourFunc();

if (type_czech.countTally() !== 1) throw 'A._disableChecks()_2'

type_czech.disableChecks();

A_yourFunc();

if (type_czech.countTally() !== 1) throw 'A._disableChecks()_3'

if (typeof TEST_total_checks === 'undefined')
  console.log('no-issues: pass')
else
  TEST_total_checks += 1

/* &copy; 2021 Steen Hansen */