/* eslint-disable */
  function Last(spec) {

  function Last(spec) {
    let {l_name} = spec
    let {f_name, firstMethod} = First(spec)
    log(NL+LEVEL_1+`CONS-Last :${f_name} ${l_name}`)
    lastMethod = function (a_year) {
      log(LEVEL_1+`RUN -lastMethod :${a_year} ${f_name} ${l_name}`)
    }
    last_object = {f_name, l_name, firstMethod, lastMethod}
      return Object.freeze(last_object)

  }
  return Last
  }