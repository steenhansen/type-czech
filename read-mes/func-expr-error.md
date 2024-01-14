


## Function Expression Error - Uncaught ReferenceError: myFunction is not defined

Because JavaScript hoists function declarations, this error does not occur with normal functions. The function type_czech.linkUp() needs to have functions declared previously.
```
    type_czech = TypeCzech('LOG-ERRORS')
    
    addXY = type_czech.linkUp(addXY, PRE_addXY)  // both addXY & PRE_addXY already exist because of hoisting

    function PRE_addXY(x, y) {
        return type_czech.checkParam_type([x, y], ['number', 'number'])
    }

function addXY(x, y) { return x + y }
```

Here we get the "Uncaught ReferenceError: addXY is not defined" error since function expressions
are not hoisted. 
```
    type_czech = TypeCzech('LOG-ERRORS')    

    PRE_addXY = (x, y) => type_czech.checkParam_type([x, y], ['number', 'number'])

    addXY = type_czech.linkUp(addXY, PRE_addXY)  // addXY does not exist yet

addXY = (x, y) =>  x + y 
```



Errors are avoided by declaring the function expression before using type_czech.linkUp() 
```
addXY = (x, y) =>  x + y 

    type_czech = TypeCzech('LOG-ERRORS')

    PRE_addXY = (x, y) => type_czech.checkParam_type([x, y], ['number', 'number'])

    addXY = type_czech.linkUp(addXY, PRE_addXY)  // addXY exists
```
