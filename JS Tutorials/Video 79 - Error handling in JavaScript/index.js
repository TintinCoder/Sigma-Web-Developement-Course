let a = prompt("Enter the first number -: ")
let b = prompt("Enter the second number -: ")

let sum = Number.parseInt(a)+Number.parseInt(b)

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("A non-valid value")
}

console.log("The sum is ", sum)