
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
        /**/    all_types = [ 'Array', 'BigInt', 'Boolean', 'Date', 'Function', 
        /**/                  'Number', 'Object', 'RegExp', 'String', 'Symbol' ]
        /**/    return type_czech.check_type(arguments, all_types)
        /**/  }
        /**/
        /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

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
        /**/    all_types = { the_array:'Array', the_bigInt:'BigInt', the_boolean:'Boolean', 
        /**/                  the_date:'Date', the_function:'Function', the_number:'Number',
        /**/                   the_object:'Object', the_regExp:'RegExp', the_string:'String',
        /**/                    the_symbol:'Symbol' }
        /**/    return type_czech.check_type(arguments, all_types)
        /**/  }
        /**/
        /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

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
- ['String']
- ['Array', 'Array']
- ['Object', 'Date', 'Function']
- ['1', true, 'three', [ [1], [2], [3] ], {a: 'A', b:'B'}]

Example of an array parameter that contains numbers:

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['Number'])

        /**/    return type_czech.check_type(arguments, 'Number')
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(array_all){ console.log(array_all) }

    yourFunc([1])                 // pass
    yourFunc([0,1,2,3,4,5,7,8,9]) // pass

Example of an array parameters that has many different types:

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['Number', 'String', 'Boolean', 'Date'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(array_all){ console.log(array_all) }

    yourFunc(1, 'a-string', false, new Date('1999-12-31')) // pass

Exactly one number parameter.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, 'Number')
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(){ console.log(arguments) }

    yourFunc(1)  // pass

Exactly two number parameters.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['Number', 'Number'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(){ console.log(arguments) }

    yourFunc(1)       //fail
    yourFunc(1,2)     //pass
    yourFunc(1,2,3)   //fail

   

### Valid Objects containing values
Curly braces must enclose least one JavaScript type
- {a_key: 'String'}
- {an_array: 'Array'}
- {obj_1: 'Object', arr_1: 'Array', obj_2:{a:'A'}, arr_2: [ 1,2,3]}


    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    all_types = { the_array:'Array', the_object:'Object', the_bigInt:'BigInt',
    /**/                 the_numb_array: [['Number']], 
    /**/                 the_char_object:{a:'String', b:'String'} }
    /**/    return type_czech.check_type(arguments, all_types)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(array_all){ console.log(array_all) }

    the_array = [1, true, 'three']
    the_object = {the_key:77}
    the_bigInt = 1234567890n
    the_numb_array = [ [1], [2], [3] ]
    the_char_object = {a: 'A', b:'B'} 
    yourFunc({ the_array, the_object, the_bigInt,
                                         the_numb_array, the_char_object}) // pass

















### Validate parameters by Type

Validate that there is one parameter which is an array.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, 'Array')
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(an_array){ console.log(an_array) }
    
    yourFunc([1, 'pass', true]) // pass
    yourFunc('fail-array')      // fail

Check that there are two parameters, a string, and a number.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['String', 'Number'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(an_str, a_num){ console.log(an_str, a_num) }
    
    yourFunc('pass', 17)            // pass
    yourFunc('str1', 'fail-number') // fail

Verify that there is one parameter which is an array of numbers.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['Number'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(an_array){ console.log(an_array) }
    
    yourFunc([1, 2, 3])                // pass
    yourFunc([1, 'fail-num-array', 3]) // fail

Certify that there is one parameter which is an object that contains two objects.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, {obj_1:'Object', obj_2:'Object'})
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(an_object){ console.log(an_object) }
    
    yourFunc({   obj_1:{my_num:'one'},   obj_2:{a_string:'pass'}   })       // pass 
    yourFunc({   obj_1:{my_num:'one'},   obj_2:'fail-object'             }) // fail

Establish that there is one parameter which has this object structure.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, {Array_1:['String', 'Number', {oBj_2:[/**/  {C:'Boolean'}]}]})
    /**/  }
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(deep_object){ console.log(deep_object) }
    
    yourFunc({   Array_1:['one', 0,   {oBj_2:   [{C:true}]   }   ]   })          // pass
    yourFunc({   Array_1:['one', 0,   {oBj_2:   [{C:'fail-object'}]   }   ]   }) // fail

Confirm that there is one parameter which is an array that contains two arrays.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['Array', 'Array'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(array_array){ console.log(array_array) }
    
    yourFunc([  [1, x=>x, 'three'], [new Date(1999,12,31), {a_key:'object'}]  ]) // pass
    yourFunc([ ['need', 'two', 'arrays', 'not', 'one'] ])                        // fail

Affirm that an object can hold plain and typed objects and arrays.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    your_signature = {  obj_a: 'Object', 
    /**/                        arr_1: 'Array', 
    /**/                        obj_b: {b:'String'}, 
    /**/                        arr_2: ['Number']  }
    /**/    return type_czech.check_type(arguments, your_signature)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(complicated_obj){ console.log(complicated_obj) }
    
    yourFunc({  obj_a: {a: x=>x},
                arr_1: [1,'two', false],
                obj_b: {b:'b'},
                arr_2: [1,2,3]  })                 // pass
    yourFunc({  obj_a: {a: x=>x},
                arr_1: [1,'two', false],
                obj_b: {b:'b'},
                arr_2: [1,2,'this fails here']  }) // fail


Affirm that an array can hold plain and typed objects and arrays.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    your_signature = [ 'Object', 'Array', {b:'String'}, ['Number'] ]
    /**/    return type_czech.check_type(arguments, your_signature)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

    function yourFunc(complicated_obj){ console.log(complicated_obj) }
    
    yourFunc([  {a: x=>x}, [1,'two', false], {b:'b'}, [1,2,3]  ])           // pass
    yourFunc([  {a: x=>x}, [1,'two', false], {b:'b'}, [1,2,'FAIL HERE']  ]) // fail






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
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc) 

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
    /**/  yourFunc = type_czech.link(yourFunc, PRE_check_yourFunc)

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
    /**/  yourFunc = type_czech.link(yourFunc, undefined, POST_check_yourFunc) 
    
    function yourFunc(a_number){ return a_number + 11 }

    yourFunc(99)  // pass
    yourFunc(22)  // fail Error, '33' is too small
    yourFunc(199) // fail Error, '210' is too large

Note that these above example programs can be run in the console when TypeCzech/web-resources/test-console-repl.html is loaded in a web browser.


&copy; 2021 Steen Hansen
