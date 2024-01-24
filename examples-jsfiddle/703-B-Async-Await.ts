
// This example exists to show that TypeScript does not help with runtime type errors that TypeCzech catches.

/*

This is the TypeScript + No-Library (pure JS) code in https://jsfiddle.net/steen_hansen/hydvt4jq/
 
*/


type JSONResponse = {
    args: {correct_key: string}
}

async function fetchJsonTs(the_url:string) :Promise<JSONResponse> {
  let the_response = await fetch(the_url)
  let the_json = await the_response.json()
  return the_json
}
  
fetchJsonTs("https://httpbin.org/anything?correct_key=correct_value")
   .then( the_json=> log("|| typescript gets correct key ", the_json.args) )

fetchJsonTs("https://httpbin.org/anything?wrong_key=wrong_value2")
    .then(no_err_ts => no_err_ts);



