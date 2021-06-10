



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
	return `test_EitherCheck_test ${error_number} : error = "${error_text}"`;
}



function test_EitherCheck_test_vvv(typeOneOfExtras){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{	const check_object = 17;
	  	const valid_shape =  ["string", "number"];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@300');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@300', actual) ); }

	{	const check_object = 'aardvark';
	  	const valid_shape =  ["string", "number"];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@301');
		const expected ="";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@301', actual) ); }

	{	const check_object = false;
	  	const valid_shape =  ["string", "number"];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@302');
		const expected = "typeOneOfExtras(arguments, expected_types),SC@22 - No type shapes in the list match the 'boolean',string,number";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@302', actual) ); }


	{	const check_object = {v_1:"hi", v_2:false, v_3:1776};
		const type_a       = {v_1:"string",  v_2:"boolean"};
		const type_b       = {v_1:"string",  v_2:"boolean",  v_3:"number"};
	  	const valid_shape =  [type_a, type_b];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@303');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@303', actual) ); }

	{	const check_object = {v_1:"hi", v_2:false};
		const type_a       = {v_1:"string",  v_2:"boolean"};
		const type_b       = {v_1:"string",  v_2:"boolean",  v_3:"number"};
	  	const valid_shape =  [type_a, type_b];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@304');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@304', actual) ); }

	{	const check_object = "hello";
	  	const valid_shape =  ["string", "number"];                                
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@305');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@305', actual) ); }

	{	const check_object = "hello";
	  	const valid_shape =  ["string", "number"];                                
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@306');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@306', actual) ); }

	{	const check_object = {v_1:"hi",       v_2:false, v_extra:"more than this"};
		const type_a       = {v_1:"string",  v_2:"boolean"};
		const type_b       = {v_1:"string",  v_2:"number"};
	  	const valid_shape =  [type_a, type_b];      
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@307');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@307', actual) ); }

		{	const check_object = [["hello"]];
		const valid_shape =  [ ["string"], ["number"] ];                              
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOfExtras(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, '');
		const expected = "";
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@308', actual) ); }

	return tests_passed;
}
function test_EitherCheck_test_www(typeOneOf){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 

	{	const check_object = {};
	  	const valid_shape =  {a:1};
	  	const expected_e = `SC@15 - TypeCzech.typeOneOf() called with a second parameter as a non-array shape of {"a":1}`;
	  		const before_str = beforeCheck(check_object, valid_shape);
	  	//try{
			const actual = type_czech.typeOneOf(check_object, valid_shape);
		//}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@309');
			actual==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@309', actual) ); 
		//}
	}

	{	const check_object = 177;
	  	const valid_shape =  ["string"];
	  	const expected_e = `SC@61 - TypeCzech.typeOneOf() needs at least 2 choices for an either, not 1 ["string"] in the second parameter`;
	  		const before_str = beforeCheck(check_object, valid_shape);
	  	try{
			const actual = type_czech.typeOneOf(check_object, valid_shape);
		}catch(e){
			afterCheck(check_object, valid_shape, before_str, 'ERROR@310');
			e==expected_e ? tests_passed++ : _throw( errorMessage('ERROR@310', e) ); 
		}
	}

	{	const check_object = {a:1,         b:{c:2} } ;
		const type_a       = {a:"number",  b:{c:"number"}};
		const type_b       = {a:"number",  b:{c:"string"}};
	  	const valid_shape = [type_a, type_b];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOf(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@311');
		const expected = '';
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@311', actual) ); }

	{	const check_object = {a:1,         b:{c:'d'} } ;
		const type_a       = {a:"number",  b:{c:"number"}};
		const type_b       = {a:"number",  b:{c:"string"}};
	  	const valid_shape = [type_a, type_b];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOf(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@312');
		const expected = '';
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@312', actual) ); }


	{	const check_object = {a:1,         b:{c:false} } ;
		const type_a       = {a:"number",  b:{c:"number"}};
		const type_b       = {a:"number",  b:{c:"string"}};
	  	const valid_shape = [type_a, type_b];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeOneOf(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@313');
			actual_array[2]= JSON.stringify(actual_array[2]);   
			actual_str = '' + actual_array;
		const expected = `typeOneOf(arguments, expected_types),SC@22 - No type shapes in the list match the 'object',[{"a":"number","b":{"c":"number"}},{"a":"number","b":{"c":"string"}}]`;
		actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@313', actual_str) ); }

	{	const check_object = {v_1:"hi",      v_2:false,     v_extra:"more than this"};
		const type_a       = {v_1:"string",  v_2:"boolean"};
		const type_b       = {v_1:"string",  v_2:"number"};
	  	const valid_shape = [type_a, type_b];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual_array = type_czech.typeOneOf(check_object, valid_shape);   

			afterCheck(check_object, valid_shape, before_str, 'ERROR@314');
			actual_array[2]= JSON.stringify(actual_array[2]); 
		const expected = `typeOneOf(arguments, expected_types),SC@22 - No type shapes in the list match the 'object',[{"a":"number","b":{"c":"number"}},{"a":"number","b":{"c":"string"}}]`;
actual_str==expected ? tests_passed++ : _throw( errorMessage('ERROR@314', actual_str) ); }
	
	{	const check_object = {inner_1:[{g:new Date}]};
		const type_a       = {inner_1:[{g:"number"}]};
		const type_b       = {inner_1:[{g:"string"}]};
		const type_c       = {inner_1:[{g:"date"}]}; 
	  	const valid_shape = [type_a, type_b, type_c];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.typeOneOf(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@315');
		const expected = '';
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@315', actual) ); }

	return tests_passed;
}

function test_EitherCheck_test_xxx(oneOfemptyVerify){
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0; 
	{//	const check_object = {a:"str",    b:{c:2} } ;
		const check_object = {x:12,       y:{z:"str2"} } ;
		const type_a       = {a:"EMPTY-ER",  b:{c:"EMPTY-OK"}};
		const type_b       = {x:"EMPTY-OK", y:{z:"EMPTY-ER"}};
	  	const valid_shape = [type_a, type_b];
	  		const before_str = beforeCheck(check_object, valid_shape);
			const actual = type_czech.emptyOneOf(check_object, valid_shape);
			afterCheck(check_object, valid_shape, before_str, 'ERROR@316');
		const expected = '';
		actual==expected ? tests_passed++ : _throw( errorMessage('ERROR@316', actual) ); }
	return tests_passed;
}




let either_counts =[];

 either_counts.push(test_EitherCheck_test_vvv("typeOneOfExtras"));
 either_counts.push(test_EitherCheck_test_www("typeOneOf"));
either_counts.push(test_EitherCheck_test_xxx("oneOfemptyVerify"));



const specTestEither = (zero_index) => 'test_EitherCheck_test_' + String.fromCharCode(97 + zero_index).repeat(3);
//either_counts.map( (count, index)=> console.log( specTestEither(index), count));

let total_one_of_shape_tests = either_counts.reduce((accum, current)=> accum + current);
console.log('total_EitherCheck_test_tests==', total_one_of_shape_tests);
