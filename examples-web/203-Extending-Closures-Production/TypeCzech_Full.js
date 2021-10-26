/* eslint-disable */

function TypeCzech_Full() {
  Full = init_Full(Last) // NB init_Full() must be in global scope
  if (type_czech.isActive()) {

    function PRE_check_Full(salu, f_name, l_name){
      log(LEVEL_2+'PRE-Full') 
      return type_czech.check_type(arguments, ['string', 'string', 'string'])
    }
    function POST_check_Full(Full){
      log(LEVEL_2+"POST-Full") 
      return type_czech.check_type(Full, { firstMethod: 'function', lastMethod: 'function',
                                        fullMethod: 'function', showName: 'function' })
    }
    function PRE_check_fullMethod(a_book){
      log(LEVEL_2+"PRE -fullMethod") 
      return type_czech.check_type(arguments, 'string')
    }
    function POST_check_fullMethod(a_book){
      log(LEVEL_2+"POST-fullMethod") 
      return type_czech.check_type(arguments, 'string')
    }


    Full_PREs = { Full: PRE_check_Full, fullMethod: PRE_check_fullMethod }
    Full_POSTs = { Full: POST_check_Full, fullMethod: POST_check_fullMethod }

    Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs)
  }
}
