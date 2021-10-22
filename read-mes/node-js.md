



# Node.js


To run 'node node-example.js'

    /**/  const { TypeCzech } = require('./TypeCzech.js');
    /**/  
    /**/  const type_czech = TypeCzech('LOG-ERRORS');
    /**/  // const type_czech = TypeCzech('NO-CHECKING');
    /**/  
    /**/  const LOTTERY_SIGNATURE = ['String', ['Number'], 'Date'];
    /**/  
    /**/  function PRE_check_aLottery(lottery_name, lucky_numbers, draw_date) {
    /**/    const type_issue = type_czech.check_type(arguments, LOTTERY_SIGNATURE);
    /**/    if (type_issue) return type_issue;
    /**/    return type_czech.check_empty(arguments, ['EMPTY-ERROR']);
    /**/  }
    /**/  
    /**/  aLottery = type_czech.linkUp(aLottery, PRE_check_aLottery);

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

&copy; 2021 Steen Hansen    