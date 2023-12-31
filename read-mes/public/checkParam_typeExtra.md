
## checkParam_typeExtra()

  -  [A Extra Multi Array Parameter Type Check](#a)
  -  [B Extra Object Parameter Type Check](#b) 
  
  -  [C Extra Multi Array Result Type Check](#c)
  -  [D Extra Object Result Type Check](#d)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Extra Multi Array Parameter Type Check<a id="a"></a>

```
function PRE_check_arrayExtra(single_array_with_extra){
  return type_czech.checkParam_typeExtra(single_array_with_extra, ['number', 'string'])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
arrayExtra = type_czech.linkUp(arrayExtra, PRE_check_arrayExtra) 

function arrayExtra(single_array_with_extra){ }

arrayExtra([1, 'Abba']) // pass

arrayExtra([1984, 'Blondie', false, [], {}]) // pass

arrayExtra([0])  // fail - not a number
```


## B Extra Object Parameter Type Check<a id="b"></a>

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







## C Extra Multi Array Result Type Check<a id="c"></a>

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

arrayExtra([false, 'a-boolean'])  // fail - not number
```









## D Extra Object Result Type Check<a id="d"></a>

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



&copy; 2024 Steen Hansen