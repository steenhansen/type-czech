/* eslint-disable */

function TypeCzech_Full() {
  if (type_czech.is_active) {
    function PRE_Full(salu, f_name, l_name){
      log(LEVEL_2+'PRE -Full')
      pre_full_signature = ['String', 'String', 'String']
      return type_czech.check_type(arguments, pre_full_signature)
    }
    function POST_Full(Full){ 
      log(LEVEL_2+'POST-Full')
      post_full_signature = { salu: 'String', fullMethod: 'Function' }
      return type_czech.check_interface(Full, post_full_signature)
    }
    function PRE_fullMethod(a_book){ 
      log(LEVEL_2+'PRE -fullMethod')
      return type_czech.check_type(arguments, 'String')
    }
    function POST_fullMethod(a_book){ 
      log(LEVEL_2+'POST-fullMethod')
      return type_czech.check_type(arguments, 'String')
    }

    Full_PREs = { Full: PRE_Full, fullMethod: PRE_fullMethod }
    Full_POSTs = { Full: POST_Full, fullMethod: POST_fullMethod }

    Full = type_czech.link(Full, Full_PREs, Full_POSTs)
  }
}
