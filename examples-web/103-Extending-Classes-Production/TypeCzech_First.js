/* eslint-disable */

function TypeCzech_First() {
  First = init_First() // NB init_First() must be in global scope
  if (type_czech.is_active) {

    function PRE_First(f_name){
      log(NL+'PRE -First') 
      type_issue = type_czech.check_type(f_name, 'String')
      if (type_issue) return type_issue;
      return type_czech.check_empty(arguments, 'EMPTY-ERROR');
    }
    function POST_First(First){
      log(NL+'POST-First')
      const first_return_signature = {f_name:'String', firstMethod:'Function'}
      return type_czech.check_objectType(First, first_return_signature)
    }
    function PRE_firstMethod(a_date){
      log('PRE -firstMethod') 
      return type_czech.check_type(arguments, 'Date')
    }
    function POST_firstMethod(a_date){
      log('POST-firstMethod') 
      return type_czech.check_type(arguments, 'Date')
    }

    // function PRE_First(f_name) { log(`${NL}PRE-First`) }
    // function POST_First(First) { log(`${NL}POST-First`) }
    // function PRE_firstMethod(a_date) { log(`${NL}PRE-firstMethod`) }
    // function POST_firstMethod() { log(`${NL}POST-firstMethod`) }

    First_PREs = { First: PRE_First, firstMethod: PRE_firstMethod }
    First_POSTs = { First: POST_First, firstMethod: POST_firstMethod }
    First = type_czech.link(First, First_PREs, First_POSTs)
  }
}
