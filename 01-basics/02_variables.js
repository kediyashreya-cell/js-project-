const accountId = 14452
let accountEmail = "kediyashreya@gmail.com"
var accountPassword = "12345"
accountCity = "surat"
let accountState;

// accountId = 2 // not allowed 
// prefer not to use var because of issues in block scope and functional scope

accountEmail = "shreya@xyz"
accountPassword = "3258"
accountCity = "pink"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])