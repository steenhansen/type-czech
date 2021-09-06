/* eslint-disable */

tested_shapeContainer = 0;

failed_shapeContainer = 0;

_shapeContainer_17001();
_shapeContainer_17002();
_shapeContainer_17003();
_shapeContainer_17004();
_shapeContainer_17005();
_shapeContainer_17006();
_shapeContainer_17007();
_shapeContainer_17008();
_shapeContainer_17009();




_shapeContainer_17101();
_shapeContainer_17102();
_shapeContainer_17103();
//_shapeContainer_17104();

total_fails += failed_shapeContainer;
console.log('_shapeContainer failed tests', failed_shapeContainer);

total_checks += tested_shapeContainer;
console.log('_shapeContainer passed tests', tested_shapeContainer);

function _shapeContainer_17001(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container =  { r: 11 };    
  container_shape =  { r: "Number" };    
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = ""; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}


function _shapeContainer_17002(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container =  [ 13, 14, 15 ];    
  container_shape =  [ "Number" ]; 
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = ""; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}

function _shapeContainer_17003(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container =  [ 13, 14, 15 ];    
  container_shape =   { r: "Number" };  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = `TC@36 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[13,14,15]`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}



function _shapeContainer_17004(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container = [  [[1, 2], [3, 4]], [[5, false], [7, false]] ];    
  container_shape = [  [["N", "N"]],     [['N', "B"]] ];  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = ''; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}



function _shapeContainer_17005(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container = [  [[1, 2], [3, 4]], [[5, false], ['a', false]] ];    
  container_shape = [  [["N", "N"]],     [['N', "B"]] ];  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = "TC@44 -  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'."; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}








function _shapeContainer_17006(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container = [  {a:[[1, 2], [3, 4]]}, {b:[[5, false], [7, false]]} ];    
  container_shape = [  {a:[["N", "N"]]},     {b:[['N', "B"]]} ];  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = ''; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}



function _shapeContainer_17007(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[[5, false], [7, false]]} ];    
  container_shape = [  {a:[["N", "N"], ["N", "N"]]},     {b:[['N', "B"], ['N', "B"]]} ];  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = ''; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}


function _shapeContainer_17008(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[[5, 1], [7, false]]} ];    
  container_shape = [  {a:[["N", "N"], ["N", "N"]]},     {b:[['N', "B"], ['N', "B"]]} ];  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = "TC@44 -  INDEX '1' is assumed to be a 'Boolean', but is mistakenly a 'Number'."; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}


function _shapeContainer_17009(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container = [  {a:[[1, 2],     [3, 4]]},         {b:[['a', false], [7, false]]} ];    
  container_shape = [  {a:[["N", "N"], ["N", "N"]]},     {b:[['N', "B"], ['N', "B"]]} ];  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = "TC@44 -  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'."; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}

////////////////////////////////////////////////////////////////////////////////////

function _shapeContainer_17101(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17101';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  check_container = [  {A:{B:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];    
  container_shape = [  {A:{B:[["N", "N"], ["N", "N"]]}},     {C:{D:[['N', "B"], ['N', "B"]]}} ];  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = ""; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}




