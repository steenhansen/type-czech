

# Plain Type Signatures



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

oneString()                             // fail - not a string
oneString(17)                           // fail - not a string
oneString('one-string', 'two-string')   // fail - two strings
oneString(['one-string'])               // fail - array of string
oneString(['one-string', 'two-string']) // fail - array of strings
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

twoStringArray('one-string')                                 // fail - not 1 array of 2 strings
twoStringArray('one-string', 'two-string')                   // fail - no array
twoStringArray('one-string', 'two-string', 'three-string')   // fail - no array
twoStringArray(['one-string'], 'two-string')                 // fail - array of 1 string
twoStringArray('one-string',   ['two-string'])               // fail - not array
twoStringArray(['one-string'], ['two-string'])               // fail - two arrays
twoStringArray(['one-string', 'two-string'], 'three-string') // fail - extra string
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

twoStrings(['one-string', 'two-string'])               // fail - one array of strings
twoStrings('one-string')                               // fail - one string
twoStrings('one-string', 'two-string', 'three-string') // fail - three strings
```

#### oneStringArray(['strings']) - one array of strings 
```
oneStringArray = (string_array) => { }

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/  PRE_check_oneStringArray = (string_array) => {
/**/    return type_czech.checkParam_type(string_array, ['strings'])
/**/  }
/**/  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 

oneStringArray(['one-string'])                                              //pass
oneStringArray(['one-string', 'two-string'])                                //pass
oneStringArray(['one-string', 'two-string', 'three-string'])                //pass
oneStringArray(['one-string', 'two-string', 'three-string', 'four-string']) //pass

oneStringArray([])                             // fail - empty has no types
oneStringArray('a-string')                     // fail - not 1 array of strings
oneStringArray([17])                           // fail - number
oneStringArray()                               // fail - nothing
oneStringArray(['one-string'], ['one-string']) // fail - two arrays
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

/**/  type_czech = TypeCzech('LOG-ERRORS')     
/**/  function PRE_check_stringParameters(){
/**/    return type_czech.checkArgs_typeEach(arguments, 'string')
/**/  }
/**/  stringParameters = type_czech.linkUp(stringParameters, PRE_check_stringParameters) 

stringParameters('one-string')                                              // pass  
stringParameters('one-string', 'two-string')                                // pass
stringParameters('one-string', 'two-string', 'three-string')                // pass

stringParameters()  // fail - no parameters
stringParameters(5) // fail - parameter not string
```

#### filledStrParams(str_1, str_2, ... str_n) - only non-empty strings
```
filledStrParams= (filled_string) => { }

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  function PRE_check_filledStrParams(){
/**/    empty_string = type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
/**/    if (empty_string) return empty_string
/**/    return type_czech.checkArgs_typeEach(arguments, 'string')
/**/  }
/**/  filledStrParams = type_czech.linkUp(filledStrParams, PRE_check_filledStrParams) 

filledStrParams('one-string')      // pass  

filledStrParams()                  // fail - there are not parameters
filledStrParams('one-string', '')  // fail - second parameter empty

```






















