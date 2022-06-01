/* eslint-disable */
  function Last(spec) {

  function Last(spec) {
    let {f_name, l_name} = spec
    let {firstMethod} = First(spec)
    log(LEVEL_1+`CONS-Last :${f_name} ${l_name}`)
    lastMethod = function (a_year) {
      log(LEVEL_1+`RUN -lastMethod :${a_year} ${f_name} ${l_name}`)
      return a_year
    }
    last_object = {firstMethod, lastMethod}
      return Object.freeze(last_object)

  }
  return Last
  }