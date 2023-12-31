
## checkArgs_emptyEach()

  -  [A Variadic Empty Parameter Check](#a)  
  -  [B Limited Variadic Empty Parameter Check](#b)  

Note that the only valid empty signature type for checkArgs_emptyEach() is 'EMPTY-ERROR' and its shortcut 'ER'.
#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Variadic Empty Parameter Check<a id="a"></a>
  
```
function PRE_check_someVariables(){
  return type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
someVariables = type_czech.linkUp(someVariables, PRE_check_someVariables) 

function someVariables(){ }

someVariables('abcd',5,6)          // pass
someVariables('a','b','c','d','e') // pass

someVariables()   // fail - no parameters
someVariables('') // fail - '' is empty
someVariables([]) // fail - [] is empty
someVariables({}) // fail - {} is empty

someVariables(NaN)            // fail - number is empty
someVariables(Infinity)       // fail - number is empty
someVariables(/(?:)/)         // fail - regexp is empty
someVariables(new RegExp("")) // fail - regexp is empty
someVariables(new Date(""))   // fail - date is empty

```

## B Limited Variadic Empty Parameter  Check<a id="b"></a>
  
```
function PRE_check_someVariables(){
  if (arguments.length < 4 || arguments.length > 5) 
    return 'Error, must have 4 or 5 numbers, not ' + arguments.length
  return type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
someVariables = type_czech.linkUp(someVariables, PRE_check_someVariables) 

function someVariables(){ }

someVariables('abcd',2,3,4)   // pass
someVariables('abcd',2,3,4,5) // pass

someVariables('abcd')          // fail - '' one element  
someVariables('abcd',2,3,'')   // fail - '' is empty   
someVariables('abcd',2,3,4,[]) // fail - [] is empty   
someVariables({},2,3,4,)       // fail - {} is empty

```







 &copy; 2024 Steen Hansen



