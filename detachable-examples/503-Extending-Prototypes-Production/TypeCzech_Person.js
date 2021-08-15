/* eslint-disable */

function TypeCzech_Person() {
  if (type_czech.is_active) {
    function PRE_Person(){  log(LEVEL_3+'PRE-Person') }
    function POST_Person(){ log(LEVEL_3+"POST-Person") }
    Person = type_czech.check(Person, PRE_Person, POST_Person)
  }
}




