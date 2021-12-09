/* eslint-disable */

tested_signatures = 0;
failed_signatures = 0;

signature_oneString_46001();
signature_oneString_46002();
signature_oneString_46003();
signature_oneString_46004();
signature_oneString_46005();
signature_oneString_46006();

signature_twoStringArray_46101();
signature_twoStringArray_46102();
signature_twoStringArray_46103();
signature_twoStringArray_46104();
signature_twoStringArray_46105();
signature_twoStringArray_46106();
signature_twoStringArray_46107();
signature_twoStringArray_46108();

signature_twoStrings_46201();
signature_twoStrings_46202();
signature_twoStrings_46203();
signature_twoStrings_46204();

signature_oneStringArray_46301();
signature_oneStringArray_46302();
signature_oneStringArray_46303();
signature_oneStringArray_46304();
signature_oneStringArray_46305();
signature_oneStringArray_46306();
signature_oneStringArray_46307();
signature_oneStringArray_46308();
signature_oneStringArray_46309();

signature_oneFilledStringArray_46401();
signature_oneFilledStringArray_46402();
signature_oneFilledStringArray_46403();


TEST_total_fails += failed_signatures;
TEST_total_checks += tested_signatures;
if (TEST_show_random) {
  console.log('variadic failed tests 46000', failed_signatures)
  console.log('variadic passed tests 46000', tested_signatures)
}



//////////////////////////////////////////////////////////////////////////////////////

