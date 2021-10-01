/* eslint-disable */

function First() {
  function First(f_name) {
    log(`${NL}CONS-First :${f_name}`)
    const firstMethod = (a_date) => {
      log(`${NL}RUN -firstMethod :${f_name} `, a_date)
      return a_date
    }
    return { firstMethod }
  }
  return First
}
