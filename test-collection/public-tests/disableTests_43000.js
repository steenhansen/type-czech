
/*
## disableTests()

### A. Test disableTests() stops.
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES', 'HIDE-INIT-MESSAGE')
function A_PRE_check_yourFunc() { }
A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
function A_yourFunc() { }

type_czech.enableTests();

if (type_czech.countTally() !== 0) throw 'A._disableTests()_1'

A_yourFunc();

if (type_czech.countTally() !== 1) throw 'A._disableTests()_2'

type_czech.disableTests();

A_yourFunc();

if (type_czech.countTally() !== 1) throw 'A._disableTests()_3'

if (typeof TEST_total_checks === 'undefined')
  console.log('no-issues: pass')
else
  TEST_total_checks += 1

/* &copy; 2021 Steen Hansen */