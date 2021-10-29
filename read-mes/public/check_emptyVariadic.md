
## check_emptyVariadic()

  -  [1 Variadic Empty Parameter Check](#variadic-empty-parameter-check)  
  -  [2 Limited Variadic Empty Parameter Check](#limited-variadic-empty-parameter-check)  

## 1 Variadic Empty Parameter Check<a name="variadic-empty-parameter-check"></a>
  
```
function PRE_check_someVariables(){
  return type_czech.check_emptyVariadic(arguments, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
someVariables = type_czech.linkUp(someVariables, PRE_check_someVariables) 

function someVariables(){
}

someVariables('abcd',5,6)

someVariables()  // PRE error
someVariables('')  // PRE error         
someVariables([])  // PRE error         
someVariables({})  // PRE error         
```

## 1 Limited Variadic Empty Parameter  Check<a name="limited-variadic-empty-parameter-check"></a>
  
```
function PRE_check_someVariables(){
  if (arguments.length < 4 || arguments.length > 5) 
    return 'Error, must have 4 or 5 numbers, not ' + arguments.length
  return type_czech.check_emptyVariadic(arguments, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
someVariables = type_czech.linkUp(someVariables, PRE_check_someVariables) 

function someVariables(){
}

someVariables('abcd',2,3,4)
someVariables('abcd',2,3,4,5)

someVariables('abcd',2,3,'')  // PRE error   
someVariables('abcd',2,3,4,[])  // PRE error   
someVariables({},2,3,4,)  // PRE error   

```







 &copy; 2021 Steen Hansen



