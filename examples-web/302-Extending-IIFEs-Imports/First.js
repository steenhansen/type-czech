/* eslint-disable */

function First() {
  First = (f_name) => (
    function(f_name) {
      log(NL+`CONS-First :${f_name}`)
      firstMethod = function(a_date) { 
        log(NL+`RUN -firstMethod :${f_name} `, a_date) 
        return a_date
      }
      return { firstMethod }
    }
  )(f_name)
  return First
}
