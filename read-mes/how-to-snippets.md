
## How To:

### Check parameter type:

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_aString(a_string){
    /**/    return type_czech.check_type(arguments, 'String')
    /**/  }
    /**/  
    /**/  aString = type_czech.link(aString, PRE_check_aString) 

    function aString(an_str){
    }

    aString('a-string')
    >>
    
    aString(99)          
    >>Uncaught  PRE_check_aString() aString() PRE-FUNC: The variable '99', which is a 'Number', is not a 'String'
    >>                check_type(arguments, expected_types)
    >>                 ACTUAL TYPES 'Number'
    >>                 ACTUAL VALUE 99
    >>                EXPECTED TYPE 'String'
    >>        CALLING FUNCTION PRE_check_aString(a_string)

### Check for a positive parameter number:

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_expectPosNum(a_number){
    /**/    not_number = type_czech.check_type(arguments, 'Number')
    /**/    if (not_number) return `Error, ${a_number} is not a number`
    /**/    if (a_number<1) return `Error, ${a_number} is not positive`
    /**/  }
    /**/  
    /**/  expectPosNum = type_czech.link(expectPosNum, PRE_check_expectPosNum) 

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
    /**/  function PRE_check_expectsSentence(a_sentence){ 
    /**/    if (!typeof a_sentence === 'string')
    /**/      return "Error, '${a_sentence}' is not a string"
    /**/    upper_then_period_end = new RegExp(/^[A-Z].*\.$/)
    /**/    is_sentence = a_sentence.match(upper_then_period_end)
    /**/    if (!is_sentence) 
    /**/      return `Error, '${a_sentence}' is not a sentence`
    /**/  }
    /**/    
    /**/  expectsSentence = type_czech.link(expectsSentence, PRE_check_expectsSentence)

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
    /**/  function PRE_check_expectsCMYK(a_book){ 
    /**/    if (! CMYK_COLORS.includes(a_book))
    /**/      return `Error, '${a_book}' is not a CMYK color`
    /**/  }
    /**/    
    /**/  expectsCMYK = type_czech.link(expectsCMYK, PRE_check_expectsCMYK)
      
    function expectsCMYK(a_book){
    }
        
    expectsCMYK('cyan')
    >>

    expectsCMYK('russian blue')
    >>Uncaught Error, 'russian blue' is not a CMYK color

### Check for sorted parameters
  
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/    
    /**/  function PRE_check_expectsAsc(){ 
    /**/    increasing_positives = [...arguments]
    /**/    current_largest = -1;
    /**/    for (const next_integer of increasing_positives) {
    /**/      if (next_integer < current_largest) 
    /**/        return 'Error, array is not ascending : ' + increasing_positives.join()
    /**/      current_largest = next_integer
    /**/    }
    /**/  }
    /**/    
    /**/  expectsAsc = type_czech.link(expectsAsc, PRE_check_expectsAsc)
      
    function expectsAsc(){
    }

    expectsAsc(1,22,333,4444)
    >>
    
    expectsAsc(4444,333,2,1)       
    >>Error, array is not ascending : 4444,333,2,1



