
## The Idea

Is to 'LOG-ERRORS' or 'THROW-EXCEPTIONS' when errors are found and returned from PRE_check() and POST_check() functions that are linked into yourFunction() during testing and development with linkUp().

In the below example, PRE_check_yourFunction() and POST_check_yourFunction() are only executed, via linkUp(), because TypeCzech.js is loaded. The two commented out lines have no effect when <b>TypeCzech.js is loaded</b>. PRE_check_yourFunction() checks function parameters before yourFunction() runs, and POST_check_yourFunction() checks function results after yourFunction() runs.

```
// <script src="TypeCzech.js"></script>

if (typeof TypeCzech === 'function')
  type_czech = TypeCzech('THROW-EXCEPTIONS')  // TypeCzech.js is active
//else
//  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }

function PRE_check_yourFunction(param_1, param_2){
  console.log('PRE', param_1, param_2) // parameters before function execution
}
function POST_check_yourFunction(results){
  console.log('POST', results) // results after function execution
}

yourFunction = type_czech.linkUp(yourFunction, PRE_check_yourFunction, POST_check_yourFunction)

function yourFunction(param_1, param_2){
  console.log('yourFunction()', param_1, param_2)
  return [param_1, param_2]
}

yourFunction(1, 'two')
```

When <b>TypeCzech.js is not loaded</b> only yourFunction() has any effect, as below. Note the linkUp() function is a no-operation when TypeCzech.js is not loaded.

```
//if (typeof TypeCzech === 'function')
//  type_czech = TypeCzech('THROW-EXCEPTIONS')
//else
  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }  // TypeCzech.js was not loaded

//function PRE_check_yourFunction(){ }
//function POST_check_yourFunction(){ }

//yourFunction=type_czech.linkUp(yourFunction, PRE_check_yourFunction, POST_check_yourFunction)

function yourFunction(param_1, param_2){
  console.log('yourFunction()', param_1, param_2)
  return [param_1, param_2]
}

yourFunction(1, 'two')
```

<b>So basically linkUp() and isActive() are the only two TypeCzech functions that are always safe to call,</b>
as long as the below construct is used, regardless of whether or not TypeCzech.js has been loaded. Thus enveloping all TypeCzech calls with linkUp() and isActive() will ensure no reference errors are caused when TypeCzech is turned on or off by not loading the TypeCzech.js file.

```
function aFunction(){ }
function before_aFunction(){ }
function after_aFunction(){ }

if (typeof TypeCzech === 'function')
  type_czech = TypeCzech('THROW-EXCEPTIONS')
else
  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }

type_czech.linkUp(aFunction, before_aFunction, after_aFunction)
type_czech.isActive()
```

