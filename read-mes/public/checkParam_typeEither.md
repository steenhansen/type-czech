
## checkParam_typeEither()
  -  [A Either Parameter Type Check](#A)
  -  [B Either Result Type Check](#B)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Either Parameter Type Check<a name="A"></a>
  
```
function PRE_check_arrayOrObject(arr_or_obj){
  return type_czech.checkParam_typeEither(arr_or_obj, ['array', 'object'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayOrObject = type_czech.linkUp(arrayOrObject, PRE_check_arrayOrObject) 

function arrayOrObject(array_or_object){ }

arrayOrObject([])                                     // pass
arrayOrObject([1, 'two', new Date('1999-12-12'), []]) // pass
arrayOrObject({})                                     // pass
arrayOrObject({x:12, y:4, z:19.1})                    // pass 

arrayOrObject(12) // fail - number is not array or object
```

## B Either Result Type Check<a name="B"></a>
  
```
function POST_check_arrayOrObject(return_result){
  return type_czech.checkParam_typeEither(return_result, ['array', 'object'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayOrObject = type_czech.linkUp(arrayOrObject, undefined, POST_check_arrayOrObject) 

function arrayOrObject(array_or_object){
  return array_or_object
}

arrayOrObject([])                                     // pass
arrayOrObject([1, 'two', new Date('1999-12-12'), []]) // pass
arrayOrObject({})                                     // pass
arrayOrObject({x:12, y:4, z:19.1})                    // pass

arrayOrObject(12) // fail - 12 is not an object
```



&copy; 2022 Steen Hansen