const accountId = 14433
let accountEmail = "khushboo@google.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;

// accountId = 2  not allowed

accountEmail = "khus@gmail.com"
accountPassword = "103030"
accountCity = "banglore"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var 
because of issue in block scope and functional scope
*/