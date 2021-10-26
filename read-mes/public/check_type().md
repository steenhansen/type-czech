## check_type() 

  -  Single Parameter Checks
  -  Single Result Checks
  -  Single Array Type    ['number'] 1,2,3,4,5 add one to each

  - by value in ['red', 'blug', 'grue'] 
            and regEx 
            and ONLY_EVEN_NUMBERS

  - [ONE,TWO]

  30 — HTML Element Type Checks


## Single Parameter Checks
  1.Check that a function has a single number parameter.
    
      type_czech = TypeCzech('THROW-EXCEPTIONS')

      function PRE_check_oneNumber(){
        return type_czech.check_type(arguments, 'number')
      }

      oneNumber = type_czech.linkUp(oneNumber, PRE_check_oneNumber) 

      function oneNumber(a_number){
      }
     
      oneNumber(12)  
      oneNumber('a-string') // PRE error         


  2.Check that a function has a single array parameter.
    
      type_czech = TypeCzech('THROW-EXCEPTIONS')

      function PRE_check_oneArray(){
        return type_czech.check_type(arguments, 'array')
      }

      oneArray = type_czech.linkUp(oneArray, PRE_check_oneArray) 

      function oneArray(an_array){
      }
     
      oneArray([1, 'two', {a:1}, [] ])  
      oneArray({a:1}) // PRE error         

  3.Check that a function has a single object parameter.
    

      type_czech = TypeCzech('THROW-EXCEPTIONS')

      function PRE_check_oneObject(){
        return type_czech.check_type(arguments, 'object')
      }

      oneObject = type_czech.linkUp(oneObject, PRE_check_oneObject) 

      function oneObject(an_array){
      }
     
      oneObject({a:1, b:'two', c:{a:1}, d:[] })  
      oneObject([]) // PRE error         

## Single Result Checks

  1.Check that a function returns a string.
    

      type_czech = TypeCzech('THROW-EXCEPTIONS')

      function POST_check_returnString(){
        return type_czech.check_type(arguments, 'string')
      }

      returnString = type_czech.linkUp(returnString, undefined, POST_check_returnString) 

      function returnString(a_var){
        return a_var
      }
     
      returnString('two')  
      returnString(false) // POST error         

  2.Check that a function returns an object having key 'a-number' with a number,
   and key 'a_string' with a string.
    

      type_czech = TypeCzech('LOG-ERRORS')

      function POST_check_returnNumString(){
        return type_czech.check_type(arguments, {'a-number':'number', a_string:'string'})
      }

      returnNumString = type_czech.linkUp(returnNumString, undefined, POST_check_returnNumString) 

      function returnNumString(a_num, a_str){
        return {'a-number':a_num, a_string:a_str}
      }
     
      returnNumString(2, 'three')  
      returnNumString('four', 5) // POST error         

  3.Check that a function returns an array with a number and a string.
    

      type_czech = TypeCzech('LOG-ERRORS')

      function POST_check_returnNumString(){
        return type_czech.check_type(arguments, ['number', 'string'])
      }

      returnNumString = type_czech.linkUp(returnNumString, undefined, POST_check_returnNumString) 

      function returnNumString(a_num, a_str){
        return [a_num, a_str]
      }
     
      returnNumString(2, 'three')  
      returnNumString('four', 5) // POST error         









