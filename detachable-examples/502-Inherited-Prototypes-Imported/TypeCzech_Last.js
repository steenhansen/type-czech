/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */

function TypeCzech_Last() {
  if (type_czech.is_active) {
    function PRE_Last() { log(`${LEVEL_1}PRE-Last`); }
    function POST_Last() { log(`${LEVEL_1}POST-Last`); }
    function PRE_lastMethod() { log(`${LEVEL_1}PRE-lastMethod`); }
    function POST_lastMethod() { log(`${LEVEL_1}POST-lastMethod`); }

    Last_PREs = { Last: PRE_Last, lastMethod: PRE_lastMethod };
    Last_POSTs = { Last: POST_Last, lastMethod: POST_lastMethod };

    Last = type_czech.check(Last, Last_PREs, Last_POSTs);
  }
}
