


function _throw(test_exception) { throw test_exception; }
	
function beforeCheck(prog_data, shape_data){
	const prog_str = JSON.stringify(prog_data);
	const shape_str = JSON.stringify(shape_data);
	const before_str = prog_str + shape_str;
	return before_str;
}

function afterCheck(prog_data, shape_data, before_str, location_str){
	const prog_str = JSON.stringify(prog_data);
	const shape_str = JSON.stringify(shape_data);
	const after_str = prog_str + shape_str;
	if (after_str!==before_str){
		 _throw(`EmptyCheck Value Change ! ${location_str} \n ${old_json_str} \n ${new_json_str}`);
	}
}

function errorMessage(error_number, error_text){
	return `test_EmptyCheck_test ${error_number} : error = "${error_text}"`;
}


function test_EmptyCheck_test_aaa_aaa(emptyVerify){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object =  "gasoline";
	  	const valid_shape =  "EMPTY-ER";
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@200');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@200', actual) );	}

	{	const check_object =  "";
	  	const valid_shape =  "EMPTY-ER";
	  	const expected = "emptyVerify(arguments, expected_emptys),SC@24 - EMPTY-ER states 'string' must not be empty for the value '',EMPTY-ER";
		  	const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@201');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@201', actual) );	}

	{	const check_object =  17;
	  	const valid_shape =  "EMPTY-ER";
	  	const expected = "";
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@202');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@202', actual) );	}



		{	const check_object =  NaN;
	  	const valid_shape =  "EMPTY-ER";
	  	const expected = "emptyVerify(arguments, expected_emptys),SC@24 - EMPTY-ER states 'number' must not be empty for the value 'NaN',EMPTY-ER";
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@203');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@203', actual) );	}








		
{	const check_object =  18;
	  	const valid_shape =  "EMPTY-OK";
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@204');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@204', actual) );	}


