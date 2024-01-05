## Assert Pollution

A function can also be have its specification fufilled with congesting assertions for the same effect.

```
function aLottery(lottery_name, lucky_numbers, draw_date){
  is_testing && assert.typeOf(lottery_name, 'string');
  is_testing && assert.typeOf(lucky_numbers, 'array');
  is_testing && assert.typeOf(draw_date, 'date');

  is_testing && assert.notEqual(lottery_name, '');
  is_testing && assert.isNotEmpty(lucky_numbers);
  is_testing && assert.notEqual(draw_date, '');

  is_testing && lucky_numbers.forEach(lucky_num => assert.typeOf(lucky_num, 'number'));

  console.log(`${lottery_name} ::: ${lucky_numbers} ::: `, draw_date)
}
```