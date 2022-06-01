

# FAQ

### What is the point of TypeCzech?

Having easily controllable type checking at runtime in both the browser and Node.js without resorting to compiling another language.

### Is TypeCzech slow?
  
  It can be, but TypeCzech can be turned on and off at will.
  In /time-trials/ there are some tests that use the 
  introductory lottery example to check for length of run time with TypeCzech being active.

  There is virtually no difference between Type-Czech being
  turned off and not existing in the source code of the program.

  However, with a loop of 100,000 [lottery](../example-snippets/00-Readme-Example.html) checks there is a 
  visible slowdown of 10 seconds with Type-Czech actively
  checking parameters versus 0.04 seconds with Type-Czech
  turned off or not existing at all.

### Will TypeCzech change the value of variables?

  No. Over 500 of the unit tests specifically verify that there are no mutations with parameter and result checks. The functions beforeCheck(), and afterCheck() check
  on parameter coherence via JSON strings.

### Be Careful With
  -  Checking for mutations with the global window variable can blow up if a lot 
  of memory is used.
  -  The jsDelivr TypeCzech.js version from GitHub, use a local version.

  - Only  linkUp() and isActive() are always safe call. All other TypeCzech function calls 
   should be placed inside PRE_check() and POST_check() functions that are hooked up with linkUp().
  
```
if (typeof TypeCzech === 'function')
  type_czech = TypeCzech('THROW-EXCEPTIONS')
else
  type_czech = { linkUp: (nop) => nop, isActive: (x) => false }

function PRE_check_yourFunction(param_1, param_2){ 
  /* TypeCzech functions always appear here */
  return type_check.checkParam_type([param_1, param_2], ['string', 'string'])
}

function POST_check_yourFunction(results){ 
  /* and TypeCzech functions sometimes appear here */
  type_check.checkParam_empty(results, 'EMPTY-ERROR')
}

yourFunction = type_czech.linkUp(yourFunction, PRE_check_yourFunction, POST_check_yourFunction)

function yourFunction(param_1, param_2){
  return results
}

fetch('https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8')
.then(response => {
  if (type_czech.isActive()) {
    /* and TypeCzech functions infrequently show up here paired with an check_assert() */
  }
})
```



&copy; 2021 Steen Hansen


