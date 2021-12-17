/* eslint-disable */


pass_count = 0;
fail_count = 0;






 signature_stringParameters_47001();
 signature_stringParameters_47002();
 signature_stringParameters_47003();
signature_stringParameters_47004();
signature_stringParameters_47005();





//////////////////////////////////////////////////////////////////////////////////////



function signature_stringParameters_47001(){
  TYPE_CZECH_current_test_number = '47001';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeEach(arguments, ['string'])
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
    if (typeof pass_count !== 'undefined') fail_count ++;
  }
  if (typeof pass_count !== 'undefined') pass_count ++;
}


function signature_stringParameters_47002(){
  TYPE_CZECH_current_test_number = '47002';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeEach(arguments, 'string')
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
    if (typeof pass_count !== 'undefined') fail_count ++;
  }
  if (typeof pass_count !== 'undefined') pass_count ++;
}


function signature_stringParameters_47003(){
  TYPE_CZECH_current_test_number = '47003';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeEach(arguments, ['strings'])
  }
  stringParameters = type_czech.linkUp(stringParameters, PRE_check_stringParameters) 
  try {  
    stringParameters('one-string', 'two-string')              // fail 
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

function signature_stringParameters_47004(){
  TYPE_CZECH_current_test_number = '47004';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeEach(arguments, 'string')
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
    if (typeof pass_count !== 'undefined') fail_count ++;
  }
  if (typeof pass_count !== 'undefined') pass_count ++;
}

function signature_stringParameters_47005(){
  TYPE_CZECH_current_test_number = '47005';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  stringParameters= () => { }
  function PRE_check_stringParameters(){
    return type_czech.checkArgs_typeEach(arguments, ['strings'])
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
    if (typeof pass_count !== 'undefined') fail_count ++;
  }
  if (typeof pass_count !== 'undefined') pass_count ++;
}



if (fail_count>0) {
  the_problem = `check-tests/signature_checkArgs_typeEach_47000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;