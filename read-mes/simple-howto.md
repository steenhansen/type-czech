
## Simple How To Check For:

Note that for brevity's sake these examples do not have the on/off construct of:
```
if (typeof TypeCzech === 'function')
  type_czech = TypeCzech('THROW-EXCEPTIONS')
else
  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
```

  -  [1 String Parameter](#string-parameter)
  -  [2 Positive Number Parameter](#positive-number)

  -  [3 RegExp match Parameter](#regexp-match)
  -  [4 Parameter Contained in Set](#in-set)
  -  [5 Sorted Parameters](#sorted-parameters)
  -  [6 Non-Empty Parameter](#not-empty)
  -  [7 Array of Arrays Parameter](#array-of-arrays)

  -  [8 Returned Results Constraints](#returned-results-constraints)

  -  [9 Array of Arrays Result](#arr-arr-result)
  -  [10 Exactly Three Parameters](#three-params)
  -  [11 Parameter Mutated](#parameter-mutated)
  -  [12 Every Type in Array](#every-array)
  -  [13 Every Type in Object](#every-object)
  -  [14 Array of Many Types](#mixed-array)

  -  [15 Object of Many Types](#mixed-object)
  -  [16 String Cased](#string-cased)


#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)


### 1 String Parameter<a name="string-parameter"></a>

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_aString(a_string){
    /**/    return type_czech.checkParam_type(a_string, 'string')
    /**/  }
    /**/  
    /**/  aString = type_czech.linkUp(aString, PRE_check_aString) 

    function aString(){ }

    aString('a-string') // pass
    
    aString(99) // fail - a number


### 2 Positive Number Parameter<a name="positive-number"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_expectPosNum(a_number){
    /**/    not_number = type_czech.checkParam_type(a_number, 'number')
    /**/    if (not_number) return `Error, ${a_number} is not a Number`
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/  }
    /**/  
    /**/  expectPosNum = type_czech.linkUp(expectPosNum, PRE_check_expectPosNum) 

    function expectPosNum(){ }

    expectPosNum(1) // pass

    expectPosNum('not-a-number') // fail - not a number
    
    expectPosNum(-4) // fail - negative
    

### 3 RegExp match Parameter<a name="regexp-match"></a>

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/    
    /**/  function PRE_check_expectsSentence(a_sentence){ 
    /**/    string_issue = type_czech.checkParam_type(a_sentence, 'string')
    /**/    if (string_issue)
    /**/      return `Error, '${a_sentence}' is not a string`
    /**/    one_upper_anythings_then_period = new RegExp(/^[A-Z].*\.$/)
    /**/    is_sentence = a_sentence.match(one_upper_anythings_then_period)
    /**/    if (!is_sentence) 
    /**/      return `Error, '${a_sentence}' is not a sentence`
    /**/  }
    /**/    
    /**/  expectsSentence = type_czech.linkUp(expectsSentence, PRE_check_expectsSentence)

    function expectsSentence(){ }

    expectsSentence('Starts with uppercase and ends with period.') //pass

    expectsSentence('starts with lowercase and no period') // fail - bad start and end

    expectsSentence(17) // fail - not a string

### 4 Parameter Contained in Set<a name="in-set"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  CMYK_COLORS = ['cyan', 'magenta', 'yellow', 'black']
    /**/  
    /**/  function PRE_check_expectsCMYK(a_color){ 
    /**/    if (! CMYK_COLORS.includes(a_color))
    /**/      return `Error, '${a_color}' is not a CMYK color`
    /**/  }
    /**/    
    /**/  expectsCMYK = type_czech.linkUp(expectsCMYK, PRE_check_expectsCMYK)
      
    function expectsCMYK(){ }
        
    expectsCMYK('cyan') // pass

    expectsCMYK('russian blue') // fail - not in CMYK_COLORS

    expectsCMYK(1234) // fail - not in CMYK_COLORS


### 5 Sorted Parameters<a name="sorted-parameters"></a>
  
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/    
    /**/  function PRE_check_expectsAsc(){ 
    /**/    increasing_positives = [...arguments]
    /**/    current_largest = -1;
    /**/    for (const next_integer of increasing_positives) {
    /**/      if (next_integer < current_largest) 
    /**/        return 'Error, array is not ascending : ' + increasing_positives.join(', ')
    /**/      current_largest = next_integer
    /**/    }
    /**/  }
    /**/    
    /**/  expectsAsc = type_czech.linkUp(expectsAsc, PRE_check_expectsAsc)
      
    function expectsAsc(){ }

    expectsAsc(1,22,333,4444) // pass
    
    expectsAsc(4444,333,2,1) // fail - sorted wrong way

### 6 Non-Empty Parameter<a name="not-empty"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_check_isNotEmpty(a_param){
    /**/    return type_czech.checkParam_empty(a_param, 'EMPTY-ERROR')
    /**/  }
    /**/  
    /**/  isNotEmpty = type_czech.linkUp(isNotEmpty, PRE_check_isNotEmpty) 

    function isNotEmpty(){ }

    isNotEmpty('a-string') // pass

    isNotEmpty({a:1}) // pass

    isNotEmpty([1]) // pass 

    isNotEmpty('') // fail - empty
   
    isNotEmpty({}) // fail - empty

    isNotEmpty([]) // fail - empty



### 7 Array of Arrays Parameter<a name="array-of-arrays"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_check_arrOfNumArr(array_of_num_array){
    /**/    return type_czech.checkParam_type(array_of_num_array, [ ['number'] ] )
    /**/  }
    /**/  
    /**/  arrOfNumArr = type_czech.linkUp(arrOfNumArr, PRE_check_arrOfNumArr) 

    function arrOfNumArr(arr_num_arrs){
    }

    arr_1 = [1]
    arr_2 = [2,2]
    arr_3 = [3,3,3]
    array_array =[ arr_1, arr_2, arr_3 ]

    arrOfNumArr(array_array) // pass

    arrOfNumArr([1,2,3]) // fail - just an array

    arrOfNumArr( [ array_array, array_array] ) // fail - array of array of array



### 8 Returned Results Constraints<a name="returned-results-constraints"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function POST_check_yourFunc(num_result) { 
    /**/    if (num_result<100) 
    /**/      return `Error, '${num_result}' is too small`
    /**/    if (num_result>199)
    /**/      return `Error, '${num_result}' is too Large`
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, undefined, POST_check_yourFunc) 
    
    function yourFunc(a_number){ return a_number}

    yourFunc(150)  // pass

    yourFunc(22)  // fail - too small
    yourFunc(333) // fail - too big

### 9 Array of Number Arrays Result<a name="arr-arr-result"></a>

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function POST_check_arrArrRes(arr_num_arr){
    /**/    return type_czech.checkParam_type(arr_num_arr, [['number']])
    /**/  }
    /**/  
    /**/  arrArrRes = type_czech.linkUp(arrArrRes, undefined, POST_check_arrArrRes) 

    function arrArrRes(an_array){
      return an_array
    }

    arrArrRes([ [1], [2,2], [3,3,4] ]) // pass

    arrArrRes([ [1], ['an-error'] ])  // fail - array of string

### 10 Exactly Three Number Parameters<a name="three-params"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_check_arrOf3Nums(arr_of_3_nums){
    /**/    arr_len = arr_of_3_nums.length
    /**/    if (arr_len !== 3) return `Array length is ${arr_len} <> 3`
    /**/    return type_czech.checkParam_type(arr_of_3_nums, ['number'])
    /**/  }
    /**/  
    /**/  arrOf3Nums = type_czech.linkUp(arrOf3Nums, PRE_check_arrOf3Nums) 

    function arrOf3Nums(arr_of_3_nums){ }

    arrOf3Nums([1,2,3]) // pass

    arrOf3Nums([1,2,3,4])   // fail - four numbers
    arrOf3Nums(['one',2,3]) // fail - first parameter a string

Shorter version

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_check_arrOf3Nums(arr_of_3_nums){
    /**/    THREE_NUMBERS = ['number','number','number']
    /**/    return type_czech.checkParam_type(arr_of_3_nums, THREE_NUMBERS)
    /**/  }
    /**/  
    /**/  arrOf3Nums = type_czech.linkUp(arrOf3Nums, PRE_check_arrOf3Nums) 

    function arrOf3Nums(arr_of_3_nums){ }

    arrOf3Nums([1,2,3]) // pass

    arrOf3Nums([1,2,3,4])   // fail - four numbers
    arrOf3Nums(['one',2,3]) // fail - first parameter a string





### 11 Parameter Mutated<a name="parameter-mutated"></a>
Note that check_buildSnapshot() is called in the PRE_check() function to record the object value. 
And then the object is checked for any mutations, after isElvis() returns, in the POST_check() function via check_mutatedSnapshot().

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_isElvis(name_object){
    /**/    type_czech.check_buildSnapshot('isElvis', 'name_object', name_object)
    /**/  }
    /**/  
    /**/  function POST_check_isElvis(){
    /**/    mutation_error = type_czech.check_mutatedSnapshot('isElvis', 'name_object')
    /**/    if (mutation_error) return mutation_error
    /**/  }
    /**/  
    /**/  isElvis = type_czech.linkUp(isElvis, PRE_check_isElvis, POST_check_isElvis) 

    function isElvis(elvis_object){
      if (elvis_object.the_name === 'Presley')
        elvis_object.the_name ='Aaron Presley'
    }

    isElvis({the_name:'Elvis'}) //pass

    isElvis({the_name:'Presley'}) // fail - the_name changed to 'Aaron Presley'


### 12 Every Type in Array<a name="every-array"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_check_yourFunc(array_all_types) { 
    /**/    all_types = [ 'array', 'bigint', 'boolean', 'date', 'function', 
    /**/                  'number', 'object', 'regexp', 'string', 'symbol' ]
    /**/    return type_czech.checkParam_type(array_all_types, all_types)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(){ }

    the_array = [1, true, 'three']
    the_bigInt = 1234567890n
    the_boolean = true
    the_date = new Date('1999-12-31')
    the_function = x => x
    the_number = 19
    the_object = {the_key:77}
    the_regExp = /^d+$/
    the_string = 'a-string'
    the_symbol = Symbol('the-symbol')
    yourFunc([ the_array, the_bigInt, the_boolean, the_date, the_function,
            the_number, the_object, the_regExp, the_string, the_symbol])   // pass

    the_boolean = 1 // fail - the_boolean is a number
    yourFunc([ the_array, the_bigInt, the_boolean, the_date, the_function,
            the_number, the_object, the_regExp, the_string, the_symbol])  

### 13 Every Type in Object<a name="every-object"></a>

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/
    /**/  function PRE_check_yourFunc(object_all_types) { 
    /**/    all_types = { the_array:'array', the_bigInt:'bigint', the_boolean:'boolean', 
    /**/                  the_date:'date', the_function:'function', the_number:'number',
    /**/                   the_object:'object', the_regExp:'regexp', the_string:'string',
    /**/                    the_symbol:'symbol' }
    /**/    return type_czech.checkParam_type(object_all_types, all_types)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(){ }

    the_array = [1, true, 'three']
    the_bigInt = 1234567890n
    the_boolean = true
    the_date = new Date('1999-12-31')
    the_function = x => x
    the_number = 19
    the_object = {the_key:77}
    the_regExp = /^d+$/
    the_string = 'a-string'
    the_symbol = Symbol('the-symbol')
    yourFunc({ the_array, the_bigInt, the_boolean, the_date, the_function,
            the_number, the_object, the_regExp, the_string, the_symbol})   // pass
    
    the_boolean = 1 // fail - the_boolean is a number
    yourFunc({ the_array, the_bigInt, the_boolean, the_date, the_function,
            the_number, the_object, the_regExp, the_string, the_symbol})

### 14 Array of Many Types<a name="mixed-array"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_check_yourFunc(num, str, bool, date) { 
    /**/    the_parameter = [num, str, bool, date]
    /**/    return type_czech.checkParam_type(the_parameter, ['number', 'string', 'boolean', 'date'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(){ }

    yourFunc(1, 'a-string', false, new Date('1999-12-31')) // pass
    
    yourFunc(1, 'a-string', false, '2021-12-02') // fail - string not date


### 15 Object of Many Types<a name="mixed-object"></a>

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/
    /**/  function PRE_check_yourFunc(an_object) { 
    /**/    all_types = { the_array:'array', the_object:'object', the_bigInt:'bigint',
    /**/                 the_numb_array: [['number']], 
    /**/                 the_char_object:{a:'string', b:'string'} }
    /**/    return type_czech.checkParam_type(an_object, all_types)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(){ }

    the_array = [1, true, 'three']
    the_object = {the_key:77}
    the_bigInt = 1234567890n
    the_numb_array = [ [1], [2], [3] ]
    the_char_object = {a: 'A', b:'B'} // pass
    yourFunc({ the_array, the_object, the_bigInt, the_numb_array, the_char_object})
    
    the_error = {A: 'A', b:'B'} // fail - key is uppercase 'A' not lowercase 'a'
    yourFunc({ the_array, the_object, the_bigInt, the_numb_array, the_error }) 


### 16 String Cased<a name="string-cased"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_check_yourFunc(a_name) { 
    /**/    cased_name = new RegExp(/^[A-Z][a-z]* [A-Z][a-z]*$/)
    /**/    good_name = a_name.match(cased_name)
    /**/    if (!good_name) 
    /**/      return `Error, '${a_name}' is not cased correctly`
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc)

    function yourFunc(a_name){}
    
    yourFunc('Bob Marley')  // pass

    yourFunc('metacomet') // fail - all lower case
    


&copy; 2021 Steen Hansen
