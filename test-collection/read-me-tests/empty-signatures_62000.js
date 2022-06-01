/* eslint-disable */

pass_count = 0;
fail_count = 0;


function showFail(which_type, e='') {
    console.log('Failed test in signatures-type_62000.js : ', which_type, e)
    fail_count +=1
}



    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneValue(one_value){
    /**/    pass_count +=1;
    /**/    return type_czech.checkParam_empty(one_value, 'EMPTY-ERROR')  // one thing
    /**/  }
    /**/  
    /**/  oneValue = type_czech.linkUp(oneValue, PRE_check_oneValue) 

    function oneValue(one_value){ }

    try { oneValue('a-string');  // pass
    } catch (e) {             showFail('A1', e); }
    try {  oneValue(17);  // pass
    } catch (e) {             showFail('A2', e); }

try { oneValue(); showFail('A3');   // fail
} catch (e) {    }

try { oneValue(''); showFail('A4'); // fail
} catch (e) {      }

try { oneValue([]); showFail('A5'); // fail
} catch (e) {         }

try {oneValue({}); showFail('A6');   // fail
} catch (e) {    }

try { oneValue(null); showFail('A7'); // fail
} catch (e) {      }

try { oneValue(undefined); showFail('A8'); // fail
} catch (e) {         }

try { oneValue(Infinity); showFail('A9');   // fail
} catch (e) {    }

try { oneValue(NaN); showFail('A10'); // fail
} catch (e) {      }

try { oneValue('one', 'two'); showFail('A11'); // fail
} catch (e) {         }





    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoValues(value_1, value_2){
    /**/    pass_count +=1;    
    /**/    return type_czech.checkParam_empty([value_1, value_2], ['EMPTY-ERROR', 'EMPTY-ERROR'])  // two things
    /**/  }
    /**/  
    /**/  twoValues = type_czech.linkUp(twoValues, PRE_check_twoValues) 

    function twoValues(value_1, value_2){ }

   try {  twoValues('one', 'two');   // pass
   } catch (e) {             showFail('B1', e); }
   try {  twoValues(1, 2);           // pass
   } catch (e) {             showFail('B2', e); }
   try {  twoValues([1], ['two']);   // pas
   } catch (e) {             showFail('B3', e); }

try {  twoValues(); showFail('B4');           // fail - nothing
} catch (e) {         }
try {  twoValues(1); showFail('B5');         // fail - one value
} catch (e) {         }
try {  twoValues('one', []); showFail('B6'); // fail - no number
} catch (e) {         }
try {  twoValues('one', ''); showFail('B7');         // fail - empty string
} catch (e) {         }
try {  twoValues(1, 'two', 'three'); showFail('B8'); // fail - extra parameter
} catch (e) {         }

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneElemArr(one_num_elem_arr){
    /**/    pass_count +=1;    
    /**/    return type_czech.checkParam_empty(one_num_elem_arr, ['EMPTY-ERROR'])  // one thing in one thing
    /**/  }
    /**/  
    /**/  oneElemArr = type_czech.linkUp(oneElemArr, PRE_check_oneElemArr) 

    function oneElemArr(one_num_elem_arr){ }

    try { oneElemArr(['will-pass']);  // pass
    } catch (e) {             showFail('C1', e); }
    try { oneElemArr([17]);           // pass
    } catch (e) {             showFail('C2', e); }
    try { oneElemArr([[18]]);         // pass
    } catch (e) {             showFail('C3', e); }
 
try { oneElemArr(); showFail('C4');        // fail - nothing
} catch (e) {         }
try { oneElemArr(1329); showFail('C5');    // fail - no array
} catch (e) {         }
try { oneElemArr([17,18]); showFail('C6'); // fail - two numbers
} catch (e) {         }
try { oneElemArr({a:1}); showFail('C7');   // fail - object
} catch (e) {         }

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/    pass_count +=1;      
    /**/  function PRE_check_twoElemArr(two_num_elem_arr){
    /**/    
    /**/    return type_czech.checkParam_empty(two_num_elem_arr, ['EMPTY-ERROR', 'EMPTY-ERROR'])
    /**/  }
    /**/  
    /**/  twoElemArr = type_czech.linkUp(twoElemArr, PRE_check_twoElemArr) 

    function twoElemArr(two_num_elem_arr){ }

    try { twoElemArr([17, 18]);  // pass
    } catch (e) {             showFail('D1', e); }

