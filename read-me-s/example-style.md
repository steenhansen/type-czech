# Example Style

All examples below follow these rules:
 - checking routines that run before user functions are prefixed with 'PRE_'
 - 'POST_' checking routines execute after user functions
 - PRE_ routines can use both the arguments object and parameters
 - non-empty strings returned from the checking routines are recognized as errors
 - the values [ ], { }, and '' are considered valueless and empty
 - detachable TypeCzech code is highly indented 
 - dates are shortened for the 'Console Output' pane, deleting the time