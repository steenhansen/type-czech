/* eslint-disable */

  function First(spec) {
    let {f_name} = spec
    log(NL+`CONS-First :${f_name}`)
    firstMethod = function(a_date) { 
      log(NL+`RUN -firstMethod :${f_name} `, a_date) 
    }
    first_object = {f_name, firstMethod}
    return Object.freeze(first_object)
  }
