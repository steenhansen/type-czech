/* eslint-disable wrap-iife */
/* eslint-disable no-func-assign */
/* eslint-disable object-property-newline */
/* eslint-disable object-curly-newline */
/* eslint-disable no-class-assign */
/* eslint-disable indent */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-inner-declarations */
/* eslint-disable class-methods-use-this */

module.exports = function create_Person(type_czech, First, Last, Full) {
  function Person(salu, f_name, l_name) {
    const person_full = new Full(salu);
    const person_last = new Last(l_name);
    const person_first = new First(f_name);
    Object.setPrototypeOf(person_full, person_last);
    Object.setPrototypeOf(person_last, person_first);
    return person_full;
  }

/**/  if (type_czech.isActive()) {
/**/    function PRE_Person(salu, f_name, l_name) {
/**/      return type_czech.check_type(arguments, ['String', 'String', 'String']);
/**/    }
/**/    // eslint-disable-next-line no-shadow
/**/    function POST_Person(Person) {
/**/      return type_czech.check_interface(Person, { salu: 'String', fullMethod: 'Function' });
/**/     }
/**/
/**/    Person = type_czech.linkUp(Person, PRE_Person, POST_Person);
/**/  }

  return Person;
};
