//  node no-type-czech.js

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



///////////////////////////////////////////////////

function aLottery(lottery_name, lucky_numbers, draw_date) {}

var start = new Date();

for (let i = 0; i < 1000000; i++) {
  var a_lottery = aLottery('the-lottery', [1,2,3,4,5,6,7], new Date('jun 14 1999'));
}

var end = new Date() - start;

console.log(`Run took ${end} ms`);


