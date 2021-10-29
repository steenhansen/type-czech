

## check_emptyEither()

  -  [1 Either Parameter Type Check](#either-empty-parameter-check)
  -  [2 Either Empty Result Check](#either-empty-result-check)

## 1 Either Parameter Type Check<a name="either-empty-parameter-check"></a>
  
```
function PRE_check_firstOrSecond(){
  empty_err_ok = ['EMPTY-ERROR', 'EMPTY-OK']
  empty_ok_err = ['EMPTY-OK', 'EMPTY-ERROR']
  return type_czech.check_emptyEither(arguments, [ empty_err_ok, empty_ok_err])
}

type_czech = TypeCzech('LOG-ERRORS')
firstOrSecond = type_czech.linkUp(firstOrSecond, PRE_check_firstOrSecond) 

function firstOrSecond(first, second){
}

firstOrSecond('full', 'full')  
firstOrSecond('full', '')  
firstOrSecond('', 'full')  

firstOrSecond('', '')  // PRE errror

```

## 2 Either Empty Result Check<a name="either-empty-result-check"></a>
  
```
function POST_check_firstOrSecond(){
  empty_err_ok = ['EMPTY-ERROR', 'EMPTY-OK']
  empty_ok_err = ['EMPTY-OK', 'EMPTY-ERROR']
  return type_czech.check_emptyEither(arguments, [ empty_err_ok, empty_ok_err])  // arguments version
}
```
```
function POST_check_firstOrSecond(results_array){
  empty_err_ok = ['EMPTY-ERROR', 'EMPTY-OK']
  empty_ok_err = ['EMPTY-OK', 'EMPTY-ERROR']
  return type_czech.check_emptyEither(results_array, [ empty_err_ok, empty_ok_err])  // or parameter version
}

type_czech = TypeCzech('LOG-ERRORS')
firstOrSecond = type_czech.linkUp(firstOrSecond, undefined, POST_check_firstOrSecond) 

function firstOrSecond(first, second){
  return [first, second]
}

firstOrSecond('full', 'full')  
firstOrSecond('full', '')  
firstOrSecond('', 'full')  

firstOrSecond('', '')  // PRE error
```



&copy; 2021 Steen Hansen

