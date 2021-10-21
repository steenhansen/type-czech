<?php

//  http://localhost/php-example-fast.php

// Fast but complicated to save a few milliseconds

define("TYPE_CHECK_JS", true);

$js_always_first = <<<'EOD'
  <script>  
    function aLottery(lottery_name, lucky_numbers, draw_date){
      the_lottery = `${lottery_name} ::: ${lucky_numbers} :::`;
      console.log(the_lottery, draw_date);
    }
  </script>
EOD;

$js_only_if_type_check_second = <<<'EOD'
  <script src='TypeCzech.js'></script>

  <script>   
    type_czech = TypeCzech('LOG-ERRORS');

    function PRE_check_aLottery (){
      LOTTERY_SIGNATURE = ['String', ['Number'], 'Date'];
      type_issue = type_czech.check_type(arguments, LOTTERY_SIGNATURE);
      if (type_issue) 
        return type_issue;
  
      empty_err=type_czech.check_variadicEmpty(arguments,['EMPTY-ERROR']);
      if (empty_err)
        return empty_err;

      return '';
    }

    aLottery = type_czech.link(aLottery, PRE_check_aLottery);
</script>
EOD;

$js_always_third = <<<'EOD'
  <script>  
    aLottery('El Gordo', [1,2,3,4,5,0], new Date('jun 14 1999'));
    aLottery('Mega Millions', 17, new Date('jun 14 1999'));
    aLottery('Powerball', [], new Date('jun 14 1999'));
  </script>
EOD;

print $js_always_first;

if (TYPE_CHECK_JS) {
  print $js_only_if_type_check_second;
  print "TypeCzech was turned ON, open console to view output and see type error";
} else {
  print "TypeCzech was turned OFF, open console to view output";
}

print $js_always_third;


