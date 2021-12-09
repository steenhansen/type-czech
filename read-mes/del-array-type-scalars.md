
## Arrays of Scalars


#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Check String Parameters For:
  -  [A - Array of One String](#arr-of-one-str-param)
  -  [B - Array of Two Numbers](#arr-of-two-num-param)
  -  [C - Array of Three Mixed Scalars](#arr-of-mixed-param)
  -  [D - Array of One Type](#arr-of-one-type)

### A - Array of One String<a name="arr-of-one-str-param"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneStrArr(one_str_arr){
    /**/    return type_czech.checkParam_type(one_str_arr, ['string'])
    /**/  }
    /**/  
    /**/  oneStrArr = type_czech.linkUp(oneStrArr, PRE_check_oneStrArr) 

    function oneStrArr(){ }

    oneStrArr(['a-string']) // pass
    
    oneStrArr()                     // fail - no string  
    oneStrArr([])                   // fail - no string
    oneStrArr([1234])               // fail - a number
    oneStrArr(['fail-1', 'fail-2']) // fail - two strings




### B - Array of Two Numbers<a name="arr-of-two-num-param"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoNumArr(two_num_arr){
    /**/    return type_czech.checkParam_type(two_num_arr, ['number', 'number'])
    /**/  }
    /**/  
    /**/  twoNumArr = type_czech.linkUp(twoNumArr, PRE_check_twoNumArr) 

    function twoNumArr(){ }

    twoNumArr([123, 456]) // pass
    
    twoNumArr([987])           // fail - one number 
    twoNumArr([111, 222, 333]) // fail - three numbers
    twoNumArr([321, '654'])    // fail - string second


### C - Array of Three Mixed Scalars<a name="arr-of-mixed-param"></a>

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









### D - Array of One Type<a name="arr-of-one-type"></a>

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
