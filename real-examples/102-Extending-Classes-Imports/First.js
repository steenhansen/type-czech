/* eslint-disable */

function First() {
  class First {
    constructor(f_name) {
      this.f_name = f_name;
      log(`${NL}CONS-First :${f_name}`)
    }

    firstMethod(a_date) {
      log(`${NL}RUN -firstMethod :${this.f_name} `, a_date)
    }
  }
  return First
}
