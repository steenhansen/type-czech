

## checkParam_emptyEither()

  -  [1 Either Parameter Type Check](#either-empty-parameter-check)
  -  [2 Either Empty Result Check](#either-empty-result-check)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 1 Either Parameter Type Check<a name="either-empty-parameter-check"></a>
  
```
function PRE_check_firstOrSecond(first_str, second_str){
  empty_err_ok = ['EMPTY-ERROR', 'EMPTY-OK']
  empty_ok_err = ['EMPTY-OK', 'EMPTY-ERROR']
  return type_czech.checkParam_emptyEither([first_str, second_str], [ empty_err_ok, empty_ok_err])
}

type_czech = TypeCzech('LOG-ERRORS')
firstOrSecond = type_czech.linkUp(firstOrSecond, PRE_check_firstOrSecond) 

function firstOrSecond(first, second){ }

firstOrSecond('full', 'full') // pass
firstOrSecond('full', '')     // pass
firstOrSecond('', 'full')     // pass

firstOrSecond('', '') // PRE fail - both empty

```

## 2 Either Empty Result Check<a name="either-empty-result-check"></a>
  
```
function POST_check_firstOrSecond(results_array){
  empty_err_ok = ['EMPTY-ERROR', 'EMPTY-OK']
  empty_ok_err = ['EMPTY-OK', 'EMPTY-ERROR']
  return type_czech.checkParam_emptyEither(results_array, [ empty_err_ok, empty_ok_err]) 
}

type_czech = TypeCzech('LOG-ERRORS')
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

