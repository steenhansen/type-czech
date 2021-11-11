

## linkUp()
  -  [1 Check For a Null Parameter](#check-for-a-null-parameter) 
  -  [2 Check For a Null Result](#check-for-a-null-result) 
  -  [3 Check For a Null Parameter or Result](#check-for-a-null-parameter-or-result) 
  -  [4 Check a Parameter by Value](#check-a-parameter-by-value) 
  -  [5 Check a Parameter by RegExp](#check-a-parameter-by-regexp) 
  -  [6 Check a Parameter by Includes](#check-a-parameter-by-includes) 

## 1 Check For a Null Parameter<a name="check-for-a-null-parameter"></a>

```
function PRE_check_notNull(){  // arguments version
  if (arguments[0] === null) 
    return `ERROR, null parameter`
}
```
```
function PRE_check_notNull(a_parameter){  // or parameter version
  if (a_parameter === null) 
    return `ERROR, null parameter`
}

type_czech = TypeCzech('LOG-ERRORS')
notNull = type_czech.linkUp(notNull, PRE_check_notNull) 

function notNull(a_parameter){
}

notNull(1)
notNull(undefined)  
notNull()

notNull(null)  // PRE error         
```


## 2 Check For a Null Result<a name="check-for-a-null-result"></a>

```
function PRE_check_notNull(){  // arguments version
  if (arguments[0] === null) 
    return `ERROR, null parameter`
}

function POST_check_notNull(){
  if (arguments[0] === null) 
    return `ERROR, null result`
}
```
```
function PRE_check_notNull(a_parameter){  // or parameter version
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

notNull(1)
notNull(undefined)  
notNull()

notNull(null)  // PRE and POST error         
```

## 3 Check For a Null Parameter or Result<a name="check-for-a-null-parameter-or-result"></a>
```
function POST_check_notNull(){  // arguments version
  if (arguments[0] === null) 
    return `ERROR, null result`
}
```
```
function POST_check_notNull(a_result){  // or parameter version
  if (a_result === null) 
    return `ERROR, null result`
}

type_czech = TypeCzech('LOG-ERRORS')
notNull = type_czech.linkUp(notNull, undefined, POST_check_notNull) 

function notNull(a_parameter){
  return a_parameter
}

notNull(1)
notNull(undefined)  
notNull()

notNull(null)  // PRE error         
```



## 4 Check a Parameter by Value<a name="check-a-parameter-by-value"></a>
Check that a date parameter is in the month of February.
```
function PRE_check_mustBeFebruary(){  // arguments version
  date_issue = type_czech.check_type(arguments, 'date') 
  if (date_issue) return date_issue
  try {
    if (arguments[0].getMonth()===1) 
      return ''
  } catch (e) { }
  return `ERROR, '${arguments[0]}' is not in February`
}
```
```
function PRE_check_mustBeFebruary(a_date){  // or parameter version
  date_issue = type_czech.check_type(a_date, 'date') 
  if (date_issue) return date_issue
  try {
    if (a_date.getMonth()===1) 
      return ''
  } catch (e) { }
  return `ERROR, '${a_date}' is not in February`
}

type_czech = TypeCzech('LOG-ERRORS')
mustBeFebruary = type_czech.linkUp(mustBeFebruary, PRE_check_mustBeFebruary) 

function mustBeFebruary(a_date){
}

mustBeFebruary(new Date('1999-02-02'))  

mustBeFebruary(2)  // PRE error         
mustBeFebruary(new Date('1999-01-10'))  // PRE error         
mustBeFebruary(new Date('1999-02-31'))  // PRE error           
```

## 5 Check a Parameter by RegExp<a name="check-a-parameter-by-regexp"></a>
Check if a string parameter has its first character capitalized.
  
```
function PRE_check_firstCapital(){  // arguments version
  string_issue = type_czech.check_type(arguments, 'string')
  if (string_issue) return string_issue
  if (!arguments[0].match(/^[A-Z]/))
    return 'ERROR, word does not start with a capital letter'
}
```
```
function PRE_check_firstCapital(a_word){  // or parameter version
  string_issue = type_czech.check_type(a_word, 'string')
  if (string_issue) return string_issue
  if (!a_word.match(/^[A-Z]/))
    return 'ERROR, word does not start with a capital letter'
}

type_czech = TypeCzech('LOG-ERRORS')
firstCapital = type_czech.linkUp(firstCapital, PRE_check_firstCapital) 

function firstCapital(a_date){
}

firstCapital('Bob')  

firstCapital(2)  // PRE error         
firstCapital('alice')  // PRE error         
firstCapital('')  // PRE error           
```

## 6 Check a Parameter by Includes<a name="check-a-parameter-by-includes"></a>
Check if a parameter is in the prime set.
  
```
function PRE_check_smallPrimes(){  // arguments version
  number_issue = type_czech.check_type(arguments, 'number')
  if (number_issue) return number_issue
  small_primes = [2,3,5,7,11,13,17,19,23]
  if (!small_primes.includes(arguments[0])) 
    return `ERROR, '${arguments[0]}' is not a small prime`
}
```
```
function PRE_check_smallPrimes(a_number){  // or parameter version
  number_issue = type_czech.check_type(a_number, 'number')
  if (number_issue) return number_issue
  small_primes = [2,3,5,7,11,13,17,19,23]
  if (!small_primes.includes(a_number)) 
    return `ERROR, '${a_number}' is not a small prime`
}

type_czech = TypeCzech('LOG-ERRORS')
smallPrimes = type_czech.linkUp(smallPrimes, PRE_check_smallPrimes) 

function smallPrimes(a_number){
}

smallPrimes(19)  

smallPrimes(1)  // PRE error         
smallPrimes('imaginary')  // PRE error         
smallPrimes(-7)  // PRE error           
```








 
&copy; 2021 Steen Hansen