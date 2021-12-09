
## Type Signatures

There are ten basic designations of type. 
[] and {} are not types but give structure to composite types.

  - array - Used when a typeless array is what is wanted
  - bigint
  - boolean
  - date
  - function
  - number
  - object - Used when a typeless object is what is wanted
  - regexp
  - string
  - symbol

Note that object that are classes and prototypes can also be tested for type.
Whereas closures, IIFEs, ClassFree, and OLOO objects must test interfaces.

#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Check Parameters For:
  -  [A - Single Scalar Type](#A)
  -  [B - Two Scalar Types](#B)
  -  [C - Single Object Type](#C)
  -  [D - Two Object Types](#D)
  -  [E - Single Scalar Element Array](#E)
  -  [F - Two Scalar Element Array](#F)
  -  [G - Variadic Scalar Types](#G)
  -  [H - Array with Single Type](#H)
  -  [I - Array with Two Types](#I)
  -  [J - Two Array Types](#J)
  -  [K - Array of Array Types](#K)


### A - Single Scalar Type<a name="A"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneStr(one_str){
    /**/    return type_czech.checkParam_type(one_str, 'string')
    /**/  }
    /**/  
    /**/  oneStr = type_czech.linkUp(oneStr, PRE_check_oneStr) 

    function oneStr(){ }

    oneStr('a-string') // pass
    
    oneStr()                 // fail - nothing
    oneStr(17)               // fail - number
    oneStr(false)            // fail - boolean
    oneStr('a-str', 'b-str') // fail - two strings


    
### B - Two Scalar Types<a name="B"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoNums(num_1, str_2){
    /**/    return type_czech.checkParam_type([num_1, str_2], ['number', 'string'])
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


### C - Single Object Type<a name="C"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneObj(one_obj){
    /**/    return type_czech.checkParam_type(one_obj, {a:'number'})
    /**/  }
    /**/  
    /**/  oneObj = type_czech.linkUp(oneObj, PRE_check_oneObj) 

    function oneObj(){ }

    oneObj({a:17}) // pass

    oneObj()                 // fail - nothing
    oneObj(18)               // fail - number only
    oneObj({B:19})           // fail - wrong key
    oneObj({a:'string'})     // fail - wrong type
    oneObj({a:2222, b:1999}) // fail - extra stuff


### D - Two Object Types<a name="D"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoObj(one_obj, two_obj){
    /**/    return type_czech.checkParam_type([one_obj, two_obj], [{a:'number'}, {b:'string'}])
    /**/  }
    /**/  
    /**/  twoObj = type_czech.linkUp(twoObj, PRE_check_twoObj) 

    function twoObj(){ }

    twoObj({a:17}, {b:'an-str'}) // pass

    twoObj()                               // fail - nothing
    twoObj(88)                             // fail - no object
    twoObj({a:17})                         // fail - one object
    twoObj({a:'a-string'})                 // fail - one object
    twoObj({b:'a-string'})                 // fail - one object
    twoObj({a:'a-string'}, {b:'a-string'}) // fail - one object

### E - Single Scalar Element Array<a name="E"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneElemArr(one_num_elem_arr){
    /**/    return type_czech.checkParam_type(one_num_elem_arr, ['number'])
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

### F - Two Scalar Element Array<a name="F"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoElemArr(two_num_elem_arr){
    /**/    return type_czech.checkParam_type(two_num_elem_arr, ['number', 'number'])
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










### G - Variadic Scalar Types<a name="G"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_someNums(){
    /**/    return type_czech.checkArgs_typeVariadic(arguments, ['number-array'])
    /**/  }
    /**/  
    /**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums) 

    function someNums(){ }

    someNums(1) // pass
    someNums(1,2,3) // pass

    someNums()          // fail - nothing
    someNums(1,2,false) // fail - last is boolean




### H - Array with Single Scalar<a name="H"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneNumArray(array_with_1_num){
    /**/    return type_czech.checkParam_type(array_with_1_num, ['number'])
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






### I - Array with Two Scalars<a name="I"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_twoNumArray(array_with_num_str){
    /**/    return type_czech.checkParam_type(array_with_num_str, ['number', 'string'])
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

 
### J - Two Array Types<a name="J"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_someNums2(strs_1, nums_2){
    /**/    the_parameters = [strs_1, nums_2] 
    /**/    the_signature = ['string-array', 'number-array']
    /**/    return type_czech.checkParam_type(the_parameters, the_signature)
    /**/  }
    /**/  
    /**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums2) 

    function someNums(){ }

    someNums(['car'], [1,2,3]) // pass
    someNums(['one'], [2])     // pass

    someNums(['car'])          // fail - no number array
    someNums(['car'], ['bus']) // fail - no number array
    someNums([1,2,3], [1,2,3]) // fail - no string array

### K - Array of Array Types<a name="K"></a>
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_arrayArray(array_with_2_num){
    /**/    return type_czech.checkParam_type(array_with_2_num, ['array-array'])
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
