

WRONGS

## checkParam_typeExtra()
  -  [0 Illegal Extra Single Array Parameter Type Check](#illigal-extra-single-array-parameter-type-check)

  -  [1 Extra Multi Array Parameter Type Check](#extra-multi-array-parameter-type-check)
  -  [2 Extra Object Parameter Type Check](#extra-object-parameter-type-check) 
  
  -  [3 Extra Multi Array Result Type Check](#extra-multi-array-result-type-check)
  -  [4 Extra Object Result Type Check](#extra-object-result-type-check)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 0 Illegal Extra Array Parameter Type Check<a name="illigal-extra-single-array-parameter-type-check"></a>

##### &nbsp;&nbsp;&nbsp; checkParam_typeExtra(a_parameter, <b>['number']</b>) // ['number'] does not work with checkParam_typeExtra()

Because the below example has a one dimensional signature of ['number'] it does not
work. The signature ['number'] means an array of any size that has numbers. 
```
function PRE_check_illegal_typeExtra(a_parameter){
  return type_czech.checkParam_typeExtra(a_parameter, ['number']) // does not work with checkParam_typeExtra()
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
illegal_typeExtra = type_czech.linkUp(illegal_typeExtra, PRE_check_illegal_typeExtra) 

function illegal_typeExtra(){ }

illegal_typeExtra(1, 'a-str')       // try checkParam_typeExtra(1, 'number')
illegal_typeExtra([3,2,1], 'a-str') // try checkParam_typeExtra([3,2,1], 'number')
```

### One Parameter Type Check With Possible Extra Types

##### &nbsp;&nbsp;&nbsp; checkParam_typeExtra(a_parameter, <b>'number'</b>) 

The below example has followed the suggestion of the above error message, and makes sure that all 
elements in an array are numbers. So the 'number' refers to the first parameter.
```
function PRE_check_legal_typeExtra(a_number){
  return type_czech.checkParam_typeExtra(a_number, 'number')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
legal_typeExtra = type_czech.linkUp(legal_typeExtra, PRE_check_legal_typeExtra) 

function legal_typeExtra(){ }

legal_typeExtra(1)              // pass
legal_typeExtra(2, 'a-string')  // pass
legal_typeExtra(3, false, true) // pass

legal_typeExtra('doge') // fail - 'doge' is not a number
legal_typeExtra(false)  // fail - false is not a number
```

### Two Parameter Type Check With Possible Extra Types

##### &nbsp;&nbsp;&nbsp; checkParam_typeExtra(parameters, <b>['number', 'number']</b>)

This example requires the first parameter to be a number, the second a string, while any types of elements may follow.

```
function PRE_check_arrayExtraOk(single_array_with_extra){
  return type_czech.checkParam_typeExtra(single_array_with_extra, ['number', 'string'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayExtraOk = type_czech.linkUp(arrayExtraOk, PRE_check_arrayExtraOk) 

function arrayExtraOk(single_array_with_extra){ }

arrayExtraOk([1, 'Rock Lobster', {}]) // pass

arrayExtraOk([1, 2, 'un-checked-fail']) // fail 2 is not a string

```


## 1 Extra Multi Array Parameter Type Check<a name="extra-multi-array-parameter-type-check"></a>

```
function PRE_check_arrayExtra(single_array_with_extra){
  return type_czech.checkParam_typeExtra(single_array_with_extra, ['number', 'string'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayExtra = type_czech.linkUp(arrayExtra, PRE_check_arrayExtra) 

function arrayExtra(single_array_with_extra){ }

arrayExtra([1, 'Abba']) // pass

arrayExtra([1984, 'Blondie', false, [], {}]) // pass

arrayExtra([0])  // fail - missing 2nd string parameter
```


## 2 Extra Object Parameter Type Check<a name="extra-object-parameter-type-check"></a>

```
function PRE_check_objectExtra(single_object_with_extra){
  return type_czech.checkParam_typeExtra(single_object_with_extra, {song: 'string'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
objectExtra = type_czech.linkUp(objectExtra, PRE_check_objectExtra) 

function objectExtra(single_object_with_extra){ }

objectExtra({song:'Deacon Blues'}) // pass

objectExtra({song:'Peg', album:'Aja'}) // pass

objectExtra({album:'Gaucho'})  // fail - missing 'song' property
```







## 3 Extra Multi Array Result Type Check<a name="extra-multi-array-result-type-check"></a>

```
function POST_check_arrayExtra(return_result){
  return type_czech.checkParam_typeExtra(return_result, ['number', 'string'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayExtra = type_czech.linkUp(arrayExtra, undefined, POST_check_arrayExtra) 

function arrayExtra(single_array_with_extra){
  return single_array_with_extra
}

arrayExtra([1991, 'Nirvana']) // pass

arrayExtra([1991, 'Nevermind', false, [], {}]) // pass

arrayExtra([43])  // fail - missing 2nd string in result
```









## 4 Extra Object Result Type Check<a name="extra-object-result-type-check"></a>

```
function POST_check_objectExtra(return_result){
  return type_czech.checkParam_typeExtra(return_result, {song: 'string'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
objectExtra = type_czech.linkUp(objectExtra, POST_check_objectExtra) 

function objectExtra(single_object_with_extra){
  return single_object_with_extra
}

objectExtra({song:'Take a Chance With Me'}) // pass

objectExtra({song:'More Than This', album:'Avalon'}) // pass

objectExtra({album:'Avalon'})  // PRE fail - missing song property in result
```



&copy; 2021 Steen Hansen