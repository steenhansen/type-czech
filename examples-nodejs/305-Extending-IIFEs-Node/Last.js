/* eslint-disable wrap-iife */
/* eslint-disable no-func-assign */
/* eslint-disable object-property-newline */
/* eslint-disable object-curly-newline */
/* eslint-disable no-class-assign */
/* eslint-disable indent */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-inner-declarations */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

module.exports = function create_Last(type_czech, First) {
  let Last = (f_name, l_name) => (
    // eslint-disable-next-line no-shadow
    function Last(f_name, l_name) {
      const first = First(f_name);
      console.log(`CONS-Last :${f_name} ${l_name}`);
      function lastMethod(a_year) {
        console.log(`RUN -lastMethod :${a_year} ${f_name} ${l_name}`);
        return a_year;
      }
      return { lastMethod, firstMethod: first.firstMethod };
    }
    )(f_name, l_name);

/**/  if (type_czech.isActive()) {
/**/    function PRE_Last(f_name, l_name) {
/**/      console.log('PRE -Last');
/**/      const type_issue = type_czech.checkParam_type([f_name, l_name], ['string', 'string']);
/**/      if (type_issue) return type_issue;
/**/      return type_czech.checkParam_empty([f_name, l_name], ['EMPTY-ERROR', 'EMPTY-ERROR']);
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_Last(Last) {
/**/      console.log('POST-Last');
/**/     return type_czech.checkParam_type(Last, { firstMethod: 'function', lastMethod: 'function' });
/**/    }
/**/
/**/    function PRE_lastMethod(a_year) {
/**/      console.log('PRE -lastMethod');
/**/      return type_czech.checkParam_type(a_year, 'number');
/**/    }
/**/
/**/    function POST_lastMethod(a_year) {
/**/      console.log('POST-lastMethod');
/**/      return type_czech.checkParam_type(a_year, 'number');
/**/    }
/**/
/**/    const Last_PREs = { Last: PRE_Last, lastMethod: PRE_lastMethod };
/**/    const Last_POSTs = { Last: POST_Last, lastMethod: POST_lastMethod };
/**/    Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs);
/**/  }

  return Last;
};
