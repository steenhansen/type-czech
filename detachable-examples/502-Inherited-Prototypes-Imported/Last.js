/* eslint-disable */

function Last() {
  function Last(l_name) {
    this.l_name = l_name
    log(NL+LEVEL_1+`CONS-Last :${l_name}`)
    this.lastMethod = function (a_year) {
      log(LEVEL_1+`RUN -lastMethod :${a_year} ${this.f_name} ${this.l_name}`)
    }
  }
  return Last;
}
