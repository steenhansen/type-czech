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
  function Last(f_name, l_name) {
    const LAST_TEMPLATE = {
      oloo_type: 'Last',
      lastMethod(a_year) {
        console.log(`RUN -lastMethod :${a_year} ${this.f_name} ${this.l_name}`);
        return a_year;
      },
    };
    const first = First(f_name);
    Object.setPrototypeOf(LAST_TEMPLATE, first);
    const last_object = Object.create(LAST_TEMPLATE);
    last_object.l_name = l_name;
    console.log(`CONS-Last :${l_name}`);
    return last_object;
  }

/**/  if (type_czech.isActive()) {
/**/    function PRE_Last(f_name, l_name) {
/**/      console.log('PRE -Last');
/**/      const type_issue = type_czech.checkParam_type([f_name, l_name], ['string', 'string']);
/**/      if (type_issue) return type_issue;
/**/      return type_czech.checkParam_empty(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR']);
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_Last(Last) {
/**/      console.log('POST-Last');
/**/      return type_czech.check_interface(Last, { l_name: 'string', lastMethod: 'function' });
/**/    }
/**/
/**/    function PRE_lastMethod(a_year) {
/**/      console.log('PRE -lastMethod');
/**/      return type_czech.checkParam_type(arguments, 'number');
/**/    }
/**/
/**/    function POST_lastMethod(a_year) {
/**/      console.log('POST-lastMethod');
/**/      return type_czech.checkParam_type(arguments, 'number');
/**/    }
/**/
/**/    const Last_PREs = { Last: PRE_Last, lastMethod: PRE_lastMethod };
/**/    const Last_POSTs = { Last: POST_Last, lastMethod: POST_lastMethod };
/**/    Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs);
/**/  }

  return Last;
};
