/* eslint-disable */

function TypeCzech_Person() {
  if (type_czech.is_active) {
    function PRE_check_Person(salu, f_name, l_name){  log(LEVEL_3+'PRE-Person') }
    function POST_check_Person(Person){ log(LEVEL_3+"POST-Person") }
    Person = type_czech.link(Person, PRE_check_Person, POST_check_Person)
  }
}




