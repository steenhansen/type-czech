
# TypeCzech

Enjoy some TypeScript benefits without the drawbacks of:
- compilation time
- new language syntax
- compile time only checks
- fragile entanglement

The idea is to have detachable JavaScript checking routines run before and after your 
own functions that test types, emptiness, and mutations. These PRE and POST routines can be 
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

  /**/ // Lines starting this way are supporting TypeCzech test code and are safely removable

[LOG-ERRORS on jsFiddle](https://jsfiddle.net/steen_hansen/nve4d3ah/3/?00-ReadMe-Example)

    /**/      type_czech = TypeCzech('LOG-ERRORS')
    /**/  //  type_czech = TypeCzech('NO-CHECKING')
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
    >> El Gordo ::: 1,2,3,4,5,0 :::1999-06-14

    aLottery('Lotto 649', [1,2,3,4,5,6])
    >>PRE_aLottery() aLottery() PRE-FUNC: Index '2' is supposed to be a 'Date', but is missing : ['Lotto 649',[1,2,3,4,5,6]]
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Array']
    >>                ACTUAL VALUE ['Lotto 649',[1,2,3,4,5,6]]
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >> Lotto 649 ::: 1,2,3,4,5,6 :::

    aLottery('Oz Lotto', ['fourty-two'], new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC:  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Array','Date']
    >>                ACTUAL VALUE ['Oz Lotto',['fourty-two'],'1999-06-14T07:00:00.000Z']
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >> Oz Lotto ::: fourty-two :::1999-06-14

    aLottery('Mega Millions', 17, new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: Parameter is meant to be 'Array' but is of the wrong type of 'Number':17
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Number','Date']
    >>                ACTUAL VALUE ['Mega Millions',17,'1999-06-14T07:00:00.000Z']
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >> Mega Millions ::: 17 :::1999-06-14

    aLottery('Powerball', [], new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: INDEX '1' is erroneously empty :
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES ['String','Array','Date']
    >>                  ACTUAL VALUE ['Powerball',[],'1999-06-14T07:00:00.000Z']
    >>               EMPTY ASSERTION ['EMPTY-ERROR']
    >> Powerball ::: :::1999-06-14

    aLottery('', [1,2,3,4,5,26], new Date('Dec 31 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: INDEX '0' is erroneously empty :
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES ['String','Array','Date']
    >>                  ACTUAL VALUE ['',[1,2,3,4,5,26],'1999-12-31T08:00:00.000Z']
    >>               EMPTY ASSERTION ['EMPTY-ERROR']
    >> ::: 1,2,3,4,5,26 :::1999-12-31
    
  [NO-CHECKING on jsFiddle](https://jsfiddle.net/steen_hansen/nve4d3ah/3/?00-ReadMe-Example)

    /**/  //  type_czech = TypeCzech('LOG-ERRORS') 
    /**/      type_czech = TypeCzech('NO-CHECKING')
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
    >> El Gordo ::: 1,2,3,4,5,0 :::1999-06-14

    aLottery('Lotto 649', [1,2,3,4,5,6])
    >> Lotto 649 ::: 1,2,3,4,5,6 :::

    aLottery('Oz Lotto', ['fourty-two'], new Date('jun 14 1999'))
    >> Oz Lotto ::: fourty-two :::1999-06-14

    aLottery('Mega Millions', 17, new Date('jun 14 1999'))
    >> Mega Millions ::: 17 :::1999-06-14

    aLottery('Powerball', [], new Date('jun 14 1999'))
    >> Powerball ::: :::1999-06-14

    aLottery('', [1,2,3,4,5,26], new Date('Dec 31 1999'))
    >> ::: 1,2,3,4,5,26 :::1999-12-31




## [Example Style](/read-me/example-style.md)

## [How To Snippets](/read-me/how-to-snippets.md)

## [Typical Use Snippet 01](/read-me/typical-use-snippet-01.md)

## [Detaching TypeCzech for Production](/read-me/detaching-checking-code.md)

## [Self-Contained Live TypeCzech Fiddles](/read-me/live-fiddle-samples.md)

## [Self-Contained Browsable Examples](/read-me/web-browserable-examples.md)


## Created by

[Steen Hansen](https://github.com/steenhansen)

