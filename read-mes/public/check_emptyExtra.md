
## check_emptyExtra()
  -  [0 Illegal Extra Single Array Parameter Empty Check](#illigal-extra-single-array-parameter-empty-check)

  -  [1 Extra Multi Array Parameter Empty Check](#extra-multi-array-parameter-empty-check)
  -  [2 Extra Object Parameter Empty Check](#extra-object-parameter-empty-check) 

  -  [3 Extra Multi Array Result Empty Check](#extra-multi-array-result-empty-check)
  -  [4 Extra Object Result Empty Check](#extra-object-result-empty-check)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 0 Illegal Extra Parameter Empty Check<a name="illigal-extra-single-array-parameter-empty-check"></a>
Because the below example has a one dimensional signature of ['EMPTY-ERROR'] it does not
work. The signature ['EMPTY-ERROR'] means an array of any size that has no empty elements. The signatures of check_emptyExtra() that deal with arrays must have at least two elements in the signature. The function check_typeExtra() has the same issue.
```
function PRE_check_illegalArrayExtra(){
  return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
illegalArrayExtra = type_czech.linkUp(illegalArrayExtra, PRE_check_illegalArrayExtra) 

function illegalArrayExtra(single_array_with_extra){
}

illegalArrayExtra([1, 2, 3])  // PRE error - try [EMPTY-ERROR, EMPTY-ERROR] as ["EMPTY-ERROR"] is prohibited.
```

The below example has followed the suggestion of the above error message, and makes sure there are no empty
elements in an array.
```
function PRE_check_noEmptyElementsArray(){
  return type_czech.check_empty(arguments, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
noEmptyElementsArray = type_czech.linkUp(noEmptyElementsArray, PRE_check_noEmptyElementsArray) 

function noEmptyElementsArray(single_array_with_extra){
}

noEmptyElementsArray([1, 'cat', false]) // pass

noEmptyElementsArray([1, 'cat', '']) // PRE fail - last parameter is empty
```

The below example works because there are two elements in the array signature. This ensures that the first two parameters are not empty, and ignores the rest.
```
function PRE_check_arrayExtraOk(){
  return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
arrayExtraOk = type_czech.linkUp(arrayExtraOk, PRE_check_arrayExtraOk) 

function arrayExtraOk(single_array_with_extra){ }

arrayExtraOk([1, 2, '']) // pass

arrayExtraOk([1, '']) // PRE fail - second parameter is an empty string ''

```




## 1 Extra Multi Array Parameter Empty Check<a name="extra-multi-array-parameter-empty-check"></a>

```
function PRE_check_arrayExtra(){
  return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
arrayExtra = type_czech.linkUp(arrayExtra, PRE_check_arrayExtra) 

function arrayExtra(single_array_with_extra){ }

arrayExtra([1, 'Abba']) // pass

arrayExtra([1984, 'Blondie', false, [], {}]) // pass

arrayExtra([0])  // PRE fail - missing second parameter
```


## 2 Extra Object Parameter Empty Check<a name="extra-object-parameter-empty-check"></a>

```
function PRE_check_objectExtra(){
  return type_czech.check_emptyExtra(arguments, {song: 'EMPTY-ERROR'})
}

type_czech = TypeCzech('LOG-ERRORS')
objectExtra = type_czech.linkUp(objectExtra, PRE_check_objectExtra) 

function objectExtra(single_object_with_extra){ }

objectExtra({song:'Deacon Blues'}) // pass

objectExtra({song:'Peg', album:'Aja' }) // pass

objectExtra({album:'Gaucho' })  // PRE fail - no song
```







## 3 Extra Multi Array Result Empty Check<a name="extra-multi-array-result-empty-check"></a>

```
function POST_check_arrayExtra(return_result){
  return type_czech.check_emptyExtra(return_result, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
arrayExtra = type_czech.linkUp(arrayExtra, undefined, POST_check_arrayExtra) 

function arrayExtra(single_array_with_extra){
  return single_array_with_extra
}

arrayExtra([1991, 'Nirvana']) // pass

arrayExtra([1991, 'Nevermind', false, [], {}]) // pass

arrayExtra([43])  // PRE fail - no second parameter
```









## 4 Extra Object Result Empty Check<a name="extra-object-result-empty-check"></a>

```
function POST_check_objectExtra(return_result){
  return type_czech.check_emptyExtra(return_result, {song: 'EMPTY-ERROR'})
}

type_czech = TypeCzech('LOG-ERRORS')
objectExtra = type_czech.linkUp(objectExtra, POST_check_objectExtra) 

function objectExtra(single_object_with_extra){
  return single_object_with_extra
}

objectExtra({song:'Take a Chance With Me'}) // pass

objectExtra({song:'More Than This', album:'Avalon' }) // pass

objectExtra({album:'Avalon' })  // PRE fail - no song property
```



&copy; 2021 Steen Hansen