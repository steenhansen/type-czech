/* eslint-disable prefer-template */
/* eslint-disable no-undef */

module.exports = function create_Last(First, Last, Full) {
  const { TypeCzech } = require('../TypeCzech.js');
//  console.log('tttttttt', First)
const LEVEL_1 = '\n' + '________';
const LEVEL_2 = '\n' + '................';

  //if (typeof TypeCzech === 'function') {
    //console.log('vvvv', TypeCzech)
  //  check_linkUp_first_last_full = () => {
      type_czech = TypeCzech('LOG-ERRORS');

      function PRE_check_First() { console.log('PRE -First'); }
      function POST_check_First() { console.log('POST-First'); }
      function PRE_check_firstMethod() { console.log('PRE-firstMethod'); }
      function POST_check_firstMethod() { console.log('POST-firstMethod'); }
      const First_PREs = { First: PRE_check_First, firstMethod: PRE_check_firstMethod };
      const First_POSTs = { First: POST_check_First, firstMethod: POST_check_firstMethod };
      First = type_czech.linkUp(First, First_PREs, First_POSTs);

      function PRE_check_Last() { console.log(LEVEL_1 + 'PRE-Last'); }
      function POST_check_Last() { console.log(LEVEL_1 + 'POST-Last'); }
      function PRE_check_lastMethod() { console.log(LEVEL_1 + 'PRE -lastMethod'); }
      function POST_check_lastMethod() { console.log(LEVEL_1 + 'POST-lastMethod'); }
      const Last_PREs = { Last: PRE_check_Last, lastMethod: PRE_check_lastMethod };
      const Last_POSTs = { Last: POST_check_Last, lastMethod: POST_check_lastMethod };
      Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs);

      function PRE_check_Full() { console.log(LEVEL_2 + 'PRE-Full'); }
      function POST_check_Full() { console.log(LEVEL_2 + 'POST-Full'); }
      function PRE_check_fullMethod() { console.log(LEVEL_2 + 'PRE -fullMethod'); }
      function POST_check_fullMethod() { console.log(LEVEL_2 + 'POST-fullMethod'); }
      const Full_PREs = { Full: PRE_check_Full, fullMethod: PRE_check_fullMethod };
      const Full_POSTs = { Full: POST_check_Full, fullMethod: POST_check_fullMethod };
      Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs);
   // };
 /// } else {
  //  check_linkUp_first_last_full = (_) => _;
 // }
 // console.log('gggggggggg', check_linkUp_first_last_full)
  return {First, Last, Full};
};