/* eslint-disable */

function TypeCzech_First() {
  if (type_czech.is_active) {

    function PRE_check_First(spec){
      log(NL2+'PRE -First') 
      pre_first_sig = { f_name: 'String' }
      type_issue = type_czech.check_typeExtra(arguments, pre_first_sig)
      if (type_issue) return type_issue;
      return type_czech.check_emptyExtra(arguments, {f_name: 'EMPTY-ERROR' });
    }
    function POST_check_First(First){
      log(NL1+'POST-First') 
      return type_czech.check_interface(First, { firstMethod: 'Function' })
    }
    function PRE_check_firstMethod(a_date){
      log('PRE -firstMethod') 
      return type_czech.check_type(arguments, 'Date')
    }
    function POST_check_firstMethod(a_date){
      log('POST-firstMethod') 
      return type_czech.check_type(arguments, 'Date')
    }



    First_PREs = { First: PRE_check_First, firstMethod: PRE_check_firstMethod }
    First_POSTs = { First: POST_check_First, firstMethod: POST_check_firstMethod }

    First = type_czech.link(First, First_PREs, First_POSTs)
  }
}
