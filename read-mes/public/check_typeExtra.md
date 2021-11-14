
## check_typeExtra()
  -  [0 Illegal Extra Single Array Parameter Type Check](#illigal-extra-single-array-parameter-type-check)

  -  [1 Extra Multi Array Parameter Type Check](#extra-multi-array-parameter-type-check)
  -  [2 Extra Object Parameter Type Check](#extra-object-parameter-type-check) 
  
  -  [3 Extra Multi Array Result Type Check](#extra-multi-array-result-type-check)
  -  [4 Extra Object Result Type Check](#extra-object-result-type-check)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 0 Illegal Extra Parameter Type Check<a name="illigal-extra-single-array-parameter-type-check"></a>
Because the below example has a one dimensional signature of ['number'] it does not
work. The signature ['number'] means an array of any size that has numbers. The signatures of check_typeExtra() that deal with arrays must have at least two elements in the signature. The function check_emptyExtra() has the same issue.
```
function PRE_check_illegalArrayExtra(){
  return type_czech.check_typeExtra(arguments, ['number'])
}

type_czech = TypeCzech('LOG-ERRORS')
illegalArrayExtra = type_czech.linkUp(illegalArrayExtra, PRE_check_illegalArrayExtra) 

function illegalArrayExtra(single_array_with_extra){ }

illegalArrayExtra([1, 2, 3])  // PRE fail - try [number, number] as ["number"] is illegal
```



The below example has followed the suggestion of the above error message, and makes sure that all 
elements in an array are numbers.
```
function PRE_check_onlyNumbersArray(){
  return type_czech.check_type(arguments, ['number'])
}

type_czech = TypeCzech('LOG-ERRORS')
onlyNumbersArray = type_czech.linkUp(onlyNumbersArray, PRE_check_onlyNumbersArray) 

function onlyNumbersArray(single_array_with_extra){ }

onlyNumbersArray([1, 2, 3]) // pass

onlyNumbersArray([1, 2, 'doge']) // PRE fail - 'doge' is not a number
```

The below example works because there are two elements in the array signature. This ensures that the first parameters is a number, the 
second a string, and ignores the rest.
```
function PRE_check_arrayExtraOk(){
  return type_czech.check_typeExtra(arguments, ['number', 'string'])
}

type_czech = TypeCzech('LOG-ERRORS')
arrayExtraOk = type_czech.linkUp(arrayExtraOk, PRE_check_arrayExtraOk) 

function arrayExtraOk(single_array_with_extra){ }

arrayExtraOk([1, 'Rock Lobster', 'un-checked-extra']) // pass

arrayExtraOk([1, 2, 'un-checked-fail']) // PRE fail 2 is not a string

```


## 1 Extra Multi Array Parameter Type Check<a name="extra-multi-array-parameter-type-check"></a>

```
function PRE_check_arrayExtra(){
  return type_czech.check_typeExtra(arguments, ['number', 'string'])
}

type_czech = TypeCzech('LOG-ERRORS')
arrayExtra = type_czech.linkUp(arrayExtra, PRE_check_arrayExtra) 

function arrayExtra(single_array_with_extra){ }

arrayExtra([1, 'Abba']) // pass

arrayExtra([1984, 'Blondie', false, [], {}]) // pass

arrayExtra([0])  // PRE fail - missing 2nd string parameter
```


## 2 Extra Object Parameter Type Check<a name="extra-object-parameter-type-check"></a>

```
function PRE_check_objectExtra(){
  return type_czech.check_typeExtra(arguments, {song: 'string'})
}

type_czech = TypeCzech('LOG-ERRORS')
objectExtra = type_czech.linkUp(objectExtra, PRE_check_objectExtra) 

function objectExtra(single_object_with_extra){ }

objectExtra({song:'Deacon Blues'}) // pass

objectExtra({song:'Peg', album:'Aja' }) // pass

objectExtra({album:'Gaucho' })  // PRE fail - missing 'song' property
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

arrayExtra([1991, 'Nirvana']) // pass

arrayExtra([1991, 'Nevermind', false, [], {}]) // pass

arrayExtra([43])  // PRE fail - missing 2nd string in result
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

objectExtra({song:'Take a Chance With Me'}) // pass

objectExtra({song:'More Than This', album:'Avalon' }) // pass

objectExtra({album:'Avalon' })  // PRE fail - missing song property in result
```



&copy; 2021 Steen Hansen