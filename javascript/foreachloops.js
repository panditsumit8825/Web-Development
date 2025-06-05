const codding = ['js','ruby','java','python','cpp']

// codding.forEach( function (item) {
//     console.log(item);
// })

// codding.forEach( (item) => {
//     console.log(item);
// })

// function PrintMe(item){
//     console.log(item);
// }

// codding.forEach(PrintMe)

// codding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: 'javascript',
        laguagefile: 'js'
    },
     {
        languageName: 'java',
        laguagefile: 'java'
    },
     {
        languageName: 'python',
        laguagefile: 'py'
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})