
## Empty Signatures

There are three designations of emptyness, or valuelessness.
Strings, objects, and arrays can be tested for this.
And of course null and undefined values.

  - EMPTY-ERROR - Test for empty strings, objects, or arrays; and null/undefined
  - EMPTY-OK - Used when an empty value is fine.
  - EMPTY-IGNORE - Basically a placeholder.

Odd empty values.
  - Infinity
  - NaN
  - /(?:)/
  - new Date('')

Note that objects that are classes, prototypes, closures, IIFEs, ClassFree, and OLOOs cannot be tested for emptiness.  

#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Check Parameters For:
  -  [A - Single Empty](#A)




  
  -  [B - Two Empties](#B)
  -  [C - Single Empty Element Array](#C)
  -  [D - Two Empty Element Array](#D)
  -  [E - Variadic Scalar Empties](#E)
  -  [F - Array with Single Empty](#F)
  -  [G - Array with Two Empties](#G)
  -  [H - Two Array Empties](#H)
  -  [I - Array of Array Empties](#I)


### A - Single Scalar Empty<a name="A"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneStr(one_str){
    /**/    return type_czech.checkParam_empty(one_str, 'EMPTY-ERROR')
    /**/  }
    /**/  
    /**/  oneStr = type_czech.linkUp(oneStr, PRE_check_oneStr) 

    function oneStr(){ }

    oneStr('a-string') // pass
    oneStr(17)         // pass
    
    oneStr()    // fail - nothing
    oneStr('')  // fail - empty string
    oneStr([]) // fail - empty array
    oneStr({}) // fail - empty object

    oneStr(null) // fail - empty object
    oneStr(undefined) // fail - empty object
    oneStr(Infinity) // fail - empty object
    oneStr(NaN) // fail - empty object


    
### B - Two Scalar Empties<a name="B"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoNums(num_1, str_2){
    /**/    return type_czech.checkParam_Empty([num_1, str_2], ['number', 'string'])
    /**/  }
    /**/  
    /**/  twoNums = type_czech.linkUp(twoNums, PRE_check_twoNums) 

    function twoNums(){ }

    twoNums(1, 'two') // pass

    twoNums()                  // fail - nothing
    twoNums(1)                 // fail - no string
    twoNums(1, 1)              // fail - no string
    twoNums('one', 'two')      // fail - no number
    twoNums(1, 'two', 'three') // fail - extra

### C - Single Scalar Element Array<a name="C"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneElemArr(one_num_elem_arr){
    /**/    return type_czech.checkParam_Empty(one_num_elem_arr, ['number'])
    /**/  }
    /**/  
    /**/  oneElemArr = type_czech.linkUp(oneElemArr, PRE_check_oneElemArr) 

    function oneElemArr(){ }

    oneElemArr([17]) // pass

    oneElemArr()               // fail - nothing
    oneElemArr(1329)           // fail - no array
    oneElemArr(['gonna-fail']) // fail - string not number
    oneElemArr([[18]])         // fail - array array
    oneElemArr([17,18])        // fail - two numbers

### D - Two Scalar Element Array<a name="D"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoElemArr(two_num_elem_arr){
    /**/    return type_czech.checkParam_Empty(two_num_elem_arr, ['number', 'number'])
    /**/  }
    /**/  
    /**/  twoElemArr = type_czech.linkUp(twoElemArr, PRE_check_twoElemArr) 

    function twoElemArr(){ }

    twoElemArr([17, 18]) // pass

    twoElemArr()              // fail - nothing
    twoElemArr(1999)          // fail - number not array
    twoElemArr([17])          // fail - only one number
    twoElemArr([17,18,19])    // fail - three numbers
    twoElemArr([1,2,'three']) // fail - two strings










### E - Variadic Scalar Empties<a name="E"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_someNums(){
    /**/    return type_czech.checkArgs_EmptyVariadic(arguments, ['number-array'])
    /**/  }
    /**/  
    /**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums) 

    function someNums(){ }

    someNums(1) // pass
    someNums(1,2,3) // pass

    someNums()          // fail - nothing
    someNums(1,2,false) // fail - last is boolean




### F - Array with Single Scalar<a name="F"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneNumArray(array_with_1_num){
    /**/    return type_czech.checkParam_Empty(array_with_1_num, ['number'])
    /**/  }
    /**/  
    /**/  oneNumArray = type_czech.linkUp(oneNumArray, PRE_check_oneNumArray) 

    function oneNumArray(){ }

    oneNumArray([1]) // pass

    oneNumArray()        // fail - nothing
    oneNumArray(1)       // fail - not array
    oneNumArray([])      // fail - not number array
    oneNumArray(['sdf']) // fail - string
    oneNumArray([1, 2])  // fail - two numbers






### G - Array with Two Scalars<a name="G"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoNumArray(array_with_num_str){
    /**/    return type_czech.checkParam_Empty(array_with_num_str, ['number', 'string'])
    /**/  }
    /**/  
    /**/  twoNumArray = type_czech.linkUp(twoNumArray, PRE_check_twoNumArray) 

    function twoNumArray(){ }

    twoNumArray([1, 'blue-velvet']) // pass

    twoNumArray()                       // fail - nothing
    twoNumArray(1, 'a-string')          // fail - not an array
    twoNumArray([9, 8])                 // fail - not string
    twoNumArray('str-1', 'str-2')       // fail - no number
    twoNumArray([9876,   'str-1', 123]) // fail - extra

 
### H - Two Array Empties<a name="H"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_someNums2(strs_1, nums_2){
    /**/    the_parameters = [strs_1, nums_2] 
    /**/    the_signature = ['string-array', 'number-array']
    /**/    return type_czech.checkParam_Empty(the_parameters, the_signature)
    /**/  }
    /**/  
    /**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums2) 

    function someNums(){ }

    someNums(['car'], [1,2,3]) // pass
    someNums(['one'], [2])     // pass

    someNums(['car'])          // fail - no number array
    someNums(['car'], ['bus']) // fail - no number array
    someNums([1,2,3], [1,2,3]) // fail - no string array

### I - Array of Array Empties<a name="I"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_arrayArray(array_with_2_num){
    /**/    return type_czech.checkParam_Empty(array_with_2_num, ['array-array'])
    /**/  }
    /**/  
    /**/  arrayArray = type_czech.linkUp(arrayArray, PRE_check_arrayArray) 

    function arrayArray(){ }

    arrayArray([ [1, 'b'] ])                // pass
    arrayArray([ [2, 3],   ['a', 'b'] ])    // pass
    arrayArray([ [4, 'c'], ['d', 5] ])      // pass
    arrayArray([ [1], [2], [3], [4], [5] ]) // pass

    arrayArray()                     // fail
    arrayArray([])                   // fail
    arrayArray([ 'not-array' ])      // fail
    arrayArray([ [6], 'not-array' ]) // fail


&copy; 2021 Steen Hansen
