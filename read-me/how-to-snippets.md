
## How To:

### Check for a positive parameter number:

  // Detachable TypeCzech Checking Code ****************************************

    type_czech = TypeCzech('LOG-ERRORS')

    function PRE_expectPosNum(a_number){
      not_number = type_czech.valid(arguments, 'Number')
      if (not_number) return `Error, ${a_number} is not a number`
      if (a_number<1) return `Error, ${a_number} is not positive`
    }

    expectPosNum = type_czech.check(expectPosNum, PRE_expectPosNum) 

  // Actual Non-Checking Production Code ****************************************

    function expectPosNum(a_number){
    }
  
  // Console Interaction ****************************************

    expectPosNum(1)

    expectPosNum('not-a-number')
    >>Error, not-a-number is not a number
    
    expectPosNum(-4)             
    >>Error, -4 is not positive
    
    expectPosNum(1)
    >>

### Check for a RegExp match in a parameter:

  // Detachable TypeCzech Checking Code ****************************************

    type_czech = TypeCzech('THROW-EXCEPTIONS')
      
    function PRE_expectsSentence(a_sentence){ 
      if (!typeof a_sentence === 'string')
        return "Error, '${a_sentence}' is not a string"
      upper_then_period_end = new RegExp(/^[A-Z].*\.$/)
      is_sentence = a_sentence.match(upper_then_period_end)
      if (!is_sentence) 
        return `Error, '${a_sentence}' is not a sentence`
    }
      
    expectsSentence = type_czech.check(expectsSentence, PRE_expectsSentence)

  // Actual Non-Checking Production Code ****************************************

    function expectsSentence(a_sentence){
    }

  // Console Interaction ****************************************

    expectsSentence('Starts with uppercase and ends with period.')
    >>

    expectsSentence('starts with lowercase and no period')
    >>Uncaught Error, 'starts with lowercase and no period' is not a sentence

### Check for a parameter in a set

  // Detachable TypeCzech Checking Code ****************************************

    type_czech = TypeCzech('THROW-EXCEPTIONS')

    CMYK_COLORS = ['cyan', 'magenta', 'yellow', 'black']

    function PRE_expectsCMYK(a_color){ 
      if (! CMYK_COLORS.includes(a_color))
        return `Error, '${a_color}' is not a CMYK color`
    }
      
    expectsCMYK = type_czech.check(expectsCMYK, PRE_expectsCMYK)
      
// Actual Non-Checking Production Code ****************************************

    function expectsCMYK(a_color){
    }
        
  // Console Interaction ****************************************

    expectsCMYK('cyan')
    >>

    expectsCMYK('russian blue')
    >>Uncaught Error, 'russian blue' is not a CMYK color

### Check for sorted parameters
  
  // Detachable TypeCzech Checking Code ****************************************

    type_czech = TypeCzech('LOG-ERRORS')
      
    function PRE_expectsAsc(){ 
      increasing_positives = [...arguments]
      current_largest = -1;
      for (const next_integer of increasing_positives) {
        if (next_integer < current_largest) 
          return 'Error, array is not ascending : ' + increasing_positives.join()
        current_largest = next_integer
      }
    }
      
    expectsAsc = type_czech.check(expectsAsc, PRE_expectsAsc)
      
  // Actual Non-Checking Production Code ****************************************

    function expectsAsc(){
    }

  // Console Interaction ****************************************

    expectsAsc(1,22,333,4444)
    >>
    
    expectsAsc(4444,333,2,1)       
    >>Error, array is not ascending : 4444,333,2,1
    >>4444,333,2,1

### Check parameter type:

  // Detachable TypeCzech Checking Code ****************************************

    type_czech = TypeCzech('THROW-EXCEPTIONS')

    function PRE_aString(){
      return type_czech.valid(arguments, 'String')
    }

    aString = type_czech.check(aString, PRE_aString) 

  // Actual Non-Checking Production Code ****************************************

    function aString(an_str){
    }

  // Console Interaction ****************************************

    aString('a-string')
    >>
    
    aString(99)          
    >>Uncaught  PRE_aString() aString() PRE-FUNC: The variable '99', which is a 'Number', is not a 'String'
    >>                valid(arguments, expected_types)
    >>                 ACTUAL TYPES 'Number'
    >>                 ACTUAL VALUE 99
    >>                EXPECTED TYPE 'String'


### Check parameter has a value:

  // Detachable TypeCzech Checking Code ****************************************

    type_czech = TypeCzech('LOG-ERRORS') 

    function PRE_nonArrHasVal(){
      return type_czech.valueless(arguments, 'EMPTY-ERROR')
    }
    
    nonArrHasVal = type_czech.check(nonArrHasVal, PRE_nonArrHasVal) 

  // Actual Non-Checking Production Code ****************************************

    function nonArrHasVal(a_parameter){
    }

  // Console Interaction ****************************************

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
   
    nonArrHasVal({})
    >>PRE_nonArrHasVal() nonArrHasVal() PRE-FUNC: EMPTY-ERROR states 'Object' must not be empty for the value ' { } '
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {}
    >>               EMPTY ASSERTION 'EMPTY-ERROR'

    nonArrHasVal([])
    >>PRE_nonArrHasVal() nonArrHasVal() PRE-FUNC: EMPTY-ERROR states 'Array' must not be empty for the value ''
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Array'
    >>                  ACTUAL VALUE []
    >>               EMPTY ASSERTION 'EMPTY-ERROR'



### Check parameter is an array of number arrays:

  // Detachable TypeCzech Checking Code ****************************************

    type_czech = TypeCzech('LOG-ERRORS') 

    function PRE_arrOfNumArr(){
      return type_czech.valid(arguments, [ ['Number'] ] )
    }
    
    arrOfNumArr = type_czech.check(arrOfNumArr, PRE_arrOfNumArr) 

  // Actual Non-Checking Production Code ****************************************

    function arrOfNumArr(arr_num_arrs){
    }

  // Console Interaction ****************************************

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

    arrOfNumArr( [ array_array, array_array] ) 
    >>PRE_arrOfNumArr() arrOfNumArr() PRE-FUNC: INDEX '3' is asserted to be a 'Number', but is fallaciously a 'Array' : [3,3,3]
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'Array'
    >>                ACTUAL VALUE [[[],[1],[2,2],[3,3,3]],[[],[1],[2,2],[3,3,3]]]
    >>               EXPECTED TYPE [['Number']]


### Check function returns only an array of array of number:

  // Detachable TypeCzech Checking Code ****************************************

    type_czech = TypeCzech('LOG-ERRORS')
    
    function POST_arrArrRes(){
      return type_czech.valid(arguments, [['Number']])
    }
    
    arrArrRes = type_czech.check(arrArrRes, undefined, POST_arrArrRes) 

  // Actual Non-Checking Production Code ****************************************

    function arrArrRes(an_array){
    }

  // Console Interaction ****************************************

    arrArrRes([ [1], [2,2], [3,3,4] ])
    >>

    arrArrRes('an-error')
    >>POST_arrArrRes() arrArrRes() POST-FUNC: Comparing actual 'String' parameter, with a value of 'an-error', in relation to the expected
    >>shape of [["Number"]]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's.
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'String'
    >>                ACTUAL VALUE 'an-error'
    >>               EXPECTED TYPE '[['Number']]'
