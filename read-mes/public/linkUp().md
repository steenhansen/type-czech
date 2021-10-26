

## linkUp()

 Links your functions, classes, closures, IIFEs and Prototypes to before and after
  checking functions.

  A. PRE_check_yourFunc() warns about parameter issues before yourFunc() executes.

      yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc)

  B. PRE_check_yourFunc() warns about parameter issues, while POST_check_yourFunc() informs about result problems after yourFunc() executes.
  
      yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc, POST_check_yourFunc) 
    
  C. Parameters are not addressed, only function results.
  
    yourFunc = type_czech.linkUp(yourFunc, undefined, POST_check_yourFunc) 

  D. Check that a string parameter matches regular expression.

    function PRE_check_yourFunc(a_word){
      if (!a_word.match(/^.*[Yy].*$/))
        return 'ERROR, word has no Y'
    }
    yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

  E. Check a parameter belongs to a set.
    
    function PRE_check_yourFunc(a_number){
      if (![2,3,5,7,11,13,17,19,23].includes(a_number)) 
        return `ERROR, '${a_number}' is not a small prime`
    }
    yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

  F. Check that date is in the month of February.

    function PRE_check_yourFunc(a_date){
      try {
        if (a_date.getMonth()===1) 
          return ''
      } catch (e) { }
      return `ERROR, '${a_date}' is not in February`
    }
    yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

&copy; 2021 Steen Hansen