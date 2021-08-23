
# TypeCzech

Enjoy some TypeScript benefits without the drawbacks of:

  - compilation time
  - new language syntax
  - compile time only checks
  - fragile entanglement

The central idea is to have detachable JavaScript checking routines run before and after your 
own functions that can test types, emptiness, and mutations. These PRE and POST routines can be 
turned on or off at run-time.

With TypeCzech you can:

 - check function parameter types
 - ensure strings, arrays, and objects are not empty
 - test function arguments and results for distinct properties
 - catch reference mutations in function parameters
 - establish if an object matches an interface
 - ignore types of extra optional parameters

Missing from TypeCzech:

 - type inference
 - checking types of optional function parameters

## TypeCzech Example:

This example shows:

 - type_czech.valid() ensuring that the parameters to aLottery() are a string, then an array of numbers, and finally a date
 - type_czech.valueless() complaining when parameters are found to be empty and valueless
 - /**/  Lines starting this way are supporting TypeCzech test code and are safely removable

[Below program with LOG-ERRORS on jsFiddle](https://jsfiddle.net/steen_hansen/0xtpLwsc/1/?00-Readme-Example). All type mismatches are printed in the console.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  LOTTERY_SIGNATURE = ['String', ['Number'], 'Date']
    /**/
    /**/  function PRE_aLottery(lottery_name, lucky_numbers, draw_date){
    /**/    type_issue = type_czech.valid(arguments, LOTTERY_SIGNATURE)
    /**/    if (type_issue) return type_issue
    /**/    return type_czech.valueless(arguments, ['EMPTY-ERROR'])
    /**/  }
    /**/
    /**/  aLottery = type_czech.check(aLottery, PRE_aLottery) 

    function aLottery(lottery_name, lucky_numbers, draw_date){
      the_lottery = `${lottery_name} ::: ${lucky_numbers} :::`
      console.log(the_lottery, draw_date)
    }

    aLottery('El Gordo', [1,2,3,4,5,0], new Date('jun 14 1999'))
    >>El Gordo ::: 1,2,3,4,5,0 :::1999-06-14

    aLottery('Lotto 649', [1,2,3,4,5,6])
    >>PRE_aLottery() aLottery() PRE-FUNC: Index '2' is supposed to be a 'Date', but is missing : ['Lotto 649',[1,2,3,4,5,6]]
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Array']
    >>                ACTUAL VALUE ['Lotto 649',[1,2,3,4,5,6]]
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>Lotto 649 ::: 1,2,3,4,5,6 :::

    aLottery('Oz Lotto', ['fourty-two'], new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC:  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Array','Date']
    >>                ACTUAL VALUE ['Oz Lotto',['fourty-two'],'1999-06-14T07:00:00.000Z']
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>Oz Lotto ::: fourty-two :::1999-06-14

    aLottery('Mega Millions', 17, new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: Parameter is meant to be 'Array' but is of the wrong type of 'Number':17
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Number','Date']
    >>                ACTUAL VALUE ['Mega Millions',17,'1999-06-14T07:00:00.000Z']
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>Mega Millions ::: 17 :::1999-06-14

    aLottery('Powerball', [], new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: INDEX '1' is erroneously empty :
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES ['String','Array','Date']
    >>                  ACTUAL VALUE ['Powerball',[],'1999-06-14T07:00:00.000Z']
    >>               EMPTY ASSERTION ['EMPTY-ERROR']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>Powerball ::: :::1999-06-14

    aLottery('', [1,2,3,4,5,26], new Date('Dec 31 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: INDEX '0' is erroneously empty :
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES ['String','Array','Date']
    >>                  ACTUAL VALUE ['',[1,2,3,4,5,26],'1999-12-31T08:00:00.000Z']
    >>               EMPTY ASSERTION ['EMPTY-ERROR']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>::: 1,2,3,4,5,26 :::1999-12-31

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

## [Example Style](/read-me/example-style.md)

## [How To Snippets](/read-me/how-to-snippets.md)

## [Detaching TypeCzech for Production](/read-me/detaching-checking-code.md)

## [Self-Contained Live TypeCzech Fiddles](/read-me/live-fiddle-samples.md)

## [Self-Contained Browsable Examples](/read-me/web-browserable-examples.md)


## Created by

[Steen Hansen](https://github.com/steenhansen)



