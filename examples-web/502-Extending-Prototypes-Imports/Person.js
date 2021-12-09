/* eslint-disable */

function Person() {
  function Person(salu, f_name, l_name){
    log(LEVEL_3+`CONS-Person :${salu} ${f_name} ${l_name}`)
    Last.prototype = new First(f_name)
    Last.prototype.constructor = Last;
    Full.prototype = new Last(l_name)
    Full.prototype.constructor = Full;
    person_full = new Full(salu)
    return person_full
  }
  return Person
}