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
  class First {
    constructor(f_name) {
      this.f_name = f_name;
      console.log(`CONS-First :${f_name}`);
    }

    firstMethod(a_date) {
      console.log(`RUN -firstMethod :${this.f_name} `, a_date);
      return a_date;
    }
  }

/**/  if (type_czech.is_active) {
/**/    function PRE_First(f_name) {
/**/      console.log('PRE -First');
/**/      const type_issue = type_czech.check_type(f_name, 'String');
/**/      if (type_issue) return type_issue;
/**/      return type_czech.check_empty(arguments, 'EMPTY-ERROR');
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_First(First) {
/**/      console.log('POST-First');
/**/      const first_return_signature = { f_name: 'String', firstMethod: 'Function' };
/**/      return type_czech.check_interface(First, first_return_signature);
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
/**/    First = type_czech.link(First, First_PREs, First_POSTs);
/**/  }

  return First;
};
