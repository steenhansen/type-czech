
# TypeCzech

TypeCzech is a runtime type checking JavaScript library that can be programmatically turned on and off.
Include one file in your web page or in your Node.js file to allow you to type check function parameters
and function results. Errors can be set to throw halting exceptions or just output to the Console.

Enjoy some TypeScript benefits without the drawbacks of

  -  Compilation time
  -  New language syntax
  -  Compile time only checks

With TypeCzech you can

  -  Check function parameter types, including arrays, and extended objects
  -  Ensure strings, arrays, and objects are not empty
  -  Catch mutations in function parameters that are collections

Missing from TypeCzech

  -  Type inference
  -  Checking types of optional function parameters
  -  Generics

TypeCzech the bad parts

  - Verbosity of adding PRE_checking(), POST_checking(), and linkUp() functions 
  - Continuously checking parameter mutations of collections can be slow
  - Complicated dynamic minimization of unused code during runtime, while checking constructors and methods of extended classes

## A TypeCzech Example

  -  <b>type_czech = TypeCzech('LOG-ERRORS')</b> logs errors to the console instead of throwing exceptions
  -  <b>type_czech.check_type()</b> checks that the parameter types to aLottery() are first a string, then an array of numbers, and finally a date
  -  <b>type_czech.check_empty()</b> complains when parameters are found to be empty strings, arrays, or objects
  -  <b>PRE_check_aLottery()</b> is executed just before aLottery() runs via <b>type_czech.linkUp()</b> 
  -  /**/ highlights added TypeCzech test code that is safely removable or programmatically turned off


    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_check_aLottery(){
    /**/    A_LOTTERY_SIGNATURE = ['string', ['number'], 'date']
    /**/    type_issue = type_czech.check_type(arguments, A_LOTTERY_SIGNATURE)
    /**/    if (type_issue) return type_issue
    /**/
    /**/    empty_issue = type_czech.check_empty(arguments, ['EMPTY-ERROR'])
    /**/    if (empty_issue) return empty_issue
    /**/
    /**/    return ''
    /**/  }
    /**/
    /**/  aLottery = type_czech.linkUp(aLottery, PRE_check_aLottery) 

    function aLottery(lottery_name, lucky_numbers, draw_date){
      console.log(`${lottery_name} ::: ${lucky_numbers} ::: ${draw_date}`)
    }

[Live editable program on JSFiddle](https://jsfiddle.net/steen_hansen/0xtpLwsc/?00-Readme-Example)

Below is console.log input and output preceded with >>.

    aLottery('El Gordo', [1,2,3,4,5,0], new Date('jun 14 1999'))
    El Gordo ::: 1,2,3,4,5,0 ::: 1999-06-14

    aLottery('Lotto 649', [1,2,3,4,5,6])
    >>PRE_check_aLottery() aLottery() PRE-FUNC: Index '2' is supposed to be a 'date', but is missing : ['Lotto 649',[1,2,3,4,5,6]]
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES ['string','array']
    >>                ACTUAL VALUE ['Lotto 649',[1,2,3,4,5,6]]
    >>               EXPECTED TYPE ['string',['number'],'date']
    >>            CALLING FUNCTION PRE_check_aLottery(lottery_name, lucky_numbers, draw_date)
    Lotto 649 ::: 1,2,3,4,5,6 :::

    aLottery('Oz Lotto', ['fourty-two'], new Date('jun 14 1999'))
    >>PRE_check_aLottery() aLottery() PRE-FUNC:  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'string'
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES ['string','array','date']
    >>                ACTUAL VALUE ['Oz Lotto',['fourty-two'],'1999-06-14T07:00:00.000Z']
    >>               EXPECTED TYPE ['string',['number'],'date']
    >>            CALLING FUNCTION PRE_check_aLottery(lottery_name, lucky_numbers, draw_date)
    Oz Lotto ::: fourty-two ::: 1999-06-14

    aLottery('Mega Millions', 17, new Date('jun 14 1999'))
    >>PRE_check_aLottery() aLottery() PRE-FUNC: Parameter is meant to be 'array' but is of the wrong type of 'number':17
    >>               check_type(arguments, expected_types)
    >>                ACTUAL TYPES ['string','number','date']
    >>                ACTUAL VALUE ['Mega Millions',17,'1999-06-14T07:00:00.000Z']
    >>               EXPECTED TYPE ['string',['number'],'date']
    >>            CALLING FUNCTION PRE_check_aLottery(lottery_name, lucky_numbers, draw_date)
    Mega Millions ::: 17 ::: 1999-06-14

    aLottery('Powerball', [], new Date('jun 14 1999'))
    >>PRE_check_aLottery() aLottery() PRE-FUNC: ELEMENT '1' is erroneously empty :
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES ['string','array','date']
    >>                  ACTUAL VALUE ['Powerball',[],'1999-06-14T07:00:00.000Z']
    >>               EMPTY ASSERTION ['EMPTY-ERROR']
    >>            CALLING FUNCTION PRE_check_aLottery(lottery_name, lucky_numbers, draw_date)
    Powerball ::: ::: 1999-06-14

    aLottery('', [1,2,3,4,5,26], new Date('Dec 31 1999'))
    >>PRE_check_aLottery() aLottery() PRE-FUNC: ELEMENT '0' is erroneously empty :
    >>               check_empty(arguments, expected_emptys)
    >>                  ACTUAL TYPES ['string','array','date']
    >>                  ACTUAL VALUE ['',[1,2,3,4,5,26],'1999-12-31T08:00:00.000Z']
    >>               EMPTY ASSERTION ['EMPTY-ERROR']
    >>            CALLING FUNCTION PRE_check_aLottery(lottery_name, lucky_numbers, draw_date)
    ::: 1,2,3,4,5,26 ::: 1999-12-31


method-examples fold into simple how to 


### [Simple How To Snippets](./read-mes/how-to-snippets.md)

### [Simple Beginner Node.js, PHP, and Web Browser Examples](./read-mes/run-examples.md)

### [61 Page Editable Tutorial on JSFiddle](https://jsfiddle.net/steen_hansen/1Lshcept/?Example-Contents)

### [61 Page Local Browsable Tutorial](./example-snippets/example-contents.html)

### [TypeCzech API](./read-mes/api-list.md)

### [Complex Node.js Examples](./read-mes/node-js.md)

### [Tests](./read-mes/test-suites.md)

### [Dependencies](./read-mes/needed-dependencies.md)

///////////////////////////////
recommended-techniques  make another page



### [Detaching TypeCzech for Production](./read-mes/detaching-checks.md)

### [FAQ](./read-mes/faq-answers.md)


### Created by
[Steen Hansen](https://github.com/steenhansen)


Note that these above example programs can be run in the console when TypeCzech/web-resources/repl.html is loaded in a web browser.


&copy; 2021 Steen Hansen
