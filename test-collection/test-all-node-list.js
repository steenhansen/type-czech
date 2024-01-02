
// NodeJs
//        npm test          == show total fails and checks only
//        npm run test-list == show every test
//
// Browser
//        /test-collection/test-all-web.html       == show total fails and checks only
//        /test-collection/test-all-web-list.html  == show every test

global.nodejsList = () => {
      return true
}

require("./test-all-node.js");
