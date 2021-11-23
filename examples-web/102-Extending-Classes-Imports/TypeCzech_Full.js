/* eslint-disable */

function TypeCzech_Full() {
  if (type_czech.isActive()) {

    function PRE_check_Full(salu, f_name, l_name){
      log(LEVEL_2+'PRE-Full') 
      return type_czech.checkParam_type([salu, f_name, l_name], ['string', 'string', 'string']);
    }
    function POST_check_Full(Full){
      log(LEVEL_2+"POST-Full") 
      full_return_signature = {salu:'string', f_name:'string', l_name: 'string',
          firstMethod:'function', lastMethod:'function', fullMethod:'function'}
      return type_czech.check_interface(Full, full_return_signature)
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
