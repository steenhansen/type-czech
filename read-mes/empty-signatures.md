
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

Objects that are classes, prototypes, closures, IIFEs, ClassFree, and OLOOs cannot be tested for emptiness.  

Empty testing has no array properties such as 'EMPTY-ERRORs'.


#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Check Parameters For:
  -  [A - Single Empty](#a)
  -  [B - Two Empties](#b)
  -  [C - Single Empty Element Array](#c)
  -  [D - Two Empty Element Array](#d)
  -  [E - Variadic Scalar Empties](#e)
  -  [F - Array with Single Empty](#f)
  -  [G - Array with Two Empties](#g)
  -  [H - Object with Empty Properties](#h)



### A - Single Scalar Empty<a id="a"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneValue(one_value){
/**/    return type_czech.checkParam_empty(one_value, 'EMPTY-ERROR')  // one thing
/**/  }
/**/  
/**/  oneValue = type_czech.linkUp(oneValue, PRE_check_oneValue) 

function oneValue(one_value){ }

oneValue('a-string') // pass
oneValue(17)         // pass

oneValue()   // fail - nothing
oneValue('') // fail - empty string
oneValue([]) // fail - empty array

oneValue({})        // fail - empty object
oneValue(null)      // fail - null
oneValue(undefined) // fail - undefined

oneValue(Infinity)     // fail - empty number
oneValue(NaN)          // fail - empty number
oneValue('one', 'two') // fail - two parameters
```

    
### B - Two Scalar Empties<a id="b"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_twoValues(value_1, value_2){
/**/    return type_czech.checkParam_empty([value_1, value_2], ['EMPTY-ERROR', 'EMPTY-ERROR'])  // two things
/**/  }
/**/  
/**/  twoValues = type_czech.linkUp(twoValues, PRE_check_twoValues) 

function twoValues(value_1, value_2){ }

twoValues('one', 'two') // pass
twoValues(1, 2)         // pass
twoValues([1], ['two']) // pass

twoValues()          // fail - nothing
twoValues(1)         // fail - one value
twoValues('one', []) // fail - no number

twoValues('one', '')         // fail - empty string
twoValues(1, 'two', 'three') // fail - extra parameter
```

### C - Single Scalar Element Array<a id="c"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneElemArr(one_num_elem_arr){
/**/    return type_czech.checkParam_empty(one_num_elem_arr, ['EMPTY-ERROR'])  // one thing in one thing
/**/  }
/**/  
/**/  oneElemArr = type_czech.linkUp(oneElemArr, PRE_check_oneElemArr) 

function oneElemArr(one_num_elem_arr){ }

oneElemArr(['will-pass']) // pass
oneElemArr([17])          // pass
oneElemArr([[18]])        // pass

oneElemArr()        // fail - nothing
oneElemArr(1329)    // fail - no array
oneElemArr([17,18]) // fail - two numbers
oneElemArr({a:1})   // fail - object
```



### D - Two Empty Element Array<a id="d"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_twoElemArr(two_num_elem_arr){
/**/    return type_czech.checkParam_empty(two_num_elem_arr, ['EMPTY-ERROR', 'EMPTY-ERROR'])
/**/  }
/**/  
/**/  twoElemArr = type_czech.linkUp(twoElemArr, PRE_check_twoElemArr) 

function twoElemArr(two_num_elem_arr){ }

twoElemArr([17, 18]) // pass

twoElemArr()              // fail - nothing
twoElemArr(1999)          // fail - number not array
twoElemArr([17])          // fail - only one number

twoElemArr([17,18,19])    // fail - three numbers
twoElemArr([1,2,'three']) // fail - two strings
```







### E - Variadic Scalar Empties<a id="e"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS')
/**/  
/**/  function PRE_check_someNums(){
/**/    return type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
/**/  }
/**/  
/**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums) 

function someNums(){ }

someNums(1) // pass
someNums(1,2,3) // pass

someNums()       // fail - nothing
someNums(1,2,'') // fail - last is empty
```



### F - Array with Single Scalar<a id="f"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneNumArray(array_with_1_num){
/**/    return type_czech.checkParam_empty(array_with_1_num, ['EMPTY-ERROR'])
/**/  }
/**/  
/**/  oneNumArray = type_czech.linkUp(oneNumArray, PRE_check_oneNumArray) 

function oneNumArray(array_with_1_num){ }

oneNumArray([1]) // pass

oneNumArray()        // fail - nothing
oneNumArray(1)       // fail - not array
oneNumArray([])      // fail - not number array
oneNumArray([''])    // fail - string
oneNumArray([1, '']) // fail - two parameters
```





### G - Array with Two Scalars<a id="g"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_twoNumArray(array_with_num_str){
/**/    return type_czech.checkParam_empty(array_with_num_str, ['EMPTY-ERROR', 'EMPTY-ERROR'])
/**/  }
/**/  
/**/  twoNumArray = type_czech.linkUp(twoNumArray, PRE_check_twoNumArray) 

function twoNumArray(array_with_num_str){ }

twoNumArray([1, 'blue-velvet']) // pass
twoNumArray([9, 8])             // pass

twoNumArray()                       // fail - nothing
twoNumArray(1, 'a-string')          // fail - not an array
twoNumArray(['str-1'])              // fail - one value
twoNumArray([9876,   'str-1', 123]) // fail - three values
```

### H - Object with Empty Properties<a id="h"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneObject(one_object){
/**/    return type_czech.checkParam_empty(one_object, {a: 'EMPTY-ERROR'} )
/**/  }
/**/  
/**/  oneObject = type_czech.linkUp(oneObject, PRE_check_oneObject) 

function oneObject(one_object){ }

oneObject({a:'a-string'}) // pass
oneObject({a:17})         // pass
oneObject({a:{b:{}}})     // pass
oneObject({a:{c:[]}})     // pass

oneObject({b:52}) // fail - no 'a' key
oneObject({a:''}) // fail
oneObject({a:[]}) // fail
oneObject({a:{}}) // fail
```


&copy; 2022 Steen Hansen
