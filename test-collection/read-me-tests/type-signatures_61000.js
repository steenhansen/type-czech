/* eslint-disable */

pass_count = 0;
fail_count = 0;


function showFail(which_type, e='') {
    console.log('Failed test in signatures-type_61000.js : ', which_type, e)
    fail_count +=1
}



// ### A - Single Scalar Type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneStr(one_str){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type(one_str, 'string')
    /**/  }
    /**/  
    /**/  oneStr = type_czech.linkUp(oneStr, PRE_check_oneStr) 

    function oneStr(){ }

    try { oneStr('a-string'); // pass
    } catch (e) {             showFail('A1', e); }

try { oneStr(); showFail('A2');   // fail
} catch (e) {   }

try { oneStr(17); showFail('A3'); // fail
} catch (e) {     }

try { oneStr(false); showFail('A4'); // fail
} catch (e) {        }

try { oneStr('a-str', 'b-str'); showFail('A5'); // fail
} catch (e) {                   }



// ### B - Two Scalar Types
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoNums(num_1, str_2){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type([num_1, str_2], ['number', 'string'])
    /**/  }
    /**/  
    /**/  twoNums = type_czech.linkUp(twoNums, PRE_check_twoNums) 

    function twoNums(){ }

    try { twoNums(1, 'two'); // pass
    } catch (e) {            showFail('B1', e); }
  
try { twoNums(); showFail('B2');   // fail
} catch (e) {    }

try { twoNums(1); showFail('B3');   // fail
} catch (e) {     }

try { twoNums(1, 1); showFail('B4');   // fail
} catch (e) {        }

try { twoNums('one', 'two'); showFail('B5');   // fail
} catch (e) {                }

try { twoNums(1, 'two', 'three'); showFail('B6');   // fail
} catch (e) {                     }








// ### C - Single Object Type
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneObj(one_obj){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type(one_obj, {a:'number'})
    /**/  }
    /**/  
    /**/  oneObj = type_czech.linkUp(oneObj, PRE_check_oneObj) 

    function oneObj(){ }

    try { oneObj({a:17}); // pass
    } catch (e) {         showFail('C1', e); }
    
try { oneObj(); showFail('C2');   // fail
} catch (e) {    }

try { oneObj(18); showFail('C3');   // fail
} catch (e) {    }

try { oneObj({B:19}); showFail('C4');   // fail
} catch (e) {    }

try { oneObj({a:'string'}); showFail('C5');   // fail
} catch (e) {    }

try { oneObj({a:2222, b:1999}); showFail('C6');   // fail
} catch (e) {    }


// ### D - Two Object Types
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoObj(one_obj, two_obj){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type([one_obj, two_obj], [{a:'number'}, {b:'string'}])
    /**/  }
    /**/  
    /**/  twoObj = type_czech.linkUp(twoObj, PRE_check_twoObj) 

    function twoObj(){ }

    try { twoObj({a:17}, {b:'an-str'}); // pass
    } catch (e) {                       showFail('D1', e); }
      
try { twoObj(); showFail('D2');   // fail
} catch (e) {    }

try { twoObj(88); showFail('D3');   // fail
} catch (e) {    }

try { twoObj({a:17}); showFail('D4');   // fail
} catch (e) {    }

try { twoObj({a:'a-string'}); showFail('D5');   // fail
} catch (e) {    }

try { twoObj({b:'a-string'}); showFail('D6');   // fail
} catch (e) {    }

try { twoObj({a:'a-string'}, {b:'a-string'}); showFail('D7');   // fail
} catch (e) {    }





// ### E - Single Scalar Element Array
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneElemArr(one_num_elem_arr){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type(one_num_elem_arr, ['number'])
    /**/  }
    /**/  
    /**/  oneElemArr = type_czech.linkUp(oneElemArr, PRE_check_oneElemArr) 

    function oneElemArr(){ }

    try { oneElemArr([17]); // pass
    } catch (e) {                       showFail('E1', e); }
        
try { oneElemArr(); showFail('E2');   // fail
} catch (e) {    }


try { oneElemArr(1329); showFail('E3');   // fail
} catch (e) {    }

try { oneElemArr(['gonna-fail']); showFail('E4');   // fail
} catch (e) {    }

try { oneElemArr([[18]]); showFail('E5');   // fail
} catch (e) {    }

try { oneElemArr([17,18]); showFail('E6');   // fail
} catch (e) {    }






// ### F - Two Scalar Element Array

    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoElemArr(two_num_elem_arr){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type(two_num_elem_arr, ['number', 'number'])
    /**/  }
    /**/  
    /**/  twoElemArr = type_czech.linkUp(twoElemArr, PRE_check_twoElemArr) 

    function twoElemArr(){ }


    try { twoElemArr([17, 18]); // pass
    } catch (e) {               showFail('F1', e); }
      
try { twoElemArr(); showFail('F2');   // fail
} catch (e) {    }

try { twoElemArr(1999); showFail('F3');   // fail
} catch (e) {    }

try { twoElemArr([17]); showFail('F4');   // fail
} catch (e) {    }

try { twoElemArr([17,18,19]); showFail('F5');   // fail
} catch (e) {    }

