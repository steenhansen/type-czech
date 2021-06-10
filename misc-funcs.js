function miscFuncs(){

	const MISC_CHECK_OK = '';

	function isUcFirst(test_string, var_name) {
		if (test_string.length==0) return  `'${var_name}' is empty` 
		const uc_first = test_string.charAt(0).toUpperCase() + test_string.slice(1);
		return uc_first != test_string ? `First character of '${var_name}' not was uppercase '${test_string}' != '${uc_first}'` :'';
	}
	
	function argumentsLength(arguments, match_length){
			const arg_len =arguments.length;
			return arg_len==match_length ? MISC_CHECK_OK :`arguments.length = ${arg_len} incorrectly, not the expected ${match_length}`;
	}

	function vowelAndDotOnly(vowel_and_dot, var_name){
			let regex = new RegExp('[AEIOUY]\.');
			let vowel_and_dot_only = regex.test(vowel_and_dot);
			return vowel_and_dot_only ? MISC_CHECK_OK :`The variable ${var_name} is not an uppercase vowel followed by a dot, ${vowel_and_dot}`;
	}

	function inSet(look_for, the_set){
	 	try {
			for (const  argument_constant of [...the_set]) {
				if (look_for == argument_constant){
					return MISC_CHECK_OK;
				}
			}
			const error_set = the_set.join(', ');
			return `The value ${look_for} is not in the set [${error_set}]`;
		}catch(e){
			throw 'miscFuncs.inSet() the_set=' + the_set + '  ' + e;
		}
	}

	 function nameCapitalize(a_name){
	 	try {
 			const first_cap = a_name.charAt(0).toUpperCase() + a_name.substr(1);
 			if (first_cap!==a_name){
				return `The variable ${a_name} is not name-uppercased ${a_name}`;
 			}
 			return MISC_CHECK_OK;
 		} catch(e){
   			throw 'miscFuncs.nameCapitalize() value=' + a_name + '  ' + e;
 		}
 	}

	return {
		MISC_CHECK_OK,
		isUcFirst,
		argumentsLength,
		vowelAndDotOnly,
		inSet,
		nameCapitalize
	}
	
}
const misc_funcs = miscFuncs();