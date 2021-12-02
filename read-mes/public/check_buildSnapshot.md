
## check_buildSnapshot() & check_mutatedSnapshot()
  -  [1 Mutation Check an Array](#mutation-check-an-array) 
  -  [2 Mutation Check an Object](#mutation-check-an-object) 

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 1 Mutation Check an Array<a name="mutation-check-an-array"></a>
  
```
type_czech = TypeCzech('THROW-EXCEPTIONS')

function PRE_check_anArray(an_array){
  return type_czech.check_buildSnapshot('PRE_check_anArray', 'an_array', an_array)
}

function POST_check_anArray(){
  return type_czech.check_mutatedSnapshot('PRE_check_anArray', 'an_array')
}

anArray = type_czech.linkUp(anArray, PRE_check_anArray, POST_check_anArray) 

function anArray(an_array){
  if (an_array[0] === 1)
    an_array[0] = 'An-Error'
}

anArray([9,8,7]) // pass

anArray([1,2,3]) // POST fail - changed to ["An-Error",2,3] 
```
   
## 2 Mutation Check an Object<a name="mutation-check-an-object"></a>
  
```
type_czech = TypeCzech('THROW-EXCEPTIONS')

function PRE_check_anObject(an_object){
  return type_czech.check_buildSnapshot('PRE_check_anObject', 'an_object', an_object)
}

function POST_check_anObject(){
  return type_czech.check_mutatedSnapshot('PRE_check_anObject', 'an_object')
}

anObject = type_czech.linkUp(anObject, PRE_check_anObject, POST_check_anObject) 

function anObject(an_object){
  if (typeof an_object.extra === 'undefined')
    an_object.extra = 'is mutated'
}

anObject({data:'data', extra:'extra'}) // pass

anObject({an_err:'yep'}) // POST fail - changed to {"an_err":"yep","extra":"is mutated"} 
```

&copy; 2021 Steen Hansen 
