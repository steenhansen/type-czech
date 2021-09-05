/* eslint-disable */


///           empty????

passed_variadic_types = 0;

failed_variadic_types = 0;

variadic_27001();
variadic_27002();
variadic_27003();

variadic_27101();
variadic_27102();

variadic_27201();
variadic_27202();

total_fails += failed_variadic_types;
console.log('variadic failed tests', failed_variadic_types)


total_checks += passed_variadic_types;
console.log('variadic passed tests', passed_variadic_types)





function variadic_27001(){
  TYPE_CZECH_current_test_number = '27001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.valid(arguments, ['Number']) }
  yourFunc = type_czech.check(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)
    was_exception = false;
  } catch (e) {
    was_exception = true;
  }

  if (!was_exception) {
    console.log("*EXPECTED* Exception");
    console.log("**ACTUAL** No Exception");
    _throw( errorMessage(error_id, ['No Exception', 'Exception'],  "yourFunc(1,2,3,4,5,6,7,8,9) === type_czech.valid(arguments, ['Number']) ") );
  }
  if (typeof failed_variadic_types !== 'undefined') {
    passed_variadic_types ++;
  }
}





function variadic_27002(){
  TYPE_CZECH_current_test_number = '27002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.valid([...arguments], ['Number']) }
  yourFunc = type_czech.check(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }

  if (was_exception) {
    console.log("*EXPECTED* No Exception");
    console.log("**ACTUAL** Exception");
    _throw( errorMessage(error_id, ['No Exception', 'Exception'], actual_error) );
  }
  if (typeof failed_variadic_types !== 'undefined') {
    failed_variadic_types +=type_czech.failureTally();
    passed_variadic_types ++;
  }
}

function variadic_27003(){
  TYPE_CZECH_current_test_number = '27003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.valid(arguments, 'Array') }
  yourFunc = type_czech.check(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }

  if (was_exception) {
    console.log("*EXPECTED* Exception");
    console.log("**ACTUAL** No Exception");
    _throw( errorMessage(error_id, ['No Exception', 'Exception'], actual_error) );
  }
  if (typeof failed_variadic_types !== 'undefined') {
    failed_variadic_types +=type_czech.failureTally();
    passed_variadic_types ++;
  }
}



function variadic_27101(){
  TYPE_CZECH_current_test_number = '27101';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.valid(arguments, ['Number']) }
  yourFunc = type_czech.check(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc([1])
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }

  if (was_exception) {
    console.log("*EXPECTED* Exception");
    console.log("**ACTUAL** No Exception");
    _throw( errorMessage(error_id, ['No Exception', 'Exception'], actual_error) );
  }
  if (typeof failed_variadic_types !== 'undefined') {
    failed_variadic_types +=type_czech.failureTally();
    passed_variadic_types ++;
  }
}

function variadic_27102(){
  TYPE_CZECH_current_test_number = '27102';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
 // , 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.valid(arguments, ['Number']) }
  yourFunc = type_czech.check(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc([1,2,3])
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }

  if (was_exception) {
    console.log("*EXPECTED* Exception");
    console.log("**ACTUAL** No Exception");
    _throw( errorMessage(error_id, ['No Exception', 'Exception'], actual_error) );
  }
  if (typeof failed_variadic_types !== 'undefined') {
    failed_variadic_types +=type_czech.failureTally();
    passed_variadic_types ++;
  }
}

function variadic_27201(){
  TYPE_CZECH_current_test_number = '27201';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//  , 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.valid(arguments, [['Number']]) }
  yourFunc = type_czech.check(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc([[1]])
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }

  if (was_exception) {
    console.log("*EXPECTED* Exception");
    console.log("**ACTUAL** No Exception");
    _throw( errorMessage(error_id, ['No Exception', 'Exception'], actual_error) );
  }
  if (typeof failed_variadic_types !== 'undefined') {
    failed_variadic_types +=type_czech.failureTally();
    passed_variadic_types ++;
  }
}


function variadic_27202(){
  TYPE_CZECH_current_test_number = '27202';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
 // , 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.valid(arguments, {an_array:['Number']}) }
  yourFunc = type_czech.check(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc({an_array:[1,2]})
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }

  if (was_exception) {
    console.log("*EXPECTED* Exception");
    console.log("**ACTUAL** No Exception");
    _throw( errorMessage(error_id, ['No Exception', 'Exception'], actual_error) );
  }
  if (typeof failed_variadic_types !== 'undefined') {
    failed_variadic_types +=type_czech.failureTally();
    passed_variadic_types ++;
  }
}