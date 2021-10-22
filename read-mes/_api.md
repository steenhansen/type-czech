




## API
### linkUp()
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


### check_type()
  Gives an error message if a function's parameters do not check_type to a type signature.
  An empty string signifies type compliance. Note that the arguments object is usually 
  used to view parameters.

  A. ...Check that parameters are a Number and a Boolean followed by a Date.
   
      type_error = type_czech.check_type(arguments, ['Number', 'Boolean', 'Date'])

  B. ...Check that there is a single Number parameter.
    
      type_error = type_czech.check_type(arguments, 'Number')

  C. ...Check that there are exactly two Numbers as arguments.
    
      type_error = type_czech.check_type(arguments, ['Number', 'Number'])

  D. ...One array of Numbers, with any number of elements; from 0 ... x elements. 
     
      type_error = type_czech.check_type(arguments, ['Number'])

  E. ...Two arrays of Numbers with exactly two elements each.
     
      type_error = type_czech.check_type(arguments, [ ['Number', 'Number'], ['Number', 'Number'] ])

  F. ....One array of arrays of two Numbers.
     
      type_error = type_czech.check_type(arguments, [ ['Number', 'Number'] ])

  G. ...One Array with any type of contents.
     
      type_error = type_czech.check_type(arguments, 'Array')

  H. ...One Object with any type of contents.
     
      type_error = type_czech.check_type(arguments, 'Object')

  I. ...One Objects with x and y keys that are Numbers.
     
      type_error = type_czech.check_type(arguments, {x:'Number', y:'Number'})

  J. ...One Array with any number of Objects with x and y keys that are Numbers.
    
      type_error = type_czech.check_type(arguments, [{x:'Number', y:'Number'}])

  K. ....Check only one parameter type of many.
     
      type_error = type_czech.check_type(param_2, 'Number'})

  L. ...Check two parameter types of many.
      
      type_error = type_czech.check_type([param_1, param_3], ['Number'])

  M. ....Variadic function that excepts only Numbers.
     
      type_error = type_czech.check_type([...arguments], ['Number'])


n check_type a return result, number, object, array
    



### check_empty()
  Gives an error message if a function parameter is empty. An invalid date, '', 
  {}, [], a blank regular expression, NaN, null, and undefined are all considered empty.

  A. Check that a single scalar parameter of any type is not empty.

      empty_error = type_czech.check_empty(arguments, 'EMPTY-ERROR')

  B. Check that a single array parameter of any type is not empty.

      empty_error = type_czech.check_empty(arguments, ['EMPTY-ERROR'])

  C. Check for empty variadic check_empty parameters.

      empty_error = type_czech.check_variadicEmpty(arguments, ['EMPTY-ERROR'])


d. result

e: array: no mr, first last  [salu, first, last] 

f: object: {f_name:'EMPTY-OK', l_name:'EMPTY-ERROR'}

//////////////////////////////////////////






### Suggest use
    /**/  if (typeof TypeCzech === 'function') {
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/ function PRE_check_oneNumber() {
    /**/   return type_czech.check_type(arguments, 'Number')
    /**/ }
    /**/  } else {
    /**/    type_czech = { link: (nop) => nop, isActive: (x) => false }
    /**/  }

    /**/  PRE_check_oneNumber =(typeof PRE_check_oneNumber==='undefined') ? undefined:PRE_check_oneNumber
    
    oneNumber = type_czech.linkUp(oneNumber, PRE_check_oneNumber)

### check_type()

#### Single Argument Functions
    /**/ type_czech = TypeCzech('LOG-ERRORS')
    /**/ function PRE_check_oneNumber() {
    /**/   return type_czech.check_type(arguments, 'Number')
    /**/ }
    /**/ 
    /**/ oneNumber = type_czech.linkUp(oneNumber, PRE_check_oneNumber)

    function oneNumber(){}

    oneNumber(7)
    oneNumber('an-error')

