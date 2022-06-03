
## checkArgs_typeEach()



  -  [A Variadic Parameter Type Check](#A)  
  -  [B Limited Variadic Parameter Type Check](#B)  
  -  [C Variadic Number Arrays Type Check](#C)  
  -  [D Variadic Objects Type Check](#D)  

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Variadic Parameter Type Check<a name="A"></a>
  
```
function PRE_check_someNumbers(){
  return type_czech.checkArgs_typeEach(arguments, 'number')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
someNumbers = type_czech.linkUp(someNumbers, PRE_check_someNumbers) 

function someNumbers(){ }

someNumbers(1,2,3,4,5) // pass

someNumbers()              // fail - no parameters
someNumbers('a-string')    // fail - not a number
someNumbers(1,'two',3,4,5) // fail - 'two' a number
```

## B Limited Variadic Parameter Type Check<a name="B"></a>
  
```
function PRE_check_someNumbers(){
  if (arguments.length < 4 || arguments.length > 5) 
    return 'Error, must have 4 or 5 numbers, not ' + arguments.length
  return type_czech.checkArgs_typeEach(arguments, 'number')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
someNumbers = type_czech.linkUp(someNumbers, PRE_check_someNumbers) 

function someNumbers(){ }

someNumbers(1,2,3)  // fail - 3 parameters

someNumbers(1,2,3,4) // pass
someNumbers(1,2,3,4,5) // pass

someNumbers(1,2,3,4,5,6)  // fail - 6 parameters

```





## C Variadic Number Arrays Type Check<a name="C"></a>
```
function PRE_check_someNumArrays(){
  return type_czech.checkArgs_typeEach(arguments, 'numbers')
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
someNumArrays = type_czech.linkUp(someNumArrays, PRE_check_someNumArrays) 

function someNumArrays(){ }

someNumArrays([1],[1,2],[1,2,3],[1,2,3,4]) // pass

someNumArrays()                      // fail - no parameters
someNumArrays('a-string')            // fail - not a number
someNumArrays([1],[1,false],[1,2,3]) // fail - false  a number
```


## D Variadic Objects Type Check<a name="D"></a>
```
function PRE_check_someObjects(){
  return type_czech.checkArgs_typeEach(arguments, {age:'number', color:'string'} )
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
someObjects = type_czech.linkUp(someObjects, PRE_check_someObjects) 

function someObjects(){ }

someObjects({age:29, color:'grue'}) // pass
someObjects({age:NaN, color:''})    // pass
someObjects({age:1, color:'red'}, {age:2, color:'green'}, {age:1, color:'blue'})    // pass

someObjects()                      // fail - no parameters
someObjects('a-string')            // fail - not a number
someObjects( {age:29, color:1492}) // fail - color a number
```




 &copy; 2022 Steen Hansen


