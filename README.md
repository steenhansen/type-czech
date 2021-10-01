
# TypeCzech

Type-Czech's raison D'etre is to type check parameters and results of JavaScript functions before and 
after they execute on a Node.js server or in the browser with a simple boolean switch.

Enjoy some TypeScript benefits without the drawbacks of:

  - compilation time
  - new language syntax
  - compile time only checks
  - fragile entanglement

With TypeCzech you can:

 - check function parameter types
 - ensure strings, arrays, and objects are not empty
 - test function arguments and results for distinct properties
 - catch reference mutations in function parameters
 - establish if an object matches an interface

Missing from TypeCzech:

 - type inference
 - checking types of optional function parameters
 - generics

## TypeCzech Example:

This example shows:

 - type_czech.check_type() ensuring that the parameters to aLottery() are a string, then an array of numbers, and finally a date
 - type_czech.check_empty() complaining when parameters are found to be empty and check_empty
 - /**/  Lines starting this way are supporting TypeCzech test code and are safely removable

[Below program with LOG-ERRORS on jsFiddle](https://jsfiddle.net/steen_hansen/0xtpLwsc/1/?00-Readme-Example). All type mismatches are printed in the console.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  LOTTERY_SIGNATURE = ['String', ['Number'], 'Date']
    /**/
    /**/  function PRE_aLottery(lottery_name, lucky_numbers, draw_date){
    /**/    type_issue = type_czech.check_type(arguments, LOTTERY_SIGNATURE)
    /**/    if (type_issue) return type_issue
    /**/    return type_czech.check_empty(arguments, ['EMPTY-ERROR'])
    /**/  }
    /**/
    /**/  aLottery = type_czech.link(aLottery, PRE_aLottery) 

    function aLottery(lottery_name, lucky_numbers, draw_date){
      the_lottery = `${lottery_name} ::: ${lucky_numbers} :::`
      console.log(the_lottery, draw_date)
    }

    aLottery('El Gordo', [1,2,3,4,5,0], new Date('jun 14 1999'))
    >>El Gordo ::: 1,2,3,4,5,0 :::1999-06-14

    aLottery('Lotto 649', [1,2,3,4,5,6])
    >>PRE_aLottery() aLottery() PRE-FUNC: Index '2' is supposed to be a 'Date', but is missing : ['Lotto 649',[1,2,3,4,5,6]]
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Array']
    >>                ACTUAL VALUE ['Lotto 649',[1,2,3,4,5,6]]
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>Lotto 649 ::: 1,2,3,4,5,6 :::

    aLottery('Oz Lotto', ['fourty-two'], new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC:  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'String'
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Array','Date']
    >>                ACTUAL VALUE ['Oz Lotto',['fourty-two'],'1999-06-14T07:00:00.000Z']
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>Oz Lotto ::: fourty-two :::1999-06-14

    aLottery('Mega Millions', 17, new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: Parameter is meant to be 'Array' but is of the wrong type of 'Number':17
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES ['String','Number','Date']
    >>                ACTUAL VALUE ['Mega Millions',17,'1999-06-14T07:00:00.000Z']
    >>               EXPECTED TYPE ['String',['Number'],'Date']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>Mega Millions ::: 17 :::1999-06-14

    aLottery('Powerball', [], new Date('jun 14 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: ELEMENT '1' is erroneously empty :
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES ['String','Array','Date']
    >>                  ACTUAL VALUE ['Powerball',[],'1999-06-14T07:00:00.000Z']
    >>               EMPTY ASSERTION ['EMPTY-ERROR']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>Powerball ::: :::1999-06-14

    aLottery('', [1,2,3,4,5,26], new Date('Dec 31 1999'))
    >>PRE_aLottery() aLottery() PRE-FUNC: ELEMENT '0' is erroneously empty :
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES ['String','Array','Date']
    >>                  ACTUAL VALUE ['',[1,2,3,4,5,26],'1999-12-31T08:00:00.000Z']
    >>               EMPTY ASSERTION ['EMPTY-ERROR']
    >>            CALLING FUNCTION PRE_aLottery(lottery_name, lucky_numbers, draw_date)
    >>::: 1,2,3,4,5,26 :::1999-12-31



## Examples


### [How To Snippets](/read-mes/how-to-snippets.md)





### [Self-Contained Live TypeCzech Fiddles](/read-mes/live-fiddle-samples.md)

### [Self-Contained Browsable Examples](/read-mes/web-browserable-examples.md)




## [TypeCzech Methods](/read-mes/methods.md)






## [Node.js](/read-mes/node-js.md)






## [Tests](/read-mes/node-and-web-tests.md)




## [Example Style](/read-mes/example-style.md)



## [Detaching TypeCzech for Production](/read-mes/detaching-checking-code.md)



## [_Dependencies](/read-mes/Dependencies.md)


## Created by

[Steen Hansen](https://github.com/steenhansen)


Note that these above example programs can be run in the console when TypeCzech/web-resources/repl.html is loaded in a web browser.



