/* eslint-disable no-undef */
/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
function Full() {
  // eslint-disable-next-line no-shadow
  function Full(salu, f_name, l_name) {
    last = Last(f_name, l_name);
    log(`${NL}${LEVEL_2}CONS-Full :${salu} ${f_name} ${l_name}`);
    fullMethod = (a_book) => log(`${LEVEL_2}fullMethod :${a_book} ${salu} ${l_name}`);
    return { fullMethod, firstMethod: last.firstMethod, lastMethod: last.lastMethod };
  }
  return Full;
}
