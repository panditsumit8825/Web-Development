// Dates 

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023 , 9, 24, 7,9)
// let myCreateDate = new Date("2024-01-17")
let myCreateDate = new Date("11-17-2002")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());


// let myTameStamp = Date.now()
// console.log(myTameStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:''
})