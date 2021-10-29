
## check_typeEither()
  -  [1 Either Parameter Type Check](#either-parameter-type-check)
  -  [2 Either Result Type Check](#either-result-type-check)

## 1 Either Parameter Type Check<a name="either-parameter-type-check"></a>
  
```
function PRE_check_arrayOrObject(){
  return type_czech.check_typeEither(arguments, ['array', 'object'])
}

type_czech = TypeCzech('LOG-ERRORS')
arrayOrObject = type_czech.linkUp(arrayOrObject, PRE_check_arrayOrObject) 

function arrayOrObject(array_or_object){
}

arrayOrObject([])  
arrayOrObject([1, 'two', new Date('1999-12-12'), []])  
arrayOrObject({})
arrayOrObject({x:12, y:4, z:19.1})

arrayOrObject(12) // PRE ERROR
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

arrayOrObject([])  
arrayOrObject([1, 'two', new Date('1999-12-12'), []])  
arrayOrObject({})
arrayOrObject({x:12, y:4, z:19.1})

arrayOrObject(12) // PRE ERROR
```



&copy; 2021 Steen Hansen