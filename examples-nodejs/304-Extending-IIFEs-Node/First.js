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

module.exports = function create_First(type_czech) {
  let First = (f_name) => (
    // eslint-disable-next-line no-shadow
    function First(f_name) {
      console.log(`CONS-First :${f_name}`);
      function firstMethod(a_date) {
        console.log(`RUN -firstMethod :${f_name} `, a_date);
        return a_date;
      }
      return { firstMethod };
    }
  )(f_name);

/**/  if (type_czech.isActive()) {
/**/    function PRE_First(f_name) {
/**/      console.log('PRE -First');
/**/      const type_issue = type_czech.check_type(f_name, 'string');
/**/      if (type_issue) return type_issue;
/**/      return type_czech.check_empty(arguments, 'EMPTY-ERROR');
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_First(First) {
/**/      console.log('POST-First');
/**/     return type_czech.check_type(First, { firstMethod: 'function' });
/**/    }
/**/
/**/    function PRE_firstMethod(a_date) {
/**/      console.log('PRE -firstMethod');
/**/      return type_czech.check_type(arguments, 'date');
/**/    }
/**/
/**/    function POST_firstMethod(a_date) {
/**/      console.log('POST-firstMethod');
/**/      return type_czech.check_type(arguments, 'date');
/**/    }
/**/
/**/    const First_PREs = { First: PRE_First, firstMethod: PRE_firstMethod };
/**/    const First_POSTs = { First: POST_First, firstMethod: POST_firstMethod };
/**/    First = type_czech.linkUp(First, First_PREs, First_POSTs);
/**/  }

  return First;
};
