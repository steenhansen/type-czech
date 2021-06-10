{
    const type_czech=TypeCzech(THROW_SPEC, SHOW_ERROR_TAGS, DEBUG_CONSOLE_TRACE);

	function PERSONCLASS_CONSTRUCTOR(first_name, last_name){
		let first_cap =  misc_funcs.nameCapitalize(first_name);
		let last_cap =  misc_funcs.nameCapitalize(last_name);
		const param_count_err = misc_funcs.argumentsLength(arguments, 2);
		const the_error=  param_count_err ? param_count_err
			: first_cap ? first_cap 
			: last_cap  ? last_cap
		 	: "";
		return the_error ? 'arg-check-PersonClass '+ the_error : misc_funcs.MISC_CHECK_OK;
	}

	 function ADDMIDDLE(middle_name){
		let middle_cap =  misc_funcs.nameCapitalize(middle_name);
		const param_count_err = misc_funcs.argumentsLength(arguments, 1);
		const the_error=  param_count_err ? param_count_err
			: middle_cap ? middle_cap 
		 	: "";
		return the_error ? 'arg-check-addMiddle '+ the_error : '';
	}

	const PERSONCLASS = {PersonClass :PERSONCLASS_CONSTRUCTOR,
		                 addMiddle : ADDMIDDLE }  

	class PersonClass {                                 
  		constructor(first_name, last_name) {
	   		this.first_name = first_name;
	   		this.last_name = last_name;
		}
		addMiddle(middle_name) {
			this.middle_name = middle_name;
		}
		showFull(){
			console.log(this.first_name, this.middle_name, this.last_name)
		}
	}

	PersonClass = type_czech.precedeCheck(PersonClass, PERSONCLASS);
	let a_person = new PersonClass('Steen', 'Hansen');
	a_person.addMiddle('Middle')
	a_person.showFull();



}