{	const check_object =  18;
	  	const valid_shape =  "MT-WRONG-b";
		const expected_e ="SC@11 - Must 'EMPTY-OK' or 'EMPTY-ER' not 'MT-WRONG-b'" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
	  	try{
			const actual = type_czech.emptyVerify(check_object, valid_shape);
		}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@205');
		
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@205', e) ); }}



	{	const check_object = 10;
	  	const valid_shape =  "EMPTY-ER";           //     "EMPTY-OK";         "EMPTY-ER";
	  //	const expected_e = `xtype_czech.exactEither() called with a non-array shape of {"a":1}`;
	  //	try{
	  		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@206');
			actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@206', actual) );	}
		// 	console.log('0000000000000000000000000000000000', actual)
		// }catch(e){
		// 	console.log('111111111111111111111111111111111')
		// 	e==expected_e ? tests_passed++ : _throw( errorMessage('aaa_aaa 666', e) ); 
		// }
	//}


	return tests_passed;
}

function test_EmptyCheck_test_bbb_bbb(emptyVerify){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object =  "gasoline";
	  	const valid_shape =  "EMPTY-ER";
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@207');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@207', actual) );	}

	{	const check_object =  "";
	  	const valid_shape =  "EMPTY-ER";
	  	const expected = `emptyVerify(arguments, expected_emptys),SC@24 - EMPTY-ER states 'string' must not be empty for the value '',"EMPTY-ER"`;
		  	const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@208');
			actual_array[2]= JSON.stringify(actual_array[2]);         
			actual_str = '' + actual_array; 
			actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@208', actual_str) );	}

	{	const check_object =  17;
	  	const valid_shape =  "EMPTY-ER";    // this is not a throw
	  	const expected = ``;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@209');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@209', actual) );	}






			{	const check_object =  0;
				const valid_shape =  "EMPTY-ER";
				const expected = "";
					const before_str = beforeCheck(check_object, valid_shape);
				const actual = type_czech.emptyVerify(check_object, valid_shape);
				afterCheck(check_object, valid_shape, before_str, 'ERROR@210');
			actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@210', actual) );	}
	
	
	
	



{	const check_object =  18;
	  	const valid_shape =  "EMPTY-OK";
		const expected_e ="SC@12 - Completely pointless as checking with ['EM-OK'] or ['EMPTY-OK'] matches everything";
	  		const before_str = beforeCheck(check_object, valid_shape);
		try{
			const actual = type_czech.emptyVerify(check_object, valid_shape);
		}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@211');
    		e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@211', e) ); 	} }

	{	const check_object =  18;
	  	const valid_shape =  "MT-WRONG-c";
	  	const expected_e = "_emptyArrayTypes() - The type 'MT-WRONG-c' is not valid";
	  		const before_str = beforeCheck(check_object, valid_shape);
	  	try{
			const actual = type_czech.emptyVerify(check_object, valid_shape);
		}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@212');
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@212', e) ); 	} }

	return tests_passed;
}





function test_EmptyCheck_test_ccc_ccc(emptyVerify){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object =  {str:"a-string"};
	  	const valid_shape =  {str:"EMPTY-ER"};
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.emptyVerify(check_object, valid_shape);


			actual_array[2]= JSON.stringify(actual_array[2]);   
			actual_str = '' + actual_array;
			afterCheck(check_object, valid_shape, before_str, 'ERROR@213');
			actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@213', actual_str) );	}

	{	const check_object =   {str:""};
	  	const valid_shape =   {str:"EMPTY-ER"};
	    	const expected = `emptyVerify(arguments, expected_emptys),SC@08 - 'str' is a 'string' which is reputed to be 'EMPTY-ER' but has a value of ''. SC@46 - The key 'str', which has a type of 'EMPTY-ER', is missing in the checked object,[object Object]`; 
		  	const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, '');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@214', actual) );	}

	{	const check_object =  {numx:17};
	  	const valid_shape =  {numx:"EMPTY-ER"};    // this is not a throw
	  	const expected = ``;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@215');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@215', actual) );	}


	{	const check_object =  {numx:0};
	  	const valid_shape =  {numx:"EMPTY-ER"};    // this is not a throw
	  	const expected = "";
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@216a');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@216a', actual) );	}


		{	const check_object =  {numx:NaN};
		const valid_shape =  {numx:"EMPTY-ER"};    // this is not a throw
		const expected =`emptyVerify(arguments, expected_emptys),SC@08 - 'numx' is a 'number' which is reputed to be 'EMPTY-ER' but has a value of '-NaN-'. SC@46 - The key 'numx', which has a type of 'EMPTY-ER', is missing in the checked object,[object Object]`;
			const before_str = beforeCheck(check_object, valid_shape);
		const actual = type_czech.emptyVerify(check_object, valid_shape);
		afterCheck(check_object, valid_shape, before_str, 'ERROR@216b');
	actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@216b', actual) );	}


{	const check_object =  {num_y:18};
	  	const valid_shape =  {num_y:"EMPTY-OK"};
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@217');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@217', actual) );	}



	{	const check_object =  {num_q: 18};
	  	const valid_shape =  {num_q:"MT-WRONG-d"};
	  	const expected_e = "SC@10 - bad invalid key 'MT-WRONG-d', must be either EMPTY-OK/EM-OK or EMPTY-ER/EM-ER";
	  		const before_str = beforeCheck(check_object, valid_shape);
	  	try{
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			
		}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@218');
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@218', e) ); 	} }


{	const check_object =  {num_JJ:18};
	  	const valid_shape =  {num_y:"EMPTY-OK"};
		const expected ="emptyVerify(arguments, expected_emptys),SC@27 - Extra key in checked object - (num_JJ:'18')SC@46 - The key 'num_y', which has a type of 'EMPTY-OK', is missing in the checked object,[object Object]";
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@219');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@219', actual) );	}




	return tests_passed;
}

