/* node example-node.js */

/* eslint-disable */

/**/  const { TypeCzech } = require('../TypeCzech.js');
/**/
/**/  const type_czech = TypeCzech('LOG-ERRORS');
/**/
/**/  const LOTTERY_SIGNATURE = ['string', ['numbers'], 'date'];
/**/
/**/  function PRE_aLottery(lottery_name, lucky_numbers, draw_date) {
/**/    const type_issue = type_czech.checkParam_type([lottery_name, lucky_numbers, draw_date], LOTTERY_SIGNATURE);
/**/    if (type_issue) return type_issue;
/**/    return type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR');
/**/  }
/**/
/**/  aLottery = type_czech.linkUp(aLottery, PRE_aLottery);

function aLottery(lottery_name, lucky_numbers, draw_date) {
  const the_lottery = `::: ${lottery_name} ::: ${lucky_numbers} :::`;
  console.log(the_lottery, draw_date, ':::\n\n');
}

aLottery('El Gordo', [1, 2, 3, 4, 5, 0], new Date('jun 14 1999'));

aLottery('Lotto 649', [1, 2, 3, 4, 5, 6]);

aLottery('Oz Lotto', ['fourty-two'], new Date('jun 14 1999'));

aLottery('Mega Millions', 17, new Date('jun 14 1999'));

aLottery('Powerball', [], new Date('jun 14 1999'));

aLottery('', [1, 2, 3, 4, 5, 26], new Date('Dec 31 1999'));
