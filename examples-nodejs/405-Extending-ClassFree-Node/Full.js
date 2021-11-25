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

module.exports = function create_Full(type_czech, Last) {
  function Full(spec) {
    const { f_name, l_name, salu } = spec;
    console.log(`CONS-Full :${salu} ${f_name} ${l_name}`);
    const { firstMethod, lastMethod } = Last(spec);
    function fullMethod(a_book) {
      console.log(`RUN -fullMethod :${a_book} ${salu} ${l_name}`);
      return a_book;
    }
    function showName() {
      console.log('Name: ', salu, f_name, l_name);
    }
    const full_object = { firstMethod, lastMethod, fullMethod, showName };
    return Object.freeze(full_object);
  }

/**/  if (type_czech.isActive()) {
/**/    function PRE_Full(spec) {
/**/      console.log('PRE -Full');
/**/      const type_issue = type_czech.checkParam_type(spec, { salu: 'string', f_name: 'string', l_name: 'string' });
/**/      if (type_issue) return type_issue;
/**/      const valid_salu = ['Ms', 'Mx', 'Mr'].includes(spec.salu);
/**/      if (!valid_salu) return 'Error, not one of Ms/Mx/Mr';
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_Full(Full) {
/**/      console.log('POST-Full');
/**/      return type_czech.checkParam_type(Full, { firstMethod: 'function', lastMethod: 'function',
/**/                                        fullMethod: 'function', showName: 'function' });
/**/     }
/**/
/**/    function PRE_fullMethod(a_book) {
/**/      console.log('PRE -fullMethod');
/**/      return type_czech.checkParam_type(a_book, 'string');
/**/      }
/**/
/**/    function POST_fullMethod(a_book) {
/**/      console.log('POST-fullMethod');
/**/      return type_czech.checkParam_type(a_book, 'string');
/**/    }
/**/
/**/    const Full_PREs = { Full: PRE_Full, fullMethod: PRE_fullMethod };
/**/    const Full_POSTs = { Full: POST_Full, fullMethod: POST_fullMethod };
/**/    Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs);
/**/    }

  return Full;
};
