const accountId = 126794
let accountEmail = "darshit@google.com"
var accountPassword = "12345"
accountCity = "Haldwani"
let accountState

//accountId=2// not allowed

accountEmail = "dh@email.com"
accountPassword = "12233455"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])