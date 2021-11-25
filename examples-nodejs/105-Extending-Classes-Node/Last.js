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
  class Last extends First {
    constructor(f_name, l_name) {
      super(f_name);
      this.l_name = l_name;
      console.log(`CONS-Last :${f_name} ${l_name}`);
    }

    lastMethod(a_year) {
      const last_mess = `RUN -lastMethod :${a_year} ${this.f_name} ${this.l_name}`;
      console.log(last_mess);
      return a_year;
    }
  }

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
/**/      const last_return_signature = { f_name: 'string', l_name: 'string', firstMethod: 'function', lastMethod: 'function' };
/**/      return type_czech.check_interface(Last, last_return_signature);
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
