
window.addEventListener('load', start)

async function start(){
    const quoteList = await fetch("https://type.fit/api/quotes")
    const oneQoute = await quoteList.json()

    var item = oneQoute[Math.floor(Math.random() * oneQoute.length)]; 
    const quoteText = document.querySelector('h2')
    quoteText.innerHTML = JSON.stringify(item.text) + ' - ' + JSON.stringify(item.author)
    
    const result = await fetch('/api/flowers')
    const flowers = await result.json()

    addEventListeners()
    listFlowers(flowers)
}

function listFlowers(flowers){
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    for (const flower of flowers){
        listFlower(flower, ul)
    }
}

function listFlower(flower, ul){
    const li = document.createElement('li')
    li.innerHTML = JSON.stringify(flower.Color + " " + flower.Name)
    ul.append(li)
}

function addEventListeners(){
    const button = document.querySelector('button')
    button.onclick = addFlower
} 

async function addFlower(){
    const color = document.getElementById('color')
    const name = document.getElementById('name')
    const flower = {Color: color.value, Name: name.value}
    
    event.preventDefault()
    event.target
    
    start()
    makeRequest(flower)
}

async function makeRequest(flower) {
    const url = 'http://localhost:3000/api/flowers'

    const response = await fetch(url, {
        headers: { "Content-Type": "application/json" }, 
        method: 'POST',
        body: JSON.stringify(flower)
    })
    
    const data= await response.json()
}
