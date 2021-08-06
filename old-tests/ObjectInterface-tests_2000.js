/* eslint-disable */

passed_objectInterface = 0;
failed_objectInterface = 0;

//  hasShow = type_czech.check(hasShow, undefined, POST_hasShow)
_objectInterface_2001(2001);   // fine
_objectInterface_2002(2002);   // missing function in interface
_objectInterface_2003(2003);   // wrong type in interface

//  hasShow = type_czech.check(hasShow, undefined, {hasShow:POST_hasShow})
_objectInterface_2004(2004);   // fine
_objectInterface_2005(2005);   // missing function in interface
_objectInterface_2006(2006);   // wrong type in interface

total_fails += failed_objectInterface;
console.log('_objectInterface failed tests', failed_objectInterface)

total_checks += passed_objectInterface;
console.log('_objectInterface passed tests', passed_objectInterface)





function _objectInterface_2001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);

  function POST_hasShow(an_object){
    return type_czech.objectInterface(an_object, {show:'Function'});
  }
  
  hasShow = type_czech.check(hasShow, undefined, POST_hasShow);
  
  function hasShow(){ return {show: (x) => x}; }
  
  try {
    hasShow();
  } catch (e){
    failed_objectInterface += 1;
    _throw(`${error_id} objectInterface() === ${actual}`);
  }

  failed_objectInterface +=type_czech.failureTally();
  passed_objectInterface ++;
}


function _objectInterface_2002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);

  function POST_hasShow(an_object){
    return type_czech.objectInterface(an_object, {show:'Function'});
  }
  
  hasShow = type_czech.check(hasShow, undefined, POST_hasShow);
  
  function hasShow(){ return {noShow: (x) => x}; }

  try {
    hasShow();
  } catch (actual){
    expected =`Interface mismatches : actual type of 'show' is 'undefined', with a value of 'undefined', not the expected 'Function' type`;
    if (actual !== expected) {
      failed_objectInterface += 1;
      _throw(`${error_id} objectInterface() === ${actual}`);
    }
    passed_objectInterface ++;
  }

}




function _objectInterface_2003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);

  function POST_hasShow(an_object){
    return type_czech.objectInterface(an_object, {show:'Function'});
  }
  
  hasShow = type_czech.check(hasShow, undefined, POST_hasShow);
  
  function hasShow(){ return {show: 17}; }

  try {
    hasShow();
  } catch (actual){
    expected =`Interface mismatches : actual type of 'show' is 'Number', with a value of '17', not the expected 'Function' type`;
    if (actual !== expected) {
      failed_objectInterface += 1;
      _throw(`${error_id} objectInterface() === ${actual}`);
    }
    passed_objectInterface ++;
  }

}



////////////////////////////////////////////



function _objectInterface_2004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);

  function POST_hasShow(an_object){
    return type_czech.objectInterface(an_object, {show:'Function'});
  }
  
  hasShow = type_czech.check(hasShow, undefined, {hasShow:POST_hasShow});
  
  function hasShow(){ return {show: (x) => x}; }
  
  try {
    hasShow();
  } catch (e){
    console.log('ERRORR e==', e)
  }

  failed_objectInterface +=type_czech.failureTally();
  passed_objectInterface ++;
}


function _objectInterface_2005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);

  function POST_hasShow(an_object){
    return type_czech.objectInterface(an_object, {show:'Function'});
  }
  
  hasShow = type_czech.check(hasShow, undefined, {hasShow:POST_hasShow});
  
  function hasShow(){ return {noShow: (x) => x}; }

  try {
    hasShow();
  } catch (actual){
    expected =`Interface mismatches : actual type of 'show' is 'undefined', with a value of 'undefined', not the expected 'Function' type`;
    if (actual !== expected) {
      failed_objectInterface += 1;
      _throw(`${error_id} objectInterface() === ${actual}`);
    }
    passed_objectInterface ++;
  }

}




function _objectInterface_2006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);

  function POST_hasShow(an_object){
    return type_czech.objectInterface(an_object, {show:'Function'});
  }
  
  hasShow = type_czech.check(hasShow, undefined, {hasShow:POST_hasShow});
  
  function hasShow(){ return {show: 17}; }

  try {
    hasShow();
  } catch (actual){
    expected =`Interface mismatches : actual type of 'show' is 'Number', with a value of '17', not the expected 'Function' type`;
    if (actual !== expected) {
      failed_objectInterface += 1;
      _throw(`${error_id} objectInterface() === ${actual}`);
    }
    passed_objectInterface ++;
  }

}