function _shapeContainer_17102(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17102';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
                 
  check_container = [  {E:{B:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];    
  container_shape = [  {A:{B:[["N", "N"], ["N", "N"]]}},     {C:{D:[['N', "B"], ['N', "B"]]}} ];  
  //                    E 
  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = "TC@46 -  The key 'A', which has a type of '{'B':[['N','N'],['N','N']]}', is missing in the checked object"; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}


function _shapeContainer_17103(){
  type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '17103';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
                 
  check_container = [  {A:{E:[[1, 2],     [3, 4]]}},         {C:{D:[[8, false], [7, false]]}} ];    
  container_shape = [  {A:{B:[["N", "N"], ["N", "N"]]}},     {C:{D:[['N', "B"], ['N', "B"]]}} ];  
  //                       E 
  
  exact_shape = 'TYPE-EXTRAS' ;
  before_str = beforeCheck(check_container, container_shape);
  actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
  afterCheck(check_container, container_shape, before_str, error_id);
  expected = "TC@46 -  The key 'B', which has a type of '[['N','N'],['N','N']]', is missing in the checked object"; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
  }
  if (typeof failed_shapeContainer !== 'undefined') {
    failed_shapeContainer +=type_czech.failureTally();
    tested_shapeContainer ++;
  }
}

// function _shapeContainer_17104(){
//   type_czech=TypeCzech('LOG-ERRORS', 'DEBUG-ERROR-TAGS'
//   //, 'DEBUG-CONSOLE-TRACE'
//   );
//   TYPE_CZECH_current_test_number = '17104';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);
                 

//                                          // can I get ['number'] for [1,2,3,4,5] ???
// function randomTree(num_nodes){
//   if (num_nodes>0) {
//     num leaves = 0 to 2  // empty [] and {} ok                        array  1    object k:1 =>    'N' k1:'N', k2:'n', k3:'n'   => to get error change 
//     arr or obj = 0 to 1
//     create arr or obj then  = tree on leaves(num_nodes-1)
//   }
// }                                                                                             array                                               object
// [  {k1: {   k2:[[1,   2],   [3,    4]],  k3:[[5, 6],     [7, 8]]  } ] ===>    [  {k1: {   k2:[[],   ['n']],  k3:[['n', 'n'],     ['n', 'n']]  } , {} ] 

// function makeTree(){
//   num_nodes = 1 to 1000
//   random_tree = randomTree(num_nodes);
// }



// WHAT ABOUT ----- RANDOMLY MAKING AN Object, THEN sTRINGIfY IT   then mirror it to get an ok shape 
// then changing one thing and make sure it gives an error


//   // correct mix
// also have a mix of ['n']   and ['n','n'] below to test 

//   check_container = [  {A: {   B:[[1,   2],   [3,    4]],  C:[[5, 6],     [7, 8]]  },
//                         D: {   E:[[9,   10],   [11,    12]],  F:[[13, 14],     [15, 16]]  }  },
//                         {G: {   H:[[1,   2],   [3,    4]],  I:[[5, 6],     [7, 8]]  },
//                         J: {   K:[[9,   10],   [11,    12]],  L:[[13, 14],     [15, 16]]  }  }  ]
//                                K: [["N"]]                      L:[[["N"]]     
//                                K:[["N", "N"]]
//                                K:[["N", "N"], ["N","N"]]         

// }},    {D:{E:[[8, 9], [7, 10]]},  F:[[1, 2], [3, 4]]   } ];    
//   container_shape = [  {A:{   B:[["N", "N"], ["N", "N"]], C:[["N", "N"], ["N", "N"]] }},    {D:{E:[['N', "N"], ['N', "N"]],   F:[["N", "N"], ["N", "N"]]}} ];  
//   //                            E 
//   //console.log(type_czech.valid(check_container, container_shape));
// //actualVsExpected
  
//   exact_shape = 'TYPE-EXTRAS' ;
//   before_str = beforeCheck(check_container, container_shape);
//   actual = type_czech._shapeContainer(check_container, container_shape, exact_shape, type_czech._NOT_VARIAD_ARR_L_179);
//   afterCheck(check_container, container_shape, before_str, error_id);
//   expected = "TC@44 -  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'."; 
//   if (actual!==expected) {           
//     console.log("*EXPECTED*", expected);
//     console.log("**ACTUAL**", actual);
//     _throw(`${error_id} _shapeCollectionTypes() misfired with : ${actual}`);
//   }
//   if (typeof failed_shapeContainer !== 'undefined') {
//     failed_shapeContainer +=type_czech.failureTally();
//     tested_shapeContainer ++;
//   }
// }



////   DO ABOVE WITH OBJECT AS START, INSTEAD OF ARRAY, WITH TWO THINGS TO GET MULITPLES

////  ALSO DO A MIX, NOT ARRAY,ARRAY, BUT [[ ARRAY, oJBEC],  [OBJECT, ARRAY]]

//// also do two objects not just one!!!!