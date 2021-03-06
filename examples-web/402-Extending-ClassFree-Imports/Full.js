/* eslint-disable */

function Full() {

  function Full(spec) {
    let {f_name, l_name, salu} = spec
    let {firstMethod, lastMethod} = Last(spec)
    log(LEVEL_2+`CONS-Full :${salu} ${f_name} ${l_name}`)
    fullMethod = function (a_book) {
      log(LEVEL_2+`RUN -fullMethod :${a_book} ${salu} ${l_name}`)
      return a_book
    }
    function showName() {
      return `${salu} ${f_name} ${l_name}`
    }
    full_object = {showName, firstMethod, lastMethod, fullMethod}
    return Object.freeze(full_object)

  }
  return Full
}