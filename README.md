
# TypeCzech

TypeCzech is a run-time type checking JavaScript library that can be programmatically turned on and off.
Include one file in your web page or in your Node.js file to allow you to type check function parameters
and results. Errors can be set to throw halting exceptions or just output to the Console.
The motivation is to verify function parameters before execution, and function results after completion with 
PRE_check() and POST_check() funtions.

Enjoy some TypeScript benefits without the drawbacks of

  -  Compilation time
  -  New language syntax
  -  Compile time only checks

With TypeCzech you can

  -  Check function parameter types, including arrays, and extended objects
  -  Ensure strings, arrays, and objects are not empty at run-time
  -  Catch malformed data from a fetch() at run-time
  -  Specify run-time input validation constraints
  -  Detect run-time mutations in function parameters that are collections

Missing from TypeCzech

  -  Type inference
  -  Checking types of optional function parameters
  -  Generics

TypeCzech the bad parts

  - Verbosity of adding PRE_checking(), POST_checking(), and linkUp() functions 
  - Continuously checking parameter mutations of large collections can be slow
  - When checking constructors and methods of extended classes, production code
  can get complicated if all TypeCzech testing code is to be completely removed.

## The Example

  -  type_czech = <b>TypeCzech('LOG-ERRORS')</b> logs errors to the console instead of throwing exceptions
  -  type_czech.<b>check_type()</b> checks that the parameter types to aLottery() are first a string, then an array of numbers, and finally a date
  -  type_czech.<b>check_empty()</b> complains when parameters are found to be empty strings, arrays, or objects
  -  <b>PRE_check_aLottery()</b> is executed just before aLottery() and runs via type_czech.<b>linkUp()</b> 
  -  /**/ highlights added TypeCzech test code that is safely removable or programmatically turned off

```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  function PRE_check_aLottery(lottery_name, lucky_numbers, draw_date){
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
```

[Live editable program on JSFiddle](https://jsfiddle.net/steen_hansen/0xtpLwsc/?00-Readme-Example)

Below is console.log input and output preceded with >>.
```
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
```

### The Idea
Is to 'LOG-ERRORS' or 'THROW-EXCEPTIONS' when errors are found and returned from PRE_check() and POST_check() functions that are linked into yourFunction() during testing and development with linkUp().

In the below example, PRE_check_yourFunction() and POST_check_yourFunction() are only executed, via linkUp(), because TypeCzech.js is loaded. The two commented out lines have no effect when <b>TypeCzech.js is loaded</b>. PRE_check_yourFunction() checks function parameters before yourFunction() runs, and POST_check_yourFunction() checks function results after yourFunction() runs.
```
<script src="TypeCzech.js"></script>
  
if (typeof TypeCzech === 'function')
  type_czech = TypeCzech('THROW-EXCEPTIONS')  // TypeCzech.js is active
//else
//  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }

function PRE_check_yourFunction(param_1, param_2){ /* check parameters before execution */ }
function POST_check_yourFunction(results){ /*         check results after execution */ }

yourFunction = type_czech.linkUp(yourFunction, PRE_check_yourFunction, POST_check_yourFunction)

function yourFunction(param_1, param_2){
  return results
}
```

When <b>TypeCzech.js is not loaded</b> only yourFunction() has any effect, as below. Note the linkUp() function is a no-operation when TypeCzech.js is not loaded.

```
//if (typeof TypeCzech === 'function')
//  type_czech = TypeCzech('THROW-EXCEPTIONS')
//else
  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }  // TypeCzech.js was not loaded

//function PRE_check_yourFunction(param_1, param_2){ }
//function POST_check_yourFunction(results){ }

//yourFunction=type_czech.linkUp(yourFunction, PRE_check_yourFunction, POST_check_yourFunction)

function yourFunction(param_1, param_2){
  return results
}
```

<b>So basically linkUp() and isActive() are the only two TypeCzech functions that are always safe to call.</b>
As long as the below construct is used, regardless of whether or not TypeCzech.js has been loaded. Thus enveloping all TypeCzech calls with linkUp() and isActive() will ensure no reference errors are caused when TypeCzech is turned on or off by not loading the TypeCzech.js file.
```
 if (typeof TypeCzech === 'function')
   type_czech = TypeCzech('THROW-EXCEPTIONS')
 else
   type_czech = { linkUp: (nop) => nop, isActive: (x) => false }

 type_czech.linkUp()
 type_czech.isActive()
```

### The Recipe
  TypeCzech function calls should only appear in these three places, encased by either 

  - 1 a linked up PRE_check() function
  - 2 a linked up POST_check() function
  - 3 or inside an isActive() if then statement inside of a promise. Then you
    have to deliver the error message via an assert_check() call; it's not automatic.

```
function PRE_check_yourFunc(){ 
  /* 1 TypeCzech functions should mostly appear here to check parameters before yourFunc() runs */
}

function POST_check_yourFunc(){ 
  /* 2 TypeCzech functions sometimes occur here to check the results of yourFunc() */
}
yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc, POST_check_yourFunc)

function yourFunc(){ }



fetch(some_url)
.then(a_response => {
  if (type_czech.isActive()) {
    /* 3 TypeCzech functions rarely show up here, but assert_check() is used to deliver errors */
    type_err = type_czech.check_type(a_response, 'array')
    type_czech.assert_check(type_err, 'FETCH ERROR', a_response)
  }
})
```
  This is enables 
```  
type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
```  
  to handle TypeCzech.js not being loaded, safely.


### [Simple How To Snippets](./read-mes/simple-howto.md)


### [61 Page Editable Tutorial on JSFiddle](https://jsfiddle.net/steen_hansen/1Lshcept/?Example-Contents)

### [61 Page Local Browsable Tutorial](./example-snippets/example-contents.html)

### [TypeCzech API](./read-mes/api-list.md)

### [Node.js and PHP Examples](./read-mes/run-examples.md)


### [Browser and Node.js Tests](./read-mes/test-suites.md)


### [Recommended Techniques](./read-mes/recommended-techniques.md)

### [Production TypeCzech](./read-mes/production-type-czech.md)

### [FAQ](./read-mes/faq-answers.md)

### [Dependencies](./read-mes/needed-dependencies.md)

### Created by
[Steen Hansen](https://github.com/steenhansen)


&copy; 2021 Steen Hansen
