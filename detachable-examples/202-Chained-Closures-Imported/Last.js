/* eslint-disable no-undef */
/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
function Last() {
  // eslint-disable-next-line no-shadow
  function Last(f_name, l_name) {
    first = First(f_name);
    log(`${NL} ${LEVEL_1}CONS-Last :${f_name} ${l_name}`);
    const lastMethod = (a_year) => log(`${LEVEL_1}lastMethod :${a_year} ${f_name} ${l_name}`);
    return { lastMethod, firstMethod: first.firstMethod };
  }
  return Last;
}
