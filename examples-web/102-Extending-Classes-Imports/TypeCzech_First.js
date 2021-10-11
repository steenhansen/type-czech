/* eslint-disable */
function TypeCzech_First() {
  if (type_czech.is_active) {
    function PRE_check_First(f_name){
      log(NL+'PRE -First') 
      type_issue = type_czech.check_type(f_name, 'String')
      if (type_issue) return type_issue;
      return type_czech.check_empty(arguments, 'EMPTY-ERROR');      
    }
    function POST_check_First(First){
      log(NL+'POST-First')
      const first_return_signature = {f_name:'String', firstMethod:'Function'}
      return type_czech.check_interface(First, first_return_signature)
    }
    function PRE_check_firstMethod(a_date){
      log('PRE -firstMethod') 
      return type_czech.check_type(arguments, 'Date')
    }
    function POST_check_firstMethod(a_date){
      log('POST-firstMethod') 
      return type_czech.check_type(arguments, 'Date')
    }
  
    // function PRE_check_First(f_name) { log(`${NL}PRE-First`) }
    // function POST_check_First(First) { log(`${NL}POST-First`) }
    // function PRE_check_firstMethod(a_date) { log(`${NL}PRE-firstMethod`) }
    // function POST_check_firstMethod() { log(`${NL}POST-firstMethod`) }

    First_PREs = { First: PRE_check_First, firstMethod: PRE_check_firstMethod }
    First_POSTs = { First: POST_check_First, firstMethod: POST_check_firstMethod }

    First = type_czech.link(First, First_PREs, First_POSTs)
  }
}
