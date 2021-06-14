

  
  


# TypeCzech

  
This repository is a JavaScript copy of [clojure.spec](https://clojure.org/about/spec) that got started when I was looking at JavaScript [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). 
The TypeCzech library can check function parameters by value, type, as well as with emptiness and valuelessness. 
Function return signatures can also be validated against a type shape.
The library is pure JavaScript without any dependencies and can easily be de-coupled for production.

To load the TypeCzech library and console log checking errors

    type_czech = TypeCzech('LOG-ERRORS')

To load the TypeCzech library and throw exceptions on checking errors

    type_czech = TypeCzech('THROW-EXCEPTIONS')

To load the TypeCzech library but do nothing in production code

    type_czech = TypeCzech()

The function that links a testing_function() to your_function() is TypeCzech.precedeCheck()

    your_function = TypeCzech.precedeCheck(your_function, testing_function)

Return '', a blank string, in the testing_function() to indicate no errors found.
Any text returned will be considered an error, and acted upon, with a console log or an exception.
Parameters are not altered by checks.

    function testing_function(/* arguments */){
      if (!error_found) {
        return ''
      }
      return 'the-error-message'
    }

To verify parameter types use the type_czech.typeVerify(arguments, expected_type) being careful in the use of arrays:

    function testing_function(one_string){
      return type_czech.typeVerify(arguments, 'string')
    }

    function testing_function(one_string, two_string, three_string){
      return type_czech.typeVerify(arguments, ['string'])
    }

    function testing_function(one_string, two_number, three_boolean){
      return type_czech.typeVerify(arguments, ['string', 'number', 'boolean'])
    }

    function testing_function(array_of_strings, array_of_numbers, array_of_boolean){
      return type_czech.typeVerify(arguments, [ ['string'], ['number'], ['boolean'] ])
    }

    function testing_function({str:'bob', num:17, bol:true}){
      return type_czech.typeVerify(arguments, {str:'string', num:'number', bol:'boolean'})
    }

## Samples

### Check by value for a positive number:

    type_czech = TypeCzech('LOG-ERRORS')                  // runnable in console

    posNumber = type_czech.precedeCheck(posNumber, CHECK_POSITIVE) 

    function posNumber(a_number){
      console.log('My positive number', a_number)
    }

    function CHECK_POSITIVE(a_number){
        if (a_number<1) return `Error, ${a_number} is not positive`
        return ''
    }

    posNumber(1)   // My positive number 1
    posNumber(-4)  // Error, -4 is not positive
                   // My positive number -4


### Check by RegExp for a sentence:

    type_czech = TypeCzech('THROW-EXCEPTIONS')            // runnable in console
      
    function CHECKING_ROUTINE(a_sentence){ 
      if (!typeof a_sentence === 'string') return 'not a string'
      capital_then_ending_period = new RegExp(/^[A-Z].*\.$/)
      is_sentence = a_sentence.match(capital_then_ending_period)
      if (is_sentence) return ''
      return `a bad sentence found : ${a_sentence}`
    }
      
    your_routine = type_czech.precedeCheck(your_routine, CHECKING_ROUTINE)
      
    function your_routine(a_sentence){
      console.log('Good upper case sentence: ', a_sentence.toUpperCase())
    }
        
    your_routine('Good sentence, starts with uppercase and ends with period.')
    your_routine('bad sentence does not start with uppercase; no period')

### Check for sorted parameters
    type_czech = TypeCzech('LOG-ERRORS')                  // runnable in console
      
    function CHECKING_ROUTINE(/* arguments */){ 
      increasing_positives = [...arguments]
      largest = -1;
      for (const an_integer of increasing_positives) {
        if (an_integer < largest) 
          return 'This array is not sorted : ' + increasing_positives.join()
        largest = an_integer
      }
      return ''
    }
      
    your_routine = type_czech.precedeCheck(your_routine, CHECKING_ROUTINE)
      
    function your_routine(/* arguments */){
      increasing_array = [...arguments]
      array_str = increasing_array.join();
      console.log('increasing array: ', array_str)
    }
        
    your_routine(10,13,15,22,33,44,1000)
    your_routine(10,11,12,13,5,4)       //This array is not sorted
    your_routine(12,23,34,45,56,67)


### Check by type for a string:

    type_czech = TypeCzech('THROW-EXCEPTIONS')            // runnable in console

    aString = type_czech.precedeCheck(aString, STRING_CHECK) 

    function aString(a_string){
      console.log('My string', a_string)
    }

    function STRING_CHECK(){
       return type_czech.typeVerify(arguments, 'string')
    }

    aString('a-string')  // My string a-string
    aString(99)          // Uncaught TypeCzech - aString() - The variable '99',
                         // which is a 'number', is not a 'string'
                         // typeVerify(arguments, expected_types)
                         // ACTUAL VALUE 99
                         // EXPECTED TYPE 'string'

### Check parameter has a value:
    type_czech = TypeCzech('LOG-ERRORS')                  // runnable in console

    hasValue = type_czech.precedeCheck(hasValue, HAS_VALUE) 

    function hasValue(a_parameter){
      console.log('empty check', a_parameter)
    }

    function HAS_VALUE(){
       return type_czech.emptyVerify(arguments, 'EMPTY-ER')
    }

    hasValue([1]) 
    hasValue([])          // Error
    hasValue('a-string')
    hasValue('')          // Error
    hasValue({a:1})
    hasValue({})          // Error

### Check function returns only an array of array of number:
    type_czech = TypeCzech('LOG-ERRORS')                  // runnable in console

    onlyArrayArrays = type_czech.precedeCheck(onlyArrayArrays, ONLY_ARRAY_ARRAYS) 

    function onlyArrayArrays(an_array){
      return an_array
    }

    function ONLY_ARRAY_ARRAYS(){
       type_czech.setReturnType('onlyArrayArrays', [['number']])
    }

    console.log(onlyArrayArrays([ [1], [2,2], [3,3,4] ]))      
    console.log(onlyArrayArrays('an-error'))  
                     // The function 'onlyArrayArrays' is improperly returning result type of 'an-error', 
                     //                   Instead of the expected type of [['number']]. 
                     //                   'an-error'

### Checking Object for Interface
    type_czech = TypeCzech('THROW-EXCEPTIONS')            // runnable in console

    function INTERFACE_LOOK(an_object){ 
      matching_interface = {methodCall:'function', my_int:'number'}
      interface_error = type_czech.hasInterface(an_object, matching_interface)
      return interface_error
    }

    your_routine = type_czech.precedeCheck(your_routine, INTERFACE_LOOK)

    function loggingMethod(some_string){ 
      console.log(some_string)
    }

    function your_routine(an_object){
      an_object.methodCall('some-string')
    }
    
    pass_object = {methodCall:loggingMethod, my_int:12, my_string:'not-in-interface'}
    your_routine(pass_object)

    fail_object = {methodCall:loggingMethod,            my_string:'not-in-interface'}
    your_routine(fail_object)           // my_int missing

## Turn Off Checking for Production

### Turning off via undefined checking function:
    if (typeof TypeCzech === 'function')                  // runnable in console
      type_czech = TypeCzech('LOG-ERRORS')
    else
      type_czech = { precedeCheck : do_nothing => do_nothing }
    CHECK_POSITIVE = (typeof CHECK_POSITIVE === 'undefined') ? undefined : CHECK_POSITIVE

    posNumber = type_czech.precedeCheck(posNumber, CHECK_POSITIVE) 
    function posNumber(a_number){
      console.log('My positive number', a_number)
    }
    // function CHECK_POSITIVE(a_number){
    //   if (a_number<1) return `Error, ${a_number} is not positive`
    //   return ''
    // }
    posNumber(1)              // My positive number 1
    posNumber('not-checked')  // My positive number not-checked

### Turning off via no library:
    TypeCzech = 'not included in this page'     // runnable in EMTPY NEW console

    if (typeof TypeCzech === 'function')
      type_czech = TypeCzech('LOG-ERRORS')
    else
      type_czech = { precedeCheck : do_nothing => do_nothing }
    CHECK_POSITIVE = (typeof CHECK_POSITIVE === 'undefined') ? undefined : CHECK_POSITIVE

    posNumber = type_czech.precedeCheck(posNumber, CHECK_POSITIVE) 
    function posNumber(a_number){
      console.log('My positive number', a_number)
    }
    function CHECK_POSITIVE(a_number){
      if (a_number<1) return `Error, ${a_number} is not positive`
        return ''
    }
    posNumber(1)              // My positive number 1
    posNumber('not-checked')  // My positive number not-checked

### Turning off via no choice TypeCzech():
    if (typeof TypeCzech === 'function')                  // runnable in console
      type_czech = TypeCzech()
    else
      type_czech = { precedeCheck : do_nothing => do_nothing }
    CHECK_POSITIVE = (typeof CHECK_POSITIVE === 'undefined') ? undefined : CHECK_POSITIVE

    posNumber = type_czech.precedeCheck(posNumber, CHECK_POSITIVE) 
    function posNumber(a_number){
      console.log('My positive number', a_number)
    }
    function CHECK_POSITIVE(a_number){
      if (a_number<1) return `Error, ${a_number} is not positive`
        return ''
    }
    posNumber(1)              // My positive number 1
    posNumber('not-checked')  // My positive number not-checked

## A Flurry of Different Checks in One Function
    if (typeof TypeCzech === 'function')                  // runnable in console
      type_czech = TypeCzech('LOG-ERRORS')
    else
      type_czech = { precedeCheck : do_nothing => do_nothing }
    MUST_BE_ELVIS = (typeof MUST_BE_ELVIS === 'undefined') ? undefined : MUST_BE_ELVIS
    must_be_elvis = type_czech.precedeCheck(must_be_elvis, MUST_BE_ELVIS) 

    function must_be_elvis(elvis_object){
      return elvis_object
    }

    function MUST_BE_ELVIS(an_object){
       type_czech.setReturnType('must_be_elvis', {the_name:'string'})           // Return-Check

       not_the_name_str = type_czech.typeVerify(arguments, {the_name:'string'}) // Type-Check  
       if (not_the_name_str) return not_the_name_str

       not_empty_err = type_czech.emptyVerify(arguments, {the_name:'EMPTY-ER'}) // Empty-Check 
       if (not_empty_err) return not_empty_err

       if (an_object.the_name[0]!=='E') return `Not-Start-Letter-E`             // Value-Check
    }
    must_be_elvis({the_name:'Elvis'})   // OK --> {the_name:"Elvis"}
    must_be_elvis({the_name:''})        // ERROR --> EMPTY-ER
    must_be_elvis({the_name:'Presley'}) // ERROR --> Not-Start-Letter-E
    must_be_elvis({the_name:17})  // ERROR --> 17-Not-String & Return-The-Name-17






## Self-Contained Live Fiddles
[01-funcs-check.html](https://jsfiddle.net/steen_hansen/9u54vsd2/4/) - 01 Validate Function Parameters by Value

[02-funcs-off.html](https://jsfiddle.net/steen_hansen/6zy89om1/6/) - 02 Turning TypeCzech Parameter checking Off

[03-return-check.html](https://jsfiddle.net/steen_hansen/m1tce27f/1/) - 03 Validate Function Return Values by Type

[04-closure-check.html](https://jsfiddle.net/steen_hansen/nve4d3ah/1/) - 04 Check Parameters in a Closure and its Functions

[05-closure-off.html](https://jsfiddle.net/steen_hansen/wrkvscqg/1/) - 05 Not Checking Functions In a Closure

[06-class-check.html](https://jsfiddle.net/steen_hansen/jxrdom62/1/) - 06 Check Parameters in a Class and its Methods

[07-class-off.html](https://jsfiddle.net/steen_hansen/abh0jkL1/1/) - 07 Not Checking Methods In a Class

[08-type-shape.html](https://jsfiddle.net/steen_hansen/3pv5qwx8/1/) - 08 Check Parameters by Type Shape

[09-typed-arrays.html](https://jsfiddle.net/steen_hansen/hrvucjzm/3/) - 09 Check Array Parameters with One Type

[10-empty-shape.html](https://jsfiddle.net/steen_hansen/r8L3mp40/1/) - 10 Check for Empty & Valueless Parameters

[11-type-extra.html](https://jsfiddle.net/steen_hansen/Lhwov8y9/1/) - 11 Type Check with Extra Optional Parameters 

[12-empty-extra.html](https://jsfiddle.net/steen_hansen/qp29Ljd1/1/) - 12 Empty & Valueless Check with Extra Optional Parameters 

[13-null-undef.html](https://jsfiddle.net/steen_hansen/og2sk4b9/1/) - 13 Null and Undefined Parameter Values

[14-count-checks.html](https://jsfiddle.net/steen_hansen/rh79bLwa/1/) - 14 Count Parameter Checking Function Calls

[15-flash-checks.html](https://jsfiddle.net/steen_hansen/1ref2ot7/1/) - 15 Flash on Parameter Checks

[16-throw-log.html](https://jsfiddle.net/steen_hansen/zkhfLw0u/1/) - 16 Throw, Log, or Ignore TypeCzech Parameter Checks

[17-short-types.html](https://jsfiddle.net/steen_hansen/bsw3yp5c/1/) - 17 TypeCzech Short Types

[18-short-emptys.html](https://jsfiddle.net/steen_hansen/063wLqfs/1/) - 18 TypeCzech Short Empty & Valueless Declarations

[19-one-of-type.html](https://jsfiddle.net/steen_hansen/x8h6dvj5/1/) - 19 Overloaded Function Parameter Type Checks

[20-one-of-empty.html](https://jsfiddle.net/steen_hansen/b7cfsz9y/1/) - 20 Overloaded Function Checks with Empty & Valueless Parameters

[21-one-of-extras.html](https://jsfiddle.net/steen_hansen/Lwn504es/1/) - 21 Overloaded Parameter Checks with Extra Optional Arguments

[22-has-interface.html](https://jsfiddle.net/steen_hansen/hjxekf63/1/) - 22 Check Interface of a Parameter

[23-on-off.html](https://jsfiddle.net/steen_hansen/ntrsobk3/2/) - 23 Count, Turn-On, and Turn-Off TypeCzech Parameter Validation



## Self-Contained Samples
[01-funcs-check.html](samples/01-funcs-check.html) - 01 Validate Function Parameters by Value

[02-funcs-off.html](samples/) - 02 Turning TypeCzech Parameter checking Off

[03-return-check.html](samples/03-return-check.html) - 03 Validate Function Return Values by Type

[04-closure-check.html](samples/04-closure-check.html) - 04 Check Parameters in a Closure and its Functions

[05-closure-off.html](samples/05-closure-off.html) - 05 Not Checking Functions In a Closure

[06-class-check.html](samples/06-class-check.html) - 06 Check Parameters in a Class and its Methods

[07-class-off.html](samples/07-class-off.html) - 07 Not Checking Methods In a Class

[08-type-shape.html](samples/08-type-shape.html) - 08 Check Parameters by Type Shape

[09-typed-arrays.html](samples/09-typed-arrays.html) - 09 Check Array Parameters with One Type

[10-empty-shape.html](samples/10-empty-shape.html) - 10 Check for Empty & Valueless Parameters

[11-type-extra.html](samples/11-type-extra.html) - 11 Type Check with Extra Optional Parameters 

[12-empty-extra.html](samples/12-empty-extra.html) - 12 Empty & Valueless Check with Extra Optional Parameters 

[13-null-undef.html](samples/13-null-undef.html) - 13 Null and Undefined Parameter Values

[14-count-checks.html](samples/14-count-checks.html) - 14 Count Parameter Checking Function Calls

[15-flash-checks.html](samples/15-flash-checks.html) - 15 Flash on Parameter Checks

[16-throw-log.html](samples/16-throw-log.html) - 16 Throw, Log, or Ignore TypeCzech Parameter Checks

[17-short-types.html](samples/17-short-types.html) - 17 TypeCzech Short Types

[18-short-emptys.html](samples/18-short-emptys.html) - 18 TypeCzech Short Empty & Valueless Declarations

[19-one-of-type.html](samples/19-one-of-type.html) - 19 Overloaded Function Parameter Type Checks

[20-one-of-empty.html](samples/20-one-of-empty.html) - 20 Overloaded Function Checks with Empty & Valueless Parameters

[21-one-of-extras.html](samples/21-one-of-extras.html) - 21 Overloaded Parameter Checks with Extra Optional Arguments

[22-has-interface.html](samples/22-has-interface.html) - 22 Check Interface of a Parameter

[23-on-off.html](samples/23-on-off.html) - 23 Count, Turn-On, and Turn-Off TypeCzech Parameter Validation



## Created by


[Steen Hansen](https://github.com/steenhansen)

