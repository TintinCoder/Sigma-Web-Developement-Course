/* The Faulty Calculator Basics

+ ---> -
* ---> +
- ---> /
/ ---> **

*/

let possibity = (Math.random() * 100).toFixed(0);

const num1 = Number.parseInt(prompt("Enter the first number -: "))
const num2 = Number.parseInt(prompt("Enter the second number -: "))
const operator = prompt("Enter the operation you want -: ")

if(possibity <= 10){
    if(operator == "+"){
        alert(num1-num2)
    } else if(operator == "*"){
        alert(num1+num2)
    } else if(operator == "-"){
        alert(num1/num2)
    } else if(operator == "/"){
        alert(num1**num2)
    }
} else if(possibity > 10) {
    if(operator == "+"){
        alert(num1+num2)
    } else if(operator == "-"){
        alert(num1-num2)
    } else if(operator == "*"){
        alert(num1*num2)
    } else if(operator == "/"){
        alert(num1/num2)
    }
}