/* eslint-disable */

function Full() {
  Full = (salu, f_name, l_name) => (
    function(salu, f_name, l_name) {
      last = Last(f_name, l_name)
      log(LEVEL_2+`CONS-Full :${salu} ${f_name} ${l_name}`)
      fullMethod = function (a_book) { 
        log(LEVEL_2+`RUN -fullMethod :${a_book} ${salu} ${l_name}`) 
        return a_book
      }
      function showName() {
        return `${salu} ${f_name} ${l_name}`
      }
      return {showName, fullMethod, firstMethod:last.firstMethod, lastMethod:last.lastMethod}
    }
  )(salu, f_name, l_name)
  return Full
}
