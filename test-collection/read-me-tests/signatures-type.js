/* eslint-disable */

pass_count = 0;
fail_count = 0;

// ### A - Single Scalar Type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneStr(one_str){
    /**/    return type_czech.checkParam_type(one_str, 'string')
    /**/  }
    /**/  
    /**/  oneStr = type_czech.linkUp(oneStr, PRE_check_oneStr) 

    function oneStr(){ }

try { oneStr('a-string'); pass_count ++; // pass
} catch (e) {             fail_count ++; }

try { oneStr(); fail_count ++;   // fail
} catch (e) {   pass_count ++; }

try { oneStr(17); fail_count ++; // fail
} catch (e) {     pass_count ++; }

try { oneStr(false); fail_count ++; // fail
} catch (e) {        pass_count ++; }

try { oneStr('a-str', 'b-str'); fail_count ++; // fail
} catch (e) {                   pass_count ++; }



// ### B - Two Scalar Types
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoNums(num_1, str_2){
    /**/    return type_czech.checkParam_type([num_1, str_2], ['number', 'string'])
    /**/  }
    /**/  
    /**/  twoNums = type_czech.linkUp(twoNums, PRE_check_twoNums) 

    function twoNums(){ }

    twoNums(1, 'two') // pass

try { twoNums(1, 'two'); pass_count ++; // pass
} catch (e) {            fail_count ++; }
  
try { twoNums(); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { twoNums(1); fail_count ++;   // fail
} catch (e) {     pass_count ++; }

try { twoNums(1, 1); fail_count ++;   // fail
} catch (e) {        pass_count ++; }

try { twoNums('one', 'two'); fail_count ++;   // fail
} catch (e) {                pass_count ++; }

try { twoNums(1, 'two', 'three'); fail_count ++;   // fail
} catch (e) {                     pass_count ++; }








// ### C - Single Object Type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneObj(one_obj){
    /**/    return type_czech.checkParam_type(one_obj, {a:'number'})
    /**/  }
    /**/  
    /**/  oneObj = type_czech.linkUp(oneObj, PRE_check_oneObj) 

    function oneObj(){ }

try { oneObj({a:17}); pass_count ++; // pass
} catch (e) {         fail_count ++; }
    
try { oneObj(); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj(18); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj({B:19}); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj({a:'string'}); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj({a:2222, b:1999}); fail_count ++;   // fail
} catch (e) {    pass_count ++; }


// ### D - Two Object Types
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoObj(one_obj, two_obj){
    /**/    return type_czech.checkParam_type([one_obj, two_obj], [{a:'number'}, {b:'string'}])
    /**/  }
    /**/  
    /**/  twoObj = type_czech.linkUp(twoObj, PRE_check_twoObj) 

    function twoObj(){ }

try { twoObj({a:17}, {b:'an-str'}); pass_count ++; // pass
} catch (e) {                       fail_count ++; }
      
try { oneObj(); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj(88); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj({a:17}); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj({a:'a-string'}); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj({b:'a-string'}); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneObj({a:'a-string'}, {b:'a-string'}); fail_count ++;   // fail
} catch (e) {    pass_count ++; }





// ### E - Single Scalar Element Array
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneElemArr(one_num_elem_arr){
    /**/    return type_czech.checkParam_type(one_num_elem_arr, ['number'])
    /**/  }
    /**/  
    /**/  oneElemArr = type_czech.linkUp(oneElemArr, PRE_check_oneElemArr) 

    function oneElemArr(){ }

try { oneElemArr([17]); pass_count ++; // pass
} catch (e) {                       fail_count ++; }
      
try { oneElemArr(); fail_count ++;   // fail
} catch (e) {    pass_count ++; }


