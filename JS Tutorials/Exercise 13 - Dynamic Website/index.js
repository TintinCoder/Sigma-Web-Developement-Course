const createCard = (thumbnail, title, cName, views, monthsOld)=>{
    const container = document.querySelector(".container")
    let image = document.createElement("img")
    image.classList.add('img')
    image.src = thumbnail;

    let fTitle = document.createElement("h2")
    fTitle.classList.add('title')
    fTitle.innerText = `${title}`

    let fName = document.createElement('p')
    fName.classList.add('info')
    fName.innerText = `${cName}`

    let fViews = document.createElement('p')
    fName.classList.add('info')
    fName.innerText = `${Number.parseInt(views)} K`

    let fMonths = document.createElement('p')
    fName.classList.add('info')
    fName.innerText = `${Number.parseInt(monthsOld)} months`

    let card = document.createElement('div')
    card.classList.add("card")
    card.appendChild(image)
    card.appendChild(fTitle)
    card.appendChild(fName)
    card.appendChild(fViews)
    card.appendChild(fMonths)
    container.appendChild(card)
}

createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A", "Sigma Video - #1", "CodeWithHarry", "2", "10")