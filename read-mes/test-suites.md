
# Browser and Node Tests

### [Call All Tests in Node.js](../test-collection/test-all-node.js)


### [Call All Tests in Browser](../test-collection/test-all-web.html)

### [Node Signature Tests](../test-collection/test-node-generative.js)

### [Browser Signature Tests](../test-collection/test-web-generative.html)


### [Node.js Time Trials](../time-trials/type-czech-on.js)
Shows the time penalties for using TypeCzech on a function many times. For a complicated check, like the READ.ME's aLottery(), a loop of 100,000 calls will add a noticable 10 seconds to execution time. There is virtually no difference in test runs between TypeCzech
code that is turned off and TypeCzech code that has been removed.

### [Browser REPL](../test-collection/repl.html) 
../test-collection/repl.html

Load TypeCzech in a browser so can easily execute functions, in the console, that appear in the comments of TypeCzech.js, like: 
<pre>
type_czech.checkParam_type('not-a-number', 'number');
</pre>

Resulting in the plain error message of:
<pre>
>>checkParam_type()
>>TE@226 - The value 'not-a-number', which is a 'string', is not a 'number'
>>number
</pre>

&copy; 2024 Steen Hansen

