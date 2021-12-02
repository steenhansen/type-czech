## checkParam_type() 

### Input Parameter Type Checks
  -  [1 Single Scalar Parameter Type Check](#single-scalar-parameter-type-check)
  -  [2 Single Array Parameter Type Check](#single-array-parameter-type-check)
  -  [3 Single Typed Array Parameter Type Check](#single-typed-array-parameter-type-check)
  -  [4 Single Object Parameter Type Check](#single-object-parameter-type-check)
  -  [5 Single Typed Object Parameter Type Check](#single-typed-object-parameter-type-check)
  -  [6 Multiple Parameter Type Check](#multiple-parameter-type-check)
  -  [7 HTML Type Parameter Check](#html-type-check)
  -  [8 Class Type Parameter Check](#class-type-check)
  -  [9 Class and Methods Type Parameter Type Check](#class-and-methtods-type-check) 

### Output Result Type Checks
  -  [10 Scalar Result Type Check](#scalar-result-type-check)
  -  [11 Array Result Type Check](#array-result-type-check)
  -  [12 Typed Array Result Type Check](#typed-array-result-type-check)
  -  [13 Multi Typed Array Result Type Check](#multi-typed-array-result-type-check)
  -  [14 Typed Object Result Type Check](#typed-object-result-type-check)


#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 1 Single Scalar Parameter Type Check<a name="single-scalar-parameter-type-check"></a>

```
function PRE_check_oneNumber(a_number){
  return type_czech.checkParam_type(a_number, 'number')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
oneNumber = type_czech.linkUp(oneNumber, PRE_check_oneNumber) 

function oneNumber(a_number){ }

oneNumber(12) // pass

oneNumber('a-string') // fail 'a-string' is not a number         
```

## 2 Single Array Parameter Type Check<a name="single-array-parameter-type-check"></a>
    
```
function PRE_check_oneArray(an_array){
  return type_czech.checkParam_type(an_array, 'array')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
oneArray = type_czech.linkUp(oneArray, PRE_check_oneArray) 

function oneArray(an_array){ }

oneArray([1, 'two', {c:3}, [] ]) // pass

oneArray({a:1}) // fail - object not an array
```
## 3 Single Typed Array Parameter Type Check<a name="single-typed-array-parameter-type-check"></a>
    
```
function PRE_check_oneArray(an_array){
  return type_czech.checkParam_type(an_array, ['number'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
oneArray = type_czech.linkUp(oneArray, PRE_check_oneArray) 

function oneArray(an_array){ }

oneArray([1, 2, 3, 4]) // pass

oneArray([false]) // fail - boolean not number     
```

## 4 Single Object Parameter Type Check<a name="single-object-parameter-type-check"></a>

```
function PRE_check_oneObject(an_object){
  return type_czech.checkParam_type(an_object, 'object')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
oneObject = type_czech.linkUp(oneObject, PRE_check_oneObject) 

function oneObject(an_object){ }

oneObject({})    // pass
oneObject({a:1}) // pass

oneObject([]) // fail - array not object
```



## 5 Single Typed Object Parameter Type Check<a name="single-typed-object-parameter-type-check"></a>

```
function PRE_check_oneObject(oneObject){
  return type_czech.checkParam_type(oneObject, {a:'string'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
oneObject = type_czech.linkUp(oneObject, PRE_check_oneObject) 

function oneObject(an_array){ }

oneObject({a:'aardvark'}) // pass

oneObject({a:14})         // fail 14 not a string
oneObject({b:'capybara'}) // fail missing key 'a'
```






## 6 Multiple Parameter Type Check<a name="multiple-parameter-type-check"></a>

```
function PRE_check_multiParams(an_array){
  the_signature = [ 'number', 'string', 'boolean' ]
  return type_czech.checkParam_type(an_array, the_signature)
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
multiParams = type_czech.linkUp(multiParams, PRE_check_multiParams) 

function multiParams(an_array){ }

multiParams([1, 'one', false]) // pass

multiParams([1999, 'Sharknado', {} ]) // fail - object not boolean
```

## 7 HTML Type Check<a name="html-type-check"></a>

```
function PRE_check_htmlButton(html_element){ 
  return type_czech.checkParam_type(html_element, 'HTMLButtonElement')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
htmlButton = type_czech.linkUp(htmlButton, PRE_check_htmlButton) 

function htmlButton(html_element){ }

htmlButton(document.createElement('button')) // pass

htmlButton('hi there')                    // fail - string not button
htmlButton(document.createElement('div')) // fail - div not button
```

## 8 Class Type Check<a name="class-type-check"></a>
Applies to closures, IIFEs, ClassFrees, Prototypess, and OLLOs.

```
function PRE_check_classOperate(a_last){
  return type_czech.checkParam_type(a_last, 'Last')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')

classOperate = type_czech.linkUp(classOperate, PRE_check_classOperate) 
function classOperate(a_last){
}

class First { constructor() { } }
class Last extends First { constructor() { super() } }

a_last = new Last()
a_first = new First()

classOperate(a_last)  // pass

classOperate(a_first)  // fail - is a 'First' not a 'Last'
```

## 9 Class and Methods Type Check<a name="class-and-methtods-type-check"></a>

```
class Person {
  constructor(person_name) { this.the_name = person_name}
  showInfo(born_year){ 
    if (born_year === 0) return 'a-zero-year-error'
    return [this.the_name, born_year] }
}

function PRE_check_Person(a_string){
  return type_czech.checkParam_type(a_string, 'string')  
}

function PRE_check_showInfo(a_year){
  return type_czech.checkParam_type(a_year, 'number')  
}

function POST_check_Person(the_result){
  if (the_result.the_name === 'Pol Pot')
    return 'Not Good Enough'
  return type_czech.checkParam_type(the_result, 'Person')
}

function POST_check_showInfo(an_array){
  return type_czech.checkParam_type(an_array, 'array') 
}

PRE_CLASS_Person = {Person:PRE_check_Person, showInfo:PRE_check_showInfo}
POST_CLASS_Person = {Person:POST_check_Person, showInfo:POST_check_showInfo}

type_czech = TypeCzech('THROW-EXCEPTIONS')

Person = type_czech.linkUp(Person, PRE_CLASS_Person, POST_CLASS_Person)

person_1 = new Person('Jonas Salk') // pass
person_1.showInfo(1952)             // pass

person_2 = new Person(1234) // PRE fail - expected a string

person_3 = new Person('Mad Max')
person_3.showInfo('error')  // PRE fail - expected a number

person_4 = new Person('Lady Gaga')
person_4.showInfo(0)  // POST fail - expected an array , not a string

person_5 = new Person('Pol Pot')  // POST fail - matched 'Pol Pot'
```


## 10 Scalar Result Type Check<a name="scalar-result-type-check"></a>

```
function POST_check_returnString(return_result){
  return type_czech.checkParam_type(return_result, 'string')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
returnString = type_czech.linkUp(returnString, undefined, POST_check_returnString) 

function returnString(return_result){
  return return_result
}

returnString('two') // pass

returnString(false) // fail - not a string         
```

## 11 Array Result Type Check<a name="array-result-type-check"></a>

```
function POST_check_anArray(an_array){
  return type_czech.checkParam_type(an_array, 'array')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
anArray = type_czech.linkUp(anArray, undefined, POST_check_anArray) 

function anArray(an_array){
  return an_array
}

anArray([1, 'two', {c:3}, [] ]) // pass

anArray({a:1}) // fail - object not array
```

## 12 Typed Array Result Type Check<a name="typed-array-result-type-check"></a>

```
function POST_check_booleanArray(an_array){
  return type_czech.checkParam_type(an_array, ['boolean'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
booleanArray = type_czech.linkUp(booleanArray, undefined, POST_check_booleanArray) 

function booleanArray(an_array){
  return an_array
}

booleanArray([true, false, true]) // pass

booleanArray([1, 0, 1]) // fail - array of numbers not booleans
```

## 13 Multi Typed Array Result Type Check<a name="multi-typed-array-result-type-check"></a>

```
function POST_check_numBoolStr(an_array){
  return type_czech.checkParam_type(an_array, ['number', 'boolean', 'string'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
numBoolStr = type_czech.linkUp(numBoolStr, undefined, POST_check_numBoolStr) 

function numBoolStr(an_array){
  return an_array
}

numBoolStr([1, false, 'three']) // pass

numBoolStr({}) // fail - object not an array of number,boolean,string
```

## 14 Typed Object Result Type Check<a name="typed-object-result-type-check"></a>

```
function POST_check_objectAbc(an_array){
  return type_czech.checkParam_type(an_array, {a:'number', b:'boolean', c:'string'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
objectAbc = type_czech.linkUp(objectAbc, undefined, POST_check_objectAbc) 

function objectAbc(an_array){
  return an_array
}

objectAbc({a:1, b:false, c:'three'}) // pass

objectAbc([]) // fail - array not object with a,b,c keys
```











&copy; 2021 Steen Hansen



