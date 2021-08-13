/* eslint-disable */

function TypeCzech_First() {
  if (type_czech.is_active) {
    function PRE_First() { log(`${NL}PRE-First`); }
    function POST_First() { log(`${NL}POST-First`); }
    function PRE_firstMethod() { log(`${NL}PRE-firstMethod`); }
    function POST_firstMethod() { log(`${NL}POST-firstMethod`); }

    First_PREs = { First: PRE_First, firstMethod: PRE_firstMethod };
    First_POSTs = { First: POST_First, firstMethod: POST_firstMethod };

    First = type_czech.check(First, First_PREs, First_POSTs);
  }
}