### Check parameter has a value:

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_check_nonArrHasVal(the_param){
    /**/    return type_czech.check_empty(arguments, 'EMPTY-ERROR')
    /**/  }
    /**/  
    /**/  nonArrHasVal = type_czech.link(nonArrHasVal, PRE_check_nonArrHasVal) 

    function nonArrHasVal(a_parameter){
    }

    nonArrHasVal('a-string')
    >>

    nonArrHasVal({a:1})
    >>

    nonArrHasVal([1])
    >>

    nonArrHasVal('')
    >>PRE_check_nonArrHasVal() nonArrHasVal() PRE-FUNC: EMPTY-ERROR states 'String' must not be empty for the value ''
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'String'
    >>                  ACTUAL VALUE ''
    >>               EMPTY ASSERTION 'EMPTY-ERROR'
    >>              CALLING FUNCTION PRE_check_nonArrHasVal(the_param)
   
    nonArrHasVal({})
    >>PRE_check_nonArrHasVal() nonArrHasVal() PRE-FUNC: EMPTY-ERROR states 'Object' must not be empty for the value ' { } '
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {}
    >>               EMPTY ASSERTION 'EMPTY-ERROR'
    >>              CALLING FUNCTION PRE_check_nonArrHasVal(the_param)

    nonArrHasVal([])
    >>PRE_check_nonArrHasVal() nonArrHasVal() PRE-FUNC: EMPTY-ERROR states 'Array' must not be empty for the value ''
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Array'
    >>                  ACTUAL VALUE []
    >>               EMPTY ASSERTION 'EMPTY-ERROR'
    >>              CALLING FUNCTION PRE_check_nonArrHasVal(the_param)


### Check parameter is an array of number arrays:

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_check_arrOfNumArr(){
    /**/    return type_czech.check_type(arguments, [ ['Number'] ] )
    /**/  }
    /**/  
    /**/  arrOfNumArr = type_czech.link(arrOfNumArr, PRE_check_arrOfNumArr) 

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
    >>PRE_check_arrOfNumArr() arrOfNumArr() PRE-FUNC: Parameter is meant to be 'Array' but is of the wrong type of 'Number':3
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES 'Array'
    >>                ACTUAL VALUE [1,2,3]
    >>               EXPECTED TYPE [['Number']]
    >>            CALLING FUNCTION PRE_check_arrOfNumArr()

    arrOfNumArr( [ array_array, array_array] ) 
    >>PRE_check_arrOfNumArr() arrOfNumArr() PRE-FUNC: ELEMENT '3' is asserted to be a 'Number', but is fallaciously a 'Array' : [3,3,3]
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES 'Array'
    >>                ACTUAL VALUE [[[],[1],[2,2],[3,3,3]],[[],[1],[2,2],[3,3,3]]]
    >>               EXPECTED TYPE [['Number']]
    >>            CALLING FUNCTION PRE_check_arrOfNumArr()

### Check function returns only an array of array of number:

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function POST_check_arrArrRes(){
    /**/    return type_czech.check_type(arguments, [['Number']])
    /**/  }
    /**/  
    /**/  arrArrRes = type_czech.link(arrArrRes, undefined, POST_check_arrArrRes) 

    function arrArrRes(an_array){
      return an_array
    }

    arrArrRes([ [1], [2,2], [3,3,4] ])
    >>Array(3) [ (1) [1], (2) [2,2], (3) [3,3,4] ]

    arrArrRes('an-error')
    >>POST_check_arrArrRes() arrArrRes() POST-FUNC: Comparing actual 'String' parameter, with a value of 'an-error', in relation to the expected
    >>shape of [["Number"]]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's.
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES 'String'
    >>                ACTUAL VALUE 'an-error'
    >>               EXPECTED TYPE '[['Number']]'
    >>       CALLING FUNCTION POST_check_arrArrRes()

### Check array parameter is an array of exactly 3 numbers

    /**/  type_czech = TypeCzech('LOG-ERRORS') 
    /**/  
    /**/  function PRE_check_arrOf3Nums(arr_of_3_nums){
    /**/    arr_len = arr_of_3_nums.length
    /**/    if (arr_len !== 3) return `Array length is ${arr_len} <> 3`
    /**/    return type_czech.check_type(arguments, ['Number'])
    /**/  }
    /**/  
    /**/  arrOf3Nums = type_czech.link(arrOf3Nums, PRE_check_arrOf3Nums) 

    function arrOf3Nums(arr_of_3_nums){
    }

    arrOf3Nums([1,2,3]) 
    >>

    arrOf3Nums([1,2,3,4])
    >>Array length is 4 <> 3

    arrOf3Nums(['one',2,3])
    >>PRE_check_arrOf3Nums() arrOf3Nums() PRE-FUNC: ELEMENT '0' is asserted to be a 'Number', but is fallaciously a 'String' : one
    >>               check_type(arguments, expected_types)
    >>                   ACTUAL TYPES 'Array'
    >>                   ACTUAL VALUE ['one',2,3]
    >>                  EXPECTED TYPE ['Number']
    >>               CALLING FUNCTION PRE_check_arrOf3Nums(arr_of_3_nums)

