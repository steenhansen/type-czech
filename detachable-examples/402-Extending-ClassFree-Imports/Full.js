/* eslint-disable */

  function Full(spec) {
    let {salu} = spec
    let {f_name, l_name, firstMethod, lastMethod} = Last(spec)
    log(NL+LEVEL_2+`CONS-Full :${salu} ${f_name} ${l_name}`)
    fullMethod = function (a_book) {
        log(LEVEL_2+`RUN -fullMethod :${a_book} ${salu} ${l_name}`)
      }
    full_object = {firstMethod, lastMethod, fullMethod}
    return Object.freeze(full_object)

  }

