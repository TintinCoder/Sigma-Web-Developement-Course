const colorBox1 = ()=>{
    let box = document.getElementById("box1")
    let rand = (Math.random()*100).toFixed()

    if(rand>0 && rand<=33){
        box.style.backgroundColor = 'red'
    } else if(rand > 33 && rand <= 66){
        box.style.backgroundColor = 'blue'
    } else if(rand > 66 && rand<= 100){
        box.style.backgroundColor = 'orange'
    }
}

const colorBox2 = ()=>{
    let box = document.getElementById("box2")
    let rand = (Math.random()*100).toFixed()

    if(rand>0 && rand<=33){
        box.style.backgroundColor = 'purple'
    } else if(rand > 33 && rand <= 66){
        box.style.backgroundColor = 'turqoise'
    } else if(rand > 66 && rand<= 100){
        box.style.backgroundColor = 'lightblue'
    }
}

const colorBox3 = ()=>{
    let box = document.getElementById("box3")
    let rand = (Math.random()*100).toFixed()

    if(rand>0 && rand<=33){
        box.style.backgroundColor = 'grey'
    } else if(rand > 33 && rand <= 66){
        box.style.backgroundColor = 'aqua'
    } else if(rand > 66 && rand<= 100){
        box.style.backgroundColor = 'pink'
    }
}

const colorBox4 = ()=>{
    let box = document.getElementById("box4")
    let rand = (Math.random()*100).toFixed()

    if(rand>0 && rand<=33){
        box.style.backgroundColor = '#C1D37F'
    } else if(rand > 33 && rand <= 66){
        box.style.backgroundColor = '#F0E2A3'
    } else if(rand > 66 && rand<= 100){
        box.style.backgroundColor = '#664E4C'
    }
}

const colorBox5 = ()=>{
    let box = document.getElementById("box5")
    let rand = (Math.random()*100).toFixed()

    if(rand>0 && rand<=33){
        box.style.backgroundColor = '#5DFDCB'
    } else if(rand > 33 && rand <= 66){
        box.style.backgroundColor = '#8789C0'
    } else if(rand > 66 && rand<= 100){
        box.style.backgroundColor = '#7CC6FE'
    }
}

colorBox1()
colorBox2()
colorBox3()
colorBox4()
colorBox5()