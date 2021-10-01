




## Inconsistency Problem with Extra Unchecked Parameters

Two routines are slightly hobbled by the signature system and cannot be used when there is
only one single parameter to check with any possible unchecked extra optional arguments.
The two calls below 
<pre>
type_czech.check_typeExtra(arguments, ['String']);
type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR']);
</pre>

both results in the exceptions:
<pre>
Uncaught TypeCzech.check_typeExtra() needs each array to have at least two types to work
Uncaught TypeCzech.check_emptyExtra() needs each array to have at least two types to work
</pre>

The reason is that ['String'] means an array of string, thus the signature indicates
one or more strings as arguments to a function. Whereas ['EMPTY-ERROR'] implies that
all parameters must not be empty.


Therefore check_typeExtra() and check_emptyExtra() must use at least two types to not 
signify an array of one type.

This example below dealing with types, with possible extra optional parameters, will not report any errors:
<pre>
type_czech = TypeCzech('LOG-ERRORS')
function PRE_yourFunction(){
    return type_czech.check_typeExtra(arguments, ['String', 'String']);
}

yourFunction = type_czech.link(yourFunction, PRE_yourFunction)

function yourFunction(str_1, str_2, extra_a, extra_b, extra_c){}

yourFunction('hi', 'there');
yourFunction('hi', 'there', 17);
yourFunction('hi', 'there', false, []);
yourFunction('hi', 'there', {}, new Date('1999-1-1'), 123n);
</pre>


This example below dealing with emptiness, will not report any errors:
<pre>
type_czech = TypeCzech('LOG-ERRORS')
function PRE_someFunction(){
    return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR']);
}

someFunction = type_czech.link(someFunction, PRE_someFunction)

function someFunction(str_1, str_2, extra_a, extra_b, extra_c){}

someFunction('hi', 'there');
someFunction('hi', 'there', 17);
someFunction('hi', 'there', false, [987654321]);
someFunction('hi', 'there', {a:1}, new Date('1999-1-1'), 777n);
</pre>


The below examples all fail as they have the wrong types; expect 'String' but get 'Number'.

<pre>
type_czech = TypeCzech('LOG-ERRORS')
function PRE_yourFail(){
    return type_czech.check_typeExtra(arguments, ['String', 'String']);
}

yourFail = type_czech.link(yourFail, PRE_yourFail)

function yourFail(str_1, str_2, extra_a, extra_b, extra_c){}

yourFail(123, 456);
yourFail(123, 456, 'a-str');
yourFail(123, 456, false, []);
yourFail(123, 456, {}, new Date('1999-1-1'), 123n);

PRE_yourFail() yourFail() PRE-FUNC: TC@44 -  ELEMENT '0' is assumed to be a 'String', but is mistakenly a 'Number'.
               check_typeExtra(arguments, expected_types)
                   ACTUAL TYPES ['Number','Number','Object','Date','BigInt']
                   ACTUAL VALUE [123,456,{},'1999-01-01T00:00:00.000Z',123n]
                  EXPECTED TYPE '['String','String']'
               CALLING FUNCTION PRE_yourFail()
</pre>

The below examples all fail as the first two string parameters are empty.
<pre>
type_czech = TypeCzech('LOG-ERRORS')
function PRE_someFail(){
    return type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-ERROR']);
}

someFail = type_czech.link(someFail, PRE_someFail)

function someFail(str_1, str_2, extra_a, extra_b, extra_c){}

someFail('', '');
someFail('', '', 17);
someFail('', '', false, [987654321]);
someFail('', '', {a:1}, new Date('1999-1-1'), 777n);

PRE_someFail() someFail() PRE-FUNC: TC@30 - ELEMENT '0' is erroneously empty :
               check_emptyExtra(arguments, expected_emptys)
                     ACTUAL TYPES ['String','String','Object','Date','BigInt']
                     ACTUAL VALUE ['','',{'a':1},'1999-01-01T00:00:00.000Z',777n]
                  EMPTY ASSERTION '['EMPTY-ERROR','EMPTY-ERROR']'
                 CALLING FUNCTION PRE_someFail()
</pre>
