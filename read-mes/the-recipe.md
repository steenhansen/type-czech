
## The Recipe

TypeCzech function checking calls should only appear in these three places:

- A. encased by a linked-up PRE_check() function
- B. wrapped by a linked-up POST_check() function

```
function PRE_check_yourFunc(param_1, param_2, param_3){
  /* A. TypeCzech functions should mostly appear here to check parameters BEFORE yourFunc() runs */
}

function POST_check_yourFunc(function_result){
  /* B. TypeCzech functions sometimes occur here to check the RESULTS of yourFunc() */
}
yourFunc = type_czech.linkUp(yourFunc, PRE_check_yourFunc, POST_check_yourFunc)

function yourFunc(param_1, param_2, param_3){
  return function_result
}
```

- C. or inside an isActive() if then statement inside of a promise. Then you
  have to deliver the error message via an check_assert() call; it's not automatic when inside THEN blocks. Below is a passing example of '8.8.8.8', and a failing example. Note that the signature is built to match the number of returning countries in the variable geo_array_signature.

```
type_czech = TypeCzech('THROW-EXCEPTIONS')

ONE_GeoJS_SIGNATURE = {country:'string', country_3:'string', ip:'string', name:'string'}

function getIpCountryInfo(ip_numbers){
  country_url = 'https://get.geojs.io/v1/ip/country.json?ip=' + ip_numbers
  fetch(country_url)
  .then(response => response.json())
  .then(geo_data => {
    if (type_czech.isActive()) {
      geo_array_signature = Array(geo_data.length).fill(ONE_GeoJS_SIGNATURE);
      type_err = type_czech.checkParam_type(geo_data, geo_array_signature)
      type_czech.check_assert(type_err, 'Error - GeoJs.io error', geo_data)
    }
    return geo_data
  })
  .then(geo_data => console.dir(geo_data))
}

getIpCountryInfo('8.8.8.8,' + '46.135.0.0,' + '104.200.151.94')

>> Object { country: "US", country_3: "USA", ip: "8.8.8.8", ...}
>> Object { country: "CZ", country_3: "CZE", ip: "46.135.0.0", … }
>> Object { country: "CA", country_3: "CAN", ip: "199.175.213.12", ...}

getIpCountryInfo('fail-no-country-ip')

>>    MESSAGE  Key 'country', which has a type of 'string', is missing in the checked object
>>    CHECKER check_assert()
>>ACTUAL TYPE 'array'
>>     VALUES [{ip:"fail-no-country-ip"}]
>>     ORIGIN Error - GeoJs.io error
```

Above in the fetch() promise chain, if the returned value of 'geo_data' does not match the {country:'string', country_3:'string', ip:'string', name:'string'}, then type_czech.check_assert() will throw or console.log the error message.

When TypeCzech.js is not loaded, then the below construct renders all linkUp() calls into having no effect.

```
type_czech = { linkUp: (nop) => nop, isActive: (x) => false }
```

## The Recommendation

For sanity's sake, I advise keeping TypeCzech code in separate files. This is highlighed in the examples of
[204-Extending-Closures-Single](https://jsfiddle.net/steen_hansen/8kbtyfz1/?204-Extending-Closures-Single),
[304-Extending-IIFEs-Single](https://jsfiddle.net/steen_hansen/ktbczhs8/?304-Extending-IIFEs-Single),
[404-Extending-ClassFree-Single](https://jsfiddle.net/steen_hansen/asjwhbd8/?404-Extending-ClassFree-Single),
[504-Extending-Prototypes-Single](https://jsfiddle.net/steen_hansen/0fabr5g3/?504-Extending-Prototypes-Single),
[604-Extending-OLOO-Single](https://jsfiddle.net/steen_hansen/74Lvbj5x/?604-Extending-OLOO-Single).

Thus detaching of TypeCzech can be done as below, without loading any checking code in the browser.

```
// <script src="../TypeCzech.js">
// <script src="./204-all-checks-external.js">
if (typeof linkUp_typeCzech === 'function') {
  linkUp_typeCzech();
}
```

Because JavaScript does not completely hoist classes there is no example #104.

## The Penalty

There is a time penalty for using TypeCzech on a function many times. For a complicated check, like the above aLottery(), a loop of 100,000 calls will add a noticable 10 seconds to execution time. There is virtually no difference in test runs between TypeCzech
code that is turned off and TypeCzech code that has been removed.

