



## Production TypeCzech

### Use your own version of the Minified File

The TypeCzech.js file is 199KB, while the minified file on jsDelivr is only 35KB. The jsDelivr CDN serves files from GitHub for the jsFiddle.net examples.    
```
<script src="https://cdn.jsdelivr.net/gh/steenhansen/type-czech/web-resources/TypeCzech.min.js"></script>
```

Do not used the jsDeliver.net version, it may change at any time, and may also go down.

### Not Loading Library
By not loading TypeCzech.js the linkUp() function turns into a nop with no effects. The function PRE_check_notNegNum() is still parsed, but never executed.
```
/**/  // TypeCzech = 'src not loaded in this page via commenting'
/**/
/**/  if (typeof TypeCzech === 'function')
/**/    type_czech = TypeCzech('LOG-ERRORS')
/**/  else
/**/    type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
/**/  
/**/  function PRE_check_notNegNum(a_number){
/**/    if (a_number<1) return `Error, ${a_number} is not positive`
/**/      return ''
/**/  }
/**/  
/**/  notNegNum = type_czech.linkUp(notNegNum, PRE_check_notNegNum) // does nothing

function notNegNum(a_number){ }

notNegNum(19)             // not checked
notNegNum('not-negative') // not checked

notNegNum(-321)  // not checked
notNegNum('-55') // not checked
```

### Turned ON with a Constant
The checking function PRE_check_notNegNum() is called before every execution of the notNegNum() and will 'LOG-ERRORS' to console if any negative numbers are found. 
```
/**/  // TypeCzech = 'always loaded and parsed'
/**/
/**/  CHECKING_IS_ON = true
/**/
/**/  if (CHECKING_IS_ON) 
/**/    type_czech = TypeCzech('LOG-ERRORS')
/**/  else
/**/    type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
/**/  
/**/  function PRE_check_notNegNum(a_number){
/**/    if (a_number<1) return `Error, ${a_number} is not positive`
/**/      return ''
/**/  }
/**/  
/**/  notNegNum = type_czech.linkUp(notNegNum, PRE_check_notNegNum)

function notNegNum(a_number){  }

notNegNum(19)             // pass
notNegNum('not-negative') // pass

notNegNum(-321)  // fail
notNegNum('-55') // fail
```


### Turned OFF with a Constant
Checking function does not effect execution as TypeCzech is turned off via 
type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
And results in no calls to Pre_check_notNegNum().

```
/**/  // TypeCzech = 'always loaded and parsed'
/**/
/**/  CHECKING_IS_ON = false
/**/
/**/  if (CHECKING_IS_ON) 
/**/    type_czech = TypeCzech('LOG-ERRORS')
/**/  else
/**/    type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
/**/  
/**/  function PRE_check_notNegNum(a_number){
/**/    if (a_number<1) return `Error, ${a_number} is not positive`
/**/      return ''
/**/  }
/**/  
/**/  notNegNum = type_czech.linkUp(notNegNum, PRE_check_notNegNum)

function notNegNum(a_number){  }

notNegNum(19)             // not checked
notNegNum('not-negative') // not checked

notNegNum(-321)  // not checked
notNegNum('-55') // not checked
```

### Undefined Checking Function 
Checking function does not effect execution because checking function is undefined.
```
/**/  // TypeCzech = 'always loaded and parsed'
/**/
/**/  if (typeof TypeCzech === 'function') 
/**/    type_czech = TypeCzech('LOG-ERRORS')
/**/  else
/**/    type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
/**/  
        //  function PRE_check_notNegNum_undef(a_number){
        //    if (a_number<1) return `Error, ${a_number} is not positive`
        //      return ''
        //  }
/**/  
/**/  PRE_check_notNegNum_undef = (typeof PRE_check_notNegNum_undef === 'undefined') 
/**/                        ? undefined : PRE_check_notNegNum_undef
/**/  
/**/  notNegNum = type_czech.linkUp(notNegNum, PRE_check_notNegNum_undef) // does nothing

function notNegNum(a_number){ }

notNegNum(19)             // not checked
notNegNum('not-negative') // not checked

notNegNum(-321)  // not checked
notNegNum('-55') // not checked
```





&copy; 2024 Steen Hansen

