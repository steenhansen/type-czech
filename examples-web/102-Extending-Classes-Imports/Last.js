/* eslint-disable */

function Last() {
  class Last extends First {
    constructor(f_name, l_name) {
      super(f_name)
      this.l_name = l_name
      log(`${LEVEL_1}CONS-Last :${f_name} ${l_name}`)
    }

    lastMethod(a_year) {
      log(`${LEVEL_1}RUN -lastMethod :${a_year} ${this.f_name} ${this.l_name}`)
      return a_year
    }
  }
  return Last
}
