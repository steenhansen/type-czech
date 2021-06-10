

// issue, had typeOneOfExtras(  { make:{manu:"s", brand:"s", model:"s"}, engine:{cyl:"n", fuel:"s"}, body:{year:"n", color:"s"}, limit:{percent:"n", max:"n"}, sale:{arrival: "d"} };
// and the value was {} and it passed as all the extras were ignored somehow 


/*  vehicle_85.html
function CopyCar_check_(a_car){
	const car_copy_gas  = [{ vehicle:{}, make:{manu:"s", brand:"s", model:"s"}, engine:{cyl:"n", fuel:"s"}, body:{year:"n", color:"s"}, limit:{percent:"n", max:"n"} }];
	const car_copy_elec = [{ vehicle:{}, make:{manu:"s", brand:"s", model:"s"}, engine:{kwh:"n", cells:"n", volts:"n"},   body:{year:"n", color:"s"}, limit:{percent:"n", max:"n"}  }];
	const type_error = type_czech.typeOneOfExtras([...arguments],  [car_copy_gas, car_copy_elec]);
	if (type_error) return 'CopyCar_check_ typeOneOfExtras '+ type_error ;

	const copy_e_gas =   [{ vehicle:{}, make:{manu:"EM-ER", brand:"EM-OK", model:"EM-ER"}, engine:{cyl:"EM-ER", fuel:"EM-ER"},    body:{year:"EM-ER", color:"EM-ER"}, limit:{percent:"EM-OK", max:"EM-ER"} }];
	const copy_e_elec =  [{ vehicle:{}, make:{manu:"EM-ER", brand:"EM-OK", model:"EM-ER"}, engine:{kwh:"EM-ER", cells:"EM-ER", volts:"EM-ER"},  body:{year:"EM-ER", color:"EM-ER"}, limit:{percent:"EM-OK", max:"EM-ER"} }];
	const invalid_error = type_czech.emptyOneOfExtras([...arguments],  [ copy_e_gas, copy_e_elec]);
	if (invalid_error) return 'CopyCar_check_ emptyOneOfExtras '+ invalid_error ;

	const {engine, body} = a_car;
	return carEngineCheck(engine, body.year);
}
*/



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
                                //  error_list
