
## How To:

### Check parameter type:

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_aString(a_string){
    /**/    return type_czech.valid(arguments, 'String')
    /**/  }
    /**/  
    /**/  aString = type_czech.check(aString, PRE_aString) 

    function aString(an_str){
    }

    aString('a-string')
    >>
    
    aString(99)          
    >>Uncaught  PRE_aString() aString() PRE-FUNC: The variable '99', which is a 'Number', is not a 'String'
    >>                valid(arguments, expected_types)
    >>                 ACTUAL TYPES 'Number'
    >>                 ACTUAL VALUE 99
    >>                EXPECTED TYPE 'String'
    >>        CALLING FUNCTION PRE_aString(a_string)

### Check for a positive parameter number:

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_expectPosNum(a_number){
    /**/    not_number = type_czech.valid(arguments, 'Number')
    /**/    if (not_number) return `Error, ${a_number} is not a number`
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/  }
    /**/  
    /**/  expectPosNum = type_czech.check(expectPosNum, PRE_expectPosNum) 

    function expectPosNum(a_number){
    }

    expectPosNum(1)
    >>

    expectPosNum('not-a-number')
    >>Error, not-a-number is not a number
    
    expectPosNum(-4)             
    >>Error, -4 is not positive
    

### Check for a RegExp match in a parameter:

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/    
    /**/  function PRE_expectsSentence(a_sentence){ 
    /**/    if (!typeof a_sentence === 'string')
    /**/      return "Error, '${a_sentence}' is not a string"
    /**/    upper_then_period_end = new RegExp(/^[A-Z].*\.$/)
    /**/    is_sentence = a_sentence.match(upper_then_period_end)
    /**/    if (!is_sentence) 
    /**/      return `Error, '${a_sentence}' is not a sentence`
    /**/  }
    /**/    
    /**/  expectsSentence = type_czech.check(expectsSentence, PRE_expectsSentence)

    function expectsSentence(a_sentence){
    }

    expectsSentence('Starts with uppercase and ends with period.')
    >>

    expectsSentence('starts with lowercase and no period')
    >>Uncaught Error, 'starts with lowercase and no period' is not a sentence

### Check for a parameter in a set

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  CMYK_COLORS = ['cyan', 'magenta', 'yellow', 'black']
    /**/  
    /**/  function PRE_expectsCMYK(a_book){ 
    /**/    if (! CMYK_COLORS.includes(a_book))
    /**/      return `Error, '${a_book}' is not a CMYK color`
    /**/  }
    /**/    
    /**/  expectsCMYK = type_czech.check(expectsCMYK, PRE_expectsCMYK)
      
    function expectsCMYK(a_book){
    }
        
    expectsCMYK('cyan')
    >>

    expectsCMYK('russian blue')
    >>Uncaught Error, 'russian blue' is not a CMYK color

### Check for sorted parameters
  
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/    
    /**/  function PRE_expectsAsc(){ 
    /**/    increasing_positives = [...arguments]
    /**/    current_largest = -1;
    /**/    for (const next_integer of increasing_positives) {
    /**/      if (next_integer < current_largest) 
    /**/        return 'Error, array is not ascending : ' + increasing_positives.join()
    /**/      current_largest = next_integer
    /**/    }
    /**/  }
    /**/    
    /**/  expectsAsc = type_czech.check(expectsAsc, PRE_expectsAsc)
      
    function expectsAsc(){
    }

    expectsAsc(1,22,333,4444)
    >>
    
    expectsAsc(4444,333,2,1)       
    >>Error, array is not ascending : 4444,333,2,1



