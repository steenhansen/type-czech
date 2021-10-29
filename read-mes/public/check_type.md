## check_type() 

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

## 1 Single Scalar Parameter Type Check<a name="single-scalar-parameter-type-check"></a>
  
```
function PRE_check_oneNumber(){
  return type_czech.check_type(arguments, 'number')  // arguments version
}
```
```
function PRE_check_oneNumber(a_number){
  return type_czech.check_type(a_number, 'number')  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
oneNumber = type_czech.linkUp(oneNumber, PRE_check_oneNumber) 

function oneNumber(a_number){
}

oneNumber(12)  
oneNumber('a-string') // PRE error         
```

## 2 Single Array Parameter Type Check<a name="single-array-parameter-type-check"></a>
    
```
function PRE_check_oneArray(){
  return type_czech.check_type(arguments, 'array')  // arguments version
}
```
```
function PRE_check_oneArray(an_array){
  return type_czech.check_type(an_array, 'array')  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
oneArray = type_czech.linkUp(oneArray, PRE_check_oneArray) 

function oneArray(an_array){
}

oneArray([1, 'two', {a:1}, [] ])  
oneArray({a:1}) // PRE error     
```
## 3 Single Typed Array Parameter Type Check<a name="single-typed-array-parameter-type-check"></a>
    
```
function PRE_check_oneArray(){
  return type_czech.check_type(arguments, ['number'])  // arguments version
}
```
```
function PRE_check_oneArray(an_array){
  return type_czech.check_type(an_array, ['number'])  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
oneArray = type_czech.linkUp(oneArray, PRE_check_oneArray) 

function oneArray(an_array){
}

oneArray([1, 2, 3, 4])  
oneArray([false]) // PRE error     
```

## 4 Single Object Parameter Type Check<a name="single-object-parameter-type-check"></a>
```
function PRE_check_oneObject(){
  return type_czech.check_type(arguments, 'object')  // arguments version
}
```
```
function PRE_check_oneObject(an_object){
  return type_czech.check_type(an_object, 'object')  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
oneObject = type_czech.linkUp(oneObject, PRE_check_oneObject) 

function oneObject(an_object){
}

oneObject({})  
oneObject({a:1})

oneObject([])  // PRE error
```



## 5 Single Typed Object Parameter Type Check<a name="single-typed-object-parameter-type-check"></a>

```
function PRE_check_oneObject(){
  return type_czech.check_type(arguments, {a:'string'})  // arguments version
}
```
```
function PRE_check_oneObject(oneObject){
  return type_czech.check_type(oneObject, {a:'string'})  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
oneObject = type_czech.linkUp(oneObject, PRE_check_oneObject) 

function oneObject(an_array){
}

oneObject({a:'aardvark'})  
oneObject({a:14}) // PRE error         
oneObject({b:'capybara'}) // PRE error 
```






## 6 Multiple Parameter Type Check<a name="multiple-parameter-type-check"></a>

```
function PRE_check_multiParams(){
  the_signature = [ 'number', 'string', 'boolean' ]
  return type_czech.check_type(arguments, the_signature)
}

type_czech = TypeCzech('LOG-ERRORS')
multiParams = type_czech.linkUp(multiParams, PRE_check_multiParams) 

function multiParams(an_array){
}

multiParams([1, 'one', false])
multiParams([1999, 'Sharknado', {} ]) // PRE error         
```

## 7 HTML Type Check<a name="html-type-check"></a>

```
function PRE_check_htmlButton(){  // arguments version
  return type_czech.check_type(arguments, 'HTMLButtonElement')  
}
```
```
function PRE_check_htmlButton(html_element){   // or parameter version
  return type_czech.check_type(html_element, 'HTMLButtonElement')
}

type_czech = TypeCzech('LOG-ERRORS')
htmlButton = type_czech.linkUp(htmlButton, PRE_check_htmlButton) 

function htmlButton(html_element){
}

htmlButton(document.createElement('button'))

htmlButton('hi there')
htmlButton(document.createElement('div'))
```

## 8 Class Type Check<a name="class-type-check"></a>
Applies to closures, IIFEs, ClassFrees, Prototypess, and OLLOs.
```
function PRE_check_theLast(){  // arguments version
  return type_czech.check_type(arguments, 'Last')  
}
```
```
function PRE_check_theLast(a_last){   // or parameter version
  return type_czech.check_type(a_last, 'Last')
}

type_czech = TypeCzech('LOG-ERRORS')
theLast = type_czech.linkUp(theLast, PRE_check_theLast) 

function classOperate(a_last){
}

class First { constructor() { } }
class Last extends First { constructor() { super() } }
a_last = new Last()
a_first = new First()

classOperate(a_last)

classOperate(a_first)  // PRE error
```

