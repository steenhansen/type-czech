<?php

//  http://localhost/php-example-simple.php

// Simple but loose a few milliseconds

define("TYPE_CHECK_JS", true);

$js_only_if_type_check_first = <<<'EOD'
  <script src='TypeCzech.js'></script>
EOD;

$js_always_second = <<<'EOD'
  <script>  
    if (typeof TypeCzech === 'function')
      type_czech = TypeCzech('LOG-ERRORS');
    else
      type_czech = { link: (nop) => nop, isActive: (x) => false };
    
    function PRE_check_aLottery (){
      LOTTERY_SIGNATURE = ['string', ['number'], 'date'];
      type_issue = type_czech.check_type(arguments, LOTTERY_SIGNATURE);
      if (type_issue)
        return type_issue;
    
      empty_err=type_czech.check_emptyVariadic(arguments,['EMPTY-ERROR']);
      if (empty_err)
        return empty_err;
  
      return '';
    }
  
    aLottery = type_czech.linkUp(aLottery, PRE_check_aLottery);

    function aLottery(lottery_name, lucky_numbers, draw_date){
      the_lottery = `${lottery_name} ::: ${lucky_numbers} :::`;
      console.log(the_lottery, draw_date);
    }

    aLottery('El Gordo', [1,2,3,4,5,0], new Date('jun 14 1999'));
    aLottery('Mega Millions', 17, new Date('jun 14 1999'));
    aLottery('Powerball', [], new Date('jun 14 1999'));
  </script>
EOD;

if (TYPE_CHECK_JS) {
  print $js_only_if_type_check_first;
  print "TypeCzech was turned ON, open console to view output and see type error";
} else {
  print "TypeCzech was turned OFF, open console to view output";
}

print $js_always_second;


