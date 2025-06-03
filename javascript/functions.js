console.log("s");
console.log("u");
function loginUserName(username){
    if(username==undefined){
        console.log("Please enter a username")
    }
    return `${username} just logged in`
}
// console.log(loginUserName("hitesh"))
console.log(loginUserName())