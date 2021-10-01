/* eslint-disable */

function First() {
  function First(f_name) {
    FIRST_TEMPLATE = {
      oloo_type: 'First',
      firstMethod(a_date){
        log(NL+`RUN -firstMethod :${this.f_name} `, a_date) 
        return a_date
      },
      instanceOf(){
        return this.oloo_type
      }
    }
    first_object = Object.create(FIRST_TEMPLATE)
    first_object.f_name = f_name
    log(NL+`CONS-First :${f_name}`)
    return first_object
  }
return First
}