try { twoElemArr([1,2,'three']); showFail('F6');   // fail
} catch (e) {    }










// ### G - Variadic Scalar Types
  /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_someNums(){
    /**/    pass_count ++;
    /**/    return type_czech.checkArgs_typeEach(arguments, 'number')
    /**/  }
    /**/  
    /**/  someNums = type_czech.linkUp(someNums, PRE_check_someNums) 

    function someNums(){ }

    try { someNums(1); // pass
    } catch (e) {      showFail('G1', e); }
    
    try { someNums(1,2,3); // pass
    } catch (e) {          showFail('G2', e); }
        
try { someNums(); showFail('G3');   // fail
} catch (e) {     }

 try { someNums(1,2,false); showFail('G4');   // fail
} catch (e) {              }






// ### H - Array with Single Scalar
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_oneNumArray(array_with_1_num){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type(array_with_1_num, ['number'])
    /**/  }
    /**/  
    /**/  oneNumArray = type_czech.linkUp(oneNumArray, PRE_check_oneNumArray) 

    function oneNumArray(){ }

    try { oneNumArray([1]); // pass
    } catch (e) {           showFail('H1', e); }
       
try { oneNumArray(); showFail('H2');   // fail
} catch (e) {        }
try { oneNumArray(1); showFail('H3');   // fail
} catch (e) {         }
try { oneNumArray([]); showFail('H4');   // fail
} catch (e) {          }
try { oneNumArray(['sdf']); showFail('H5');   // fail
} catch (e) {               }
try { oneNumArray([1, 2]); showFail('H6');   // fail
} catch (e) {              }






// ### I - Array with Two Scalars
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_twoNumArray(array_with_num_str){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type(array_with_num_str, ['number', 'string'])
    /**/  }
    /**/  
    /**/  twoNumArray = type_czech.linkUp(twoNumArray, PRE_check_twoNumArray) 

    function twoNumArray(){ }

    try { twoNumArray([1, 'blue-velvet']); // pass
    } catch (e) {           showFail('I1', e); }
           
try { twoNumArray(); showFail('I2');   // fail
} catch (e) {        }

try { twoNumArray(1, 'a-string'); showFail('I3');   // fail
} catch (e) {        }

try { twoNumArray([9, 8]); showFail('I4');   // fail
} catch (e) {        }

try { twoNumArray('str-1', 'str-2'); showFail('I5');   // fail
} catch (e) {        }

try { twoNumArray([9876,   'str-1', 123]); showFail('I6');   // fail
} catch (e) {        }

 









// ### J - Two Array Types
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_someNums_2(strs_1, nums_2){
    /**/    pass_count ++;
    /**/    the_parameters = [strs_1, nums_2] 
    /**/    the_signature = ['strings', 'numbers']
    /**/    return type_czech.checkParam_type(the_parameters, the_signature)
    /**/  }
    /**/  
    /**/  someNums_2 = type_czech.linkUp(someNums_2, PRE_check_someNums_2) 

    function someNums_2(){ }

//    someNums_2(['car', 'bus'], [1,2,3]);   //  q*bert
    
    try { someNums_2(['car'], [1,2,3]); // pass
    } catch (e) {                     showFail('J1', e); }
            
    try { someNums_2(['one'], [2]); // pass
    } catch (e) {                 showFail('J2', e); }
         
try { someNums_2(); showFail('J3');   // fail
} catch (e) {     }

try { someNums_2(['car']); showFail('J4');   // fail
} catch (e) {            }

try { someNums_2(['car'], ['bus']); showFail('J5');   // fail
} catch (e) {                     }

try { someNums_2([1,2,3], [1,2,3]); showFail('J6');   // fail
} catch (e) {                     }








// ### K - Array of Array Types
    /**/  type_czech = TypeCzech('THROW-EXCEPTIONS')
    /**/  
    /**/  function PRE_check_arrayArray(array_with_2_num){
    /**/    pass_count ++;
    /**/    return type_czech.checkParam_type(array_with_2_num, ['arrays'])
    /**/  }
    /**/  
    /**/  arrayArray = type_czech.linkUp(arrayArray, PRE_check_arrayArray) 

    function arrayArray(){ }

    try { arrayArray([ [1, 'b'] ]); // pass
    } catch (e) {                   showFail('K1', e); }

    try { arrayArray([ [2, 3],   ['a', 'b'] ]); // pass
    } catch (e) {                               showFail('K2', e); }

    try { arrayArray([ [4, 'c'], ['d', 5] ]); // pass
    } catch (e) {                             showFail('K3', e); }

    try { arrayArray([ [1], [2], [3], [4], [5] ]); // pass
    } catch (e) {                                  showFail('K4', e); }


try { arrayArray(); showFail('K5');   // fail
} catch (e) {       }

try { arrayArray([]); showFail('K6');   // fail
} catch (e) {         }

try { arrayArray([ 'not-array' ]); showFail('K7');   // fail
} catch (e) {                      }

try { arrayArray([ [6], 'not-array' ]); showFail('K8');   // fail
} catch (e) {                           }
















if (fail_count>0) {
  the_problem = `read-me-tests/signatures-type_61000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