function errorMessage(error_number, error_text){
	error_text[2]= JSON.stringify(error_text[2]);          // q*bert                     the below is for exception consumption   
	error_str = '' + error_text;              
	return `test_ShapeCheck_test ${error_number} : error = "${error_str}"`;             // so we ned the JSON.stringify() to show []s
}
function test_ShapeCheck_test_THROW_SPECa(arrays_with_objects){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0;		


	


			{	const check_object = [123, "abc"];
	  	const valid_shape = ["number", "string"];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@601');
		const expected ="" ;
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@601', actual) );}





		{	const check_object = ['abc', 456];
		const valid_shape = ["string", "date"];
			const before_str = beforeCheck(check_object, valid_shape);
		const actual_array = type_czech.typeExtras(check_object, valid_shape);
		afterCheck(check_object, valid_shape, before_str, 'ERROR@602');                      
		const expected_str = `typeExtras(arguments, expected_types),SC@44 - INDEX '1' is assumed to be a 'date', but is mistakenly a 'number',["string","date"]`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array; 
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@602', actual_array) ); }
	






	{	const check_object =[456, 789];
	  	const valid_shape = ["number"];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@603');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@603', actual) );}

	// {	const check_object = [456, 789];
	//   	const valid_shape = [["number"]];
	//   		const before_str = beforeCheck(check_object, valid_shape);
	// 		const actual = type_czech.typeExtras(check_object, valid_shape);
	// 		afterCheck(check_object, valid_shape, before_str, 'ERROR@604');
	// 	const expected ="";
	// 	actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@604', actual) );}


	{	const check_object = ['abc', [456, 789]];
	  	const valid_shape = ["string", ["number"]];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@605');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@605', actual) );}


	{	const check_object = [123, 'abc', [456, 789]];
	  	const valid_shape = ["number", "string", ["number"]];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@606');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@606', actual) );}

	{	const check_object = [123, 'abc', [456, "def"]];
	  	const valid_shape = ["number", "string", ["number"]];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@607');
		const expected_str =`typeExtras(arguments, expected_types),SC@45 - INDEX '1' is asserted to be a 'number', but is fallaciously a 'string' : def,["number","string",["number"]]`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array; 
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@607', actual_array) ); }

	{	const check_object = [123, 'abc', {a:456, b:789}];
	  	const valid_shape = ["number", "string", {a:"number", b:"number"}];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@608');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@608', actual) );}

	{	const check_object = [123, 'abc', {a:456, b:'def'}];
	  	const valid_shape = ["number", "string", {a:"number", b:"number"}];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@609');
		const expected_str =`typeExtras(arguments, expected_types),SC@43 - Property 'b' is indicated to be a 'number', but is inaccurately a 'string' : def,["number","string",{"a":"number","b":"number"}]`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array; 
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@609', actual_array) ); }

	{	const check_object = [ "super", "man" ];
	  	const valid_shape =[ "string", "string", "date" ] ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@610');
		const expected_str =`typeExtras(arguments, expected_types),SC@03 - Index '2' is supposed to be a 'date', but is missing : ['super','man'],["string","string","date"]`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array; 
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@610', actual_array) ); }

	return tests_passed;
}

function test_ShapeCheck_test_DEBUG_CONSOLE_TRACEb(objects_with_arrays){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0;			
	{	const check_object = {a:123, b:"abc"};
	  	const valid_shape = {a:"number", b:"string"};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@611');
		const expected ="" ;
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@611', actual) );}

	{	const check_object = {a:123, b:456};
	  	const valid_shape = {a:"number", b:"string"};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@612');
		const expected_str =`typeExtras(arguments, expected_types),SC@43 - Property 'b' is indicated to be a 'string', but is inaccurately a 'number' : 456,{"a":"number","b":"string"}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array; 
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@612', actual_array) ); }

	{	const check_object = {a:123, b:'abc', c:[456, 789]};
	  	const valid_shape = {a:"number", b:"string", c:["number"]};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@61');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@613', actual) ); }

	{	const check_object = {a:123, b:'abc', c:[456, "def"]};
	  	const valid_shape = {a:"number", b:"string", c:["number"]};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@614');
		const expected_str =`typeExtras(arguments, expected_types),SC@45 - INDEX '1' is asserted to be a 'number', but is fallaciously a 'string' : def,{"a":"number","b":"string","c":["number"]}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@614', actual_array) );}

	{	const check_object = {a:123, b:'abc', c:{x:456, y:789}};
	  	const valid_shape = {a:"number", b:"string", c:{x:"number", y:"number"}};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@615');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@615', actual) ); }

	{	const check_object = {a:123, b:'abc', c:{x:456, y:'def'}};
	  	const valid_shape = {a:"number", b:"string", c:{x:"number", y:"number"}};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@616');
		const expected_str =`typeExtras(arguments, expected_types),SC@43 - Property 'y' is indicated to be a 'number', but is inaccurately a 'string' : def,{"a":"number","b":"string","c":{"x":"number","y":"number"}}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@616', actual_array) );}

	return tests_passed;
}


function test_ShapeCheck_test_ccc(deep_object_checks){
	 const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	 let tests_passed=0;		
	
	 {	const check_object = {};
	  	const valid_shape = {};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@617');
		const expected ="" ;
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@617', actual) ); }

	{	const check_object = [];
	  	const valid_shape = {};
	  		const before_str = beforeCheck(check_object, valid_shape);
				let actual;
			try{
				actual_array = type_czech.typeExtras(check_object, valid_shape);
			} catch (e){
				actual_array = e;
			}
			afterCheck(check_object, valid_shape, before_str, 'ERROR@618');
	const expected_str = `typeExtras(arguments, expected_types),SC@36 - Parameter is meant to be 'object' but is of the wrong type of 'array':[],{}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@618', actual_array) );}

	{	const check_object = {a:undefined};
	  	const valid_shape = {a:"number"};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@619');
		const expected_str = `typeExtras(arguments, expected_types),SC@41 - Key 'a' was given to be a 'number' but was instead 'undefined',{"a":"number"}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@619', actual_array) );}

	{	const check_object = {a:null};
	  	const valid_shape = {a:"number"};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@620');
		const expected_str =`typeExtras(arguments, expected_types),SC@42 - Key 'a' was determined to be a 'number' but was instead 'null',{"a":"number"}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@620', actual_array) ); }

	{	const check_object = { a_number: 17,       a_pair:{a:'a',      b:{z:[1, 2, 3]},  c:5}       };
	  	const valid_shape =  { a_number: 'number', a_pair:{a:'string', b:{z:['number']}, c:'number'}};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@621');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@621', actual) ); }

	{	const check_object ={ a_number: 17,       a_pair:{a:'a',      b:{z:[1, 2, 3]},  c:'so_rong'}       };
	  	const valid_shape =  { a_number: 'number', a_pair:{a:'string', b:{z:['number']}, c:'number'}};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@622');
		const expected_str =`typeExtras(arguments, expected_types),SC@43 - Property 'c' is indicated to be a 'number', but is inaccurately a 'string' : so_rong,{"a_number":"number","a_pair":{"a":"string","b":{"z":["number"]},"c":"number"}}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@622', actual_array) ); }

	return tests_passed;
}

function test_ShapeCheck_test_ddd(deeply_nested_objects){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0;		
	{	const check_object ={ a: [ { b:[ {c:'abcdef'} ] } ] };
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ] };
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@623');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@623', actual) ); }

	{	const check_object = { a: [ { b:[ {c:17      } ] } ] };
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ] };
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@624');
		const expected_str =`typeExtras(arguments, expected_types),SC@43 - Property 'c' is indicated to be a 'string', but is inaccurately a 'number' : 17,{"a":[{"b":[{"c":"string"}]}]}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@624', actual_array) ); }

	{	const check_object =  { a: [ { b:[ {c:42      } ] } ] } ;
	  	const valid_shape =   { a: [ { b:[ {c:'number'} ] } ] } ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@625');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@625', actual) ); }

	{	const check_object =  { a: [ { b:[ {c:43      } ] } ] } ;
	  	const valid_shape =   { a: [ { b:[ {c:'string'} ] } ] } ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@626');
		const expected_str =`typeExtras(arguments, expected_types),SC@43 - Property 'c' is indicated to be a 'string', but is inaccurately a 'number' : 43,{"a":[{"b":[{"c":"string"}]}]}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@626', actual_array) ); }

	{	const check_object =  [{r:11}, {r:22}, {r:33}];
	  	const valid_shape =   [{r:"number"}]  ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@627');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@627', actual) ); }

	{	const check_object =  [[11], [13], [17], [19]];
	  	const valid_shape =   [["number"]]  ;
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@628');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@628', actual) ); }

	return tests_passed;
}

function test_ShapeCheck_test_eee(array_objects_empty){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0;	

	{	const check_variable = new Date;
	  	const valid_type =  'date';
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual = type_czech.typeExtras(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@629');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@629', actual) );  }

	{	const check_variable = 'a-number';
	  	const valid_type =  'number';
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual_array = type_czech.typeExtras(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@630');
		const expected_str =`typeExtras(arguments, expected_types),The variable 'a-number', which is a 'string', is not a 'number',"number"`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@630', actual_array) ); }

	{	const check_variable = [[]];
	  	const valid_type =  ['array'];
	  		const before_str = beforeCheck(check_variable, valid_type);
				let actual;
			try {
				actual = type_czech.typeExtras(check_variable, valid_type);
			} catch(e){
				actual = e;
			}
			afterCheck(check_variable, valid_type, before_str, 'ERROR@631');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@631', actual) ); }

	{	const check_variable = [];
	  	const valid_type =  'object';
	  		const before_str = beforeCheck(check_variable, valid_type);
			let actual_array ;

			try {
				actual_array = type_czech.typeExtras(check_variable, valid_type);
			} catch(e){
				actual_array = e;
			}

			afterCheck(check_variable, valid_type, before_str, 'ERROR@632');
		const expected_str =`typeExtras(arguments, expected_types),The variable '[]', which is a 'array', is not a 'object',"object"`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@632', actual_array) ); }

	{	const check_variable = {};
	  	const valid_type =  'object';
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual = type_czech.typeExtras(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@633');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@633', actual) ); }

	{	const check_variable = {};
	  	const valid_type =  'array';
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual_array = type_czech.typeExtras(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@634');
		const expected_str =`typeExtras(arguments, expected_types),The variable '{}', which is a 'object', is not a 'array',"array"`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@634', actual_array) ); }

	return tests_passed;
}


function test_ShapeCheck_test_fff(object_with_arrays){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0;	
	{	const check_object = {a:123, b:'abc', c:[456, 789]};
	  	const valid_shape = {a:"number", b:'string'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@635');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@635', actual) );  }

	{	const check_object = {a:123, b:'abc', c:[456, 789]};
	  	const valid_shape = {a:"number"};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@636');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@636', actual) );  }
	
	{	const check_object = {a:123, b:'abc', c:[456, 789]};
	  	const valid_shape = {b:"string"};
	  		const before_str = beforeCheck(check_object, valid_shape);
		  	const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@637');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@637', actual) );  }

	{	const check_object = {a:123, b:'abc', c:[456, 789]};
	  	const valid_shape = {b:"string", c:["number"]};
	  		const before_str = beforeCheck(check_object, valid_shape);
		  	const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@638');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@638', actual) );  }

		{	const check_object = {a:123, b:'abc', c:[456, 789]};
	  	const valid_shape = {c:["number"]};
	  		const before_str = beforeCheck(check_object, valid_shape);
		  	const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@639');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@639', actual) );}

		{	const check_object = {a:123, b:'abc', c:[456, 789]};
	  	const valid_shape = {c:["number"], a:"number"};
	  		const before_str = beforeCheck(check_object, valid_shape);
		  	const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@640');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@640', actual) );  }

	return tests_passed;
}


function test_ShapeCheck_test_ggg(simple_scalar_values){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0;	
	{	const check_variable = true;          
	  	const valid_type =  'boolean';
	  		const before_str = beforeCheck(check_variable, valid_type);
	  		const actual = type_czech.typeExtras(check_variable, valid_type);
	  		afterCheck(check_variable, valid_type, before_str, 'ERROR@641');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@641', actual) );   }

	{	const check_variable = false;               	
	  	const valid_type =  'boolean';
	  		const before_str = beforeCheck(check_variable, valid_type);
	  		const actual = type_czech.typeExtras(check_variable, valid_type);
	  		afterCheck(check_variable, valid_type, before_str, 'ERROR@642');
	  	const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@642', actual) ); }

	{	const check_variable = "my-string";
	  	const valid_type =  'boolean';
	  		const before_str = beforeCheck(check_variable, valid_type);
	  		const actual_array = type_czech.typeExtras(check_variable, valid_type);
	  		afterCheck(check_variable, valid_type, before_str, 'ERROR@643');
		const expected_str =`typeExtras(arguments, expected_types),The variable 'my-string', which is a 'string', is not a 'boolean',"boolean"`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@643', actual_array) ); }

	{	const check_variable = new Date;
	  	const valid_type =  'date';
	  		const before_str = beforeCheck(check_variable, valid_type);
	  		const actual = type_czech.typeExtras(check_variable, valid_type);
	  		afterCheck(check_variable, valid_type, before_str, 'ERROR@644');
		const expected ="";     
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@644', actual) ); }


	{	const check_variable = 123;
	  	const valid_type =  'number';
	  		const before_str = beforeCheck(check_variable, valid_type);
	  		const actual = type_czech.typeExtras(check_variable, valid_type);
	  		afterCheck(check_variable, valid_type, before_str, 'ERROR@645');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@645', actual) ); }


	{	const check_variable = 456;
	  	const valid_type =  'string';
	  		const before_str = beforeCheck(check_variable, valid_type);
	  		const actual_array = type_czech.typeExtras(check_variable, valid_type);
	  		afterCheck(check_variable, valid_type, before_str, 'ERROR@646');
		const expected_str =`typeExtras(arguments, expected_types),The variable '456', which is a 'number', is not a 'string',"string"`;  
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@646', actual_array) ); }

	return tests_passed;
}

function test_ShapeCheck_test_hhh(simple_small_containers){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0;	

	{	const check_object = {};
	  	const valid_shape =  'object';
 	  		const expected_e = "SC@15 - TypeCzech.typeVerify() called with '{}' against '!{}'";
	  		const before_str = beforeCheck(check_object, valid_shape);
		try {	
			 type_czech.typeVerify(check_object, valid_shape);
		} catch(e){
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@647', e) ); }
			afterCheck(check_object, valid_shape, before_str, 'ERROR@647');
		}





	{	const check_object = [];               	
	  	const valid_shape =  'array';
 	  		const expected_e =`SC@58 - TypeCzech.typeVerify() comparing actual [] parameter, with a value of [''], against the expected shape of "array". They should be the same type; both []s, or both "array"s.`;
	  		const before_str = beforeCheck(check_object, valid_shape);
		try {	
			 type_czech.typeVerify(check_object, valid_shape);
		} catch(e){
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@648', e) ); }
			afterCheck(check_object, valid_shape, before_str, 'ERROR@648');
		}





	{	const check_object = [{}];
	  	const valid_shape =  'array';
 	  		const expected_e = "SC@15 - TypeCzech.typeVerify() called with '{}' against '!{}'";
	  		const before_str = beforeCheck(check_object, valid_shape);
		try {	
			 type_czech.typeVerify(check_object, valid_shape);
		} catch(e){
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@649', e) ); }
			afterCheck(check_object, valid_shape, before_str, 'ERROR@649');
		}


	{	const check_object = [];
	  	const valid_shape =  'object';
 	  		const expected_e = `SC@58 - TypeCzech.typeVerify() comparing actual [] parameter, with a value of [''], against the expected shape of "object". They should be the same type; both []s, or both "object"s.`;
	  		const before_str = beforeCheck(check_object, valid_shape);
		try {	
			 type_czech.typeVerify(check_object, valid_shape);
		} catch(e){
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@650', e) ); }
			afterCheck(check_object, valid_shape, before_str, 'ERROR@650');
		}



	{	const check_variable = {x:[{y:'z'}]};
	  	const valid_type =     {x:[{y:'string'}]};
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual = type_czech.typeVerify(check_variable, valid_type);     
			afterCheck(check_variable, valid_type, before_str, 'ERROR@651');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@651', actual) );  }

	{	const check_variable = {x:[{y:'z'}]};
	  	const valid_type =  {x:[{y:'string'}]};
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual = type_czech.typeVerify(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@652');
		const expected =""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@652', actual) ); }

	{	const check_variable =  {cylinders:4, fuel:"gasoline", sneak:"extra"}; 
	  	const valid_type =  {cylinders:"number", fuel:"string"};
	  		const before_str = beforeCheck(check_variable, valid_type);
			const actual_array = type_czech.typeVerify(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@653');
		const expected_str =`typeVerify(arguments, expected_types),SC@39 - Extra key in checked_object - (sneak:'extra'),{"cylinders":"number","fuel":"string"}`; 
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@653', actual_array) ); }


	return tests_passed;
}

function test_ShapeCheck_test_iii(_aTypeOf){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const a_variable = null;          
		const actual = type_czech._aTypeOf(a_variable);
		const expected = 'null';
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@654', actual) );  }

	{	const a_variable = undefined;          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="undefined";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@655', actual) );  }

	{	const a_variable = new Date;          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="date";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@656', actual) );  }
	
	{	const a_variable = [];          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="array";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@657', actual) );  }

	{	const a_variable = {};          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="object";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@658', actual) );  }

	{	const a_variable = 'a_string';          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="string";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@659', actual) );  }

	{	const a_variable = 567;          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="number";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@660', actual) );  }

	{	const a_variable = false;          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="boolean";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@661', actual) );  }

	{	const a_variable = Symbol('a_symbol');          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="symbol";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@662', actual) );  }

	{	const a_variable = _=> "I'm a teapot";          
		const actual = type_czech._aTypeOf(a_variable);
		const expected ="function";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@663', actual) );  }

	return tests_passed;
}

function test_ShapeCheck_test_jjj(_isCollection){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const a_variable = 1;          
		const actual = type_czech._isCollection(a_variable);
		const expected = false; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@664', actual) );  }

	{	const a_variable = {};          
		const actual = type_czech._isCollection(a_variable);
		const expected = true; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@665', actual) );  }

	{	const a_variable = [];          
		const actual = type_czech._isCollection(a_variable);
		const expected = true; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@666', actual) );  }

	return tests_passed;
}

function test_ShapeCheck_test_kkk(_missingKey){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const extra_keys = {g:"my-extra-key"};   
			const before_str = beforeCheck(extra_keys, '');
			const actual = type_czech._missingKey(extra_keys);
			afterCheck(extra_keys, '', before_str, 'ERROR@667');
		const expected = "SC@46 - The key 'g', which has a type of 'my-extra-key', is missing in the checked_object"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@667', actual) );  }

	return tests_passed;
}

function test_ShapeCheck_test_lll(_shapeArrayInArray){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_array =  [ [11], [13], [17], [19] ];    
		const array_type =  ["number"]      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, array_type);
			const actual = type_czech._shapeArrayInArray(check_array, array_type, exact_shape);
			afterCheck(check_array, array_type, before_str, 'ERROR@668');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@668', actual) );  }

	return tests_passed;
}

function test_ShapeCheck_test_mmm(_shapeObjectInArray){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_array =  [ {r:11}, {r:22}, {r:33} ] ;    
		const object_type =  {r:"number"}      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@669');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@669', actual) );  }

	{	const check_array =  [ {r:11} ] ;    
		const object_type =  {r:"string"}      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, object_type);
			const actual = type_czech._shapeObjectInArray(check_array, object_type, exact_shape);
			afterCheck(check_array, object_type, before_str, 'ERROR@670');
		const expected = "SC@01 - Index '0' - SC@43 - Property 'r' is indicated to be a 'string', but is inaccurately a 'number' : 11"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@670', actual) );  }

	return tests_passed;
}

function test_ShapeCheck_test_nnn(_shapeArrayTypes){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_array =  [ 13, 14, 15 ];    
		const array_shape =  [ "number" ];      
		const exact_shape = 'TYPE-VERIFY';
			const before_str = beforeCheck(check_array, array_shape);
			const actual = type_czech._shapeArrayTypes(check_array, array_shape, exact_shape);
			afterCheck(check_array, array_shape, before_str, 'ERROR@671');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@671', actual) );  }

	{	const check_array =  [ 13, 14, 15 ];    
		const array_shape =  [ "string" ];      
		const exact_shape = 'TYPE-EXTRAS';
			const before_str = beforeCheck(check_array, array_shape);
			const actual = type_czech._shapeArrayTypes(check_array, array_shape, exact_shape);
			afterCheck(check_array, array_shape, before_str, 'ERROR@672');
		const expected = "SC@45 - INDEX '0' is asserted to be a 'string', but is fallaciously a 'number' : 13"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@672', actual) );  }
	return tests_passed;
}

 // string <<<>> string  OR  number <<<>> number     
function test_ShapeCheck_test_ooo(_shapePropertyType){
const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 

	{	const property_type = { jxy:"number"};    
		const property_key =  "jxy";      
		const check_variable = 987;
			const before_str = beforeCheck(property_type, property_key);
			const actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
			afterCheck(property_type, property_key, before_str, 'ERROR@673');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@673', actual) );  }

	{	const property_type = { jxy:"number"};    
		const property_key =  "jxy";      
		const check_variable = undefined;
			const before_str = beforeCheck(property_type, property_key);
			const actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
			afterCheck(property_type, property_key, before_str, 'ERROR@674');
		const expected = "SC@41 - Key 'jxy' was given to be a 'number' but was instead 'undefined'"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@674', actual) );  }	

	{	const property_type = { jxy:"number"};    
		const property_key =  "jxy";      
		const check_variable = null;
			const before_str = beforeCheck(property_type, property_key);
			const actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
			afterCheck(property_type, property_key, before_str, 'ERROR@675');
		const expected = "SC@42 - Key 'jxy' was determined to be a 'number' but was instead 'null'"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@675', actual) );  }	

	{	const property_type = { jxy:"string"};    
		const property_key =  "jxy";      
		const check_variable = 567;
			const before_str = beforeCheck(property_type, property_key);
			const actual = type_czech._shapePropertyType(property_type, property_key, check_variable);
			afterCheck(property_type, property_key, before_str, 'ERROR@676');
		const expected = "SC@43 - Property 'jxy' is indicated to be a 'string', but is inaccurately a 'number' : 567"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@676', actual) );  }	

	return tests_passed;
}


function test_ShapeCheck_test_ppp(_shapeCollectionTypes){
const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 

	{	const check_object =  { r: 11 };    
		const object_shape =  { r: "number" }      
		const exact_shape = 'TYPE-EXTRAS' ;
			const before_str = beforeCheck(check_object, object_shape);

			const actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
			afterCheck(check_object, object_shape, before_str, 'ERROR@677');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@677', actual) );  }

	{	const check_object =  { r: 11, u:"illegal" };    
		const object_shape =  { r: "number" }      
		const exact_shape = 'TYPE-VERIFY';
			const before_str = beforeCheck(check_object, object_shape);
			const actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
			afterCheck(check_object, object_shape, before_str, 'ERROR@678');
		const expected = "SC@39 - Extra key in checked_object - (u:'illegal')"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@678', actual) );  }

	{	const check_object =  { r: 11, qwe:null};    
		const object_shape =  { r: "number", qwe:"object" }      
		const exact_shape = 'TYPE-VERIFY';
			const before_str = beforeCheck(check_object, object_shape);
			const actual = type_czech._shapeCollectionTypes(check_object, object_shape, exact_shape);
			afterCheck(check_object, object_shape, before_str, 'ERROR@679');
		const expected = "SC@42 - Key 'qwe' was determined to be a 'object' but was instead 'null'"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@679', actual) );  }

	return tests_passed;
}

function test_ShapeCheck_test_qqq(_shapeContainer){
const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 

	{	const check_container =  { r: 11 };    
		const container_shape =  { r: "number" };    
		const exact_shape = 'TYPE-EXTRAS' ;
			const before_str = beforeCheck(check_container, container_shape);
			const actual = type_czech._shapeContainer(check_container, container_shape, exact_shape);
			afterCheck(check_container, container_shape, before_str, 'ERROR@680');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@680', actual) );  }
	
	{	const check_container =  [ 13, 14, 15 ];    
		const container_shape =  [ "number" ];     
		const exact_shape = 'TYPE-EXTRAS' ;
			const before_str = beforeCheck(check_container, container_shape);
			const actual = type_czech._shapeContainer(check_container, container_shape, exact_shape);
			afterCheck(check_container, container_shape, before_str, 'ERROR@681');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@681', actual) );  }

	{	const check_container =  [ 13, 14, 15 ];    
		const container_shape =   { r: "number" };  
		const exact_shape = 'TYPE-EXTRAS' ;
			const before_str = beforeCheck(check_container, container_shape);
			const actual = type_czech._shapeContainer(check_container, container_shape, exact_shape);
			afterCheck(check_container, container_shape, before_str, 'ERROR@682');
		const expected = "SC@36 - Parameter is meant to be 'object' but is of the wrong type of 'array':[13,14,15]"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@682', actual) );  }


	return tests_passed;
}

function test_ShapeCheck_test_rrr(_shapeScalar){
const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 

	{	const check_variable =  true;    
		const valid_type =  "boolean" ; 
			const before_str = beforeCheck(check_variable, valid_type);  
			const actual = type_czech._shapeScalar(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@683');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@683', actual) );  }
	
	{	const check_variable =  "my-string";    
		const valid_type =  "boolean" ;   
			const before_str = beforeCheck(check_variable, valid_type);  
			const actual = type_czech._shapeScalar(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@684');
		const expected = "The variable 'my-string', which is a 'string', is not a 'boolean'"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@684', actual) );  }

	{	const check_variable =  123;    
		const valid_type =  "number" ;   
			const before_str = beforeCheck(check_variable, valid_type);  
			const actual = type_czech._shapeScalar(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@685');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@685', actual) );  }

	{	const check_variable =  new Date;    
		const valid_type =  "date" ;    
			const before_str = beforeCheck(check_variable, valid_type);  
			const actual = type_czech._shapeScalar(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@686');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@686', actual) );  }

	{	const check_variable =  "a-string";    
		const valid_type =  "string" ;    
			const before_str = beforeCheck(check_variable, valid_type);  
			const actual = type_czech._shapeScalar(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@687');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@687', actual) );  }	

	{	const check_variable =  "a-string";    
		const valid_type =  "does-not_exist" ;  
			const before_str = beforeCheck(check_variable, valid_type);  
			const actual = type_czech._shapeScalar(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@688');
		const expected = "SC@33 - The type 'does-not_exist' is not valid"; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@688', actual) );  }	

	{	const check_variable =  [];    
		const valid_type =  "array" ;  
			const before_str = beforeCheck(check_variable, valid_type);  
			const actual = type_czech._shapeScalar(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@689');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@689', actual) );  }	

	{	const check_variable =  {};    
		const valid_type =  "object" ;    
			const before_str = beforeCheck(check_variable, valid_type);  
			const actual = type_czech._shapeScalar(check_variable, valid_type);
			afterCheck(check_variable, valid_type, before_str, 'ERROR@690');
		const expected = ""; 
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@690', actual) );  }	

	return tests_passed;
}
		
function test_ShapeCheck_test_sss(_shapeVariable){
const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
 
	{	const check_object = 7;
	  	const valid_shape =  'number';
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@691');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@691', actual) ); }
	
	{	const check_object = 8;
	  	const valid_shape =  'string';
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@692');
		const expected ="The variable '8', which is a 'number', is not a 'string'";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@692', actual) ); }

	{	const check_object = [17];
	  	const valid_shape =  ['number'];
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS');
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@693');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@693', actual) ); }

	{	const check_object = [17];
	  	const valid_shape =  ['number'];
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@694');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@694', actual) ); }

	{	const check_object = [17, 'extra'];
	  	const valid_shape =  ['number'];
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS');
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@695');
		const expected ="SC@45 - INDEX '1' is asserted to be a 'number', but is fallaciously a 'string' : extra";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@695', actual) ); }

	{	const check_object = [17, 'extra'];
	  	const valid_shape =  ['number'];
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@696');
		const expected ="SC@45 - INDEX '1' is asserted to be a 'number', but is fallaciously a 'string' : extra";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@696', actual) ); }

	{	const check_object = {age:17,       old:false, extra:'superfluous'};
	  	const valid_shape =  {age:'number', old:'boolean'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-EXTRAS');
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@697');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@697', actual) ); }

	{	const check_object = {age:18,       old:true, extra:'superfluous'};
	  	const valid_shape =  {age:'number', old:'boolean'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech._shapeVariable(check_object, valid_shape, 'TYPE-VERIFY');
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@698');
		const expected = "SC@39 - Extra key in checked_object - (extra:'superfluous')";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@698', actual) ); }
	return tests_passed;
}

function test_ShapeCheck_test_ttt(complex_deep_objects){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE, 'UNDEF-OK');
	let tests_passed=0; 
	{	const check_object = null;
	  	const valid_shape =  'null';
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape );
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@699');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@699', actual) ); }

	{	const check_object = undefined;
	  	const valid_shape =  'undefined';
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@700');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@700', actual) ); }


	{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ], z:'null'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@701');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@701', actual) ); }

		{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ], z:'undefined'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@702');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@702', actual) ); }

		{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ], z:'undefined'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual_array = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@703');
		const expected_str =`typeExtras(arguments, expected_types),SC@42 - Key 'z' was determined to be a 'undefined' but was instead 'null',{"a":[{"b":[{"c":"string"}]}],"z":"undefined"}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@703', actual_array) ); }

		{	const check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
	  	const valid_shape =      { a: [ { b:[ {c:'string'      } ] } ]};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@704');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@704', actual) ); }

	return tests_passed;
}

