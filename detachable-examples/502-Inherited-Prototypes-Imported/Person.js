/* eslint-disable */

function Person() {
  function Person(salu, f_name, l_name){
    log(LEVEL_3+`CONS-Person :${salu} ${f_name} ${l_name}`)
    person_full = new Full(salu)
    person_last = new Last(l_name)
    person_first = new First(f_name)
    Object.setPrototypeOf(person_full, person_last)
    Object.setPrototypeOf(person_last, person_first)
    return person_full
  }
  return Person;
}