try { twoElemArr(); showFail('D2');               // fail - nothing
} catch (e) {         }
try { twoElemArr(1999); showFail('D3');            // fail - number not array
} catch (e) {         }
try { twoElemArr([17]); showFail('D4');            // fail - only one number
} catch (e) {         }

try { twoElemArr([17,18,19]); showFail('D5');      // fail - three numbers
} catch (e) {         }
try { twoElemArr([1,2,'three']); showFail('D6');   // fail - two strings
} catch (e) {         }

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/    pass_count +=1;      
    /**/  function PRE_check_someNums(){
    /**/    
    /**/    return type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
    /**/  }
    /**/  
    /**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums) 

    function someNums(){ }

    try { someNums(1);   // pass
    } catch (e) {             showFail('E1', e); }
    try { someNums(1,2,3);   // pass
    } catch (e) {             showFail('E2', e); }
   
try { someNums(); showFail('E3');       // fail - nothing
} catch (e) {         }
try { someNums(1,2,''); showFail('E4'); // fail - last is empty
} catch (e) {         }

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneNumArray(array_with_1_num){
    /**/    pass_count +=1;        
    /**/    return type_czech.checkParam_empty(array_with_1_num, ['EMPTY-ERROR'])
    /**/  }
    /**/  
    /**/  oneNumArray = type_czech.linkUp(oneNumArray, PRE_check_oneNumArray) 

    function oneNumArray(array_with_1_num){ }

    try { oneNumArray([1]);   // pass
    } catch (e) {           showFail('F1', e); }

try { oneNumArray(); showFail('F2');        // fail - nothing
} catch (e) {         }
try { oneNumArray(1); showFail('F3');       // fail - not array
} catch (e) {         }
try { oneNumArray([]); showFail('F4');      // fail - not number array
} catch (e) {         }
try { oneNumArray(['']); showFail('F5');    // fail - string
} catch (e) {         }
try { oneNumArray([1, '']); showFail('F6'); // fail - two parameters
} catch (e) {         }

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoNumArray(array_with_num_str){
    /**/    pass_count +=1;        
    /**/    return type_czech.checkParam_empty(array_with_num_str, ['EMPTY-ERROR', 'EMPTY-ERROR'])
    /**/  }
    /**/  
    /**/  twoNumArray = type_czech.linkUp(twoNumArray, PRE_check_twoNumArray) 

    function twoNumArray(array_with_num_str){ }

   try { twoNumArray([1, 'blue-velvet']);   // pass
   } catch (e) {           showFail('G1', e); }
   try { twoNumArray([9, 8]);               // pass
   } catch (e) {           showFail('G2', e); }

try { twoNumArray(); showFail('G3')                       // fail - nothing
} catch (e) {         }
try { twoNumArray(1, 'a-string'); showFail('G4')          // fail - not an array
} catch (e) {         }
try { twoNumArray(['str-1']); showFail('G5')              // fail - one value
} catch (e) {         }
try { twoNumArray([9876,   'str-1', 123]); showFail('G6') // fail - three values
} catch (e) {         }



    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneObject(one_object){
    /**/    pass_count +=1;        
    /**/    return type_czech.checkParam_empty(one_object, {a: 'EMPTY-ERROR'} )
    /**/  }
    /**/  
    /**/  oneObject = type_czech.linkUp(oneObject, PRE_check_oneObject) 

    function oneObject(one_object){ }

    try {  oneObject({a:'a-string'});  // pass
  } catch (e) {           showFail('H1', e); }
  try {  oneObject({a:17});  // pass
  } catch (e) {           showFail('H2', e); }
  try {  oneObject({a:{b:{}}});  // pass
  } catch (e) {           showFail('H3', e); }
  try {  oneObject({a:{c:[]}});  // pass
  } catch (e) {           showFail('H4', e); }

try {  oneObject({b:52});  showFail('H5'); // fail - no 'a' key
} catch (e) {         }
try {   oneObject({a:''});  showFail('H6'); // fail
} catch (e) {         }
try {   oneObject({a:[]});  showFail('H7'); // fail
} catch (e) {         }
try {   oneObject({a:{}});  showFail('H8'); // fail
} catch (e) {         }







if (fail_count>0) {
  throw "read-me-tests/signatures-empty_62000.js"+ fail_count
}

TEST_total_checks += pass_count;