### Check for mutations, type errors, empty parameters
    /**/  if (typeof TypeCzech === 'function') 
    /**/    type_czech = TypeCzech('LOG-ERRORS')
    /**/  else
    /**/    type_czech = { link: (nop) => nop, is_active: false }
    /**/  
    /**/  function PRE_check_isElvis(name_object){
    /**/    type_czech.mutateSnapshot('isElvis', 'name_object', name_object)
    /**/
    /**/    type_issue = type_czech.check_type(arguments, {the_name:'String'})
    /**/    if (type_issue) return type_issue
    /**/
    /**/    empty_issue = type_czech.check_empty(arguments, {the_name:'EMPTY-ERROR'})
    /**/    if (empty_issue) return empty_issue
    /**/
    /**/    current_name = name_object.the_name
    /**/    if (current_name[0]!=='E') return `Not-Start-Letter-E`
    /**/    return ''
    /**/  }
    /**/  
    /**/  function POST_check_isElvis(){
    /**/    elvis_mutation = type_czech.check_mutated('isElvis', 'name_object')
    /**/    if (elvis_mutation) return elvis_mutation
    /**/    return type_czech.check_type(arguments, 'String')
    /**/  }
    /**/  
    /**/  PRE_check_isElvis = (typeof PRE_check_isElvis === 'undefined') ? undefined : PRE_check_isElvis
    /**/  POST_check_isElvis = (typeof POST_check_isElvis === 'undefined') ? undefined : POST_check_isElvis
    /**/  
    /**/  isElvis = type_czech.link(isElvis, PRE_check_isElvis, POST_check_isElvis) 

    function isElvis(elvis_object){
      if (elvis_object.the_name === 'Presley')
        elvis_object.the_name ='Aaron Presley'
      return elvis_object.the_name
    }

    isElvis({the_name:'Elvis'})
    >>Elvis

    isElvis({the_name:''})
    >>PRE_check_isElvis() isElvis() PRE-FUNC: 'the_name' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {'the_name':''}
    >>               EMPTY ASSERTION {'the_name':'EMPTY-ERROR'}
    >>              CALLING FUNCTION PRE_check_isElvis(name_object)

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
    >>PRE_check_isElvis() isElvis() PRE-FUNC: Property 'the_name' is indicated to be a 'String', but is inaccurately a 'Number' : 17
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES 'Object'
    >>                ACTUAL VALUE {'the_name':17}
    >>               EXPECTED TYPE {'the_name':'String'}
    >>            CALLING FUNCTION PRE_check_isElvis(name_object)
    >>
    >>POST_check_isElvis() isElvis() POST-FUNC: The variable '17', which is a 'Number', is not a 'String'
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES 'Number'
    >>                ACTUAL VALUE 17
    >>               EXPECTED TYPE 'String'
    >>            CALLING FUNCTION POST_check_isElvis()
    >>17

    isElvis({the_name:''})
    >>PRE_check_isElvis() isElvis() PRE-FUNC: 'the_name' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {'the_name':''}
    >>               EMPTY ASSERTION {'the_name':'EMPTY-ERROR'}
    >>              CALLING FUNCTION PRE_check_isElvis(name_object)










# BELOW-USED-TO-BE-IN-MAIN-READ-ME


