/* The Faulty Calculator Basics

+ ---> -
* ---> +
- ---> /
/ ---> **

*/

let possibility = (Math.random() * 100).toFixed(0);

let num1 = Number.parseInt(prompt("Enter the first number --> "))
let num2 = Number.parseInt(prompt("Enter the second number --> "))
let operation = prompt('Enter the operation --> ')
console.log(possibility)

if(possibility > 0 && possibility <=10){
    if(operation == "+"){
        console.log(num1-num2)
    } else if(operation == '-'){
        console.log(num1/num2)
    } else if(operation == '*'){
        console.log(num1+num2)
    } else if(operation == '/'){
        console.log(num1**num2)
    }
} else {
    if(operation == "+"){
        console.log(num1+num2)
    } else if(operation == '-'){
        console.log(num1-num2)
    } else if(operation == '*'){
        console.log(num1*num2)
    } else if(operation == '/'){
        console.log(num1/num2)
    }
}