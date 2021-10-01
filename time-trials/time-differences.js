/* eslint-disable indent */
/* eslint-disable no-multi-spaces */
/* eslint-disable global-require */

//  node --trace-uncaught time-differences.js

// 100,000 loops
// check all calls == 4351ms
// turn off Type-Czech == 49ms
// remove Type-Czech == 50ms

// 1,000,000 loops
// check all == 42848ms
// turn off == 447
// remove == 447

// 10,000,000 loops
// check all == ms
// turn off == 4434ms
// remove == 4431ms



const use_type_czech = true;

let type_czech;
if (use_type_czech) {
  const { TypeCzech } = require('../TypeCzech.js');
  type_czech = TypeCzech('LOG-ERRORS');
} else {
  type_czech = { link: (_) => _, is_active: false };
}

const LOTTERY_SIGNATURE = ['String', ['Number'], 'Date'];
function PRE_aLottery(lottery_name, lucky_numbers, draw_date) {
  type_issue = type_czech.check_type(arguments, LOTTERY_SIGNATURE);
  if (type_issue) return type_issue;
  return type_czech.check_variadicEmpty(arguments, ['EMPTY-ERROR']);
 // return type_czech.check_empty(arguments, ['EMPTY-ERROR']);
}

aLottery = type_czech.link(aLottery, PRE_aLottery);






function aLottery(lottery_name, lucky_numbers, draw_date) {}


var start = new Date();

for (let i = 0; i < 10000000; i++) {
  var a_lottery = aLottery('the-lottery', [1,2,3,4,5,6,7], new Date('jun 14 1999'));
}

var end = new Date() - start;

console.log(`Call to doSomething took ${end} ms`);