/////////////////////////////////////////////
















  A. ...Check that parameters are a Number and a Boolean followed by a Date.
   
      type_error = type_czech.check_type(arguments, ['number', 'boolean', 'date'])


  C. ...Check that there are exactly two Numbers as arguments.
    
      type_error = type_czech.check_type(arguments, ['number', 'number'])

  D. ...One array of Numbers, with any number of elements; from 0 ... x elements. 
     
      type_error = type_czech.check_type(arguments, ['number'])

  E. ...Two arrays of Numbers with exactly two elements each.
     
      type_error = type_czech.check_type(arguments, [ ['number', 'number'], ['number', 'number'] ])

  F. ....One array of arrays of two Numbers.
     
      type_error = type_czech.check_type(arguments, [ ['number', 'number'] ])

  G. ...One Array with any type of contents.
     
      type_error = type_czech.check_type(arguments, 'array')

  H. ...One Object with any type of contents.
     
      type_error = type_czech.check_type(arguments, 'object')

  I. ...One Objects with x and y keys that are Numbers.
     
      type_error = type_czech.check_type(arguments, {x:'number', y:'number'})

  J. ...One Array with any number of Objects with x and y keys that are Numbers.
    
      type_error = type_czech.check_type(arguments, [{x:'number', y:'number'}])

  K. ....Check only one parameter type of many.
     
      type_error = type_czech.check_type(param_2, 'number'})

  L. ...Check two parameter types of many.
      
      type_error = type_czech.check_type([param_1, param_3], ['number'])

  M. ....Variadic function that excepts only Numbers.
     
      type_error = type_czech.check_type([...arguments], ['number'])


n check_type a return result, number, object, array
    


&copy; 2021 Steen Hansen





### Validate parameters by Type

Validate that there is one parameter which is an array.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, 'array')
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(an_array){ console.log(an_array) }
    
    yourFunc([1, 'pass', true]) // pass
    yourFunc('fail-array')      // fail

Check that there are two parameters, a string, and a number.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['string', 'number'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(an_str, a_num){ console.log(an_str, a_num) }
    
    yourFunc('pass', 17)            // pass
    yourFunc('str1', 'fail-number') // fail

Verify that there is one parameter which is an array of numbers.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['number'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(an_array){ console.log(an_array) }
    
    yourFunc([1, 2, 3])                // pass
    yourFunc([1, 'fail-num-array', 3]) // fail

Certify that there is one parameter which is an object that contains two objects.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, {obj_1:'object', obj_2:'object'})
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(an_object){ console.log(an_object) }
    
    yourFunc({   obj_1:{my_num:'one'},   obj_2:{a_string:'pass'}   })       // pass 
    yourFunc({   obj_1:{my_num:'one'},   obj_2:'fail-object'             }) // fail

Establish that there is one parameter which has this object structure.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, {Array_1:['string', 'number', {oBj_2:[/**/  {C:'boolean'}]}]})
    /**/  }
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(deep_object){ console.log(deep_object) }
    
    yourFunc({   Array_1:['one', 0,   {oBj_2:   [{C:true}]   }   ]   })          // pass
    yourFunc({   Array_1:['one', 0,   {oBj_2:   [{C:'fail-object'}]   }   ]   }) // fail

Confirm that there is one parameter which is an array that contains two arrays.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    return type_czech.check_type(arguments, ['array', 'array'])
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(array_array){ console.log(array_array) }
    
    yourFunc([  [1, x=>x, 'three'], [new Date(1999,12,31), {a_key:'object'}]  ]) // pass
    yourFunc([ ['need', 'two', 'arrays', 'not', 'one'] ])                        // fail

Affirm that an object can hold plain and typed objects and arrays.

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  //type_czech = TypeCzech('NO-CHECKING')
    /**/
    /**/  function PRE_check_yourFunc() { 
    /**/    your_signature = {  obj_a: 'object', 
    /**/                        arr_1: 'array', 
    /**/                        obj_b: {b:'string'}, 
    /**/                        arr_2: ['number']  }
    /**/    return type_czech.check_type(arguments, your_signature)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

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
    /**/    your_signature = [ 'object', 'array', {b:'string'}, ['number'] ]
    /**/    return type_czech.check_type(arguments, your_signature)
    /**/  }
    /**/
    /**/  yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc) 

    function yourFunc(complicated_obj){ console.log(complicated_obj) }
    
    yourFunc([  {a: x=>x}, [1,'two', false], {b:'b'}, [1,2,3]  ])           // pass
    yourFunc([  {a: x=>x}, [1,'two', false], {b:'b'}, [1,2,'FAIL HERE']  ]) // fail


