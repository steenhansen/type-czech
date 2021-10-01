



## Detaching TypeCzech for Production


### No Library

    /**/  // TypeCzech = 'src not included in this page'
    /**/
    /**/  if (typeof TypeCzech === 'function')
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/  else
    /**/    type_czech = { link: (nop) => nop, is_active: false }
    /**/  
    /**/  function PRE_posNumber(a_number){
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/      return ''
    /**/  }
    /**/  
    /**/  posNumber = type_czech.link(posNumber, PRE_posNumber) // does nothing

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
    /**/    type_czech = { link: (nop) => nop, is_active: false }
    /**/  
    /**/  function PRE_posNumber(a_number){
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/      return ''
    /**/  }
    /**/  
    /**/  posNumber = type_czech.link(posNumber, PRE_posNumber) // does nothing

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
    /**/    type_czech = { link: (nop) => nop, is_active: false }
    /**/  
    /**/  if (type_czech.is_active) {
    /**/    function PRE_posNumber(a_number){
    /**/      if (a_number<1) return `Error, ${a_number} is not positive`
    /**/        return ''
    /**/    }
    /**/    posNumber = type_czech.link(posNumber, PRE_posNumber) 
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
    /**/    type_czech = { link: (nop) => nop, is_active: false }
    /**/  
    /**/  //  function PRE_posNumber(a_number){
    /**/  //    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/  //      return ''
    /**/  //  }
    /**/  
    /**/  PRE_posNumber = (typeof PRE_posNumber === 'undefined') ? undefined : PRE_posNumber
    /**/  
    /**/  posNumber = type_czech.link(posNumber, PRE_posNumber) // does nothing

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

    posNumber(-321)
    >>My positive number -321

    posNumber('not-checked')
    >>My positive number not-checked