try { oneElemArr(1329); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneElemArr(['gonna-fail']); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneElemArr([[18]]); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { oneElemArr([17,18]); fail_count ++;   // fail
} catch (e) {    pass_count ++; }






// ### F - Two Scalar Element Array

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoElemArr(two_num_elem_arr){
    /**/    return type_czech.checkParam_type(two_num_elem_arr, ['number', 'number'])
    /**/  }
    /**/  
    /**/  twoElemArr = type_czech.linkUp(twoElemArr, PRE_check_twoElemArr) 

    function twoElemArr(){ }


try { twoElemArr([17, 18]); pass_count ++; // pass
} catch (e) {               fail_count ++; }
      
try { twoElemArr(); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { twoElemArr(1999); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { twoElemArr([17]); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { twoElemArr([17,18,19]); fail_count ++;   // fail
} catch (e) {    pass_count ++; }

try { twoElemArr([1,2,'three']); fail_count ++;   // fail
} catch (e) {    pass_count ++; }










// ### G - Variadic Scalar Types
  /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_someNums(){
    /**/    return type_czech.checkArgs_typeVariadic(arguments, ['number-array'])
    /**/  }
    /**/  
    /**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums) 

    function someNums(){ }

try { someNums(1); pass_count ++; // pass
} catch (e) {      fail_count ++; }
 
try { someNums(1,2,3); pass_count ++; // pass
} catch (e) {          fail_count ++; }
       
try { someNums(); fail_count ++;   // fail
} catch (e) {     pass_count ++; }

 try { someNums(1,2,false); fail_count ++;   // fail
} catch (e) {              pass_count ++; }






// ### H - Array with Single Scalar
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneNumArray(array_with_1_num){
    /**/    return type_czech.checkParam_type(array_with_1_num, ['number'])
    /**/  }
    /**/  
    /**/  oneNumArray = type_czech.linkUp(oneNumArray, PRE_check_oneNumArray) 

    function oneNumArray(){ }

try { oneNumArray([1]); pass_count ++; // pass
} catch (e) {           fail_count ++; }
       
try { oneNumArray(); fail_count ++;   // fail
} catch (e) {        pass_count ++; }
try { oneNumArray(1); fail_count ++;   // fail
} catch (e) {         pass_count ++; }
try { oneNumArray([]); fail_count ++;   // fail
} catch (e) {          pass_count ++; }
try { oneNumArray(['sdf']); fail_count ++;   // fail
} catch (e) {               pass_count ++; }
try { oneNumArray([1, 2]); fail_count ++;   // fail
} catch (e) {              pass_count ++; }






// ### I - Array with Two Scalars
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoNumArray(array_with_num_str){
    /**/    return type_czech.checkParam_type(array_with_num_str, ['number', 'string'])
    /**/  }
    /**/  
    /**/  twoNumArray = type_czech.linkUp(twoNumArray, PRE_check_twoNumArray) 

    function twoNumArray(){ }

    try { twoNumArray([1, 'blue-velvet']); pass_count ++; // pass
    } catch (e) {           fail_count ++; }
           
    try { twoNumArray(); fail_count ++;   // fail
    } catch (e) {        pass_count ++; }
   
    try { twoNumArray(1, 'a-string'); fail_count ++;   // fail
    } catch (e) {        pass_count ++; }
   
    try { twoNumArray([9, 8]); fail_count ++;   // fail
    } catch (e) {        pass_count ++; }
   
    try { twoNumArray('str-1', 'str-2'); fail_count ++;   // fail
    } catch (e) {        pass_count ++; }
   
    try { twoNumArray([9876,   'str-1', 123]); fail_count ++;   // fail
    } catch (e) {        pass_count ++; }
   
 




// ### J - Two Array Types
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_someNums_2(strs_1, nums_2){
    /**/    the_parameters = [strs_1, nums_2] 
    /**/    the_signature = ['string-array', 'number-array']
    /**/    return type_czech.checkParam_type(the_parameters, the_signature)
    /**/  }
    /**/  
    /**/  someNums_2 = type_czech.linkUp(someNums_2, PRE_check_someNums_2) 

    function someNums_2(){ }

try { someNums_2(['car'], [1,2,3]); pass_count ++; // pass
} catch (e) {                     fail_count ++; }
         
try { someNums_2(['one'], [2]); pass_count ++; // pass
} catch (e) {                 fail_count ++; }
         
try { someNums_2(); fail_count ++;   // fail
} catch (e) {     pass_count ++; }

try { someNums_2(['car']); fail_count ++;   // fail
} catch (e) {            pass_count ++; }

try { someNums_2(['car'], ['bus']); fail_count ++;   // fail
} catch (e) {                     pass_count ++; }

try { someNums_2([1,2,3], [1,2,3]); fail_count ++;   // fail
} catch (e) {                     pass_count ++; }








// ### K - Array of Array Types
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_arrayArray(array_with_2_num){
    /**/    return type_czech.checkParam_type(array_with_2_num, ['array-array'])
    /**/  }
    /**/  
    /**/  arrayArray = type_czech.linkUp(arrayArray, PRE_check_arrayArray) 

    function arrayArray(){ }

try { arrayArray([ [1, 'b'] ]); pass_count ++; // pass
} catch (e) {                   fail_count ++; }

try { arrayArray([ [2, 3],   ['a', 'b'] ]); pass_count ++; // pass
} catch (e) {                               fail_count ++; }

try { arrayArray([ [4, 'c'], ['d', 5] ]); pass_count ++; // pass
} catch (e) {                             fail_count ++; }

try { arrayArray([ [1], [2], [3], [4], [5] ]); pass_count ++; // pass
} catch (e) {                                  fail_count ++; }


try { arrayArray(); fail_count ++;   // fail
} catch (e) {       pass_count ++; }

try { arrayArray([]); fail_count ++;   // fail
} catch (e) {         pass_count ++; }

try { arrayArray([ 'not-array' ]); fail_count ++;   // fail
} catch (e) {                      pass_count ++; }

try { arrayArray([ [6], 'not-array' ]); fail_count ++;   // fail
} catch (e) {                           pass_count ++; }
















if (fail_count>1) {
  throw "read-me-tests/signatures-type.js"
}

TEST_total_checks += pass_count;

