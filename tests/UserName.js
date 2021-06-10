


{



	const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);

	//const ArgumentCheck_UserName = {
		function USERNAME_CLOSURE(first_last){
			const type_error = type_czech.typeExtras(arguments, ["string", "string"]); 
			if (type_error) {
				 return 'shape-check-UserName '+ type_error ;
			}
			const param_count_err = misc_funcs.argumentsLength(arguments, 1);
			const first_uc_err = misc_funcs.isUcFirst(first_last[0], 'first_last[0]');
			const last_uc_err = misc_funcs.isUcFirst(first_last[1], 'first_last[1]');
			const the_error = param_count_err ? param_count_err
				: first_uc_err ? first_uc_err
				: last_uc_err ? last_uc_err
				: "";
			  return the_error ? 'arg-check-UserName '+ the_error : '';
		}

		function HELLOMIDDLE(middle_initial){
			const type_error = type_czech.typeVerify(arguments, ["string"]);
			if (type_error) {
				 return 'shape-check-helloMiddle '+ type_error ;
			}
			const param_count_err = misc_funcs.argumentsLength(arguments, 1) ;
			let vowel_dot_err = misc_funcs.vowelAndDotOnly(middle_initial, 'middle_initial');
			const the_error= param_count_err ? param_count_err
				: vowel_dot_err ? vowel_dot_err
				: "";
			return the_error ? 'arg-check-helloMiddle '+ the_error : '';
		}

		function FAVORITECOLOR(fav_color_or_number){
			const type_error = type_czech.typeOneOfExtras(arguments, [["string"], ["number"]]);
			if (type_error) {
				 return 'shape-check-favoriteColor '+ type_error ;
			}
			let color_num_err = misc_funcs.inSet([fav_color_or_number], ['red', 'green', 10, 42]);
			const the_error= color_num_err ? color_num_err
				: "";
			return the_error ? 'arg-check-favoriteColor '+ the_error : '';
		}
//	}

	function UserName(first_last){
		let first_name= first_last[0];
	  	let last_name = first_last[1]; 
	  	let middle_name;
	  	let favorite_color;	

	  	function helloMiddle(middle_initial) {
	  		middle_name=middle_initial;
	   		console.log(`Hello ${first_name} ${middle_name} ${last_name}!`);
	   	}

	   	function favoriteColor(fav_color){
	   		favorite_color = fav_color;
	   	}

	   	const public_methods = { helloMiddle , favoriteColor };
	  	return public_methods;
	}


  

	const USERNAME = { 	UserName : USERNAME_CLOSURE,
		               	helloMiddle : HELLOMIDDLE,
		               	favoriteColor :FAVORITECOLOR }  

	UserName = type_czech.precedeCheck(UserName, USERNAME);



	var user_func = UserName('Steen', 'Hansen');
	user_func.helloMiddle('A.')
	user_func.favoriteColor(42)

	type_czech.endChecks();
	//arg_check.endChecks();

	var user_func = UserName('bob', 'mcAdoo');
	user_func.helloMiddle('x.')

	
}
	
	const first_uc_err = misc_funcs.argumentsLength(4);
	//console.log('first_uc_err', first_uc_err);



{
		const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);


	function UserName(first_last){
		let first_name= first_last[0];
	  	let last_name = first_last[1]; 
	  	let middle_name;
	  	let col_num;	

	  	function helloMiddle(middle_initial) {
	  		middle_name=middle_initial;
	   		console.log(`Hello ${first_name} ${middle_name} ${last_name}!`);
	   	}

	   	function favoriteColor(col_num){
	   		col_num = col_num;
	   	}

	   	const public_methods = { helloMiddle , favoriteColor };
	  	return public_methods;
	}


	UserName = type_czech.precedeCheck(UserName, first_last=> type_czech.typeExtras(first_last, ["string", "string"]));



	var user_func = UserName('Steen', 'hansen');
	user_func.helloMiddle('A.')
	user_func.favoriteColor(42)


}

