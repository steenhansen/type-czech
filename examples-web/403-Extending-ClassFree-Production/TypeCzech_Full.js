/* eslint-disable */

function TypeCzech_Full() {
  if (type_czech.isActive()) {

    function PRE_check_Full(spec){  
      log(LEVEL_2+'PRE-Full') 
      pre_full_sig = {salu:'string', f_name:'string', l_name:'string'}
      return type_czech.checkParam_typeExtra(spec, pre_full_sig)
    }
    function POST_check_Full(Full){
      log(LEVEL_2+"POST-Full") 
      return type_czech.check_interface(Full, {firstMethod:'function',
                lastMethod:'function', fullMethod: 'function', 
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



    Full_PREs = { Full: PRE_check_Full, fullMethod: PRE_check_fullMethod }
    Full_POSTs = { Full: POST_check_Full, fullMethod: POST_check_fullMethod }

    Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs)
  }
}
