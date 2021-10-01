/* eslint-disable */
function First() {

  function First(spec) {
    let {f_name} = spec
    log(NL+`CONS-First :${f_name}`)
    firstMethod = function(a_date) { 
      log(NL+`RUN -firstMethod :${f_name} `, a_date) 
      return a_date
    }
    first_object = {firstMethod}
    return Object.freeze(first_object)
  }
  return First
}