function test_EmptyCheck_test_ddd_ddd(emptyVerify){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object =  {str:["gasoline"]};
	  	const valid_shape =  {str:["EMPTY-ER"]};
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@220');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@220', actual) );	}

	{	const check_object =  {str:[""]};
	  	const valid_shape =  {str:["EMPTY-ER"]};
	  	const expected = `emptyVerify(arguments, expected_emptys),SC@30 - INDEX '0' is erroneously empty : ,{"str":["EMPTY-ER"]}`;
			  		  	const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, '');

			actual_array[2]= JSON.stringify(actual_array[2]);         
			actual_str = '' + actual_array; 
			
			actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@221', actual_str) );	}

	{	const check_object =  {str:[17]};
	  	const valid_shape =  {str:["EMPTY-ER"]};    
	  	const expected = ``;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@222');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@222', actual) );	}


	{	const check_object =  {str:[0]};
	  	const valid_shape =  {str:["EMPTY-ER"]};    
	  	const expected = ``;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@223a');
			actual_array[2]= JSON.stringify(actual_array[2]);         
			actual_str = '' + actual_array; 
			actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@223a', actual_str) );	}


			{	const check_object =  {str:[NaN]};
	  	const valid_shape =  {str:["EMPTY-ER"]};    
	  	const expected = `emptyVerify(arguments, expected_emptys),SC@30 - INDEX '0' is erroneously empty : ,{"str":["EMPTY-ER"]}`;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@223b');
			actual_array[2]= JSON.stringify(actual_array[2]);         
			actual_str = '' + actual_array; 
			actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@223b', actual_str) );	}









{	const check_object =  {str:[18]};
	  	const valid_shape =  {str:["EMPTY-OK"]};
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@224');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@224', actual) );	}



	{	const check_object =  {str:[18]};
	  	const valid_shape =  {str:["MT-WRONG-e"]};
	  	const expected_e = "_emptyArrayTypes() - The type 'MT-WRONG-e' is not valid";
	  		const before_str = beforeCheck(check_object, valid_shape);
	  	try{
			const actual = type_czech.emptyVerify(check_object, valid_shape);
		}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@225');
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@225', e) ); 	} }






	return tests_passed;
}




function test_EmptyCheck_test_eee_eee(emptyVerify){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object = {str:"a-string"};
	  	const valid_shape =  {str:"EMPTY-ER"};
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@226');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@226', actual) );	}

	{	const check_object =   {str:""};
	  	const valid_shape =   {str:"EMPTY-ER"};
		  const expected = `emptyVerify(arguments, expected_emptys),SC@08 - 'str' is a 'string' which is reputed to be 'EMPTY-ER' but has a value of ''. SC@46 - The key 'str', which has a type of 'EMPTY-ER', is missing in the checked object,{"str":"EMPTY-ER"}`;
			const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.emptyVerify(check_object, valid_shape);
			actual_array[2]= JSON.stringify(actual_array[2]);   
			actual_str = '' + actual_array;
			afterCheck(check_object, valid_shape, before_str, 'ERROR@227');
			actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@227', actual_str) );	}

	{	const check_object =  {numx:17};
	  	const valid_shape =  {numx:"EMPTY-ER"};    // this is not a throw
	  	const expected = ``;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@228');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@228', actual) );	}

	// {	const check_object =  {numx:0};
	//   	const valid_shape =  {numx:"EMPTY-ER"};    // this is not a throw
	//   	const expected = "emptyVerify(arguments_obj, shape_list),SC@08 - 'numx' is a 'number' which is reputed to be 'EMPTY-ER' but has a value of 0SC@46 - The key 'numx', which has a type of 'EMPTY-ER', is missing in the checked object,[object Object]"; 
	//   		const before_str = beforeCheck(check_object, valid_shape);
	// 		const actual = type_czech.emptyVerify(check_object, valid_shape);
	// 		afterCheck(check_object, valid_shape, before_str, 'ERROR@229');
	// 	actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@229', actual) );	}



