/* eslint-disable */

function TypeCzech_First() {
  if (type_czech.isActive()) {

    function PRE_check_First(spec){
      log(NL2+'PRE -First') 
      pre_first_sig = { f_name: 'string' }
      type_issue = type_czech.checkParam_typeExtra(spec, pre_first_sig)
      if (type_issue) return type_issue;
      return type_czech.checkParam_emptyExtra(spec, {f_name: 'EMPTY-ERROR' });
    }
    function POST_check_First(First){
      log(NL1+'POST-First') 
      return type_czech.check_interface(First, { firstMethod: 'function' })
    }
    function PRE_check_firstMethod(a_date){
      log('PRE -firstMethod') 
      return type_czech.checkParam_type(a_date, 'date')
    }
    function POST_check_firstMethod(a_date){
      log('POST-firstMethod') 
      return type_czech.checkParam_type(a_date, 'date')
    }



    First_PREs = { First: PRE_check_First, firstMethod: PRE_check_firstMethod }
    First_POSTs = { First: POST_check_First, firstMethod: POST_check_firstMethod }

    First = type_czech.linkUp(First, First_PREs, First_POSTs)
  }
}
