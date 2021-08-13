
# Typical Use Snippet - 01

This example shows:
 - type_czech.snapshot() finding a parameter mutation
 - type_czech.valid() reporting a type error
 - type_czech.valueless() flagging a variable with an empty error
 - announcing a variables' value error

  // Detachable TypeCzech Checking Code ****************************************

    if (typeof TypeCzech === 'function') 
      type_czech = TypeCzech('LOG-ERRORS')
    else
      type_czech = { check: (nop) => nop, stats: (nop) => nop, is_active: false }

    function PRE_isElvis(name_object){
      type_czech.snapshot('isElvis', 'name_object', name_object)   // mutation ?
      type_issue = type_czech.valid(arguments, {the_name:'String'})
      if (type_issue) return type_issue                            // type error
      empty_issue = type_czech.valueless(arguments, {the_name:'EMPTY-ERROR'})
      if (empty_issue) return empty_issue                         // empty error
      current_name = name_object.the_name
      if (current_name[0]!=='E') return `Not-Start-Letter-E`      // value error
    }

    function POST_isElvis(){
      elvis_mutation = type_czech.mutated('isElvis', 'name_object')
      if (elvis_mutation) return elvis_mutation
      return type_czech.valid(arguments, 'String')
    }

    PRE_isElvis = (typeof PRE_isElvis === 'undefined') ? undefined : PRE_isElvis
    POST_isElvis = (typeof POST_isElvis === 'undefined') ? undefined : POST_isElvis

    isElvis = type_czech.check(isElvis, PRE_isElvis, POST_isElvis) 

  // Actual Non-Checking Production Code ****************************************

    function isElvis(elvis_object){
      if (elvis_object.the_name === 'Presley')
        elvis_object.the_name ='Aaron Presley'
      return elvis_object.the_name
    }

  // Console Interaction ****************************************

    isElvis({the_name:'Elvis'})
    >>Elvis

    isElvis({the_name:''})
    >>PRE_isElvis() isElvis() PRE-FUNC: 'the_name' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {'the_name':''}
    >>               EMPTY ASSERTION {'the_name':'EMPTY-ERROR'}

    isElvis({the_name:'Presley'})
    >>Not-Start-Letter-E

    >>The reference variable 'name_object' in function 'isElvis()' changed values
    >>                from {'the_name':'Presley'}
    >>                  to {'the_name':'Aaron Presley'} 
    >>
    >>                START-SAME ~ {'the_name':'
    >>                  PRE-DIFF ~ Presley'}
    >>                  POST-DIFF ~ Aaron Presley'} 

    >>Aaron Presley

    isElvis({the_name:17})
    >>PRE_isElvis() isElvis() PRE-FUNC: Property 'the_name' is indicated to be a 'String', but is inaccurately a 'Number' : 17
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'Object'
    >>                ACTUAL VALUE {'the_name':17}
    >>               EXPECTED TYPE {'the_name':'String'}

    >>POST_isElvis() isElvis() POST-FUNC: The variable '17', which is a 'Number', is not a 'String'
    >>               valid(arguments, expected_types)
    >>                ACTUAL TYPES 'Number'
    >>                ACTUAL VALUE 17
    >>                EXPECTED TYPE 'String'

    isElvis({the_name:''})
    >>PRE_isElvis() isElvis() PRE-FUNC: 'the_name' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.
    >>               valueless(arguments, expected_emptys)
    >>                  ACTUAL TYPES 'Object'
    >>                  ACTUAL VALUE {'the_name':''}
    >>               EMPTY ASSERTION {'the_name':'EMPTY-ERROR'}


