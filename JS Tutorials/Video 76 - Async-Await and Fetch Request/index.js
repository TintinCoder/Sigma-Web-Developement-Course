// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455) 
//         }, 3500);
//     })
// }

async function getData(){
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await x.json();
    console.log(data)
    return 455;
}

async function main(){
    console.log("Loading Modules")
    console.log("Do Something Else")
    
    let data = await getData()
    console.log(data)
    
    console.log("Load Data")
    console.log("Process Data")
}

main()