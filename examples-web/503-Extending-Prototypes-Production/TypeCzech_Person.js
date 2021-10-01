/* eslint-disable */

function TypeCzech_Person() {
  if (type_czech.is_active) {
    function PRE_Person(salu, f_name, l_name){  log(LEVEL_3+'PRE-Person') }
    function POST_Person(Person){ log(LEVEL_3+"POST-Person") }
    Person = type_czech.link(Person, PRE_Person, POST_Person)
  }
}




