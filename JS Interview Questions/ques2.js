// Palindrome Check

let str = 'racdsecar'

const palindromeCheck = (s)=>{
    return s === s.split('').reverse().join('')
}

if(palindromeCheck(str) == true){
    console.log(`Yes, ${str} is a palindrome`)
} else {
    console.log(`No, ${str} is not a palindrome`)
}