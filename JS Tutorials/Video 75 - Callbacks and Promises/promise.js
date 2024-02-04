console.log("Promise.js")

// Promises

let randomPromise = new Promise((resolve, reject)=>{
    let a = (Math.random() * 100).toFixed(0)
    if(a>=50){
        resolve("Greater than 50")
    } else {
        reject("Less than fifty")
    }
})

randomPromise.then((a)=>{
    console.log("Your promise has been successfully resolved")
    console.log(a)
}).catch((b)=>{
    console.log("Oops! Your promise has been rejected")
    console.log(b)
}).finally(()=>{
    console.log("Promise Fulfilled")
})