/* eslint-disable */
/* eslint-disable no-undef */

if (typeof TypeCzech === 'function') {
  check_linkUp_first_last_full = () => {
    type_czech = TypeCzech('LOG-ERRORS');

  function PRE_check_First(spec){
    log(NL2+'PRE -First') 
    pre_first_sig = { f_name: 'string' }
    type_issue = type_czech.check_typeExtra(arguments, pre_first_sig)
    if (type_issue) return type_issue;
    return type_czech.check_emptyExtra(arguments, {f_name: 'EMPTY-ERROR' });
  }
  function POST_check_First(First){
    log(NL1+'POST-First') 
    return type_czech.check_interface(First, { firstMethod: 'function' })
  }
  function PRE_check_firstMethod(a_date){
    log('PRE -firstMethod') 
    return type_czech.check_type(arguments, 'date')
  }
  function POST_check_firstMethod(a_date){
    log('POST-firstMethod') 
    return type_czech.check_type(arguments, 'date')
  }
  First_PREs = {First:PRE_check_First, firstMethod:PRE_check_firstMethod}
  First_POSTs = {First:POST_check_First, firstMethod:POST_check_firstMethod}
  First = type_czech.linkUp(First, First_PREs, First_POSTs)


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
  Last_PREs = {Last:PRE_check_Last, lastMethod:PRE_check_lastMethod}
  Last_POSTs = {Last:POST_check_Last, lastMethod:POST_check_lastMethod}
  Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs)


  function PRE_check_Full(spec){  
    log(LEVEL_2+'PRE-Full') 
    pre_full_sig = {salu:'string', f_name:'string', l_name:'string'}
    return type_czech.check_typeExtra(arguments, pre_full_sig)
}
  function POST_check_Full(Full){
    log(LEVEL_2+"POST-Full") 
    return type_czech.check_interface(Full, {firstMethod:'function',
              lastMethod:'function', fullMethod: 'function', 
              showName: 'function' })
   }
  function PRE_check_fullMethod(a_book){
    log(LEVEL_2+"PRE -fullMethod") 
    return type_czech.check_type(arguments, 'string')
  }
  function POST_check_fullMethod(a_book){
    log(LEVEL_2+"POST-fullMethod") 
    return type_czech.check_type(arguments, 'string')
  }

  Full_PREs = {Full:PRE_check_Full, fullMethod:PRE_check_fullMethod}
  Full_POSTs= {Full:POST_check_Full, fullMethod:POST_check_fullMethod}
  Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs)
  }
};