{	const check_object =  {num_y:18};
	  	const valid_shape =  {num_y:"EMPTY-OK"};
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@230');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@230', actual) );	}



	{	const check_object =  {num_q: 18};
	  	const valid_shape =  {num_q:"MT-WRONG-a"};
	  	const expected_e = "SC@10 - bad invalid key 'MT-WRONG-a', must be either EMPTY-OK/EM-OK or EMPTY-ER/EM-ER";
	  		const before_str = beforeCheck(check_object, valid_shape);
	  	try{
			const actual = type_czech.emptyVerify(check_object, valid_shape);
		}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@231');
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@231', e) ); 	} }



	{	const check_object =  {num_JJ:18};
	  	const valid_shape =  {num_y:"EMPTY-OK"};
	  	const expected_e = "The key 'num_y', which has a type of 'EMPTY-OK', is missing in the checked object";
	  		const before_str = beforeCheck(check_object, valid_shape);
	  	try{
			const actual = type_czech.emptyVerify(check_object, valid_shape);
		}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@232');
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@232', e) ); 	} }


// {	const check_object =  [{num_JJ:18}];
// 	  	const valid_shape =  [{num_y:"EMPTY-OK"}];
// 		const expected ="Extra key in checked object - (num_JJ:'18')";
// 	  		const before_str = beforeCheck(check_object, valid_shape);
// 			const actual = type_czech.emptyVerify(check_object, valid_shape);
// 			afterCheck(check_object, valid_shape, before_str, 'eee_eee 666');
// 		actual==expected ? tests_passed++ : _throw( errorMessage('eee_eee 666', actual) );	}




	return tests_passed;
}




function test_EmptyCheck_test_fff_fff(emptyVerify){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object = [{str:"a-string", num:17}, {str:"a-string", num:17}];
	  	const valid_shape =  [{str:"EMPTY-ER", num:"EMPTY-OK"}, {str:"EMPTY-ER", num:"EMPTY-OK"}];
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@233');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@233', actual) );	}


	{	const check_object = [["a-string", 17],          ["a-string", 17]];
	  	const valid_shape =  [["EMPTY-ER", "EMPTY-OK"], ["EMPTY-ER", "EMPTY-OK"]];
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@234');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@234', actual) );	}

	{	const check_object = {one:{str:"a-string", num:17}, two:{str:"a-string", num:17}};
	  	const valid_shape =  {one:{str:"EMPTY-ER", num:"EMPTY-OK"}, two:{str:"EMPTY-ER", num:"EMPTY-OK"}};
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@235');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@235', actual) );	}

	{	const check_object = {three:["a-string", 17],          four:["a-string", 17]};
	  	const valid_shape =  {three:["EMPTY-ER", "EMPTY-OK"], four:["EMPTY-ER", "EMPTY-OK"]};
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@236');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@236', actual) );	}



