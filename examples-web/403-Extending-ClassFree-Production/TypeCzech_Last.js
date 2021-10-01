/* eslint-disable */

function TypeCzech_Last() {
  if (type_czech.is_active) {
    
  
    function PRE_Last(spec){
      log(LEVEL_1+'PRE-Last') 
      pre_last_sig = { f_name: 'String', l_name: 'String' }
      type_issue = type_czech.check_objectTypeExtra(arguments, pre_last_sig)
      if (type_issue) return type_issue;
      return type_czech.check_objectEmptyExtra(arguments, {l_name: 'EMPTY-ERROR' });
    }
    function POST_Last(Last){
      log(LEVEL_1+"POST-Last") 
      post_last_sig = {firstMethod:'Function', lastMethod:'Function'}
      return type_czech.check_type(Last, post_last_sig)
    }
    function PRE_lastMethod(a_year){
      log(LEVEL_1+"PRE -lastMethod")
      return type_czech.check_type(arguments, 'Number')
    }
    function POST_lastMethod(a_year){
      log(LEVEL_1+"POST-lastMethod") 
      return type_czech.check_type(arguments, 'Number')
    }
    
    
    
    
    // function PRE_Last(spec) { log(`${LEVEL_1}PRE-Last`) }
    // function POST_Last(Last) { log(`${LEVEL_1}POST-Last`) }
    // function PRE_lastMethod(a_year) { log(`${LEVEL_1}PRE-lastMethod`) }
    // function POST_lastMethod() { log(`${LEVEL_1}POST-lastMethod`) }

    Last_PREs = { Last: PRE_Last, lastMethod: PRE_lastMethod }
    Last_POSTs = { Last: POST_Last, lastMethod: POST_lastMethod }

    Last = type_czech.link(Last, Last_PREs, Last_POSTs)
  }
}
