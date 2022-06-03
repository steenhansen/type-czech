## checkParam_empty() 

### Input Parameter Empty Checks
  -  [A Single Empty Parameter Check](#A)  
  -  [B Array Empty Parameter Check](#B)  
  -  [C Object Empty Parameter Check](#C)  


### Output Result Empty Checks
  -  [D Empty Result Check](#D)
  -  [E Empty Array Result Check](#E)     
  -  [F Empty Object Result Check](#F)     

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Single Empty Parameter Check<a name="A"></a>
  
```
function PRE_check_filledVariable(a_variable){
  return type_czech.checkParam_empty(a_variable, 'EMPTY-ERROR')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
filledVariable = type_czech.linkUp(filledVariable, PRE_check_filledVariable) 

function filledVariable(a_variable){ }

filledVariable(17) // pass

filledVariable('')  // PRE fail - '' is empty
filledVariable([])  // PRE fail - [] is empty
filledVariable({})  // PRE fail - {} is empty
filledVariable(NaN) // PRE fail - NaN is empty
```

## B Array Empty Parameter Check<a name="B"></a>

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

## C Object Empty Parameter Check<a name="C"></a>

```
function PRE_check_filledObject(oneObject){
  return type_czech.checkParam_empty(oneObject, {a:'EMPTY-ERROR', b:'EMPTY-OK'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
filledObject = type_czech.linkUp(filledObject, PRE_check_filledObject) 

function filledObject(an_object){ }

filledObject({a:'aardvark', b:'buffalo'}) // pass  
filledObject({a:'armadillo', b:''})        // pass  

filledObject({a:'', b:'bison'})  // PRE fail - 'a' property is empty 
```




## D Empty Result Check<a name="D"></a>
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


## E Empty Array Result Check<a name="E"></a> 

```
function POST_check_arrayReturn(an_array){
  return type_czech.checkParam_empty(an_array, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayReturn = type_czech.linkUp(arrayReturn, undefined, POST_check_arrayReturn) 

function arrayReturn(an_array){
  console.log('asdf', an_array)
  return an_array
}

arrayReturn([1, 'two']) // pass  

arrayReturn([1])     // fail - not 2 things
arrayReturn([1, {}]) // fail, empty object
```




## F Empty Object Result Check<a name="F"></a> 
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

objectReturn({a:''}) // fail - empty string
```










&copy; 2022 Steen Hansen



