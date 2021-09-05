
## check() 
Link functions that check the parameters and results of your production functions.
PRE_yourFunc() will execute before yourFunc() without changing any values.
POST_yourFunc(the_result) will run after yourFunc() without changing the results.
Note that function hoisting allows the below example to work
without worrying about the order of function declarations.


    function PRE_yourFunc() { 
      if (error_issue) return 'Something wrong with yourFunc parameters'
    }
   
    function POST_yourFunc(the_results) { 
      if (error_issue) return 'Something amiss with yourFunc results'
    }

    yourFunc = type_czech.check(yourFunc, PRE_yourFunc, POST_yourFunc) 

    function yourFunc(param_1, param_2){
    }

To only check function results, pass 'undefined' in for the before function.

    aFunction = type_czech.check(aFunction, undefined, after_aFunction) 



