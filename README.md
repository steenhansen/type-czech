

  
  


# TypeCzech

  
This repository is a JavaScript copy of [clojure.spec](https://clojure.org/about/spec) that got started when I was looking at JavaScript [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). 
The TypeCzech library can check function parameters by value, type, as well as with emptiness and valuelessness. 
Function return signatures can also be validated against a type shape.
The library is pure JavaScript without any dependencies and can easily be de-coupled for production.
 




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
[01-funcs-check.html](https://jsfiddle.net/steen_hansen/9u54vsd2/2/)

[02-funcs-off.html](https://jsfiddle.net/steen_hansen/6zy89om1/4/)

[03-return-check.html](https://jsfiddle.net/steen_hansen/m1tce27f/)

[04-closure-check.html](https://jsfiddle.net/steen_hansen/nve4d3ah/)

[05-closure-off.html](https://jsfiddle.net/steen_hansen/wrkvscqg/)

[06-class-check.html](https://jsfiddle.net/steen_hansen/jxrdom62/)

[07-class-off.html](https://jsfiddle.net/steen_hansen/abh0jkL1/)

[08-type-shape.html](https://jsfiddle.net/steen_hansen/3pv5qwx8/)

[09-typed-arrays.html](https://jsfiddle.net/steen_hansen/hrvucjzm/1/)

[10-empty-shape.html](https://jsfiddle.net/steen_hansen/r8L3mp40/)

[11-type-extra.html](https://jsfiddle.net/steen_hansen/Lhwov8y9/)

[12-empty-extra.html](https://jsfiddle.net/steen_hansen/qp29Ljd1/)

[13-null-undef.html](https://jsfiddle.net/steen_hansen/og2sk4b9/)

[14-count-checks.html](https://jsfiddle.net/steen_hansen/rh79bLwa/)

[15-flash-checks.html](https://jsfiddle.net/steen_hansen/1ref2ot7/)

[16-throw-log.html](https://jsfiddle.net/steen_hansen/zkhfLw0u/)

[17-short-types.html](https://jsfiddle.net/steen_hansen/bsw3yp5c/)

[18-short-emptys.html](https://jsfiddle.net/steen_hansen/063wLqfs/)

[19-one-of-type.html](https://jsfiddle.net/steen_hansen/x8h6dvj5/)

[20-one-of-empty.html](https://jsfiddle.net/steen_hansen/b7cfsz9y/)

[21-one-of-extras.html](https://jsfiddle.net/steen_hansen/Lwn504es/)

[22-has-interface.html](https://jsfiddle.net/steen_hansen/hjxekf63/)

[23-on-off.html](https://jsfiddle.net/steen_hansen/ntrsobk3/)



## Created by


[Steen Hansen](https://github.com/steenhansen)

