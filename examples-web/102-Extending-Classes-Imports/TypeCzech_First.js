/* eslint-disable */
function TypeCzech_First() {
  if (type_czech.isActive()) {
    function PRE_check_First(f_name){
      log(NL+'PRE -First') 
      type_issue = type_czech.checkParam_type(f_name, 'string')
      if (type_issue) return type_issue;
      return type_czech.checkParam_empty(f_name, 'EMPTY-ERROR');      
    }
    function POST_check_First(First){
      log(NL+'POST-First')
      const first_return_signature = {f_name:'string', firstMethod:'function'}
      return type_czech.check_interface(First, first_return_signature)
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
