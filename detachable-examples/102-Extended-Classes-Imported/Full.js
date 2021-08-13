/* eslint-disable no-undef */
/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
function Full() {
  // eslint-disable-next-line no-shadow, no-undef
  class Full extends Last {
    constructor(salu, f_name, l_name) {
      super(f_name, l_name);
      this.salu = salu;
      log(`${LEVEL_2}CONS-Full :${salu} ${f_name} ${l_name}`);
    }

    fullMethod(a_book) {
      log(`${LEVEL_2}fullMethod :${a_book} ${this.salu} ${this.l_name}`);
    }
  }
  return Full;
}