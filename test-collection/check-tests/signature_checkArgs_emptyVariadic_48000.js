/* eslint-disable */

tested_signatures = 0;
failed_signatures = 0;


signature_filledStrParams_48001();
signature_filledStrParams_48002();
signature_filledStrParams_48003();

TEST_total_fails += failed_signatures;
TEST_total_checks += tested_signatures;
if (TEST_show_random) {
  console.log('variadic failed tests 48000', failed_signatures)
  console.log('variadic passed tests 48000', tested_signatures)
}



//////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////

function signature_filledStrParams_48001(){
  TYPE_CZECH_current_test_number = '48001';
  filledStrParams= (filled_string) => { }

  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  
  function PRE_check_filledStrParams(){
    empty_string = type_czech.checkArgs_emptyVariadic(arguments, ['EMPTY-ERROR'])
    if (empty_string) return empty_string
    return type_czech.checkArgs_typeVariadic(arguments, ['string'])
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
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_filledStrParams_48002(){
  TYPE_CZECH_current_test_number = '48002';
  filledStrParams= () => { }

  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  
  function PRE_check_filledStrParams(){
    empty_string = type_czech.checkArgs_emptyVariadic(arguments, ['EMPTY-ERROR'])
    if (empty_string) return empty_string
    return type_czech.checkArgs_typeVariadic(arguments, ['string'])
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
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_filledStrParams_48003(){
  TYPE_CZECH_current_test_number = '48003';
  filledStrParams= (filled_string) => { }

  type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  
  function PRE_check_filledStrParams(){
    empty_string = type_czech.checkArgs_emptyVariadic(arguments, ['EMPTY-ERROR'])
    if (empty_string) return empty_string
    return type_czech.checkArgs_typeVariadic(arguments, ['string'])
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
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}
