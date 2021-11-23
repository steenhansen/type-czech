
## checkArgs_emptyVariadic()

  -  [1 Variadic Empty Parameter Check](#variadic-empty-parameter-check)  
  -  [2 Limited Variadic Empty Parameter Check](#limited-variadic-empty-parameter-check)  

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 1 Variadic Empty Parameter Check<a name="variadic-empty-parameter-check"></a>
  
```
function PRE_check_someVariables(){
  return type_czech.checkArgs_emptyVariadic(arguments, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
someVariables = type_czech.linkUp(someVariables, PRE_check_someVariables) 

function someVariables(){ }

someVariables('abcd',5,6) // pass

someVariables()   // PRE fail - no parameters
someVariables('') // PRE fail - '' is empty
someVariables([]) // PRE fail - [] is empty
someVariables({}) // PRE fail - {} is emtpy
```

## 2 Limited Variadic Empty Parameter  Check<a name="limited-variadic-empty-parameter-check"></a>
  
```
function PRE_check_someVariables(){
  if (arguments.length < 4 || arguments.length > 5) 
    return 'Error, must have 4 or 5 numbers, not ' + arguments.length
  return type_czech.checkArgs_emptyVariadic(arguments, ['EMPTY-ERROR'])
}

type_czech = TypeCzech('LOG-ERRORS')
someVariables = type_czech.linkUp(someVariables, PRE_check_someVariables) 

function someVariables(){ }

someVariables('abcd',2,3,4)   // pass
someVariables('abcd',2,3,4,5) // pass

someVariables('abcd',2,3,'')   // PRE fail - '' is empty   
someVariables('abcd',2,3,4,[]) // PRE fail - [] is empty   
someVariables({},2,3,4,)       // PRE fail - {} is emtpy

```







 &copy; 2021 Steen Hansen



