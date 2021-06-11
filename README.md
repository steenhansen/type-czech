

  
  


# TypeCzech

  
This repository is a JavaScript copy of [clojure.spec](https://clojure.org/about/spec) that got started when looking at JavaScript [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). 
The TypeCzech library can check function parameters by value, type, and emptiness/valuelessness. 
Function return signatures can also be validated against a single type shape.
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

### Check function returns only an array:
    type_czech = TypeCzech('LOG-ERRORS')
    onlyArrays = type_czech.precedeCheck(onlyArrays, RETURN_ARRAY) 
    function onlyArrays(an_array){
      return an_array
    }
    function RETURN_ARRAY(){
       type_czech.setReturnType('onlyArrays', 'array')
    }
    console.log(onlyArrays([1]))         // Array [ 1 ]
    console.log(onlyArrays('an-error'))  
                     // The function 'onlyArrays' is improperly returning result type of 'string', 
                                        Instead of the expected type of 'array'. 
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
      return elvis_object.the_name            // setReturnType() ==> Must return a 'string'
    }

    function MUST_BE_ELVIS(an_object){
       type_czech.setReturnType('must_be_elvis', 'string')

       not_the_name_str = type_czech.typeVerify(arguments, {the_name:'string'})
       if (not_the_name_str) return not_the_name_str

       not_empty_err = type_czech.emptyVerify(arguments, {the_name:'EMPTY-ER'})
       if (not_empty_err) return not_empty_err
       
       if (an_object.the_name[0]!=='E') return `Not-Start-E-Error`
    }

    must_be_elvis({the_name:'Elvis'})   // no error
    must_be_elvis({the_name:''})        // EMPTY-ER
    must_be_elvis({the_name:'Presley'}) // Not-Start-E-Error
    must_be_elvis({the_name:17})        // 17-Not-String-Err & Return-Not-String-Err


     




## Created by


[Steen Hansen](https://github.com/steenhansen)

