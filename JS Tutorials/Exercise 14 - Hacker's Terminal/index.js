const randomDelay = ()=>{
    return new Promise((resolve, reject)=>{
        timeout = 1 + 6*Math.random()
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    })
}

const addItem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)
}


async function main(){
    setInterval(()=>{
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        } else {
            last.innerHTML+='.';
        }
    }, 100)

    let text = ["Initializing Hacking",
                "Reading your Files",
                "Password files Detected",
                "Sending all passwords and personal files to server",
                "Cleaning Up"]

    
    for (const item of text) {
        await addItem(item)
    }
}

main()