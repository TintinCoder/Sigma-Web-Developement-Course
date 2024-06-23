const addBtn = document.getElementById("addBtn")
const titleInput = document.getElementById('title')
const descInput = document.getElementById('description')

addBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    var notes = localStorage.getItem('notes')
    var notesObj;
    if(notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    var obj = {title: titleInput.value, desc: descInput.value}
    notesObj.push(obj)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    titleInput.value = "";
    descInput.value = "";

    function display(){
        let notesLocal = localStorage.getItem('notes')
        notesObj.forEach((element)=>{
            console.log(element[0])
        })
        let html = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>`
    }
    display()
})


