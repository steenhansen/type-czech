
## checkArgs_typeVariadic()

  -  [1 Variadic Parameter Type Check](#variadic-parameter-type-check)  
  -  [2 Limited Variadic Parameter Type Check](#limited-variadic-parameter-type-check)  

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 1 Variadic Parameter Type Check<a name="variadic-parameter-type-check"></a>
  
```
function PRE_check_someNumbers(){
  return type_czech.checkArgs_typeVariadic(arguments, ['number'])
}

type_czech = TypeCzech('LOG-ERRORS')
someNumbers = type_czech.linkUp(someNumbers, PRE_check_someNumbers) 

function someNumbers(){ }

someNumbers(1,2,3,4,5) // pass

someNumbers() // PRE fail - no parameters
someNumbers('a-string') // PRE fail - not a number
```

## 1 Limited Variadic Parameter Type Check<a name="limited-variadic-parameter-type-check"></a>
  
```
function PRE_check_someNumbers(){
  if (arguments.length < 4 || arguments.length > 5) 
    return 'Error, must have 4 or 5 numbers, not ' + arguments.length
  return type_czech.checkArgs_typeVariadic(arguments, ['number'])
}

type_czech = TypeCzech('LOG-ERRORS')
someNumbers = type_czech.linkUp(someNumbers, PRE_check_someNumbers) 

function someNumbers(){ }

someNumbers(1,2,3)  // PRE fail - 3 parameters

someNumbers(1,2,3,4) // pass
someNumbers(1,2,3,4,5) // pass

someNumbers(1,2,3,4,5,6)  // PRE fail - 6 parameters

```







 &copy; 2021 Steen Hansen


