


//////////////////////////////////////////






### Suggest use
    /**/  if (typeof TypeCzech === 'function') {
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/ function PRE_check_oneNumber() {
    /**/   return type_czech.check_type(arguments, 'number')
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
    /**/   return type_czech.check_type(arguments, 'number')
    /**/ }
    /**/ 
    /**/ oneNumber = type_czech.linkUp(oneNumber, PRE_check_oneNumber)

    function oneNumber(){}

    oneNumber(7)
    oneNumber('an-error')

Or

    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_oneNumber(param_1) {
      return type_czech.check_type(param_1, 'number')
    }

    oneNumber = type_czech.linkUp(oneNumber, PRE_check_oneNumber)

    function oneNumber(param_1){}

    oneNumber(7)
    oneNumber('an-error')

### Multiple Argument Functions
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numStrBool() {
      return type_czech.check_type(arguments, ['number', 'string', 'boolean'])
    }

    numStrBool = type_czech.linkUp(numStrBool, PRE_check_numStrBool)

    function numStrBool(){}

    numStrBool(7, 'eight', false)
    numStrBool('an-error')

Or

    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numStrBool(a_num, an_str, a_bool) {
      return type_czech.check_type([a_num, an_str, a_bool], ['number', 'string', 'boolean'])
    }

    numStrBool = type_czech.linkUp(numStrBool, PRE_check_numStrBool)

    function numStrBool(a_num, an_str, a_bool){}

    numStrBool(7, 'eight', false)
    numStrBool('an-error')



### Single Array Argument
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numArray() {
      return type_czech.check_type(arguments, ['number'])
    }

    numArray = type_czech.linkUp(numArray, PRE_check_numArray)

    function numArray(){}

    numArray([1,2,3,4,5,6,7])
    numArray('an-error')

Or
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numArray(num_array) {
      return type_czech.check_type(num_array, ['number'])
    }

    numArray = type_czech.linkUp(numArray, PRE_check_numArray)

    function numArray(num_array){}

    numArray([1,2,3,4,5,6,7])
    numArray('an-error')

### Multiple Array Arguments
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numStrArray() {
      return type_czech.check_type(arguments, [ ['number'], ['string'] ])
    }

    numStrArray = type_czech.linkUp(numStrArray, PRE_check_numStrArray)

    function numStrArray(){}

    numStrArray([1,2,3,4,5,6,7], ['a', 'b', 'c'])
    numStrArray('an-error')

Or
    type_czech = TypeCzech('LOG-ERRORS')
    function PRE_check_numStrArray(num_array, str_array) {
      return type_czech.check_type([num_array, str_array], [ ['number'], ['string'] ])
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
      return type_czech.check_type([...arguments], ['number'])
    }

    variadicNums = type_czech.linkUp(variadicNums, PRE_check_variadicNums)  // GOOD

    function variadicNums(){}

    variadicNums(1,2,3,4,5,6,7)
    variadicNums('an-error')

### just a plain object, or a plain array, nothing else about the types


/**/    return type_czech.check_type([...arguments], [['number']])




