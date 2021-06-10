




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
		 _throw(`ArgumentCheck Value Change ! ${location_str} \n ${old_json_str} \n ${new_json_str}`);
	}
}

function errorMessage(error_number, error_text){
	return `shape-errors ${error_number} : error = "${error_text}"`;
}

function test_shapeObjectInArray(_shapeObjectInArray){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_array =  [ {r:11}, {r:22}, {r:33} ] ;    
		const object_type =  {r:"number"}      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@400');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@400', actual) );  }

	{	const check_array =  [ {r:11} ] ;    
		const object_type =  {r:"string"}      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@401');
		const expected = "SC@01 - Index '0' - SC@43 - Property 'r' is indicated to be a 'string', but is inaccurately a 'number' : 11"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@401', actual) );  }

{	const check_array =  [{r:11}, {X:22}, {r:33}] ;    
		const object_type = [{r:"n"}];      
		const exact_shape = 'TYPE-VERIFY';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@402');
		const expected = "SC@02 - Index '0' is presumed to be a '[object Object]', but is incorrectly a 'object' : [{'r':11},{'X':22},{'r':33}]"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@402', actual) );  }

{	const check_array = [{r:11}, {r:22}, {r:33}];    
		const object_type = {Y:"n"};      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@403');
		const expected = "SC@01 - Index '0' - SC@46 - The key 'Y', which has a type of 'n', is missing in the checked_object"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@403', actual) );  }

{	const check_array = [{r:11}, {r:22}, {r:33}];    
		const object_type = "n";      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@404');
		const expected = "SC@02 - Index '0' is presumed to be a 'n', but is incorrectly a 'object' : [{'r':11},{'r':22},{'r':33}]"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@404', actual) );  }


{	const check_array = {c:{r:11}, d:{r:22}, e:{r:33}};    
		const object_type = "n";      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@405');
		const expected = "SC@02 - Index 'c' is presumed to be a 'n', but is incorrectly a 'object' : {'c':{'r':11},'d':{'r':22},'e':{'r':33}}"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@405', actual) );  }

	return tests_passed;
}

function test_shapeErrorMess(_shapeErrorMess){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_array = [ [11], [13], [17], [19] ];    
		const object_type =   ["number"]      
		const exact_shape = 'TYPE-VERIFY';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeErrorMess(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@406');
		const expected = "SC@03 - Index '0' is supposed to be a '11', but is missing : ['number']"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@406', actual) );  }

{	const check_array = [ [11], [13], [17], [19] ];    
		const object_type =   ["number"]      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeErrorMess(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@407');
		const expected = "SC@03 - Index '0' is supposed to be a '11', but is missing : ['number']"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@407', actual) );  }

	
	return tests_passed;
}



function test_alreadyProxied(_shapeErrorMess){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
		{	

		const get_already_proxied_err = _ => {
			function vehicleCheck(){}
			function vehicle_in_scope(){}

			try{
				var vehicle_in_scope_OK = type_czech.precedeCheck(vehicle_in_scope, vehicleCheck);    // NB set up error  
				var vehicle_in_scope_ERROR = type_czech.precedeCheck(vehicle_in_scope, vehicleCheck); // NB this causes the error
			}catch(e){ 
				return e;        
			}
			return 'does not return here ever';
		}

		const actual=get_already_proxied_err();
		const expected ="SC@04 - ArgumentCheck vehicle_in_scope() is already proxied with vehicleCheck()";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@409', actual) );  
	}
		{	function vehicle_out_of_scope(){}

		const get_out_of_scope_err = _ => {
			function vehicleCheck(){}
			// function vehicle_out_of_scope(){} // works if function declared here
			try{
				var vehicle_out_of_scope = type_czech.precedeCheck(vehicle_out_of_scope, vehicleCheck);   // vehicle_out_of_scope() is undefined
			}catch(the_returned_exception){ 
				return the_returned_exception;        
			}
			return 'does not return here ever';
		}

		const actual=get_out_of_scope_err();
		const expected ="SC@05 - ArgumentCheck The 'checked_function' must be in the exact same scope as checked_function=ArgumentCheck(checked_function) and vehicleCheck() to be available for overriding";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@408', actual) );  
	}



	return tests_passed;
}


function test_mustBeFuncs(mustBeFuncs){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const get_already_proxied_err = _ => {
			function vehicle_in_scope(){}
			const not_a_function_17=17;
			function vehicleCheck(){}
			try{
				var vehicle_in_scope = type_czech.precedeCheck(not_a_function_17, vehicleCheck);  
			}catch(e){ 
				return e;        
			}
			return 'does not return here ever';
		}	
		const actual=get_already_proxied_err();
		const expected ="SC@38 - ArgumentCheck both '17' and ''function vehicleCheck(){} ...'' must be functions";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@410', actual) );  
	}
		
	{	const get_already_proxied_err = _ => {
			function vehicle_in_scope(){}
			const not_a_function_an_obj={};
			function vehicleCheck(){}
			try{
				var vehicle_in_scope = type_czech.precedeCheck(not_a_function_an_obj, vehicleCheck);  
			}catch(e){ 
				return e;        
			}
			return 'does not return here ever';
		}
		const actual=get_already_proxied_err();
		const expected ="SC@38 - ArgumentCheck both '{}' and ''function vehicleCheck(){} ...'' must be functions";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@411', actual) );  
	}
	return tests_passed;
}







function test_typeVerify(typeVerify){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	
	{	const check_variable = {cylinders:4, fuel:"gasoline", sneak:"extra"} ;
	  	const valid_type =  {cylinders:"number", fuel:"string"};
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual_array = type_czech.typeVerify(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@412');
		const expected =`typeVerify(arguments, expected_types),SC@39 - Extra key in checked_object - (sneak:'extra'),{"cylinders":"number","fuel":"string"}`; 
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@412', actual_array) ); }

	return tests_passed;
}




function test_emptyKeysChecked(_emptyKeysChecked){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	
	{	const check_variable =  {cylinders:4, fuel:"gasoline", sneak:"extra"}; 
	  	const valid_type =  {cylinders:"number", fuel:"string"};
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual_array = type_czech.typeVerify(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@413');
		const expected =`typeVerify(arguments, expected_types),SC@39 - Extra key in checked_object - (sneak:'extra'),{"cylinders":"number","fuel":"string"}`; 
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@413', actual_array) ); }

	return tests_passed;
}


//_emptyKeysChecked   8,9,10



let error_counts =[];


 error_counts.push(test_shapeObjectInArray("_shapeObjectInArray"));
 error_counts.push(test_shapeErrorMess("_shapeErrorMess"));
 error_counts.push(test_alreadyProxied("_alreadyProxied"));
 error_counts.push(test_mustBeFuncs("mustBeFuncs"));
 error_counts.push(test_typeVerify("typeVerify"));
 error_counts.push(test_emptyKeysChecked("_emptyKeysChecked"));

//  SC@07typeVerify



const specTestErrors = (zero_index) => 'test_shapeObjectInArray' + String.fromCharCode(97 + zero_index).repeat(3);
//error_counts.map( (count, index)=> console.log( specTestErrors(index), count));

let total_error_tests = error_counts.reduce((accum, current)=> accum + current);
console.log('total_error_tests==', total_error_tests);
