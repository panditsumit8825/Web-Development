const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc , curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// } , 0)

const myTotal = myNums.reduce((acc, curval) => acc+curval,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 299,
    },
    {
        itemName: "python course",
        price: 2999,
    },
    {
        itemName: "web course",
        price: 1299,
    },
    {
        itemName: "data science course",
        price: 3299,
    },
]
const PriceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(PriceToPay);