## 9 Class and Methods Type Check<a name="class-and-methtods-type-check"></a>

```
class Person {
  constructor(person_name) { this.the_name = person_name}
  showInfo(born_year){ 
    if (born_year === 0) return 'a-zero-year-error'
    return [this.the_name, born_year] }
}

function PRE_check_Person(){
  return type_czech.check_type(arguments, 'string')  
}

function PRE_check_showInfo(){
  return type_czech.check_type(arguments, 'number')  
}

function POST_check_Person(the_result){
  if (the_result.the_name === 'Pol Pot')
    return 'Not Good Enough'
  return type_czech.check_type(arguments, 'Person')
}

function POST_check_showInfo(){
  return type_czech.check_type(arguments, 'array') 
}

PRE_CLASS_Person = {Person:PRE_check_Person, showInfo:PRE_check_showInfo}
POST_CLASS_Person = {Person:POST_check_Person, showInfo:POST_check_showInfo}

type_czech = TypeCzech('LOG-ERRORS')

Person = type_czech.linkUp(Person, PRE_CLASS_Person, POST_CLASS_Person)

person_1 = new Person('Jonas Salk')
person_1.showInfo(1952)

person_2 = new Person(1234) // PRE_check_Person error

person_3 = new Person('Mad Max')
person_3.showInfo('error')  // PRE_check_showInfo error

person_4 = new Person('Lady Gaga')
person_4.showInfo(0)  // POST_check_showInfo error

person_5 = new Person('Pol Pot')  // POST_check_Person error
```


## 10 Scalar Result Type Check<a name="scalar-result-type-check"></a>

```
function POST_check_returnString(){  // arguments version
  return type_czech.check_type(arguments, 'string')  
}
```
```
function POST_check_returnString(return_result){   // or parameter version
  return type_czech.check_type(return_result, 'string')
}

type_czech = TypeCzech('LOG-ERRORS')
returnString = type_czech.linkUp(returnString, undefined, POST_check_returnString) 

function returnString(return_result){
  return return_result
}

returnString('two')  
returnString(false) // POST error         
```

## 11 Array Result Type Check<a name="array-result-type-check"></a>

```
function POST_check_anArray(){
  return type_czech.check_type(arguments, 'array')  // arguments version
}
```
```
function POST_check_anArray(an_array){
  return type_czech.check_type(an_array, 'array')  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
anArray = type_czech.linkUp(anArray, undefined, POST_check_anArray) 

function anArray(an_array){
  return an_array
}

anArray([1, 'two', {a:1}, [] ])  
anArray({a:1}) // PRE error     
```

## 12 Typed Array Result Type Check<a name="typed-array-result-type-check"></a>

```
function POST_check_booleanArray(){
  return type_czech.check_type(arguments, ['boolean'])  // arguments version
}
```
```
function POST_check_booleanArray(an_array){
  return type_czech.check_type(an_array, ['boolean'])  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
booleanArray = type_czech.linkUp(booleanArray, undefined, POST_check_booleanArray) 

function booleanArray(an_array){
  return an_array
}

booleanArray([true, false, true])  
booleanArray([1, 0, 1]) // PRE error     
```

## 13 Multi Typed Array Result Type Check<a name="multi-typed-array-result-type-check"></a>

```
function POST_check_numBoolStr(){
  return type_czech.check_type(arguments, ['number', 'boolean', 'string'])  // arguments version
}
```
```
function POST_check_numBoolStr(an_array){
  return type_czech.check_type(an_array, ['number', 'boolean', 'string'])  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
numBoolStr = type_czech.linkUp(numBoolStr, undefined, POST_check_numBoolStr) 

function numBoolStr(an_array){
  return an_array
}

numBoolStr([1, false, 'three'])  
numBoolStr({}) // PRE error     
```

## 14 Typed Object Result Type Check<a name="typed-object-result-type-check"></a>

```
function POST_check_objectAbc(){
  return type_czech.check_type(arguments, {a:'number', b:'boolean', c:'string'})  // arguments version
}
```
```
function POST_check_objectAbc(an_array){
  return type_czech.check_type(an_array, {a:'number', b:'boolean', c:'string'})  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
objectAbc = type_czech.linkUp(objectAbc, undefined, POST_check_objectAbc) 

function objectAbc(an_array){
  return an_array
}

objectAbc({a:1, b:false, c:'three'})  
objectAbc([]) // PRE error     
```











&copy; 2021 Steen Hansen



