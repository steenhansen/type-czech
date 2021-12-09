/* eslint-disable */

// idea here is to verify that TypeCzech does not interfere with this variables between closure instantiations

//  file:///C:/Users/16043/Desktop/_js/proxy/type-czech/examples-web/201-Extending-Closures-Inline.html

try{
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  current_version = 0;

  ////////////////////////////////////////////////////////////////////////////////

  function PRE_check_First(){
    //console.log(this.f_name)
    if (this.f_name !== undefined) throw '2 PRE_check_First f_name not undefined' + current_version
  }
  function POST_check_First(){
    //console.log(this.f_name)
    if (this.f_name !== 'f_name'+current_version) throw '3 POST_check_First wrong f_name' + current_version
  }
  function PRE_check_firstMethod(){
    //console.log(this.f_name)
    if (this.f_name !== 'f_name'+current_version) throw '4 PRE_check_firstMethod wrong f_name' + current_version
  }
  function POST_check_firstMethod(){
    //console.log(this.f_name)
    if (this.f_name !== 'f_name'+current_version) throw '5 POST_check_firstMethod wrong f_name' + current_version
  }
  First_PREs = {First:PRE_check_First, firstMethod:PRE_check_firstMethod}
  First_POSTs = {First:POST_check_First, firstMethod:POST_check_firstMethod}
  First = type_czech.linkUp(First, First_PREs, First_POSTs)

  ////////////////////////////////////////////////////////////////////////////////

  function PRE_check_Last(){
    //console.log(this.f_name, this.l_name)
    if (this.f_name !== undefined) throw '8 PRE_check_Last f_name not undefined' + current_version
    if (this.l_name !== undefined) throw '9 PRE_check_Last f_name not undefined' + current_version
  }
  function POST_check_Last(){
    //console.log(this.f_name, this.l_name)
    if (this.l_name !== 'l_name'+current_version) throw '11 POST_check_Last wrong f_name' + current_version
  }
  function PRE_check_lastMethod(){
    //console.log(this.f_name, this.l_name)
    if (this.f_name !== 'f_name'+current_version) throw '12 PRE_check_lastMethod wrong f_name' + current_version
    if (this.l_name !== 'l_name'+current_version) throw '13 PRE_check_lastMethod wrong f_name' + current_version
  }
  function POST_check_lastMethod(){
    //console.log(this.f_name, this.l_name)
    if (this.f_name !== 'f_name'+current_version) throw '14 POST_check_lastMethod wrong f_name' + current_version
    if (this.l_name !== 'l_name'+current_version) throw '15 POST_check_lastMethod wrong f_name' + current_version
  }
  Last_PREs = {Last:PRE_check_Last, lastMethod:PRE_check_lastMethod}
  Last_POSTs = {Last:POST_check_Last, lastMethod:POST_check_lastMethod}
  Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs)
  ////////////////////////////////////////////////////////////////////////////////

  function PRE_check_Full(){
     //console.log(this.salu, this.f_name, this.l_name)
    if (this.salu   !== undefined) throw '19 PRE_check_Full() wrong salu' + current_version
    if (this.f_name !== undefined) throw '20 PRE_check_Full() wrong f_name' + current_version
    if (this.l_name !== undefined) throw '21 PRE_check_Full() wrong l_name' + current_version
  }
  function POST_check_Full(){
//    console.log(this.salu, this.f_name, this.l_name)
    if (this.salu   !== 'salu'+current_version) throw '22 POST_check_Full() wrong salu' + current_version
  }
  function PRE_check_fullMethod(){
    //console.log(this.salu, this.f_name, this.l_name)
    if (this.salu   !== 'salu'+current_version) throw '25 PRE_check_fullMethod() wrong salu' + current_version
    if (this.f_name !== 'f_name'+current_version) throw '26 PRE_check_fullMethod() wrong f_name' + current_version
    if (this.l_name !== 'l_name'+current_version) throw '27 PRE_check_fullMethod() wrong l_name' + current_version
  }
  function POST_check_fullMethod(){
    //console.log(this.salu, this.f_name, this.l_name)
    if (this.salu   !== 'salu'+current_version) throw '28 POST_check_fullMethod() wrong salu' + current_version
    if (this.f_name !== 'f_name'+current_version) throw '29 POST_check_fullMethod() wrong f_name' + current_version
    if (this.l_name !== 'l_name'+current_version) throw '30 POST_check_fullMethod() wrong l_name' + current_version
  }
  Full_PREs = {Full:PRE_check_Full, fullMethod:PRE_check_fullMethod}
  Full_POSTs= {Full:POST_check_Full, fullMethod:POST_check_fullMethod}
  Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs)

  ////////////////////////////////////////////////////////////////////////////////

  function First(f_name) {
    this.f_name = f_name
    this.firstMethod = function() { }
  }
  
  function Last(l_name) {
    this.l_name = l_name
    this.lastMethod = function () { }
  }
  
  function Full(salu) {
    this.salu = salu
    this.fullMethod = function () { }
  }

  function Person(salu, f_name, l_name){
    person_full = new Full(salu)
    person_last = new Last(l_name)
    person_first = new First(f_name)
    Object.setPrototypeOf(person_full, person_last)
    Object.setPrototypeOf(person_last, person_first)
    return person_full
  }
  
  ////////////////////////////////////////////////////////////////////////////////

  current_version = 1;
  full_1 = Person('salu1', 'f_name1', 'l_name1')

  current_version = 2;
  full_2 = Person('salu2', 'f_name2', 'l_name2')

  current_version = 3;
  full_3 = Person('salu3', 'f_name3', 'l_name3')

  ////////////////////////////////////////////////////////////////////////////////

  current_version = 1;
  full_1.firstMethod()
  full_1.lastMethod()
  full_1.fullMethod()

  current_version = 2;
  full_2.firstMethod()
  full_2.lastMethod()
  full_2.fullMethod()

  current_version = 3;
  full_3.firstMethod()
  full_3.lastMethod()
  full_3.fullMethod()

  ////////////////////////////////////////////////////////////////////////////////

  current_version = 1;
  full_1.firstMethod()
  full_1.lastMethod()
  full_1.fullMethod()

  current_version = 2;
  full_2.firstMethod()
  full_2.lastMethod()
  full_2.fullMethod()

  current_version = 3;
  full_3.firstMethod()
  full_3.lastMethod()
  full_3.fullMethod()

}catch(e){ 
  console.log('closure_check_52000 - FAIL', e)
  TEST_total_fails += 1;
}


TEST_total_checks += 1;

