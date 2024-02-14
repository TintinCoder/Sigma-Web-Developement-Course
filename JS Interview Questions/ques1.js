// console.log all the names in uppercase in an array

let qArr = [
    {name: "divyam", age: 14, class: 8},
    {name: "rohit", age: 36, class: "NA"},
    {name: "mythpat", age: 25, class: 12},
    {name: "avisha", age: 14, class: 8}
]

// forEach

// qArr.forEach(element => {
//     console.log(element.name.toUpperCase())
// });

// Map

let a = qArr.map((a)=>{
    return a.name.toUpperCase()
})
console.log(a)