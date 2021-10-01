/* eslint-disable */

function Full() {
  function Full(salu, f_name, l_name) {
    FULL_TEMPLATE = {
      oloo_type: 'Full',
      fullMethod(a_book){
        log(LEVEL_2+`RUN -fullMethod :${a_book} ${this.salu} ${this.l_name}`)
        return a_book
      },
      showName() {
        const the_name = `${this.salu} ${this.f_name} ${this.l_name} - ${this.oloo_type}`
        console.log('Name: ', the_name)
      },
    }
    last = Last(f_name, l_name) 
    Object.setPrototypeOf(FULL_TEMPLATE, last)
    full_object = Object.create(FULL_TEMPLATE)
    full_object.salu = salu
    log(NL+LEVEL_2+`CONS-Full :${salu}`)
    return full_object
  }
  return Full
}
