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
  function Last(l_name) {
    this.l_name = l_name;
    console.log(`CONS-Last :${l_name}`);
    this.lastMethod = function lastMethod(a_year) {
      console.log(`RUN -lastMethod :${a_year} ${this.f_name} ${this.l_name}`);
      return a_year;
    };
  }

/**/  if (type_czech.isActive()) {
/**/    function PRE_Last(l_name) {
/**/      console.log('PRE -Last');
/**/      const type_issue = type_czech.checkParam_type(l_name, 'string');
/**/      if (type_issue) return type_issue;
/**/      return type_czech.checkParam_empty(l_name, 'EMPTY-ERROR');
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_Last(Last) {
/**/      console.log('POST-Last');
/**/     return type_czech.check_interface(Last, { l_name: 'string', lastMethod: 'function' });
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
