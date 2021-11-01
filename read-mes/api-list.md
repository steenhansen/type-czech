




## API
  -  [1 assert_check()](#assert-check)
  -  [2 check_buildSnapshot()](#check-build-snapshot)
  -  [3 check_empty()](#check-empty)
  -  [4 check_emptyEither()](#check-empty-either)
  -  [5 check_emptyExtra()](#check-empty-extra)
  -  [6 check_emptyVariadic()](#check-empty-variadic)
  -  [7 check_interface()](#check-interface)
  -  [8 check_mutatedSnapshot()](#check-mutated-snapshot)
  -  [9 check_type()](#check-type)
  -  [10 check_typeEither()](#check-type-either)
  -  [11 check_typeExtra()](#check-type-extra)
  -  [12 check_typeVariadic()](#check-type-variadic)
  -  [13 countFails()](#count-fails) 
  -  [14 countTally()](#count-tally) 
  -  [15 enableChecks()](#enable-checks) 
  -  [16 disableChecks()](#disable-checks) 
  -  [17 isActive()](#is-active) 
  -  [18 linkUp()](#link-up)
  -  [19 typeFinal()](#type-final)
  -  [20 typeIsA()](#type-is-a) 
  -  [21 typeProtos()](#type-protos)

### 1 assert_check(the_error, err_location, err_variable, err_explanation)<a name="assert-check"></a>

  If check_error is an empty string then nothing happens. Otherwise the error 
  is funneled through TypeCzech so as to use halting exceptions or informing console.logs for
  error delivery. Basically an 'assert', but it must be guarded with isActive() for production
  when TypeCzech is not loaded. 
```
type_czech = TypeCzech('THROW-EXCEPTIONS')
if (type_czech.isActive()) {
  tested_value = false
  check_error=type_czech.check_typeEither(tested_value, ['number','string'])
  error_location = 'the-test-location'
  expected_outcome = 'expected tested_value to be a number or a string'
  type_czech.assert_check(check_error, error_location, tested_value, expected_outcome)
}

// error as false is not a number or a boolean
```
  [assert_check() examples](./public/assert_check.md)

### 2 check_buildSnapshot(function_name, variable_name, the_variable)<a name="check-build-snapshot"></a> &
### 8 check_mutatedSnapshot(function_name, variable_name) <a name="check-mutated-snapshot"></a>
  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested. The idea is to build a snapshot of a mutable array or object parameter before the tested function gets called, as in PRE_check_aCollection() below. And then, verify that the array or object has not been mutated after the tested function returns, as in POST_check_aCollection() below.
```  
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_aCollection(a_collection){
  return type_czech.check_buildSnapshot('PRE_check_aCollection', 'a_collection', a_collection)
}

function POST_check_aCollection(){
  return type_czech.check_mutatedSnapshot('PRE_check_aCollection', 'a_collection')
}

aCollection = type_czech.linkUp(aCollection, PRE_check_aCollection, POST_check_aCollection) 

function aCollection(a_collection){
  if (a_collection.length ===4)
    a_collection.push(5)
}

aCollection([1,2,3])

aCollection([1,2,3,4]) // POST error
```

  [check_buildSnapshot() & check_mutatedSnapshot() examples](./public/check_buildSnapshot.md)


### 3 check_empty(a_variable, empty_signature) <a name="check-empty"></a>

  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Outputs an error message if a specified function parameter is empty. Null, 
  undefined, NaN, an empty string, elementless array, propertyless object, 
  invalid date, or a blank regular expression are all considered empty.
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_notEmpty(){
  return type_czech.check_empty(arguments, 'EMPTY-ERROR')
}

function POST_check_notEmpty(){
  return type_czech.check_empty(arguments, 'EMPTY-ERROR')
}

notEmpty = type_czech.linkUp(notEmpty, PRE_check_notEmpty, POST_check_notEmpty) 

function notEmpty(a_variable){
  if (Array.isArray(a_variable))
    a_variable.pop()
  return a_variable
}

notEmpty(1)
notEmpty({})   // PRE and POST error
notEmpty([1])  // POST error 
```
  [check_empty() examples](./public/check_empty.md)


### 4 check_emptyEither(a_variable, empty_signatures) <a name="check-empty-either"></a>

  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Checks multiple empty signatures and outputs an error message if no signatures match.
```
type_czech = TypeCzech('THROW-EXCEPTIONS')

function PRE_check_someElements(){
  first_not_empty = [ 'EMPTY-ERROR', 'EMPTY-OK' ]
  second_not_empty = [ 'EMPTY-OK', 'EMPTY-ERROR' ]
  empty_choices = [first_not_empty, second_not_empty]
  return type_czech.check_emptyEither(arguments, empty_choices)
}

someElements = type_czech.linkUp(someElements, PRE_check_someElements) 

function someElements(first_array, second_array){
}

someElements([1], [2])
someElements([], [2])
someElements([1], [])

someElements([], []) // PRE error
```

  [check_emptyEither() examples](./public/check_emptyEither.md)



### 5 check_emptyExtra(a_variable, empty_signature) <a name="check-empty-extra"></a>

  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Only checks single objects and individual arrays for emptiness.
  Specified elements or properties are checked for being empty, un-specified
  elements and properites are ignored whether they are empty or not.
```  
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_extraElements(){
  return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

extraElements = type_czech.linkUp(extraElements, PRE_check_extraElements) 

function extraElements(an_array){
}

extraElements([11, 'parka'])
extraElements([22, 'snow', false])
extraElements([33, 'santa', {}, []])

extraElements([44, '']) // PREerror
```

  [check_emptyExtra() examples](./public/check_emptyExtra.md)


### 6 check_emptyVariadic(arguments, empty_signature)<a name="check-empty-variadic"></a>
  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Outputs an error message if any function parameter is empty.
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_haveValues(){
  return type_czech.check_emptyVariadic(arguments, ['EMPTY-ERROR'])
}

haveValues = type_czech.linkUp(haveValues, PRE_check_haveValues) 

function haveValues(){
}

haveValues(1)
haveValues(1, true, 'red', new Date('1999-12-12'))

haveValues('', [], {}) // PRE error
```
  [check_emptyVariadic() examples](./public/check_emptyVariadic.md)



### 7 check_interface(a_variable)<a name="check-interface"></a>
  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Checks a class or object for wanted properties. Not a Java style interface of only functions.
```  
type_czech = TypeCzech('THROW-EXCEPTIONS')

function PRE_check_wantedProperties(){
  return type_czech.check_interface(arguments, {my_func: 'function', my_number: 'number'})
}

wantedProperties = type_czech.linkUp(wantedProperties, PRE_check_wantedProperties) 

function wantedProperties(an_object){
}

wantedProperties({my_func: x=>x, my_number: 987})

wantedProperties({my_func: 'not-a-function', my_number: 987}) // PRE error
wantedProperties({my_func: x=>x, my_number: 'not-a-number'})  // PRE error
```


  [check_interface() examples](./public/check_interface.md)

### 9 check_type(a_variable, type_signature) <a name="check-type"></a>
  Used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.

  Outputs an error message if a tested function's arguments, or a variable, does not match the type signature.
  An empty string signifies type compliance.
```
type_czech = TypeCzech('THROW-EXCEPTIONS')

function PRE_check_oneString(){
  return type_czech.check_type(arguments, {a_string: 'string'})
}

function PRE_check_also_will_work(object_with_string){
  return type_czech.check_type(object_with_string, {a_string: 'string'})
}

function POST_check_oneString(result){
  return type_czech.check_type(result, ['number', 'number'])
}

oneString = type_czech.linkUp(oneString, PRE_check_oneString, POST_check_oneString) 

function oneString(an_object){
  a_string = an_object.a_string
  return [a_string.length, a_string.length]
}

oneString({a_string: 'abcdef'})
oneString(12)  // PRE error         
```
  [check_type() examples](./public/check_type.md)





### 10 check_typeEither(a_variable, type_signatures)<a name="check-type-either"></a>
  Used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.

  Checks multiple type signatures and outputs an error message if no signatures match.
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_eitherObject(){
  first_last_sig = {first: 'string', last: 'string'}
  first_age_sig = {first: 'string',  age: 'number'}
  first_birth_sig = {first: 'string', birth: 'date'}
  possible_signatures = [first_last_sig, first_age_sig, first_birth_sig]
  return type_czech.check_typeEither(arguments, possible_signatures)
}

eitherObject = type_czech.linkUp(eitherObject, PRE_check_eitherObject) 

function eitherObject(somebody){
}

eitherObject( {first: 'Kanye', last: 'West'})
eitherObject( {first: 'Albert', age: 105})
eitherObject( {first: 'King George', birth: new Date('1893-12-12') })

eitherObject( {first: 'Bob', middle: 'Bob'}) // PRE error
```
  [check_typeEither() examples](./public/check_typeEither.md)





### 11 check_typeExtra(a_variable, type_signature)<a name="check-type-extra"></a>
  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Only checks single objects and individual arrays for types.
  Specified elements or properties are checked for type, un-specified
  elements and properites are ignored.
```  
type_czech = TypeCzech('THROW-EXCEPTIONS')

function PRE_check_extraParams(){
  return type_czech.check_typeExtra(arguments, {make: 'string', model: 'string'})
}

extraParams = type_czech.linkUp(extraParams, PRE_check_extraParams) 

function extraParams(car_object){
}

extraParams({make: 'Toyota', model: 'Camry'})
extraParams({make: 'Toyota', model: 'Camry', color: 'red', year: 2014})

extraParams({make: 'Toyota'}) // PRE error
```
  [check_typeExtra() examples](./public/check_typeExtra.md)


        



### 12 check_typeVariadic(arguments, type_signature)<a name="check-type-variadic"></a>
  Generally used inside both PRE_check() and POST_check() functions that have been linked to 
  a function to be tested.
  
  Outputs an error message if any function parameter does not match the type.
```
type_czech = TypeCzech('THROW-EXCEPTIONS')

function PRE_check_someNumbers(){
  return type_czech.check_typeVariadic(arguments, ['number'])
}

someNumbers = type_czech.linkUp(someNumbers, PRE_check_someNumbers) 

function someNumbers(){
}

someNumbers(1)
someNumbers(1, 2, 3, 4, 5)

someNumbers(1, 'two', 3) // PRE error
```
  [check_typeVariadic() examples](./public/check_typeVariadic.md)

### 13 countFails()<a name="count-fails"></a>
 
  Get number of failed check function calls, both PRE_check() and POST_check().
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_anArray(){
  return type_czech.check_type(arguments, 'array')
}

anArray = type_czech.linkUp(anArray, PRE_check_anArray) 

function anArray(){
}

anArray([1,2,3])
anArray('a-string') // error 1
anArray([ [], [], [] ])    
anArray({an_object:[]})  // error 2
anArray([]) 

console.log( 'Number Fails 2 : ', type_czech.countFails() )
```
 
### 14 countTally()<a name="count-tally"></a>

  Get number of total check function calls, both PRE_check() and POST_check().
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_anObject(){
  return type_czech.check_type(arguments, 'object')
}

anObject = type_czech.linkUp(anObject, PRE_check_anObject) 

function anObject(){
}

anObject({ first_obj:{}, second_obj:{}, third_obj:{} })    
anObject({a_number:14})
anObject({}) 
anObject([99]) // error 1
anObject(false) // error 2

console.log( 'Number Checks 5 : ', type_czech.countTally() )
```







### 15 enableChecks()<a name="enable-checks"></a>
 
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

function oneUppercase(){
}

type_czech.disableChecks()

oneUppercase('Cat In the Hat') 

oneUppercase('green eggs and ham') // not checked

type_czech.enableChecks()

oneUppercase('push me pull you') // PRE error
```

### 16 disableChecks()<a name="disable-checks"></a>
 
  Stop checking of functions.
```
type_czech = TypeCzech('CONSOLE-COUNT', 'LOG-ERRORS')

function PRE_check_isRoman(roman_numeral){
  const roman_numbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  if (!roman_numbers.includes(roman_numeral))
    return `Ain't Roman - ${roman_numeral}`
}

isRoman = type_czech.linkUp(isRoman, PRE_check_isRoman) 

function isRoman(){
}

isRoman('IX')
isRoman('IIII') // error

type_czech.disableChecks()

isRoman('1177 BC') // not checked
```

### 17 isActive()<a name="is-active"></a>

  Returns true if TypeCzech is checking errors. This returns false if TypeCzech was not loaded in Node.js or the browser. Can turn off with disableChecks().

```
type_czech = TypeCzech('THROW-EXCEPTIONS')

console.log( type_czech.isActive(), ' == true')

type_czech.disableChecks()
console.log( type_czech.isActive(), ' == false')

type_czech.enableChecks()
console.log( type_czech.isActive(), ' == true')
```

### 18 linkUp(tested_func, before_checking_func, after_checking_func)<a name="link-up"></a>
  Link functions, classes, closures, IIFEs, and Prototypes to parameter and result checking functions.
```
type_czech = TypeCzech('LOG-ERRORS')

function PRE_check_oneString(){
  return type_czech.check_type(arguments, 'string')
}

function POST_check_oneString(result){
  return type_czech.check_type(result, 'number')
}

oneString = type_czech.linkUp(oneString, PRE_check_oneString, POST_check_oneString) 

function oneString(a_string){
  return a_string.length
}

oneString('saul-good')
oneString(12)  // PRE and POST error
```    
  [linkUp() examples](./public/linkUp.md)
   



### 19 typeFinal(a_variable)<a name="type-final"></a>


  Returns the last inherited prototype or classname of its lineage.
```
type_czech = TypeCzech('THROW-EXCEPTIONS')

class First { constructor() { } }
class Last extends First { constructor() { super() } }
a_last = new Last()

type_czech.typeFinal(a_last)  // Last
```
  
  [typeFinal() examples](./public/typeFinal.md)   

### 20 typeIsA(a_variable, variable_type)<a name="type-is-a"></a>

  Returns true if first parameter variable is of the second type.
```
type_czech = TypeCzech('THROW-EXCEPTIONS')

type_czech.typeIsA(document, "HTMLDocument") // true
type_czech.typeIsA(document, "Object")       // true
```
  [typeIsA() examples](./public/typeIsA.md)  

### 21 typeProtos(a_variable)<a name="type-protos"></a>

  Returns the prototype lineage an objects or class.

```
type_czech = TypeCzech('THROW-EXCEPTIONS')

type_czech.typeProtos(document) // ["HTMLDocument", ... "Object" ]
```

  [typeProtos() examples](./public/typeProtos.md)  

&copy; 2021 Steen Hansen