Or

    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_oneNumber(param_1) {
      return type_czech.check_type(param_1, 'Number')
    }

    oneNumber = type_czech.linkUp(oneNumber, PRE_check_oneNumber)

    function oneNumber(param_1){}

    oneNumber(7)
    oneNumber('an-error')

### Multiple Argument Functions
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numStrBool() {
      return type_czech.check_type(arguments, ['Number', 'String', 'Boolean'])
    }

    numStrBool = type_czech.linkUp(numStrBool, PRE_check_numStrBool)

    function numStrBool(){}

    numStrBool(7, 'eight', false)
    numStrBool('an-error')

Or

    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numStrBool(a_num, an_str, a_bool) {
      return type_czech.check_type([a_num, an_str, a_bool], ['Number', 'String', 'Boolean'])
    }

    numStrBool = type_czech.linkUp(numStrBool, PRE_check_numStrBool)

    function numStrBool(a_num, an_str, a_bool){}

    numStrBool(7, 'eight', false)
    numStrBool('an-error')



### Single Array Argument
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numArray() {
      return type_czech.check_type(arguments, ['Number'])
    }

    numArray = type_czech.linkUp(numArray, PRE_check_numArray)

    function numArray(){}

    numArray([1,2,3,4,5,6,7])
    numArray('an-error')

Or
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numArray(num_array) {
      return type_czech.check_type(num_array, ['Number'])
    }

    numArray = type_czech.linkUp(numArray, PRE_check_numArray)

    function numArray(num_array){}

    numArray([1,2,3,4,5,6,7])
    numArray('an-error')

### Multiple Array Arguments
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numStrArray() {
      return type_czech.check_type(arguments, [ ['Number'], ['String'] ])
    }

    numStrArray = type_czech.linkUp(numStrArray, PRE_check_numStrArray)

    function numStrArray(){}

    numStrArray([1,2,3,4,5,6,7], ['a', 'b', 'c'])
    numStrArray('an-error')

Or
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numStrArray(num_array, str_array) {
      return type_czech.check_type([num_array, str_array], [ ['Number'], ['String'] ])
    }

    numStrArray = type_czech.linkUp(numStrArray, PRE_check_numStrArray)

    function numStrArray(num_array, str_array){}

    numStrArray([1,2,3,4,5,6,7], ['a', 'b', 'c'])
    numStrArray('an-error')



### Variadic 
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_variadics() {
      return type_czech.check_type([...arguments], [{}])       // array of objects
    }

// OPTIONAL EXTRAS??????????????????????
//  UNION ???

    variadicNums = type_czech.linkUp(variadicNums, PRE_check_variadicNums)  // BAD

    function variadicNums(){}

    variadicNums(1,2,3,4,5,'bob')
    variadicNums('an-error')

Or
    
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_variadicNums() {
      return type_czech.check_type([...arguments], ['Number'])
    }

    variadicNums = type_czech.linkUp(variadicNums, PRE_check_variadicNums)  // GOOD

    function variadicNums(){}

    variadicNums(1,2,3,4,5,6,7)
    variadicNums('an-error')

### just a plain object, or a plain array, nothing else about the types


/**/    return type_czech.check_type([...arguments], [['Number']])






        check_typeExtra, // type_czech.check_typeExtra(arguments, ['Number', 'String'])
        check_typeEither, // type_czech.check_typeEither(arguments, [['Number'], ['String']])
        failureRatio,
        countFails,
        mutateSnapshot,
        mutated,
        objectConformExtras, // type_czech.objectConformExtras({a:123, b:"extra"}, {a:"Number"})
        objectInterface,
        objectIsA,
        objectPrototypes,
        objectType,
        objectValuelessExtras, // type_czech.objectValuelessExtras({a:123, b:"extra"}, {a:"EMPTY-ERROR"})
        stats,
        statsReset,
        check_empty, // type_czech.check_empty(arguments, ['EMPTY-ERROR', 'EMPTY-OK'])
        check_emptyExtra, // type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-OK'])
        check_emptyEither, // type_czech.check_typeEither(arguments, [['EMPTY-ERROR'], ['EMPTY-OK']])

&copy; 2021 Steen Hansen
