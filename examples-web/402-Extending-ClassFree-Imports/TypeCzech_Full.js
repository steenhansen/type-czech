/* eslint-disable */

function TypeCzech_Full() {
  if (type_czech.is_active) {

    function PRE_Full(spec){  
      log(LEVEL_2+'PRE-Full') 
      pre_full_sig = {salu:'String', f_name:'String', l_name:'String'}
      return type_czech.check_type(arguments, pre_full_sig)
    }
    function POST_Full(Full){
      log(LEVEL_2+"POST-Full") 
      return type_czech.check_type(Full, {firstMethod:'Function',
                lastMethod:'Function', fullMethod: 'Function', 
                showName: 'Function' })
     }
    function PRE_fullMethod(a_book){
      log(LEVEL_2+"PRE -fullMethod") 
      return type_czech.check_type(arguments, 'String')
    }
    function POST_fullMethod(a_book){
      log(LEVEL_2+"POST-fullMethod") 
      return type_czech.check_type(arguments, 'String')
    }



    // function PRE_Full(spec) { log(`${LEVEL_2}PRE-Full`) }
    // function POST_Full(Full) { log(`${LEVEL_2}POST-Full`) }
    // function PRE_fullMethod(a_book) { log(`${LEVEL_2}PRE-fullMethod`) }
    // function POST_fullMethod() { log(`${LEVEL_2}POST-fullMethod`) }

    Full_PREs = { Full: PRE_Full, fullMethod: PRE_fullMethod }
    Full_POSTs = { Full: POST_Full, fullMethod: POST_fullMethod }

    Full = type_czech.link(Full, Full_PREs, Full_POSTs)
  }
}
