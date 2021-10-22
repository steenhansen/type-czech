



## Detaching TypeCzech for Production


### No Library

    /**/  // TypeCzech = 'src not included in this page'
    /**/
    /**/  if (typeof TypeCzech === 'function')
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/  else
    /**/    type_czech = { link: (nop) => nop, isActive: (x) => false }
    /**/  
    /**/  function PRE_check_posNumber(a_number){
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/      return ''
    /**/  }
    /**/  
    /**/  posNumber = type_czech.linkUp(posNumber, PRE_check_posNumber) // does nothing

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

    posNumber(-321)           
    >>My positive number -321
    
    posNumber('not-checked')
    >>My positive number not-checked

### No TypeCzech Creation Command 

    /**/  if (typeof TypeCzech === 'function') 
    /**/    type_czech = TypeCzech()
    /**/  else
    /**/    type_czech = { link: (nop) => nop, isActive: (x) => false }
    /**/  
    /**/  function PRE_check_posNumber(a_number){
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/      return ''
    /**/  }
    /**/  
    /**/  posNumber = type_czech.linkUp(posNumber, PRE_check_posNumber) // does nothing

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

    posNumber(-321)
    >>My positive number -321

    posNumber('not-checked')
    >>My positive number not-checked




### is_active

    /**/  if (typeof TypeCzech === 'function') 
    /**/    type_czech = TypeCzech()
    /**/  else
    /**/    type_czech = { link: (nop) => nop, isActive: (x) => false }
    /**/  
    /**/  if (type_czech.isActive()) {
    /**/    function PRE_check_posNumber(a_number){
    /**/      if (a_number<1) return `Error, ${a_number} is not positive`
    /**/        return ''
    /**/    }
    /**/    posNumber = type_czech.linkUp(posNumber, PRE_check_posNumber) 
    /**/  }

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

    posNumber(-321)
    >>My positive number -321

    posNumber('not-checked')
    >>My positive number not-checked





### Undefined Checking Function 



    /**/  if (typeof TypeCzech === 'function') 
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/  else
    /**/    type_czech = { link: (nop) => nop, isActive: (x) => false }
    /**/  
    /**/  //  function PRE_check_posNumber(a_number){
    /**/  //    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/  //      return ''
    /**/  //  }
    /**/  
    /**/  PRE_check_posNumber = (typeof PRE_check_posNumber === 'undefined') ? undefined : PRE_check_posNumber
    /**/  
    /**/  posNumber = type_czech.linkUp(posNumber, PRE_check_posNumber) // does nothing

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

    posNumber(-321)
    >>My positive number -321

    posNumber('not-checked')
    >>My positive number not-checked


&copy; 2021 Steen Hansen

