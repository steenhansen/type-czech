# Recommended Techniques

## Use PRE_check and POST_check prefixed checking Function Names
Prefix checking function names that run before tested
functions with 'PRE_check_', and prefix 'POST_check_' to checking routines that execute after
tested functions. It is easy to see the relationships this way.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_check_yourFunc(){ /* before check */ }
    /**/  function POST_check_yourFunc(){ /* after check */ }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc, POST_check_yourFunc)

    function yourFunc(){}

## Use arguements Object for before PRE_check 
Use the arguments parameter object to check all parameters.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_check_yourFunc(){
    /**/    return type_czech.check_type(arguments, ['string', 'number'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc)

    function yourFunc(){}



## Use result_value for after POST_check 
Use a result_value parameter to check returned results.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function POST_check_Person(result_value){
    /**/    return type_czech.check_empty(result_value, 'EMPTY-ERROR')
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, undefined, POST_check_yourFunc)

    function yourFunc(){
      return result_value
    }


## Multiple Checked Issues
Return nothing if no error, and include actual
parameters only when actually individually testing them as below.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/
    /**/  function PRE_check_yourFunc(first_name, last_name){
    /**/    type_issue = type_czech.check_type(arguments, ['string', 'string'])
    /**/    if (type_issue) return type_issue
    /**/
    /**/    empty_issue = type_czech.check_empty(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR'])
    /**/    if (empty_issue) return empty_issue
    /**/
    /**/    if (first_name.length===1) return 'Error, first_name is 1 character'
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc)

    function yourFunc(first_name, last_name){}
    
    yourFunc('Mr', 'Early')

    yourFunc('Mr', 99)  // error

    yourFunc('Mr', '')  // error
    
    yourFunc('A', 'Short')  // error

## Loading TypeCzech with Extended Objects
Turn on or off the loading of TypeCzech code by including, or not including, an import
script. This way production code is the same as development except for 
disabling one script tag. This is how examples
[103](../examples-web/103-Extending-Classes-Production/103-Extending-Classes-Production.html),
[203](../examples-web/203-Extending-Closures-Production/203-Extending-Closures-Production.html),
[303](../examples-web/303-Extending-IIFEs-Production/303-Extending-IIFEs-Production.html),
[403](../examples-web/403-Extending-ClassFree-Production/403-Extending-ClassFree-Production.html),
[503](../examples-web/503-Extending-Prototypes-Production/503-Extending-Prototypes-Production.html), and
[603](../examples-web/603-Extending-OLOO-Production/603-Extending-OLOO-Production.html)
work. The TypeCzech files are loaded in order ensuring the classes/methods/functions/objects
are linked together in the correct sequence.

    // <script s r c="../../web-resources/ordered-import.js">

    onLoaded = ([_loaded_files, _import_errors]) => {  
      if (_import_errors) {
        console.log('Error importing js. Loaded_files : ', _loaded_files)
        console.log('                          Errors : ', _import_errors)
      }
      margaret_atwood = Full('Ms.', 'Margaret', 'Atwood');
      margaret_atwood.firstMethod( new Date(1985,1,1))
      margaret_atwood.lastMethod(1987)
      margaret_atwood.fullMethod("The Handmaid's Tale")
    }

    /**/  TYPE_CZECH_START = true
    /**/  //TYPE_CZECH_START = false
    /**/
    /**/  if (typeof orderedImport === 'function' && TYPE_CZECH_START) {
    /**/    TYPE_CZECH_COMMANDS = ['LOG-ERRORS']
    /**/    const CHECKING_CLASS_FILES = ['../../TypeCzech.js',
    /**/                                  './TypeCzech_First.js',
    /**/                                  './TypeCzech_Last.js',
    /**/                                  './TypeCzech_Full.js'  ]
    /**/    orderedImport(CHECKING_CLASS_FILES, onLoaded)
    /**/  } else {
            onLoaded([], [])
    /**/  }

&copy; 2021 Steen Hansen