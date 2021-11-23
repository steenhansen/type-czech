

# Type Signatures



#### oneString('string') - one single string parameter

```
oneString = (one_string) => { }

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  PRE_check_oneString= (one_string) => {
/**/    return type_czech.checkParam_type(one_string, 'string')
/**/  }
/**/
/**/  oneString = type_czech.linkUp(oneString, PRE_check_oneString) 

oneString('one-string') // pass

oneString()                             // fail - not one string
oneString(17)                           // fail
oneString('one-string', 'two-string')   // fail **
oneString(['one-string'])               // fail
oneString(['one-string', 'two-string']) // fail
```




#### twoStringArray(['string', 'string']) - one array of two strings
```
twoStringArray = (two_string_array) => { }

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  PRE_check_twoStringArray = (two_string_array) => {
/**/    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
/**/  }
/**/
/**/  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 

twoStringArray(['one-string', 'two-string']) // pass

twoStringArray('one-string')                                 // fail, not 1 array of 2 strings
twoStringArray('one-string', 'two-string')                   // fail
twoStringArray('one-string', 'two-string', 'three-string')   // fail
twoStringArray(['one-string'], 'two-string')                 // fail
twoStringArray('one-string',   ['two-string'])               // fail
twoStringArray(['one-string'], ['two-string'])               // fail
twoStringArray(['one-string', 'two-string'], 'three-string') // fail **
```










#### twoStrings('string', 'string') - two string parameters
```
twoStrings = (one_string, two_string) => { }

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  PRE_check_twoStrings = (one_string, two_string) => {
/**/    return type_czech.checkParam_type([one_string, two_string], ['string', 'string'])
/**/  }
/**/
/**/  twoStrings = type_czech.linkUp(twoStrings, PRE_check_twoStrings) 

twoStrings('one-string', 'two-string')   // pass

twoStrings(['one-string', 'two-string'])               // fail - not 2 strings
twoStrings('one-string')                               // fail
twoStrings('one-string', 'two-string', 'three-string') // fail
```

#### oneStringArray(['string']) - one array of strings 
```
oneStringArray = (string_array) => { }

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  PRE_check_oneStringArray = (string_array) => {
/**/    return type_czech.checkParam_type(string_array, ['string'])
/**/  }
/**/  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 

oneStringArray([]) // pass, have to check for non-empty

oneStringArray(['one-string'])                                              //pass
oneStringArray(['one-string', 'two-string'])                                //pass
oneStringArray(['one-string', 'two-string', 'three-string'])                //pass
oneStringArray(['one-string', 'two-string', 'three-string', 'four-string']) //pass

oneStringArray('a-string')                     // fail - not 1 array of strings
oneStringArray([17])                           // fail
oneStringArray()                               // fail
oneStringArray(['one-string'], ['one-string']) // fail
```

#### oneFilledStringArray(['string']) - one array of non-empty strings 
```
oneFilledStringArray = (string_array) => { }

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  PRE_check_oneFilledStringArray = (string_array) => {
/**/    empty_string = type_czech.checkParam_empty(string_array, 'EMPTY-ERROR')
/**/    if (empty_string) return empty_string
/**/    return type_czech.checkParam_type(string_array, ['string'])
/**/  }
/**/  oneFilledStringArray = type_czech.linkUp(oneFilledStringArray, PRE_check_oneFilledStringArray) 

oneFilledStringArray(['one-string'])  // pass

oneFilledStringArray([])                  // fail - empty array
oneFilledStringArray(['one-string', ''])  // fail - empty string in array
```





#### stringParameters(str_1, str_2, ... str_n) - only strings
```
stringParameters= () => { }

/**/  type_czech = TypeCzech('THROW-EXCEPTIONS')     
/**/  function PRE_check_stringParameters(){
/**/    return type_czech.checkArgs_typeVariadic(arguments, ['string'])
/**/  }
/**/  stringParameters = type_czech.linkUp(stringParameters, PRE_check_stringParameters) 

stringParameters() // pass - have to check for non-empty
stringParameters('one-string')                                              // pass  
stringParameters('one-string', 'two-string')                                // pass
stringParameters('one-string', 'two-string', 'three-string')                // pass

stringParameters(5) // fail - parameter not string
```

#### filledStrParams(str_1, str_2, ... str_n) - only non-empty strings
```
filledStrParams= (filled_string) => { }

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  function PRE_check_filledStrParams(){
/**/    empty_string = type_czech.checkArgs_emptyVariadic(arguments, ['EMPTY-ERROR'])
/**/    if (empty_string) return empty_string
/**/    return type_czech.checkArgs_typeVariadic(arguments, ['string'])
/**/  }
/**/  filledStrParams = type_czech.linkUp(filledStrParams, PRE_check_filledStrParams) 

filledStrParams()                  // pass - have to check for non-empty
filledStrParams('one-string')      // pass  

filledStrParams('one-string', '')  // fail

```






















