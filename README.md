
<a id="fast-start"></a>

# TypeCzech


Ditch TypeScript and use JavaScript runtime type checking instead. 
The links below all go to editable [JSFiddles](https://jsfiddle.net/steen_hansen/1Lshcept/?Example-Contents) that look best in "Tabs (rows)" layout.

 - [Parameter signatures](https://jsfiddle.net/steen_hansen/0xtpLwsc/?00-Readme-Example), function [return types](https://jsfiddle.net/steen_hansen/wrkvscqg/?05-Verify-Return-Results-by-Value), and [argument values](https://jsfiddle.net/steen_hansen/6zy89om1/?02-Validate-Parameters-by-Value)
 - Specify [async/await](https://jsfiddle.net/steen_hansen/q7rckeno/?703-Async-Await) types
 - Type check [React JSX](https://jsfiddle.net/steen_hansen/z1yug5nw/?707-React-JSX)
 - [Toggle on or off](https://jsfiddle.net/steen_hansen/f19s52xr/?36-Start-and-Stop) programatically
 - Console.log type errors or [throw exceptions](https://jsfiddle.net/steen_hansen/ep3snb8z/?35-Throw-or-Log)
 - Check for [empty values](https://jsfiddle.net/steen_hansen/x8h6dvj5/?19-Lone-Empty-Param-and-Result)
 - No compiling, no function altering, and a [dependency free package.json](https://github.com/steenhansen/type-czech/blob/master/package.json)

[eiffel_link]: https://en.wikipedia.org/wiki/Eiffel_(programming_language)

Brought to you by the object [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy),
TypeCzech is a single file with no dependancies run-time type checking 
[NPM JavaScript library](https://www.npmjs.com/package/type-czech) that can be toggled on and off.
Type errors can be set to throw exceptions or just output to the Console.
The motivation is to verify function parameters before execution,
and function results after completion with PRE_yourRoutine() and POST_yourRoutine() functions.
Functions are not changed in any way by the linking of type checking functions as they are with asserts.
Nothing is added to function declarations like with TypeScript.
I got the idea from the [Clojure spec library](https://clojure.org/guides/spec), which I believe
copied Bertrand Meyer's [Eiffel][eiffel_link] that invented [Design by Contract](https://en.wikipedia.org/wiki/Design_by_contract) (DbC).


```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_yourRoutine(number_array, an_str, a_date){
  the_parameters = [ number_array, an_str,   a_date]
  the_signature  = [ ['numbers'], 'string', 'date']
  return type_czech.checkParam_type(the_parameters, the_signature)
}

function POST_yourRoutine(return_int){
  return type_czech.checkParam_type(return_int, 'number')
}

yourRoutine = type_czech.linkUp(yourRoutine, PRE_yourRoutine, POST_yourRoutine)

function yourRoutine(number_array, an_str, a_date){
  return 1234 
}

yourRoutine([1,2,3], 'abc', new Date('dec 31 1999'))
```
[Run this live on an editable JSFiddle](https://jsfiddle.net/steen_hansen/efLgk3h4/?700-Simple-Example)


![diagram](diagram.png)


## See Type-Czech Working in Online Ajax Program
The [Run Time Type Checking Square Root Finder](https://type-czech-always-on.onrender.com/), 150 seconds to start on free hosting, verifies that
live aysnc server calls have correct number types. The types checked for are 'Roman Numerals', 'Word Numbers',
'Floats', and 'Integers'. So when the Roman square root of 'MCDXLIV' is processed, resulting in 'xxxviii', 
there are no type errors printed in the console. But when 'ypE', or 3025, is entered, an error is generated
in the console.log because 'Greek Numerals' are not supported. So instead of seeing 'VE', or 55,  as the 
square root of 3025, the server does not respond to non-supported number types and a non-response fetch 
type check error is displayed in the console.

<a id="live-jsfiddles"></a>

## See Type-Czech Work in Live Editable JsFiddles
[75 pages](https://jsfiddle.net/steen_hansen/1Lshcept/?Example-Contents) of live changeable coloured examples if you have the time.

|                                                                                                                                    |                                                                                                                        |                                                                                                                                            |                                                                                                                                         |                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| [00-Readme-Example](https://jsfiddle.net/steen_hansen/0xtpLwsc/?00-Readme-Example)                                                 | [01 - What is TypeCzech?](https://jsfiddle.net/steen_hansen/9u54vsd2/?01-What-is-TypeCzech)                            | [02 - Validate Parameters by Value](https://jsfiddle.net/steen_hansen/6zy89om1/?02-Validate-Parameters-by-Value)                           | [03 - Turn Off TypeCzech by Not Loading Library](https://jsfiddle.net/steen_hansen/m1tce27f/?03-Turn-Off-Library-Not-Loaded)            | [04 - Turn off by Not Loading Checking Functions](https://jsfiddle.net/steen_hansen/nve4d3ah/?04-Turn-Off-No-Check-Functions)              |
| [05 - Verify Return Results by Value](https://jsfiddle.net/steen_hansen/wrkvscqg/?05-Verify-Return-Results-by-Value)               | [06 - Validate Parameters And Results](https://jsfiddle.net/steen_hansen/jxrdom62/?06-Validate-Parameters-and-Results) | [07 - Mutated Function Parameters](https://jsfiddle.net/steen_hansen/abh0jkL1/?07-Mutated-Function-Parameters)                             | [08 - Mutated Recursive Function Parameters](https://jsfiddle.net/steen_hansen/3pv5qwx8/?08-Mutated-Recursive-Function-Parameters)      | [09 - Closure Parameters, Results, and Methods](https://jsfiddle.net/steen_hansen/r8L3mp40/?09-Closure-Parameters-Results-and-Methods)     |
| [10 - Class Parameters, Results, and Methods](https://jsfiddle.net/steen_hansen/Lhwov8y9/?10-Class-Parameters-Results-and-Methods) | [11 - Object Properties](https://jsfiddle.net/steen_hansen/qp29Ljd1/?11-Object-Properties)                             | [12 - Class Interface](https://jsfiddle.net/steen_hansen/og2sk4b9/?12-Class-Interface)                                                     | [13 - Parameter and Result Multi Scalar Types](https://jsfiddle.net/steen_hansen/rh79bLwa/?13-Parameter-and-Results-Multi-Scalar-Types) | [14 - Array and Object Types with Parameter and Results](https://jsfiddle.net/steen_hansen/1ref2ot7/?14-Parameter-and-Results-Multi-Types) |
| [15 - Lone Single Type Parameter Functions](https://jsfiddle.net/steen_hansen/zkhfLw0u/?15-Lone-Single-Type-Parameter-Functions)   | [16 - Arrays with One Type](https://jsfiddle.net/steen_hansen/bsw3yp5c/?16-Arrays-with-One-Type)                       | [17 - Variadic Functions](https://jsfiddle.net/steen_hansen/hrvucjzm/?17-Variadic-Functions.html)                                          | [18 - Class Type Checks](https://jsfiddle.net/steen_hansen/063wLqfs/?18-Class-Type-Checks)                                              | [19 - Lone Empty Parameter and Result](https://jsfiddle.net/steen_hansen/x8h6dvj5/?19-Lone-Empty-Param-and-Result)                         |
| [20 - Multiple Empty Parameters and Results](https://jsfiddle.net/steen_hansen/b7cfsz9y/?20-Multiple-Empty-Params-and-Results)     | [21 - Extra Optional Parameters](https://jsfiddle.net/steen_hansen/Lwn504es/?21-Type-Check-with-Extra-Optional-Params) | [22 - Empty Checks with Extra Optional Parameters](https://jsfiddle.net/steen_hansen/hjxekf63/?22-Empty-Checks-with-Extra-Optional-Params) | [23 - Typed Either Checks](https://jsfiddle.net/steen_hansen/ntrsobk3/?23-Typed-Either-Checks)                                          | [24 - Empty Either Checks](https://jsfiddle.net/steen_hansen/1dL76zws/?24-Empty-Either-Checks)                                             |
| [25 - Default Parameters](https://jsfiddle.net/steen_hansen/8ep7fzu5/?25-Default-Parameters)                                       | [26 - Empty Abbreviations](https://jsfiddle.net/steen_hansen/4a1r03he/?26-Empty-Abbreviations)                         | [27 - Types, Emptiness, and Extra Parameters](https://jsfiddle.net/steen_hansen/tdL7hwgc/?27-Typed-and-Empty-Either-Checks-with-Optionals) | [28 - Accept Null and Undefined Values](https://jsfiddle.net/steen_hansen/zdk1wjgn/?28-Accept-Null-and-Undefined-Values)                | [29 - Class Object Type Checks](https://jsfiddle.net/steen_hansen/27kvuft1/?29-Class-Object-Type-Checks)                                   |
| [30 - HTML Element Type Checks](https://jsfiddle.net/steen_hansen/qkjvpoce/?30-HTML-Type-Checks)                                   | [31 - Extended Class Type Checks](https://jsfiddle.net/steen_hansen/pv7Lt19b/?31-Extended-Class-Type-Checks)           | [32 - Extended Closure Type Checks](https://jsfiddle.net/steen_hansen/1qfjLhsx/?32-Extended-Closure-Type-Checks-check)                     | [33 - Count Parameter Checking Function Calls](https://jsfiddle.net/steen_hansen/gr1bucdp/?33-Count-Checks)                             | [34 - Parameter Check Events](https://jsfiddle.net/steen_hansen/9Lvnhdmq/?34-Parameter-Check-Events)                                       |
| [35 - Throw, Log, or Ignore](https://jsfiddle.net/steen_hansen/ep3snb8z/?35-Throw-or-Log)                                          | [36 - Turn-On, Turn-Off](https://jsfiddle.net/steen_hansen/f19s52xr/?36-Start-and-Stop)                                | [37 - Readme Example Arrow Functions](https://jsfiddle.net/steen_hansen/cwfsubtv/?37-Readme-Example-Arrow-Functions)                       | [38 - Every Check](https://jsfiddle.net/steen_hansen/1umwvht5/?38-Every-Check)                                                          | [39 - Check Asserts](https://jsfiddle.net/steen_hansen/ta7fdnrw/?39-Assert-Checks)                                                         |
| [40 - Prescribed Use](https://jsfiddle.net/steen_hansen/m1atu7qj/?40-Prescribed-Use)                                               | [41 - Lens Example](https://jsfiddle.net/steen_hansen/fxt8ag56/?41-Lens-Example)                                       | [42 - Extended Objects](https://jsfiddle.net/steen_hansen/rvau7yes/?42-Extended-Objects)                                                   |                                                                                                                                         |                                                                                                                                            |
| **Classes**                                                                                                                        | [101 - Extended Classes Inline](https://jsfiddle.net/steen_hansen/cnLrm6ad/?101-Extending-Classes-Inline)              | [102 - Extended Classes Imported](https://jsfiddle.net/steen_hansen/rs4nqL7k/?102-Extending-Classes-Imports)                               | [103 - Extended Classes Production](https://jsfiddle.net/steen_hansen/37mysdz8/?103-Extending-Classes-Production)                       |                                                                                                                                            |
| **Closures**                                                                                                                       | [201 - Closure Modules Inline](https://jsfiddle.net/steen_hansen/6n5pb9eh/?201-Extending-Closures-Inline)              | [202 - Closure Modules Imported](https://jsfiddle.net/steen_hansen/msqcya0f/?202-Extending-Closures-Imports)                               | [203 - Closure Modules Production](https://jsfiddle.net/steen_hansen/ym2vk1tf/?203-Extending-Closures-Production)                       | [204 - Extending Closures Single](https://jsfiddle.net/steen_hansen/8kbtyfz1/?204-Extending-Closures-Single)                               |
| **IIFEs**                                                                                                                          | [301 - IIFE Modules Inline](https://jsfiddle.net/steen_hansen/r26xjw8q/?301-Extending-IIFEs-Inline)                    | [302 - IIFE Modules Imported](https://jsfiddle.net/steen_hansen/ug3f1pqr/?302-Extending-IIFEs-Imports)                                     | [303 - IIFE Modules Production](https://jsfiddle.net/steen_hansen/wrvze5o4/?303-Extending-IIFEs-Production)                             | [304 - Extending IIFEs Single](https://jsfiddle.net/steen_hansen/ktbczhs8/?304-Extending-IIFEs-Single)                                     |
| **Class Free**                                                                                                                     | [401 - ClassFree Constructors Inline](https://jsfiddle.net/steen_hansen/xsyu1Lma/?401-Extending-ClassFree-Inline)      | [402 - ClassFree Constructors Imported](https://jsfiddle.net/steen_hansen/pyqxrs57/?402-Extending-ClassFree-Imports)                       | [403 - ClassFree Constructors Production](https://jsfiddle.net/steen_hansen/57tpy1wm/?403-Extending-ClassFree-Production)               | [404 - Extending ClassFree Single](https://jsfiddle.net/steen_hansen/asjwhbd8/?404-Extending-ClassFree-Single)                             |
| **Prototypes**                                                                                                                     | [501 - Inherited Prototypes Inline](https://jsfiddle.net/steen_hansen/gn38a4k9/?501-Extending-Prototypes-Inline)       | [502 - Inherited Prototypes Imported](https://jsfiddle.net/steen_hansen/retqdosm/?502-Extending-Prototypes-Imports)                        | [503 - Inherited Prototypes Production](https://jsfiddle.net/steen_hansen/2paqh67m/?503-Extending-Prototypes-Production)                | [504 - Extending Prototypes Single](https://jsfiddle.net/steen_hansen/0fabr5g3/?504-Extending-Prototypes-Single)                           |
| **OLOO**                                                                                                                           | [601 - Created OLOO Inline](https://jsfiddle.net/steen_hansen/guw701xv/?601-Created-OLOO-Inline)                       | [602 - Created OLOO Imported](https://jsfiddle.net/steen_hansen/b2qpL9rt/?602-Extending-OLOO-Imports)                                      | [603 - Created OLOO Production](https://jsfiddle.net/steen_hansen/ktezbg7c/?603-Extending-OLOO-Production)                              | [604 - Extending OLOO Single](https://jsfiddle.net/steen_hansen/74Lvbj5x/?604-Extending-OLOO-Single)    
| &nbsp; | [700 - Simple-Example](https://jsfiddle.net/steen_hansen/efLgk3h4/?700-Simple-Example)                                                 | [701 - Array of Objects](https://jsfiddle.net/steen_hansen/536du9cb/?701-Array-of-Objects.html)                            | [702 - DeClassify](https://jsfiddle.net/steen_hansen/jbyor8fm/?702-DeClassify.html)                           |[703 - Async Await](https://jsfiddle.net/steen_hansen/q7rckeno/?703-Async-Await)            |
|&nbsp;| [704 - Ramda Curry](https://jsfiddle.net/steen_hansen/1xLef83o/?704-Ramda-Curry)              | [705 - Sensible Switching](https://jsfiddle.net/steen_hansen/efLgk3h4/?700-Simple-Example)                                                 | [706 - Elegant On Off](https://jsfiddle.net/steen_hansen/536du9cb/?701-Array-of-Objects.html)                            | [707 - React JSX.html](https://jsfiddle.net/steen_hansen/jbyor8fm/?702-DeClassify.html)                           | 
## See Canonical Motivational Example
The use of '1' instead of 1 causes incorrect data to be displayed because the type of a [string instead of a number](https://type-czech-canonical.onrender.com/) causes concatenation instead of addition. 
The development version of this program prints type errors to the console, while the production version
ignores all Javascript type errors.

## To Install
```
npm i type-czech
```

## Both Import and Require Are Supported
```
import TypeCzech_obj from "./node_modules/type-czech/type-czech-import.js";

const { TypeCzech_obj } = require("./node_modules/type-czech/type-czech-require.js");
```
## Vite-Plugin-SSR
The [vite-plugin-ssr](https://vite-plugin-ssr.com/) forms the foundations of all the sample programs. 


## Online TypeCzech Examples

### Type-czech-always-on
A square root finder using Vite, [https://type-czech-always-on.onrender.com/](https://type-czech-always-on.onrender.com/) slow
to start free Render.com site, which uses the four types of
"Roman-Numbers", "Word-Numbers", "Floats", and "Integers". Type checking errors
can easily be constructed, turned on or off, and are viewable in a grey dialog.
[https://github.com/steenhansen/type-czech-always-on](https://github.com/steenhansen/type-czech-always-on)

### Type-czech-canonical
A Vite SSR/HMR example, [https://type-czech-canonical.onrender.com/](https://type-czech-canonical.onrender.com/) slow
to start free Render.com site, that is a simple example of TypeCzech use. A JSX component has
been deliberately given a string parameter of "1", when the correct value should have be a number of 1.
This causes the clicked button to be incorrectly rendered as 'Counter 11111...' instead of the correct
sequence of 'Counter 1', 'Counter 2'. There is one type checking function with one error that is found in 
both Node.js and browser environments in the console when in development.
[https://github.com/steenhansen/type-czech-canonical](https://github.com/steenhansen/type-czech-canonical)

### Type-czech-phone-Recipes
Another Vite example, [https://phone-recipes.herokuapp.com/](https://phone-recipes.herokuapp.com/), which uses
TypeCzech in development to 
- Type check the paremeters and results of MongoDB calls in Node.js, 
    [GitHub File](https://github.com/steenhansen/type-czech-phone-recipes/blob/main/mongoose-database/tc-recipe-collections.js)
- Type check the parameters of JSX SSR functions in Node.js and browser,
    [GitHub File](https://github.com/steenhansen/type-czech-phone-recipes/blob/main/type-czech-jsx/tc_HomeRecipes_DEV.js)
- Type check parameters and results of Ajax routines in the browser,
    [GitHub File](https://github.com/steenhansen/type-czech-phone-recipes/blob/main/redux-store/tc-ajax-calls_DEV.js)

### Why
Enjoy some TypeScript benefits without the drawbacks of

- Compilation time
- New language syntax
- Compile time only checks

With TypeCzech you can

- Check function [parameter types](https://jsfiddle.net/steen_hansen/0xtpLwsc/?00-Readme-Example),
  [results](https://jsfiddle.net/steen_hansen/wrkvscqg/?05-Verify-Return-Results-by-Value),
  [arrays](https://jsfiddle.net/steen_hansen/bsw3yp5c/?16-Arrays-with-One-Type),
  [closures](https://jsfiddle.net/steen_hansen/r8L3mp40/?09-Closure-Parameters-Results-and-Methods),
  and [classes](https://jsfiddle.net/steen_hansen/Lhwov8y9/?10-Class-Parameters-Results-and-Methods)
- Ensure strings, arrays, and objects are [not empty](https://jsfiddle.net/steen_hansen/x8h6dvj5/?19-Lone-Empty-Param-and-Result) at run-time
- [Catch malformed data](https://jsfiddle.net/steen_hansen/ta7fdnrw/?39-Assert-Checks) from a fetch() call at run-time
- Specify [run-time input validation constraints](https://jsfiddle.net/steen_hansen/6zy89om1/?02-Validate-Parameters-by-Value)
- [Detect run-time mutations](https://jsfiddle.net/steen_hansen/abh0jkL1/?07-Mutated-Function-Parameters) in array and object function parameters

Missing from TypeCzech

- Type inference
- Checking types of optional function parameters
- Generics

TypeCzech the good parts

- Type signatures are plain JavaScript variables made of objects, arrays, and strings.
  No special type variables, no annotations, and no generics.
- Checking functions are easily detachable into a separate file. To stop all TypeCzech checking just stop importing the TypeCzech library in production or development. Decouple
  with a comment as in [03-Turn-Off-Library-Not-Loaded](https://jsfiddle.net/steen_hansen/m1tce27f/?03-Turn-Off-Library-Not-Loaded), a variable as in [102-Extending-Classes-Imports](https://jsfiddle.net/steen_hansen/rs4nqL7k/?102-Extending-Classes-Imports), or an if statement as in [204-Extending-Closures-Single](https://jsfiddle.net/steen_hansen/8kbtyfz1/?204-Extending-Closures-Single).
- Does not introduce special syntax into your code, just plain functions. No .d.ts files just plain JavaScript.

TypeCzech the bad parts

- Verbosity of adding PRE_checking(), POST_checking(), and linkUp() functions to source
- Continuously checking parameter mutations of large collections can be slow
- When checking constructors and methods of extended classes, production code
  can get complicated if all TypeCzech testing code is to be completely removed for production.

-------------------------

### Note that everything documented below is non-compiled straight included Javascript 
where 
&lt;script src="[https://cdn.jsdelivr.net/gh/steenhansen/type-czech@latest/web-resources/TypeCzech.min.js](https://cdn.jsdelivr.net/gh/steenhansen/type-czech@latest/web-resources/TypeCzech.min.js)"&gt;
is used directly in webpages without any Vite/Rollup/Webpack bundling.
This enables the TypeCzech examples to be hosted on JSFiddle, [https://jsfiddle.net/steen_hansen/1Lshcept/?Example-Contents](https://jsfiddle.net/steen_hansen/1Lshcept/?Example-Contents),
and be manipulated and runnable directly in the browser.

-------------------------

## The Example

- type_czech = <b>TypeCzech('LOG-ERRORS')</b> logs errors to the console instead of throwing exceptions
- type_czech.<b>checkParam_type()</b> checks that the parameter types to aLottery() are first a string, then an array of numbers, and finally a date
- type_czech.<b>checkArgs_emptyEach()</b> complains when parameters are found to be empty strings, arrays, objects, or dates.
- <b>PRE_check_aLottery()</b> is executed just before aLottery() and runs via type_czech.<b>linkUp()</b>
- /\*\*/ highlights added TypeCzech test code that is safely removable or programmatically turned off

```
function aLottery(lottery_name, lucky_numbers, draw_date){
  console.log(`${lottery_name} ::: ${lucky_numbers} ::: `, draw_date)
}

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  LOTTERY_SIGNATURE = ['string', ['numbers'], 'date']
/**/
/**/  function PRE_check_aLottery(lottery_name, lucky_numbers, draw_date){
/**/    the_parameters = [lottery_name, lucky_numbers, draw_date]
/**/    type_issue = type_czech.checkParam_type(the_parameters, LOTTERY_SIGNATURE)
/**/    if (type_issue)
/**/      return type_issue
/**/
/**/    empty_issue = type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
/**/    if (empty_issue)
/**/      return empty_issue
/**/
/**/    return ''
/**/  }
/**/
/**/  aLottery = type_czech.linkUp(aLottery, PRE_check_aLottery)

aLottery('El Gordo', [1,2,3,4,5,0], new Date('jun 14 1999')) // no effects as valid parameters
```

[Live editable program on JSFiddle](https://jsfiddle.net/steen_hansen/0xtpLwsc/?00-Readme-Example)

Below is console.log input and output preceded with >>.

```
>>El Gordo ::: 1,2,3,4,5,0 ::: Date Mon Jun 14 1999 00:00:00 GMT-0700 (Pacific Daylight Time)

aLottery('Powerball', [], new Date('jun 14 1999'))

>>PRE_check_aLottery() PRE-FUNC: Empty array has no types
>>         CHECKER checkParam_type()
>>     ACTUAL TYPE ['string','array','date']
>>          VALUES ["Powerball",[],1999-06-14T07:00:00.000Z]
>>   EXPECTED TYPE ["string",["number"],"date"]
>>          ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>Powerball ::: ::: Date Mon Jun 14 1999 00:00:00 GMT-0700 (Pacific Daylight Time)

aLottery('', [1,2,3,4,5,26], new Date('Dec 31 1999'))

>>PRE_check_aLottery() PRE-FUNC: ELEMENT '0' is erroneously empty :
>>                       CHECKER checkArgs_emptyEach()
>>                  ACTUAL TYPES ['string','array','date']
>>                        VALUES ["",[1,2,3,4,5,26],1999-12-31T08:00:00.000Z]
>>               EMPTY ASSERTION ['EMPTY-ERROR']
>>                      ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>::: 1,2,3,4,5,26 ::: Date Fri Dec 31 1999 00:00:00 GMT-0800 (Pacific Standard Time)

aLottery('Mega Millions', 17, new Date('jun 14 1999'))

>>PRE_check_aLottery() PRE-FUNC: Param is meant to be 'array' but is of the wrong type of 'number':17
>>                     CHECKER checkParam_type()
>>                ACTUAL TYPES ['string','number','date']
>>                      VALUES ["Mega Millions",17,1999-06-14T07:00:00.000Z]
>>               EXPECTED TYPE ["string",["number"],"date"]
>>                      ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>Mega Millions ::: 17 ::: Date Mon Jun 14 1999 00:00:00 GMT-0700 (Pacific Daylight Time)

aLottery('Lotto 649', [1,2,3,4,5,6])

>>PRE_check_aLottery() PRE-FUNC:  ELEMENT '2' is assumed to be a 'date', but is mistakenly a 'undefined'
>>                     CHECKER checkParam_type()
>>                ACTUAL TYPES ['string','array']
>>                      VALUES "Lotto 649",[1,2,3,4,5,6]
>>               EXPECTED TYPE ["string",["number"],"date"]
>>                      ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>Lotto 649 ::: 1,2,3,4,5,6 ::: undefined

aLottery('Oz Lotto', ['fourty-two'], new Date('jun 14 1999'))

>>PRE_check_aLottery() PRE-FUNC:  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'string' with a value of fourty-two
>>                     CHECKER checkParam_type()
>>                ACTUAL TYPES ['string','array','date']
>>                      VALUES ["Oz Lotto",["fourty-two"],1999-06-14T07:00:00.000Z]
>>               EXPECTED TYPE ["string",["number"],"date"]
>>                      ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>Oz Lotto ::: fourty-two ::: Date Mon Jun 14 1999 00:00:00 GMT-0700 (Pacific Daylight Time)
```

## Pollute Function With Asserts

A function can also be have its specification fufilled with congesting assertions for the same effect.

```
function aLottery(lottery_name, lucky_numbers, draw_date){
  is_testing && assert.typeOf(lottery_name, 'string');
  is_testing && assert.typeOf(lucky_numbers, 'array');
  is_testing && assert.typeOf(draw_date, 'date');

  is_testing && assert.notEqual(lottery_name, '');
  is_testing && assert.isNotEmpty(lucky_numbers);
  is_testing && assert.notEqual(draw_date, '');

  is_testing && lucky_numbers.forEach(lucky_num => assert.typeOf(lucky_num, 'number'));

  console.log(`${lottery_name} ::: ${lucky_numbers} ::: `, draw_date)
}
```

## The Idea

Is to 'LOG-ERRORS' or 'THROW-EXCEPTIONS' when errors are found and returned from PRE_check() and POST_check() functions that are linked into yourFunction() during testing and development with linkUp().

In the below example, PRE_check_yourFunction() and POST_check_yourFunction() are only executed, via linkUp(), because TypeCzech.js is loaded. The two commented out lines have no effect when <b>TypeCzech.js is loaded</b>. PRE_check_yourFunction() checks function parameters before yourFunction() runs, and POST_check_yourFunction() checks function results after yourFunction() runs.

```
// <script src="TypeCzech.js"></script>

if (typeof TypeCzech === 'function')
  type_czech = TypeCzech('THROW-EXCEPTIONS')  // TypeCzech.js is active
//else
//  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }

function PRE_check_yourFunction(param_1, param_2){
  console.log('PRE', param_1, param_2) // parameters before function execution
}
function POST_check_yourFunction(results){
  console.log('POST', results) // results after function execution
}

yourFunction = type_czech.linkUp(yourFunction, PRE_check_yourFunction, POST_check_yourFunction)

function yourFunction(param_1, param_2){
  console.log('yourFunction()', param_1, param_2)
  return [param_1, param_2]
}

yourFunction(1, 'two')
```

When <b>TypeCzech.js is not loaded</b> only yourFunction() has any effect, as below. Note the linkUp() function is a no-operation when TypeCzech.js is not loaded.

```
//if (typeof TypeCzech === 'function')
//  type_czech = TypeCzech('THROW-EXCEPTIONS')
//else
  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }  // TypeCzech.js was not loaded

//function PRE_check_yourFunction(){ }
//function POST_check_yourFunction(){ }

//yourFunction=type_czech.linkUp(yourFunction, PRE_check_yourFunction, POST_check_yourFunction)

function yourFunction(param_1, param_2){
  console.log('yourFunction()', param_1, param_2)
  return [param_1, param_2]
}

yourFunction(1, 'two')
```

<b>So basically linkUp() and isActive() are the only two TypeCzech functions that are always safe to call,</b>
as long as the below construct is used, regardless of whether or not TypeCzech.js has been loaded. Thus enveloping all TypeCzech calls with linkUp() and isActive() will ensure no reference errors are caused when TypeCzech is turned on or off by not loading the TypeCzech.js file.

```
function aFunction(){ }
function before_aFunction(){ }
function after_aFunction(){ }

if (typeof TypeCzech === 'function')
  type_czech = TypeCzech('THROW-EXCEPTIONS')
else
  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }

type_czech.linkUp(aFunction, before_aFunction, after_aFunction)
type_czech.isActive()
```

## The Recipe

TypeCzech function checking calls should only appear in these three places:

- A. encased by a linked-up PRE_check() function
- B. wrapped by a linked-up POST_check() function

```
function PRE_check_yourFunc(param_1, param_2, param_3){
  /* A. TypeCzech functions should mostly appear here to check parameters BEFORE yourFunc() runs */
}

function POST_check_yourFunc(function_result){
  /* B. TypeCzech functions sometimes occur here to check the RESULTS of yourFunc() */
}
yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc, POST_check_yourFunc)

function yourFunc(param_1, param_2, param_3){
  return function_result
}
```

- C. or inside an isActive() if then statement inside of a promise. Then you
  have to deliver the error message via an check_assert() call; it's not automatic when inside THEN blocks. Below is a passing example of '8.8.8.8', and a failing example. Note that the signature is built to match the number of returning countries in the variable geo_array_signature.

```
type_czech = TypeCzech('THROW-EXCEPTIONS')

ONE_GeoJS_SIGNATURE = {country:'string', country_3:'string', ip:'string', name:'string'}

function getIpCountryInfo(ip_numbers){
  country_url = 'https://get.geojs.io/v1/ip/country.json?ip=' + ip_numbers
  fetch(country_url)
  .then(response => response.json())
  .then(geo_data => {
    if (type_czech.isActive()) {
      geo_array_signature = Array(geo_data.length).fill(ONE_GeoJS_SIGNATURE);
      type_err = type_czech.checkParam_type(geo_data, geo_array_signature)
      type_czech.check_assert(type_err, 'Error - GeoJs.io error', geo_data)
    }
    return geo_data
  })
  .then(geo_data => console.dir(geo_data))
}

getIpCountryInfo('8.8.8.8,' + '46.135.0.0,' + '104.200.151.94')

>> Object { country: "US", country_3: "USA", ip: "8.8.8.8", ...}
>> Object { country: "CZ", country_3: "CZE", ip: "46.135.0.0", … }
>> Object { country: "CA", country_3: "CAN", ip: "199.175.213.12", ...}

getIpCountryInfo('fail-no-country-ip')

>>    MESSAGE  Key 'country', which has a type of 'string', is missing in the checked object
>>    CHECKER check_assert()
>>ACTUAL TYPE 'array'
>>     VALUES [{ip:"fail-no-country-ip"}]
>>     ORIGIN Error - GeoJs.io error
```

Above in the fetch() promise chain, if the returned value of 'geo_data' does not match the {country:'string', country_3:'string', ip:'string', name:'string'}, then type_czech.check_assert() will throw or console.log the error message.

When TypeCzech.js is not loaded, then the below construct renders all linkUp() calls into having no effect.

```
type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
```

## The Recommendation

For sanity's sake, I advise keeping TypeCzech code in separate files. This is highlighed in the examples of
[204-Extending-Closures-Single](https://jsfiddle.net/steen_hansen/8kbtyfz1/?204-Extending-Closures-Single),
[304-Extending-IIFEs-Single](https://jsfiddle.net/steen_hansen/ktbczhs8/?304-Extending-IIFEs-Single),
[404-Extending-ClassFree-Single](https://jsfiddle.net/steen_hansen/asjwhbd8/?404-Extending-ClassFree-Single),
[504-Extending-Prototypes-Single](https://jsfiddle.net/steen_hansen/0fabr5g3/?504-Extending-Prototypes-Single),
[604-Extending-OLOO-Single](https://jsfiddle.net/steen_hansen/74Lvbj5x/?604-Extending-OLOO-Single).

Thus detaching of TypeCzech can be done as below, without loading any checking code in the browser.

```
// <script src="../TypeCzech.js">
// <script src="./204-all-checks-external.js">
if (typeof linkUp_typeCzech === 'function') {
  linkUp_typeCzech();
}
```

Because JavaScript does not completely hoist classes there is no example #104.

## The Penalty

There is a time penalty for using TypeCzech on a function many times. For a complicated check, like the above aLottery(), a loop of 100,000 calls will add a noticable 10 seconds to execution time. There is virtually no difference in test runs between TypeCzech
code that is turned off and TypeCzech code that has been removed.

### [Type Signatures](./read-mes/type-signatures.md)

Checking parameter type signtures.

### [Empty Signatures](./read-mes/empty-signatures.md)

Checking parameter empty signtures.

### [JSFiddle - 75 Page Live Online Editable Tutorial](https://jsfiddle.net/steen_hansen/1Lshcept/?Example-Contents)

All the examples run on JsFiddle. Note that the JsFiddle console will not run small embedded "copy and paste green code examples".

### [Local Filesystem - 75 Page Local Editable Tutorial](./example-snippets/example-contents.html)

All the examples on local browser from the local filesystem.

### [16 Simple How To Snippets](./read-mes/simple-howto.md)

Getting started examples.

### [TypeCzech API](./read-mes/api-list.md)

The public functions that check function parameter types.

### [Node.js and PHP Examples](./read-mes/run-examples.md)

### [Browser and Node.js Tests](./read-mes/test-suites.md)

### [Recommended Techniques](./read-mes/recommended-techniques.md)

### [Production TypeCzech](./read-mes/production-type-czech.md)

### [FAQ](./read-mes/faq-answers.md)

### [Dependencies](./read-mes/the-dependencies.md)

### [Run Tests](./read-mes/the-tests.md)

### [Compile New Versions](./read-mes/compile-code.md)


### Created by

[Steen Hansen](https://github.com/steenhansen)

&copy; 2024 Steen Hansen
