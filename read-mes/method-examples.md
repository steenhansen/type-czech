
## check_type()

### JavaScript Types
- Array
- BigInt
- Boolean
- Date
- Function
- Number
- Object
- RegExp
- String
- Symbol

Example of every scalar type being checked in an array:

        /**/  type_czech = TypeCzech('LOG-ERRORS')
        /**/  //type_czech = TypeCzech('NO-CHECKING')
        /**/
        /**/  function PRE_check_yourFunc() { 
        /**/    all_types = [ 'array', 'bigint', 'boolean', 'date', 'function', 
        /**/                  'number', 'object', 'regexp', 'string', 'symbol' ]
        /**/    return type_czech.check_type(arguments, all_types)
        /**/  }
        /**/
        /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

        function yourFunc(array_all){ console.log(array_all) }

        the_array = [1, true, 'three']
        the_bigInt = 1234567890n
        the_boolean = true
        the_date = new Date('1999-12-31')
        the_function = x => x
        the_number = 19
        the_object = {the_key:77}
        the_regExp = /^d+$/
        the_string = 'a-string'
        the_symbol = Symbol('the-symbol')
        yourFunc([ the_array, the_bigInt, the_boolean, the_date, the_function,
                the_number, the_object, the_regExp, the_string, the_symbol])   // pass

Example of every scalar type being checked in an object:

        /**/  type_czech = TypeCzech('LOG-ERRORS')
        /**/  //type_czech = TypeCzech('NO-CHECKING')
        /**/
        /**/  function PRE_check_yourFunc() { 
        /**/    all_types = { the_array:'array', the_bigInt:'bigint', the_boolean:'boolean', 
        /**/                  the_date:'date', the_function:'function', the_number:'number',
        /**/                   the_object:'object', the_regExp:'regexp', the_string:'string',
        /**/                    the_symbol:'symbol' }
        /**/    return type_czech.check_type(arguments, all_types)
        /**/  }
        /**/
        /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

        function yourFunc(array_all){ console.log(array_all) }

        the_array = [1, true, 'three']
        the_bigInt = 1234567890n
        the_boolean = true
        the_date = new Date('1999-12-31')
        the_function = x => x
        the_number = 19
        the_object = {the_key:77}
        the_regExp = /^d+$/
        the_string = 'a-string'
        the_symbol = Symbol('the-symbol')
        yourFunc({ the_array, the_bigInt, the_boolean, the_date, the_function,
                the_number, the_object, the_regExp, the_string, the_symbol})   // pass



### Array Parameters
Square brackets [] enclose least one JavaScript type
- ['string']
- ['array', 'array']
- ['object', 'date', 'function']
- ['1', true, 'three', [ [1], [2], [3] ], {a: 'A', b:'B'}]

Example of an array parameter that contains numbers:

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['number'])

        /**/    return type_czech.check_type(arguments, 'number')
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(array_all){ console.log(array_all) }

    yourFunc([1])                 // pass
    yourFunc([0,1,2,3,4,5,7,8,9]) // pass

Example of an array parameters that has many different types:

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['number', 'string', 'boolean', 'date'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(array_all){ console.log(array_all) }

    yourFunc(1, 'a-string', false, new Date('1999-12-31')) // pass

Exactly one number parameter.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, 'number')
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(){ console.log(arguments) }

    yourFunc(1)  // pass

Exactly two number parameters.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['number', 'number'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(){ console.log(arguments) }

    yourFunc(1)       //fail
    yourFunc(1,2)     //pass
    yourFunc(1,2,3)   //fail

   

### Valid Objects containing values
Curly braces must enclose least one JavaScript type
- {a_key: 'string'}
- {an_array: 'array'}
- {obj_1: 'object', arr_1: 'array', obj_2:{a:'A'}, arr_2: [ 1,2,3]}


    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    all_types = { the_array:'array', the_object:'object', the_bigInt:'bigint',
    /**/                 the_numb_array: [['number']], 
    /**/                 the_char_object:{a:'string', b:'string'} }
    /**/    return type_czech.check_type(arguments, all_types)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(array_all){ console.log(array_all) }

    the_array = [1, true, 'three']
    the_object = {the_key:77}
    the_bigInt = 1234567890n
    the_numb_array = [ [1], [2], [3] ]
    the_char_object = {a: 'A', b:'B'} 
    yourFunc({ the_array, the_object, the_bigInt,
                                         the_numb_array, the_char_object}) // pass


















### Validate parameters by value

Demonstrate that a parameter value is in a set of values.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc(a_color) { 
    /**/    allowed_colors = ['red', 'green', 'blue']
    /**/    if (!allowed_colors.includes(a_color))
    /**/      return "PRE: bad color '" + a_color + "' is not in red/green/blue"
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(a_color){ console.log(a_color) }
    
    yourFunc('green')      // pass
    yourFunc('color-fail') // fail

Make certain that a parameter string value is cased correctly.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc(a_name) { 
    /**/    cased_name = new RegExp(/^[A-Z][a-z]* [A-Z][a-z]*$/)
    /**/    good_name = a_name.match(cased_name)
    /**/    if (!good_name) 
    /**/      return `Error, '${a_name}' is not cased correctly`
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc)

    function yourFunc(a_name){ console.log(a_name) }
    
    yourFunc('Bob Marley')  // pass
    yourFunc('king philip') // fail
    

### Validate returned results

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function POST_check_yourFunc(num_result) { 
    /**/    if (num_result<100) 
    /**/      return `Error, '${num_result}' is too small`
    /**/    if (num_result>199)
    /**/      return `Error, '${num_result}' is too Large`
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, undefined, POST_check_yourFunc) 
    
    function yourFunc(a_number){ return a_number + 11 }

    yourFunc(99)  // pass
    yourFunc(22)  // fail Error, '33' is too small
    yourFunc(199) // fail Error, '210' is too large

Note that these above example programs can be run in the console when TypeCzech/web-resources/test-console-repl.html is loaded in a web browser.


&copy; 2021 Steen Hansen
