
{  
	const type_czech=TypeCzech('THROW-EXCEPTIONS');



	function carCreateCheck_(manu, automobile, year, engine){
		const car_info = [manu, automobile, year];
 		const err_shape = type_czech.typeVerify(year,  "number");  
		if (err_shape) return 'carCheck_ '+ err_shape ;
	   	const err_name = carCreateNameCheck_(manu, automobile);
    	const err_engine = carCreateEngineCheck_(engine);
		const the_error = err_name  ? err_name
						: err_engine ? err_engine 
						: '';
		return the_error ? 'carCheck_ ' + the_error : '';
	}

	function CarCreate(manu, automobile, year, engine){  
	 	return Object.assign({}, {manu, automobile, year, engine});
	}





//  CYL   FUEL ?????
	function carCreateEngineCheck_(engine){
		//const valid_fuels = new Set(['diesel', 'gasoline', 'propane']);
		const fuel_shape = [{cyl:"n", fuel:"s"}];     
		const fuel_empty = [{cyl:"EM-OK", fuel:"EM-ER"}];
		const electric_shape = ["n", "n", "n"];  
		const electric_empty = ["EM-OK"];          /// EM-ER!!!!!!!
		const err_shape = type_czech.typeOneOf(engine, [fuel_shape, electric_shape]);  
		if (err_shape) return 'carCreateEngineCheck_ '+ err_shape ;
		const err_empty = type_czech.oneOfemptyVerify(engine, [fuel_empty, electric_empty]);  
		if (err_empty) return 'carCreateEngineCheck_ '+ err_empty ;

	const err_engine = engineCheck_(car.engine);
		 const the_error = err_engine   ? err_engine :'';
		return the_error ? 'carCreateEngineCheck_ ' + the_error : '';
	}


function engineCheck_(engine){
			const valid_fuels = new Set(['diesel', 'gasoline', 'propane']);
	if (engine?.cyl) {
			var err_cyl = [4,6,8,10,12].includes(engine.cyl) ? '': `cylinder '${engine.cyl}' is no good` ;
			var err_fuel = valid_fuels.has(engine.fuel)      ? '': `fuel '${engine.fuel}' is no good` ;
	 	}else{
	 		let [kwh, cells, volts] = engine;
	 		var err_kwh   = kwh>0   ? '': `kwh must be bigger than 0, not '${kwh}'`;
	 		var err_cells = cells>0 ? '': `cells must be bigger than 0, not '${cells}'`;
	 		var err_volts = volts>0 ? '': `volts must be bigger than 0, not '${volts}'`;
	 	}
		const the_error = err_cyl   ? err_cyl
						: err_fuel  ? err_fuel
						: err_kwh   ? err_kwh
						: err_cells ? err_cells
						: err_volts ? err_volts
						: '';
		return the_error ? 'engineCheck_ ' + the_error : '';
}
	function carCreateNameCheck_(manu, automobile){ 
		const car_info = [manu, automobile];
		const name_shape = ["string",    ["string", "string"]];     
		const name_empty = ["EM-ER",        ["EM-OK",     "EM-ER"]];      
        
		const err_shape = type_czech.typeExtras(car_info, name_shape);  
		if (err_shape) return 'carNameCheck_ shape '+ err_shape ;
		const err_empty = type_czech.emptyExtras(car_info, name_empty);  
		if (err_empty) return 'carNameCheck_ empty '+ err_empty ;

		const err_manu = ["Toyota", "Tesla"].includes(manu) ? '': `error manufacturer '${manu}' is no good` ;
		const the_error = err_manu  ? err_manu : '';
		return the_error ? 'carNameCheck_ extra ' + the_error : '';
	}

/////////////////////////////////////////////////////////////

	function carWellness_(car){
		const fuel_shape =     {manu:"s",  automobile:["s",  "s"],  year:"n",  engine:{cyl:"n",  fuel:"s"}};     
		const fuel_empty =     {manu:"EM-ER", automobile:["EM-OK", "EM-ER"], year:"EM-OK", engine:{cyl:"EM-OK", fuel:"EM-ER"}};
		const electric_shape = {manu:"s",  automobile:["s",  "s"],  year:"n",  engine:["n", "n", "n"]};  
		const electric_empty = {manu:"EM-ER", automobile:["EM-OK", "EM-ER"], year:"EM-OK", engine:["EM-OK"]};

		const err_shape = type_czech.typeOneOf([car], [fuel_shape, electric_shape]);   
		if (err_shape) return 'shape carCheck FFF '+ err_shape ;
		const err_empty = type_czech.emptyOneOf([car], [fuel_empty, electric_empty]);  
		if (err_empty) return ' empty carCheck VVVV '+ err_empty ;

		const err_manu = ["Toyota", "Tesla"].includes(car.manu) ? '': `error manufacturer '${car.manu}' is no good` ;
		const err_engine = engineCheck_(car.engine);
		const the_error = err_manu  ? err_manu
						: err_engine ? err_engine : '';
		return the_error ? 'car-check ' + the_error : '';
	}
	///////////////////////////////////////////////////////////////////////////////////////////

	function carName(car){                 
		const [manu, automobile]=car;
		const [brand, model] = automobile
		return (brand) ? `${manu} - ${brand} ${model}` : `${manu} - ${model}`;            
	}

///   shoiuld have electric engine
	function carEngine(engine){            
		if (engine?.cyl){
			let {cyl, fuel} = engine;
			return `${cyl}cylinder ${fuel} engine`;
		}else{
			let [kwh, cells, volts] = engine;
			return `${kwh}kwh, ${cells}cell, ${volts}volt engine`;
		}  
	}
	function carShowCheck_(car){
		return carWellness_(car);
	}


	function carShow(car){
		console.log('carShow car ========================',car)                  
	//	const {manu, automobile, year, engine}=car;
	//	console.log('before carName in carShow')
	//	const name = carName(car);
	//	console.log('asdfasdf', engine)
	//	const powerplant = carEngine(engine);
	//	return `${name} : ${powerplant}`;
	}


			Car = type_czech.precedeCheck(CarCreate, carCreateCheck_);  
			 carShow = type_czech.precedeCheck(carShow, carShowCheck_); 








	let a_lexus = CarCreate('Toyota', ['Lexus', 'RX'], 2000, {cyl:8, fuel:"gasoline"});
	console.log(carShow(a_lexus))


	// let a_tesla = Car('Tesla', ['', 'S 60'], 1990, [85, 7616, 375]);
	// console.log(carShow(a_tesla))





}

//////////////////////////////////////////////////////////












