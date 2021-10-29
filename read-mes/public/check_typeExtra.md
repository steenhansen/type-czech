
## check_typeExtra()
  -  [0 Illegal Extra Single Array Parameter Type Check](#illigal-extra-single-array-parameter-type-check)

  -  [1 Extra Multi Array Parameter Type Check](#extra-multi-array-parameter-type-check)
  -  [2 Extra Object Parameter Type Check](#extra-object-parameter-type-check) 
  
  -  [3 Extra Multi Array Result Type Check](#extra-multi-array-result-type-check)
  -  [4 Extra Object Result Type Check](#extra-object-result-type-check)

## 0 Illegal Extra Parameter Type Check<a name="illigal-extra-single-array-parameter-type-check"></a>

```
function PRE_check_illegalArrayExtra(){
  return type_czech.check_typeExtra(arguments, ['number'])
}

type_czech = TypeCzech('LOG-ERRORS')
illegalArrayExtra = type_czech.linkUp(illegalArrayExtra, PRE_check_illegalArrayExtra) 

function illegalArrayExtra(single_array_with_extra){
}

illegalArrayExtra([1, 2, 3])  // PRE error - try [number, number] as ["number"] is illegal
```

## 1 Extra Multi Array Parameter Type Check<a name="extra-multi-array-parameter-type-check"></a>

```
function PRE_check_arrayExtra(){
  return type_czech.check_typeExtra(arguments, ['number', 'string'])
}

type_czech = TypeCzech('LOG-ERRORS')
arrayExtra = type_czech.linkUp(arrayExtra, PRE_check_arrayExtra) 

function arrayExtra(single_array_with_extra){
}

arrayExtra([1, 'Abba'])

arrayExtra([1984, 'Blondie', false, [], {}])

arrayExtra([0])  // PRE error
```


## 2 Extra Object Parameter Type Check<a name="extra-object-parameter-type-check"></a>

```
function PRE_check_objectExtra(){
  return type_czech.check_typeExtra(arguments, {song: 'string'})
}

type_czech = TypeCzech('LOG-ERRORS')
objectExtra = type_czech.linkUp(objectExtra, PRE_check_objectExtra) 

function objectExtra(single_object_with_extra){
}

objectExtra({song:'Deacon Blues'})

objectExtra({song:'Peg', album:'Aja' })

objectExtra({album:'Gaucho' })  // PRE error
```







## 3 Extra Multi Array Result Type Check<a name="extra-multi-array-result-type-check"></a>

```
function POST_check_arrayExtra(return_result){
  return type_czech.check_typeExtra(return_result, ['number', 'string'])
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









## 4 Extra Object Result Type Check<a name="extra-object-result-type-check"></a>

```
function POST_check_objectExtra(return_result){
  return type_czech.check_typeExtra(return_result, {song: 'string'})
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