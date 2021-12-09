
## Arrays of Empties


#### All examples below can be executed in the console of [repl.html](../test-collection/repl.html)

Check for Empty Parameters:
  -  [A - Single Empty](#single-empty)


### A - Single Empty Empty Parameter<a name="single-empty"></a>

    /**/  type_czech = TypeCzech('LOG-ERRORS')
    /**/  
    /**/  function PRE_check_oneEmpty(one_param){
    /**/    return type_czech.checkParam_empty(one_param, 'EMPTY-ERROR')
    /**/  }
    /**/  
    /**/  oneEmpty = type_czech.linkUp(oneEmpty, PRE_check_oneEmpty) 

    function oneEmpty(){ }

    oneEmpty('a-string') // pass
    oneEmpty([1234])
    
    oneEmpty()                     // fail - no string  
    oneEmpty([])                   // fail - no string







&copy; 2021 Steen Hansen
