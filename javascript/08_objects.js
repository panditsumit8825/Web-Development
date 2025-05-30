// singleton 

//  object literals

// Object.create

const mySym = Symbol("Key1")
const jsUser = {
    name: "Sumit",
    "full name": "Sumit kumar",
    age: 19,
    [mySym]:"myKey1",
    location:"Noida",
    email:"kr@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Mondays","Saturdays"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);

// console.log(jsUser.full name);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email="krr@gmail.com"
console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greetingTwo())