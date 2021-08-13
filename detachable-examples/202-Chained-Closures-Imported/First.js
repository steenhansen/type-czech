/* eslint-disable no-undef */
/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
function First() {
  // eslint-disable-next-line no-shadow
  function First(f_name) {
    log(`${NL}CONS-First :${f_name}`);
    const firstMethod = (a_date) => log(`${NL}firstMethod :${f_name} `, a_date);
    return { firstMethod };
  }
  return First;
}
