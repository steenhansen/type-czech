/* eslint-disable */

tested_signatures = 0;
failed_signatures = 0;


 signature_stringParameters_47001();
 signature_stringParameters_47002();
 signature_stringParameters_47003();
signature_stringParameters_47004();
signature_stringParameters_47005();


TEST_total_fails += failed_signatures;
TEST_total_checks += tested_signatures;
if (TEST_show_random) {
  console.log('variadic failed tests 47000', failed_signatures)
  console.log('variadic passed tests 47000', tested_signatures)
}



//////////////////////////////////////////////////////////////////////////////////////



function signature_stringParameters_47001(){
  TYPE_CZECH_current_test_number = '47001';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeVariadic(arguments, ['string'])
  }
  stringParameters = type_czech.linkUp(stringParameters, PRE_check_stringParameters) 
  try {  
    stringParameters()              // pass - have to check for non-empty
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


function signature_stringParameters_47002(){
  TYPE_CZECH_current_test_number = '47002';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeVariadic(arguments, ['string'])
  }
  stringParameters = type_czech.linkUp(stringParameters, PRE_check_stringParameters) 
  try {  
    stringParameters('one-string')              // pass 
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


function signature_stringParameters_47003(){
  TYPE_CZECH_current_test_number = '47003';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeVariadic(arguments, ['string-array'])
  }
  stringParameters = type_czech.linkUp(stringParameters, PRE_check_stringParameters) 
  try {  
    stringParameters('one-string', 'two-string')              // pass 
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

function signature_stringParameters_47004(){
  TYPE_CZECH_current_test_number = '47004';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeVariadic(arguments, ['string-array'])
  }
  stringParameters = type_czech.linkUp(stringParameters, PRE_check_stringParameters) 
  try {  
    stringParameters('one-string', 'two-string', 'three-string')              // pass 
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

function signature_stringParameters_47005(){
  TYPE_CZECH_current_test_number = '47005';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeVariadic(arguments, ['string-array'])
  }
  stringParameters = type_czech.linkUp(stringParameters, PRE_check_stringParameters) 
  try {  
    stringParameters(5)              // fail
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


