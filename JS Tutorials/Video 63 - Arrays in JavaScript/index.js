console.log("Arrays in JavaScript")

let arr = [1, "Divyam", {age: 13}, [10, 12]]

// console.log(arr.toString())
// console.log(arr.pop(1))
// arr.push("Divyam Yadav")
// console.log(arr.sort())
let numbers = [1, 2, 3, 4, 5]
// numbers.splice(1, 4)
// console.log(numbers)
// console.log(numbers.slice(0, 3))

// Looping through Arrays

// 1. For Each

// numbers.forEach((value, index, element)=>{
//     console.log(value, index, element)
// })

// 2. For in

// let obj = {
//     a:1,
//     b: 2,
//     c:3
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
//     }
// }

// 3. For of
// for (const iterator of numbers) {
//     for (const key in numbers) {
//         if (Object.hasOwnProperty.call(numbers, key)) {
//             const element = numbers[key];
            
//         }
//     }
// }

// 4. Map()

let a = [1, 13, 5, 7, 11]
let newArr = a.map((e)=>{
    return e**2;
})

console.log(newArr)

// 5. Filter
const greaterThanSeven = (e)=>{
    if(e>7){
        return true;
    } else {
        return false;
    }
}
console.log(newArr.filter(greaterThanSeven))

// 5. Reduce

let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a, b)=>{
    return a*b;
}

console.log(arr2.reduce(red))

// Array.from

let obj2 = {
    age: 13,
    hobby: "tennis, coding",
    skill: "programming"
}

console.log(Array.from(obj2))