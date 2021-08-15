/* eslint-disable */

function TypeCzech_First() {
  First = init_First() // NB init_First() must be in global scope
  if (type_czech.is_active) {
    function PRE_First(f_name) { log(`${NL}PRE-First`) }
    function POST_First(First) { log(`${NL}POST-First`) }
    function PRE_firstMethod(a_date) { log(`${NL}PRE-firstMethod`) }
    function POST_firstMethod() { log(`${NL}POST-firstMethod`) }

    First_PREs = { First: PRE_First, firstMethod: PRE_firstMethod }
    First_POSTs = { First: POST_First, firstMethod: POST_firstMethod }
    First = type_czech.check(First, First_PREs, First_POSTs)
  }
}