function signature_oneString_46001(){
  TYPE_CZECH_current_test_number = '46001';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  PRE_check_oneString= (one_string) => {
    return type_czech.checkParam_type(one_string, 'string')
  }
  function oneString(one_string){}
  oneString = type_czech.linkUp(oneString, PRE_check_oneString) 
  try {  
    oneString('one-string')                                    // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneString_46002(){
  TYPE_CZECH_current_test_number = '46002';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  PRE_check_oneString= (one_string) => {
    return type_czech.checkParam_type(one_string, 'string')
  }
  function oneString(one_string){}
  oneString = type_czech.linkUp(oneString, PRE_check_oneString) 
  try {  
    oneString()                                            // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneString_46003(){
  TYPE_CZECH_current_test_number = '46003';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  PRE_check_oneString= (one_string) => {
    return type_czech.checkParam_type(one_string, 'string')
  }
  function oneString(one_string){}
  oneString = type_czech.linkUp(oneString, PRE_check_oneString) 
  try {  
    oneString(17)                                            // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number, ' test failed');
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneString_46004(){
  TYPE_CZECH_current_test_number = '46004';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  PRE_check_oneString= (one_string) => {
    return type_czech.checkParam_type(one_string, 'string')
  }
  function oneString(one_string){}
  oneString = type_czech.linkUp(oneString, PRE_check_oneString) 
  try {  
    oneString('one-string', 'two-string')                                            // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneString_46005(){
  TYPE_CZECH_current_test_number = '46005';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  PRE_check_oneString= (one_string) => {
    return type_czech.checkParam_type(one_string, 'string')
  }
  function oneString(one_string){}
  oneString = type_czech.linkUp(oneString, PRE_check_oneString) 
  try {  
    oneString(['one-string'])                                            // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneString_46006(){
  TYPE_CZECH_current_test_number = '46006';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  PRE_check_oneString= (one_string) => {
    return type_czech.checkParam_type(one_string, 'string')
  }
  function oneString(one_string){}
  oneString = type_czech.linkUp(oneString, PRE_check_oneString) 
  try {  
    oneString(['one-string', 'two-string'])                                            // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

////////////////////////////////////////////////////////////////////////

function signature_twoStringArray_46101(){
  TYPE_CZECH_current_test_number = '46101';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  twoStringArray = (two_string_array) => { }
  PRE_check_twoStringArray = (two_string_array) => {
    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
  }
  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 
  try {  
    twoStringArray(['one-string', 'two-string']) // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}


function signature_twoStringArray_46102(){
  TYPE_CZECH_current_test_number = '46102';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  twoStringArray = (two_string_array) => { }
  PRE_check_twoStringArray = (two_string_array) => {
    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
  }
  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 
  try {  
    twoStringArray('one-string') // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}


function signature_twoStringArray_46103(){
  TYPE_CZECH_current_test_number = '46103';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  twoStringArray = (two_string_array) => { }
  PRE_check_twoStringArray = (two_string_array) => {
    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
  }
  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 
  try {  
    twoStringArray('one-string', 'two-string') // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_twoStringArray_46104(){
  TYPE_CZECH_current_test_number = '46104';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  twoStringArray = (two_string_array) => { }
  PRE_check_twoStringArray = (two_string_array) => {
    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
  }
  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 
  try {  
    twoStringArray('one-string', 'two-string', 'three-string') // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_twoStringArray_46105(){
  TYPE_CZECH_current_test_number = '46105';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  twoStringArray = (two_string_array) => { }
  PRE_check_twoStringArray = (two_string_array) => {
    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
  }
  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 
  try {  
    twoStringArray(['one-string'], 'two-string') // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_twoStringArray_46106(){
  TYPE_CZECH_current_test_number = '46106';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  twoStringArray = (two_string_array) => { }
  PRE_check_twoStringArray = (two_string_array) => {
    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
  }
  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 
  try {  
    twoStringArray('one-string',   ['two-string']) // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_twoStringArray_46107(){
  TYPE_CZECH_current_test_number = '46107';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  twoStringArray = (two_string_array) => { }
  PRE_check_twoStringArray = (two_string_array) => {
    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
  }
  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 
  try {  
    twoStringArray(['one-string'], ['two-string']) // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_twoStringArray_46108(){
  TYPE_CZECH_current_test_number = '46108';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  twoStringArray = (two_string_array) => { }
  PRE_check_twoStringArray = (two_string_array) => {
    return type_czech.checkParam_type(two_string_array, ['string', 'string'])
  }
  twoStringArray = type_czech.linkUp(twoStringArray, PRE_check_twoStringArray) 
  try {  
    twoStringArray(['one-string', 'two-string'], 'three-string') // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

//////////////////////////////////////////////////////////////////////////////////////

function signature_twoStrings_46201(){
  TYPE_CZECH_current_test_number = '46201';
  twoStrings = (one_string, two_string) => { }
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE')
  PRE_check_twoStrings = (one_string, two_string) => {
    return type_czech.checkParam_type([one_string, two_string], ['string', 'string'])
  }
  twoStrings = type_czech.linkUp(twoStrings, PRE_check_twoStrings) 
  try {  
    twoStrings('one-string', 'two-string')                                    // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}


function signature_twoStrings_46202(){
  TYPE_CZECH_current_test_number = '46202';
  twoStrings = (one_string, two_string) => { }
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE')
  PRE_check_twoStrings = (one_string, two_string) => {
    return type_czech.checkParam_type([one_string, two_string], ['string', 'string'])
  }
  twoStrings = type_czech.linkUp(twoStrings, PRE_check_twoStrings) 
  try {  
    twoStrings(['one-string', 'two-string'])                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}


function signature_twoStrings_46203(){
  TYPE_CZECH_current_test_number = '46203';
  twoStrings = (one_string, two_string) => { }
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE')
  PRE_check_twoStrings = (one_string, two_string) => {
    return type_czech.checkParam_type([one_string, two_string], ['string', 'string'])
  }
  twoStrings = type_czech.linkUp(twoStrings, PRE_check_twoStrings) 
  try {  
    twoStrings('one-string')                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_twoStrings_46204(){
  TYPE_CZECH_current_test_number = '46204';
  twoStrings = (one_string, two_string) => { }
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE')
  PRE_check_twoStrings = (one_string, two_string) => {
    return type_czech.checkParam_type([one_string, two_string], ['string', 'string'])
  }
  twoStrings = type_czech.linkUp(twoStrings, PRE_check_twoStrings) 
  try {  
    twoStrings('one-string', 'two-string', 'three-string')                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

//////////////////////////////////////////////////////////////////////////////////////

function signature_oneStringArray_46301(){
  TYPE_CZECH_current_test_number = '46301';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray([])                                    // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneStringArray_46302(){
  TYPE_CZECH_current_test_number = '46302';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray(['one-string'])                                    // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneStringArray_46303(){
  TYPE_CZECH_current_test_number = '46303';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string-array'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray(['one-string', 'two-string'])                                    // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number, ' test failed');
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneStringArray_46304(){
  TYPE_CZECH_current_test_number = '46304';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string-array'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray(['one-string', 'two-string', 'three-string'])                                    // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneStringArray_46305(){
  TYPE_CZECH_current_test_number = '46305';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string-array'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray(['one-string', 'two-string', 'three-string', 'four-string'])                                    // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneStringArray_46306(){
  TYPE_CZECH_current_test_number = '46306';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray('a-string')                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneStringArray_46307(){
  TYPE_CZECH_current_test_number = '46307';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray([17])                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneStringArray_46308(){
  TYPE_CZECH_current_test_number = '46308';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray()                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneStringArray_46309(){
  TYPE_CZECH_current_test_number = '46309';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneStringArray = (string_array) => { }
  PRE_check_oneStringArray = (string_array) => {
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneStringArray = type_czech.linkUp(oneStringArray, PRE_check_oneStringArray) 
  try {  
    oneStringArray(['one-string'], ['one-string'])                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

/////////////////////////////////////////////

function signature_oneFilledStringArray_46401(){
  TYPE_CZECH_current_test_number = '46401';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneFilledStringArray = (string_array) => { }
  PRE_check_oneFilledStringArray = (string_array) => {
    empty_string = type_czech.checkParam_empty(string_array, 'EMPTY-ERROR')
    if (empty_string) return empty_string
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneFilledStringArray = type_czech.linkUp(oneFilledStringArray, PRE_check_oneFilledStringArray) 
  try {  
    oneFilledStringArray(['one-string'])                                    // pass
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneFilledStringArray_46402(){
  TYPE_CZECH_current_test_number = '46402';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneFilledStringArray = (string_array) => { }
  PRE_check_oneFilledStringArray = (string_array) => {
    empty_string = type_czech.checkParam_empty(string_array, 'EMPTY-ERROR')
    if (empty_string) return empty_string
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneFilledStringArray = type_czech.linkUp(oneFilledStringArray, PRE_check_oneFilledStringArray) 
  try {  
    oneFilledStringArray([])                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function signature_oneFilledStringArray_46403(){
  TYPE_CZECH_current_test_number = '46403';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  oneFilledStringArray = (string_array) => { }
  PRE_check_oneFilledStringArray = (string_array) => {
    empty_string = type_czech.checkParam_empty(string_array, 'EMPTY-ERROR')
    if (empty_string) return empty_string
    return type_czech.checkParam_type(string_array, ['string'])
  }
  oneFilledStringArray = type_czech.linkUp(oneFilledStringArray, PRE_check_oneFilledStringArray) 
  try {  
    oneFilledStringArray(['one-string', ''])                                    // fail
    was_exception = false;
  } catch (e) {
    err=e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}
