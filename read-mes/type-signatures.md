
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

Type testing has the idea of an array with one type.

The idea of an array with one type is expressed by adding 's' to the end of the type.
For instance, 'numbers' represents the idea of an array of numbers having the having
1 to x elements.

#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Check Parameters For:
  -  [A - Single Scalar Type](#a)
  -  [B - Two Scalar Types](#b)
  -  [C - Single Object Type](#c)
  -  [D - Two Object Types](#d)
  -  [E - Single Scalar Element Array](#e)
  -  [F - Two Scalar Element Array](#f)
  -  [G - Variadic Scalar Types](#g)
  -  [H - Array with Single Type](#h)
  -  [I - Array with Two Types](#i)
  -  [J - Two Array Types](#j)
  -  [K - Array of Array Types](#k)
  -  [L - Object with Typed Properties](#l)
  -  [M - Two Objects with Typed Properties](#m)


  -  [N - Any Size Scalar Array of One Type](#n)
  -  [O - Any Size Object Array of One Object Type](#o) 



  -  [P - Typeless Object with Typeless Array](#p)
  -  [Q - Debug Complicated Signature](#q)


### A - Single Scalar Type<a id="a"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneStr(one_str){
/**/    return type_czech.checkParam_type(one_str, 'string')
/**/  }
/**/  
/**/  oneStr = type_czech.linkUp(oneStr, PRE_check_oneStr) 

function oneStr(one_str){ }

oneStr('a-string') // pass

oneStr()                 // fail - nothing
oneStr(17)               // fail - number
oneStr(false)            // fail - boolean
oneStr('a-str', 'b-str') // fail - two strings
```

    
### B - Two Scalar Types<a id="b"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_twoNums(num_1, str_2){
/**/    return type_czech.checkParam_type([num_1, str_2], ['number', 'string'])
/**/  }
/**/  
/**/  twoNums = type_czech.linkUp(twoNums, PRE_check_twoNums) 

function twoNums(num_1, str_2){ }

twoNums(1, 'two') // pass

twoNums()                  // fail - nothing
twoNums(1)                 // fail - no string
twoNums(1, 1)              // fail - no string
twoNums('one', 'two')      // fail - no number
twoNums(1, 'two', 'three') // fail - extra
```

### C - Single Object Type<a id="c"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneObj(one_obj){
/**/    return type_czech.checkParam_type(one_obj, {a:'number'})
/**/  }
/**/  
/**/  oneObj = type_czech.linkUp(oneObj, PRE_check_oneObj) 

function oneObj(one_obj){ }

oneObj({a:17}) // pass

oneObj()                 // fail - nothing
oneObj(18)               // fail - number only
oneObj({B:19})           // fail - wrong key
oneObj({a:'string'})     // fail - wrong type
oneObj({a:2222, b:1999}) // fail - extra stuff
```

### D - Two Object Types<a id="d"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_twoObj(one_obj, two_obj){
/**/    return type_czech.checkParam_type([one_obj, two_obj], [{a:'number'}, {b:'string'}])
/**/  }
/**/  
/**/  twoObj = type_czech.linkUp(twoObj, PRE_check_twoObj) 

function twoObj(one_obj, two_obj){ }

twoObj({a:17}, {b:'an-str'}) // pass

twoObj()                               // fail - nothing
twoObj(88)                             // fail - no object
twoObj({a:17})                         // fail - one object
twoObj({a:'a-string'})                 // fail - one object
twoObj({b:'a-string'})                 // fail - one object
twoObj({a:'a-string'}, {b:'a-string'}) // fail - one object
```    

### E - Single Scalar Element Array<a id="e"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneElemArr(one_num_elem_arr){
/**/    return type_czech.checkParam_type(one_num_elem_arr, ['number'])
/**/  }
/**/  
/**/  oneElemArr = type_czech.linkUp(oneElemArr, PRE_check_oneElemArr) 

function oneElemArr(one_num_elem_arr){ }

oneElemArr([17]) // pass

oneElemArr()               // fail - nothing
oneElemArr(1329)           // fail - no array
oneElemArr(['gonna-fail']) // fail - string not number
oneElemArr([[18]])         // fail - array array
oneElemArr([17,18])        // fail - two numbers
```



### F - Two Scalar Element Array<a id="f"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_twoElemArr(two_num_elem_arr){
/**/    return type_czech.checkParam_type(two_num_elem_arr, ['number', 'number'])
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









### G - Variadic Scalar Types<a id="g"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_someNums(){
/**/    return type_czech.checkArgs_typeEach(arguments, 'number')
/**/  }
/**/  
/**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums) 

function someNums(){ }

someNums(1) // pass
someNums(1,2,3) // pass

someNums()          // fail - nothing
someNums(1,2,false) // fail - last is boolean
```



### H - Array with Single Scalar<a id="h"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneNumArray(array_with_1_num){
/**/    return type_czech.checkParam_type(array_with_1_num, ['number'])
/**/  }
/**/  
/**/  oneNumArray = type_czech.linkUp(oneNumArray, PRE_check_oneNumArray) 

function oneNumArray(array_with_1_num){ }

oneNumArray([1]) // pass

oneNumArray()        // fail - nothing
oneNumArray(1)       // fail - not array
oneNumArray([])      // fail - not number array
oneNumArray(['sdf']) // fail - string
oneNumArray([1, 2])  // fail - two numbers
```





### I - Array with Two Scalars<a id="i"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_twoNumArray(array_with_num_str){
/**/    return type_czech.checkParam_type(array_with_num_str, ['number', 'string'])
/**/  }
/**/  
/**/  twoNumArray = type_czech.linkUp(twoNumArray, PRE_check_twoNumArray) 

function twoNumArray(array_with_num_str){ }

twoNumArray([1, 'blue-velvet']) // pass

twoNumArray()                       // fail - nothing
twoNumArray(1, 'a-string')          // fail - not an array
twoNumArray([9, 8])                 // fail - not string
twoNumArray('str-1', 'str-2')       // fail - no number
twoNumArray([9876,   'str-1', 123]) // fail - extra
```
 
### J - Two Array Types<a id="j"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_someNums2(strs_1, nums_2){
/**/    the_parameters = [strs_1, nums_2] 
/**/    the_signature = ['strings', 'numbers']
/**/    return type_czech.checkParam_type(the_parameters, the_signature)
/**/  }
/**/  
/**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums2) 

function someNums(strs_1, nums_2){ }

someNums(['car'], [1,2,3]) // pass
someNums(['one'], [2])     // pass

someNums(['car'])          // fail - no number array
someNums(['car'], ['bus']) // fail - no number array
someNums([1,2,3], [1,2,3]) // fail - no string array
```


### K - Array of Array Types<a id="k"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_arrayArray(array_with_2_num){
/**/    return type_czech.checkParam_type(array_with_2_num, ['arrays'])
/**/  }
/**/  
/**/  arrayArray = type_czech.linkUp(arrayArray, PRE_check_arrayArray) 

function arrayArray(array_with_2_num){ }

arrayArray([ [1, 'b'] ])                // pass
arrayArray([ [2, 3],   ['a', 'b'] ])    // pass
arrayArray([ [4, 'c'], ['d', 5] ])      // pass
arrayArray([ [1], [2], [3], [4], [5] ]) // pass

arrayArray()                     // fail
arrayArray([])                   // fail
arrayArray([ 'not-array' ])      // fail
arrayArray([ [6], 'not-array' ]) // fail
```






### L - Object with Typed Properties<a id="l"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_oneObject(one_object){
/**/    return type_czech.checkParam_type(one_object, {a:'number', b:{c:'boolean'}, d:['string', 'string']})
/**/  }
/**/  
/**/  oneObject = type_czech.linkUp(oneObject, PRE_check_oneObject) 

function oneObject(one_object){ }

oneObject({a:1, b:{c:false}, d:['str1', 'str2']}) // pass

oneObject({a:1, b:{X:false}, d:['str1', 'str2']})         // fail - key 'c' is 'X'
oneObject({a:1, b:{c:false}, d:['str1', 1777]})           // fail - last parameter 1777
oneObject({a:1, b:{c:false}, d:['str1', 'str1', 'str2']}) // fail - three strings in d
oneObject({a:1, b:{c:false}, d:['str1']})                 // fail - one string in d
```


### M - Two Objects with Typed Properties<a id="m"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_twoObjects(obj1, obj2){
/**/    return type_czech.checkParam_type([obj1, obj2], [{a:'number'}, {b:'string'}])
/**/  }
/**/  
/**/  twoObjects = type_czech.linkUp(twoObjects, PRE_check_twoObjects) 

function twoObjects(obj1, obj2){ }

twoObjects({a:1}, {b:'strb'}) // pass

twoObjects({a:1})             // fail - one object
twoObjects({a:1}, {Y:'strb'}) // fail - key 'b' is 'Y'
twoObjects({a:1}, {b:2021})   // fail - key 'b' is a number
twoObjects({a:1}, {b:2021})   // fail - key 'b' is a number
``` 
  
### N - Any Size Scalar Array of One Type<a id="n"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_anyNumArray(array_with_any_num){
/**/    return type_czech.checkParam_type(array_with_any_num, ['numbers'])
/**/  }
/**/  
/**/  anyNumArray = type_czech.linkUp(anyNumArray, PRE_check_anyNumArray) 

function anyNumArray(array_with_any_num){ }

anyNumArray([1])                 // pass
anyNumArray([1,2])               // pass
anyNumArray([1,2,3])             // pass
anyNumArray([1,2,3,4,5,6,7,8,9]) // pass

anyNumArray()        // fail - nothing
anyNumArray(1)       // fail - not array
anyNumArray([])      // fail - not number array
anyNumArray(['sdf']) // fail - string
```
checkArray_objType0n
checkArray_objType0n
checkArray_objType0n
checkArray_objType0n
checkArray_objType0n
checkArray_objType0n
checkArray_objType0n
checkArray_objType0n
checkArray_objType0n


### O - Any Size Object Array of One Object Type<a id="o"></a>
  Two choices:
  -  Use checkArray_objType1n() if the array must not be empty.
  -  Use checkArray_objType0n() if the array can be empty, like [], as below.

```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  A_NUM_B_STR_OBJ_TYPE = {
/**/    a: "number",
/**/    b: "string"
/**/  };
/**/  
/**/  function PRE_check_anyObjArray(an_obj_array){
/**/    return type_czech.checkArray_objType0n(an_obj_array, A_NUM_B_STR_OBJ_TYPE)
/**/  }
/**/  
/**/  anyObjArray = type_czech.linkUp(anyObjArray, PRE_check_anyObjArray) 

function anyObjArray(an_obj_array){ }

anyObjArray([ ])                                                               // pass
anyObjArray([ {a:1,b:'one'} ])                                                 // pass
anyObjArray([ {a:1,b:'one'}, {a:2,b:'two'} ])                                  // pass
anyObjArray([ {a:1,b:'one'}, {a:2,b:'two'}, {a:3,b:'three'} ])                 // pass
anyObjArray([ {a:1,b:'one'}, {a:2,b:'two'}, {a:3,b:'three'}, {a:4,b:'four'} ]) // pass

anyObjArray()                                 // fail - nothing
anyObjArray([ {a:'one',b:'one'} ])            // fail a is a string
anyObjArray([ {a:1,b:2} ])                    // fail b is a number
anyObjArray([ {a:1,b:'one',c:false} ])        // fail extra key c
anyObjArray([ {a:1,b:'one'}, {a:2,b:false} ]) // fail - second b is boolean 
```


### P - Typeless Object with Typeless Array<a id="p"></a>
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  
/**/  function PRE_check_objAndArr(an_obj, an_array){
/**/    return type_czech.checkParam_type([an_obj, an_array], ['object', 'array'])
/**/  }
/**/  
/**/  objAndArr = type_czech.linkUp(objAndArr, PRE_check_objAndArr) 

function objAndArr(an_obj, an_array){ }

objAndArr({}, [])                      // pass
objAndArr({a:1}, [1])                  // pass
objAndArr({z:{x:[]}}, ['a', 'b', 'c']) // pass

objAndArr({}, 'not-array') // fail - no array
objAndArr({}, [], 12)      // fail - extra number
objAndArr({})              // fail - no array
```

### Q - Debug Complicated Signature<a id="q"></a>
```
type_czech = TypeCzech('LOG-ERRORS')
    
COMPLEX_SIGNATURE=[{a:[{r:['array',['numbers'],'bigint','boolean','date','function',
                    'number','object',{b:'number'},'regexp','string','symbol']}]}];

function PRE_check_complexDebug(a_param){
    console.log(type_czech.debugSignature(a_param))
    console.log(type_czech.debugSignature(COMPLEX_SIGNATURE))
    return type_czech.checkParam_type(a_param, COMPLEX_SIGNATURE)
}

complexDebug = type_czech.linkUp(complexDebug, PRE_check_complexDebug) 

function complexDebug(a_param){ }

complex_pass=[{a:[{r:[[123],[1,2,3],987n,false,new Date('1999-12-12'),x=>x,
                12,{a:3},{b:4},/d/,'abc',Symbol('sym')]}]}];
complexDebug(complex_pass)
```

&copy; 2024 Steen Hansen
