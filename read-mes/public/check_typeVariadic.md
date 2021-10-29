
## check_typeVariadic()

  -  [1 Variadic Parameter Type Check](#variadic-parameter-type-check)  
  -  [2 Limited Variadic Parameter Type Check](#limited-variadic-parameter-type-check)  

## 1 Variadic Parameter Type Check<a name="variadic-parameter-type-check"></a>
  
```
function PRE_check_someNumbers(){
  return type_czech.check_typeVariadic(arguments, ['number'])
}

type_czech = TypeCzech('LOG-ERRORS')
someNumbers = type_czech.linkUp(someNumbers, PRE_check_someNumbers) 

function someNumbers(){
}

someNumbers(1,2,3,4,5)

someNumbers()  // PRE error
someNumbers('a-string')  // PRE error         
```

## 1 Limited Variadic Parameter Type Check<a name="limited-variadic-parameter-type-check"></a>
  
```
function PRE_check_someNumbers(){
  if (arguments.length < 4 || arguments.length > 5) 
    return 'Error, must have 4 or 5 numbers, not ' + arguments.length
  return type_czech.check_typeVariadic(arguments, ['number'])
}

type_czech = TypeCzech('LOG-ERRORS')
someNumbers = type_czech.linkUp(someNumbers, PRE_check_someNumbers) 

function someNumbers(){
}

someNumbers(1,2,3)  // PRE error   

someNumbers(1,2,3,4)
someNumbers(1,2,3,4,5)

someNumbers(1,2,3,4,5,6)  // PRE error   

```







 &copy; 2021 Steen Hansen


