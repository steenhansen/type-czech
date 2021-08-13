/* eslint-disable */

function TypeCzech_Full() {
  if (type_czech.is_active) {
    function PRE_Full() { log(`${LEVEL_2}PRE-Full`); }
    function POST_Full() { log(`${LEVEL_2}POST-Full`); }
    function PRE_fullMethod() { log(`${LEVEL_2}PRE-fullMethod`); }
    function POST_fullMethod() { log(`${LEVEL_2}POST-fullMethod`); }

    Full_PREs = { Full: PRE_Full, fullMethod: PRE_fullMethod };
    Full_POSTs = { Full: POST_Full, fullMethod: POST_fullMethod };

    Full = type_czech.check(Full, Full_PREs, Full_POSTs);
  }
}
