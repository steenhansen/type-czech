/* eslint-disable */

function TypeCzech_Last() {
  if (type_czech.isActive()) {

    function PRE_check_Last(spec){
      log(LEVEL_1+'PRE-Last') 
      pre_last_sig = { f_name: 'string', l_name: 'string' }
      type_issue = type_czech.check_typeExtra(arguments, pre_last_sig)
      if (type_issue) return type_issue;
      return type_czech.check_emptyExtra(arguments, {l_name: 'EMPTY-ERROR' });
    }
    function POST_check_Last(Last){
      log(LEVEL_1+"POST-Last") 
      post_last_sig = {firstMethod:'function', lastMethod:'function'}
      return type_czech.check_interface(Last, post_last_sig)
    }
    function PRE_check_lastMethod(a_year){
      log(LEVEL_1+"PRE -lastMethod")
      return type_czech.check_type(arguments, 'number')
    }
    function POST_check_lastMethod(a_year){
      log(LEVEL_1+"POST-lastMethod") 
      return type_czech.check_type(arguments, 'number')
    }


    Last_PREs = { Last: PRE_check_Last, lastMethod: PRE_check_lastMethod }
    Last_POSTs = { Last: POST_check_Last, lastMethod: POST_check_lastMethod }

    Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs)
  }
}
