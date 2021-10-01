/* eslint-disable */

function Last() {
  function Last(f_name, l_name) {
    LAST_TEMPLATE = {
      oloo_type: 'Last',
      lastMethod(a_year){
        log(LEVEL_1+`RUN -lastMethod :${a_year} ${this.f_name} ${this.l_name}`) 
        return a_year
      }
    }
    first = First(f_name)
    Object.setPrototypeOf(LAST_TEMPLATE, first)
    last_object = Object.create(LAST_TEMPLATE)
    last_object.l_name = l_name
    log(NL+LEVEL_1+`CONS-Last :${l_name}`)
    return last_object
  }
  return Last
}