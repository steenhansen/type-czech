/* eslint-disable */

function First() {
  function First(f_name) {
    this.f_name = f_name
    log(NL+`CONS-First :${f_name}`)
    this.firstMethod = function(a_date) { 
      log(NL+`RUN -firstMethod :${this.f_name} `, a_date) 
    }
  }
  return First;
}
