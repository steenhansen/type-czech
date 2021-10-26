

## check_empty()

### A. Test check_empty() with all parameter types.

 Used inside both PRE_check() and POST_check() functions that have been linked.
  
    Gives an error message if a function parameter is empty. An invalid date, '', 
  {}, [], a blank regular expression, NaN, null, and undefined are all considered empty.

  A. Check that a single scalar parameter of any type is not empty.

      empty_error = type_czech.check_empty(arguments, 'EMPTY-ERROR')

  B. Check that a single array parameter of any type is not empty.

      empty_error = type_czech.check_empty(arguments, ['EMPTY-ERROR'])

  C. Check for empty variadic check_empty parameters.

      empty_error = type_czech.check_emptyVariadic(arguments, ['EMPTY-ERROR'])


d. result

e: array: no mr, first last  [salu, first, last] 

f: object: {f_name:'EMPTY-OK', l_name:'EMPTY-ERROR'}


&copy; 2021 Steen Hansen