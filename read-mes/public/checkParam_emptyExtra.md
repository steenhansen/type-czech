
## checkParam_emptyExtra()

  -  [A Single Parameter Empty Check With Possible Extra Empties](#A)
  -  [B Two Parameter Empty Check With Possible Extra Empties](#B)
  -  [C Extra Object Parameter Empty Check](#C) 
  -  [D One Value Array Parameter Empty Check](#D)
  -  [E Two Element Array Parameter Empty Check With Possible Extra Empties](#E)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)


## A Single Parameter Empty Check With Possible Extra Empties<a name="A"></a>

```
function PRE_check_oneParam(a_parameter){
  return type_czech.checkParam_emptyExtra(a_parameter, 'EMPTY-ERROR')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
oneParam = type_czech.linkUp(oneParam, PRE_check_oneParam) 

function oneParam(){ }

oneParam('not-empty')                      // pass
oneParam('not-empty', '')                  // pass
oneParam('not-empty', [])                  // pass
oneParam('not-empty', {})                  // pass
oneParam([1, 'Abba'])                      // pass
oneParam([1984, 'Blondie', false, [], {}]) // pass

oneParam('')          // PRE fail - first parameter is empty
oneParam([])          // PRE fail - first parameter is empty
oneParam('', 'extra') // PRE fail - first parameter is empty
```

## B Two Parameter Empty Check With Possible Extra Empties<a name="B"></a>

```
function PRE_check_twoParams(param_1, param_2){
  return type_czech.checkParam_emptyExtra([param_1, param_2], ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
twoParams = type_czech.linkUp(twoParams, PRE_check_twoParams) 

function twoParams(){ }

twoParams('not-empty', 'ok')          // pass
twoParams('not-empty', 'ok', '')      // pass
twoParams('not-empty', 'ok', [])      // pass
twoParams('not-empty', 'ok', {})      // pass

twoParams('')          // PRE fail - first parameter is empty
twoParams('full', []) // PRE fail - second parameter is empty
```

## C Extra Object Parameter Empty Check<a name="C"></a>

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


## D One Value Array Parameter Empty Check<a name="D"></a>

```
function PRE_check_arrayOneElem(a_1_array){
  return type_czech.checkParam_emptyExtra(a_1_array, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayOneElem = type_czech.linkUp(arrayOneElem, PRE_check_arrayOneElem) 

function arrayOneElem(a_1_array){ }

arrayOneElem(['not-empty'])                         // pass
arrayOneElem(['not-empty'], 'extra')                // pass with extra
arrayOneElem(['an', 'exta-element'], 'extra-param') // pass - 2 extras

arrayOneElem('not-empty', 'extra') // fail - not array
arrayOneElem([], 'extra')          // fail - empty array
```

## E Two Element Array Parameter Empty Check With Possible Extra Empties<a name="E"></a> 

This example requires the first two elements of one parameter to be non-empty, while empty elements may follow.
```
function PRE_check_array2ExtraOk(array_2_elems){
  return type_czech.checkParam_emptyExtra(array_2_elems, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
array2ExtraOk = type_czech.linkUp(array2ExtraOk, PRE_check_array2ExtraOk) 

function array2ExtraOk(array_2_elems){ }

array2ExtraOk([1, 2, '']) // pass
array2ExtraOk([1, 2], '') // pass
array2ExtraOk([1, 2, ''], '') // pass

array2ExtraOk([1, '']) // fail - second parameter is an empty string ''
```
&copy; 2022 Steen Hansen