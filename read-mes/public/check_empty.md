## checkParam_empty() 

### Input Parameter Empty Checks
  -  [1 Single Empty Parameter Check](#single-empty-parameter-check)  
  -  [2 Single Array Empty Parameter Check](#single-array-empty-parameter-check) 
  -  [3 Array Empty Parameter Check](#array-empty-parameter-check)  
  -  [4 Object Empty Parameter Check](#object-empty-parameter-check)  


### Output Result Empty Checks
  -  [5 Empty Result Check](#empty-result-check)
  -  [6 Empty Array Result Check](#empty-array-result-check)     
  -  [7 Empty Object Result Check](#empty-object-result-check)     

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 1 Single Empty Parameter Check<a name="single-empty-parameter-check"></a>
  
```
function PRE_check_filledVariable(a_variable){
  return type_czech.checkParam_empty(a_variable, 'EMPTY-ERROR')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
filledVariable = type_czech.linkUp(filledVariable, PRE_check_filledVariable) 

function filledVariable(a_variable){ }

filledVariable(17) // pass

filledVariable('') // PRE fail - '' is empty
filledVariable([]) // PRE fail - [] is empty
filledVariable({}) // PRE fail - {} is empty
```

## 2 Single Array Empty Parameter Check<a name="single-array-empty-parameter-check"></a>
    
```
function PRE_check_noEmptyArray(an_array){
  return type_czech.checkParam_empty(an_array, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
noEmptyArray = type_czech.linkUp(noEmptyArray, PRE_check_noEmptyArray) 

function noEmptyArray(an_array){ }

noEmptyArray([ [1,2,3], 'a', {b:'c'} ]) // pass 

noEmptyArray([ [],      'a', {b:'c'} ]) // PRE fail - first [] empty  
noEmptyArray([ [1,2,3], '',  {b:'c'} ]) // PRE fail - second '' empty
noEmptyArray([ [1,2,3], 'a', {} ])      // PRE fail - third {} empty
```


## 3 Array Empty Parameter Check<a name="array-empty-parameter-check"></a>

```
function PRE_check_firstFilled(an_array){
  return type_czech.checkParam_empty(an_array, ['EMPTY-ERROR', 'EMPTY-OK', 'EMPTY-OK'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
firstFilled = type_czech.linkUp(firstFilled, PRE_check_firstFilled) 

function firstFilled(an_array){ }

firstFilled(['Boston', '', ''])                 // pass
firstFilled(['Collective', 'Soul', ''])         // pass
firstFilled(['Booker T.', 'And', "The M.G.'s"]) // pass  

firstFilled(['', 'Steely', 'Dan']) // PRE fail - first element is empty
```

## 4 Object Empty Parameter Check<a name="object-empty-parameter-check"></a>

```
function PRE_check_filledObject(oneObject){
  return type_czech.checkParam_empty(oneObject, {a:'EMPTY-ERROR', b:'EMPTY-OK'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
filledObject = type_czech.linkUp(filledObject, PRE_check_filledObject) 

function filledObject(an_object){ }

filledObject({a:'aardvark', b:'buffallo'}) // pass  
filledObject({a:'armadillo', b:''})        // pass  

filledObject({a:'', b:'bison'})  // PRE fail - 'a' property is empty 
```




## 5 Empty Result Check<a name="empty-result-check"></a>
```
function POST_check_filledReturn(a_variable){
  return type_czech.checkParam_empty(a_variable, 'EMPTY-ERROR')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
filledReturn = type_czech.linkUp(filledReturn, undefined, POST_check_filledReturn) 

function filledReturn(a_variable){
  return a_variable
}

filledReturn(1492) // pass

filledReturn([]) // PRE error         
filledReturn({}) // PRE error         
filledReturn('') // PRE error         
```


## 6 Empty Array Result Check<a name="empty-array-result-check"></a> 

```
function POST_check_arrayReturn(an_array){
  return type_czech.checkParam_empty(an_array, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayReturn = type_czech.linkUp(arrayReturn, undefined, POST_check_arrayReturn) 

function arrayReturn(an_array){
  return an_array
}

arrayReturn([1, 'two', {a:1}, [1,2,3] ]) // pass  

arrayReturn(['']) // PRE error     
```




## 7 Empty Object Result Check<a name="empty-object-result-check"></a> 
```
function POST_check_objectReturn(an_object){
  return type_czech.checkParam_empty(an_object, {a:'EMPTY-ERROR'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
objectReturn = type_czech.linkUp(objectReturn, undefined, POST_check_objectReturn) 

function objectReturn(an_object){
  return an_object
}

objectReturn({a:'not-empty'}) // pass

objectReturn({a:''}) // PRE error     
```










&copy; 2021 Steen Hansen



