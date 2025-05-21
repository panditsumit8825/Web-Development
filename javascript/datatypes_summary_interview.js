// const score = 100;
// let myObj = {
//     name:"Sumit",
//     age: 22,
//     // console.log(myObj);
// }
// console.log(myObj); 


// *********** Memory ************

//  Stack (Primitive type) , heap (Non-Primitive)
let myInstaName = "arts_zone"
let anothername = myInstaName
anothername = "humnava_22"
console.log(myInstaName);
console.log(anothername);

let userOne = {
    email: "usergoogle.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "new@google.com"
console.log(userOne.email);
console.log(userTwo.email); 