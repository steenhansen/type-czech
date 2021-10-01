/* eslint-disable */

function Last() {
  Last = (f_name, l_name) => (
    function(f_name, l_name) {
      first = First(f_name)
      log(NL+LEVEL_1+`CONS-Last :${f_name} ${l_name}`)
      lastMethod = function (a_year) { 
        log(LEVEL_1+`RUN -lastMethod :${a_year} ${f_name} ${l_name}`) 
        return a_year
      }
      return {lastMethod, firstMethod:first.firstMethod}
    }
  )(f_name, l_name)
  return Last
}