### Check parameter has a value:

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_nonArrHasVal(the_param){
    /**/    return type_czech.valueless(arguments, 'EMPTY-ERROR')
    /**/  }
    /**/  
    /**/  nonArrHasVal = type_czech.check(nonArrHasVal, PRE_nonArrHasVal) 

    function nonArrHasVal(a_parameter){
    }

    nonArrHasVal('a-string')
    >>

    nonArrHasVal({a:1})
    >>

    nonArrHasVal([1])
    >>

    nonArrHasVal('')
    >>PRE_nonArrHasVal() nonArrHasVal() PRE-FUNC: EMPTY-ERROR states 'String' must not be empty for the value ''
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'String'
    >>                  ACTUAL VALUE ''
    >>               EMPTY ASSERTION 'EMPTY-ERROR'
    >>              CALLING FUNCTION PRE_nonArrHasVal(the_param)
   
    nonArrHasVal({})
    >>PRE_nonArrHasVal() nonArrHasVal() PRE-FUNC: EMPTY-ERROR states 'Object' must not be empty for the value ' { } '
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {}
    >>               EMPTY ASSERTION 'EMPTY-ERROR'
    >>              CALLING FUNCTION PRE_nonArrHasVal(the_param)

    nonArrHasVal([])
    >>PRE_nonArrHasVal() nonArrHasVal() PRE-FUNC: EMPTY-ERROR states 'Array' must not be empty for the value ''
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Array'
    >>                  ACTUAL VALUE []
    >>               EMPTY ASSERTION 'EMPTY-ERROR'
    >>              CALLING FUNCTION PRE_nonArrHasVal(the_param)


### Check parameter is an array of number arrays:

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_arrOfNumArr(){
    /**/    return type_czech.valid(arguments, [ ['Number'] ] )
    /**/  }
    /**/  
    /**/  arrOfNumArr = type_czech.check(arrOfNumArr, PRE_arrOfNumArr) 

    function arrOfNumArr(arr_num_arrs){
    }

    arr_0 = []
    arr_1 = [1]
    arr_2 = [2,2]
    arr_3 = [3,3,3]
    array_array =[ arr_0, arr_1, arr_2, arr_3]

    arrOfNumArr(array_array) 
    >>

    arrOfNumArr([1,2,3]) 
    >>PRE_arrOfNumArr() arrOfNumArr() PRE-FUNC: Parameter is meant to be 'Array' but is of the wrong type of 'Number':3
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'Array'
    >>                ACTUAL VALUE [1,2,3]
    >>               EXPECTED TYPE [['Number']]
    >>            CALLING FUNCTION PRE_arrOfNumArr()

    arrOfNumArr( [ array_array, array_array] ) 
    >>PRE_arrOfNumArr() arrOfNumArr() PRE-FUNC: INDEX '3' is asserted to be a 'Number', but is fallaciously a 'Array' : [3,3,3]
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'Array'
    >>                ACTUAL VALUE [[[],[1],[2,2],[3,3,3]],[[],[1],[2,2],[3,3,3]]]
    >>               EXPECTED TYPE [['Number']]
    >>            CALLING FUNCTION PRE_arrOfNumArr()

### Check function returns only an array of array of number:

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function POST_arrArrRes(){
    /**/    return type_czech.valid(arguments, [['Number']])
    /**/  }
    /**/  
    /**/  arrArrRes = type_czech.check(arrArrRes, undefined, POST_arrArrRes) 

    function arrArrRes(an_array){
      return an_array
    }

    arrArrRes([ [1], [2,2], [3,3,4] ])
    >>Array(3) [ (1) [1], (2) [2,2], (3) [3,3,4] ]

    arrArrRes('an-error')
    >>POST_arrArrRes() arrArrRes() POST-FUNC: Comparing actual 'String' parameter, with a value of 'an-error', in relation to the expected
    >>shape of [["Number"]]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's.
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'String'
    >>                ACTUAL VALUE 'an-error'
    >>               EXPECTED TYPE '[['Number']]'
    >>       CALLING FUNCTION POST_arrArrRes()

