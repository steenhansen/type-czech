/* eslint-disable */

//  node no-type-czech.js

// 1,000 loops
//   TypeCzech all calls == 120ms
//   Turn off TypeCzech == 1ms
//     Remove TypeCzech == 1ms

// 100,000 loops
//   TypeCzech all calls == 4351ms
//   Turn off TypeCzech == 49ms
//     Remove TypeCzech == 50ms

// 1,000,000 loops
//   TypeCzech all calls == 42848ms
//   Turn off TypeCzech == 447ms
//     Remove TypeCzech == 447ms

// 10,000,000 loops
//   TypeCzech all calls == 424s
//   Turn off TypeCzech == 4432ms
//     Remove TypeCzech == 4427ms

// 100,000,000 loops
//   Turn off TypeCzech == 44717ms
//     Remove TypeCzech == 44422ms

///////////////////////////////////////////////////

function aLottery(lottery_name, lucky_numbers, draw_date) {}

var start = new Date();

for (let i = 0; i < 1000; i++) {
  var a_lottery = aLottery('the-lottery', [1,2,3,4,5,6,7], new Date('jun 14 1999'));
}

var end = new Date() - start;

console.log(`Run took ${end} ms`);


