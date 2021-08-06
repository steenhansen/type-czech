



## Detaching TypeCzech for Production


### No Library Disconnect (checking functions parsed)

  // Detachable TypeCzech Checking Code ****************************************

    TypeCzech = 'src not included in this page'

    if (typeof TypeCzech === 'function')
      type_czech = TypeCzech('LOG-ERRORS')
    else
      type_czech = { check: (nop) => nop, stats: (nop) => nop, is_active: false }

    function PRE_posNumber(a_number){
      if (a_number<1) return `Error, ${a_number} is not positive`
        return ''
    }
    
    posNumber = type_czech.check(posNumber, PRE_posNumber) // does nothing

  // Actual Non-Checking Production Code ****************************************

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

  // Console Interaction ****************************************

    posNumber(-321)           
    >>My positive number -321
    
    posNumber('not-checked')
    >>My positive number not-checked

### No TypeCzech Creation Command Disconnect (checking functions parsed)

  // Detachable TypeCzech Checking Code ****************************************

    if (typeof TypeCzech === 'function') 
      type_czech = TypeCzech(/* - NO COMMAND -*/)
    else
      type_czech = { check: (nop) => nop, stats: (nop) => nop, is_active: false }

    function PRE_posNumber(a_number){
      if (a_number<1) return `Error, ${a_number} is not positive`
        return ''
    }
    
    posNumber = type_czech.check(posNumber, PRE_posNumber) // does nothing

  // Actual Non-Checking Production Code ****************************************

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

  // Console Interaction ****************************************

    posNumber(-321)
    >>My positive number -321

    posNumber('not-checked')
    >>My positive number not-checked




### is_active Disconnect (checking functions not parsed)

  // Detachable TypeCzech Checking Code ****************************************

    if (typeof TypeCzech === 'function') 
      type_czech = TypeCzech(/* - NO COMMAND -*/)
    else
      type_czech = { check: (nop) => nop, stats: (nop) => nop, is_active: false }

    if (type_czech.is_active) {
      function PRE_posNumber(a_number){
        if (a_number<1) return `Error, ${a_number} is not positive`
          return ''
      }
      
      posNumber = type_czech.check(posNumber, PRE_posNumber) 
    }

  // Actual Non-Checking Production Code ****************************************

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

  // Console Interaction ****************************************

    posNumber(-321)
    >>My positive number -321

    posNumber('not-checked')
    >>My positive number not-checked





### Undefined Checking Function Disconnect (checking functions not parsed)

  // Detachable TypeCzech Checking Code ****************************************

    if (typeof TypeCzech === 'function') 
      type_czech = TypeCzech('LOG-ERRORS')
    else
      type_czech = { check: (nop) => nop, stats: (nop) => nop, is_active: false }

    //  function PRE_posNumber(a_number){
    //    if (a_number<1) return `Error, ${a_number} is not positive`
    //      return ''
    //  }

    PRE_posNumber = (typeof PRE_posNumber === 'undefined') ? undefined : PRE_posNumber

    posNumber = type_czech.check(posNumber, PRE_posNumber) // does nothing

  // Actual Non-Checking Production Code ****************************************

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

  // Console Interaction ****************************************

    posNumber(-321)
    >>My positive number -321

    posNumber('not-checked')
    >>My positive number not-checked
