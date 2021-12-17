//  node type-czech-off.js

/* eslint-disable */

// 1,000 loops
//   TypeCzech all calls == 155ms
//   Turn off TypeCzech == 1ms
//     Remove TypeCzech == 1ms

// 100,000 loops
//   TypeCzech all calls == 10143ms == 10 seconds
//   Turn off TypeCzech == 41ms
//     Remove TypeCzech == 41ms

// 1,000,000 loops
//   TypeCzech all calls == 99648ms == 100 seconds
//   Turn off TypeCzech == 377ms
//     Remove TypeCzech == 377ms


const use_type_czech = false;

let type_czech;
if (use_type_czech) {
  const { TypeCzech } = require('../TypeCzech.js');
  type_czech = TypeCzech('LOG-ERRORS');
} else {
  type_czech = { linkUp: (_) => _, isActive: (x) => false };
}

const LOTTERY_SIGNATURE = ['string', ['numbers'], 'date'];
function PRE_aLottery(lottery_name, lucky_numbers, draw_date) {
  the_parameters = [lottery_name, lucky_numbers, draw_date]
  type_issue = type_czech.checkParam_type(the_parameters, LOTTERY_SIGNATURE);
  if (type_issue) return type_issue;
  return type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR');
}

aLottery = type_czech.linkUp(aLottery, PRE_aLottery);

///////////////////////////////////////////////////

function aLottery(lottery_name, lucky_numbers, draw_date) {}

var start = new Date();

for (let i = 0; i < 1000000; i++) {
  var a_lottery = aLottery('the-lottery', [1,2,3,4,5,6,7], new Date('jun 14 1999'));
}

var end = new Date() - start;

console.log(`Run took ${end} ms`);


