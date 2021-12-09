
## checkParam_emptyExtra()
  -  [0 Illegal Extra Single Array Parameter Empty Check](#illigal-extra-single-array-parameter-empty-check)

  -  [1 Extra Multi Array Parameter Empty Check](#extra-multi-array-parameter-empty-check)
  -  [2 Extra Object Parameter Empty Check](#extra-object-parameter-empty-check) 

  -  [3 Extra Multi Array Result Empty Check](#extra-multi-array-result-empty-check)
  -  [4 Extra Object Result Empty Check](#extra-object-result-empty-check)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 0 Illegal Extra Array Parameter Empty Check<a name="illigal-extra-single-array-parameter-empty-check"></a>

##### &nbsp;&nbsp;&nbsp; checkParam_emptyExtra(parameters, <b>['EMPTY-ERROR']</b>) // ['EMPTY-ERROR'] does not work with checkParam_emptyExtra()

Because the below example has a one dimensional signature of ['EMPTY-ERROR'] it does not
work. The signature ['EMPTY-ERROR'] means an array of any size that has no empty elements.
```
function PRE_check_illegal_EmptyExtra(a_parameter){
  return type_czech.checkParam_emptyExtra(a_parameter, ['EMPTY-ERROR']) // does not work with checkParam_emptyExtr()
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
illegal_EmptyExtra = type_czech.linkUp(illegal_EmptyExtra, PRE_check_illegal_EmptyExtra) 

function illegal_EmptyExtra(){ }

illegal_EmptyExtra('not-empty', 'extra')     // try checkParam_emptyExtra(not-empty, 'EMPTY-ERROR')
illegal_EmptyExtra(['an', 'array'], 'extra') // try checkParam_emptyExtra(["an","array"], 'EMPTY-ERROR')
```

### One Parameter Empty Check With Possible Extra Empties
##### &nbsp;&nbsp;&nbsp; checkParam_emptyExtra(first_param, <b>'EMPTY-ERROR'</b>)

The below example has followed the suggestion of the above error message, and makes sure there that the first parameter is not empty, and there may be extra empty parameters following. So the 'EMPTY-ERROR' refers to the first parameter.
```
function PRE_check_legal_EmptyExtra(a_parameter){
  return type_czech.checkParam_emptyExtra(a_parameter, 'EMPTY-ERROR')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
legal_EmptyExtra = type_czech.linkUp(legal_EmptyExtra, PRE_check_legal_EmptyExtra) 

function legal_EmptyExtra(){ }

legal_EmptyExtra('not-empty')          // pass
legal_EmptyExtra('not-empty', '')      // pass
legal_EmptyExtra('not-empty', [])      // pass
legal_EmptyExtra('not-empty', {})      // pass

legal_EmptyExtra('')          // PRE fail - first parameter is empty
legal_EmptyExtra([])          // PRE fail - first parameter is empty
legal_EmptyExtra('', 'extra') // PRE fail - first parameter is empty
```
### Two Parameter Empty Check With Possible Extra Empties
##### &nbsp;&nbsp;&nbsp; checkParam_emptyExtra(first_param, second_param, <b>['EMPTY-ERROR', 'EMPTY-ERROR']</b>)


This example requires the first two elements of one parameter to be non-empty, while empty elements may follow.
```
function PRE_check_arrayExtraOk(array_2_elems){
  return type_czech.checkParam_emptyExtra(array_2_elems, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayExtraOk = type_czech.linkUp(arrayExtraOk, PRE_check_arrayExtraOk) 

function arrayExtraOk(array_2_elems){ }

arrayExtraOk([1, 2, '']) // pass

arrayExtraOk([1, '']) // PRE fail - second parameter is an empty string ''
```


## 1 Extra Multi Array Parameter Empty Check<a name="extra-multi-array-parameter-empty-check"></a>

```
function PRE_check_arrayExtra(single_array_with_extra){
  return type_czech.checkParam_emptyExtra(single_array_with_extra, 'EMPTY-ERROR')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayExtra = type_czech.linkUp(arrayExtra, PRE_check_arrayExtra) 

function arrayExtra(single_array_with_extra){ }

arrayExtra([1, 'Abba'])                      // pass
arrayExtra([1984, 'Blondie', false, [], {}]) // pass
arrayExtra([0])                              // pass, array is not empty

arrayExtra([])  // PRE fail - empty array
arrayExtra({})  // PRE fail - empty object
arrayExtra('')  // PRE fail - empty string
```


## 2 Extra Object Parameter Empty Check<a name="extra-object-parameter-empty-check"></a>

```
function PRE_check_objectExtra(an_object){
  return type_czech.checkParam_emptyExtra(an_object, {song: 'EMPTY-ERROR'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
objectExtra = type_czech.linkUp(objectExtra, PRE_check_objectExtra) 

function objectExtra(single_object_with_extra){ }

objectExtra({song:'Deacon Blues'})     // pass
objectExtra({song:'Peg', album:'Aja'}) // pass

objectExtra({album:'Gaucho'})  // PRE fail - no song
```


## 3 Extra Multi Array Result Empty Check<a name="extra-multi-array-result-empty-check"></a>

```
function POST_check_arrayExtra(return_result){
    console.log('check return = ', return_result)
  return type_czech.checkParam_emptyExtra(return_result, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayExtra = type_czech.linkUp(arrayExtra, undefined, POST_check_arrayExtra) 

function arrayExtra(single_array_with_extra){
  console.log('return = ', single_array_with_extra)
  return single_array_with_extra
}

arrayExtra([1991, 'Nirvana'])                  // pass
arrayExtra([1991, 'Nevermind', false, [], {}]) // pass

arrayExtra([43])     // fail - no second parameter
arrayExtra([43, '']) // fail - empty second parameter
```









## 4 Extra Object Result Empty Check<a name="extra-object-result-empty-check"></a>

```
function POST_check_objectExtra(return_result){
  return type_czech.checkParam_emptyExtra(return_result, {song: 'EMPTY-ERROR'})
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
objectExtra = type_czech.linkUp(objectExtra, POST_check_objectExtra) 

function objectExtra(single_object_with_extra){
  return single_object_with_extra
}

objectExtra({song:'Take a Chance With Me'})          // pass
objectExtra({song:'More Than This', album:'Avalon'}) // pass

objectExtra({album:'Avalon' })  // fail - no song property
```



&copy; 2021 Steen Hansen