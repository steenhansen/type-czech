
## Arrays of Scalars


#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Check Parameters For:
  -  [A - Array of One Empty Value](#a)



  -  [B - Array of Two Numbers](#b)
  
  
  -  [C - Array of Three Mixed Scalars](#c)
  -  [D - Array of One Type](#d)

### A - Array of One Empty Value<a name="a"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneElemArr(one_elem_arr){
    /**/    return type_czech.checkParam_empty(one_elem_arr, ['EMPTY-ERROR'])
    /**/  }
    /**/  
    /**/  oneElemArr = type_czech.linkUp(oneElemArr, PRE_check_oneElemArr) 

    function oneElemArr(){ }

    oneElemArr([ 'a-string']) // pass
    oneElemArr([ 1234      ]) // pass
    oneElemArr([ [5678]    ]) // pass

    oneElemArr(      ) // fail - nothing  
    oneElemArr([    ]) // fail - nothing in array

    oneElemArr([ '' ]) // fail - empty string
    oneElemArr([ [] ]) // fail - empty array
    oneElemArr([ {} ]) // fail - empty object
    







### B - Array of Two Numbers<a name="b"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoNumArr(two_elem_arr){
    /**/    return type_czech.checkParam_empty(two_elem_arr, ['EMPTY-ERROR', 'EMPTY-ERROR'])
    /**/  }
    /**/  
    /**/  twoNumArr = type_czech.linkUp(twoNumArr, PRE_check_twoNumArr) 

    function twoNumArr(){ }

    twoNumArr([123, 456]) // pass
    
    twoNumArr([987])           // fail - one number 
    twoNumArr([111, 222, 333]) // fail - three numbers
    twoNumArr(['', 222])       // fail - first empty
    twoNumArr([111, []])       // fail - second empty













### C - Array of Three Mixed Scalars<a name="c"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_someStrings(mixed_3_array){
    /**/    the_signature = ['string', 'number', 'boolean']
    /**/    return type_czech.checkParam_type(mixed_3_array, the_signature)
    /**/  }
    /**/  
    /**/  mixed3Array = type_czech.linkUp(mixed3Array, PRE_check_someStrings) 

    function mixed3Array(){ }

    mixed3Array(['a-string', 445, true]) // pass

    mixed3Array(['fail-string', 499])    // fail - missing boolean
    mixed3Array(['fail', 488, 'fail'])   // fail - missing boolean









### D - Array of One Type<a name="d"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_stringArray(string_array){
    /**/    return type_czech.checkParam_type(string_array, ['string-array'])
    /**/  }
    /**/  
    /**/  stringArray = type_czech.linkUp(stringArray, PRE_check_stringArray) 

    function stringArray(string_array){ }

    stringArray(['a-string'])                   // pass
    stringArray(['a-string', 'b-string'])       // pass
    stringArray(['a', 'b', 'c', 'd', 'e', 'f']) // pass
  
    stringArray([])                           // fail - no string
    stringArray(['a', 'b', 'c', 'd', 'e', 6]) // fail - a number





&copy; 2021 Steen Hansen
