// console.log("s");
// console.log("u");
// function loginUserName(username){
//     if(username==undefined){
//         console.log("Please enter a username")
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserName("hitesh"))
// console.log(loginUserName())

function calculateCartPrice(val1, val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))
const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"Ram",
    Price: 399
})

const myNewArray = [200,400,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))