/* eslint-disable */

function TypeCzech_First() {
  if (type_czech.isActive()) {
    function PRE_check_First(f_name){
      log(NL2+'PRE -First') 
      type_issue = type_czech.check_type(f_name, 'String')
      if (type_issue) return type_issue;
      return type_czech.check_empty(arguments, 'EMPTY-ERROR');
    }
    function POST_check_First(First){ 
      log(NL1+'POST-First') 
      post_first_signature = { f_name: 'String',  firstMethod: 'Function' }
      return type_czech.check_type(First, post_first_signature)
    }
    function PRE_check_firstMethod(a_date){ 
      log(NL+'PRE -firstMethod')
      return type_czech.check_type(arguments, 'Date')
    }
    function POST_check_firstMethod(a_date){
      log('POST-firstMethod') 
      return type_czech.check_type(arguments, 'Date')
    }

    First_PREs = { First: PRE_check_First, firstMethod: PRE_check_firstMethod }
    First_POSTs = { First: POST_check_First, firstMethod: POST_check_firstMethod }

    First = type_czech.linkUp(First, First_PREs, First_POSTs)
  }
}
