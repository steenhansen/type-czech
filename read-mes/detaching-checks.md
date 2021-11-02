



## Detaching TypeCzech for Production


### Not Loading Library
By not loading TypeCzech.js the linkUp() function turns into a nop with no effects. The function PRE_check_posNum() is still parsed, but never executed.

    /**/  // TypeCzech = 'src not loaded in this page via commenting'
    /**/
    /**/  if (typeof TypeCzech === 'function')
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/  else
    /**/    type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
    /**/  
    /**/  function PRE_check_posNum(a_number){
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/      return ''
    /**/  }
    /**/  
    /**/  posNum = type_czech.linkUp(posNum, PRE_check_posNum) // does nothing

    function posNum(a_number){
      console.log('My positive number', a_number)
    }

    posNum(-321)           
    >>My positive number -321
    
    posNum('not-checked')
    >>My positive number not-checked

### Turn On and Off with a Constant

    /**/  // TypeCzech = 'always loaded and parsed'
    /**/
    /**/  CHECKING_IS_ON = true
    /**/
    /**/  if (CHECKING_IS_ON) 
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/  else
    /**/    type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
    /**/  
    /**/  function PRE_check_posNum(a_number){
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/      return ''
    /**/  }
    /**/  
    /**/  posNum = type_czech.linkUp(posNum, PRE_check_posNum)

    function posNum(a_number){
      console.log('My positive number', a_number)
    }

    posNum(-321)
    >>My positive number -321

    posNum('not-checked')
    >>My positive number not-checked





### Undefined Checking Function 
This idea is more likely done with Node.js than in the browser.

    /**/  // TypeCzech = 'always loaded and parsed'
    /**/
    /**/  if (typeof TypeCzech === 'function') 
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/  else
    /**/    type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
    /**/  
          //  function PRE_check_posNum(a_number){
          //    if (a_number<1) return `Error, ${a_number} is not positive`
          //      return ''
          //  }
    /**/  
    /**/  PRE_check_posNum = (typeof PRE_check_posNum === 'undefined') ? undefined : PRE_check_posNum
    /**/  
    /**/  posNum = type_czech.linkUp(posNum, PRE_check_posNum) // does nothing

    function posNum(a_number){
      console.log('My positive number', a_number)
    }

    posNum(-321)
    >>My positive number -321

    posNum('not-checked')
    >>My positive number not-checked







&copy; 2021 Steen Hansen

