
## check_typeEither()
  -  [1 Either Parameter Type Check](#either-parameter-type-check)
  -  [2 Either Result Type Check](#either-result-type-check)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 1 Either Parameter Type Check<a name="either-parameter-type-check"></a>
  
```
function PRE_check_arrayOrObject(){
  return type_czech.check_typeEither(arguments, ['array', 'object']) // arguments version
}
```
```
function PRE_check_arrayOrObject(arr_or_obj){
  return type_czech.check_typeEither(arr_or_obj, ['array', 'object'])  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
arrayOrObject = type_czech.linkUp(arrayOrObject, PRE_check_arrayOrObject) 

function arrayOrObject(array_or_object){ }

arrayOrObject([])                                     // pass
arrayOrObject([1, 'two', new Date('1999-12-12'), []]) // pass
arrayOrObject({})                                     // pass
arrayOrObject({x:12, y:4, z:19.1})                    // pass 

arrayOrObject(12) // PRE fail - number is not array or object
```

## 2 Either Result Type Check<a name="either-result-type-check"></a>
  
```
function POST_check_arrayOrObject(){
  return type_czech.check_typeEither(arguments, ['array', 'object'])  // arguments version
}
```
```
function POST_check_arrayOrObject(return_result){
  return type_czech.check_typeEither(return_result, ['array', 'object'])  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
arrayOrObject = type_czech.linkUp(arrayOrObject, undefined, POST_check_arrayOrObject) 

function arrayOrObject(array_or_object){
  return array_or_object
}

arrayOrObject([])                                     // pass
arrayOrObject([1, 'two', new Date('1999-12-12'), []]) // pass
arrayOrObject({})                                     // pass
arrayOrObject({x:12, y:4, z:19.1})                    // pass

arrayOrObject(12) // PRE fail - 12 is not an object
```



&copy; 2021 Steen Hansen