### Check array parameter is an array of exactly 3 numbers

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_arrOf3Nums(arr_of_3_nums){
    /**/    arr_len = arr_of_3_nums.length
    /**/    if (arr_len !== 3) return `Array length is ${arr_len} <> 3`
    /**/    return type_czech.valid(arguments, ['Number'])
    /**/  }
    /**/  
    /**/  arrOf3Nums = type_czech.check(arrOf3Nums, PRE_arrOf3Nums) 

    function arrOf3Nums(arr_of_3_nums){
    }

    arrOf3Nums([1,2,3]) 
    >>

    arrOf3Nums([1,2,3,4])
    >>Array length is 4 <> 3

    arrOf3Nums(['one',2,3])
    >>PRE_arrOf3Nums() arrOf3Nums() PRE-FUNC: INDEX '0' is asserted to be a 'Number', but is fallaciously a 'String' : one
    >>               valid(arguments, expected_types)
    >>                   ACTUAL TYPES 'Array'
    >>                   ACTUAL VALUE ['one',2,3]
    >>                  EXPECTED TYPE ['Number']
    >>               CALLING FUNCTION PRE_arrOf3Nums(arr_of_3_nums)

### Check for mutations, type errors, empty parameters
    /**/  if (typeof TypeCzech === 'function') 
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/  else
    /**/    type_czech = { check: (nop) => nop, stats: (nop) => nop, is_active: false }
    /**/  
    /**/  function PRE_isElvis(name_object){
    /**/    type_czech.mutateSnapshot('isElvis', 'name_object', name_object)
    /**/
    /**/    type_issue = type_czech.valid(arguments, {the_name:'String'})
    /**/    if (type_issue) return type_issue
    /**/
    /**/    empty_issue = type_czech.valueless(arguments, {the_name:'EMPTY-ERROR'})
    /**/    if (empty_issue) return empty_issue
    /**/
    /**/    current_name = name_object.the_name
    /**/    if (current_name[0]!=='E') return `Not-Start-Letter-E`
    /**/    return ''
    /**/  }
    /**/  
    /**/  function POST_isElvis(){
    /**/    elvis_mutation = type_czech.mutated('isElvis', 'name_object')
    /**/    if (elvis_mutation) return elvis_mutation
    /**/    return type_czech.valid(arguments, 'String')
    /**/  }
    /**/  
    /**/  PRE_isElvis = (typeof PRE_isElvis === 'undefined') ? undefined : PRE_isElvis
    /**/  POST_isElvis = (typeof POST_isElvis === 'undefined') ? undefined : POST_isElvis
    /**/  
    /**/  isElvis = type_czech.check(isElvis, PRE_isElvis, POST_isElvis) 

    function isElvis(elvis_object){
      if (elvis_object.the_name === 'Presley')
        elvis_object.the_name ='Aaron Presley'
      return elvis_object.the_name
    }

    isElvis({the_name:'Elvis'})
    >>Elvis

    isElvis({the_name:''})
    >>PRE_isElvis() isElvis() PRE-FUNC: 'the_name' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {'the_name':''}
    >>               EMPTY ASSERTION {'the_name':'EMPTY-ERROR'}
    >>              CALLING FUNCTION PRE_isElvis(name_object)

    isElvis({the_name:'Presley'})
    >>Not-Start-Letter-E
    >>The reference variable 'name_object' in function 'isElvis()' changed values
    >>                from {'the_name':'Presley'}
    >>                  to {'the_name':'Aaron Presley'} 
    >>
    >>                START-SAME ~ {'the_name':'
    >>                  PRE-DIFF ~ Presley'}
    >>                  POST-DIFF ~ Aaron Presley'} 
    >>Aaron Presley

    isElvis({the_name:17})
    >>PRE_isElvis() isElvis() PRE-FUNC: Property 'the_name' is indicated to be a 'String', but is inaccurately a 'Number' : 17
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'Object'
    >>                ACTUAL VALUE {'the_name':17}
    >>               EXPECTED TYPE {'the_name':'String'}
    >>            CALLING FUNCTION PRE_isElvis(name_object)
    >>
    >>POST_isElvis() isElvis() POST-FUNC: The variable '17', which is a 'Number', is not a 'String'
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'Number'
    >>                ACTUAL VALUE 17
    >>               EXPECTED TYPE 'String'
    >>            CALLING FUNCTION POST_isElvis()
    >>17

    isElvis({the_name:''})
    >>PRE_isElvis() isElvis() PRE-FUNC: 'the_name' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {'the_name':''}
    >>               EMPTY ASSERTION {'the_name':'EMPTY-ERROR'}
    >>              CALLING FUNCTION PRE_isElvis(name_object)










# BELOW-USED-TO-BE-IN-MAIN-READ-ME


#### Check parameter for Number type
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_numFunc(a_number){
    /**/    return type_czech.valid(a_number, 'Number') 
    /**/  }
    /**/
    /**/  numFunc = type_czech.check(numFunc, PRE_numFunc) 

    function numFunc(a_number){
      console.log('a-number', a_number)
    }
    
    numFunc(17)
    >>a-number 17
    
    numFunc('error-not-a-number')
    >>PRE_numFunc() numFunc() PRE-FUNC: The variable 'error-not-a-number', which is a 'String', is not a 'Number'
    >>     valid(arguments, expected_types)
    >>         ACTUAL TYPES 'String'
    >>         ACTUAL VALUE 'error-not-a-number'
    >>        EXPECTED TYPE 'Number'
    >>     CALLING FUNCTION PRE_numFunc(a_number)
    >>a-number error-not-a-number



#### Check parameter for Array type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/
    /**/  function PRE_arrayFunc(an_array){
    /**/    return type_czech.valid(an_array, 'Array') 
    /**/  }
    /**/  
    /**/  arrayFunc = type_czech.check(arrayFunc, PRE_arrayFunc) 
    
    function arrayFunc(an_array){
      console.log('an_array', an_array)
    }
    
    arrayFunc(['a', 17, false])
    >>an_array Array(3) [ "a", 17, false ]

    arrayFunc('error-not-an-array')
    >>Uncaught  PRE_arrayFunc() arrayFunc() PRE-FUNC: The variable 'error-not-an-array', which is a 'String', is not a 'Array'
    >>                valid(arguments, expected_types)
    >>                    ACTUAL TYPES 'String'
    >>                    ACTUAL VALUE 'error-not-an-array'
    >>                   EXPECTED TYPE 'Array'
    >>                CALLING FUNCTION PRE_arrayFunc(an_array)

#### Check parameter for Array of Numbers type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/
    /**/  function PRE_numArray(a_num_arr){
    /**/    return type_czech.valid(a_num_arr, ['Number']) 
    /**/  }
    /**/  
    /**/  numArray = type_czech.check(numArray, PRE_numArray) 
    
    function numArray(a_num_arr){
      console.log('a_num_arr', a_num_arr)
    }
    
    numArray([99, 13, 256])
    >>a_num_arr Array(3) [ 99, 13, 256 ]

    numArray([42, 17, false])
    >>Uncaught  PRE_numArray() numArray() PRE-FUNC: INDEX '2' is asserted to be a 'Number', but is fallaciously a 'Boolean' : false
    >>                valid(arguments, expected_types)
    >>                    ACTUAL TYPES 'Array'
    >>                    ACTUAL VALUE [42,17,false]
    >>                   EXPECTED TYPE ['Number']
    >>                CALLING FUNCTION PRE_numArray(a_num_arr)

#### Check parameter for Array of Array of Numbers type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/
    /**/  function PRE_numArrArr(a_num_arr){
    /**/    return type_czech.valid(arguments, [ ['Number'] ]) 
    /**/  }
    /**/  
    /**/  numArrArr = type_czech.check(numArrArr, PRE_numArrArr) 

    function numArrArr(a_num_arr){
      console.log('a_num_arr', a_num_arr)
    }
    
    numArrArr([[99, 13, 256]])
    >>a_num_arr Array [ (3) [99, 13, 256] ]

    numArrArr([[42, 17, false]])
    >>Uncaught  PRE_numArrArr() numArrArr() PRE-FUNC: INDEX '2' is asserted to be a 'Number', but is fallaciously a 'Boolean' : false
    >>                valid(arguments, expected_types)
    >>                    ACTUAL TYPES 'Array'
    >>                    ACTUAL VALUE [[42,17,false]]
    >>                   EXPECTED TYPE [['Number']]
    >>                CALLING FUNCTION PRE_numArrArr(a_num_arr)