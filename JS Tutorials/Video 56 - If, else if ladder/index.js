console.log("Started with if, else if in JavaScript")

let age = prompt("Enter your age here -: ")
if(age > 0 && age >= 18){
    console.log("YOU CAN DRIVE")
} else if(age < 18 && age > 0){
    console.log("YOU CANNOT DRIVE")
} else {
    console.log("INVALID AGE")
}