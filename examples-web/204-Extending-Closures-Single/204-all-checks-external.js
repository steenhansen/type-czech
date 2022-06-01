/* eslint-disable */


if (typeof TypeCzech === 'function') {
  check_linkUp_first_last_full = () => {
    type_czech = TypeCzech('LOG-ERRORS');

    function PRE_check_First(f_name){
      log(NL2+'PRE -First') 
      type_issue = type_czech.checkParam_type(f_name, 'string')
      if (type_issue) return type_issue;
      return type_czech.checkParam_empty(f_name, 'EMPTY-ERROR');
    }
    function POST_check_First(First){
      log(NL1+'POST-First') 
      return type_czech.checkParam_type(First, { firstMethod: 'function' });  
    }
    function PRE_check_firstMethod(a_date){
      log('PRE -firstMethod') 
      return type_czech.checkParam_type(a_date, 'date');  
    }
    function POST_check_firstMethod(a_date){
      log('POST-firstMethod') 
      return type_czech.checkParam_type(a_date, 'date');  
    }
    First_PREs = {First:PRE_check_First, firstMethod:PRE_check_firstMethod}
    First_POSTs = {First:POST_check_First, firstMethod:POST_check_firstMethod}
    First = type_czech.linkUp(First, First_PREs, First_POSTs)

    function PRE_check_Last(f_name, l_name){
      log(LEVEL_1+'PRE-Last') 
      type_issue = type_czech.checkParam_type([f_name, l_name], ['string', 'string'])
      if (type_issue) return type_issue;
      return type_czech.checkParam_empty([f_name, l_name], ['EMPTY-ERROR', 'EMPTY-ERROR']);
    }
    function POST_check_Last(Last){
      log(LEVEL_1+"POST-Last")
      post_last_sig = { firstMethod: 'function', lastMethod: 'function' }
      return type_czech.checkParam_type(Last, post_last_sig);
    }
    function PRE_check_lastMethod(a_year){
      log(LEVEL_1+"PRE -lastMethod")
      return type_czech.checkParam_type(a_year, 'number');
    }
    function POST_check_lastMethod(a_year){
      log(LEVEL_1+"POST-lastMethod") 
      return type_czech.checkParam_type(a_year, 'number');
    }
    Last_PREs = {Last:PRE_check_Last, lastMethod:PRE_check_lastMethod}
    Last_POSTs = {Last:POST_check_Last, lastMethod:POST_check_lastMethod}
    Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs)


    function PRE_check_Full(salu, f_name, l_name){
      log(LEVEL_2+'PRE-Full') 
      return type_czech.checkParam_type([salu, f_name, l_name], ['string', 'string', 'string'])
    }
    function POST_check_Full(Full){
      log(LEVEL_2+"POST-Full") 
      return type_czech.checkParam_type(Full, { firstMethod: 'function', 
                    lastMethod: 'function', fullMethod: 'function',
                                            showName: 'function' })
    }
    function PRE_check_fullMethod(a_book){
      log(LEVEL_2+"PRE -fullMethod") 
      return type_czech.checkParam_type(a_book, 'string')
    }
    function POST_check_fullMethod(a_book){
      log(LEVEL_2+"POST-fullMethod") 
      return type_czech.checkParam_type(a_book, 'string')
    }
    Full_PREs = {Full:PRE_check_Full, fullMethod:PRE_check_fullMethod}
    Full_POSTs= {Full:POST_check_Full, fullMethod:POST_check_fullMethod}
    Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs)


  };
}
