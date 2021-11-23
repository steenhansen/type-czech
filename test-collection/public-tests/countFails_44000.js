
/*
## countFails()

### A. Test countFails() works.
*/

type_czech = TypeCzech('NO-ERROR-MESSAGES')
function A_PRE_check_yourFunc() { return 'found-an-error'; }
A_yourFunc = type_czech.linkUp(A_yourFunc, A_PRE_check_yourFunc) 
function A_yourFunc() { }

type_czech.enableTests();

if (type_czech.countFails() !== 0) throw 'A._countFails()_1';

A_yourFunc();

if (type_czech.countFails() !== 1) throw 'A._countFails()_2';

if (typeof TEST_total_checks === 'undefined')
  console.log('no-issues: pass');
else
  TEST_total_checks += 1;

/* &copy; 2021 Steen Hansen */