// Loops in javascript
// 1. For Loop

// let a = 0;
// for (let i = 0; i < 10; i++) {
//     console.log(a++)
// }

// 2. For in
// let obj = {
//     name: "Divyam Yadav",
//     age: 14,
//     class: "IXth G",
//     sport: "Tennis",
//     forFitness: "Gym"
// }

// for (const key in obj) {
//     console.log(obj[key])
// }
// 3. For in

// for (const iterator of ["Divyam", "Rajat", "Kirti", "Harry", "Siddharth"]) {
//     console.log(iterator)
// }

// 4. While Loop
// i = 2;
// while (i>1){
//     console.log(i++)
// }

// 5. Do While Loop
// let i = 0;
// do {
//     console.log(i)
//     i++;
// } while (i<10)

// Questions -->
// let obj = {
//     harry: 98,
//     rohan: 89,
//     akash: 9
// }

// for (const key in obj) {
//     // if (Object.hasOwnProperty.call(object, key)) {
//     const element = obj[key];
//     console.log(element)
// }

// let correctInt = 23;
// let guess

// do {
//     guess = prompt("Guess")
//     if(guess == correctInt){
//         break;
//     } else {
//         continue
//     }
// } while (guess == correctInt)

let a = 0;
for (let i = 0; i < 6; i++) {
    const element = (a[i]);
    a++;
    console.log(element/5)
}