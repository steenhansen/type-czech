/* eslint-disable */

function TypeCzech_Last() {
  if (type_czech.isActive()) {

    function PRE_check_Last(f_name, l_name){
      log(LEVEL_1+'PRE-Last') 
      type_issue = type_czech.check_type([f_name, l_name], ['string', 'string'])
      if (type_issue) return type_issue;
      return type_czech.check_empty(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR']);
    }
    function POST_check_Last(Last){
      log(LEVEL_1+"POST-Last")
      post_last_signature = { firstMethod: 'function', lastMethod: 'function' }
      return type_czech.check_type(Last, post_last_signature)
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
