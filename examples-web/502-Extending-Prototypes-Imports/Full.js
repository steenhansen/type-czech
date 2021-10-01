/* eslint-disable */

function Full() {
  function Full(salu) {
    this.salu = salu
    log(NL+LEVEL_2+`CONS-Full :${salu}`)
    this.fullMethod = function (a_book) {
      log(LEVEL_2+`RUN -fullMethod :${a_book} ${this.salu} ${this.l_name}`)
      return a_book
    }
    this.showName = function() {
      const the_name = `${this.salu} ${this.f_name} ${this.l_name}`
      console.log('Name: ', the_name)
    };
  }
  return Full
}
