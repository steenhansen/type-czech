/* eslint-disable */


pass_count = 0;
fail_count = 0;




signature_filledStrParams_48001();
signature_filledStrParams_48002();
signature_filledStrParams_48003();





//////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////

function signature_filledStrParams_48001(){
  TYPE_CZECH_current_test_number = '48001';
  filledStrParams= (filled_string) => { }

  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  
  function PRE_check_filledStrParams(){
    empty_string = type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
    if (empty_string) return empty_string
    return type_czech.checkArgs_typeEach(arguments, 'string')
  }
  filledStrParams = type_czech.linkUp(filledStrParams, PRE_check_filledStrParams) 
  try {  
    filledStrParams('one-string')              // pass - have to check for non-empty
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number, err);
    if (typeof pass_count !== 'undefined') fail_count ++;
  }
  if (typeof pass_count !== 'undefined') pass_count ++;
}

function signature_filledStrParams_48002(){
  TYPE_CZECH_current_test_number = '48002';
  filledStrParams= () => { }

  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  
  function PRE_check_filledStrParams(){
    empty_string = type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
    if (empty_string) return empty_string
    return type_czech.checkArgs_typeEach(arguments, ['string'])
  }
  filledStrParams = type_czech.linkUp(filledStrParams, PRE_check_filledStrParams) 
  try {  
    filledStrParams()              // pass - have to check for non-empty
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number, err);
    if (typeof pass_count !== 'undefined') fail_count ++;
  }
  if (typeof pass_count !== 'undefined') pass_count ++;
}

function signature_filledStrParams_48003(){
  TYPE_CZECH_current_test_number = '48003';
  filledStrParams= (filled_string) => { }

  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  
  function PRE_check_filledStrParams(){
    empty_string = type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
    if (empty_string) return empty_string
    return type_czech.checkArgs_typeEach(arguments, ['string'])
  }
  filledStrParams = type_czech.linkUp(filledStrParams, PRE_check_filledStrParams) 
  try {  
    filledStrParams('one-string', '')              // pass - have to check for non-empty
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number, err);
    if (typeof pass_count !== 'undefined') fail_count ++;
  }
  if (typeof pass_count !== 'undefined') pass_count ++;
}


if (fail_count>0) {
  the_problem = `check-tests/signature_checkArgs_emptyEach_48000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;