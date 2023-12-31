

## linkUp()
  -  [A Check For a Null Parameter](#a) 
  -  [B Check For a Null Result](#b) 
  -  [C Check For a Null Parameter or Result](#c) 
  -  [D Check a Parameter by Value](#d) 
  -  [E Check a Parameter by RegExp](#e) 
  -  [F Check a Parameter by Includes](#f) 

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Check For a Null Parameter<a id="a"></a>

```
function PRE_check_notNull(a_parameter){
  if (a_parameter === null) 
    return `ERROR, null parameter`
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
notNull = type_czech.linkUp(notNull, PRE_check_notNull) 

function notNull(a_parameter){ }

notNull(1)         // pass
notNull(undefined) // pass  
notNull()          // pass

notNull(null) // fail - found a null         
```


## B Check For a Null Parameter or Result<a id="b"></a>

```
function PRE_check_notNull(a_parameter){
  if (a_parameter === null) 
    return `ERROR, null parameter`
}

function POST_check_notNull(a_result){
  if (a_result === null) 
    return `ERROR, null result`
}

type_czech = TypeCzech('LOG-ERRORS')
notNull = type_czech.linkUp(notNull, PRE_check_notNull, POST_check_notNull) 

function notNull(a_parameter){
  return a_parameter
}

notNull(1)         // pass
notNull(undefined) // pass  
notNull()          // pass

notNull(null)  // PRE and POST fail - null parameter and result         
```

## C Check For a Null Result<a id="c"></a>

```
function POST_check_notNull(a_result){
  if (a_result === null) 
    return `ERROR, null result`
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
notNull = type_czech.linkUp(notNull, undefined, POST_check_notNull) 

function notNull(a_parameter){
  return a_parameter
}

notNull(1)         // pass
notNull(undefined) // pass  
notNull()          // pass

notNull(null) // fail - null parameter and result  
```



## D Check a Parameter by Value<a id="d"></a>
Check that a date parameter is in the month of February.

```
function PRE_check_mustBeFebruary(a_date){
  date_issue = type_czech.checkParam_type(a_date, 'date') 
  if (date_issue) return date_issue
  try {
    if (a_date.getMonth()===1) 
      return ''
  } catch (e) { }
  return `ERROR, '${a_date}' is not in February`
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
mustBeFebruary = type_czech.linkUp(mustBeFebruary, PRE_check_mustBeFebruary) 

function mustBeFebruary(a_date){ }

mustBeFebruary(new Date('1999-02-02')) // pass  

mustBeFebruary(2)                      // fail - 2 is not a date         
mustBeFebruary(new Date('1999-01-10')) // fail - January        
mustBeFebruary(new Date('1999-02-31')) // fail - no such date 
```

## E Check a Parameter by RegExp<a id="e"></a>
Check if a string parameter has its first character capitalized.
  
```
function PRE_check_firstCapital(a_word){
  string_issue = type_czech.checkParam_type(a_word, 'string')
  if (string_issue) return string_issue
  if (!a_word.match(/^[A-Z]/))
    return 'ERROR, word does not start with a capital letter'
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
firstCapital = type_czech.linkUp(firstCapital, PRE_check_firstCapital) 

function firstCapital(a_date){ }

firstCapital('Bob') // pass  

firstCapital(2)       // fail - 2 is not a string
firstCapital('alice') // fail - first character is lowercase
firstCapital('')      // fail - no uppercase letter          
```

## F Check a Parameter by Includes<a id="f"></a>
Check if a parameter is in the small prime set.
  
```
function PRE_check_smallPrimes(a_number){
  small_primes = [2,3,5,7,11,13,17,19,23]
  if (!small_primes.includes(a_number)) 
    return `ERROR, '${a_number}' is not a small prime`
}

type_czech = TypeCzech('THROW-EXCEPTIONS')
smallPrimes = type_czech.linkUp(smallPrimes, PRE_check_smallPrimes) 

function smallPrimes(a_number){ }

smallPrimes(19) // pass  

smallPrimes(1)           // fail - not in set
smallPrimes('imaginary') // fail - not in set
smallPrimes(-7)          // fail - not in set           
```








 
&copy; 2024 Steen Hansen