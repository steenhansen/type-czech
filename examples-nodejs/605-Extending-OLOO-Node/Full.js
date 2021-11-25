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
  function Full(salu, f_name, l_name) {
    const FULL_TEMPLATE = {
      oloo_type: 'Full',
      fullMethod(a_book) {
        console.log(`RUN -fullMethod :${a_book} ${this.salu} ${this.l_name}`);
        return a_book;
      },
      showName() {
        console.log('Name: ', this.salu, this.f_name, this.l_name, this.oloo_type);
      },
    };
    const last = Last(f_name, l_name);
    Object.setPrototypeOf(FULL_TEMPLATE, last);
    const full_object = Object.create(FULL_TEMPLATE);
    full_object.salu = salu;
    console.log(`CONS-Full :${salu}`);
    return full_object;
  }

/**/  if (type_czech.isActive()) {
/**/    function PRE_Full(salu, f_name, l_name) {
/**/      console.log('PRE -Full');
/**/      const type_issue = type_czech.checkParam_type([salu, f_name, l_name], ['string', 'string', 'string']);
/**/      if (type_issue) return type_issue;
/**/      const valid_salu = ['Ms', 'Mx', 'Mr'].includes(salu);
/**/      if (!valid_salu) return 'Error, not one of Ms/Mx/Mr';
/**/    }
/**/
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_Full(Full) {
/**/      console.log('POST-Full');
/**/      return type_czech.check_interface(Full, { salu: 'string', fullMethod: 'function' });
/**/     }
/**/
/**/    function PRE_fullMethod(a_book) {
/**/      console.log('PRE -fullMethod');
/**/      return type_czech.checkParam_type(a_book, 'string');
/**/    }
/**/
/**/    function POST_fullMethod(a_book) {
/**/      console.log('POST-fullMethod');
/**/      return type_czech.checkParam_type(a_book, 'string');
/**/    }
/**/
/**/    const Full_PREs = { Full: PRE_Full, fullMethod: PRE_fullMethod };
/**/    const Full_POSTs = { Full: POST_Full, fullMethod: POST_fullMethod };
/**/    Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs);
/**/  }

  return Full;
};
