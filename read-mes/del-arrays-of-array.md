
## Arrays of Array


#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Check String Parameters For:
  -  [A - Array of Arrays](#arr-of-array)









  -  [B - Array of Two Arrays](#arr-of-two-num-array)




  -  [C - Array of Three Mixed Scalars](#arr-of-mixed-param)
  -  [D - Array of One Type](#arr-of-one-type)

### A - Array of Arrays<a name="arr-of-array"></a>

Note there can only be one 'array-array' used in a checking statement
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_arrOfArr(array_of_arrays){
    /**/    return type_czech.checkParam_type(array_of_arrays, ['array-array'])
    /**/  }
    /**/  
    /**/  arrOfArr = type_czech.linkUp(arrOfArr, PRE_check_arrOfArr) 

    function arrOfArr(){ }

    arrOfArr([['single-array']])                                                // pass 
    arrOfArr([ ['str-arr'],        [135] ])                                     // pass
    arrOfArr([ ['s1', 's2', 's3'], [2,4,6] ])                                   // pass
    arrOfArr([ [1,2,3,4,5,6], [new Date('2000-01-01')], [Symbol('in-array')] ]) // pass
    arrOfArr([[[[[[['two-level-fail']]]]]]])                                    // pass

    arrOfArr([])     // fail - empty array
    arrOfArr([1234]) // fail - just one array level
 
### B - Array of Two Arrays<a name="arr-of-two-array"></a>

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_arrOftwoArr(two_num_arr){
    /**/    return type_czech.checkParam_type(two_num_arr, ['number-array', 'string-array'])  
    /**/  }
    /**/  
    /**/  arrOftwoArr = type_czech.linkUp(arrOftwoArr, PRE_check_arrOftwoArr) 

    function arrOftwoArr(){ }

    arrOftwoArr([ [123, 456], ['abc', 'def'] ]) // pass
    




pre_check_aFUnc(first_param, second_param, third_param){

  first_issue = type_czech.checkParam_typeExtra(first_param, ['array-array'])

  second_issue = type_czech.checkParam_typeExtra(second_param, ['number'])

  third_issue = type_czech.checkParam_typeExtra(third_param, ['number'])

}


    error message is terrible - _shapeArrayTypes is where it be

### XXXXXXXX<a name="arr-of-two-array"></a>

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_threeArrays(first_param, second_param, third_param){
    /**/    first_issue = type_czech.checkParam_type(first_param, ['number-array'])
    /**/    if (first_issue) return first_issue
    /**/  
    /**/    second_issue = type_czech.checkParam_type(second_param, ['string-array'])
    /**/    if (second_issue) return second_issue
    /**/  
    /**/    third_issue = type_czech.checkParam_type(third_param, ['array-array'])
    /**/    if (third_issue) return third_issue
    /**/  
    /**/    return ''; // no error
    /**/  }
    /**/  
    /**/  threeArrays = type_czech.linkUp(threeArrays, PRE_check_threeArrays) 

    function threeArrays(){ }

    threeArrays([123, 456],    ['abc', 'def'], [ [true, true]] ) // pass
    
    threeArrays([123, 'fail'], ['abc'],        [ [false]] ) // fail - string in first
    threeArrays([123],         ['fail', 12],   [ [false]] ) // fail - num in second
    threeArrays([123],         ['fail'],       [ 'not-array'] ) // fail - no arr in third
















///////////////////////////////////

### C - Array of Three Mixed Scalars<a name="arr-of-mixed-param"></a>

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
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

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
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
