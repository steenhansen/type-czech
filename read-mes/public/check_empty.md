## check_empty() 

### Input Parameter Empty Checks
  -  [1 Single Empty Parameter Check](#single-empty-parameter-check)  
  -  [2 Single Array Empty Parameter Check](#single-array-empty-parameter-check) 
  -  [3 Array Empty Parameter Check](#array-empty-parameter-check)  
  -  [4 Object Empty Parameter Check](#object-empty-parameter-check)  


### Output Result Empty Checks
  -  [5 Empty Result Check](#empty-result-check)
  -  [6 Empty Array Result Check](#empty-array-result-check)     
  -  [7 Empty Object Result Check](#empty-object-result-check)     



## 1 Single Empty Parameter Check<a name="single-empty-parameter-check"></a>
  
```
function PRE_check_filledVariable(){
  return type_czech.check_empty(arguments, 'EMPTY-ERROR')  // arguments version
}
```
```
function PRE_check_filledVariable(a_variable){
  return type_czech.check_empty(a_variable, 'EMPTY-ERROR')  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
filledVariable = type_czech.linkUp(filledVariable, PRE_check_filledVariable) 

function filledVariable(a_variable){
}

filledVariable(17)

filledVariable('')  // PRE error 
filledVariable([])  // PRE error 
filledVariable({})  // PRE error 
```

## 2 Single Array Empty Parameter Check<a name="single-array-empty-parameter-check"></a>
    
```
function PRE_check_noEmptyArray(){
  return type_czech.check_empty(arguments, ['EMPTY-ERROR'])  // arguments version
}
```
```
function PRE_check_noEmptyArray(an_array){
  return type_czech.check_empty(an_array, ['EMPTY-ERROR'])  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
noEmptyArray = type_czech.linkUp(noEmptyArray, PRE_check_noEmptyArray) 

function noEmptyArray(an_array){
}

noEmptyArray([ [1,2,3], 'a', {b:'c'} ])  

noEmptyArray([ [],      'a', {b:'c'} ])  // PRE error     
noEmptyArray([ [1,2,3], '',  {b:'c'} ])  // PRE error     
noEmptyArray([ [1,2,3], 'a', {} ])  // PRE error     
```


## 3 Array Empty Parameter Check<a name="array-empty-parameter-check"></a>
```
function PRE_check_firstFilled(){
  return type_czech.check_empty(arguments, ['EMPTY-ERROR', 'EMPTY-OK', 'EMPTY-OK']) // arguments version
}
```
```
function PRE_check_firstFilled(an_array){
  return type_czech.check_empty(an_array, ['EMPTY-ERROR', 'EMPTY-OK', 'EMPTY-OK']) // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
firstFilled = type_czech.linkUp(firstFilled, PRE_check_firstFilled) 

function firstFilled(an_array){
}

firstFilled(['Boston', '', ''])  
firstFilled(['Collective', 'Soul', ''])  
firstFilled(['Booker T.', 'And', "The M.G.'s"])  

firstFilled(['', 'Steely', 'Dan']) // PRE error     
```

## 4 Object Empty Parameter Check<a name="object-empty-parameter-check"></a>

```
function PRE_check_filledObject(){
  return type_czech.check_empty(arguments, {a:'EMPTY-ERROR', b:'EMPTY-OK'})  // arguments version
}
```
```
function PRE_check_filledObject(oneObject){
  return type_czech.check_empty(oneObject, {a:'EMPTY-ERROR', b:'EMPTY-OK'})  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
filledObject = type_czech.linkUp(filledObject, PRE_check_filledObject) 

function filledObject(an_object){
}

filledObject({a:'aardvark', b:'buffallo'})  
filledObject({a:'armadillo', b:''})  

filledObject({a:'', b:'bison'})  // PRE error 
```




## 5 Empty Result Check<a name="empty-result-check"></a>
```
function POST_check_filledReturn(){
  return type_czech.check_empty(arguments, 'EMPTY-ERROR') // arguments version 
}
```
```
function POST_check_filledReturn(a_variable){
  return type_czech.check_empty(a_variable, 'EMPTY-ERROR') // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
filledReturn = type_czech.linkUp(filledReturn, undefined, POST_check_filledReturn) 

function filledReturn(a_variable){
  return a_variable
}

filledReturn(1492)

filledReturn([]) // PRE error         
filledReturn({}) // PRE error         
filledReturn('') // PRE error         
```


## 6 Empty Array Result Check<a name="empty-array-result-check"></a> 
```
function POST_check_arrayReturn(){
  return type_czech.check_empty(arguments, ['EMPTY-ERROR'])  // arguments version 
}
```
```
function POST_check_arrayReturn(an_array){
  return type_czech.check_empty(an_array, ['EMPTY-ERROR'])  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
arrayReturn = type_czech.linkUp(arrayReturn, undefined, POST_check_arrayReturn) 

function arrayReturn(an_array){
  return an_array
}

arrayReturn([1, 'two', {a:1}, [1,2,3] ])  

arrayReturn(['']) // PRE error     
```




## 7 Empty Object Result Check<a name="empty-object-result-check"></a> 
```
function POST_check_objectReturn(){
  return type_czech.check_empty(arguments, {a:'EMPTY-ERROR'})  // arguments version 
}
```
```
function POST_check_objectReturn(an_object){
  return type_czech.check_empty(an_object, {a:'EMPTY-ERROR'})  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
objectReturn = type_czech.linkUp(objectReturn, undefined, POST_check_objectReturn) 

function objectReturn(an_object){
  return an_object
}

objectReturn({a:'not-empty'})  

objectReturn({a:''}) // PRE error     
```










&copy; 2021 Steen Hansen



