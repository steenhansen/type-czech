
## assert_check()
  -  [1 Assert Check in a Promise](#assert-check-in-a-promise) 

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## 1 Assert check_type() in a Promise<a name="assert-check-in-a-promise"></a>

 Ask [GeoJS](#https://www.geojs.io/) for the country belonging to an ip, [USA 8.8.8.8](#https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8) in this example, and 
 check that the object returned has the expected keys of country/country_3/ip/name.



  
```
type_czech = TypeCzech('LOG-ERRORS')

GeoJS_SIGNATURE = [ {country:'string', country_3:'string', ip:'string', name:'string'} ]

function getIpCountryInfo(ip_numbers){
  country_url = 'https://get.geojs.io/v1/ip/country.json?ip=' + ip_numbers
  fetch(country_url)
  .then(response => response.json())
  .then(geo_data => {
    if (type_czech.isActive()) {
      type_err = type_czech.check_type(geo_data, GeoJS_SIGNATURE)
      type_czech.assert_check(type_err, 'Error - GeoJs.io error', geo_data)
    }
    return geo_data
  })
  .then(geo_data => console.log(geo_data[0]))
}

getIpCountryInfo('8.8.8.8') // pass

getIpCountryInfo('error-no-country')  // assert_check fail - wrong object

```
   

&copy; 2021 Steen Hansen 
