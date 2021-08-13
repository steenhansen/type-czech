/* eslint-disable no-undef */
/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
function First() {
  // eslint-disable-next-line no-shadow
  class First {
    constructor(f_name) {
      this.f_name = f_name;
      log(`${NL}CONS-First :${f_name}`);
    }

    firstMethod(a_date) {
      log(`${NL}firstMethod :${this.f_name} `, a_date);
    }
  }
  return First;
}
