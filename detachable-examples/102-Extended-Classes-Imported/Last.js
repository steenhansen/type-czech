/* eslint-disable no-undef */
/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
function Last() {
  // eslint-disable-next-line no-shadow, no-undef
  class Last extends First {
    constructor(f_name, l_name) {
      super(f_name);
      this.l_name = l_name;
      log(`${LEVEL_1}CONS-Last :${f_name} ${l_name}`);
    }

    lastMethod(a_year) {
      log(`${LEVEL_1}lastMethod :${a_year} ${this.f_name} ${this.l_name}`);
    }
  }
  return Last;
}
