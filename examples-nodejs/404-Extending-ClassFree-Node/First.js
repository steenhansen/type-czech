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
  function First(spec) {
    const { f_name } = spec;
    console.log(`CONS-First :${f_name}`);
    function firstMethod(a_date) {
      console.log(`RUN -firstMethod :${f_name} `, a_date);
      return a_date;
    }
    const first_object = { firstMethod };
    return Object.freeze(first_object);
  }

/**/  if (type_czech.isActive()) {
/**/    function PRE_First(spec) {
/**/      console.log('PRE -First');
/**/      const pre_first_sig = { f_name: 'String' };
/**/      const type_issue = type_czech.check_typeExtra(arguments, pre_first_sig);
/**/      if (type_issue) return type_issue;
/**/      return type_czech.check_emptyExtra(arguments, { f_name: 'EMPTY-ERROR' });
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_First(First) {
/**/      console.log('POST-First');
/**/      return type_czech.check_interface(First, { firstMethod: 'Function' });
/**/    }
/**/
/**/    function PRE_firstMethod(a_date) {
/**/      console.log('PRE -firstMethod');
/**/      return type_czech.check_type(arguments, 'Date');
/**/    }
/**/
/**/    function POST_firstMethod(a_date) {
/**/      console.log('POST-firstMethod');
/**/      return type_czech.check_type(arguments, 'Date');
/**/    }
/**/
/**/    const First_PREs = { First: PRE_First, firstMethod: PRE_firstMethod };
/**/    const First_POSTs = { First: POST_First, firstMethod: POST_firstMethod };
/**/    First = type_czech.linkUp(First, First_PREs, First_POSTs);
/**/  }

  return First;
};
