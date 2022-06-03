




## API
  -  [A check_assert()](#A)
  -  [B check_buildSnapshot() & check_mutatedSnapshot()](#B)
  -  [C checkParam_empty()](#C)
  -  [D checkParam_emptyEither()](#D)
  -  [E checkParam_emptyExtra()](#E)
  -  [F checkArgs_emptyEach()](#F)
  -  [G check_interface()](#G)
  -  [H checkParam_type()](#H)
  -  [I checkParam_typeEither()](#I)
  -  [J checkParam_typeExtra()](#J)
  -  [K checkArgs_typeEach()](#K)
  -  [L countFails()](#L) 
  -  [M countTally()](#M) 
  -  [N enableTests()](#N) 
  -  [O disableTests()](#O) 
  -  [P isActive()](#P) 
  -  [Q linkUp()](#Q)
  -  [R typeFinal()](#R)
  -  [S typeIsA()](#S) 
  -  [T typeProtos()](#T)

#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Note that function calls that have names that start with check_ are usually placed within PRE and POST checking functions as their error messages are automatically logged in the console or thrown as exceptions.

### A check_assert(the_error, err_location, err_variable, err_explanation)<a name="A"></a>

  This function is nearly always placed inside a promise chain, without PRE_check() and POST_check() functions being present.
  Below, if check_error is an empty string then nothing happens. Otherwise the error 
  is funneled through TypeCzech so as to use halting exceptions or informing console.logs for
  error delivery. Basically an 'assert', but it must be guarded with isActive() for production
  when TypeCzech is not loaded. The last, fourth parameter, is only used when the first parameter is not a TypeCzech error.
```
type_czech = TypeCzech('THROW-EXCEPTIONS')
if (type_czech.isActive()) {
  tested_value = new Date('1999-10-10')
  check_error=type_czech.checkParam_typeEither(tested_value, ['number','string'])
  error_location = 'not-used'
  expected_outcome = 'expected tested_value to be a number or a string'
  type_czech.check_assert(check_error, error_location, tested_value, expected_outcome)
}

>>Uncaught Error: 
>>         MESSAGE The value '1999-10-10T00:00:00.000Z', which is a 'date', is not a 'number', The value '1999-10-10T00:00:00.000Z', which is a 'date', is not a 'string' 
>>         CHECKER check_assert()
>>     ACTUAL TYPE 'date'
>>          VALUES 1999-10-10T00:00:00.000Z
>>       EXPECTED expected tested_value to be a number or a string
>>          ORIGIN not-used
```

Here an check_assert() is placed inside a then clause of a promise because linkUp() does not work with
promises. Program flow will interupted because the below response is incorrect, to
fix use {country:'string'}.
```
type_czech = TypeCzech('THROW-EXCEPTIONS')
your_ip = 'https://get.geojs.io/v1/ip/country.json'
fetch(your_ip)
  .then(response => response.json())
  .then(the_response => {
  if (type_czech.isActive()) {
    type_error = type_czech.checkParam_typeExtra(the_response, {country:'number'}) // country is a string
    type_czech.check_assert(type_error, 'Error - some url', the_response)
  }
})

>>Uncaught (in promise) Error: 
>>         MESSAGE Property 'country' is indicated to be a 'number', but is inaccurately a 'string' : CA 
>>         CHECKER check_assert()
>>     ACTUAL TYPE 'object'
>>          VALUES {country:"CA",country_3:"CAN",ip:"69.172.166.89",name:"Canada"}
>>          ORIGIN Error - some url
```

  [check_assert() examples](./public/check_assert.md)

### B check_buildSnapshot(function_name, variable_name, the_variable) & &nbsp;&nbsp;&nbsp;check_mutatedSnapshot(function_name, variable_name)<a name="B"></a>

  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested. The idea is to build a snapshot of a mutable array or object parameter before the tested function gets called, as in PRE_check_aCollection() below. And then, verify that the array or object has not been mutated after the tested function returns, as in POST_check_aCollection() below.

```
function PRE_check_aCollection(a_collection){
  return type_czech.check_buildSnapshot('PRE_check_aCollection', 'a_collection', a_collection)
}

function POST_check_aCollection(){
  return type_czech.check_mutatedSnapshot('PRE_check_aCollection', 'a_collection')
}

type_czech = TypeCzech('LOG-ERRORS')

aCollection = type_czech.linkUp(aCollection, PRE_check_aCollection, POST_check_aCollection) 

function aCollection(a_collection){
  if (a_collection.length ===4)
    a_collection.push(5)
}

aCollection([1,2,3]) // pass

aCollection([1,2,3,4]) // POST fail, a_collection changed value in aCollection()
```

  [check_buildSnapshot() & check_mutatedSnapshot() examples](./public/check_buildSnapshot.md)


### C checkParam_empty(a_variable, empty_signature) <a name="C"></a>

  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Outputs an error message if a specified function parameter is empty. Null, 
  undefined, NaN, an empty string, elementless array, propertyless object, 
  invalid date, or a blank regular expression are all considered empty.
```
function PRE_check_notEmpty(a_variable){
  return type_czech.checkParam_empty(a_variable, 'EMPTY-ERROR')
}

function POST_check_notEmpty(the_result){
  return type_czech.checkParam_empty(the_result, 'EMPTY-ERROR')
}

type_czech = TypeCzech('LOG-ERRORS')

notEmpty = type_czech.linkUp(notEmpty, PRE_check_notEmpty, POST_check_notEmpty) 

function notEmpty(a_variable){
  if (Array.isArray(a_variable))
    a_variable.pop()
  return a_variable
}

notEmpty(1) // pass

notEmpty({})  // PRE POST fail - before parameter and after result both empty 
notEmpty([1]) // POST fail - empty result
```
  [checkParam_empty() examples](./public/checkParam_empty.md)


### D checkParam_emptyEither(a_variable, empty_signatures) <a name="D"></a>

  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Checks multiple empty signatures and outputs an error message if no signatures match.
```
function PRE_check_someElements(first_array, second_array){
  first_not_empty = [ 'EMPTY-ERROR', 'EMPTY-OK' ]
  second_not_empty = [ 'EMPTY-OK', 'EMPTY-ERROR' ]
  empty_choices = [first_not_empty, second_not_empty]
  return type_czech.checkParam_emptyEither([first_array, second_array], empty_choices)
}

type_czech = TypeCzech('LOG-ERRORS')

someElements = type_czech.linkUp(someElements, PRE_check_someElements) 

function someElements(first_array, second_array){ }

someElements([1], [2]) // pass
someElements([], [2])  // pass
someElements([1], [])  // pass

someElements([], []) // fail - matches neither signature
```

  [checkParam_emptyEither() examples](./public/checkParam_emptyEither.md)



### E checkParam_emptyExtra(a_variable, empty_signature) <a name="E"></a>

  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Only checks single objects and individual arrays for emptiness.
  Specified elements or properties are checked for being empty, un-specified
  elements and properites are ignored whether they are empty or not.
```
function PRE_check_extraElements(an_object){
  return type_czech.checkParam_emptyExtra(an_object, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')

extraElements = type_czech.linkUp(extraElements, PRE_check_extraElements) 

function extraElements(an_array){ }

extraElements([11, 'parka'])         // pass  
extraElements([22, 'snow', false])   // pass
extraElements([33, 'santa', {}, []]) // pass

extraElements([44, '']) // fail - 2nd parameter is empty
```

  [checkParam_emptyExtra() examples](./public/checkParam_emptyExtra.md)


### F checkArgs_emptyEach(arguments, empty_signature)<a name="F"></a>
  Generally used inside PRE_check() functions that have been linked to 
  a function to be tested. Outputs an error message if any function parameter is empty.

```
function PRE_check_haveValues(){
  return type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
}

type_czech = TypeCzech('LOG-ERRORS')

haveValues = type_czech.linkUp(haveValues, PRE_check_haveValues) 

function haveValues(){ }

haveValues(1)                                      // pass
haveValues(1, true, 'red', new Date('1999-12-12')) // pass

haveValues('', [], {}) // fail - empty values
```
  [checkArgs_emptyEach() examples](./public/checkArgs_emptyEach.md)



### G check_interface(a_variable)<a name="G"></a>
  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested. Checks a class or object for wanted properties. Not a Java style interface of only functions.

```
function PRE_check_wantedProperties(an_object){
  return type_czech.check_interface(an_object, {my_func: 'function', my_number: 'number'})
}

type_czech = TypeCzech('LOG-ERRORS')

wantedProperties = type_czech.linkUp(wantedProperties, PRE_check_wantedProperties) 

function wantedProperties(an_object){ }

wantedProperties({my_func: x=>x, my_number: 987}) // pass

wantedProperties({my_func: 'not-a-function', my_number: 987})               // fail - my_func is a string
wantedProperties({my_func: x=>x, my_number: 'not-a-number'})                // fail - my_number is a string
wantedProperties({my_func: x=>x, my_number:{recursive:{wrapped:'nested'}}}) // fail - try checkParam_type()
```


  [check_interface() examples](./public/check_interface.md)

### H checkParam_type(a_parameter, type_signature) <a name="H"></a>
  Used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested. Outputs an error message if a tested function's parameters do not match the type signature.
  Returning an empty string or undefined signifies type compliance.

```
function PRE_check_oneString(an_object){
  return type_czech.checkParam_type(an_object, {a_string: 'string'})
}

type_czech = TypeCzech('LOG-ERRORS')

function POST_check_oneString(result){
  return type_czech.checkParam_type(result, ['number', 'number'])
}

oneString = type_czech.linkUp(oneString, PRE_check_oneString, POST_check_oneString) 

function oneString(an_object){
  if (an_object.a_string){
    return [(an_object.a_string).length, (an_object.a_string).length]
  } else {
    return an_object
  }
}

oneString({a_string: 'abcdef'}) // pass - [6,6]

oneString(12)  // PRE POST fail - number not an object, object not an array
```
  [checkParam_type() examples](./public/checkParam_type.md)





### I checkParam_typeEither(a_variable, type_signatures)<a name="I"></a>
  Used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.

  Checks multiple type signatures and outputs an error message if no signatures match.
```
function PRE_check_eitherObject(somebody){
  first_last_sig = {first: 'string', last: 'string'}
  first_age_sig = {first: 'string',  age: 'number'}
  first_birth_sig = {first: 'string', birth: 'date'}
  possible_signatures = [first_last_sig, first_age_sig, first_birth_sig]
  return type_czech.checkParam_typeEither(somebody, possible_signatures)
}

type_czech = TypeCzech('LOG-ERRORS')

eitherObject = type_czech.linkUp(eitherObject, PRE_check_eitherObject) 

function eitherObject(somebody){ }

eitherObject( {first: 'Kanye', last: 'West'})                         // pass - first_last_sig
eitherObject( {first: 'Albert', age: 105})                            // pass - first_age_sig
eitherObject( {first: 'King George', birth: new Date('1893-12-12') }) // pass - first_birth_sig

eitherObject( {first: 'Bob', middle: 'Bob'}) // fail - has unknown middle
```
  [checkParam_typeEither() examples](./public/checkParam_typeEither.md)





### J checkParam_typeExtra(a_variable, type_signature)<a name="J"></a>
  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Only checks single objects and individual arrays for types.
  Specified elements or properties are checked for type, un-specified
  elements and properites are ignored.
```  
function PRE_check_extraParams(car_object){
  return type_czech.checkParam_typeExtra(car_object, {make: 'string', model: 'string'})
}

type_czech = TypeCzech('LOG-ERRORS')

extraParams = type_czech.linkUp(extraParams, PRE_check_extraParams) 

function extraParams(car_object){ }

extraParams({make: 'Toyota', model: 'Camry'})                           // pass
extraParams({make: 'Toyota', model: 'Camry', color: 'red', year: 2014}) // pass

extraParams({make: 'Ford'}) // fail - no model 
```
  [checkParam_typeExtra() examples](./public/checkParam_typeExtra.md)


        



### K checkArgs_typeEach(arguments, type_signature)<a name="K"></a>
  Generally used inside PRE_check() functions that have been linked to 
  a function to be tested. Outputs an error message if any function parameter does not match the type.
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_someNumbers(){
  return type_czech.checkArgs_typeEach(arguments, 'number')
}

someNumbers = type_czech.linkUp(someNumbers, PRE_check_someNumbers) 

function someNumbers(){ }

someNumbers(1)             // pass
someNumbers(1, 2, 3, 4, 5) // pass

someNumbers(1, 'two', 3) // fail - 'two' is not a number
```
  [checkArgs_typeEach() examples](./public/checkArgs_typeEach.md)

### L countFails()<a name="L"></a>
 
  Get number of failed check function calls, both PRE_check() and POST_check().
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_anArray(an_array){
  return type_czech.checkParam_type(an_array, 'array')
}

anArray = type_czech.linkUp(anArray, PRE_check_anArray) 

function anArray(){ }

anArray([])             // pass 3
anArray([1,2,3])        // pass 1
anArray([ [], [], [] ]) // pass 2

anArray('a-string')     // fail 1 - string not array
anArray({an_object:[]}) // fail 2 - object not array

type_czech.countFails() // 2
```
 
### M countTally()<a name="M"></a>

  Get number of total check function calls, both PRE_check() and POST_check().
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_anObject(an_object){
  return type_czech.checkParam_type(an_object, 'object')
}

anObject = type_czech.linkUp(anObject, PRE_check_anObject) 

function anObject(){ }

anObject({ first_obj:{}, second_obj:{}, third_obj:{} }) // pass 1
anObject({a_number:14})                                 // pass 2
anObject({})                                            // pass 3

anObject([99])  // fail 1 - array not object
anObject(false) // fail 2 - boolean not object

type_czech.countTally()  // 5
```







### N enableTests()<a name="N"></a>
 
  Start checking of functions after disabling them. Cannot enable checking
  from a non-active TypeCzech instance, started from TypeCzech() or TypeCzech('NO-ERROR-MESSAGES')
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_oneUppercase(a_word){
  an_uppercase = new RegExp(/[A-Z]+/)
  if (!a_word.match(an_uppercase))
    return `no uppercase in - ${a_word}`
}

oneUppercase = type_czech.linkUp(oneUppercase, PRE_check_oneUppercase) 

function oneUppercase(){ }

type_czech.disableTests()

oneUppercase('Cat In the Hat')     // not checked as currently disabled
oneUppercase('green eggs and ham') // not checked as currently disabled

type_czech.enableTests()

oneUppercase('push me pull you') // fail - no uppercase character
```

### O disableTests()<a name="O"></a>
 
  Stop checking of functions.
```
type_czech = TypeCzech('CONSOLE-COUNT', 'LOG-ERRORS')

function PRE_check_isRoman(roman_numeral){
  const roman_numbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  if (!roman_numbers.includes(roman_numeral))
    return `Ain't Roman - ${roman_numeral}`
}

isRoman = type_czech.linkUp(isRoman, PRE_check_isRoman) 

function isRoman(){}

isRoman('IX') // 1. pass

isRoman('IIII') // 2. fail - not in array

type_czech.disableTests()

isRoman('1177 BC') // not checked and not counted as currently disabled
```

### P isActive()<a name="P"></a>

  Returns true if TypeCzech is checking errors. This returns false if TypeCzech was not loaded in Node.js or the browser. Can turn off with disableTests().

```
type_czech = TypeCzech('LOG-ERRORS')

type_czech.isActive() // true

type_czech.disableTests()

type_czech.isActive() // false

type_czech.enableTests()

type_czech.isActive() // true
```

### Q linkUp(tested_func, before_checking_func, after_checking_func)<a name="Q"></a>
  Link functions, classes, closures, IIFEs, and Prototypes to parameter and result checking functions.
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_oneString(a_string){
  return type_czech.checkParam_type(a_string, 'string')
}

function POST_check_oneString(result){
  return type_czech.checkParam_type(result, 'number')
}

oneString = type_czech.linkUp(oneString, PRE_check_oneString, POST_check_oneString) 

function oneString(a_string){
  return a_string.length
}

oneString('saul-good') // pass

oneString(12)  // PRE and POST fail - not strings but numbers
```    
  [linkUp() examples](./public/linkUp.md)
   



### R typeFinal(a_variable)<a name="R"></a>


  Returns the last inherited prototype or classname of its lineage.
```
type_czech = TypeCzech('LOG-ERRORS')

class First { constructor() { } }
class Last extends First { constructor() { super() } }
a_last = new Last()

type_czech.typeFinal(a_last)  // Last
```
  
  [typeFinal() examples](./public/typeFinal.md)   

### S typeIsA(a_variable, variable_type)<a name="S"></a>

  Returns true if first parameter variable is of the second type.
```
type_czech = TypeCzech('LOG-ERRORS')

type_czech.typeIsA(document, "HTMLDocument") // true
type_czech.typeIsA(document, "Object")       // true
```
  [typeIsA() examples](./public/typeIsA.md)  

### T typeProtos(a_variable)<a name="T"></a>

  Returns the prototype lineage an objects or class.

```
type_czech = TypeCzech('THROW-EXCEPTIONS')

type_czech.typeProtos(document) // ["HTMLDocument", ... "Object" ]
```

  [typeProtos() examples](./public/typeProtos.md)  

&copy; 2022 Steen Hansen


