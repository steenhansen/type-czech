# Recommended Techniques

## Use Searchable Prefixed Checking Function Names
Prefix checking function names that run before tested
functions with 'PRE_check_', and prefix 'POST_check_' to checking routines that execute after
tested functions. It is easy to see the relationships this way.
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  function PRE_check_yourFunc(){ /* before check */ }
/**/  function POST_check_yourFunc(){ /* after check */ }
/**/
/**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc, POST_check_yourFunc)

function yourFunc(){}
```

Or by using 'before_' and 'after_' so the error messages make sense.
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  function before_yourFunc(){ /* before check */ }
/**/  function after_yourFunc(){ /* after check */ }
/**/
/**/  yourFunc = type_czech.linkUp(yourFunc, before_yourFunc, after_yourFunc)

function yourFunc(){}
```

## Multiple Checked Issues
Return nothing if no error, and include actual
parameters only when actually individually testing them as below.
```
/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  function PRE_check_yourFunc(first_name, last_name){
/**/    the_parameters = [first_name, last_name]
/**/    type_issue = type_czech.checkParam_type(the_parameters, ['string', 'string'])
/**/    if (type_issue) return type_issue
/**/
/**/    empty_issue = type_czech.checkParam_empty(the_parameters, ['EMPTY-ERROR', 'EMPTY-ERROR'])
/**/    if (empty_issue) return empty_issue
/**/
/**/    if (first_name.length===1) return 'Error, first_name is 1 character'
/**/  }
/**/
/**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc)

function yourFunc(first_name, last_name){}

yourFunc('Mr', 'Early')

yourFunc('Mr', 99)     // fail - number not string
yourFunc('Mr', '')     // fail - empty last name
yourFunc('A', 'Short') // fail - first name is 1 char
```

## Recommended Structure With Classes
Keep TypeCzech code sparate from ordinary files as these local examples do [204](../examples-web/204-Extending-Closures-Single/204-Extending-Closures-Single.html),
[304](../examples-web/304-Extending-IIFEs-Single/304-Extending-IIFEs-Single.html),
[404](../examples-web/404-Extending-ClassFree-Single/404-Extending-ClassFree-Single.html),
[504](../examples-web/504-Extending-Prototypes-Single/504-Extending-Prototypes-Single.html), and
[604](../examples-web/604-Extending-OLOO-Single/604-Extending-OLOO-Single.html).

Easy detaching of TypeCzech can be done as below, without loading any checking code in the browser. When the two javaScript files below are not loaded
then check_linkUp_first_last_full() is not run and no functions are linked up to checking functions.
```
// <script src="../../TypeCzech.js"></script>
// <script src="./604-oloo-external-checks.js"></script>

/**/  if (typeof check_linkUp_first_last_full === 'function') 
/**/    check_linkUp_first_last_full()
```
## Recommended Functional Structure

The file, addInt2Int_tc.js, containing the PRE and POST type checking functions for addInt2Int()
```
// addInt2Int_tc.js

if (typeof TypeCzech !== 'function') {
  linkUp_addInt2Int = () => {}
} else {
  linkUp_addInt2Int = () => {
    type_czech = TypeCzech('LOG-ERRORS')

    function PRE_addInt2Int(first_int, second_int) {
      return type_czech.checkParam_type([first_int, second_int], ['number', 'number'])
    }

    function POST_addInt2Int(sum_int) {
      return type_czech.checkParam_type(sum_int, 'number')
    }
      
    addInt2Int = type_czech.linkUp(addInt2Int, PRE_addInt2Int, POST_addInt2Int)
  }
}
```


The file, main.html, when type checking is ON 
```
<script src="TypeCzech.js">// on </script>

          <script src="addInt2Int_tc.js"></script>

          <script>
            linkUp_addInt2Int()

            function addInt2Int (first_int, second_int){
              return first_int + second_int
            }

          </script>
```

The file, main.html, when type checking is OFF, no need to erase line
```
<script s r c="TypeCzech.js"></script>

          <script src="addInt2Int_tc.js"></script>

          <script>
            linkUp_addInt2Int()

            function addInt2Int (first_int, second_int){
              return first_int + second_int
            }

          </script>
```


&copy; 2024 Steen Hansen