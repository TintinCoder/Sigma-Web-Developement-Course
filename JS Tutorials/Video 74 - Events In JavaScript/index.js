let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    alert("i was clicked")
    document.querySelector(".box").innerHTML += "<b>Hey you are clicked, enjoy your click</b>"
})