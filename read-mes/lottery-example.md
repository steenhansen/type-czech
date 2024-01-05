


## Lottery Example

- type_czech = <b>TypeCzech('LOG-ERRORS')</b> logs errors to the console instead of throwing exceptions
- type_czech.<b>checkParam_type()</b> checks that the parameter types to aLottery() are first a string, then an array of numbers, and finally a date
- type_czech.<b>checkArgs_emptyEach()</b> complains when parameters are found to be empty strings, arrays, objects, or dates.
- <b>PRE_check_aLottery()</b> is executed just before aLottery() and runs via type_czech.<b>linkUp()</b>
- /\*\*/ highlights added TypeCzech test code that is safely removable or programmatically turned off

```
function aLottery(lottery_name, lucky_numbers, draw_date){
  console.log(`${lottery_name} ::: ${lucky_numbers} ::: `, draw_date)
}

/**/  type_czech = TypeCzech('LOG-ERRORS')
/**/
/**/  LOTTERY_SIGNATURE = ['string', ['numbers'], 'date']
/**/
/**/  function PRE_check_aLottery(lottery_name, lucky_numbers, draw_date){
/**/    the_parameters = [lottery_name, lucky_numbers, draw_date]
/**/    type_issue = type_czech.checkParam_type(the_parameters, LOTTERY_SIGNATURE)
/**/    if (type_issue)
/**/      return type_issue
/**/
/**/    empty_issue = type_czech.checkArgs_emptyEach(arguments, 'EMPTY-ERROR')
/**/    if (empty_issue)
/**/      return empty_issue
/**/
/**/    return ''
/**/  }
/**/
/**/  aLottery = type_czech.linkUp(aLottery, PRE_check_aLottery)

aLottery('El Gordo', [1,2,3,4,5,0], new Date('jun 14 1999')) // no effects as valid parameters
```

[Live editable program on JSFiddle](https://jsfiddle.net/steen_hansen/0xtpLwsc/?00-Readme-Example)

Below is console.log input and output preceded with >>.

```
>>El Gordo ::: 1,2,3,4,5,0 ::: Date Mon Jun 14 1999 00:00:00 GMT-0700 (Pacific Daylight Time)

aLottery('Powerball', [], new Date('jun 14 1999'))

>>PRE_check_aLottery() PRE-FUNC: Empty array has no types
>>         CHECKER checkParam_type()
>>     ACTUAL TYPE ['string','array','date']
>>          VALUES ["Powerball",[],1999-06-14T07:00:00.000Z]
>>   EXPECTED TYPE ["string",["number"],"date"]
>>          ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>Powerball ::: ::: Date Mon Jun 14 1999 00:00:00 GMT-0700 (Pacific Daylight Time)

aLottery('', [1,2,3,4,5,26], new Date('Dec 31 1999'))

>>PRE_check_aLottery() PRE-FUNC: ELEMENT '0' is erroneously empty :
>>                       CHECKER checkArgs_emptyEach()
>>                  ACTUAL TYPES ['string','array','date']
>>                        VALUES ["",[1,2,3,4,5,26],1999-12-31T08:00:00.000Z]
>>               EMPTY ASSERTION ['EMPTY-ERROR']
>>                      ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>::: 1,2,3,4,5,26 ::: Date Fri Dec 31 1999 00:00:00 GMT-0800 (Pacific Standard Time)

aLottery('Mega Millions', 17, new Date('jun 14 1999'))

>>PRE_check_aLottery() PRE-FUNC: Param is meant to be 'array' but is of the wrong type of 'number':17
>>                     CHECKER checkParam_type()
>>                ACTUAL TYPES ['string','number','date']
>>                      VALUES ["Mega Millions",17,1999-06-14T07:00:00.000Z]
>>               EXPECTED TYPE ["string",["number"],"date"]
>>                      ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>Mega Millions ::: 17 ::: Date Mon Jun 14 1999 00:00:00 GMT-0700 (Pacific Daylight Time)

aLottery('Lotto 649', [1,2,3,4,5,6])

>>PRE_check_aLottery() PRE-FUNC:  ELEMENT '2' is assumed to be a 'date', but is mistakenly a 'undefined'
>>                     CHECKER checkParam_type()
>>                ACTUAL TYPES ['string','array']
>>                      VALUES "Lotto 649",[1,2,3,4,5,6]
>>               EXPECTED TYPE ["string",["number"],"date"]
>>                      ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>Lotto 649 ::: 1,2,3,4,5,6 ::: undefined

aLottery('Oz Lotto', ['fourty-two'], new Date('jun 14 1999'))

>>PRE_check_aLottery() PRE-FUNC:  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'string' with a value of fourty-two
>>                     CHECKER checkParam_type()
>>                ACTUAL TYPES ['string','array','date']
>>                      VALUES ["Oz Lotto",["fourty-two"],1999-06-14T07:00:00.000Z]
>>               EXPECTED TYPE ["string",["number"],"date"]
>>                      ORIGIN aLottery(lottery_name, lucky_numbers, draw_date)
>>Oz Lotto ::: fourty-two ::: Date Mon Jun 14 1999 00:00:00 GMT-0700 (Pacific Daylight Time)
```