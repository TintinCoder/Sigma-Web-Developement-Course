console.log("Advanced JavaScript")

// IIFE
// async function sleep(){
//     return new Promise((resovle, reject)=>{
//         setTimeout(() => {
//             resovle(45)
//         }, 1000);
//     })
// }
// (async function main(){
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()

// Destructuring

// let [x, y, ...rest] = [1, 5, 7, 8, 9,10]
// console.log(x, y, rest)

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// let {a, b} = obj
// console.log(a, b)

// Spread Operator

const sum = (a, b, c)=>{
    return a+b+c
}

let arr = [1, 61, 8]
console.log(sum(...arr))