/* node node-32-all-checks-external.js */


function First(f_name){
  console.log(`CONS-First :${f_name}`)
  firstMethod = function(a_date) {
    console.log(`firstMethod :${f_name} `, a_date) 
  }
  return {firstMethod}
}

function Last(f_name, l_name){
  first = First(f_name)
  console.log(`CONS-Last :${f_name} ${l_name}`)
  lastMethod = function (a_year) {
    console.log(`lastMethod :${a_year} ${f_name} ${l_name}`) 
  }
  return {lastMethod, firstMethod:first.firstMethod}
}

function Full(salu, f_name, l_name){
  last = Last(f_name, l_name)
  console.log(`CONS-Full :${salu} ${f_name} ${l_name}`)
  fullMethod = function (a_book) {
    console.log(`fullMethod :${a_book} ${salu} ${l_name}`) 
  }
  return {fullMethod, 
          firstMethod:last.firstMethod, 
          lastMethod:last.lastMethod}
}


var {First, Last, Full} = require('./pre_post_funcs-42.js')(First, Last, Full);

william_gibson = Full('Mr', 'Larry', 'Niven')
william_gibson.firstMethod(new Date(1970,10,1))
william_gibson.lastMethod(1971)
william_gibson.fullMethod('Ringworld')