#### Check parameter for Number type
    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_check_numFunc(a_number){
    /**/    return type_czech.check_type(a_number, 'Number') 
    /**/  }
    /**/
    /**/  numFunc = type_czech.link(numFunc, PRE_check_numFunc) 

    function numFunc(a_number){
      console.log('a-number', a_number)
    }
    
    numFunc(17)
    >>a-number 17
    
    numFunc('error-not-a-number')
    >>PRE_check_numFunc() numFunc() PRE-FUNC: The variable 'error-not-a-number', which is a 'String', is not a 'Number'
    >>     check_type(arguments, expected_types)
    >>         ACTUAL TYPES 'String'
    >>         ACTUAL VALUE 'error-not-a-number'
    >>        EXPECTED TYPE 'Number'
    >>     CALLING FUNCTION PRE_check_numFunc(a_number)
    >>a-number error-not-a-number



#### Check parameter for Array type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/
    /**/  function PRE_check_arrayFunc(an_array){
    /**/    return type_czech.check_type(an_array, 'Array') 
    /**/  }
    /**/  
    /**/  arrayFunc = type_czech.link(arrayFunc, PRE_check_arrayFunc) 
    
    function arrayFunc(an_array){
      console.log('an_array', an_array)
    }
    
    arrayFunc(['a', 17, false])
    >>an_array Array(3) [ "a", 17, false ]

    arrayFunc('error-not-an-array')
    >>Uncaught  PRE_check_arrayFunc() arrayFunc() PRE-FUNC: The variable 'error-not-an-array', which is a 'String', is not a 'Array'
    >>                check_type(arguments, expected_types)
    >>                    ACTUAL TYPES 'String'
    >>                    ACTUAL VALUE 'error-not-an-array'
    >>                   EXPECTED TYPE 'Array'
    >>                CALLING FUNCTION PRE_check_arrayFunc(an_array)

#### Check parameter for Array of Numbers type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/
    /**/  function PRE_check_numArray(a_num_arr){
    /**/    return type_czech.check_type(a_num_arr, ['Number']) 
    /**/  }
    /**/  
    /**/  numArray = type_czech.link(numArray, PRE_check_numArray) 
    
    function numArray(a_num_arr){
      console.log('a_num_arr', a_num_arr)
    }
    
    numArray([99, 13, 256])
    >>a_num_arr Array(3) [ 99, 13, 256 ]

    numArray([42, 17, false])
    >>Uncaught  PRE_check_numArray() numArray() PRE-FUNC: ELEMENT '2' is asserted to be a 'Number', but is fallaciously a 'Boolean' : false
    >>                check_type(arguments, expected_types)
    >>                    ACTUAL TYPES 'Array'
    >>                    ACTUAL VALUE [42,17,false]
    >>                   EXPECTED TYPE ['Number']
    >>                CALLING FUNCTION PRE_check_numArray(a_num_arr)

#### Check parameter for Array of Array of Numbers type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/
    /**/  function PRE_check_numArrArr(a_num_arr){
    /**/    return type_czech.check_type(arguments, [ ['Number'] ]) 
    /**/  }
    /**/  
    /**/  numArrArr = type_czech.link(numArrArr, PRE_check_numArrArr) 

    function numArrArr(a_num_arr){
      console.log('a_num_arr', a_num_arr)
    }
    
    numArrArr([[99, 13, 256]])
    >>a_num_arr Array [ (3) [99, 13, 256] ]

    numArrArr([[42, 17, false]])
    >>Uncaught  PRE_check_numArrArr() numArrArr() PRE-FUNC: ELEMENT '2' is asserted to be a 'Number', but is fallaciously a 'Boolean' : false
    >>                check_type(arguments, expected_types)
    >>                    ACTUAL TYPES 'Array'
    >>                    ACTUAL VALUE [[42,17,false]]
    >>                   EXPECTED TYPE [['Number']]
    >>                CALLING FUNCTION PRE_check_numArrArr(a_num_arr)


&copy; 2021 Steen Hansen
