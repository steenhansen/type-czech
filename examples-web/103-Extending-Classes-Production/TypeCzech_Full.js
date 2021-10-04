/* eslint-disable */

function TypeCzech_Full() {
  Full = init_Full(Last) // NB init_Full() must be in global scope
  if (type_czech.is_active) {

    function PRE_Full(salu, f_name, l_name){
      log(LEVEL_2+'PRE-Full') 
      return type_czech.check_type(arguments, ['String', 'String', 'String']);
    }
    function POST_Full(Full){
      log(LEVEL_2+"POST-Full") 
      full_return_signature = {salu:'String', f_name:'String', l_name: 'String',
          firstMethod:'Function', lastMethod:'Function', fullMethod:'Function'}
      return type_czech.check_interface(Full, full_return_signature)
    }
    function PRE_fullMethod(a_book){
      log(LEVEL_2+"PRE -fullMethod") 
      return type_czech.check_type(arguments, 'String')
    }
    function POST_fullMethod(a_book){
      log(LEVEL_2+"POST-fullMethod") 
      return type_czech.check_type(arguments, 'String')
    }
    function PRE_Full(salu, f_name, l_name){
      log(LEVEL_2+'PRE-Full') 
      return type_czech.check_type(arguments, ['String', 'String', 'String']);
    }
    function POST_Full(Full){
      log(LEVEL_2+"POST-Full") 
      full_return_signature = {salu:'String', f_name:'String', l_name: 'String',
          firstMethod:'Function', lastMethod:'Function', fullMethod:'Function'}
      return type_czech.check_interface(Full, full_return_signature)
    }
    function PRE_fullMethod(a_book){
      log(LEVEL_2+"PRE -fullMethod") 
      return type_czech.check_type(arguments, 'String')
    }
    function POST_fullMethod(a_book){
      log(LEVEL_2+"POST-fullMethod") 
      return type_czech.check_type(arguments, 'String')
    }

    Full_PREs = { Full: PRE_Full, fullMethod: PRE_fullMethod }
    Full_POSTs = { Full: POST_Full, fullMethod: POST_fullMethod }

    Full = type_czech.link(Full, Full_PREs, Full_POSTs)
  }
}