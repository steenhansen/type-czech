/* eslint-disable */


function link_up_706(type_czech, [addInt2Int_706, timesIntByInt_706]) {

  function PRE_addInt2Int_706(first_int, second_int) {
    return type_czech.checkParam_type([first_int, second_int], ['number', 'number'])
  }
  function POST_addInt2Int_706(sum_int) {
    return type_czech.checkParam_type(sum_int, 'number')
  }
  addInt2Int_706 = type_czech.linkUp(addInt2Int_706, PRE_addInt2Int_706, POST_addInt2Int_706)

  function PRE_timesIntByInt_706(first_int, second_int) {
   return type_czech.checkParam_type([first_int, second_int], ['number', 'number']);
  }
  function POST_timesIntByInt_706(sum_int) {
    return type_czech.checkParam_type(sum_int, 'number')
  }
  timesIntByInt_706 = type_czech.linkUp(timesIntByInt_706, PRE_timesIntByInt_706, POST_timesIntByInt_706);
  return [addInt2Int_706, timesIntByInt_706]
}



