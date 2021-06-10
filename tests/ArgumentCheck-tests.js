


function _throw(test_exception) { throw 'test_ArgumentCheck__isEmpty ' + test_exception; }

function test_ArgumentCheck__isEmpty(){
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
	let tests_passed=0;

	type_czech._isEmpty(new Date('12/12/2014'))   ? _throw(1)      : tests_passed++;
	type_czech._isEmpty(new Date(1))              ? _throw(2)      : tests_passed++;
	type_czech._isEmpty(false)                    ? _throw(3)      : tests_passed++;
	type_czech._isEmpty(1)                        ? _throw(4)      : tests_passed++;
	type_czech._isEmpty('x')                      ? _throw(5)      : tests_passed++;
	type_czech._isEmpty(new Date('foo-bar 014')) ? tests_passed++ : _throw(6);
	type_czech._isEmpty(new Date('23/25/2014'))   ? tests_passed++ : _throw(7);
	type_czech._isEmpty('')                       ? tests_passed++ : _throw(8);
	type_czech._isEmpty({})                       ? tests_passed++ : _throw(9);
	type_czech._isEmpty([])                       ? tests_passed++ : _throw(10);
	type_czech._isEmpty(null)                     ? tests_passed++ : _throw(11);
	type_czech._isEmpty(undefined)                ? tests_passed++ : _throw(12);
	type_czech._isEmpty(NaN)                      ? tests_passed++ : _throw(13);
	type_czech._isEmpty(0)                        ? _throw(14) : tests_passed++ ;

	tests_passed === 14 ? '' : _throw(`TypeCzech _isEmpty has wrong number of tests, 13 <> ${tests_passed}`);
	return tests_passed;
}
const _isEmpty_tests = test_ArgumentCheck__isEmpty();
console.log('test_ArgumentCheck__isEmpty()==', _isEmpty_tests);
//////////////////////////////////////////////////////////////////////////////////////////////////////
function test_ArgumentCheck_out_of_scope_function(){
	let tests_passed=0;
	
	function vehicle_out_of_scope(){}
	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);

	const get_out_of_scope_err = _ => {
		function vehicleCheck(){}
		// function vehicle_out_of_scope(){} // works if function declared here
		try{
			var vehicle_out_of_scope = type_czech.precedeCheck(vehicle_out_of_scope, vehicleCheck);   // vehicle_out_of_scope==undefined
		}catch(e){ 
			return e;        //    ERROR@500  500  500  500
		}
		return 'the above exception should be returned';
	}

	const vehicle_exception=get_out_of_scope_err();
	const expected_exception ="SC@05 - ArgumentCheck The 'checked_function' must be in the exact same scope as checked_function=ArgumentCheck(checked_function) and vehicleCheck() to be available for overriding";
	vehicle_exception===expected_exception ? tests_passed++ : _throw(vehicle_exception);
	tests_passed === 1 ? '' : _throw(`test_ArgumentCheck_out_of_scope_function has wrong number of tests, 1 <> ${tests_passed}`);
	return tests_passed;
}

const out_of_scope_tests = test_ArgumentCheck_out_of_scope_function();
console.log('test_ArgumentCheck_out_of_scope_function()==', out_of_scope_tests);

// test closure on class/function/module


// function test_ArgumentCheck_closures(){


// // chrysler dodge charger                dodge ==brand          model== Dodge Charger    manufacturer, [brand, model]     Chrysler, [dodge, charger]
// // toyota tercel                                                                                                          Toyota, ['', tercel]
// // toyota lexus    Toyota [ Lexus, RX]
// 	function test_deep_function(){	
// 		get_e = _ => {
// 			function vehicle_e(manufacturer, model, year, engine){
// 				return Object.assign({type: 'car_e'}, {manufacturer, model, year, engine});
// 			}

// 			function vehicleCheck_e(manufacturer, model, year, engine){
// 				const type_error = ShapeCheck.typeVerify([manufacturer, model, year, engine], ["string", ["string", "string"], "number", {cylinders:"number", fuel:"string"}]);
// 				if (type_error) return 'shape-check-vehicle_e '+ type_error ;
// 				const the_error = (engine.fuel!='gasoline' && engine.fuel!='diesel') ? `Fuel must be "gasoline" or "diesel", not "${engine.fuel}"` : '';
// 				return the_error ? 'arg-check-vehicle_e '+ the_error : '';
// 			}


// 			let vehicle_e = type_czech.precedeCheck(vehicle_e, (typeof vehicleCheck_e === 'undefined') ? undefined : vehicleCheck_e);
// 			return vehicle_e;
// 		}
// 		return get_e;
// 	}

// 	vehicle_e=test_deep_function();
// 	const car_e = vehicle_e('Chrysler', ['Dodge', 'Charger'], 1971, {cylinders:8, fuel:"gasoline"});
// 	console.log('vehicleCheck_100', car_e)
// }







function test_ArgumentCheck_same_scope(){

// chrysler dodge charger                dodge ==brand          model== Dodge Charger    manufacturer, [brand, model]     Chrysler, [dodge, charger]
// toyota tercel                                                                                                          Toyota, ['', tercel]
// toyota lexus    Toyota [ Lexus, RX]
	function test_deep_function(){	


		function vehicle_123(manufacturer, model, year, engine){
				return Object.assign({type: 'car_e'}, {manufacturer, model, year, engine});
			}

	
		const	get_e = _ => {
			const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);
			function vehicle_123x(manufacturer, model, year, engine){
					return Object.assign({type: 'car_e'}, {manufacturer, model, year, engine});
				}


				function vehicleCheck_e(manufacturer, model, year, engine){
					const type_error = type_czech.typeVerify([...arguments], ["string", ["string", "string"], "number", {cylinders:"number", fuel:"string"}]);
					if (type_error) return 'shape-check-vehicle_e '+ type_error ;
					const the_error = (engine.fuel!='gasoline' && engine.fuel!='diesel') ? `Fuel must be "gasoline" or "diesel", not "${engine.fuel}"` : '';
					return the_error ? 'arg-check-vehicle_e '+ the_error : '';
				}

			
// problem is that below the var vehicle_123 is overwritten !!!    must be in same scope 
			try{
				let vehicle_123 = type_czech.precedeCheck(vehicle_123, (typeof vehicleCheck_e === 'undefined') ? undefined : vehicleCheck_e);
			}catch(e){ console.log("e", e)}
			return vehicle_123;
		}
		return get_e();
	}

	vehicle_e=test_deep_function();
	const car_e = vehicle_e('Chrysler', ['Dodge', 'Charger'], 1971, {cylinders:8, fuel:"gasoline"});
	console.log('vehicleCheck_100', car_e)
}


//test_ArgumentCheck_same_scope();