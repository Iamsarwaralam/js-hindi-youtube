const accountId = 144553
let accountEmail = "sarwar@google.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;
// accountId = 2 // not allowed
console.log(accountId);
 /*Prefer not to use var
 because of issue in block scope and functional scope*/

accountEmail = "alam@g.com"
accountPassword = "345644"
accountCity = "Bangaluru"

console.table([accountId, accountEmail, accountPassword, accountCity])

