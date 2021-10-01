/* eslint-disable */

function Full() {
  class Full extends Last {
    constructor(salu, f_name, l_name) {
      super(f_name, l_name)
      this.salu = salu
      log(`${LEVEL_2}CONS-Full :${salu} ${f_name} ${l_name}`)
    }

    fullMethod(a_book) {
      log(`${LEVEL_2}RUN -fullMethod :${a_book} ${this.salu} ${this.l_name}`)
      return a_book
    }
    
    showName() {
      const the_name = `${this.salu} ${this.f_name} ${this.l_name}`
      console.log('Name: ', the_name)
    }
  }
  return Full
}