/* eslint-disable */

// idea here is to verify that TypeCzech does not interfere with this variables between closure instantiations

//  file:///C:/Users/16043/Desktop/_js/proxy/type-czech/examples-web/201-Extending-Closures-Inline.html

pass_count = 0;
fail_count = 0;

function printTestName(an_str) {
  if (typeof window !== "undefined") {
    if (typeof window.browserList === 'function') {
      if (window.browserList()) {
        console.log(pass_count, an_str);
      }
    }
  } else {
    if (typeof global.nodejsList === 'function') {
      if (global.nodejsList()) {
        console.log(pass_count, an_str);
      }
    }
   } 
}

try{
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  current_version = 0;
  ////////////////////////////////////////////////////////////////////////////////

  function First(f_name) {
    FIRST_TEMPLATE = {
      firstMethod(){ return f_name },
      instanceOf(){
        return 'First'
      }
    }
    first_object = Object.create(FIRST_TEMPLATE)
    first_object.f_name = f_name
    return first_object
  }
  
  function Last(f_name, l_name) {
    LAST_TEMPLATE = {
      lastMethod(){ return [f_name, l_name] },
      instanceOf(){
        return 'Last'
      }
    }
    first = First(f_name)
    Object.setPrototypeOf(LAST_TEMPLATE, first)
    last_object = Object.create(LAST_TEMPLATE)
    last_object.l_name = l_name
    return last_object
  }
  
  function Full(salu, f_name, l_name) {
    FULL_TEMPLATE = {
      fullMethod(){ return [salu, f_name, l_name] },
      instanceOf(){
        return 'Full'
      },
    }
    last = Last(f_name, l_name) 
    Object.setPrototypeOf(FULL_TEMPLATE, last)
    full_object = Object.create(FULL_TEMPLATE)
    full_object.salu = salu
    return full_object
  }
  ////////////////////////////////////////////////////////////////////////////////

  function PRE_check_First(){
  }
  function POST_check_First(){
  }
  function PRE_check_firstMethod(){
  }
  function POST_check_firstMethod(f_name){
    //console.log(f_name)
    if (f_name !== 'f_name'+current_version) throw '3 POST_check_First wrong f_name' + current_version
  }
  First_PREs = {First:PRE_check_First, firstMethod:PRE_check_firstMethod}
  First_POSTs = {First:POST_check_First, firstMethod:POST_check_firstMethod}
  First = type_czech.linkUp(First, First_PREs, First_POSTs)

  ////////////////////////////////////////////////////////////////////////////////

  function PRE_check_Last(){
  }
  function POST_check_Last(){
  }
  function PRE_check_lastMethod(){
  }
  function POST_check_lastMethod(lastMethod_result){
    //console.log(lastMethod_result)
    const [f_name, l_name] = lastMethod_result
    if (f_name !== 'f_name'+current_version) throw '14 POST_check_lastMethod wrong f_name' + current_version
    if (l_name !== 'l_name'+current_version) throw '15 POST_check_lastMethod wrong f_name' + current_version
  }
  Last_PREs = {Last:PRE_check_Last, lastMethod:PRE_check_lastMethod}
  Last_POSTs = {Last:POST_check_Last, lastMethod:POST_check_lastMethod}
  Last = type_czech.linkUp(Last, Last_PREs, Last_POSTs)
  ////////////////////////////////////////////////////////////////////////////////

  function PRE_check_Full(){
  }
  function POST_check_Full(){
  }
  function PRE_check_fullMethod(){
  }
  function POST_check_fullMethod(fullMethod_result){
    //console.log(fullMethod_result)
    const [salu, f_name, l_name] = fullMethod_result
    if (salu   !== 'salu'+current_version) throw '28 POST_check_fullMethod() wrong salu' + current_version
    if (f_name !== 'f_name'+current_version) throw '29 POST_check_fullMethod() wrong f_name' + current_version
    if (l_name !== 'l_name'+current_version) throw '30 POST_check_fullMethod() wrong l_name' + current_version
  }
  Full_PREs = {Full:PRE_check_Full, fullMethod:PRE_check_fullMethod}
  Full_POSTs= {Full:POST_check_Full, fullMethod:POST_check_fullMethod}
  Full = type_czech.linkUp(Full, Full_PREs, Full_POSTs)


  
  ////////////////////////////////////////////////////////////////////////////////

  current_version = 1;
  full_1 = Full('salu1', 'f_name1', 'l_name1')

  current_version = 2;
  full_2 = Full('salu2', 'f_name2', 'l_name2')

  current_version = 3;
  full_3 = Full('salu3', 'f_name3', 'l_name3')

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
  pass_count +=1;
}catch(e){ 
  console.log('oloo_check_56000 - FAIL', e)
  fail_count += 1;
}

 printTestName("oloo_check_56000")  


if (fail_count>0) {
  the_problem = `public-tests/oloo_check_56000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;