/* eslint-disable */

tested_mutatedVariables = 0;
failed_mutatedVariables = 0;

_mutatedVariables_14001();
_mutatedVariables_14002();
 _mutatedVariables_14003();
 _mutatedVariables_14004();

total_fails += failed_mutatedVariables;
console.log('_mutatedVariables failed tests', failed_mutatedVariables)

total_checks += tested_mutatedVariables;
console.log('_mutatedVariables passed tests', tested_mutatedVariables)

function _mutatedVariables_14001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '14001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  var my_array = [1,2,3];
  type_czech.mutateSnapshot('_mutatedVariables_14001', 'my_array', my_array);
  my_array.push(4);
  actual = type_czech.mutated('_mutatedVariables_14001', 'my_array', my_array);
  actual_one_line = oneLineString(actual);

  expected = `TC@48 - The reference variable 'my_array' in function '_mutatedVariables_14001()' changed values from [1,2,3] to [1,2,3,4] START-SAME ~ [1,2,3 PRE-DIFF ~ ] POST-DIFF ~ ,4]`; 
  if (actual_one_line!==expected) {       
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual_one_line);
    _throw(`${error_id} _mutatedVariables() misfired with : ${actual}`);
  }
  if (typeof failed_mutatedVariables !== 'undefined') {
    failed_mutatedVariables +=type_czech.failureTally();
    tested_mutatedVariables ++;
  }
}










function _mutatedVariables_14002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '14002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  var my_integer = 14
  let actual;
  try {
    type_czech.mutateSnapshot('_mutatedVariables_14002', 'my_integer', my_integer);
    actual = 'error was not caught';
  } catch (e) {
    actual = e;
  }
  my_integer++;
  expected = `TC@56 - TypeCzech.mutateSnapshot()'s 3rd parameter is not an array/object but instead a 'Number'`; 
  if (actual!==expected) {      
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _mutatedVariables() misfired with : ${actual}`);
  }
  if (typeof failed_mutatedVariables !== 'undefined') {
    failed_mutatedVariables +=type_czech.failureTally();
    tested_mutatedVariables ++;
  }
}




function _mutatedVariables_14003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '14003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  var my_obj = {a:1, b:2, c:3};
  type_czech.mutateSnapshot('_mutatedVariables_14003', 'my_obj', my_obj);
  my_obj.b=7;
  actual = type_czech.mutated('_mutatedVariables_14003', 'my_obj', my_obj);
  actual_one_line = oneLineString(actual);
  expected = `TC@48 - The reference variable 'my_obj' in function '_mutatedVariables_14003()' changed values from {'a':1,'b':2,'c':3} to {'a':1,'b':7,'c':3} START-SAME ~ {'a':1,'b': PRE-DIFF ~ 2,'c':3} POST-DIFF ~ 7,'c':3}`; 
  if (actual_one_line!==expected) {       
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual_one_line);
    _throw(`${error_id} _mutatedVariables() misfired with : ${actual}`);
  }
  if (typeof failed_mutatedVariables !== 'undefined') {
    failed_mutatedVariables +=type_czech.failureTally();
    tested_mutatedVariables ++;
  }
}





function _mutatedVariables_14004(){
  test_failed = 0; 
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '14004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  function PRE_recurseArr(growing_array){
    type_czech.mutateSnapshot('recurseArr', 'growing_array', growing_array)
  }
  
  function POST_recurseArr(growing_array){
    poss_mutation_err = type_czech.mutated('recurseArr', 'growing_array')
    return poss_mutation_err
  }

  recurseArr = type_czech.check(recurseArr, PRE_recurseArr, POST_recurseArr)

  function recurseArr(growing_array, stop_recurse){
    next_index = growing_array.length + 1
    if (next_index === stop_recurse){
      return growing_array
    } else{
      if (next_index === 4){
        growing_array[2] = 'THREE'                 // mutate previous entry
      }
      new_array = [...growing_array, next_index]
      larger_array = recurseArr(new_array, stop_recurse)
      return larger_array + "|\n" + growing_array 
    }
  }

  let actual;
  try {
    let recurse_6_times = recurseArr([1], 6);
    actual = 'did not catch the error for some reason';
  } catch (e) {
    actual = e;
  }

  actual_one_line = oneLineString(actual);
  expected = `TC@48 - The reference variable 'growing_array' in function 'recurseArr()' changed values from [1,2,3] to [1,2,'THREE'] START-SAME ~ [1,2, PRE-DIFF ~ 3] POST-DIFF ~ 'THREE']`; 
  if (actual_one_line!==expected) {       
    test_failed = 1;  
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual_one_line);
    _throw(`${error_id} _mutatedVariables() misfired with : ${actual}`);
  }
  if (typeof failed_mutatedVariables !== 'undefined') {
    failed_mutatedVariables += test_failed;
    tested_mutatedVariables ++;
  }
}


