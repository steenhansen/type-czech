/* eslint-disable */

function TypeCzech_Last() {
  if (type_czech.isActive()) {

    function PRE_check_Last(l_name){ 
      log(LEVEL_1+'PRE-Last')
      type_issue = type_czech.check_type(l_name, 'String')
      if (type_issue) return type_issue;
      return type_czech.check_empty(arguments, 'EMPTY-ERROR');
    }
    function POST_check_Last(Last){
      log(LEVEL_1+"POST-Last")
      post_last_signature = { l_name: 'String', lastMethod: 'Function' }
      return type_czech.check_interface(Last, post_last_signature)
    }
    function PRE_check_lastMethod(a_year){ 
      log(LEVEL_1+"PRE -lastMethod")
      return type_czech.check_type(arguments, 'Number')
    }
    function POST_check_lastMethod(){ 
      log(LEVEL_1+"POST-lastMethod")
      return type_czech.check_type(arguments, 'Number')
    }


    Last_PREs = { Last: PRE_check_Last, lastMethod: PRE_check_lastMethod }
    Last_POSTs = { Last: POST_check_Last, lastMethod: POST_check_lastMethod }

    Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs)
  }
}
