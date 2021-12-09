/* eslint-disable */


tested_mutatedVariables = 0;
failed_mutatedVariables = 0;

 _mutatedVariables_14001();
  _mutatedVariables_14002();        // we need to test 2n !!!!!!!!!
   _mutatedVariables_14003();
  _mutatedVariables_14004();

 TEST_total_fails += failed_mutatedVariables;
 TEST_total_checks += tested_mutatedVariables;
 if (TEST_show_random) {
  console.log('_mutatedVariables failed tests 14000', failed_mutatedVariables)
  console.log('_mutatedVariables passed tests 14000', tested_mutatedVariables)
}

///////////////////////////////////////////////////////////////////

function _mutatedVariables_14001(){
  var TYPE_CZECH_current_test_number = '14001';       
  var mutate_14001 = [1,2,3];    
  var expect_error = `ME@405 - Variable 'mutate_14001' changed from [1,2,3] to [1,2,3,4] START-SAME ~ [1,2,3 PRE-DIFF ~ ] POST-DIFF ~ ,4]`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var actual_error;
        try {
          type_czech_test.check_buildSnapshot('_mutatedVariables_14001', 'mutate_14001', mutate_14001);
          mutate_14001.push(4);
          var actual_error = type_czech_test.check_mutatedSnapshot('_mutatedVariables_14001', 'mutate_14001');
        } catch (e) { }
        actual_error = actual_error.replace(/\s+/g, ' ').trim(); 
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_mutatedVariables !=='undefined') failed_mutatedVariables ++;
        }
        if (typeof tested_mutatedVariables !=='undefined') tested_mutatedVariables ++;
}








function _mutatedVariables_14002(){
  var TYPE_CZECH_current_test_number = '14002';       
  var mutate_14002 = 14;    
  var expect_error = `EX@109 - check_buildSnapshot()'s 3rd param not array/object but a 'number'`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var actual_error;
        try {
          type_czech_test.check_buildSnapshot('_mutatedVariables_14002', 'mutate_14002', mutate_14002);
        } catch (e) {
          actual_error = (e.replace(/\s+/g, ' ')).trim(); 
        }
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_mutatedVariables !=='undefined') failed_mutatedVariables ++;
        }
        if (typeof tested_mutatedVariables !=='undefined') tested_mutatedVariables ++;
}



function _mutatedVariables_14003(){
  var TYPE_CZECH_current_test_number = '14003';       
  var mutate_14003 = {a:1, b:2, c:3};
  var expect_error = `ME@405 - Variable 'mutate_14003' changed from {"a":1,"b":2,"c":3} to {"a":1,"b":"7","c":3} START-SAME ~ {"a":1,"b": PRE-DIFF ~ 2,"c":3} POST-DIFF ~ "7","c":3}`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var actual_error;
        try {
          type_czech_test.check_buildSnapshot('_mutatedVariables_14003', 'mutate_14003', mutate_14003);
          mutate_14003.b = "7";
          var actual_error = type_czech_test.check_mutatedSnapshot('_mutatedVariables_14003', 'mutate_14003');
        } catch (e) {  }
        actual_error = actual_error.replace(/\s+/g, ' ').trim(); 
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_mutatedVariables !=='undefined') failed_mutatedVariables ++;
        }
        if (typeof tested_mutatedVariables !=='undefined') tested_mutatedVariables ++;
}








function _mutatedVariables_14004(){
  var TYPE_CZECH_current_test_number = '14004';  
  var mutate_14004 = [1];  
  var expect_error =  `POST_recurseArr() POST-FUNC: ME@405 - Variable 'mutate_14004' changed from [1,2,3] to [1,2,"THREE"] START-SAME ~ [1,2, PRE-DIFF ~ 3] POST-DIFF ~ "THREE"] CHECKER check_mutatedSnapshot() ACTUAL TYPE 'string' VALUES "1,2,THREE,4,5"| "1,2,THREE,4"| "1,2,THREE" MUTATED VARIABLE mutate_14004 ORIGIN recurseArr(mutate_14004)`;
  var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  function PRE_recurseArr(mutate_14004){
    type_czech_test.check_buildSnapshot('recurseArr', 'mutate_14004', mutate_14004);
  }
  function POST_recurseArr(mutate_14004){
    mutate_issue = type_czech_test.check_mutatedSnapshot('recurseArr', 'mutate_14004');
    return mutate_issue;
  }
  function recurseArr(mutate_14004, stop_recurse){
    next_index = mutate_14004.length + 1;
    if (next_index === stop_recurse){
      return mutate_14004;
    } else {
      if (next_index === 4){
        mutate_14004[2] = 'THREE';                 // mutate previous entry
      }
      new_array = [...mutate_14004, next_index];
      larger_array = recurseArr(new_array, stop_recurse);
      return larger_array + '"| \n\t\t\t\t "' + mutate_14004;
    }
  }
  recurseArr = type_czech_test.linkUp(recurseArr, PRE_recurseArr, POST_recurseArr);
  var actual_error;
  try {
    recurseArr(mutate_14004, 6);
  } catch (e) {
    actual_error = ((e.message).replace(/\s+/g, ' ')).trim(); 
  }
  if (actual_error !== expect_error) {
    console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
    console.log(                          '    expected=', expect_error);
    if (typeof failed_mutatedVariables !=='undefined') failed_mutatedVariables ++;
  }
  if (typeof tested_mutatedVariables !=='undefined') tested_mutatedVariables ++;
}











