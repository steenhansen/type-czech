

  
  


# TypeCzech

  
This repository is a JavaScript copy of [clojure.spec](https://clojure.org/about/spec) that got started when I was looking at JavaScript [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). 
The TypeCzech library can check function parameters by value, type, as well as with emptiness and valuelessness. 
Function return signatures can also be validated against a type shape.
The library is pure JavaScript without any dependencies and can easily be de-coupled for production.

The function that links a testing_function() to your_function() is TypeCzech.precedeCheck().


    your_function = TypeCzech.precedeCheck(your_function, testing_function)
   


## Sample Fiddles
[01-funcs-check.html](https://jsfiddle.net/steen_hansen/9u54vsd2/2/)

  <ul>
    <li>Parameter Checks : checking parameters by value</li>
 [Return Checks : checking function return values by type 03-return-check.html](https://jsfiddle.net/steen_hansen/m1tce27f/)
    <li>Type Shapes : checking parameters by type shape</li>
    <li>Typed Array : checking arrays with a single type</li>
    <li>Empty Shapes : checking parameters by emptiness &amp; valuelessness</li>
    <li>Interface : checking objects for interfaces</li>       
  </ul>



## Samples

### Check by value for a positive number:

    type_czech = TypeCzech('LOG-ERRORS')
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

    type_czech = TypeCzech('THROW-EXCEPTIONS')
      
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
    type_czech = TypeCzech('LOG-ERRORS')
      
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

    type_czech = TypeCzech('THROW-EXCEPTIONS')
    aString = type_czech.precedeCheck(aString, STRING_CHECK) 
    function aString(a_string){
      console.log('My string', a_string)
    }
    function STRING_CHECK(){
       return type_czech.typeVerify(arguments, 'string')
    }
    aString('a-string')  // My string a-string
    aString(99)          // Uncaught TypeCzech - aString() - The variable '99',
                            which is a 'number', is not a 'string'
                            typeVerify(arguments, expected_types)
                             ACTUAL VALUE 99
                            EXPECTED TYPE 'string'

### Check parameter is not empty:
    type_czech = TypeCzech('LOG-ERRORS')
    notEmpty = type_czech.precedeCheck(notEmpty, NOT_EMPTY) 
    function notEmpty(a_parameter){
      console.log('empty check', a_parameter)
    }
    function NOT_EMPTY(){
       return type_czech.emptyVerify(arguments, 'EMPTY-ER')
    }
    notEmpty([1]) 
    notEmpty([])          // Error
    notEmpty('a-string')
    notEmpty('')          // Error
    notEmpty({a:1})
    notEmpty({})          // Error

### Check function returns only an array of array of number:
    type_czech = TypeCzech('LOG-ERRORS')
    onlyArrays = type_czech.precedeCheck(onlyArrays, RETURN_ARRAY) 
    function onlyArrays(an_array){
      return an_array
    }
    function RETURN_ARRAY(){
       type_czech.setReturnType('onlyArrays', [['number']])
    }
    console.log(onlyArrays([ [1], [2,2], [3,3,4] ]))      
    console.log(onlyArrays('an-error'))  
                     // The function 'onlyArrays' is improperly returning result type of 'an-error', 
                                        Instead of the expected type of [['number']]. 
                                        'an-error'

### Checking Object for Interface
    type_czech = TypeCzech('THROW-EXCEPTIONS')

    function YOUR_ROUTINE(an_object){ 
      matching_interface = {methodCall:'function', my_int:'number'}
      interface_error = type_czech.hasInterface(an_object, matching_interface)
      return interface_error
    }

    your_routine = type_czech.precedeCheck(your_routine, YOUR_ROUTINE)

    function loggingMethod(some_string){ 
      console.log(some_string)
    }

    function your_routine(an_object){
      an_object.methodCall('some-string')
    }
    
    pass_object = {methodCall:loggingMethod, my_int:12, my_string:'not-in-interface'}
    your_routine(pass_object)

    fail_object = {methodCall:loggingMethod,            my_string:'not-in-interface'}
    your_routine(fail_object)     // my_int missing

## Turn Off Checking for Production

### Turning off via undefined checking function:
    if (typeof TypeCzech === 'function')
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
    TypeCzech = 'not included in this page'
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
    if (typeof TypeCzech === 'function')
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

## All Checks Together
    if (typeof TypeCzech === 'function')
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






## Live Fiddles
[01-funcs-check.html](https://jsfiddle.net/steen_hansen/9u54vsd2/2/) - 01 Validate Function Parameters by Value

[02-funcs-off.html](https://jsfiddle.net/steen_hansen/6zy89om1/4/) - 02 Turning TypeCzech Parameter checking Off

[03-return-check.html](https://jsfiddle.net/steen_hansen/m1tce27f/) - 03 Validate Function Return Values by Type

[04-closure-check.html](https://jsfiddle.net/steen_hansen/nve4d3ah/) - 04 Check Parameters in a Closure and its Functions

[05-closure-off.html](https://jsfiddle.net/steen_hansen/wrkvscqg/) - 05 Not Checking Functions In a Closure

[06-class-check.html](https://jsfiddle.net/steen_hansen/jxrdom62/) - 06 Check Parameters in a Class and its Methods

[07-class-off.html](https://jsfiddle.net/steen_hansen/abh0jkL1/) - 07 Not Checking Methods In a Class

[08-type-shape.html](https://jsfiddle.net/steen_hansen/3pv5qwx8/) - 08 Check Parameters by Type Shape

[09-typed-arrays.html](https://jsfiddle.net/steen_hansen/hrvucjzm/1/) - 09 Check Array Parameters with One Type

[10-empty-shape.html](https://jsfiddle.net/steen_hansen/r8L3mp40/) - 10 Check for Empty & Valueless Parameters

[11-type-extra.html](https://jsfiddle.net/steen_hansen/Lhwov8y9/) - 11 Type Check with Extra Optional Parameters 

[12-empty-extra.html](https://jsfiddle.net/steen_hansen/qp29Ljd1/) - 12 Empty & Valueless Check with Extra Optional Parameters 

[13-null-undef.html](https://jsfiddle.net/steen_hansen/og2sk4b9/) - 13 Null and Undefined Parameter Values

[14-count-checks.html](https://jsfiddle.net/steen_hansen/rh79bLwa/) - 14 Count Parameter Checking Function Calls

[15-flash-checks.html](https://jsfiddle.net/steen_hansen/1ref2ot7/) - 15 Flash on Parameter Checks

[16-throw-log.html](https://jsfiddle.net/steen_hansen/zkhfLw0u/) - 16 Throw, Log, or Ignore TypeCzech Parameter Checks

[17-short-types.html](https://jsfiddle.net/steen_hansen/bsw3yp5c/) - 17 TypeCzech Short Types

[18-short-emptys.html](https://jsfiddle.net/steen_hansen/063wLqfs/) - 18 TypeCzech Short Empty & Valueless Declarations

[19-one-of-type.html](https://jsfiddle.net/steen_hansen/x8h6dvj5/) - 19 Overloaded Function Parameter Type Checks

[20-one-of-empty.html](https://jsfiddle.net/steen_hansen/b7cfsz9y/) - 20 Overloaded Function Checks with Empty & Valueless Parameters

[21-one-of-extras.html](https://jsfiddle.net/steen_hansen/Lwn504es/) - 21 Overloaded Parameter Checks with Extra Optional Arguments

[22-has-interface.html](https://jsfiddle.net/steen_hansen/hjxekf63/) - 22 Check Interface of a Parameter

[23-on-off.html](https://jsfiddle.net/steen_hansen/ntrsobk3/) - 23 Count, Turn-On, and Turn-Off TypeCzech Parameter Validation



## Created by


[Steen Hansen](https://github.com/steenhansen)

