
## Arrays of Arrays:

Note that for brevity's sake these examples do not have the on/off construct of:
```
if (typeof TypeCzech === 'function')
  type_czech = TypeCzech('THROW-EXCEPTIONS')
else
  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
```

  -  [1  One Array Parameter](#one-array-parameter)
  -  [2  Two Array Parameters](#two-array-parameters)
  -  [3  One Array of Numbers Parameter](#one-array-of-numbers-parameters)
  -  [4 Varying Array of Array Parameters](#vary-array-of-array-parameters)
  -  [5 Varying Array of Numbers Parameters](#vary-array-of-numbers-parameters)

#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)


### 1 One Array Parameter<a name="one-array-parameter"></a>
#### checkParam_type(an_array, 'array')

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneArray(an_array){
    /**/    return type_czech.checkParam_type(an_array, 'array')
    /**/  }
    /**/  
    /**/  oneArray = type_czech.linkUp(oneArray, PRE_check_oneArray) 

    function oneArray(){ }

    oneArray([])                      // pass
    oneArray([1,2,3])                 // pass
    oneArray(['a','b','c'])           // pass
    oneArray([ ['a'],[2],['three'] ]) // pass
    
    oneArray()              // fail - nothing
    oneArray({})            // fail - an object
    oneArray('fail-string') // fail - a string

### 2 Two Array Parameters<a name="two-array-parameters"></a>
#### checkParam_type( [array_1, array_2], ['array', 'array'] )

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoArrays(array_1, array_2){
    /**/    return type_czech.checkParam_type([array_1, array_2], ['array', 'array'])
    /**/  }
    /**/  
    /**/  twoArrays = type_czech.linkUp(twoArrays, PRE_check_twoArrays) 

    function twoArrays(){ }

    twoArrays([], [])                 // pass
    twoArrays([1,2,3], ['a','b','c']) // pass
        
    twoArrays([])                      // fail - one array
    twoArrays([1,2,3])                 // fail - one array
    twoArrays([ ['a'],[2],['three'] ]) // fail - one array
    twoArrays()                        // fail - nothing
    twoArrays({})                      // fail - an object
    twoArrays('fail-string')           // fail - a string

### 3 One Array of Numbers Parameter<a name="one-array-of-numbers-parameters"></a>
#### checkParam_type( num_array, ['number'] )

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneNumArray(num_array){
    /**/    return type_czech.checkParam_type(num_array, ['number'])
    /**/  }
    /**/  
    /**/  oneNumArray = type_czech.linkUp(oneNumArray, PRE_check_oneNumArray) 

    function oneNumArray(){ }

    oneNumArray([1]) // pass
    oneNumArray([1,2,3]) // pass

    oneNumArray()                // fail - nothing
    oneNumArray([])              // fail - no number 
    oneNumArray(['fail-string']) // fail - array of string



### 4 Varying Array of Array Parameters<a name="vary-array-of-array-parameters"></a>
#### checkArgs_typeVariadic(arguments, ['array'] )

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_varyNumArray(){
    /**/    return type_czech.checkArgs_typeVariadic(arguments, ['array'])
    /**/  }
    /**/  
    /**/  varyNumArray = type_czech.linkUp(varyNumArray, PRE_check_varyNumArray) 

    function varyNumArray(){ }

    varyNumArray([1])                // pass
    varyNumArray([1], ['b'])         // pass
    varyNumArray([1], ['b'], [true]) // pass

    varyNumArray('a-string') // fail - not an array





 
### 5 Varying Array of Numbers Parameters<a name="vary-array-of-numbers-parameters"></a>
#### checkArgs_typeVariadic(arguments, [['number']] )

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_varyArrayArray(){
    /**/    return type_czech.checkArgs_typeVariadic(arguments, [['number']])
    /**/  }
    /**/  
    /**/  varyArrayArray = type_czech.linkUp(varyArrayArray, PRE_check_varyArrayArray) 

    function varyArrayArray(){ }

    varyArrayArray([1])        // pass
    varyArrayArray([2], [345]) // pass

    varyArrayArray([9], [8], [true]) // fail - true is not a number
    varyArrayArray('a-string')       // fail - not an array


&copy; 2021 Steen Hansen