function test_ShapeCheck_test_uuu(NULL_UNDEFINED_ERRORS){ /// this does not exist anymore
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object = null;
	  	const valid_shape =  'null';
	  			const expected_e =`SC@07 - Parameter type 'null' !== 'string' which is the expected type.\n` + 
`Parameter type is usually array from [...arguments]`;
	  		const before_str = beforeCheck(check_object, valid_shape);
		try {	
			 type_czech.typeVerify(check_object, valid_shape);
		} catch(e){
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@705', e) ); }
			afterCheck(check_object, valid_shape, before_str, 'ERROR@705');
		}


	{	const check_object = undefined;
	  	const valid_shape =  'undefined';
	  			const expected_e =`SC@07 - Parameter type 'undefined' !== 'string' which is the expected type.\n` + 
`Parameter type is usually array from [...arguments]`;
	  		const before_str = beforeCheck(check_object, valid_shape);
		try {	
			 type_czech.typeVerify(check_object, valid_shape);
		} catch(e){
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@706', e) ); }
			afterCheck(check_object, valid_shape, before_str, 'ERROR@706');
		}

		
	
	{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ], z: 'null'};
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeVerify(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@707');
		const expected_str =`typeVerify(arguments, expected_types),SC@40 - The type 'null' is not valid,{"a":[{"b":[{"c":"string"}]}],"z":"null"}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@707', actual_array) ); }

	return tests_passed;
}


function test_ShapeCheck_test_vvv(complex_deep_objects){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object = null;
	  	const valid_shape =  'null';
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@708');
		const expected =`typeExtras(arguments, expected_types),SC@33 - The type 'null' is not valid,null`;
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@708', actual) ); }

	{	const check_object = undefined;
	  	const valid_shape =  'undefined';
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@709');
		const expected ="typeExtras(arguments, expected_types),SC@33 - The type 'undefined' is not valid,undefined";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@709', actual) ); }

	{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ], z:'null'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@710');
		const expected ="typeExtras(arguments, expected_types),SC@40 - The type 'null' is not valid,[object Object]";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@710', actual) ); }

		{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ], z:'undefined'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@711');
		const expected ="typeExtras(arguments, expected_types),SC@40 - The type 'undefined' is not valid,[object Object]";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@711', actual) ); }

		{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
	  	const valid_shape =  { a: [ { b:[ {c:'string'} ] } ], z:'undefined'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@712');
		const expected ="typeExtras(arguments, expected_types),SC@40 - The type 'undefined' is not valid,[object Object]";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@712', actual) ); }

// NB, we are not checking 'z:undefined', thus completely unconcerned about  it
		{	const check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
	  	const valid_shape =      { a: [ { b:[ {c:'string'      } ] } ]};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@713');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@713', actual) ); }

	return tests_passed;
}




function test_ShapeCheck_test_www(complex_deep_objects){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE, 'UNDEF-OK');
	 let tests_passed=0;

	{	const check_object = [ ["Harley-Davidson", "Electra-Glide"],
	                           {"cyl":2,"stroke":4}, 
	                           [2000, "red"],
	                           {"percent":75,"max":500} ];
	  	const valid_shape =  [  ["s"],  {cyl:"n", stroke:"n"},  ["n", "s"],  {percent:"n", max:"n"} ];
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@714');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@714', actual) ); }


	{	const check_object = [ ["Harley-Davidson", "Electra-Glide"],
		                           {"cyl":2,"stroke":4}, 
		                           [2000, "red"],
		                           {"percent":75,"max":500}, 'bike'];
		  	const valid_shape =  [  ["s"],  {cyl:"n", stroke:"n"},  ["n", "s"],  {percent:"n", max:"n"}, "s" ];
		  		const before_str = beforeCheck(check_object, valid_shape);
		  		const actual = type_czech.typeExtras(check_object, valid_shape);
		  		afterCheck(check_object, valid_shape, before_str, 'ERROR@715');
			const expected = "";
			actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@715', actual) ); }


		{	const check_object = [ {x: 5},  {y: 1} ];
			const valid_shape =  [ {x:"n"}, {y:"n"} ];

	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@716');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@716', actual) ); }


	{	const check_object = [{"manu":"Harley-Davidson","model":"Electra-Glide"},{"cyl":2,"stroke":4},{"year":2000,"color":"red"},{"percent":75,"max":500},"bike"];
	  	const valid_shape =  [  {manu:"s", model:"s"},  {cyl:"n", stroke:"n"},  {year:"n", color:"s"},  {percent:"n", max:"n"}, "s"];;
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape );
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@717');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@717', actual) ); }



	{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ]};
	  	const valid_shape =  { a: [ { b:[ {c:'s'     } ] } ]};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape );
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@718');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@718', actual) ); }






	{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
	  	const valid_shape =  { a: [ { b:[ {c:'s'} ] } ], z:'null'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape );
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@719');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@719', actual) ); }

		{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
	  	const valid_shape =  { a: [ { b:[ {c:'s'} ] } ], z:'undefined'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@720');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@720', actual) ); }

		{	const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
	  	const valid_shape =  { a: [ { b:[ {c:'s'} ] } ], z:'undefined'};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual_array = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@721');
		const expected_str =`typeExtras(arguments, expected_types),SC@42 - Key 'z' was determined to be a 'undefined' but was instead 'null',{"a":[{"b":[{"c":"s"}]}],"z":"undefined"}`;
		actual_array[2]= JSON.stringify(actual_array[2]);         
		actual_str = '' + actual_array;
		actual_str==expected_str ? tests_passed++ : _throw( errorMessage('ERROR@721', actual_array) ); }

		{	const check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
	  	const valid_shape =      { a: [ { b:[ {c:'s'      } ] } ]};
	  		const before_str = beforeCheck(check_object, valid_shape);
	  		const actual = type_czech.typeExtras(check_object, valid_shape);
	  		afterCheck(check_object, valid_shape, before_str, 'ERROR@722');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@722', actual) ); }

	return tests_passed;
}



// to get the ['string'] versus 'string, we have to [['string']] versus 'string
function test_ShapeCheck_test_yyy(complex_deep_objects){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE, 'UNDEF-OK');
	 let tests_passed=0;

	 {	const check_variable = ['a-string'];  // this is the arg[0]=='a-string' and it modifies it to the correct thing
		const valid_type =  'string';
			const before_str = beforeCheck(check_variable, valid_type);
			let actual;
		try {
			actual = type_czech.typeVerify(check_variable, valid_type);
		} catch(e){
			actual = e;
		}
		afterCheck(check_variable, valid_type, before_str, 'ERROR@723');
	const expected = '';
	actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@723', actual) ); }

	{	const check_variable = [['a-string']];  // this is the arg[0]=='a-string' and it modifies ['a-string']
	const valid_type =  'string';
		const before_str = beforeCheck(check_variable, valid_type);
		let actual;
	try {
		actual = type_czech.typeVerify(check_variable, valid_type);
	} catch(e){
		actual = e;
	}
	afterCheck(check_variable, valid_type, before_str, 'ERROR@724');
const expected = `typeVerify(arguments, expected_types),The variable '[]', which is a 'array', is not a 'string',string`;
actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@724', actual) ); }

{	const check_variable = 'a-string';  // this is the arg[0]=='a-string' and it modifies it to the correct thing
const valid_type =  ['string'];
	const before_str = beforeCheck(check_variable, valid_type);
	let actual_array;
try {
	actual_array = type_czech.typeVerify(check_variable, valid_type);
} catch(e){
	actual_array = e;
}
afterCheck(check_variable, valid_type, before_str, 'ERROR@725');
const expected = `typeVerify(arguments, expected_types),SC@36 - Parameter is meant to be 'array' but is of the wrong type of 'string':'a-string',["string"]`;
actual_array[2]= JSON.stringify(actual_array[2]);         
actual_str = '' + actual_array; 
actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@725', actual_str) );	}




{	const check_variable = 'a-string';  // this is the arg[0]=='a-string' and it modifies it to the correct thing
const valid_type =  'string';
	const before_str = beforeCheck(check_variable, valid_type);
	let actual;
try {
	actual = type_czech.typeVerify(check_variable, valid_type);
} catch(e){
	actual = e;
}
afterCheck(check_variable, valid_type, before_str, 'ERROR@726');
const expected = ''
actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@726', actual) ); }



{	const check_variable = [1,2,3]; 
const valid_type =  ['number'];
	const before_str = beforeCheck(check_variable, valid_type);
	let actual;
try {
	actual = type_czech.typeVerify(check_variable, valid_type);
} catch(e){
	actual = e;
}
afterCheck(check_variable, valid_type, before_str, 'ERROR@727');
const expected = ''
actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@727', actual) ); }


{	const check_variable = ['a', 1]; 
	const valid_type =  ['string', 'number'];
		const before_str = beforeCheck(check_variable, valid_type);
		let actual;
	try {
		actual = type_czech.typeVerify(check_variable, valid_type);
	} catch(e){
		actual = e;
	}
	afterCheck(check_variable, valid_type, before_str, 'ERROR@728');
	const expected = ''
	actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@728', actual) ); }
	



	{	const check_variable = [[1,2,3,4], ['a', 'b', 'c', 'd']]; 
	const valid_type =  [ ['number'], ['string'] ];
		const before_str = beforeCheck(check_variable, valid_type);
		let actual;
	try {
		actual = type_czech.typeVerify(check_variable, valid_type);
	} catch(e){
		actual = e;
	}
	afterCheck(check_variable, valid_type, before_str, 'ERROR@729');
	const expected = ''
	actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@729', actual) ); }
	









	return tests_passed;
}

let shape_counts =[];
 shape_counts.push(test_ShapeCheck_test_THROW_SPECa("arrays_with_objects"));
shape_counts.push(test_ShapeCheck_test_DEBUG_CONSOLE_TRACEb("objects_with_arrays"));
 shape_counts.push(test_ShapeCheck_test_ccc("deep_object_checks"));
  
 shape_counts.push(test_ShapeCheck_test_ddd("deeply_nested_objects"));
shape_counts.push(test_ShapeCheck_test_eee("array_objects_empty"));
 shape_counts.push(test_ShapeCheck_test_fff("object_with_arrays"));
 shape_counts.push(test_ShapeCheck_test_ggg("simple_scalar_values"));


shape_counts.push(test_ShapeCheck_test_hhh("simple_small_containers"));
shape_counts.push(test_ShapeCheck_test_iii("_aTypeOf"));




shape_counts.push(test_ShapeCheck_test_jjj("_isCollection"));
shape_counts.push(test_ShapeCheck_test_kkk("_missingKey"));

shape_counts.push(test_ShapeCheck_test_lll("_shapeArrayInArray"));
shape_counts.push(test_ShapeCheck_test_mmm("_shapeObjectInArray"));
shape_counts.push(test_ShapeCheck_test_nnn("_shapeArrayTypes"));
shape_counts.push(test_ShapeCheck_test_ooo("_shapePropertyType"));

shape_counts.push(test_ShapeCheck_test_ppp("_shapeCollectionTypes"));
shape_counts.push(test_ShapeCheck_test_qqq("_shapeContainer"));
shape_counts.push(test_ShapeCheck_test_rrr("_shapeScalar"));
shape_counts.push(test_ShapeCheck_test_sss("_shapeVariable"));
 shape_counts.push(test_ShapeCheck_test_ttt("complex_deep_objects"));

 shape_counts.push(test_ShapeCheck_test_uuu("NULL_UNDEFINED_ERRORS"));

shape_counts.push(test_ShapeCheck_test_vvv("complex_deep_objects"));
shape_counts.push(test_ShapeCheck_test_www("complex_deep_objects"));


shape_counts.push(test_ShapeCheck_test_yyy("wrong_array_types"));



const specTestShape = (zero_index) => 'test_ShapeCheck_test_' + String.fromCharCode(97 + zero_index).repeat(3);
//shape_counts.map( (count, index)=> console.log( specTestShape(index), count));

let total_shape_tests = shape_counts.reduce((accum, current)=> accum + current);
console.log('total_ShapeCheck_test_tests==', total_shape_tests);
