
## check_assert()
  -  [A Assert Check in a Promise](#A) - one object in an array
  -  [B Assert Check in a Promise](#B) - one or more similar objects in an array

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Assert checkParam_type() in a Promise<a name="A"></a> - one object in an array

 Ask [GeoJS](#https://www.geojs.io/) for the country belonging to an ip, [USA 8.8.8.8](#https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8) in this example, and 
 check that the object returned has the expected keys of country, country_3, ip, and name. Note that this example can only get <b>one</b> country from one ip number.



  
```
type_czech = TypeCzech('THROW-EXCEPTIONS')

ONE_GeoJS_SIGNATURE = [ {country:'string', country_3:'string', ip:'string', name:'string'} ]

function getIpCountryInfo(ip_number){
  country_url = 'https://get.geojs.io/v1/ip/country.json?ip=' + ip_number
  fetch(country_url)
  .then(response => response.json())
  .then(geo_data => {
    if (type_czech.isActive()) {
      type_err = type_czech.checkParam_type(geo_data, ONE_GeoJS_SIGNATURE)
      type_czech.check_assert(type_err, 'Error - GeoJs.io error', geo_data)
    }
    return geo_data
  })
  .then(geo_data => console.log(geo_data[0]))
}

getIpCountryInfo('8.8.8.8') // pass

getIpCountryInfo('error-no-country-ip')  // check_assert fail - country key missing

```




## B Assert checkParam_type() in a Promise<a name="B"></a> - one or more similar objects in an array


Because we cannot ask for <b>one or more</b> objects in an array, unlike ['numbers'], we must build the
signature.
To get one or more countries from GeoJs we must  construct an array of signatures that matches the return result array at runtime with the variable multi_geo_array_signature.

Signatures matched when the number of country objects in the result array is
  
  - 1 - [ ONE_COUNTRY ]
  - 2 - [ ONE_COUNTRY, ONE_COUNTRY ]
  - 3 - [ ONE_COUNTRY, ONE_COUNTRY, ONE_COUNTRY ]
  - 4 - [ ONE_COUNTRY, ONE_COUNTRY, ONE_COUNTRY, ONE_COUNTRY ]


```
type_czech = TypeCzech('THROW-EXCEPTIONS')

ONE_COUNTRY = {country:'string', country_3:'string', ip:'string', name:'string'} 

function getIpCountryInfo(ip_numbers){
  country_url = 'https://get.geojs.io/v1/ip/country.json?ip=' + ip_numbers
  fetch(country_url)
  .then(response => response.json())
  .then(geo_data => {
    if (type_czech.isActive()) {
      multi_geo_array_signature = Array(geo_data.length).fill(ONE_COUNTRY);
      type_err = type_czech.checkParam_type(geo_data, multi_geo_array_signature)
      type_czech.check_assert(type_err, 'Error - GeoJs.io error', geo_data)
    }
    return geo_data
  })
  .then(geo_data => console.dir(geo_data))
}


getIpCountryInfo('8.8.8.8,' + '46.135.0.0,' + '104.200.151.94')
>> Object { country: "US", country_3: "USA", ip: "8.8.8.8", ...}
>> Object { country: "CZ", country_3: "CZE", ip: "46.135.0.0", … }
>> Object { country: "CA", country_3: "CAN", ip: "104.200.151.94", ...}

getIpCountryInfo('fail-no-country-ip')
>>    MESSAGE  Key 'country', which has a type of 'string', is missing in the checked object 
>>    CHECKER check_assert()
>>ACTUAL TYPE 'array'
>>     VALUES [{ip:"fail-no-country-ip"}]
>>     ORIGIN Error - GeoJs.io error

```

&copy; 2022 Steen Hansen 
