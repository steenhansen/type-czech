

## checkParam_emptyEither()

  -  [A Either Parameter Type Check](#A)
  -  [B Either Array Parameter Type Check](#B)
  -  [C Either Empty Result Check](#C)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Either Parameter Type Check<a name="A"></a>
  
```
function PRE_check_firstOrSecond(first_str, second_str){
  empty_err_ok = ['EMPTY-ERROR', 'EMPTY-OK']
  empty_ok_err = ['EMPTY-OK', 'EMPTY-ERROR']
  return type_czech.checkParam_emptyEither([first_str, second_str], [ empty_err_ok, empty_ok_err])
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
firstOrSecond = type_czech.linkUp(firstOrSecond, PRE_check_firstOrSecond) 

function firstOrSecond(first, second){ }

firstOrSecond('full', 'full') // pass
firstOrSecond('full', '')     // pass
firstOrSecond('', 'full')     // pass

firstOrSecond('', '') // PRE fail - both empty

```

## B Either Array Parameter Type Check<a name="B"></a>
  
```
function PRE_check_firstOrSecond(two_elem_array){
  empty_err_ok = ['EMPTY-ERROR', 'EMPTY-OK']
  empty_err_err = ['EMPTY-ERROR', 'EMPTY-ERROR']
  errOk_or_errErr = [ empty_err_ok, empty_err_err]
  return type_czech.checkParam_emptyEither(two_elem_array, errOk_or_errErr)
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
firstOrSecond = type_czech.linkUp(firstOrSecond, PRE_check_firstOrSecond) 

function firstOrSecond(two_elem_array){ }

firstOrSecond(['a', 'b']) // pass
firstOrSecond(['a', ''])  // pass

firstOrSecond(['', 'b']) // fail - first empty

```







## C Either Empty Result Check<a name="C"></a>
  
```
function POST_check_firstOrSecond(results_array){
  empty_err_ok = ['EMPTY-ERROR', 'EMPTY-OK']
  empty_ok_err = ['EMPTY-OK', 'EMPTY-ERROR']
  return type_czech.checkParam_emptyEither(results_array, [ empty_err_ok, empty_ok_err]) 
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
firstOrSecond = type_czech.linkUp(firstOrSecond, undefined, POST_check_firstOrSecond) 

function firstOrSecond(first, second){
  return [first, second]
}

firstOrSecond('full', 'full') // pass
firstOrSecond('full', '')     // pass
firstOrSecond('', 'full')     // pass

firstOrSecond('', '') // POST fail - both empty
```



&copy; 2021 Steen Hansen

