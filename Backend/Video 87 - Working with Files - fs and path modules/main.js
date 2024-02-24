const fs = require("fs")

// console.log("Starting")
// fs.writeFileSync('harry.txt', "Harry is good")
// console.log("Ending")

console.log('Starting')

fs.writeFile('harry2.txt', "Harry is a good boy", ()=>{
    console.log("done")
    fs.readFile('harry2.txt', (error, data)=>{
        console.log(data.toString(), error)
    })
})

console.log('ending')

fs.appendFile("harry.txt", "harryrob" , (e, d)=>{
    console.log(d)
})