/* eslint-disable */

//  https://cdn.jsdelivr.net/gh/steenhansen/type-czech@latest/example-snippets/705-No-Dead-Code.js

if (typeof TypeCzech !== 'function') {
  linkUp_705 = () => { }
} else {
    linkUp_705 = () => {
      type_czech = TypeCzech('LOG-ERRORS')

      function PRE_addInt2Int(first_int, second_int) {
        return type_czech.checkParam_type([first_int, second_int], ['number', 'number'])
      }

      function POST_addInt2Int(sum_int) {
        return type_czech.checkParam_type(sum_int, 'number')
      }
   
      addInt2Int = type_czech.linkUp(addInt2Int, PRE_addInt2Int, POST_addInt2Int)
    };
}