{	const check_object = [["a-string", "b-string", "c-string"], ["a-string", "b-string", "c-string"]];
	  	const valid_shape =  [["EMPTY-ER"], ["EMPTY-OK"]];
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@237');
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@237', actual) );	}



	{	const check_object = [["a-string", "b-string", "c-string"], ["x-string",  "y-string", "z-string"]];
	  	const valid_shape =  [["EMPTY-ER"],                         ["EMPTY-OK", "EMPTY-ER", "EMPTY-ER"]];
		const expected ="" ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@238');
		//	console.log('actual')
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@238', actual) );	}

////////////////////////





{	const check_object = [[1,2,3,4], ['a', 'b', 'c', 'd']]; 
const valid_shape =  [ ["EMPTY-ER"], ["EMPTY-ER"]];
const expected ="" ;
	const before_str = beforeCheck(check_object, valid_shape);
const actual = type_czech.emptyVerify(check_object, valid_shape);
afterCheck(check_object, valid_shape, before_str, 'ERROR@239');
//	console.log('actual')
actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@239', actual) );	}


{	const check_object = ['a', 1]; 
const valid_shape =  [ "EMPTY-ER", "EMPTY-ER"];
const expected ="" ;
	const before_str = beforeCheck(check_object, valid_shape);
const actual = type_czech.emptyVerify(check_object, valid_shape);
afterCheck(check_object, valid_shape, before_str, 'ERROR@240');
//	console.log('actual')
actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@240', actual) );	}


{	const check_object = [1,2,3]; 
const valid_shape =  [ "EMPTY-ER"];
const expected ="" ;
	const before_str = beforeCheck(check_object, valid_shape);
const actual = type_czech.emptyVerify(check_object, valid_shape);
afterCheck(check_object, valid_shape, before_str, 'ERROR@241');
//	console.log('actual')
actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@241', actual) );	}


{	const check_object = 'a-string'; 
	const valid_shape =   "EMPTY-ER";
	const expected ="" ;
		const before_str = beforeCheck(check_object, valid_shape);
	const actual = type_czech.emptyVerify(check_object, valid_shape);
	afterCheck(check_object, valid_shape, before_str, 'ERROR@242');
	//	console.log('actual')
	actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@242', actual) );	}


	{	const check_object =  [];
		const valid_shape =  "EMPTY-ER";
		let actual_array;
	  const expected_e = `SC@58 - TypeCzech.emptyVerify() comparing actual [] parameter, with a value of [''], against the expected shape of "EMPTY-ER". They should be the same type; both []s, or both "EMPTY-ER"s.` ;
		const before_str = beforeCheck(check_object, valid_shape);
		try{
		  actual_array = type_czech.emptyVerify(check_object, valid_shape);
	  }catch(e){
		  actual_array=e
	  }
		afterCheck(check_object, valid_shape, before_str, 'ERROR@243');
		actual_array[2]= JSON.stringify(actual_array[2]);   
		actual_str = '' + actual_array;    
	  actual_str==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@243', actual_str) ); 
	}

		
	{	const check_object =  [[]];
		const valid_shape =  "EMPTY-ER";
		let actual_array;
	  const expected_e = `SC@58 - TypeCzech.emptyVerify() comparing actual [] parameter, with a value of [''], against the expected shape of "EMPTY-ER". They should be the same type; both []s, or both "EMPTY-ER"s.`;
		const before_str = beforeCheck(check_object, valid_shape);
		try{
		  actual_array = type_czech.emptyVerify(check_object, valid_shape);
	  }catch(e){
			actual_array=e
		}
		  afterCheck(check_object, valid_shape, before_str, 'ERROR@244');
			actual_array[2]= JSON.stringify(actual_array[2]);    
			actual_str = '' + actual_array;  
			actual_str==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@244', actual_str) ); 
	}

		{	const check_object =  [{}];
			const valid_shape =  "EMPTY-ER";
			let actual_array;
		  const expected_e = `emptyVerify(arguments, expected_emptys),SC@24 - EMPTY-ER states 'object' must not be empty for the value '[object Object]',"EMPTY-ER"` ;
			const before_str = beforeCheck(check_object, valid_shape);
			try{
				actual_array = type_czech.emptyVerify(check_object, valid_shape);
		  }catch(e){
				actual_array = e;
			}
			afterCheck(check_object, valid_shape, before_str, 'ERROR@245');
			actual_array[2]= JSON.stringify(actual_array[2]);   
			actual_str = '' + actual_array;       
		  actual_str==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@245', actual_str) );	
		}
		
		
		{	const check_object =  [['a', 'b', 'c']];
			const valid_shape =  ["EMPTY-ER"];
			let actual_array;
			const expected_e = `` ;
			const before_str = beforeCheck(check_object, valid_shape);
			try{
				actual_array = type_czech.emptyVerify(check_object, valid_shape);
			}catch(e){
				actual_array=e
			}
				afterCheck(check_object, valid_shape, before_str, 'ERROR@246');
				actual_array[2]= JSON.stringify(actual_array[2]);    
				actual_str = '' + actual_array;  
				actual_str==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@246', actual_str) ); 
		}
		
		{	const check_object =  [{a:99}];
		const valid_shape =  "EMPTY-ER";
		let actual_array;
		const expected_e = `` ;
		const before_str = beforeCheck(check_object, valid_shape);
		try{
			actual_array = type_czech.emptyVerify(check_object, valid_shape);
		}catch(e){
			actual_array = e;
		}
		afterCheck(check_object, valid_shape, before_str, 'ERROR@247');
		actual_array[2]= JSON.stringify(actual_array[2]);   
		actual_str = '' + actual_array;       
		actual_str==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@247', actual_str) );	
	}



	return tests_passed;
}



let empty_counts =[];

empty_counts.push(test_EmptyCheck_test_aaa_aaa("emptyVerify"));
empty_counts.push(test_EmptyCheck_test_bbb_bbb("emptyVerify"));
empty_counts.push(test_EmptyCheck_test_ccc_ccc("emptyVerify"));
empty_counts.push(test_EmptyCheck_test_ddd_ddd("emptyVerify"));
empty_counts.push(test_EmptyCheck_test_eee_eee("emptyVerify"));
empty_counts.push(test_EmptyCheck_test_fff_fff("emptyVerify"));

const specTestEmtpy = (zero_index) => 'test_ShapeCheck_test_' + String.fromCharCode(97 + zero_index).repeat(3);
//empty_counts.map( (count, index)=> console.log( specTestEmtpy(index), count));

let total_empty_tests = empty_counts.reduce((accum, current)=> accum + current);
console.log('total_EmptyCheck_test_tests==', total_empty_tests);
