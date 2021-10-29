
## check_emptyExtra()
  -  [0 Illegal Extra Single Array Parameter Empty Check](#illigal-extra-single-array-parameter-empty-check)

  -  [1 Extra Multi Array Parameter Empty Check](#extra-multi-array-parameter-empty-check)
  -  [2 Extra Object Parameter Empty Check](#extra-object-parameter-empty-check) 

  -  [3 Extra Multi Array Result Empty Check](#extra-multi-array-result-empty-check)
  -  [4 Extra Object Result Empty Check](#extra-object-result-empty-check)

## 0 Illegal Extra Parameter Empty Check<a name="illigal-extra-single-array-parameter-empty-check"></a>

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







## 1 Extra Multi Array Parameter Empty Check<a name="extra-multi-array-parameter-empty-check"></a>

```
function PRE_check_arrayExtra(){
  return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
arrayExtra = type_czech.linkUp(arrayExtra, PRE_check_arrayExtra) 

function arrayExtra(single_array_with_extra){
}

arrayExtra([1, 'Abba'])

arrayExtra([1984, 'Blondie', false, [], {}])

arrayExtra([0])  // PRE error
```


## 2 Extra Object Parameter Empty Check<a name="extra-object-parameter-empty-check"></a>

```
function PRE_check_objectExtra(){
  return type_czech.check_emptyExtra(arguments, {song: 'EMPTY-ERROR'})
}

type_czech = TypeCzech('LOG-ERRORS')
objectExtra = type_czech.linkUp(objectExtra, PRE_check_objectExtra) 

function objectExtra(single_object_with_extra){
}

objectExtra({song:'Deacon Blues'})

objectExtra({song:'Peg', album:'Aja' })

objectExtra({album:'Gaucho' })  // PRE error
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

arrayExtra([1991, 'Nirvana'])

arrayExtra([1991, 'Nevermind', false, [], {}])

arrayExtra([43])  // PRE error
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

objectExtra({song:'Take a Chance With Me'})

objectExtra({song:'More Than This', album:'Avalon' })

objectExtra({album:'Avalon' })  // PRE error
```



&copy; 2021 Steen Hansen